import type { Strategy, OptionType, Side } from "../types/strategy";

export interface LegInput {
  instrument: OptionType | "stock";
  side: Side;
  /** Undefined for a stock leg. */
  strike?: number;
  qty: number;
}

function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) [a, b] = [b, a % b];
  return a || 1;
}

/**
 * A position's "shape" independent of the actual strike prices or contract count used — the
 * same shape a straddle has whether it's struck at $50 or $500, one contract or ten. Built by:
 * (1) ranking each option leg's strike among the position's distinct strikes (so a straddle,
 * where both legs share one strike, is structurally different from a strangle, where they
 * don't, regardless of the actual numbers), and (2) reducing every leg's quantity by their
 * greatest common divisor, so a 2-short/3-long ratio spread matches whether it's built at 2:3
 * or 20:30. Two positions with the same shape produce the same signature string.
 */
export function canonicalSignature(legs: LegInput[]): string {
  if (legs.length === 0) return "[]";

  const optionStrikes = [...new Set(legs.filter((l) => l.instrument !== "stock").map((l) => l.strike!))].sort(
    (a, b) => a - b,
  );
  const rankOf = (strike: number) => optionStrikes.indexOf(strike);

  const qtyGcd = legs.map((l) => l.qty).reduce((a, b) => gcd(a, b));

  const tuples = legs.map((l) => ({
    instrument: l.instrument,
    side: l.side,
    rank: l.instrument === "stock" ? -1 : rankOf(l.strike!),
    qty: l.qty / qtyGcd,
  }));

  tuples.sort(
    (a, b) =>
      a.rank - b.rank ||
      a.instrument.localeCompare(b.instrument) ||
      a.side.localeCompare(b.side) ||
      a.qty - b.qty,
  );

  return JSON.stringify(tuples);
}

/** Resolves a strategy's leg templates to concrete legs using its own default parameter values. */
function legsFromStrategy(strategy: Strategy): LegInput[] {
  const defaults: Record<string, number> = {};
  for (const p of strategy.params) defaults[p.key] = p.default;

  return (strategy.legs ?? []).map((leg) => ({
    instrument: leg.instrument,
    side: leg.side,
    strike: leg.instrument === "stock" ? undefined : (defaults[leg.strikeKey!] ?? 0),
    qty: leg.qty ?? (leg.qtyKey ? (defaults[leg.qtyKey] ?? 1) : 1),
  }));
}

export function buildSignatureIndex(strategies: Strategy[]): Map<string, Strategy> {
  const index = new Map<string, Strategy>();
  for (const strategy of strategies) {
    if (strategy.engine !== "intrinsic") continue;
    const signature = canonicalSignature(legsFromStrategy(strategy));
    // Earlier entries win on a collision — in practice no two course strategies share a shape.
    if (!index.has(signature)) index.set(signature, strategy);
  }
  return index;
}

export function matchStrategy(legs: LegInput[], index: Map<string, Strategy>): Strategy | null {
  return index.get(canonicalSignature(legs)) ?? null;
}
