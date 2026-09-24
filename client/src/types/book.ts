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
  summary: string;
  whyItsHere: string;
}

export interface BookCategoryInfo {
  slug: BookCategory;
  title: string;
  description: string;
}

export interface BooksResponse {
  categories: BookCategoryInfo[];
  books: Book[];
}
