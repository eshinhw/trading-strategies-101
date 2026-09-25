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
      { type: "heading", text: "Spot, Futures, and Cost of Carry" },
      { type: "paragraph", text: "Cash-and-carry arbitrage exploits the relationship between an index's futures price and its current (\"spot\") value: in theory, a futures contract on an index should trade at spot plus the cost of carrying that position to expiration — mainly financing costs, minus any dividends the underlying stocks pay out before expiration. When the actual futures price trades above this \"fair value,\" the arbitrage is to buy the underlying basket of stocks, the \"cash\" side, and simultaneously sell the futures contract, going \"short the carry,\" locking in a profit as the two converge by expiration." },
      { type: "heading", text: "Why It's Close to Risk-Free" },
      { type: "paragraph", text: "The trade is close to risk-free in principle: at expiration, the futures contract settles against the actual index level, so the long stock basket and the short futures position converge to the same value regardless of where the market ends up — the profit comes from the initial mispricing, not from taking a view on market direction. This is why the trade is called \"arbitrage\" rather than a directional bet." },
      { type: "heading", text: "Real-World Frictions" },
      { type: "paragraph", text: "In practice, real friction narrows or eliminates the opportunity: buying every stock in an index in the correct weights involves transaction costs and tracking error, the financing rate used to compute fair value may differ from what an arbitrageur can actually borrow at, and dividend payments, which reduce the futures' fair value, can be uncertain or change before expiration — all of which mean the \"riskless\" trade carries real execution risk that erodes the theoretical profit." },
      { type: "heading", text: "Who Actually Trades It" },
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
      { type: "heading", text: "Volatility Depends on Correlation" },
      { type: "paragraph", text: "An equity index's volatility isn't just the average of its components' individual volatilities — it also depends heavily on how correlated those components are with each other. When index members move together, high correlation, their individual moves reinforce each other and the index as a whole swings a lot; when they move more independently, low correlation, individual swings partly cancel out and the index itself stays comparatively calm. Dispersion trading is built directly on this relationship between index volatility, component volatility, and their average correlation." },
      { type: "heading", text: "The Classic Trade" },
      { type: "paragraph", text: "A classic dispersion trade sells options, or variance swaps, on the index while buying options, or variance swaps, on a basket of its individual components, in a ratio designed to be roughly neutral to the overall level of volatility — the trader isn't betting on volatility rising or falling broadly, but on the relationship between index-level and component-level volatility, which is really a bet on correlation. Selling index volatility while buying component volatility profits if realized correlation between the components comes in lower than what was implied when the trade was put on." },
      { type: "heading", text: "Why Index Options Run Rich" },
      { type: "paragraph", text: "The intuition is that index options often trade at an implied correlation that's elevated relative to what typically materializes — investors buying index protection tend to bid up index-level implied volatility, while single-stock options are driven more by name-specific factors, creating a persistent gap that dispersion trades are designed to harvest, similar in spirit to how other volatility risk premium strategies collect a premium for providing insurance-like protection." },
      { type: "heading", text: "The Correlation Spike Risk" },
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
      { type: "heading", text: "The Full-Basket Version" },
      { type: "paragraph", text: "A full dispersion trade, as classically constructed, requires taking a position in every single component of an index alongside the index option itself — for a broad index with dozens or hundreds of members, that means managing a large number of individual option or variance-swap positions, each with its own transaction costs, liquidity constraints, and monitoring burden. A subset-portfolio approach instead selects a smaller, carefully chosen group of components to represent the basket side of the trade, rather than using every single name." },
      { type: "heading", text: "Choosing the Subset" },
      { type: "paragraph", text: "The subset is typically chosen to preserve as much of the full basket's characteristics as possible with far fewer names — weighting toward the largest, most liquid, most heavily-weighted constituents of the index, since they contribute the most to the index's own volatility and correlation structure, while dropping smaller, less liquid names whose individual contribution to the trade's correlation exposure is minor relative to the added cost and complexity of including them." },
      { type: "heading", text: "The Basis Risk of Approximating" },
      { type: "paragraph", text: "This tradeoff, approximation versus full replication, means a subset dispersion trade won't track the true, full-basket correlation relationship perfectly; there's a real risk that correlation behaves differently among the excluded smaller names than among the large ones included in the subset, introducing a form of basis risk between the subset's realized correlation and the true index-wide correlation the trade is ultimately trying to capture." },
      { type: "heading", text: "Lower Cost, Less Precision" },
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
      { type: "heading", text: "Why ETFs Normally Stay Aligned" },
      { type: "paragraph", text: "Multiple ETFs often track the same or very similar underlying indexes — for example, several different providers may each offer an S&P 500 ETF. In theory, these ETFs should trade in a tight, predictable relationship to each other and to the underlying index's value throughout the day, since each one's price is kept close to its net asset value by a creation/redemption mechanism that lets authorized participants exchange ETF shares for the underlying basket of stocks, or vice versa. In practice, brief gaps between two such ETFs can still open up intraday." },
      { type: "heading", text: "Trading the Brief Gap" },
      { type: "paragraph", text: "Intraday arbitrage between index ETFs looks for these brief windows where two ETFs tracking the same or highly similar index diverge from their normal, tight relationship — buying the relatively cheap ETF and selling the relatively expensive one, betting the gap closes as the normal arbitrage mechanism, or simply other traders noticing the same opportunity, pulls the two back into line." },
      { type: "heading", text: "What Causes a Gap" },
      { type: "paragraph", text: "These gaps tend to be small and short-lived, since the ETF creation/redemption mechanism and other arbitrageurs are constantly working to keep prices aligned — but gaps can still appear from differences in trading volume and liquidity between the two ETFs, small differences in each fund's exact index methodology or rebalancing schedule, or brief periods of stress, like a fast market move, when the creation/redemption mechanism doesn't keep up instantaneously." },
      { type: "heading", text: "A Game of Speed" },
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
      { type: "heading", text: "Adjusting Exposure to Hold a Target" },
      { type: "paragraph", text: "An index's realized volatility isn't constant — it tends to rise during turbulent, uncertain periods and fall during calm ones. A volatility-targeting strategy responds to this by dynamically adjusting how much of a portfolio is allocated to the index versus a risk-free asset, like short-term Treasury bills, aiming to keep the overall portfolio's volatility close to a fixed target level regardless of how choppy or calm the index itself is behaving." },
      { type: "heading", text: "The Mechanism" },
      { type: "paragraph", text: "The mechanism is straightforward: when the index's recent realized volatility is running below the target, the strategy increases its allocation to the index, since more index exposure is needed to reach the target volatility, potentially even using leverage if allowed; when the index's volatility rises above the target, the strategy reduces its index allocation and shifts more into the risk-free asset, scaling back exposure to keep overall portfolio volatility from rising along with it." },
      { type: "heading", text: "A More Stable Risk Level" },
      { type: "paragraph", text: "This produces a portfolio whose risk level stays comparatively stable over time, in contrast to a simple buy-and-hold index position, whose risk level fluctuates directly with whatever the market happens to be doing — proponents argue this is more intuitive for investors who want a consistent risk experience, since a fixed-dollar index position can quietly become much riskier during a volatility spike without the investor taking any action." },
      { type: "heading", text: "The Lag Problem" },
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
  {
    kind: "concept",
    slug: "indexes-what-is-a-stock-index",
    title: "What Is a Stock Index?",
    summary:
      "A single number built from a defined basket of stocks, meant to represent the performance of a market or a slice of it.",
    body: [
      { type: "heading", text: "A Basket, Reduced to One Number" },
      { type: "paragraph", text: "A stock index tracks a defined group of stocks — say, the 500 largest U.S. companies for the S&P 500 — and combines their individual prices into a single number meant to represent how that group is performing as a whole, without an investor needing to track every constituent individually." },
      { type: "heading", text: "Price-Weighted Indices" },
      { type: "paragraph", text: "A price-weighted index, like the Dow Jones Industrial Average, gives each stock influence in proportion to its raw share price — a $500 stock moves the index far more than a $50 stock, regardless of which company is actually larger, an odd quirk that's mostly a historical artifact of how the earliest indices were built before better methods existed." },
      { type: "heading", text: "Market-Cap-Weighted Indices" },
      { type: "paragraph", text: "Most major indices today, including the S&P 500, are market-cap-weighted instead: each stock's influence on the index is proportional to its total market capitalization, so a company's actual economic size, not its arbitrary per-share price, determines how much it moves the index." },
      { type: "heading", text: "Equal-Weighted Indices" },
      { type: "paragraph", text: "A less common alternative is an equal-weighted index, which gives every constituent the same influence regardless of size, deliberately reducing the outsized impact the largest few companies otherwise have in a market-cap-weighted version — a choice that changes an index's behavior meaningfully, especially when a handful of giant companies dominate a market-cap-weighted benchmark." },
      { type: "heading", text: "In Practice" },
      { type: "paragraph", text: "An investor who wants exposure to \"the market\" without picking individual winners buys a fund tracking a broad, market-cap-weighted index like the S&P 500, effectively betting on the combined fortunes of hundreds of large companies weighted by their actual economic size. If that same investor instead wanted a bet less dominated by a handful of giant companies, they might choose an equal-weighted version of the same universe, trading the concentration of the standard index for broader, more even exposure across every constituent." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does a stock index do?",
        choices: [
          "Combines the prices of a defined basket of stocks into a single number representing that group's overall performance",
          "Tracks the price of exactly one company",
          "Guarantees a fixed annual return to investors",
          "Sets interest rates for the broader economy",
        ],
        correctIndex: 0,
        explanation:
          "An index reduces many individual stock prices into one representative figure, letting the market's performance be tracked without following every constituent separately.",
      },
      {
        id: "q2",
        prompt: "In a price-weighted index, what determines a stock's influence?",
        choices: [
          "Its raw per-share price, regardless of the company's actual size",
          "Its total market capitalization",
          "The number of employees the company has",
          "Every stock has identical influence",
        ],
        correctIndex: 0,
        explanation:
          "A price-weighted index like the Dow gives more influence to stocks with a higher raw share price, an artifact of how the index was originally constructed rather than a measure of company size.",
      },
      {
        id: "q3",
        prompt: "How does a market-cap-weighted index differ from a price-weighted one?",
        choices: [
          "Each stock's influence is proportional to its total market capitalization, reflecting actual company size rather than share price",
          "Every constituent has exactly equal influence",
          "Only the largest company in the index is counted at all",
          "There is no difference between the two weighting methods",
        ],
        correctIndex: 0,
        explanation:
          "Market-cap weighting ties a stock's influence to its real economic size (price times shares outstanding), which is why most major indices, including the S&P 500, use this method.",
      },
      {
        id: "q4",
        prompt: "What does an equal-weighted index do differently?",
        choices: [
          "It gives every constituent the same influence, reducing the outsized impact of the largest few companies",
          "It only includes the single largest company",
          "It weights stocks by their raw share price",
          "It excludes all technology companies",
        ],
        correctIndex: 0,
        explanation:
          "Equal weighting deliberately flattens each constituent's influence to the same level, in contrast to market-cap weighting, where a handful of giant companies can dominate the index's behavior.",
      },
      {
        id: "q5",
        prompt: "Why does weighting methodology matter for how an index behaves?",
        choices: [
          "It determines how much any individual stock's price move actually affects the overall index level",
          "Weighting methodology has no effect on an index's behavior",
          "All weighting methods always produce identical index values",
          "Weighting only matters for bond indices, never stock indices",
        ],
        correctIndex: 0,
        explanation:
          "Because different weighting schemes give different stocks different amounts of influence, the same set of constituent price moves can produce meaningfully different index results depending on the method used.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "indexes-how-index-values-are-calculated",
    title: "How Index Values Are Calculated",
    summary:
      "The mechanics behind an index's headline number, and the divisor adjustments that keep it consistent through stock splits and constituent changes.",
    body: [
      { type: "heading", text: "From Constituent Prices to One Level" },
      { type: "paragraph", text: "An index level is calculated by combining every constituent's price (or market cap, depending on the weighting method) into a weighted sum, then dividing by a number called the divisor — a scaling factor chosen so the resulting index level lands at a convenient, readable number rather than some arbitrary large sum." },
      { type: "heading", text: "Why the Divisor Has to Change" },
      { type: "paragraph", text: "The divisor isn't fixed forever — it has to be adjusted whenever something happens that would otherwise cause the index to jump or drop for reasons that have nothing to do with actual market performance, such as a stock split, a company being added to or removed from the index, or a constituent issuing new shares." },
      { type: "heading", text: "A Stock Split Example" },
      { type: "paragraph", text: "If a constituent does a 2-for-1 stock split, its share price is cut in half overnight even though the company's actual value hasn't changed at all — without any adjustment, a price-weighted index would show an artificial drop purely from the split. The divisor is recalculated at that moment specifically to cancel out that mechanical effect, so the index level reflects real market moves only." },
      { type: "heading", text: "Rebalancing and Reconstitution" },
      { type: "paragraph", text: "Indices are also periodically rebalanced, adjusting each constituent's weight back toward its target methodology, and reconstituted, adding newly qualifying companies and removing ones that no longer fit the index's rules — both processes that, again, require divisor adjustments so the index's continuity isn't broken by changes to its own membership or weights." },
      { type: "heading", text: "In Practice" },
      { type: "paragraph", text: "When a company in a widely followed index announces a multi-for-one stock split, the index provider recalculates the divisor that same day so the index's published level doesn't move at all because of the split itself — anyone watching the index sees only the moves caused by actual buying and selling, not by a change in how one constituent's shares happen to be counted. The same quiet divisor adjustment happens whenever the index provider swaps one company out for another during its periodic reconstitution." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What is an index's divisor used for?",
        choices: [
          "Scaling the weighted sum of constituent prices or market caps down to a convenient, readable index level",
          "Setting the index's daily price limit",
          "Determining which companies qualify for index membership",
          "Calculating each company's individual stock price",
        ],
        correctIndex: 0,
        explanation:
          "The divisor is the scaling factor applied to the weighted sum of constituents, producing the familiar index level rather than some large, arbitrary raw number.",
      },
      {
        id: "q2",
        prompt: "Why does the divisor need to be adjusted after a stock split?",
        choices: [
          "To cancel out the mechanical price drop from the split, so the index reflects only real market moves",
          "Stock splits have no effect on an index and require no adjustment",
          "To permanently remove the split company from the index",
          "To double the index's overall level",
        ],
        correctIndex: 0,
        explanation:
          "A stock split changes a share price without changing the company's actual value, so the divisor is recalculated to prevent that purely mechanical change from distorting the index level.",
      },
      {
        id: "q3",
        prompt: "What is index reconstitution?",
        choices: [
          "Adding newly qualifying companies to the index and removing ones that no longer fit its rules",
          "Recalculating every constituent's stock price from scratch",
          "Permanently freezing the index's membership forever",
          "A one-time event that only happens when an index first launches",
        ],
        correctIndex: 0,
        explanation:
          "Reconstitution periodically updates index membership to reflect companies that now qualify (or no longer qualify) under the index's rules.",
      },
      {
        id: "q4",
        prompt: "Why do rebalancing and reconstitution require divisor adjustments?",
        choices: [
          "So changes to constituent weights or membership don't create an artificial jump or drop in the index level",
          "Divisor adjustments are unrelated to rebalancing or reconstitution",
          "To increase the index's level every time a rebalance occurs",
          "Because rebalancing removes the need for a divisor entirely",
        ],
        correctIndex: 0,
        explanation:
          "Just like a stock split, changes to weights or membership would mechanically shift the index level without the divisor being recalculated to absorb that change.",
      },
      {
        id: "q5",
        prompt: "What would happen to a price-weighted index without any divisor adjustment after a 2-for-1 split?",
        choices: [
          "The index would show an artificial drop purely from the split, unrelated to actual market performance",
          "The index level would be completely unaffected",
          "The index would automatically double in value",
          "The split company would be instantly removed from the index",
        ],
        correctIndex: 0,
        explanation:
          "Without adjusting the divisor, the split's mechanical price halving would show up as a real-looking decline in the index, even though nothing about the company's actual value changed.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "indexes-index-futures-and-options",
    title: "Index Futures and Options",
    summary:
      "Derivatives written directly on an index, cash-settled since there's no physical basket to deliver — used to hedge or speculate on the broad market in a single trade.",
    body: [
      { type: "heading", text: "Trading the Whole Market in One Contract" },
      { type: "paragraph", text: "An index future or index option is a derivative contract written on the index level itself, rather than on any single underlying stock, letting a trader take a long or short position on an entire market or sector in one trade instead of assembling and managing dozens or hundreds of individual positions." },
      { type: "heading", text: "Why They're Cash-Settled" },
      { type: "paragraph", text: "Because an index is just a calculated number, not a single physical or financial asset that can actually be delivered, index futures and options are cash-settled: at expiration, the difference between the contract's price and the index's actual level is paid in cash, rather than any attempt to deliver a basket of every constituent stock." },
      { type: "heading", text: "Hedging Broad Market Exposure" },
      { type: "paragraph", text: "A portfolio manager holding a diversified stock portfolio can hedge against a broad market downturn by selling index futures, without having to sell any of the individual stocks they actually want to keep — a much faster and cheaper way to reduce market exposure temporarily than trading the underlying portfolio directly." },
      { type: "heading", text: "Speculating on Market Direction" },
      { type: "paragraph", text: "Index derivatives are also a common way to speculate directly on the broad market's direction, or on the relative performance of one index against another, without taking a view on any specific individual company — a genuinely different kind of bet from picking individual stocks." },
      { type: "heading", text: "In Practice" },
      { type: "paragraph", text: "Ahead of a heavy week of earnings reports and economic data, a portfolio manager who believes their individual stock picks are strong but is nervous about the broad market pulling everything down sells index futures against the portfolio's value. If the market does drop, gains on the futures position offset the paper losses across the stock portfolio, letting the manager ride out the volatility without having to unwind carefully built individual positions." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What is an index future or option written on?",
        choices: [
          "The index level itself, rather than any single underlying stock",
          "One specific company chosen at random from the index",
          "A physical basket of gold matching the index's value",
          "The index's dividend yield only",
        ],
        correctIndex: 0,
        explanation:
          "Index derivatives are written directly on the calculated index level, letting a trader take a position on an entire market in a single contract.",
      },
      {
        id: "q2",
        prompt: "Why are index futures and options cash-settled?",
        choices: [
          "Because an index is just a calculated number, not a physical or financial asset that can actually be delivered",
          "Because cash settlement is required by law for all derivatives",
          "Because index derivatives never actually expire",
          "Because physical delivery of an index is always preferred but rarely available",
        ],
        correctIndex: 0,
        explanation:
          "Since there's no single physical asset an index level represents, settlement has to be a cash payment reflecting the difference between the contract price and the actual index level.",
      },
      {
        id: "q3",
        prompt: "How can a portfolio manager hedge broad market exposure using index futures?",
        choices: [
          "By selling index futures, reducing market exposure without having to sell the individual stocks they want to keep",
          "By buying every individual stock in the index separately",
          "Index futures cannot be used for hedging purposes",
          "By only hedging one stock at a time",
        ],
        correctIndex: 0,
        explanation:
          "Selling index futures offsets broad market risk in a single trade, letting a manager keep their actual stock holdings intact while temporarily reducing overall market exposure.",
      },
      {
        id: "q4",
        prompt: "What kind of view does trading an index derivative let a trader express?",
        choices: [
          "A view on the broad market's direction, or one index's performance relative to another, without picking individual companies",
          "A view on a single company's upcoming earnings report",
          "A view solely on interest rates, unrelated to the stock market",
          "Index derivatives cannot express any market view",
        ],
        correctIndex: 0,
        explanation:
          "Index derivatives express a broad, market-level or relative-index view, a fundamentally different kind of bet than picking individual stocks.",
      },
      {
        id: "q5",
        prompt: "What is a key advantage of using index futures to adjust market exposure, compared to trading the underlying portfolio directly?",
        choices: [
          "It's generally faster and cheaper than buying or selling many individual stocks to achieve the same change in exposure",
          "Index futures always cost more than trading individual stocks",
          "Index futures require physical delivery of every constituent",
          "There is no advantage to using index futures over trading individual stocks",
        ],
        correctIndex: 0,
        explanation:
          "A single index futures trade can adjust broad market exposure far more efficiently than executing many individual stock trades to achieve the same net effect.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "indexes-tracking-an-index",
    title: "Tracking an Index: ETFs and Index Funds",
    summary:
      "How a fund actually replicates an index's return, and the tracking error that measures how closely it succeeds.",
    body: [
      { type: "heading", text: "Full Replication" },
      { type: "paragraph", text: "The most straightforward way for a fund to track an index is full replication: buying every single constituent in exactly the same proportion as the index itself, so the fund's return should match the index almost exactly, aside from fees and minor trading costs." },
      { type: "heading", text: "Sampling for Large or Illiquid Indices" },
      { type: "paragraph", text: "For an index with thousands of constituents, or ones that include illiquid securities, full replication can be impractical or expensive. Instead, a fund may use sampling: holding a carefully chosen subset of the index's constituents, statistically selected to behave as much like the full index as possible, without literally holding every single name." },
      { type: "heading", text: "Tracking Error" },
      { type: "paragraph", text: "Tracking error measures how closely a fund's actual return matches its target index's return over time — a full-replication fund on a liquid index typically has very low tracking error, while a sampling-based fund on a harder-to-replicate index tends to show more, since its holdings are only an approximation of the real thing." },
      { type: "heading", text: "This Connects Directly Back to ETFs" },
      { type: "paragraph", text: "This is exactly the mechanism behind most index-tracking ETFs, already covered in this curriculum's ETF Basics module: an ETF issuer chooses full replication or sampling to build the fund's underlying basket, and the same creation and redemption process that keeps an ETF's price near its net asset value is what lets the fund's holdings stay aligned with the index it's meant to track." },
      { type: "heading", text: "In Practice" },
      { type: "paragraph", text: "An index-fund manager spends the days around each quarterly reconstitution buying the shares of newly added companies and selling the shares of names being dropped, timing the trades to land as close as possible to the moment the index itself officially changes. Getting that timing wrong, or settling for a sampled basket that only approximates the full index, is exactly what shows up later as tracking error between the fund's return and the index's." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What is full replication?",
        choices: [
          "Buying every single constituent of an index in exactly the same proportion as the index itself",
          "Buying only the single largest stock in the index",
          "Holding cash instead of any index constituents",
          "Randomly selecting a handful of unrelated stocks",
        ],
        correctIndex: 0,
        explanation:
          "Full replication means literally owning every constituent at the index's own weights, the most direct way to track an index's return.",
      },
      {
        id: "q2",
        prompt: "Why might a fund use sampling instead of full replication?",
        choices: [
          "For an index with thousands of constituents or illiquid securities, full replication can be impractical or expensive",
          "Sampling always produces a better return than full replication",
          "Sampling is required by regulation for every index fund",
          "Full replication is illegal for large indices",
        ],
        correctIndex: 0,
        explanation:
          "Sampling is a practical compromise for hard-to-replicate indices, holding a representative subset rather than every single constituent.",
      },
      {
        id: "q3",
        prompt: "What does tracking error measure?",
        choices: [
          "How closely a fund's actual return matches its target index's return over time",
          "The fund's total assets under management",
          "The number of constituents in the underlying index",
          "The fund's annual expense ratio",
        ],
        correctIndex: 0,
        explanation:
          "Tracking error is specifically about return fidelity — how well the fund's performance actually mirrors the index it's supposed to track.",
      },
      {
        id: "q4",
        prompt: "Which fund would typically show lower tracking error?",
        choices: [
          "A full-replication fund tracking a liquid index",
          "A sampling-based fund tracking a hard-to-replicate index",
          "Tracking error is unrelated to replication method",
          "Both approaches always produce identical tracking error",
        ],
        correctIndex: 0,
        explanation:
          "Full replication of a liquid index tends to match the index most precisely, producing lower tracking error than a sampling approach on a harder-to-replicate index.",
      },
      {
        id: "q5",
        prompt: "How does this connect to what's covered in the ETF Basics module?",
        choices: [
          "The same creation/redemption mechanism that keeps an ETF's price near NAV is what lets its holdings stay aligned with the index it tracks",
          "ETFs and index tracking are completely unrelated topics",
          "ETFs never track an index — only mutual funds do",
          "Index funds and ETFs use entirely different, unrelated mechanisms",
        ],
        correctIndex: 0,
        explanation:
          "Index-tracking ETFs use exactly the replication/sampling choice described here, built and maintained through the creation/redemption process covered in ETF Basics.",
      },
    ],
  },
];
