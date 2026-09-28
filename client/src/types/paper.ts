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
  venue: string;
  category: PaperCategory;
  level: PaperLevel;
  summary: string;
  whyItsHere: string;
  link: { kind: "ssrn" | "publisher"; url: string };
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
