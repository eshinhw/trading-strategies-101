import type { Strategy } from "../../types.js";
import type { ParamValues } from "../../engine/payoff.js";

/**
 * Generates the parameter set a learner sees for a strategy's knowledge check.
 * Starts from the strategy's curated defaults (already tuned to produce a
 * sensible, illustrative payoff shape) and shifts every price-like param
 * (spot + strikes) by the same random offset, so relative spacing — and thus
 * which legs are ITM/OTM — is preserved, but the exact numbers differ each
 * attempt. Quantities, IV, rate, and days-to-expiry are left at their
 * defaults, since randomizing those risks producing a degenerate scenario.
 */
export function generatePracticeParams(strategy: Strategy): ParamValues {
  const shift = Math.round(Math.random() * 30 - 15); // integer in [-15, 15]

  const isPriceKey = (key: string) => /^K/i.test(key) || key === "S0";
  const calendarPriceKeys = strategy.calendar
    ? [strategy.calendar.shortStrikeKey, strategy.calendar.longStrikeKey]
    : [];

  const params: ParamValues = {};
  for (const p of strategy.params) {
    const shouldShift = isPriceKey(p.key) || calendarPriceKeys.includes(p.key);
    const shifted = shouldShift ? p.default + shift : p.default;
    // clamp into the param's own valid range and respect its step
    const clamped = Math.min(p.max, Math.max(p.min, shifted));
    const snapped = Math.round(clamped / p.step) * p.step;
    params[p.key] = snapped;
  }
  return params;
}
