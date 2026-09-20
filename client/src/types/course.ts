export interface Course {
  slug: string;
  title: string;
  section: string;
  description: string;
  status: "available" | "coming-soon";
  strategyCount: number;
  strategyTitles?: string[];
}
