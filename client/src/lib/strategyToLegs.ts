import type { OptionType, Side, Strategy } from "../types/strategy";

export interface SimulatorLeg {
  instrument: OptionType | "stock";
  side: Side;
  strike: number;
  qty: number;
}

/** The simulator holds at most this many legs. */
export const SIMULATOR_MAX_LEGS = 4;

// Turns a course strategy into the legs the Options Payoff Simulator builds from, using the strategy's own
// default strikes and spot. Returns null for strategies the simulator can't represent (calendar spreads, which
// depend on two expiries, or anything with more legs than the simulator allows).
export function legsFromStrategy(strategy: Strategy): { legs: SimulatorLeg[]; spot: number | null } | null {
  if (strategy.engine !== "intrinsic" || !strategy.legs || strategy.legs.length === 0) return null;
  if (strategy.legs.length > SIMULATOR_MAX_LEGS) return null;

  const defaults = new Map(strategy.params.map((p) => [p.key, p.default]));
  const legs: SimulatorLeg[] = [];
  for (const leg of strategy.legs) {
    const strike = leg.strikeKey ? defaults.get(leg.strikeKey) : undefined;
    if (leg.instrument !== "stock" && strike === undefined) return null;
    const qty = leg.qty ?? (leg.qtyKey ? defaults.get(leg.qtyKey) : undefined) ?? 1;
    legs.push({ instrument: leg.instrument, side: leg.side, strike: strike ?? 0, qty: Math.max(1, Math.round(qty)) });
  }
  return { legs, spot: defaults.get("S0") ?? null };
}
