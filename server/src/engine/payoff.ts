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

  const candidateSpots = new Set<number>([0]);
  for (const p of prices) candidateSpots.add(Math.max(p, 0));
  const exactPnls = [...candidateSpots].map((s) => payoffAt(strategy, params, s));

  const pnls = [...analysisCurve.map((p) => p.pnl), ...exactPnls];
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
