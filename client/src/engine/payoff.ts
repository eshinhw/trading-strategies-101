import type { Strategy } from "../types/strategy";
import { blackScholes } from "./blackScholes";

export type ParamValues = Record<string, number>;

function intrinsic(instrument: "call" | "put", strike: number, spot: number): number {
  return instrument === "call" ? Math.max(spot - strike, 0) : Math.max(strike - spot, 0);
}

/** Payoff at maturity for a single spot price, for legs-based (single-expiration) strategies. */
export function intrinsicPayoffAt(strategy: Strategy, params: ParamValues, spot: number): number {
  const legs = strategy.legs ?? [];
  const netCF = params.netCF ?? 0;

  let total = netCF;
  for (const leg of legs) {
    const qty = leg.qty ?? (leg.qtyKey ? params[leg.qtyKey] ?? 1 : 1);
    const sign = leg.side === "long" ? 1 : -1;

    if (leg.instrument === "stock") {
      const s0 = params.S0 ?? spot;
      total += sign * qty * (spot - s0);
    } else {
      const strike = params[leg.strikeKey!] ?? 0;
      total += sign * qty * intrinsic(leg.instrument, strike, spot);
    }
  }
  return total;
}

/** Payoff at the short leg's expiration for calendar/diagonal (two-expiration) strategies. */
export function calendarPayoffAt(strategy: Strategy, params: ParamValues, spot: number): number {
  const cfg = strategy.calendar!;
  const shortStrike = params[cfg.shortStrikeKey];
  const longStrike = params[cfg.longStrikeKey];
  const daysShort = params[cfg.daysToShortExpiryKey];
  const daysLong = params[cfg.daysToLongExpiryKey];
  const iv = (params[cfg.ivKey] ?? 30) / 100;
  const rate = (params[cfg.rateKey] ?? 2) / 100;
  const debit = params[cfg.debitKey] ?? 0;

  const remainingYears = Math.max(daysLong - daysShort, 0) / 365;
  const longLegValue = blackScholes(spot, longStrike, remainingYears, rate, iv, cfg.optionType);
  const shortLegPayout = intrinsic(cfg.optionType, shortStrike, spot);

  return longLegValue - shortLegPayout + debit;
}

export function payoffAt(strategy: Strategy, params: ParamValues, spot: number): number {
  return strategy.engine === "calendar"
    ? calendarPayoffAt(strategy, params, spot)
    : intrinsicPayoffAt(strategy, params, spot);
}

export interface PayoffPoint {
  spot: number;
  pnl: number;
}

/** Reference prices (spot + all strikes) used to size both the display range and the analysis range. */
function referencePrices(strategy: Strategy, params: ParamValues): number[] {
  const prices: number[] = [];
  if (params.S0) prices.push(params.S0);
  for (const p of strategy.params) {
    if (/^K/i.test(p.key) || p.key === "S0") prices.push(params[p.key] ?? p.default);
  }
  if (strategy.calendar) {
    prices.push(params[strategy.calendar.shortStrikeKey], params[strategy.calendar.longStrikeKey]);
  }
  return prices.length ? prices : [100];
}

/** Sensible default plot range for the chart: spans reference prices with padding, floored at 0. */
export function defaultRange(strategy: Strategy, params: ParamValues): [number, number] {
  const prices = referencePrices(strategy, params);
  const lo = Math.min(...prices);
  const hi = Math.max(...prices);
  const span = Math.max(hi - lo, 20);
  const pad = span * 0.8;
  return [Math.max(lo - pad, 0), hi + pad];
}

export function buildCurve(
  strategy: Strategy,
  params: ParamValues,
  rangeMin: number,
  rangeMax: number,
  steps = 400,
): PayoffPoint[] {
  const curve: PayoffPoint[] = [];
  const stepSize = (rangeMax - rangeMin) / steps;
  for (let i = 0; i <= steps; i++) {
    const spot = rangeMin + i * stepSize;
    curve.push({ spot, pnl: payoffAt(strategy, params, spot) });
  }
  return curve;
}

export interface PayoffStats {
  curve: PayoffPoint[];
  breakevens: number[];
  maxProfit: number | "unlimited";
  maxLoss: number | "unlimited";
}

/**
 * Computes the payoff curve for display plus the true breakeven(s), max profit and max loss.
 * The curve is intrinsic-value payoffs are piecewise LINEAR in the spot price, with kinks only
 * at strikes — so away from the outermost strikes on either side, the payoff is a straight line.
 * That means: (a) whether profit/loss is unlimited can be read off the slope far to the right,
 * and (b) the true worst/best case on the bounded (left) side is either at a kink (a strike) or
 * at S_T = 0, never in between. To get this right we analyze over a wide range from 0 out past
 * every strike, independent of the (usually tighter, more readable) range used to draw the chart.
 */
export function computePayoffStats(
  strategy: Strategy,
  params: ParamValues,
  displayMin: number,
  displayMax: number,
  steps = 400,
): PayoffStats {
  const curve = buildCurve(strategy, params, displayMin, displayMax, steps);

  const prices = referencePrices(strategy, params);
  const highest = Math.max(...prices);
  const analysisMax = highest * 4 + 200;
  const analysisCurve = buildCurve(strategy, params, 0, analysisMax, 800);

  const breakevens: number[] = [];
  for (let i = 1; i < analysisCurve.length; i++) {
    const a = analysisCurve[i - 1];
    const b = analysisCurve[i];
    if (a.pnl === 0) {
      breakevens.push(a.spot);
    } else if ((a.pnl < 0 && b.pnl > 0) || (a.pnl > 0 && b.pnl < 0)) {
      const t = -a.pnl / (b.pnl - a.pnl);
      breakevens.push(a.spot + t * (b.spot - a.spot));
    }
  }

  // For intrinsic-value strategies, payoff is piecewise LINEAR with kinks only at strikes,
  // so the true (bounded-side) extrema sit exactly at a strike or at S_T=0 — grid sampling
  // alone can miss a peak by up to one step. Evaluate those candidate points exactly and fold
  // them into the extrema so max profit / max loss read as clean, exact numbers.
  const candidateSpots = new Set<number>([0]);
  for (const p of prices) candidateSpots.add(Math.max(p, 0));
  const exactPnls = [...candidateSpots].map((s) => payoffAt(strategy, params, s));

  const pnls = [...analysisCurve.map((p) => p.pnl), ...exactPnls];
  const boundedMaxPnl = Math.max(...pnls);
  const boundedMinPnl = Math.min(...pnls);

  // slope far out on the right edge — if it's still non-zero, profit/loss keeps growing (unlimited)
  const tailSlope =
    (analysisCurve[analysisCurve.length - 1].pnl - analysisCurve[analysisCurve.length - 5].pnl) /
    (4 * (analysisMax / 800));
  const slopeEps = 1e-3;

  const maxProfit: number | "unlimited" =
    tailSlope > slopeEps ? "unlimited" : Math.max(boundedMaxPnl, 0);
  const maxLoss: number | "unlimited" =
    tailSlope < -slopeEps ? "unlimited" : Math.max(-boundedMinPnl, 0);

  return { curve, breakevens, maxProfit, maxLoss };
}
