import type { ConceptLesson } from "./types.js";

export const conceptLessons: ConceptLesson[] = [
  {
    kind: "concept",
    slug: "concept-what-is-an-option",
    title: "What is an option?",
    summary: "The two basic contracts every strategy in this course is built from.",
    body: [
      "An option is a contract that gives its buyer a right, but not an obligation. A call option gives the buyer the right to buy a stock at a fixed price (the strike price) before or at a set date (expiration). A put option gives the buyer the right to sell a stock at the strike price.",
      "The seller (or 'writer') of an option takes the other side of that right: if a call buyer exercises, the call seller must deliver stock at the strike price, whether or not that's a good deal for them. That asymmetry — the buyer can walk away, the seller can't — is why option sellers get paid a premium upfront.",
      "Every strategy in this course, no matter how many legs it has, is built from just four raw building blocks: long a call, short a call, long a put, short a put — often combined with a stock position. Once you're comfortable reasoning about those four positions individually, every multi-leg strategy is just addition.",
      "One habit worth building now: always ask 'who benefits if the stock goes up, and who benefits if it goes down?' for each leg separately, before you look at the combined position. It's the fastest way to understand any strategy, including ones you've never seen before.",
    ],
    quiz: [
      {
        id: "q1",
        prompt: "If you buy a call option, what have you acquired?",
        choices: [
          "The obligation to buy the stock at the strike price",
          "The right, but not the obligation, to buy the stock at the strike price",
          "The right to sell the stock at the strike price",
          "A share of the underlying stock",
        ],
        correctIndex: 1,
        explanation:
          "A call buyer has a right, not an obligation — they'll only exercise it if it's profitable to do so.",
      },
      {
        id: "q2",
        prompt: "Who is obligated to act if an option is exercised?",
        choices: ["The buyer", "The seller (writer)", "Both equally", "Neither — options are never binding"],
        correctIndex: 1,
        explanation:
          "The seller took on an obligation in exchange for the premium they received upfront — they must perform if the buyer chooses to exercise.",
      },
      {
        id: "q3",
        prompt: "Why does an option seller receive a premium?",
        choices: [
          "As compensation for taking on an obligation while the buyer only has a right",
          "Because options always expire worthless",
          "It's a refundable deposit",
          "Premiums are only paid on stocks, not options",
        ],
        correctIndex: 0,
        explanation:
          "The premium compensates the seller for the asymmetric risk they've taken on — unlimited-ish obligation versus the buyer's limited, optional right.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "concept-moneyness",
    title: "Moneyness: ITM, ATM, OTM",
    summary: "A quick way to describe where a strike sits relative to the stock price.",
    body: [
      "Moneyness describes the relationship between an option's strike price and the stock's current price. It comes up constantly in this course's strategy descriptions, so it's worth being fluent in it before moving on.",
      "For a call option: if the stock price is above the strike, the call is in-the-money (ITM) — exercising it right now would be profitable. If the stock is below the strike, it's out-of-the-money (OTM). If they're equal, it's at-the-money (ATM).",
      "For a put option, it's flipped: the put is ITM when the stock is below the strike, and OTM when the stock is above the strike.",
      "As a rule of thumb, ITM options are more expensive (they have real, immediate value) and OTM options are cheaper (they're 'betting' on a move that hasn't happened yet). You'll see this pattern show up in almost every strategy: buying OTM options to keep cost down, selling OTM options to collect a safer premium.",
    ],
    quiz: [
      {
        id: "q1",
        prompt: "A stock trades at $100. Is a $95-strike call in-the-money or out-of-the-money?",
        choices: ["In-the-money", "Out-of-the-money", "At-the-money", "Moneyness doesn't apply to calls"],
        correctIndex: 0,
        explanation: "The stock ($100) is above the call's strike ($95), so the call is in-the-money.",
      },
      {
        id: "q2",
        prompt: "A stock trades at $100. Is a $95-strike put in-the-money or out-of-the-money?",
        choices: ["In-the-money", "Out-of-the-money", "At-the-money", "Moneyness doesn't apply to puts"],
        correctIndex: 1,
        explanation: "For a put, ITM means the stock is below the strike. $100 is above $95, so this put is OTM.",
      },
      {
        id: "q3",
        prompt: "All else equal, which option is typically cheaper?",
        choices: [
          "An in-the-money option",
          "An out-of-the-money option",
          "They always cost the same",
          "Cost has nothing to do with moneyness",
        ],
        correctIndex: 1,
        explanation:
          "OTM options have no intrinsic value yet — they're purely a bet on a future move — so they're generally cheaper than ITM options.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "concept-reading-a-payoff-diagram",
    title: "Reading a payoff diagram",
    summary: "How to read the chart you'll see on every strategy lesson in this course.",
    body: [
      "A payoff diagram plots profit or loss (y-axis) at expiration against the stock's price at expiration (x-axis). It answers one question: 'if the stock ends up at this price, how much money did I make or lose?'",
      "The breakeven point is where the line crosses zero — below it you lose money, above it (or vice versa) you profit, depending on the strategy's shape. Some strategies have two breakevens (a range that's profitable, or a range that's a loss); some have none.",
      "Max profit and max loss are the best and worst outcomes the strategy can produce. For some strategies these are hard caps (a butterfly can't lose more than its debit); for others one side is 'unlimited' — the line keeps sloping away from zero as the stock keeps moving, with no ceiling or floor.",
      "The shape itself tells a story: a flat line means 'this outcome doesn't depend on the stock price here.' A sloped line means 'I'm exposed dollar-for-dollar in this zone.' A kink is where a leg's strike price is — that's where its behavior changes. Learning to read the shape at a glance, before looking at the exact numbers, is the single most useful skill this course builds.",
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does the point where the payoff line crosses zero represent?",
        choices: ["Max profit", "Max loss", "Breakeven", "The strike price, always"],
        correctIndex: 2,
        explanation: "That's the breakeven — the stock price at expiration where the trade neither makes nor loses money.",
      },
      {
        id: "q2",
        prompt: "A payoff line that keeps sloping upward with no flattening as the stock price rises means:",
        choices: [
          "Max profit is capped",
          "Max profit is unlimited",
          "The strategy always loses money",
          "The chart has an error",
        ],
        correctIndex: 1,
        explanation:
          "If the line never flattens as the stock keeps rising, profit keeps growing without a ceiling — unlimited max profit.",
      },
      {
        id: "q3",
        prompt: "What typically causes a 'kink' (a bend) in a payoff diagram?",
        choices: [
          "Random noise in the chart",
          "A strike price, where an option leg's behavior changes",
          "The current stock price, always",
          "Kinks only appear in broken charts",
        ],
        correctIndex: 1,
        explanation:
          "Each option leg only starts paying off once the stock crosses its strike — that transition is exactly where you'll see a kink.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "concept-debit-vs-credit",
    title: "Debit vs. credit trades",
    summary: "Do you pay to enter the trade, or get paid?",
    body: [
      "Every options strategy has a net cash flow at entry: either you pay money to put it on (a net debit) or you receive money for putting it on (a net credit).",
      "A net debit trade means you bought more option value than you sold. Your maximum possible loss is capped at what you paid, and you need the stock to move enough to earn that cost back before you're profitable — that's exactly what a breakeven point represents in a debit trade.",
      "A net credit trade means you sold more option value than you bought. You keep the credit if things go your way, but now you're the one with an obligation — your risk is on the other side, and depending on the strategy it can be capped or uncapped.",
      "Neither is inherently 'better' — a debit trade risks a known, limited amount for a shot at a bigger (sometimes unlimited) gain; a credit trade collects a known, limited amount upfront in exchange for taking on the risk side of that same trade. Matching the type to your market view and risk tolerance is most of the job.",
    ],
    quiz: [
      {
        id: "q1",
        prompt: "In a net debit trade, what is your maximum possible loss (in the simplest case)?",
        choices: [
          "Unlimited",
          "The amount you paid to enter the trade",
          "Zero — debit trades can't lose money",
          "The strike price",
        ],
        correctIndex: 1,
        explanation: "You can't lose more than you paid — the debit is money already spent, and that's the cap on the downside.",
      },
      {
        id: "q2",
        prompt: "A net credit trade means:",
        choices: [
          "You paid money to enter the position",
          "You received money to enter the position",
          "The trade is guaranteed to profit",
          "No options were actually traded",
        ],
        correctIndex: 1,
        explanation: "Net credit means the premium you collected from what you sold exceeded what you paid for what you bought.",
      },
      {
        id: "q3",
        prompt: "Is a net credit strategy always lower-risk than a net debit strategy?",
        choices: [
          "Yes, always",
          "No — some credit strategies carry unlimited risk despite the upfront credit",
          "Credit and debit trades carry identical risk by definition",
          "Risk doesn't apply to credit trades",
        ],
        correctIndex: 1,
        explanation:
          "A short straddle, for example, is a net credit trade with unlimited risk. The cash flow direction tells you nothing about risk on its own.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "concept-legs-and-combinations",
    title: "Strategies are built from legs",
    summary: "The mental model that makes 58 strategies feel like far fewer.",
    body: [
      "Every strategy in this course — no matter how exotic-sounding — is a combination of a small number of 'legs': individual positions in stock, calls, or puts, each with its own direction (long/short) and, for options, a strike price.",
      "This matters because it means you don't need to memorize 58 unrelated recipes. A bull call spread is a long call plus a short call. An iron condor is a bull put spread plus a bear call spread, run at the same time. A long straddle is a long call plus a long put at the same strike. Once you can see a complex strategy as 'strategy A plus strategy B,' it stops being intimidating.",
      "This course's modules are ordered around that idea: simple 2-leg strategies first, then the 3- and 4-leg strategies that are built by combining or adjusting them. When you hit a new strategy, your first move should be to count the legs and ask which simpler strategies (if any) you can already see inside it.",
      "The interactive payoff tool in every strategy lesson is designed to reinforce this: watch how the combined line is really just the sum of what each leg would do on its own.",
    ],
    quiz: [
      {
        id: "q1",
        prompt: "An iron condor can be understood as a combination of which two simpler strategies?",
        choices: [
          "A long straddle and a short straddle",
          "A bull put spread and a bear call spread",
          "Two covered calls",
          "A protective put and a protective call",
        ],
        correctIndex: 1,
        explanation:
          "An iron condor sells an OTM put spread and an OTM call spread at the same time — a bull put spread plus a bear call spread.",
      },
      {
        id: "q2",
        prompt: "What's the main benefit of thinking in terms of 'legs' rather than memorizing whole strategies?",
        choices: [
          "It makes the payoff diagrams disappear",
          "It lets you recognize complex strategies as combinations of simpler ones you already understand",
          "It removes the need to know strike prices",
          "There is no benefit — every strategy must be memorized independently",
        ],
        correctIndex: 1,
        explanation:
          "Seeing the building blocks means new, unfamiliar-looking strategies become far less intimidating once you spot the simpler strategies inside them.",
      },
    ],
  },
];
