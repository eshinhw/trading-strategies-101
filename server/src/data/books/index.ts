import type { Book, BookCategory } from "./types.js";

export const bookCategories: { slug: BookCategory; title: string; description: string }[] = [
  {
    slug: "quant-derivatives",
    title: "Quant & Derivatives",
    description: "Pricing theory, volatility, and the math underneath the strategies in this course.",
  },
  {
    slug: "market-structure",
    title: "Market Structure & Trading",
    description: "How exchanges, order books, and systematic strategies actually work in practice.",
  },
  {
    slug: "psychology-process",
    title: "Psychology & Process",
    description: "Risk, discipline, and decision-making under uncertainty — the part no formula covers.",
  },
  {
    slug: "memoirs-history",
    title: "Memoirs & Market History",
    description: "Narrative accounts of the trades, blowups, and funds that shaped how markets work today.",
  },
];

export const books: Book[] = [
  // --- Quant & Derivatives ---
  {
    slug: "options-futures-and-other-derivatives",
    title: "Options, Futures, and Other Derivatives",
    author: "John C. Hull",
    year: 2021,
    category: "quant-derivatives",
    level: "intermediate",
    summary:
      "The standard reference on derivatives pricing — binomial trees, Black-Scholes, Greeks, exotic options, and the models underneath most of what's in this course's Options track.",
    whyItsHere: "The default assigned text in most MFE programs and junior derivatives-desk reading lists.",
  },
  {
    slug: "option-volatility-and-pricing",
    title: "Option Volatility and Pricing",
    author: "Sheldon Natenberg",
    year: 1994,
    category: "quant-derivatives",
    level: "intermediate",
    summary:
      "A practitioner's guide to how volatility actually drives option prices, and how market makers think about skew, spreads, and position risk.",
    whyItsHere: "Widely considered the book that bridges textbook option theory and how a trading desk actually thinks.",
  },
  {
    slug: "advances-in-financial-machine-learning",
    title: "Advances in Financial Machine Learning",
    author: "Marcos López de Prado",
    year: 2018,
    category: "quant-derivatives",
    level: "advanced",
    summary:
      "Machine learning techniques built specifically for the pitfalls of financial data — leakage, non-stationarity, and backtest overfitting.",
    whyItsHere: "A common reference for quant researchers building systematic strategies, not just running textbook ML.",
  },
  {
    slug: "paul-wilmott-on-quantitative-finance",
    title: "Paul Wilmott on Quantitative Finance",
    author: "Paul Wilmott",
    year: 2006,
    category: "quant-derivatives",
    level: "advanced",
    summary:
      "A broad, opinionated tour of quantitative finance — stochastic calculus, PDE pricing methods, and where the models break down in practice.",
    whyItsHere: "Popular with quants who want the math without losing the practitioner's skepticism of the models.",
  },
  {
    slug: "volatility-trading",
    title: "Volatility Trading",
    author: "Euan Sinclair",
    year: 2013,
    category: "quant-derivatives",
    level: "advanced",
    summary:
      "A working trader's framework for estimating volatility, sizing positions, and finding an edge in options markets.",
    whyItsHere: "A go-to for prop and options traders looking for a rigorous, non-academic take on vol trading.",
  },

  // --- Market Structure & Trading ---
  {
    slug: "trading-and-exchanges",
    title: "Trading and Exchanges: Market Microstructure for Practitioners",
    author: "Larry Harris",
    year: 2002,
    category: "market-structure",
    level: "intermediate",
    summary:
      "The definitive reference on how exchanges, order books, and market participants actually interact — liquidity, price discovery, and trading costs.",
    whyItsHere: "Standard reading for anyone building execution logic or studying market microstructure.",
  },
  {
    slug: "flash-boys",
    title: "Flash Boys",
    author: "Michael Lewis",
    year: 2014,
    category: "market-structure",
    level: "beginner",
    summary:
      "A narrative account of the rise of high-frequency trading and the infrastructure race that came with it.",
    whyItsHere: "The most common on-ramp for understanding why market structure and latency matter at all.",
  },
  {
    slug: "dark-pools",
    title: "Dark Pools",
    author: "Scott Patterson",
    year: 2012,
    category: "market-structure",
    level: "beginner",
    summary: "How electronic and algorithmic trading reshaped modern markets, told through the people who built it.",
    whyItsHere: "A readable companion to Flash Boys, with more focus on the algorithms themselves.",
  },
  {
    slug: "inside-the-black-box",
    title: "Inside the Black Box",
    author: "Rishi K. Narang",
    year: 2009,
    category: "market-structure",
    level: "beginner",
    summary: "An accessible walkthrough of how quantitative trading strategies are actually researched, built, and run.",
    whyItsHere: "Often the first recommendation for someone asking \"what does a quant fund actually do all day.\"",
  },
  {
    slug: "algorithmic-trading-chan",
    title: "Algorithmic Trading",
    author: "Ernest P. Chan",
    year: 2013,
    category: "market-structure",
    level: "intermediate",
    summary: "Practical strategy design, backtesting, and execution for systematic and quantitative traders.",
    whyItsHere: "A hands-on companion for traders moving from strategy idea to a working, backtested system.",
  },

  // --- Psychology & Process ---
  {
    slug: "market-wizards",
    title: "Market Wizards",
    author: "Jack D. Schwager",
    year: 1989,
    category: "psychology-process",
    level: "beginner",
    summary:
      "Interviews with some of the most successful traders of their era, covering how they think about risk, edge, and discipline.",
    whyItsHere: "The book most practitioners point to first when asked what actually separates good traders from the rest.",
  },
  {
    slug: "trading-in-the-zone",
    title: "Trading in the Zone",
    author: "Mark Douglas",
    year: 2000,
    category: "psychology-process",
    level: "beginner",
    summary: "A framework for thinking in probabilities and managing the psychological side of taking risk.",
    whyItsHere: "The standard reference on trading psychology and discipline, cited across every corner of the industry.",
  },
  {
    slug: "thinking-fast-and-slow",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    year: 2011,
    category: "psychology-process",
    level: "intermediate",
    summary:
      "The behavioral-economics foundation for understanding cognitive biases in decision-making under uncertainty.",
    whyItsHere: "Not a markets book, but the underlying research most trading-psychology books build on.",
  },
  {
    slug: "fooled-by-randomness",
    title: "Fooled by Randomness",
    author: "Nassim Nicholas Taleb",
    year: 2001,
    category: "psychology-process",
    level: "beginner",
    summary: "On the outsized role of luck versus skill in markets, careers, and how we tell stories about outcomes.",
    whyItsHere: "A common early read for separating process from results when evaluating a strategy or a track record.",
  },

  // --- Memoirs & Market History ---
  {
    slug: "reminiscences-of-a-stock-operator",
    title: "Reminiscences of a Stock Operator",
    author: "Edwin Lefèvre",
    year: 1923,
    category: "memoirs-history",
    level: "beginner",
    summary:
      "A fictionalized memoir of trader Jesse Livermore's career — speculation, timing, and the psychology of the tape.",
    whyItsHere: "A century old and still on nearly every trading desk's recommended list.",
  },
  {
    slug: "the-big-short",
    title: "The Big Short",
    author: "Michael Lewis",
    year: 2010,
    category: "memoirs-history",
    level: "beginner",
    summary: "The story of the traders and investors who saw the 2008 mortgage market collapse coming and bet against it.",
    whyItsHere: "One of the most widely read accounts of how credit and derivatives markets actually broke in 2008.",
  },
  {
    slug: "when-genius-failed",
    title: "When Genius Failed",
    author: "Roger Lowenstein",
    year: 2000,
    category: "memoirs-history",
    level: "intermediate",
    summary: "The rise and collapse of Long-Term Capital Management, and what it revealed about leverage and tail risk.",
    whyItsHere: "A standard case study in risk management courses and desk reading lists on leverage and correlation risk.",
  },
  {
    slug: "the-man-who-solved-the-market",
    title: "The Man Who Solved the Market",
    author: "Gregory Zuckerman",
    year: 2019,
    category: "memoirs-history",
    level: "beginner",
    summary: "How Jim Simons and Renaissance Technologies built the most successful quantitative fund in history.",
    whyItsHere: "The most-recommended entry point for understanding what a purely systematic fund actually looks like.",
  },
  {
    slug: "liars-poker",
    title: "Liar's Poker",
    author: "Michael Lewis",
    year: 1989,
    category: "memoirs-history",
    level: "beginner",
    summary: "Michael Lewis's account of Wall Street bond-trading culture in the 1980s, from the inside.",
    whyItsHere: "A classic on trading-floor culture that's shaped how a generation of practitioners talk about the job.",
  },
];
