// The standalone practice tools, for places that link to them directly (the footer). The Practice page
// presents each tool in full, so when a tool is added there, add its entry here too.
export interface PracticeToolLink {
  slug: string;
  title: string;
}

export const PRACTICE_TOOL_LINKS: PracticeToolLink[] = [
  { slug: "options-payoff-simulator", title: "Options Payoff Simulator" },
];
