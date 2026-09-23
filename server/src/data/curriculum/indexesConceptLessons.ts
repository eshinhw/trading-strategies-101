import type { ConceptLesson } from "./types.js";

// Concept-lesson format, same reasoning as the other non-options courses —
// these are index-arbitrage and volatility-trading concepts, not
// option-payoff structures, so prose + a knowledge-check quiz fits better
// than the options-specific engine.
export const indexesConceptLessons: ConceptLesson[] = [
  {
    kind: "concept",
    slug: "indexes-cash-and-carry-arbitrage",
    title: "Cash-and-carry arbitrage",
    summary: "Buying an index's stocks and selling index futures against them, capturing a mispricing between the futures price and its fair, cost-of-carry value.",
    body: [
      { type: "paragraph", text: "Cash-and-carry arbitrage exploits the relationship between an index's futures price and its current (\"spot\") value: in theory, a futures contract on an index should trade at spot plus the cost of carrying that position to expiration — mainly financing costs, minus any dividends the underlying stocks pay out before expiration. When the actual futures price trades above this \"fair value,\" the arbitrage is to buy the underlying basket of stocks, the \"cash\" side, and simultaneously sell the futures contract, going \"short the carry,\" locking in a profit as the two converge by expiration." },
      { type: "paragraph", text: "The trade is close to risk-free in principle: at expiration, the futures contract settles against the actual index level, so the long stock basket and the short futures position converge to the same value regardless of where the market ends up — the profit comes from the initial mispricing, not from taking a view on market direction. This is why the trade is called \"arbitrage\" rather than a directional bet." },
      { type: "paragraph", text: "In practice, real friction narrows or eliminates the opportunity: buying every stock in an index in the correct weights involves transaction costs and tracking error, the financing rate used to compute fair value may differ from what an arbitrageur can actually borrow at, and dividend payments, which reduce the futures' fair value, can be uncertain or change before expiration — all of which mean the \"riskless\" trade carries real execution risk that erodes the theoretical profit." },
      { type: "paragraph", text: "Because index futures are heavily traded and closely watched by many market participants, the cash-and-carry mispricing tends to be small and short-lived in liquid markets — it's a trade that depends on speed and low transaction costs to capture a thin margin reliably, which is why it's typically the domain of large institutional trading desks with the infrastructure to trade a full stock basket efficiently, rather than a place individual traders can easily compete." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What relationship does cash-and-carry arbitrage exploit?",
        choices: [
          "The relationship between two unrelated stocks",
          "The relationship between an index futures price and its spot value plus the cost of carry (financing minus dividends)",
          "The relationship between a stock's price and its earnings",
          "The relationship between bond yields and stock prices",
        ],
        correctIndex: 1,
        explanation:
          "The trade is based on the theoretical \"fair value\" link between an index's spot price and its futures price, which should differ only by the cost of carrying that position (financing costs minus expected dividends).",
      },
      {
        id: "q2",
        prompt: "What does an arbitrageur do when index futures trade above their theoretical fair value?",
        choices: [
          "Sell the underlying stocks and sell the futures",
          "Buy the underlying stocks (the \"cash\" side) and sell the futures contract",
          "Buy both the stocks and the futures",
          "Do nothing, since no opportunity exists",
        ],
        correctIndex: 1,
        explanation:
          "When futures are priced rich relative to fair value, the arbitrage is to buy the stocks and short the futures, capturing the mispricing as the two converge by expiration.",
      },
      {
        id: "q3",
        prompt: "Why is this trade close to risk-free in principle?",
        choices: [
          "Because the underlying stocks never change in price",
          "Because at expiration the futures settle against the actual index level, so the long stock basket and short futures converge to the same value regardless of market direction",
          "Because arbitrage trades are guaranteed by regulators",
          "Because the trade requires no capital",
        ],
        correctIndex: 1,
        explanation:
          "The long stock position and short futures position are designed to converge at expiration no matter where the market goes, isolating the initial mispricing rather than a directional bet.",
      },
      {
        id: "q4",
        prompt: "What real-world frictions can erode the theoretical profit of cash-and-carry arbitrage?",
        choices: [
          "There are no real frictions — the trade is always perfectly profitable",
          "Transaction costs and tracking error from trading a full stock basket, financing-rate differences, and uncertainty in dividend payments",
          "The trade can only be executed once per year",
          "Index futures cannot be shorted under any circumstances",
        ],
        correctIndex: 1,
        explanation:
          "In practice, real costs and uncertainties — trading the whole basket, actual borrowing rates, and dividend timing — mean the \"riskless\" trade carries genuine execution risk that can erode the theoretical arbitrage profit.",
      },
      {
        id: "q5",
        prompt: "Why is cash-and-carry arbitrage typically the domain of large institutional desks rather than individual traders?",
        choices: [
          "It is illegal for individual traders to participate",
          "The mispricing tends to be small and short-lived in liquid markets, requiring speed and low transaction costs to capture reliably",
          "Index futures are not available to retail traders under any regulation",
          "Institutional desks receive a fixed government subsidy for this trade",
        ],
        correctIndex: 1,
        explanation:
          "Because index futures are heavily traded and closely monitored, the opportunity is usually thin and fleeting, favoring participants with the infrastructure to trade a full basket efficiently and quickly.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "indexes-dispersion-trading",
    title: "Dispersion trading in equity indexes",
    summary: "Trading the difference between an index's implied volatility and the average implied volatility of its individual components, betting on how correlated those components will actually be.",
    body: [
      { type: "paragraph", text: "An equity index's volatility isn't just the average of its components' individual volatilities — it also depends heavily on how correlated those components are with each other. When index members move together, high correlation, their individual moves reinforce each other and the index as a whole swings a lot; when they move more independently, low correlation, individual swings partly cancel out and the index itself stays comparatively calm. Dispersion trading is built directly on this relationship between index volatility, component volatility, and their average correlation." },
      { type: "paragraph", text: "A classic dispersion trade sells options, or variance swaps, on the index while buying options, or variance swaps, on a basket of its individual components, in a ratio designed to be roughly neutral to the overall level of volatility — the trader isn't betting on volatility rising or falling broadly, but on the relationship between index-level and component-level volatility, which is really a bet on correlation. Selling index volatility while buying component volatility profits if realized correlation between the components comes in lower than what was implied when the trade was put on." },
      { type: "paragraph", text: "The intuition is that index options often trade at an implied correlation that's elevated relative to what typically materializes — investors buying index protection tend to bid up index-level implied volatility, while single-stock options are driven more by name-specific factors, creating a persistent gap that dispersion trades are designed to harvest, similar in spirit to how other volatility risk premium strategies collect a premium for providing insurance-like protection." },
      { type: "paragraph", text: "The central risk is a \"correlation spike\": during broad market stress, individual stocks that normally move somewhat independently often start moving together sharply, a flight to a single risk factor, often just \"the market going down\", pushing realized correlation up rather than down — exactly the scenario a short-index, long-component dispersion trade loses money in, which is why dispersion trading, like other volatility-selling strategies, tends to do well in calm periods and can suffer sharp losses during systemic selloffs." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does an equity index's volatility depend on, beyond just the average volatility of its components?",
        choices: [
          "Only the total number of stocks in the index",
          "How correlated the components are with each other",
          "The index's dividend yield",
          "The index's historical age",
        ],
        correctIndex: 1,
        explanation:
          "When components move together, their moves reinforce each other and index volatility rises; when they move independently, individual swings partly cancel out, so correlation drives the gap between index volatility and average component volatility.",
      },
      {
        id: "q2",
        prompt: "How is a classic dispersion trade typically structured?",
        choices: [
          "Buying options on the index and selling options on all its components",
          "Selling options (or variance swaps) on the index while buying options (or variance swaps) on a basket of its components",
          "Buying only index options with no position in individual components",
          "Selling every option in the market simultaneously",
        ],
        correctIndex: 1,
        explanation:
          "The trade sells index-level volatility exposure and buys component-level volatility exposure, sized to be roughly neutral to the overall level of volatility.",
      },
      {
        id: "q3",
        prompt: "What is dispersion trading fundamentally a bet on?",
        choices: [
          "The overall direction of the stock market",
          "The correlation between an index's individual components",
          "A single company's earnings report",
          "Interest rate changes",
        ],
        correctIndex: 1,
        explanation:
          "Since the trade is designed to be neutral to the broad level of volatility, its return depends on whether realized correlation between components comes in higher or lower than what was implied when the trade was placed.",
      },
      {
        id: "q4",
        prompt: "Why might index options tend to trade at an elevated implied correlation relative to what typically materializes?",
        choices: [
          "Because single-stock options are always more expensive than index options",
          "Investors buying index protection tend to bid up index-level implied volatility, while single-stock options are driven more by name-specific factors, creating a persistent gap",
          "Because correlation is fixed by regulation and cannot change",
          "Because index options are illiquid and rarely traded",
        ],
        correctIndex: 1,
        explanation:
          "Demand for portfolio-level insurance tends to keep index implied volatility (and thus implied correlation) elevated relative to what actually plays out, which dispersion trades try to harvest.",
      },
      {
        id: "q5",
        prompt: "What is the central risk of a short-index, long-component dispersion trade?",
        choices: [
          "A \"correlation spike\" during market stress, when individual stocks that normally move independently start moving together sharply",
          "The risk that all stocks in the index stop trading permanently",
          "The risk that index options cannot be sold short",
          "There is no risk once the trade is correctly sized",
        ],
        correctIndex: 0,
        explanation:
          "During systemic selloffs, correlation often spikes as stocks move together in a broad risk-off move, which is exactly the scenario that hurts a trade positioned for correlation to come in lower than implied.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "indexes-dispersion-trading-subset-portfolio",
    title: "Dispersion trading – subset portfolio",
    summary: "Running dispersion trading against only a subset of an index's components, rather than the full basket, to reduce cost and complexity while keeping the core correlation bet.",
    body: [
      { type: "paragraph", text: "A full dispersion trade, as classically constructed, requires taking a position in every single component of an index alongside the index option itself — for a broad index with dozens or hundreds of members, that means managing a large number of individual option or variance-swap positions, each with its own transaction costs, liquidity constraints, and monitoring burden. A subset-portfolio approach instead selects a smaller, carefully chosen group of components to represent the basket side of the trade, rather than using every single name." },
      { type: "paragraph", text: "The subset is typically chosen to preserve as much of the full basket's characteristics as possible with far fewer names — weighting toward the largest, most liquid, most heavily-weighted constituents of the index, since they contribute the most to the index's own volatility and correlation structure, while dropping smaller, less liquid names whose individual contribution to the trade's correlation exposure is minor relative to the added cost and complexity of including them." },
      { type: "paragraph", text: "This tradeoff, approximation versus full replication, means a subset dispersion trade won't track the true, full-basket correlation relationship perfectly; there's a real risk that correlation behaves differently among the excluded smaller names than among the large ones included in the subset, introducing a form of basis risk between the subset's realized correlation and the true index-wide correlation the trade is ultimately trying to capture." },
      { type: "paragraph", text: "In exchange for that approximation risk, a subset portfolio meaningfully cuts transaction costs, margin requirements, and ongoing monitoring effort, which can make dispersion trading practical for participants who can't justify the operational overhead of a full-basket version — the strategy is a deliberate simplification, trading some precision for a meaningfully lower cost to implement and maintain." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does a full, classically-constructed dispersion trade require?",
        choices: [
          "A position in a single representative stock only",
          "A position in every single component of the index alongside the index option itself",
          "No position in any individual stocks at all",
          "A position only in the index's largest competitor",
        ],
        correctIndex: 1,
        explanation:
          "The classic version of dispersion trading involves the entire basket of index components, which for a broad index means managing many individual positions.",
      },
      {
        id: "q2",
        prompt: "How does a subset-portfolio dispersion trade differ from the full-basket version?",
        choices: [
          "It uses more components than the full-basket version",
          "It selects a smaller, carefully chosen group of components to represent the basket side, rather than using every single name",
          "It eliminates the index option leg of the trade entirely",
          "It is mathematically identical to the full-basket version in every respect",
        ],
        correctIndex: 1,
        explanation:
          "Rather than trading the entire basket, a subset approach approximates it with fewer, carefully selected names to reduce cost and complexity.",
      },
      {
        id: "q3",
        prompt: "How is the subset of components typically chosen?",
        choices: [
          "Entirely at random from the full index",
          "Weighting toward the largest, most liquid, most heavily-weighted constituents, since they contribute most to the index's volatility and correlation structure",
          "Only the smallest, least liquid names in the index",
          "Names are chosen alphabetically",
        ],
        correctIndex: 1,
        explanation:
          "The subset is designed to preserve as much of the full basket's characteristics as possible, so it emphasizes the constituents that matter most to the index's own behavior.",
      },
      {
        id: "q4",
        prompt: "What risk does using a subset instead of the full basket introduce?",
        choices: [
          "There is no additional risk — subsets behave identically to the full basket",
          "Basis risk between the subset's realized correlation and the true, full-index-wide correlation the trade is meant to capture",
          "The risk that the index itself stops being calculated",
          "The risk of unlimited losses regardless of market conditions",
        ],
        correctIndex: 1,
        explanation:
          "Correlation can behave differently among the excluded smaller names than among the included large ones, so a subset approximation may not track the true index-wide correlation relationship perfectly.",
      },
      {
        id: "q5",
        prompt: "What is the main benefit of using a subset portfolio despite this approximation risk?",
        choices: [
          "It guarantees a higher return than the full-basket version",
          "It meaningfully cuts transaction costs, margin requirements, and monitoring effort, making the strategy practical for participants who can't justify full-basket overhead",
          "It eliminates all correlation risk from the trade",
          "It requires holding every stock in the index anyway",
        ],
        correctIndex: 1,
        explanation:
          "The subset approach is a deliberate tradeoff — some precision given up in exchange for a meaningfully lower cost and complexity to implement and maintain.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "indexes-intraday-etf-arbitrage",
    title: "Intraday arbitrage between index ETFs",
    summary: "Trading brief intraday price gaps between two ETFs that track the same or very similar indexes, exploiting the fact that arbitrage doesn't correct every mispricing instantly.",
    body: [
      { type: "paragraph", text: "Multiple ETFs often track the same or very similar underlying indexes — for example, several different providers may each offer an S&P 500 ETF. In theory, these ETFs should trade in a tight, predictable relationship to each other and to the underlying index's value throughout the day, since each one's price is kept close to its net asset value by a creation/redemption mechanism that lets authorized participants exchange ETF shares for the underlying basket of stocks, or vice versa. In practice, brief gaps between two such ETFs can still open up intraday." },
      { type: "paragraph", text: "Intraday arbitrage between index ETFs looks for these brief windows where two ETFs tracking the same or highly similar index diverge from their normal, tight relationship — buying the relatively cheap ETF and selling the relatively expensive one, betting the gap closes as the normal arbitrage mechanism, or simply other traders noticing the same opportunity, pulls the two back into line." },
      { type: "paragraph", text: "These gaps tend to be small and short-lived, since the ETF creation/redemption mechanism and other arbitrageurs are constantly working to keep prices aligned — but gaps can still appear from differences in trading volume and liquidity between the two ETFs, small differences in each fund's exact index methodology or rebalancing schedule, or brief periods of stress, like a fast market move, when the creation/redemption mechanism doesn't keep up instantaneously." },
      { type: "paragraph", text: "Because the opportunity is both small and fleeting, this strategy depends heavily on speed, low transaction costs, and the ability to monitor many ETF pairs simultaneously — it's a strategy dominated by high-frequency and algorithmic trading firms with the technology to detect and act on a brief price gap before it closes on its own, rather than something a slower-moving trader could reliably capture." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Why do ETFs tracking the same index normally trade in a tight relationship to each other?",
        choices: [
          "Because ETF prices are set once per year and never change",
          "A creation/redemption mechanism lets authorized participants exchange ETF shares for the underlying basket of stocks, keeping each ETF's price close to its net asset value",
          "Because all ETFs are required by law to have identical prices",
          "Because ETFs tracking the same index are actually the same legal entity",
        ],
        correctIndex: 1,
        explanation:
          "The creation/redemption arbitrage mechanism is what normally keeps an ETF's market price tightly linked to its underlying net asset value, and by extension to other ETFs tracking the same index.",
      },
      {
        id: "q2",
        prompt: "What does intraday ETF arbitrage do when two ETFs tracking the same index diverge from their normal relationship?",
        choices: [
          "Buy both ETFs in equal amounts",
          "Buy the relatively cheap ETF and sell the relatively expensive one, betting the gap closes",
          "Sell both ETFs and hold cash",
          "Ignore the divergence, since it never corrects",
        ],
        correctIndex: 1,
        explanation:
          "The trade captures the anticipated convergence between the two ETFs' prices, buying the cheaper one and selling the more expensive one.",
      },
      {
        id: "q3",
        prompt: "What can cause a brief price gap to open up between two ETFs tracking a similar index?",
        choices: [
          "Gaps can never occur between ETFs tracking the same index",
          "Differences in trading volume and liquidity, small differences in index methodology or rebalancing schedule, or brief periods of market stress",
          "Only a change in the ETF's official name",
          "ETFs are required to have identical prices by regulation, so gaps are impossible",
        ],
        correctIndex: 1,
        explanation:
          "Even though the arbitrage mechanism generally keeps ETF prices aligned, real-world differences in liquidity, methodology, and market conditions can still cause brief divergences.",
      },
      {
        id: "q4",
        prompt: "Why are these arbitrage opportunities typically small and short-lived?",
        choices: [
          "Because ETFs are rarely traded during market hours",
          "Because the creation/redemption mechanism and other arbitrageurs are constantly working to keep prices aligned",
          "Because regulators close any gap within one trading day by law",
          "Because ETF prices are fixed at the start of each day",
        ],
        correctIndex: 1,
        explanation:
          "Multiple forces — the formal arbitrage mechanism and other traders spotting the same opportunity — continuously work to correct any divergence, limiting how large or how long a gap can persist.",
      },
      {
        id: "q5",
        prompt: "What kind of trader typically dominates this strategy?",
        choices: [
          "Long-term buy-and-hold retail investors",
          "High-frequency and algorithmic trading firms with the technology to detect and act on brief price gaps quickly",
          "Only individual investors trading once per month",
          "Central banks",
        ],
        correctIndex: 1,
        explanation:
          "Because the opportunity is small and fleeting, capturing it reliably requires speed and the ability to monitor many ETF pairs simultaneously — capabilities associated with high-frequency and algorithmic trading operations.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "indexes-volatility-targeting",
    title: "Index volatility targeting with risk-free asset",
    summary: "Dynamically shifting a portfolio between an index and a risk-free asset to hold the portfolio's overall volatility near a constant target, rather than letting it swing with the market.",
    body: [
      { type: "paragraph", text: "An index's realized volatility isn't constant — it tends to rise during turbulent, uncertain periods and fall during calm ones. A volatility-targeting strategy responds to this by dynamically adjusting how much of a portfolio is allocated to the index versus a risk-free asset, like short-term Treasury bills, aiming to keep the overall portfolio's volatility close to a fixed target level regardless of how choppy or calm the index itself is behaving." },
      { type: "paragraph", text: "The mechanism is straightforward: when the index's recent realized volatility is running below the target, the strategy increases its allocation to the index, since more index exposure is needed to reach the target volatility, potentially even using leverage if allowed; when the index's volatility rises above the target, the strategy reduces its index allocation and shifts more into the risk-free asset, scaling back exposure to keep overall portfolio volatility from rising along with it." },
      { type: "paragraph", text: "This produces a portfolio whose risk level stays comparatively stable over time, in contrast to a simple buy-and-hold index position, whose risk level fluctuates directly with whatever the market happens to be doing — proponents argue this is more intuitive for investors who want a consistent risk experience, since a fixed-dollar index position can quietly become much riskier during a volatility spike without the investor taking any action." },
      { type: "paragraph", text: "The strategy isn't without drawbacks: because it reduces exposure after volatility has already risen, a lagging response, based on backward-looking realized volatility, and increases exposure after volatility has already fallen, it can end up selling into some of a selloff and buying into some of a calm rally — a pattern that resembles a mechanical version of \"sell weakness, buy strength\" rather than genuine market timing, and can underperform a static buy-and-hold approach in markets where volatility and returns aren't cleanly related in the way the strategy assumes." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does a volatility-targeting strategy dynamically adjust?",
        choices: [
          "The dividend yield of the index",
          "How much of a portfolio is allocated to the index versus a risk-free asset",
          "The number of shares in the underlying companies",
          "The maturity of every bond in a fixed-income portfolio",
        ],
        correctIndex: 1,
        explanation:
          "The strategy shifts allocation between the index and a risk-free asset to try to hold overall portfolio volatility near a fixed target.",
      },
      {
        id: "q2",
        prompt: "What does the strategy do when the index's recent realized volatility falls below the target?",
        choices: [
          "It sells all index exposure and holds only the risk-free asset",
          "It increases its allocation to the index, potentially using leverage if allowed, to reach the target volatility",
          "It has no reaction to falling volatility",
          "It immediately liquidates the entire portfolio",
        ],
        correctIndex: 1,
        explanation:
          "When the index is calmer than the target volatility level, the strategy adds more index exposure (or leverage) to bring overall portfolio risk back up to target.",
      },
      {
        id: "q3",
        prompt: "What happens to the strategy's index allocation when volatility rises above the target?",
        choices: [
          "The allocation to the index increases further",
          "The allocation to the index is reduced, shifting more into the risk-free asset",
          "The strategy takes no action regardless of volatility changes",
          "The index is replaced with a completely different asset class",
        ],
        correctIndex: 1,
        explanation:
          "Rising volatility triggers a reduction in index exposure and a shift toward the risk-free asset, to keep overall portfolio volatility from rising along with the market.",
      },
      {
        id: "q4",
        prompt: "How does a volatility-targeted portfolio's risk level compare to a simple buy-and-hold index position?",
        choices: [
          "It is identical, since both hold the same underlying index",
          "It stays comparatively stable over time, while a buy-and-hold position's risk fluctuates directly with whatever the market is doing",
          "It is always riskier than a buy-and-hold position",
          "Volatility targeting eliminates all risk entirely",
        ],
        correctIndex: 1,
        explanation:
          "The whole point of the strategy is to keep the portfolio's realized risk level more consistent, in contrast to a static position whose riskiness rises and falls with market volatility on its own.",
      },
      {
        id: "q5",
        prompt: "What is a key drawback of volatility targeting's reliance on backward-looking realized volatility?",
        choices: [
          "It has no drawbacks — the strategy responds instantly to future volatility",
          "It's a lagging response that can end up reducing exposure after a selloff has already happened and increasing exposure after a calm rally has already happened",
          "It requires no historical data whatsoever",
          "Realized volatility cannot be measured for any index",
        ],
        correctIndex: 1,
        explanation:
          "Since the strategy reacts to volatility that has already occurred, it can inadvertently sell into weakness and buy into strength, a pattern that can underperform a static approach when volatility and returns don't move in the way the strategy assumes.",
      },
    ],
  },
];
