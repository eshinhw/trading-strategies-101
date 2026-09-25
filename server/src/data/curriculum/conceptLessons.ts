import type { ConceptLesson } from "./types.js";

export const conceptLessons: ConceptLesson[] = [
  {
    kind: "concept",
    slug: "concept-what-is-an-option",
    title: "The Option Contract",
    summary: "The two basic contracts every strategy in this course is built from.",
    body: [
      { type: "heading", text: "Calls and Puts" },
      { type: "paragraph", text: "An option is a contract that gives its buyer a right, but not an obligation. A call option gives the buyer the right to buy a stock at a fixed price (the strike price) before or at a set date (expiration). A put option gives the buyer the right to sell a stock at the strike price." },
      { type: "heading", text: "The Seller's Obligation" },
      { type: "paragraph", text: "The seller (or 'writer') of an option takes the other side of that right: if a call buyer exercises, the call seller must deliver stock at the strike price, whether or not that's a good deal for them. That asymmetry — the buyer can walk away, the seller can't — is why option sellers get paid a premium upfront." },
      { type: "heading", text: "Four Building Blocks" },
      { type: "paragraph", text: "Every strategy in this course, no matter how many legs it has, is built from just four raw building blocks: long a call, short a call, long a put, short a put — often combined with a stock position. Once you're comfortable reasoning about those four positions individually, every multi-leg strategy is just addition." },
      { type: "heading", text: "A Habit Worth Building" },
      { type: "paragraph", text: "One habit worth building now: always ask 'who benefits if the stock goes up, and who benefits if it goes down?' for each leg separately, before you look at the combined position. It's the fastest way to understand any strategy, including ones you've never seen before." },
      { type: "heading", text: "In Practice" },
      { type: "paragraph", text: "A right without an obligation shows up outside the options market too — when a homebuyer pays a deposit for the exclusive right to buy a house at an agreed price within 60 days, they've effectively bought a call option on that house: if the market moves further in their favor they can still buy at the locked-in price, and if it doesn't, they can walk away and lose only the deposit." },
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
      {
        id: "q4",
        prompt: "A put option gives its buyer the right to do what?",
        choices: [
          "Buy the stock at the strike price",
          "Sell the stock at the strike price",
          "Buy the stock at any price they choose",
          "Receive a fixed premium at expiration",
        ],
        correctIndex: 1,
        explanation:
          "A put option gives the buyer the right, but not the obligation, to sell the stock at the strike price.",
      },
      {
        id: "q5",
        prompt: "According to this lesson, every strategy in this course is built from how many raw building blocks?",
        choices: [
          "Two: buying and selling",
          "Three: calls, puts, and stock",
          "Four: long call, short call, long put, short put",
          "It varies strategy by strategy — there's no fixed set",
        ],
        correctIndex: 2,
        explanation:
          "Long a call, short a call, long a put, short a put — often combined with a stock position. Every multi-leg strategy is built from these four.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "concept-moneyness",
    title: "Moneyness: ITM, ATM, OTM",
    summary: "A quick way to describe where a strike sits relative to the stock price.",
    body: [
      { type: "heading", text: "What Moneyness Means" },
      { type: "paragraph", text: "Moneyness describes the relationship between an option's strike price and the stock's current price. It comes up constantly in this course's strategy descriptions, so it's worth being fluent in it before moving on." },
      { type: "heading", text: "Moneyness for Calls" },
      { type: "paragraph", text: "For a call option: if the stock price is above the strike, the call is in-the-money (ITM) — exercising it right now would be profitable. If the stock is below the strike, it's out-of-the-money (OTM). If they're equal, it's at-the-money (ATM)." },
      { type: "heading", text: "Moneyness for Puts" },
      { type: "paragraph", text: "For a put option, it's flipped: the put is ITM when the stock is below the strike, and OTM when the stock is above the strike." },
      { type: "heading", text: "Why It Affects Price" },
      { type: "paragraph", text: "As a rule of thumb, ITM options are more expensive (they have real, immediate value) and OTM options are cheaper (they're 'betting' on a move that hasn't happened yet). You'll see this pattern show up in almost every strategy: buying OTM options to keep cost down, selling OTM options to collect a safer premium." },
      { type: "heading", text: "In Practice" },
      { type: "paragraph", text: "Traders shorthand this constantly on a trading desk: a market maker scanning an options chain on an earnings day will describe strikes as 'deep ITM,' 'ATM,' or 'way OTM' without doing any math — moneyness is the mental sorting tool that lets them instantly tell which of dozens of strikes are worth quoting tightly and which are near-worthless lottery tickets." },
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
      {
        id: "q4",
        prompt: "A stock trades at exactly $100. What is the moneyness of a $100-strike call?",
        choices: [
          "In-the-money",
          "Out-of-the-money",
          "At-the-money",
          "Undefined — moneyness requires the strike and stock price to differ",
        ],
        correctIndex: 2,
        explanation: "When the strike equals the current stock price, the option is at-the-money (ATM).",
      },
      {
        id: "q5",
        prompt:
          "Per this lesson's rule of thumb, why do so many strategies buy OTM options to keep cost down and sell OTM options for a 'safer' premium?",
        choices: [
          "OTM options have no intrinsic value yet, so they're cheaper to buy and less likely to be exercised against a seller",
          "OTM options are always more expensive than ITM options",
          "OTM options guarantee a profit for the buyer",
          "Moneyness has no real effect on an option's price",
        ],
        correctIndex: 0,
        explanation:
          "OTM options are cheaper to buy (no intrinsic value yet) and, for a seller, less likely to move in-the-money and get exercised — which is why they show up on both sides of so many strategies.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "concept-reading-a-payoff-diagram",
    title: "Reading a Payoff Diagram",
    summary: "How to read the chart you'll see on every strategy lesson in this course.",
    body: [
      { type: "heading", text: "What the Chart Shows" },
      { type: "paragraph", text: "A payoff diagram plots profit or loss (y-axis) at expiration against the stock's price at expiration (x-axis). It answers one question: 'if the stock ends up at this price, how much money did I make or lose?'" },
      { type: "heading", text: "The Breakeven Point" },
      { type: "paragraph", text: "The breakeven point is where the line crosses zero — below it you lose money, above it (or vice versa) you profit, depending on the strategy's shape. Some strategies have two breakevens (a range that's profitable, or a range that's a loss); some have none." },
      { type: "heading", text: "Max Profit and Max Loss" },
      { type: "paragraph", text: "Max profit and max loss are the best and worst outcomes the strategy can produce. For some strategies these are hard caps (a butterfly can't lose more than its debit); for others one side is 'unlimited' — the line keeps sloping away from zero as the stock keeps moving, with no ceiling or floor." },
      { type: "heading", text: "Reading the Shape" },
      { type: "paragraph", text: "The shape itself tells a story: a flat line means 'this outcome doesn't depend on the stock price here.' A sloped line means 'I'm exposed dollar-for-dollar in this zone.' A kink is where a leg's strike price is — that's where its behavior changes. Learning to read the shape at a glance, before looking at the exact numbers, is the single most useful skill this course builds." },
      { type: "heading", text: "In Practice" },
      { type: "paragraph", text: "Risk desks at banks and hedge funds build a payoff diagram like this for every position before it's approved, precisely so a risk manager who has never seen the trade can glance at the shape and immediately spot an uncapped loss or a lopsided bet — the diagram is a real underwriting tool, not just a teaching aid." },
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
      {
        id: "q4",
        prompt: "What does a payoff diagram's x-axis represent?",
        choices: [
          "Time until expiration",
          "The stock's price at expiration",
          "The option's premium",
          "Implied volatility",
        ],
        correctIndex: 1,
        explanation: "The x-axis is the stock price at expiration; the y-axis is profit or loss at that price.",
      },
      {
        id: "q5",
        prompt: "What does a flat (horizontal) segment of a payoff line tell you?",
        choices: [
          "The strategy always loses money",
          "The outcome doesn't change with the stock price in that zone",
          "The chart is missing data",
          "The stock is exactly at the strike price",
        ],
        correctIndex: 1,
        explanation:
          "A flat line means profit or loss stays the same no matter how the stock price moves within that zone — you're not exposed there.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "concept-debit-vs-credit",
    title: "Debit vs. Credit Trades",
    summary: "Do you pay to enter the trade, or get paid?",
    body: [
      { type: "heading", text: "Net Cash Flow at Entry" },
      { type: "paragraph", text: "Every options strategy has a net cash flow at entry: either you pay money to put it on (a net debit) or you receive money for putting it on (a net credit)." },
      { type: "heading", text: "Net Debit Trades" },
      { type: "paragraph", text: "A net debit trade means you bought more option value than you sold. Your maximum possible loss is capped at what you paid, and you need the stock to move enough to earn that cost back before you're profitable — that's exactly what a breakeven point represents in a debit trade." },
      { type: "heading", text: "Net Credit Trades" },
      { type: "paragraph", text: "A net credit trade means you sold more option value than you bought. You keep the credit if things go your way, but now you're the one with an obligation — your risk is on the other side, and depending on the strategy it can be capped or uncapped." },
      { type: "heading", text: "Choosing Between Them" },
      { type: "paragraph", text: "Neither is inherently 'better' — a debit trade risks a known, limited amount for a shot at a bigger (sometimes unlimited) gain; a credit trade collects a known, limited amount upfront in exchange for taking on the risk side of that same trade. Matching the type to your market view and risk tolerance is most of the job." },
      { type: "heading", text: "In Practice" },
      { type: "paragraph", text: "This split matches how brokers actually size margin requirements: a net debit trade only ties up the cash you already paid, while a net credit trade requires posting margin against the risk you've taken on — which is why two trades that look similar on a payoff chart can tie up very different amounts of capital in a real account." },
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
      {
        id: "q4",
        prompt: "In a net debit trade, what does the breakeven price represent?",
        choices: [
          "The price at which the stock was originally purchased",
          "The stock price at expiration where you've just earned back what you paid",
          "The strike price of the option, always",
          "The point where the seller starts losing money",
        ],
        correctIndex: 1,
        explanation:
          "The breakeven in a debit trade is where the position's value exactly offsets what you paid to enter it — beyond that, you're profitable.",
      },
      {
        id: "q5",
        prompt:
          "According to this lesson, how should you decide between a debit and a credit structure for a given trade idea?",
        choices: [
          "Always prefer credit trades — they're objectively safer",
          "Always prefer debit trades — they have capped risk",
          "Match the structure to your market view and risk tolerance — neither is inherently better",
          "It doesn't matter; debit and credit trades are functionally identical",
        ],
        correctIndex: 2,
        explanation:
          "The lesson's takeaway is explicit: you're choosing between a known, limited cost for a shot at uncapped upside, or a known, limited credit for taking on risk. Fit the choice to your view and risk tolerance.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "concept-legs-and-combinations",
    title: "Legs and Combinations",
    summary: "The mental model that makes 58 strategies feel like far fewer.",
    body: [
      { type: "heading", text: "What a Leg Is" },
      { type: "paragraph", text: "Every strategy in this course — no matter how exotic-sounding — is a combination of a small number of 'legs': individual positions in stock, calls, or puts, each with its own direction (long/short) and, for options, a strike price." },
      { type: "heading", text: "Combining Simpler Strategies" },
      { type: "paragraph", text: "This matters because it means you don't need to memorize 58 unrelated recipes. A bull call spread is a long call plus a short call. An iron condor is a bull put spread plus a bear call spread, run at the same time. A long straddle is a long call plus a long put at the same strike. Once you can see a complex strategy as 'strategy A plus strategy B,' it stops being intimidating." },
      { type: "heading", text: "How This Course Is Ordered" },
      { type: "paragraph", text: "This course's modules are ordered around that idea: simple 2-leg strategies first, then the 3- and 4-leg strategies that are built by combining or adjusting them. When you hit a new strategy, your first move should be to count the legs and ask which simpler strategies (if any) you can already see inside it." },
      { type: "heading", text: "Seeing It in the Tool" },
      { type: "paragraph", text: "The interactive payoff tool in every strategy lesson is designed to reinforce this: watch how the combined line is really just the sum of what each leg would do on its own." },
      { type: "heading", text: "In Practice" },
      { type: "paragraph", text: "This is exactly how professional options traders read an unfamiliar position on a risk report: rather than memorizing the P&L shape of every possible combination, they mentally decompose it into legs they already know — the same way a musician recognizes a complicated chord as two simpler chords played together." },
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
      {
        id: "q3",
        prompt: "Per this lesson, a bull call spread is described as a combination of which two positions?",
        choices: [
          "A long put and a short put",
          "A long call and a short call",
          "A long call and a long put",
          "A covered call and a protective put",
        ],
        correctIndex: 1,
        explanation:
          "A bull call spread is a long call plus a short call at a different strike — one of the simplest examples of combining legs.",
      },
      {
        id: "q4",
        prompt: "A long straddle is described in this lesson as which combination?",
        choices: [
          "A long call and a long put at the same strike",
          "A long call and a short call at different strikes",
          "Two long puts at different strikes",
          "A long stock position plus a short call",
        ],
        correctIndex: 0,
        explanation:
          "A long straddle is a long call plus a long put at the same strike — betting on a big move in either direction.",
      },
      {
        id: "q5",
        prompt:
          "What is the interactive payoff tool in each strategy lesson specifically designed to show, according to this lesson?",
        choices: [
          "That every strategy is unique and unrelated to the others",
          "How the combined payoff line is really just the sum of what each individual leg would do on its own",
          "The historical price of the underlying stock",
          "The tax treatment of each strategy",
        ],
        correctIndex: 1,
        explanation:
          "Watching the combined line break down into its legs reinforces the core mental model: complex strategies are just sums of simpler positions.",
      },
    ],
  },
];
