export type BookCategory =
  | "quant-derivatives"
  | "market-structure"
  | "psychology-process"
  | "fundamentals-valuation"
  | "memoirs-history";

export type BookLevel = "beginner" | "intermediate" | "advanced";

export interface Book {
  slug: string;
  title: string;
  author: string;
  year: number;
  category: BookCategory;
  level: BookLevel;
  /** what the book actually covers */
  summary: string;
  /** why it keeps showing up on industry reading lists — a role/desk framing, not a fabricated named quote */
  whyItsHere: string;
  /** optional direct amazon.com product link; when omitted, the API falls back to an amazon.com search for the title + author */
  amazonUrl?: string;
}
