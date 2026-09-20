export interface Course {
  slug: string;
  title: string;
  /** paper chapter number, e.g. "3" for Stocks */
  section: string;
  description: string;
  status: "available" | "coming-soon";
  strategyCount: number;
  /** for coming-soon courses only — real strategy titles from the paper, so the
   * course reads as a populated roadmap rather than an empty placeholder */
  strategyTitles?: string[];
}
