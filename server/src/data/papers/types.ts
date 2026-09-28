export type PaperCategory =
  | "asset-pricing-portfolio-theory"
  | "derivatives-pricing"
  | "factor-investing"
  | "risk-management"
  | "market-microstructure-execution";

export type PaperLevel = "intermediate" | "advanced";

export interface Paper {
  slug: string;
  title: string;
  authors: string;
  year: number;
  /** journal, publisher, or working-paper venue — citation metadata, not the paper's text */
  venue: string;
  category: PaperCategory;
  level: PaperLevel;
  /** what the paper actually shows, in our own words — never quoted from the paper itself */
  summary: string;
  /** why it's still cited/foundational — a field/discipline framing, not a fabricated named quote */
  whyItsHere: string;
  /**
   * Where to get the paper. "ssrn" = a free SSRN page (verified to host this work);
   * "publisher" = its DOI, which resolves to the journal page (PDF may need a subscription).
   */
  link: { kind: "ssrn" | "publisher"; url: string };
}
