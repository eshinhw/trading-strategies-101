import type { Paper, PaperCategory } from "./types.js";

// Citation metadata (title/authors/year/venue) only — every summary and
// "why it's here" note below is written in our own words, describing what
// each paper shows and why it's still cited, not reproducing any of the
// papers' actual text. We don't host or link to the papers themselves.
export const paperCategories: { slug: PaperCategory; title: string; description: string }[] = [
  {
    slug: "asset-pricing-portfolio-theory",
    title: "Asset Pricing & Portfolio Theory",
    description: "The mean-variance and equilibrium foundations that portfolio construction still builds on.",
  },
  {
    slug: "derivatives-pricing",
    title: "Derivatives Pricing",
    description: "The no-arbitrage and stochastic-calculus papers behind option pricing theory.",
  },
  {
    slug: "factor-investing",
    title: "Factor Investing & Anomalies",
    description: "The empirical papers documenting which factors and patterns actually explain stock returns.",
  },
  {
    slug: "risk-management",
    title: "Risk Management",
    description: "How risk itself gets measured, and what makes one risk measure better-behaved than another.",
  },
  {
    slug: "market-microstructure-execution",
    title: "Market Microstructure & Execution",
    description: "How trading itself — order flow, price impact, dealer behavior — actually works.",
  },
];

export const papers: Paper[] = [
  // --- Asset Pricing & Portfolio Theory ---
  {
    slug: "portfolio-selection",
    title: "Portfolio Selection",
    authors: "Harry Markowitz",
    year: 1952,
    venue: "The Journal of Finance",
    category: "asset-pricing-portfolio-theory",
    level: "intermediate",
    summary:
      "Introduced mean-variance optimization: the idea that a rational investor should choose a portfolio based on its expected return and variance, and that combining imperfectly correlated assets can reduce a portfolio's risk without necessarily sacrificing return.",
    whyItsHere:
      "The founding paper of modern portfolio theory — nearly every portfolio construction framework taught or used today traces back to this mean-variance framework.",
    link: { kind: "publisher", url: "https://doi.org/10.1111/j.1540-6261.1952.tb01525.x" },
  },
  {
    slug: "capital-asset-prices",
    title: "Capital Asset Prices: A Theory of Market Equilibrium under Conditions of Risk",
    authors: "William F. Sharpe",
    year: 1964,
    venue: "The Journal of Finance",
    category: "asset-pricing-portfolio-theory",
    level: "intermediate",
    summary:
      "Built on Markowitz's framework to derive the Capital Asset Pricing Model (CAPM), showing that in equilibrium, an asset's expected return should depend on its beta — its sensitivity to the overall market — rather than its total risk.",
    whyItsHere:
      "CAPM remains the baseline risk-return framework taught in every finance program, and the starting point that most later factor models are built to extend or challenge.",
    link: { kind: "publisher", url: "https://doi.org/10.1111/j.1540-6261.1964.tb02865.x" },
  },

  // --- Derivatives Pricing ---
  {
    slug: "pricing-of-options-and-corporate-liabilities",
    title: "The Pricing of Options and Corporate Liabilities",
    authors: "Fischer Black and Myron Scholes",
    year: 1973,
    venue: "Journal of Political Economy",
    category: "derivatives-pricing",
    level: "advanced",
    summary:
      "Derived a closed-form formula for pricing European options by constructing a continuously-rebalanced hedge that eliminates risk, under assumptions of constant volatility and no arbitrage.",
    whyItsHere:
      "The single most influential paper in derivatives pricing — the Black-Scholes formula and its assumptions are the reference point every later option pricing model is measured against.",
    link: { kind: "publisher", url: "https://doi.org/10.1086/260062" },
  },
  {
    slug: "theory-of-rational-option-pricing",
    title: "Theory of Rational Option Pricing",
    authors: "Robert C. Merton",
    year: 1973,
    venue: "The Bell Journal of Economics and Management Science",
    category: "derivatives-pricing",
    level: "advanced",
    summary:
      "Extended and generalized the Black-Scholes framework using continuous-time stochastic calculus, relaxing several of its original assumptions and formalizing the no-arbitrage argument underlying option pricing.",
    whyItsHere:
      "Established the rigorous stochastic-calculus machinery that the rest of quantitative derivatives theory — including this course's own options pricing content — is built on.",
    link: { kind: "publisher", url: "https://doi.org/10.2307/3003143" },
  },
  {
    slug: "closed-form-solution-stochastic-volatility",
    title: "A Closed-Form Solution for Options with Stochastic Volatility with Applications to Bond and Currency Options",
    authors: "Steven L. Heston",
    year: 1993,
    venue: "The Review of Financial Studies",
    category: "derivatives-pricing",
    level: "advanced",
    summary:
      "Introduced a tractable model where volatility itself follows a random process rather than staying constant, producing a closed-form option pricing formula that captures the volatility smile observed in real markets.",
    whyItsHere:
      "The standard reference stochastic volatility model, still widely used to price and hedge options where Black-Scholes' constant-volatility assumption breaks down.",
    link: { kind: "publisher", url: "https://doi.org/10.1093/rfs/6.2.327" },
  },

  // --- Factor Investing & Anomalies ---
  {
    slug: "common-risk-factors-stocks-and-bonds",
    title: "Common Risk Factors in the Returns on Stocks and Bonds",
    authors: "Eugene F. Fama and Kenneth R. French",
    year: 1993,
    venue: "Journal of Financial Economics",
    category: "factor-investing",
    level: "intermediate",
    summary:
      "Introduced the three-factor model, showing that a company's size and its book-to-market ratio, alongside market beta, help explain the cross-section of stock returns.",
    whyItsHere:
      "The foundational empirical asset pricing paper behind factor investing — nearly every smart-beta or factor strategy traces its lineage back to this model.",
    link: { kind: "publisher", url: "https://doi.org/10.1016/0304-405X(93)90023-5" },
  },
  {
    slug: "five-factor-asset-pricing-model",
    title: "A Five-Factor Asset Pricing Model",
    authors: "Eugene F. Fama and Kenneth R. French",
    year: 2015,
    venue: "Journal of Financial Economics",
    category: "factor-investing",
    level: "intermediate",
    summary:
      "Extended the three-factor model by adding profitability and investment factors, improving its ability to explain patterns in average stock returns beyond size and value alone.",
    whyItsHere:
      "The current standard version of the Fama-French framework, widely used as a benchmark for judging whether a strategy's returns reflect genuine skill or already-known risk factors.",
    link: { kind: "ssrn", url: "https://ssrn.com/abstract=2287202" },
  },
  {
    slug: "returns-to-buying-winners-and-selling-losers",
    title: "Returns to Buying Winners and Selling Losers: Implications for Stock Market Efficiency",
    authors: "Narasimhan Jegadeesh and Sheridan Titman",
    year: 1993,
    venue: "The Journal of Finance",
    category: "factor-investing",
    level: "intermediate",
    summary:
      "Documented that stocks which performed well over the trailing 3-12 months tend to keep outperforming over the following few months, and recent losers tend to keep underperforming.",
    whyItsHere:
      "The original empirical paper establishing price momentum as a persistent, tradable anomaly — directly underlying the momentum strategies covered in this course's Stocks track.",
    link: { kind: "publisher", url: "https://doi.org/10.1111/j.1540-6261.1993.tb04702.x" },
  },

  // --- Risk Management ---
  {
    slug: "coherent-measures-of-risk",
    title: "Coherent Measures of Risk",
    authors: "Philippe Artzner, Freddy Delbaen, Jean-Marc Eber, and David Heath",
    year: 1999,
    venue: "Mathematical Finance",
    category: "risk-management",
    level: "advanced",
    summary:
      "Defined a set of mathematical properties, including subadditivity, that a well-behaved risk measure should satisfy, and showed that the widely-used Value-at-Risk (VaR) fails to meet them while Conditional VaR does.",
    whyItsHere:
      "The theoretical basis for why many risk managers prefer CVaR/Expected Shortfall over plain VaR, and a standard reference whenever risk measurement itself is under discussion.",
    link: { kind: "publisher", url: "https://doi.org/10.1111/1467-9965.00068" },
  },

  // --- Market Microstructure & Execution ---
  {
    slug: "optimal-execution-of-portfolio-transactions",
    title: "Optimal Execution of Portfolio Transactions",
    authors: "Robert Almgren and Neil Chriss",
    year: 2001,
    venue: "Journal of Risk",
    category: "market-microstructure-execution",
    level: "advanced",
    summary:
      "Developed a framework for splitting a large trade into smaller pieces over time, balancing the market-impact cost of trading quickly against the price-risk cost of trading slowly.",
    whyItsHere:
      "The foundational model behind modern execution algorithms — the cost/risk tradeoff it formalizes is still the core logic inside most institutional trading systems.",
    link: { kind: "publisher", url: "https://doi.org/10.21314/JOR.2001.041" },
  },
];
