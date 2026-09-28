export type PaperCategory =
  | "asset-pricing-portfolio-theory"
  | "derivatives-pricing"
  | "factor-investing"
  | "risk-management"
  | "market-microstructure-execution"
  | "machine-learning";

export type PaperLevel = "intermediate" | "advanced";

export interface Paper {
  slug: string;
  title: string;
  authors: string;
  year: number;
  venue: string;
  category: PaperCategory;
  level: PaperLevel;
  summary: string;
  whyItsHere: string;
  link: { kind: "ssrn" | "ssrn-excerpt" | "publisher" | "book"; url: string };
}

export interface PaperCategoryInfo {
  slug: PaperCategory;
  title: string;
  description: string;
}

export interface PapersResponse {
  categories: PaperCategoryInfo[];
  papers: Paper[];
}
