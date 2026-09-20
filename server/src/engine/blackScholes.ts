// Minimal Black-Scholes pricer, used only to value the still-alive long leg
// of calendar/diagonal spreads at the short leg's expiration.
// Mirrors client/src/engine/blackScholes.ts — kept in sync manually.

function erf(x: number): number {
  // Abramowitz & Stegun 7.1.26 approximation
  const sign = x < 0 ? -1 : 1;
  const ax = Math.abs(x);
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;
  const t = 1 / (1 + p * ax);
  const y = 1 - ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-ax * ax);
  return sign * y;
}

function normCdf(x: number): number {
  return 0.5 * (1 + erf(x / Math.SQRT2));
}

export function blackScholes(
  spot: number,
  strike: number,
  yearsToExpiry: number,
  rate: number,
  vol: number,
  type: "call" | "put",
): number {
  if (yearsToExpiry <= 0) {
    return type === "call" ? Math.max(spot - strike, 0) : Math.max(strike - spot, 0);
  }
  if (vol <= 0) vol = 0.0001;

  const d1 =
    (Math.log(spot / strike) + (rate + (vol * vol) / 2) * yearsToExpiry) /
    (vol * Math.sqrt(yearsToExpiry));
  const d2 = d1 - vol * Math.sqrt(yearsToExpiry);

  if (type === "call") {
    return spot * normCdf(d1) - strike * Math.exp(-rate * yearsToExpiry) * normCdf(d2);
  }
  return strike * Math.exp(-rate * yearsToExpiry) * normCdf(-d2) - spot * normCdf(-d1);
}
