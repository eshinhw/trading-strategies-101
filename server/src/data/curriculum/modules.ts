import type { Module } from "./types.js";

// Ordered for display, but unlocking is driven by prerequisiteModuleSlugs (a DAG,
// not strictly linear) — e.g. Condors requires Butterflies because a condor is
// best understood as a butterfly with its middle strike split in two.
export const modules: Module[] = [
  {
    slug: "foundations",
    courseSlug: "options",
    title: "Foundations",
    description:
      "The vocabulary and mental models every strategy in this course leans on: what an option is, moneyness, reading a payoff diagram, debit vs. credit, and the 'legs' way of thinking about strategies.",
    order: 1,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "concept-what-is-an-option",
      "concept-moneyness",
      "concept-reading-a-payoff-diagram",
      "concept-debit-vs-credit",
      "concept-legs-and-combinations",
    ],
  },
  {
    slug: "income-strategies",
    courseSlug: "options",
    title: "Income Strategies",
    description:
      "Strategies built around an existing (or hypothetical) stock position, designed to generate recurring premium income: covered calls, covered puts, protective hedges, and the collar.",
    order: 2,
    prerequisiteModuleSlugs: ["foundations"],
    lessonSlugs: [
      "covered-call",
      "covered-put",
      "protective-put",
      "protective-call",
      "collar",
      "covered-short-straddle",
      "covered-short-strangle",
    ],
  },
  {
    slug: "vertical-spreads",
    courseSlug: "options",
    title: "Vertical Spreads",
    description:
      "The core building block for most of the rest of this course: buying one option and selling another at a different strike, same expiration, to define your risk in a directional bet.",
    order: 3,
    prerequisiteModuleSlugs: ["foundations"],
    lessonSlugs: ["bull-call-spread", "bull-put-spread", "bear-call-spread", "bear-put-spread"],
  },
  {
    slug: "synthetics-and-combos",
    courseSlug: "options",
    title: "Synthetics & Combos",
    description:
      "Using options to replicate a stock position (synthetic forwards), cheaper variations of that idea (combos), and a strategy that isolates a pure, near risk-free payoff (the box).",
    order: 4,
    prerequisiteModuleSlugs: ["vertical-spreads"],
    lessonSlugs: ["long-synthetic-forward", "short-synthetic-forward", "long-combo", "short-combo", "long-box"],
  },
  {
    slug: "ladders",
    courseSlug: "options",
    title: "Ladders",
    description:
      "What happens when you finance a vertical spread with an extra short option — cheaper entry, but a new risk that shows up if the stock moves too far. Also covers adjusting a losing spread into a ladder.",
    order: 5,
    prerequisiteModuleSlugs: ["vertical-spreads"],
    lessonSlugs: ["bull-call-ladder", "bull-put-ladder", "bear-call-ladder", "bear-put-ladder"],
  },
  {
    slug: "straddles-and-strangles",
    courseSlug: "options",
    title: "Straddles & Strangles",
    description:
      "Non-directional strategies that bet on how much the stock moves rather than which way: long versions bet on a big move, short versions bet on the stock staying put.",
    order: 6,
    prerequisiteModuleSlugs: ["foundations"],
    lessonSlugs: ["long-straddle", "long-strangle", "long-guts", "short-straddle", "short-strangle", "short-guts"],
  },
  {
    slug: "synthetic-straddles",
    courseSlug: "options",
    title: "Synthetic Straddles",
    description:
      "The same straddle payoff shapes, rebuilt from a stock position plus two same-type options instead of a call and a put — useful when you already hold the stock position.",
    order: 7,
    prerequisiteModuleSlugs: ["straddles-and-strangles", "synthetics-and-combos"],
    lessonSlugs: [
      "long-call-synthetic-straddle",
      "long-put-synthetic-straddle",
      "short-call-synthetic-straddle",
      "short-put-synthetic-straddle",
    ],
  },
  {
    slug: "strap-strip-and-ratios",
    courseSlug: "options",
    title: "Strap, Strip & Ratio Spreads",
    description:
      "Directionally-biased straddles (strap/strip), and spreads built with unequal numbers of contracts on each leg (ratio backspreads and ratio spreads) — where the leg count itself becomes a lever.",
    order: 8,
    prerequisiteModuleSlugs: ["straddles-and-strangles", "vertical-spreads"],
    lessonSlugs: [
      "strap",
      "strip",
      "call-ratio-backspread",
      "put-ratio-backspread",
      "ratio-call-spread",
      "ratio-put-spread",
    ],
  },
  {
    slug: "butterflies",
    courseSlug: "options",
    title: "Butterflies",
    description:
      "Three-strike, low-cost bets on the stock pinning near a specific price (or, in the short versions, on it moving away from one) — built from two vertical spreads stacked against each other.",
    order: 9,
    prerequisiteModuleSlugs: ["vertical-spreads"],
    lessonSlugs: [
      "long-call-butterfly",
      "modified-call-butterfly",
      "long-put-butterfly",
      "modified-put-butterfly",
      "short-call-butterfly",
      "short-put-butterfly",
      "long-iron-butterfly",
      "short-iron-butterfly",
    ],
  },
  {
    slug: "condors",
    courseSlug: "options",
    title: "Condors",
    description:
      "A butterfly with its middle strike split into two — wider, more forgiving range-bound (or breakout) bets, at the cost of a smaller maximum payoff.",
    order: 10,
    prerequisiteModuleSlugs: ["butterflies"],
    lessonSlugs: [
      "long-call-condor",
      "long-put-condor",
      "short-call-condor",
      "short-put-condor",
      "long-iron-condor",
      "short-iron-condor",
    ],
  },
  {
    slug: "calendar-and-diagonal-spreads",
    courseSlug: "options",
    title: "Calendar & Diagonal Spreads",
    description:
      "Strategies that span two different expirations, profiting from the near-term option losing time value faster than the longer-dated one. Introduces Black-Scholes valuation for the still-alive leg.",
    order: 11,
    prerequisiteModuleSlugs: ["vertical-spreads"],
    lessonSlugs: ["calendar-call-spread", "calendar-put-spread", "diagonal-call-spread", "diagonal-put-spread"],
  },
  {
    slug: "seagulls",
    courseSlug: "options",
    title: "Seagulls",
    description:
      "Three-leg, near-zero-cost strategies that add a protective wing to a combo — the course's capstone module, combining ideas from combos and vertical spreads.",
    order: 12,
    prerequisiteModuleSlugs: ["synthetics-and-combos", "vertical-spreads"],
    lessonSlugs: [
      "bullish-short-seagull-spread",
      "bearish-long-seagull-spread",
      "bearish-short-seagull-spread",
      "bullish-long-seagull-spread",
    ],
  },
  {
    slug: "futures-fundamentals",
    courseSlug: "futures",
    title: "Futures Fundamentals",
    description:
      "How futures contracts are used in practice — hedging price risk, systematic trend following, and trading the shape of the futures curve with calendar spreads.",
    order: 1,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "futures-hedging-with-futures",
      "futures-cross-hedging",
      "futures-interest-rate-risk-hedging",
      "futures-trend-following",
      "futures-contrarian-trading-mean-reversion",
      "futures-contrarian-trading-market-activity",
      "futures-calendar-spread",
    ],
  },
];
