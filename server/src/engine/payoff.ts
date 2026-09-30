import type { Strategy } from "../types.js";
import { blackScholes } from "./blackScholes.js";

// Mirrors client/src/engine/payoff.ts — kept in sync manually. Used server-side
// as the authoritative source of truth for grading knowledge-check answers, so
// a learner can't spoof correct answers by tampering with client-side math.

export type ParamValues = Record<string, number>;

function intrinsic(instrument: "call" | "put", strike: number, spot: number): number {
  return instrument === "call" ? Math.max(spot - strike, 0) : Math.max(strike - spot, 0);
}

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

function buildCurve(
  strategy: Strategy,
  params: ParamValues,
  rangeMin: number,
  rangeMax: number,
  steps: number,
) {
  const curve: { spot: number; pnl: number }[] = [];
  const stepSize = (rangeMax - rangeMin) / steps;
  for (let i = 0; i <= steps; i++) {
    const spot = rangeMin + i * stepSize;
    curve.push({ spot, pnl: payoffAt(strategy, params, spot) });
  }
  return curve;
}

export interface PayoffStats {
  breakevens: number[];
  maxProfit: number | "unlimited";
  maxLoss: number | "unlimited";
}

/** Same numeric approach as the client engine — see client/src/engine/payoff.ts for the full explanation. */
export function computePayoffStats(strategy: Strategy, params: ParamValues): PayoffStats {
  const prices = referencePrices(strategy, params);
  const highest = Math.max(...prices);
  const analysisMax = highest * 4 + 200;
  const analysisCurve = buildCurve(strategy, params, 0, analysisMax, 800);

  // For intrinsic-value strategies, payoff is piecewise LINEAR with kinks only at strikes,
  // so the true (bounded-side) extrema — and every breakeven — sit exactly at a strike, at
  // S_T=0, or on the straight line between two consecutive strikes. Evaluate those candidate
  // "kink" points exactly (rather than scanning hundreds of grid samples) so max profit / max
  // loss read as clean, exact numbers, and so breakevens are found from real sign changes
  // between exact values instead of from floating-point noise on a sampled curve. That last
  // part matters more than it sounds: if a strategy's capped profit or loss happens to equal
  // exactly $0 (e.g. a covered call where strike − stock price + premium == 0), the payoff is
  // flat at exactly 0 across that whole capped region, and a grid-sampling approach reports a
  // "breakeven" at every sample point in that flat stretch instead of the single true one.
  const candidateSpots = new Set<number>([0]);
  for (const p of prices) candidateSpots.add(Math.max(p, 0));
  const kinks = [...candidateSpots].sort((a, b) => a - b);
  kinks.push(analysisMax); // far-right sentinel, to also cover the unbounded rightmost segment
  const kinkPnls = kinks.map((s) => payoffAt(strategy, params, s));

  const breakevens: number[] = [];
  const zeroEps = 1e-6;
  let inZeroRun = false;
  for (let i = 0; i < kinks.length; i++) {
    const pnl = kinkPnls[i];
    const isZero = Math.abs(pnl) < zeroEps;
    if (isZero) {
      if (!inZeroRun) breakevens.push(kinks[i]);
      inZeroRun = true;
      continue;
    }
    inZeroRun = false;
    if (i === 0) continue;
    const prevPnl = kinkPnls[i - 1];
    if ((prevPnl < 0 && pnl > 0) || (prevPnl > 0 && pnl < 0)) {
      const t = -prevPnl / (pnl - prevPnl);
      breakevens.push(kinks[i - 1] + t * (kinks[i] - kinks[i - 1]));
    }
  }

  const pnls = [...analysisCurve.map((p) => p.pnl), ...kinkPnls];
  const boundedMaxPnl = Math.max(...pnls);
  const boundedMinPnl = Math.min(...pnls);

  const tailSlope =
    (analysisCurve[analysisCurve.length - 1].pnl - analysisCurve[analysisCurve.length - 5].pnl) /
    (4 * (analysisMax / 800));
  const slopeEps = 1e-3;

  const maxProfit: number | "unlimited" =
    tailSlope > slopeEps ? "unlimited" : Math.max(boundedMaxPnl, 0);
  const maxLoss: number | "unlimited" =
    tailSlope < -slopeEps ? "unlimited" : Math.max(-boundedMinPnl, 0);

  return { breakevens, maxProfit, maxLoss };
}
