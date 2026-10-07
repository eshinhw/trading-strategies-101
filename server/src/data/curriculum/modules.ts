import type { Module } from "./types.js";

// Ordered for display. Every module's prerequisiteModuleSlugs is empty — no
// course gates its modules on one another; only a course's final quiz is
// gated, via isCourseFullyComplete in lib/finalQuiz.ts, independent of this file.
export const modules: Module[] = [
  {
    slug: "foundations",
    courseSlug: "options",
    title: "Options Basics",
    description:
      "What an option is — a right without an obligation, split into calls and puts, buyers and sellers — why options exist, and the moneyness vocabulary (in, at, and out of the money) used throughout the course.",
    order: 1,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "concept-what-is-an-option",
      "concept-why-options-exist",
      "concept-moneyness",
    ],
  },
  {
    slug: "options-applications",
    courseSlug: "options",
    title: "Options Applications & Pricing",
    description:
      "How options are traded on exchanges, the three main ways investors use them, how to read a payoff diagram and tell debit from credit trades, how legs combine into strategies, and how an option's price is built from intrinsic and time value.",
    order: 2,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "concept-how-options-are-traded",
      "concept-how-investors-use-options",
      "concept-reading-a-payoff-diagram",
      "concept-debit-vs-credit",
      "concept-legs-and-combinations",
      "concept-how-options-are-priced",
    ],
  },
  {
    slug: "options-greeks",
    courseSlug: "options",
    title: "Options Greeks Introduction",
    description:
      "The Greeks — delta, gamma, theta, vega, and rho — each isolating how an option's price responds to one input: the stock price, how that sensitivity changes, time, volatility, and interest rates.",
    order: 3,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "greeks-introduction",
      "greeks-delta",
      "greeks-gamma",
      "greeks-theta",
      "greeks-vega",
      "greeks-rho",
    ],
  },
  {
    slug: "single-leg-strategies",
    courseSlug: "options",
    title: "Single-Leg Strategies",
    description:
      "The simplest strategies and the building blocks of every other one: buying or selling a single call or put.",
    order: 4,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "long-call",
      "short-call",
      "long-put",
      "short-put",
    ],
  },
  {
    slug: "income-strategies",
    courseSlug: "options",
    title: "Stock & Option Strategies",
    description:
      "Strategies that pair an option with a stock position: covered calls and puts to generate income, protective puts and calls to hedge, and the collar that combines the two.",
    order: 5,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "covered-call",
      "covered-put",
      "protective-put",
      "protective-call",
      "collar",
    ],
  },
  {
    slug: "vertical-spreads",
    courseSlug: "options",
    title: "Vertical Spreads",
    description:
      "The core building block for most of the rest of this course: buying one option and selling another at a different strike, same expiration, to define your risk in a directional bet.",
    order: 6,
    prerequisiteModuleSlugs: [],
    lessonSlugs: ["bull-call-spread", "bull-put-spread", "bear-call-spread", "bear-put-spread"],
  },
  {
    slug: "straddles-and-strangles",
    courseSlug: "options",
    title: "Straddles & Strangles",
    description:
      "Non-directional strategies that bet on how much the stock moves rather than which way: long versions bet on a big move, short versions bet on the stock staying put, with covered versions that sell the straddle or strangle against stock you own.",
    order: 7,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "long-straddle",
      "long-strangle",
      "long-guts",
      "short-straddle",
      "short-strangle",
      "short-guts",
      "covered-short-straddle",
      "covered-short-strangle",
    ],
  },
  {
    slug: "synthetics-and-combos",
    courseSlug: "options",
    title: "Synthetics & Combos",
    description:
      "Using options to replicate a stock position (synthetic forwards), cheaper variations of that idea (combos), and a strategy that isolates a pure, near risk-free payoff (the box).",
    order: 8,
    prerequisiteModuleSlugs: [],
    lessonSlugs: ["long-synthetic-forward", "short-synthetic-forward", "long-combo", "short-combo", "long-box"],
  },
  {
    slug: "ladders",
    courseSlug: "options",
    title: "Ladders",
    description:
      "What happens when you finance a vertical spread with an extra short option — cheaper entry, but a new risk that shows up if the stock moves too far. Also covers adjusting a losing spread into a ladder.",
    order: 11,
    prerequisiteModuleSlugs: [],
    lessonSlugs: ["bull-call-ladder", "bull-put-ladder", "bear-call-ladder", "bear-put-ladder"],
  },
  {
    slug: "butterflies",
    courseSlug: "options",
    title: "Butterflies",
    description:
      "Three-strike, low-cost bets on the stock pinning near a specific price (or, in the short versions, on it moving away from one) — built from two vertical spreads stacked against each other.",
    order: 13,
    prerequisiteModuleSlugs: [],
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
    slug: "calendar-and-diagonal-spreads",
    courseSlug: "options",
    title: "Calendar & Diagonal Spreads",
    description:
      "Strategies that span two different expirations, profiting from the near-term option losing time value faster than the longer-dated one. Introduces Black-Scholes valuation for the still-alive leg.",
    order: 15,
    prerequisiteModuleSlugs: [],
    lessonSlugs: ["calendar-call-spread", "calendar-put-spread", "diagonal-call-spread", "diagonal-put-spread"],
  },
  {
    slug: "synthetic-straddles",
    courseSlug: "options",
    title: "Synthetic Straddles",
    description:
      "The same straddle payoff shapes, rebuilt from a stock position plus two same-type options instead of a call and a put — useful when you already hold the stock position.",
    order: 9,
    prerequisiteModuleSlugs: [],
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
    order: 10,
    prerequisiteModuleSlugs: [],
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
    slug: "condors",
    courseSlug: "options",
    title: "Condors",
    description:
      "A butterfly with its middle strike split into two — wider, more forgiving range-bound (or breakout) bets, at the cost of a smaller maximum payoff.",
    order: 14,
    prerequisiteModuleSlugs: [],
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
    slug: "seagulls",
    courseSlug: "options",
    title: "Seagulls",
    description:
      "Three-leg, near-zero-cost strategies that add a protective wing to a combo — the course's capstone module, combining ideas from combos and vertical spreads.",
    order: 12,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "bullish-short-seagull-spread",
      "bearish-long-seagull-spread",
      "bearish-short-seagull-spread",
      "bullish-long-seagull-spread",
    ],
  },
  {
    slug: "futures-forwards",
    courseSlug: "forwards",
    title: "Forward Basics",
    description:
      "What a forward contract is — the agreement, the long and short sides, the terms every forward must specify, and settlement — and why forwards exist in the first place.",
    order: 1,
    prerequisiteModuleSlugs: [],
    lessonSlugs: ["what-is-a-forward-contract", "why-forward-contracts-exist"],
  },
  {
    slug: "futures-forward-applications-and-risk",
    courseSlug: "forwards",
    title: "Forward Applications, Pricing & Risk",
    description:
      "How forwards work and get used: each side's payoff at maturity, practical hedging scenarios, how a forward's fair price is set and an existing forward valued, forwards on interest rates, currencies, commodities, equities, and bonds, how to exit one early, and the credit, legal, and operational risks of a private contract.",
    order: 2,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "futures-forward-payoff-mechanics",
      "futures-forward-practical-applications",
      "futures-forward-pricing",
      "futures-valuing-an-existing-forward",
      "futures-forward-rate-agreements",
      "futures-currency-forwards",
      "futures-commodity-forwards",
      "futures-equity-and-bond-forwards",
      "futures-closing-out-a-forward",
      "futures-counterparty-credit-risk",
      "futures-forward-documentation-and-regulation",
      "futures-forward-beginner-mistakes",
    ],
  },
  {
    slug: "futures-mechanics",
    courseSlug: "futures",
    title: "Futures Basics",
    description:
      "What a futures contract is and what its standardized specification spells out, why futures markets exist, who trades them and why, and a tour of the major futures markets.",
    order: 1,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "futures-what-is-futures",
      "futures-contract-specifications",
      "futures-why-futures-markets-exist",
      "futures-market-participants",
      "futures-major-futures-markets",
    ],
  },
  {
    slug: "futures-markets-and-trading",
    courseSlug: "futures",
    title: "Futures Applications, Pricing & Risk",
    description:
      "How futures work and get traded: margin and daily settlement, the clearinghouse guarantee, delivery and closing out, price limits and trading halts, how orders get filled, how to read quotes and charts, how futures prices relate to spot (basis, contango, and backwardation), and the risk management, regulation, and common mistakes that come with trading them.",
    order: 2,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "futures-margin-and-mark-to-market",
      "futures-clearinghouses-and-novation",
      "futures-delivery-and-close-out",
      "futures-price-limits-and-trading-halts",
      "futures-trading-mechanics-orders-and-liquidity",
      "futures-reading-quotes-and-charts",
      "futures-basis-and-contango-backwardation",
      "futures-risk-management",
      "futures-regulation-and-trader-protections",
      "futures-common-beginner-mistakes",
    ],
  },
  {
    slug: "futures-strategies",
    courseSlug: "futures",
    title: "Futures Strategies",
    description:
      "How futures contracts are used in practice — hedging price risk, systematic trend following, and trading the shape of the futures curve with calendar spreads.",
    order: 3,
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
  {
    slug: "stocks-basics",
    courseSlug: "stocks",
    title: "Stocks Basics",
    description:
      "What a stock is — ownership in a company, not a loan — why companies issue shares and investors buy them, how a company's size and industry are described, and how dividends and corporate actions work.",
    order: 1,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "stocks-what-is-a-stock",
      "stocks-why-stocks-exist",
      "stocks-market-capitalization-and-sectors",
      "stocks-dividends-and-corporate-actions",
    ],
  },
  {
    slug: "stocks-applications-and-pricing",
    courseSlug: "stocks",
    title: "Stocks Applications & Pricing",
    description:
      "How stock trading works — exchanges, order types, going long or short — and how a stock is valued, from the P/E ratio to discounting expected dividends.",
    order: 2,
    prerequisiteModuleSlugs: [],
    lessonSlugs: ["stocks-how-stock-trading-works", "stocks-valuing-a-stock"],
  },
  {
    slug: "stocks-strategies",
    courseSlug: "stocks",
    title: "Basic Strategies",
    description:
      "A first tour of equity trading strategies — factor investing (momentum and value), statistical arbitrage (pairs trading and cluster mean-reversion), technical trend-following, and market-making.",
    order: 3,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "stocks-price-momentum",
      "stocks-value",
      "stocks-pairs-trading",
      "stocks-mean-reversion-single-cluster",
      "stocks-single-moving-average",
      "stocks-market-making",
    ],
  },
  {
    slug: "stocks-factor-and-quant-strategies",
    courseSlug: "stocks",
    title: "Factor & Quant Strategies",
    description:
      "Deeper factor investing (earnings-momentum, low-volatility, multifactor, residual momentum), a signal drawn from the options market (implied volatility), and how a real stat-arb desk combines many signals and builds a portfolio from them.",
    order: 4,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "stocks-earnings-momentum",
      "stocks-low-volatility-anomaly",
      "stocks-implied-volatility",
      "stocks-multifactor-portfolio",
      "stocks-residual-momentum",
      "stocks-alpha-combos",
      "stocks-statistical-arbitrage-optimization",
    ],
  },
  {
    slug: "stocks-technical-and-event-driven",
    courseSlug: "stocks",
    title: "Technical & Event-Driven Strategies",
    description:
      "Chart-based trend-following (moving-average crossovers, support/resistance, channels), mean-reversion scaled across many industry clusters, merger arbitrage, and a machine-learning approach to single-stock prediction.",
    order: 5,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "stocks-mean-reversion-multiple-clusters",
      "stocks-two-moving-averages",
      "stocks-three-moving-averages",
      "stocks-support-and-resistance",
      "stocks-channel",
      "stocks-event-driven-ma",
      "stocks-machine-learning-knn",
    ],
  },
  {
    slug: "etf-basics",
    courseSlug: "etfs",
    title: "ETF Basics",
    description:
      "What an ETF is — a basket of assets that trades like a single stock — and why investors reach for one instead of individual stocks, a mutual fund, or futures.",
    order: 1,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "etf-what-is-an-etf",
      "etf-why-trade-etfs",
    ],
  },
  {
    slug: "etf-applications-and-pricing",
    courseSlug: "etfs",
    title: "ETF Applications & Pricing",
    description:
      "How ETFs work and get used: the creation and redemption mechanism that keeps price in line with NAV, how to trade ETF shares, and what owning one actually costs — expense ratio, spreads, and tracking error.",
    order: 2,
    prerequisiteModuleSlugs: [],
    lessonSlugs: ["etf-creation-and-redemption", "etf-how-to-trade-etfs", "etf-costs-and-tracking-error"],
  },
  {
    slug: "etfs-strategies",
    courseSlug: "etfs",
    title: "ETF Strategies",
    description:
      "Sector and alpha rotation strategies (plain, MA-filtered, and dual momentum), the technical tools that refine and complement them (R-squared, mean-reversion), and structural ETF mechanics (leveraged ETF decay, multi-asset trend following).",
    order: 3,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "etf-sector-momentum-rotation",
      "etf-sector-momentum-rotation-with-ma-filter",
      "etf-dual-momentum-sector-rotation",
      "etf-alpha-rotation",
      "etf-r-squared",
      "etf-mean-reversion",
      "etf-leveraged-etfs",
      "etf-multi-asset-trend-following",
    ],
  },
  {
    slug: "fixed-income-basics",
    courseSlug: "fixed-income",
    title: "Fixed Income Basics",
    description:
      "What a bond is — a loan in security form — and why governments and companies issue bonds and investors buy them.",
    order: 1,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "fixed-income-what-is-a-bond",
      "fixed-income-why-bonds-exist",
    ],
  },
  {
    slug: "fixed-income-applications-and-pricing",
    courseSlug: "fixed-income",
    title: "Fixed Income Applications & Pricing",
    description:
      "How bonds are traded and priced: the dealer market and accrued interest, the inverse relationship between price and yield, duration as a measure of rate sensitivity, the shape of the yield curve, and credit risk and spreads.",
    order: 2,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "fixed-income-how-bonds-are-traded",
      "fixed-income-yield-and-price",
      "fixed-income-duration",
      "fixed-income-the-yield-curve",
      "fixed-income-credit-risk-and-spreads",
    ],
  },
  {
    slug: "fixed-income-strategies",
    courseSlug: "fixed-income",
    title: "Fixed Income Strategies",
    description:
      "The classic bond-portfolio structures (bullets, barbells, ladders), immunizing a portfolio against rate risk, a duration-neutral curvature trade, and capturing price gains as a bond ages down the yield curve.",
    order: 3,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "fixed-income-bullets",
      "fixed-income-barbells",
      "fixed-income-ladders",
      "fixed-income-bond-immunization",
      "fixed-income-dollar-duration-neutral-butterfly",
      "fixed-income-rolling-down-the-yield-curve",
    ],
  },
  {
    slug: "fixed-income-butterfly-and-curve-trades",
    courseSlug: "fixed-income",
    title: "Butterfly & Curve Trades",
    description:
      "Three more ways to weight a butterfly trade's wings — fixed split, historical regression, and maturity distance — plus betting on the curve steepening or flattening rather than on rates overall.",
    order: 4,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "fixed-income-fifty-fifty-butterfly",
      "fixed-income-regression-weighted-butterfly",
      "fixed-income-maturity-weighted-butterfly",
      "fixed-income-yield-curve-spread",
    ],
  },
  {
    slug: "fixed-income-factor-and-credit-strategies",
    courseSlug: "fixed-income",
    title: "Factor & Credit Strategies",
    description:
      "Factor investing applied to bonds (low-risk, value, and carry), plus two spread-arbitrage trades that isolate a mispricing between related credit and rates markets.",
    order: 5,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "fixed-income-low-risk-factor",
      "fixed-income-value-factor",
      "fixed-income-carry-factor",
      "fixed-income-cds-basis-arbitrage",
      "fixed-income-swap-spread-arbitrage",
    ],
  },
  {
    slug: "indexes-basics",
    courseSlug: "indexes",
    title: "Index Basics",
    description:
      "What a stock index is — a single number built from a defined basket of stocks, weighted by price, market cap, or equally — and why indexes exist: to measure markets, benchmark investors, and underpin index funds and derivatives.",
    order: 1,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "indexes-what-is-a-stock-index",
      "indexes-why-indexes-exist",
    ],
  },
  {
    slug: "indexes-applications-and-pricing",
    courseSlug: "indexes",
    title: "Index Applications & Pricing",
    description:
      "How an index's value is calculated and kept consistent through splits and changes, how funds replicate an index and how closely they track it, and how index futures and options are used to hedge or speculate on the whole market.",
    order: 2,
    prerequisiteModuleSlugs: [],
    lessonSlugs: ["indexes-how-index-values-are-calculated", "indexes-tracking-an-index", "indexes-index-futures-and-options"],
  },
  {
    slug: "indexes-strategies",
    courseSlug: "indexes",
    title: "Index Strategies",
    description:
      "Arbitrage between an index and its futures or ETF twins, betting on component correlation with dispersion trades, and dynamically sizing index exposure to hold volatility near a target.",
    order: 3,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "indexes-cash-and-carry-arbitrage",
      "indexes-dispersion-trading",
      "indexes-dispersion-trading-subset-portfolio",
      "indexes-intraday-etf-arbitrage",
      "indexes-volatility-targeting",
    ],
  },
  {
    slug: "volatility-basics",
    courseSlug: "volatility",
    title: "Volatility Basics",
    description:
      "What volatility is — realized versus implied — what the VIX measures and why it's called the fear gauge, and why volatility matters as a measure of risk and as something to hedge with and trade.",
    order: 1,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "volatility-what-is-volatility",
      "volatility-the-vix",
      "volatility-why-volatility-matters",
    ],
  },
  {
    slug: "volatility-applications-and-pricing",
    courseSlug: "volatility",
    title: "Volatility Applications & Pricing",
    description:
      "How implied volatility compares with realized volatility and the risk premium that gap creates, and how traders actually get exposure to volatility through VIX futures and ETNs.",
    order: 2,
    prerequisiteModuleSlugs: [],
    lessonSlugs: ["volatility-implied-vol-and-the-risk-premium", "volatility-trading-vix-futures-and-etns"],
  },
  {
    slug: "volatility-strategies",
    courseSlug: "volatility",
    title: "Volatility Strategies",
    description:
      "Trading volatility itself as an asset class — VIX futures mechanics and carry, harvesting the volatility risk premium (plain and gamma-hedged), skew, and variance swaps.",
    order: 3,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "volatility-vix-futures-basis-trading",
      "volatility-carry-with-two-etns",
      "volatility-hedging-short-vxx",
      "volatility-risk-premium",
      "volatility-risk-premium-with-gamma-hedging",
      "volatility-skew-long-risk-reversal",
      "volatility-trading-with-variance-swaps",
    ],
  },
  {
    slug: "fx-basics",
    courseSlug: "fx",
    title: "FX Basics",
    description:
      "What a currency pair is, and why currency markets exist in the first place — from cross-border trade and investment to the shift from fixed to floating exchange rates.",
    order: 1,
    prerequisiteModuleSlugs: [],
    lessonSlugs: ["fx-what-is-a-currency-pair", "fx-why-currency-markets-exist"],
  },
  {
    slug: "fx-applications-and-pricing",
    courseSlug: "fx",
    title: "FX Applications & Pricing",
    description:
      "How currencies are traded (the decentralized market, pips, and lots) and used — transacting, hedging, and speculating — what moves exchange rates, how interest rate parity links currencies (the relationship behind the carry trade), how spot, cross, and forward rates are priced, and how forwards hedge currency risk.",
    order: 2,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "fx-how-currencies-are-traded",
      "fx-how-currencies-are-used",
      "fx-what-moves-exchange-rates",
      "fx-interest-rate-parity",
      "fx-pricing-spot-cross-and-forwards",
      "fx-hedging-currency-risk",
    ],
  },
  {
    slug: "fx-strategies",
    courseSlug: "fx",
    title: "FX Strategies",
    description:
      "Trend-following on a filtered signal, the carry trade in three forms (single-pair, cross-sectional, and dollar-centric), combining carry with momentum, and triangular arbitrage.",
    order: 3,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "fx-moving-averages-with-hp-filter",
      "fx-carry-trade",
      "fx-high-minus-low-carry",
      "fx-dollar-carry-trade",
      "fx-momentum-and-carry-combo",
      "fx-triangular-arbitrage",
    ],
  },
  {
    slug: "commodities-basics",
    courseSlug: "commodities",
    title: "Commodities Basics",
    description:
      "What a commodity is — a raw, standardized good that's interchangeable unit for unit — and why commodity markets exist: price discovery, hedging, and the speculators and investors who take the other side.",
    order: 1,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "commodities-what-is-a-commodity",
      "commodities-why-commodity-markets-exist",
    ],
  },
  {
    slug: "commodities-applications-and-pricing",
    courseSlug: "commodities",
    title: "Commodities Applications & Pricing",
    description:
      "How commodities are traded through futures rather than physical ownership, the supply and demand forces that drive prices, and why futures curves slope the way they do — contango and backwardation.",
    order: 2,
    prerequisiteModuleSlugs: [],
    lessonSlugs: ["commodities-how-commodities-are-traded", "commodities-supply-demand-and-prices", "commodities-contango-and-backwardation"],
  },
  {
    slug: "commodities-strategies",
    courseSlug: "commodities",
    title: "Commodities Strategies",
    description:
      "The futures-curve mechanics behind commodity returns (roll yield and hedging pressure), portfolio diversification, and factor strategies (value, skewness premium) plus fundamentals-based pricing models.",
    order: 3,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "commodities-roll-yields",
      "commodities-hedging-pressure",
      "commodities-portfolio-diversification",
      "commodities-value",
      "commodities-skewness-premium",
      "commodities-trading-with-pricing-models",
    ],
  },
  {
    slug: "real-estate-basics",
    courseSlug: "real-estate",
    title: "Real Estate Basics",
    description:
      "What real estate investing is — owning property directly or through a fund for income and changes in value — why investors choose it, and how REITs let ordinary investors buy real estate like a stock.",
    order: 1,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "real-estate-what-is-real-estate-investing",
      "real-estate-why-invest-in-real-estate",
      "real-estate-reits",
    ],
  },
  {
    slug: "real-estate-applications-and-pricing",
    courseSlug: "real-estate",
    title: "Real Estate Applications & Pricing",
    description:
      "How property is valued — income, comparable sales, and replacement cost — and how debt financing amplifies both gains and losses.",
    order: 2,
    prerequisiteModuleSlugs: [],
    lessonSlugs: ["real-estate-how-value-is-determined", "real-estate-leverage"],
  },
  {
    slug: "real-estate-diversification",
    courseSlug: "real-estate",
    title: "Real Estate Diversification",
    description:
      "How real estate fits into a broader portfolio, and the different dimensions — property type, region, and economic driver — for diversifying within a real estate allocation itself.",
    order: 3,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "real-estate-mixed-asset-diversification",
      "real-estate-intra-asset-diversification",
      "real-estate-property-type-diversification",
      "real-estate-economic-diversification",
      "real-estate-property-type-and-geographic-diversification",
    ],
  },
  {
    slug: "real-estate-return-drivers",
    courseSlug: "real-estate",
    title: "Return Drivers and Active Strategies",
    description:
      "How real estate returns behave over time and can be actively traded — regional momentum, inflation hedging, and a hands-on fix-and-flip strategy.",
    order: 4,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "real-estate-momentum-regional-approach",
      "real-estate-inflation-hedging",
      "real-estate-fix-and-flip",
    ],
  },
  {
    slug: "structured-assets-basics",
    courseSlug: "structured-assets",
    title: "Structured Assets Basics",
    description:
      "What a structured asset is — many loans pooled and repackaged into new securities — and why securitization exists: freeing lenders' capital, spreading risk, and letting investors choose their level of risk.",
    order: 1,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "structured-assets-what-is-a-structured-asset",
      "structured-assets-why-securitization-exists",
    ],
  },
  {
    slug: "structured-assets-applications-and-pricing",
    courseSlug: "structured-assets",
    title: "Structured Assets Applications & Pricing",
    description:
      "How structured deals work: splitting cash flows into tranches and paying them through the waterfall, how credit default swaps and credit indices transfer credit risk, and how mortgage-backed securities carry prepayment risk.",
    order: 2,
    prerequisiteModuleSlugs: [],
    lessonSlugs: ["structured-assets-tranches-and-the-waterfall", "structured-assets-credit-default-swaps-and-indices", "structured-assets-mortgage-backed-securities"],
  },
  {
    slug: "structured-assets-strategies",
    courseSlug: "structured-assets",
    title: "Structured Assets Strategies",
    description:
      "Carry trades across the tranche capital structure, hedged with the index, another tranche, or single-name CDS; betting on the shape of the credit curve; and trading MBS on prepayment and relative value.",
    order: 3,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "structured-assets-carry-equity-tranche-index-hedging",
      "structured-assets-carry-senior-mezzanine-index-hedging",
      "structured-assets-carry-tranche-hedging",
      "structured-assets-carry-cds-hedging",
      "structured-assets-cdos-curve-trades",
      "structured-assets-mbs-trading",
    ],
  },
  {
    slug: "convertibles-basics",
    courseSlug: "convertibles",
    title: "Convertibles Basics",
    description:
      "What a convertible bond is — a bond that can be converted into shares — and why companies issue them and investors buy them.",
    order: 1,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "convertibles-what-is-a-convertible-bond",
      "convertibles-why-issue-and-buy",
    ],
  },
  {
    slug: "convertibles-applications-and-pricing",
    courseSlug: "convertibles",
    title: "Convertibles Applications & Pricing",
    description:
      "How a convertible is defined and priced: the conversion ratio and conversion price, and how its price traces out a curve between a bond floor and the stock's own value.",
    order: 2,
    prerequisiteModuleSlugs: [],
    lessonSlugs: ["convertibles-conversion-ratio-and-price", "convertibles-how-price-behaves"],
  },
  {
    slug: "convertibles-strategies",
    courseSlug: "convertibles",
    title: "Convertibles Strategies",
    description:
      "Buying a convertible and delta-hedging with the underlying stock to harvest coupon and convexity, and a relative-value approach that trades convertibles on option-adjusted spread.",
    order: 3,
    prerequisiteModuleSlugs: [],
    lessonSlugs: ["convertible-arbitrage", "convertible-option-adjusted-spread"],
  },
  {
    slug: "cash-basics",
    courseSlug: "cash",
    title: "Cash Basics",
    description:
      "Why holding cash is a real investment choice with its own safety, liquidity, and yield trade-off, and why money and short-term cash markets exist.",
    order: 1,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "cash-what-is-cash",
      "cash-why-money-and-cash-markets-exist",
    ],
  },
  {
    slug: "cash-applications-and-pricing",
    courseSlug: "cash",
    title: "Cash Applications & Pricing",
    description:
      "The instruments that let cash earn a modest return safely — Treasury bills, commercial paper, CDs, and money market funds — how collateral makes short-term borrowing cheaper, and the regulation that polices cash businesses and lending.",
    order: 2,
    prerequisiteModuleSlugs: [],
    lessonSlugs: ["cash-money-market-instruments", "cash-collateralized-lending", "cash-financial-regulation"],
  },
  {
    slug: "cash-strategies",
    courseSlug: "cash",
    title: "Cash Strategies",
    description:
      "Five real cash-based practices from the book's own table of contents, some entirely legitimate (repo, liquidity management, pawnbroking) and some illegal (money laundering, loan sharking) — covered for regulatory and historical context, not as guidance.",
    order: 3,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "cash-money-laundering",
      "cash-liquidity-management",
      "cash-repo",
      "cash-pawnbroking",
      "cash-loan-sharking",
    ],
  },
  {
    slug: "crypto-basics",
    courseSlug: "cryptocurrencies",
    title: "Cryptocurrencies Basics",
    description:
      "What a cryptocurrency and a blockchain are, and why they were created — payments and record-keeping without a trusted central intermediary.",
    order: 1,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "crypto-what-is-cryptocurrency",
      "crypto-why-cryptocurrencies-exist",
    ],
  },
  {
    slug: "crypto-applications-and-pricing",
    courseSlug: "cryptocurrencies",
    title: "Cryptocurrencies Applications & Pricing",
    description:
      "How crypto markets trade around the clock across fragmented exchanges, why prices swing so widely and what other risks sit on top, and how machine-learning models are used to generate trading signals.",
    order: 2,
    prerequisiteModuleSlugs: [],
    lessonSlugs: ["crypto-how-crypto-markets-trade", "crypto-volatility-and-risk", "crypto-machine-learning-in-trading"],
  },
  {
    slug: "crypto-strategies",
    courseSlug: "cryptocurrencies",
    title: "Cryptocurrencies Strategies",
    description:
      "Two machine-learning approaches to crypto trading: a neural network learning non-linear patterns in price and volume data, and a Naive Bayes classifier turning social-media sentiment into a trading signal.",
    order: 3,
    prerequisiteModuleSlugs: [],
    lessonSlugs: ["crypto-artificial-neural-network", "crypto-sentiment-analysis-naive-bayes"],
  },
  {
    slug: "macro-basics",
    courseSlug: "global-macro",
    title: "Global Macro Basics",
    description:
      "What global macro investing is — a top-down approach that starts from a view on growth, inflation, and policy — and why macro forces move every asset class at once.",
    order: 1,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "macro-what-is-global-macro",
      "macro-why-macro-forces-matter",
    ],
  },
  {
    slug: "macro-applications-and-pricing",
    courseSlug: "global-macro",
    title: "Global Macro Applications & Pricing",
    description:
      "The data macro investors watch, how central bank decisions ripple through currencies, bonds, and equities, and how a single macro view gets turned into a specific trade.",
    order: 2,
    prerequisiteModuleSlugs: [],
    lessonSlugs: ["macro-key-economic-indicators", "macro-central-banks-and-monetary-policy", "macro-translating-a-view-into-a-trade"],
  },
  {
    slug: "macro-strategies",
    courseSlug: "global-macro",
    title: "Global Macro Strategies",
    description:
      "Trading confirmed macro trends with momentum, hedging inflation across bonds/commodities/swaps, positioning across countries' government bond markets, and trading the immediate surprise around scheduled economic announcements.",
    order: 3,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "macro-fundamental-macro-momentum",
      "macro-global-macro-inflation-hedge",
      "macro-global-fixed-income-strategy",
      "macro-trading-on-economic-announcements",
    ],
  },
  {
    slug: "distressed-basics",
    courseSlug: "distressed-assets",
    title: "Distressed Assets Basics",
    description:
      "What distressed debt is — debt trading at a steep discount because of default risk — and why distress creates opportunity.",
    order: 1,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "distressed-what-is-distressed-debt",
      "distressed-why-distress-creates-opportunity",
    ],
  },
  {
    slug: "distressed-applications-and-pricing",
    courseSlug: "distressed-assets",
    title: "Distressed Assets Applications & Pricing",
    description:
      "How bankruptcy and reorganization work, how a claim's place in the capital structure determines what it recovers, and the range of approaches from passive holding to actively shaping the reorganization.",
    order: 2,
    prerequisiteModuleSlugs: [],
    lessonSlugs: ["distressed-bankruptcy-and-reorganization", "distressed-capital-structure-and-priority", "distressed-investing-approaches"],
  },
  {
    slug: "distressed-strategies",
    courseSlug: "distressed-assets",
    title: "Distressed Assets Strategies",
    description:
      "Seven approaches spanning passive buy-and-hold, active creditor-committee influence, shaping the reorganization plan itself, diversified debt sourcing, loan-to-own control bids, and the well-documented distress risk puzzle and how to manage around it.",
    order: 3,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "distressed-buying-and-holding-distressed-debt",
      "distressed-active-distressed-investing",
      "distressed-planning-a-reorganization",
      "distressed-buying-outstanding-debt",
      "distressed-loan-to-own",
      "distressed-distress-risk-puzzle",
      "distressed-distress-risk-puzzle-risk-management",
    ],
  },
  {
    slug: "tax-basics",
    courseSlug: "tax-arbitrage",
    title: "Tax Arbitrage Basics",
    description:
      "The basic idea behind tax arbitrage — legally capturing a tax-treatment gap between investors, instruments, or jurisdictions — and how interest, dividends, and capital gains are taxed differently.",
    order: 1,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "tax-the-basic-idea-of-tax-arbitrage",
      "tax-taxation-of-investment-income",
    ],
  },
  {
    slug: "tax-applications-and-pricing",
    courseSlug: "tax-arbitrage",
    title: "Tax Arbitrage Applications & Pricing",
    description:
      "How tax treatment shows up in prices: why municipal bond interest is exempt and what that does to equilibrium yield, and how withholding tax and treaties change net-of-tax outcomes across borders.",
    order: 2,
    prerequisiteModuleSlugs: [],
    lessonSlugs: ["tax-municipal-bonds-and-tax-exempt-income", "tax-cross-border-taxation-and-withholding-tax"],
  },
  {
    slug: "tax-strategies",
    courseSlug: "tax-arbitrage",
    title: "Tax Arbitrage Strategies",
    description:
      "Trading municipal bond yield gaps against their taxable-equivalent fair value, structuring cross-border investments through treaty-favorable jurisdictions, and using options to replicate foreign-security exposure under more favorable tax treatment.",
    order: 3,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "tax-municipal-bond-tax-arbitrage",
      "tax-cross-border-tax-arbitrage",
      "tax-cross-border-tax-arbitrage-with-options",
    ],
  },
  {
    slug: "misc-assets-basics",
    courseSlug: "miscellaneous-assets",
    title: "Miscellaneous Assets Basics",
    description:
      "What makes an instrument miscellaneous — built to hedge a specific real-world risk — and why niche risks like weather, inflation, and energy margins get their own traded instruments.",
    order: 1,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "misc-alternative-and-niche-asset-classes",
      "misc-why-niche-risks-get-traded",
    ],
  },
  {
    slug: "misc-assets-applications-and-pricing",
    courseSlug: "miscellaneous-assets",
    title: "Miscellaneous Assets Applications & Pricing",
    description:
      "The building blocks behind the course's strategies: breakeven inflation from inflation-linked bonds, weather derivatives that pay on a weather index, and trading the gap between two related prices.",
    order: 2,
    prerequisiteModuleSlugs: [],
    lessonSlugs: ["misc-inflation-linked-instruments", "misc-weather-derivatives", "misc-spread-and-basis-trading"],
  },
  {
    slug: "misc-assets-strategies",
    courseSlug: "miscellaneous-assets",
    title: "Miscellaneous Assets Strategies",
    description:
      "Trading inflation swaps directly, the TIPS-Treasury breakeven-inflation basis trade financed via repo, sizing a weather hedge to a business's actual demand exposure, and locking in a power generator's spark-spread margin.",
    order: 3,
    prerequisiteModuleSlugs: [],
    lessonSlugs: [
      "misc-inflation-hedging-inflation-swaps",
      "misc-tips-treasury-arbitrage",
      "misc-weather-risk-demand-hedging",
      "misc-energy-spark-spread",
    ],
  },
];
