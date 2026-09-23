export interface Course {
  slug: string;
  title: string;
  /** paper chapter number, e.g. "3" for Stocks */
  section: string;
  description: string;
  status: "available" | "coming-soon";
  strategyCount: number;
  /** Real strategy titles from the paper's table of contents, verbatim. For a
   * coming-soon course this lets it read as a populated roadmap rather than an
   * empty placeholder; for an available course, matching a concept lesson's
   * title against this list is also how isPaperStrategy() (see curriculum/index.ts)
   * decides whether that lesson gets the "Strategy" badge. Options has no
   * entry here since every one of its lessons is kind: "strategy" already. */
  strategyTitles?: string[];
}
