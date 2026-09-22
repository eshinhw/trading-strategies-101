import type { ConstructionExercise } from "./types.js";

// First batch: three scenarios built from the Income Strategies module's strategies.
// Each has 2-3 candidate strategies where exactly one can satisfy the goal — the
// others fail for a specific, teachable reason (wrong outlook, wrong cash-flow
// direction, or a structural cap the params can't get around).
export const constructionExercises: ConstructionExercise[] = [
  {
    slug: "protect-the-gains",
    moduleSlug: "income-strategies",
    title: "Protect the gains, keep the upside",
    scenario:
      "You bought the stock and it's had a strong run. You're still bullish, but you want a floor under your downside — even if it costs you a premium — while keeping unlimited upside if it keeps climbing.",
    candidateStrategySlugs: ["protective-put", "covered-call", "collar"],
    goal: {
      kind: "all",
      goals: [
        { kind: "outlookMatches", outlook: "bullish" },
        { kind: "netPositionIs", netPosition: "debit" },
        { kind: "maxProfitUnlimited" },
      ],
    },
  },
  {
    slug: "income-with-a-floor",
    moduleSlug: "income-strategies",
    title: "Get paid, but keep risk small",
    scenario:
      "You're moderately bullish and would rather collect option premium than pay it out — but you're not willing to risk more than a small, defined loss if the stock drops.",
    candidateStrategySlugs: ["covered-call", "protective-put", "collar"],
    goal: {
      kind: "all",
      goals: [
        { kind: "netPositionIs", netPosition: "credit" },
        { kind: "maxLossAtMost", value: 10 },
      ],
    },
  },
  {
    slug: "bearish-with-a-cap",
    moduleSlug: "income-strategies",
    title: "Bearish, but cap the risk of being wrong",
    scenario:
      "You've shorted the stock because you're bearish, but you want to cap your risk if it unexpectedly rallies — even if that protection costs you a premium.",
    candidateStrategySlugs: ["covered-put", "protective-call", "collar"],
    goal: {
      kind: "all",
      goals: [
        { kind: "outlookMatches", outlook: "bearish" },
        { kind: "netPositionIs", netPosition: "debit" },
      ],
    },
  },
];
