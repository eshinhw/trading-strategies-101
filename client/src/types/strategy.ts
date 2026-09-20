// Mirrors server/src/types.ts — kept in sync manually since client and server
// are separate npm packages without a shared workspace package.

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

export interface Leg {
  instrument: OptionType | "stock";
  side: Side;
  strikeKey?: string;
  qtyKey?: string;
  qty?: number;
}

export interface ParamDef {
  key: string;
  label: string;
  default: number;
  min: number;
  max: number;
  step: number;
  hint?: string;
}

export interface CalendarConfig {
  optionType: OptionType;
  shortStrikeKey: string;
  longStrikeKey: string;
  daysToShortExpiryKey: string;
  daysToLongExpiryKey: string;
  ivKey: string;
  rateKey: string;
  debitKey: string;
}

export interface StrategyContent {
  summary: string;
  whenToUse: string;
  whyUse: string;
  howToUse: string;
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
  section: string;
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

export interface StrategySummary {
  slug: string;
  name: string;
  aka?: string;
  section: string;
  outlook: Outlook;
  style: StrategyStyle;
  netPosition: NetPosition;
  legCount: number;
  summary: string;
}
