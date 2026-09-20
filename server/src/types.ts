// Core domain types for an options strategy entry.
// These are served as-is over the API and consumed by the client, which runs
// the actual payoff math (see client/src/engine) against user-adjusted params.

export type Outlook = "bullish" | "bearish" | "neutral";

export type StrategyStyle =
  | "income"
  | "capital-gain"
  | "hedging"
  | "volatility"
  | "sideways";

export type NetPosition = "debit" | "credit" | "zero-cost" | "either";

export type OptionType = "call" | "put";
export type Side = "long" | "short";

/** One leg of an options structure. `strikeKey` / `qtyKey` reference entries in `params`. */
export interface Leg {
  instrument: OptionType | "stock";
  side: Side;
  /** params key holding this leg's strike price (omitted for stock legs) */
  strikeKey?: string;
  /** params key holding this leg's quantity multiplier; defaults to 1 */
  qtyKey?: string;
  /** fixed quantity multiplier, used when the ratio isn't a user-adjustable param; defaults to 1 */
  qty?: number;
}

/** A user-adjustable numeric input (strike, spot, premium, quantity, etc). */
export interface ParamDef {
  key: string;
  label: string;
  default: number;
  min: number;
  max: number;
  step: number;
  /** short hint, e.g. "Net credit received at entry" */
  hint?: string;
}

/** Extra params needed only by the calendar/diagonal (two-expiration) engine. */
export interface CalendarConfig {
  optionType: OptionType;
  /** param key: strike of the short-dated (near) leg */
  shortStrikeKey: string;
  /** param key: strike of the long-dated (far) leg */
  longStrikeKey: string;
  /** param key: days to the short leg's expiration (also the valuation date) */
  daysToShortExpiryKey: string;
  /** param key: days to the long leg's expiration */
  daysToLongExpiryKey: string;
  /** param key: implied volatility, as a percent (e.g. 30 = 30%) */
  ivKey: string;
  /** param key: risk-free rate, as a percent */
  rateKey: string;
  /** param key: net debit paid at entry */
  debitKey: string;
}

export interface StrategyContent {
  /** one-sentence definition */
  summary: string;
  /** scenario-based: the market setup / belief that leads a trader here */
  whenToUse: string;
  /** the rationale / payoff tradeoff this strategy is chosen for */
  whyUse: string;
  /** concrete mechanics: which legs to open, in plain language */
  howToUse: string;
  /** a short narrative example with made-up but realistic numbers */
  scenario: string;
}

export interface PaperFormulas {
  payoff: string;
  breakeven: string;
  maxProfit: string;
  maxLoss: string;
}

export interface Strategy {
  slug: string;
  name: string;
  aka?: string;
  section: string; // paper section number, e.g. "2.6"
  outlook: Outlook;
  style: StrategyStyle;
  netPosition: NetPosition;
  legCount: number;
  engine: "intrinsic" | "calendar";
  legs?: Leg[];
  calendar?: CalendarConfig;
  params: ParamDef[];
  content: StrategyContent;
  formulas: PaperFormulas;
}
