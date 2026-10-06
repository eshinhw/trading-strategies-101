// Black-Scholes price and Greeks for a European option on a non-dividend-paying stock, per share. Used by the
// Greeks Explorer, which is a teaching tool: the formulas are the textbook closed forms.

export type OptionKind = "call" | "put";

export interface GreekInputs {
  spot: number;
  strike: number;
  /** calendar days to expiration */
  days: number;
  /** annualised volatility as a decimal, e.g. 0.30 */
  vol: number;
  /** annualised risk-free rate as a decimal, e.g. 0.02 */
  rate: number;
  type: OptionKind;
}

export interface Greeks {
  price: number;
  /** change in price for a $1 move in the stock */
  delta: number;
  /** change in delta for a $1 move in the stock */
  gamma: number;
  /** change in price per calendar day */
  theta: number;
  /** change in price for a 1-point (0.01) change in volatility */
  vega: number;
  /** change in price for a 1-point (0.01) change in the interest rate */
  rho: number;
}

export type GreekName = keyof Greeks;

function erf(x: number): number {
  // Abramowitz & Stegun 7.1.26
  const sign = x < 0 ? -1 : 1;
  const ax = Math.abs(x);
  const t = 1 / (1 + 0.3275911 * ax);
  const y = 1 - ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-ax * ax);
  return sign * y;
}

const normCdf = (x: number) => 0.5 * (1 + erf(x / Math.SQRT2));
const normPdf = (x: number) => Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI);

export function greeksOf({ spot, strike, days, vol, rate, type }: GreekInputs): Greeks {
  // keep the inputs inside what the formulas can handle
  const S = Math.max(spot, 0.01);
  const K = Math.max(strike, 0.01);
  const T = Math.max(days, 0.05) / 365;
  const sigma = Math.max(vol, 0.0005);
  const sqrtT = Math.sqrt(T);

  const d1 = (Math.log(S / K) + (rate + (sigma * sigma) / 2) * T) / (sigma * sqrtT);
  const d2 = d1 - sigma * sqrtT;
  const discount = Math.exp(-rate * T);
  const pdf = normPdf(d1);

  const call = type === "call";
  const price = call ? S * normCdf(d1) - K * discount * normCdf(d2) : K * discount * normCdf(-d2) - S * normCdf(-d1);
  const delta = call ? normCdf(d1) : normCdf(d1) - 1;
  const gamma = pdf / (S * sigma * sqrtT);
  const decay = -(S * pdf * sigma) / (2 * sqrtT);
  const thetaYear = call ? decay - rate * K * discount * normCdf(d2) : decay + rate * K * discount * normCdf(-d2);
  const vega = S * pdf * sqrtT;
  const rhoRaw = call ? K * T * discount * normCdf(d2) : -K * T * discount * normCdf(-d2);

  return {
    price,
    delta,
    gamma,
    theta: thetaYear / 365,
    vega: vega / 100,
    rho: rhoRaw / 100,
  };
}
