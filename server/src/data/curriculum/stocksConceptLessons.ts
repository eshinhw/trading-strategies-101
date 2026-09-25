import type { ConceptLesson } from "./types.js";

// Concept-lesson format, same reasoning as futuresConceptLessons.ts — these
// are factor, statistical-arbitrage, and technical-trading concepts, not
// option-payoff structures, so prose + a knowledge-check quiz fits better
// than the options-specific params/payoff engine.
export const stocksConceptLessons: ConceptLesson[] = [
  {
    kind: "concept",
    slug: "stocks-price-momentum",
    title: "Price-momentum",
    summary:
      "Buying stocks that have recently outperformed and avoiding or shorting recent laggards, betting relative performance persists.",
    body: [
      { type: "heading", text: "What Price-Momentum Is" },
      { type: "paragraph", text: "Price-momentum is one of the best-documented anomalies in finance: stocks that have outperformed over the past several months to a year tend to keep outperforming over the next few months, while recent laggards tend to keep lagging. A classic implementation ranks stocks by their trailing 12-month return, often skipping the most recent month which behaves differently, buys the top decile, and shorts or avoids the bottom decile." },
      { type: "heading", text: "Relative, Not Absolute" },
      { type: "paragraph", text: "Unlike trend-following in futures, which reacts to an individual instrument's own price path, cross-sectional momentum ranks assets relative to each other at a point in time — it's a relative-strength approach, not an absolute-price one. A stock can be in a momentum uptrend relative to its peers even while its own absolute price is roughly flat, if its peers are falling faster." },
      { type: "heading", text: "The Momentum Crash" },
      { type: "paragraph", text: "Momentum's most notorious risk is the \"momentum crash\": during sharp market reversals, especially recoveries after a crash, the stocks that fell hardest often bounce back hardest, and a momentum strategy that's short the recent losers can suffer a severe, rapid loss exactly when the broad market is recovering. This tail risk is why momentum strategies typically pair the signal with volatility controls or position limits rather than running it unhedged." },
      { type: "heading", text: "Why Momentum Gets Rebalanced" },
      { type: "paragraph", text: "Momentum is typically rebalanced periodically — monthly is common — reranking the universe and rotating out of names that have fallen out of the top ranks and into new leaders, since a stock's momentum ranking isn't a permanent property; the whole point is that leadership rotates as new price trends emerge." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What is the core premise of price-momentum?",
        choices: [
          "Stocks that have recently outperformed tend to keep outperforming, at least for a while",
          "Stocks always revert to their historical average price",
          "Stock prices are entirely unpredictable",
          "Only the cheapest stocks by valuation will outperform",
        ],
        correctIndex: 0,
        explanation:
          "Momentum bets on the persistence of recent relative performance, not reversal — stocks that have outperformed tend to keep outperforming over the following months.",
      },
      {
        id: "q2",
        prompt: "A classic momentum strategy ranks stocks by:",
        choices: [
          "Their dividend yield only",
          "Their trailing return over roughly the past 12 months, often skipping the most recent month",
          "Their market capitalization alone",
          "The company's most recent quarterly earnings report only",
        ],
        correctIndex: 1,
        explanation:
          "A standard momentum signal uses trailing 12-month return, commonly skipping the most recent month, which tends to behave differently (short-term reversal) from the broader momentum trend.",
      },
      {
        id: "q3",
        prompt: "How does cross-sectional stock momentum differ from trend-following in futures?",
        choices: [
          "They are identical in every respect",
          "Momentum ranks stocks relative to each other at a point in time, rather than reacting to one instrument's own price path",
          "Momentum only works on futures contracts, not stocks",
          "Momentum ignores price entirely and only uses volume",
        ],
        correctIndex: 1,
        explanation:
          "Cross-sectional momentum is a relative-strength approach — it compares stocks to their peers — while trend-following reacts to a single instrument's own price trend in absolute terms.",
      },
      {
        id: "q4",
        prompt: "What is a \"momentum crash\"?",
        choices: [
          "A momentum strategy's steady, gradual outperformance over many years",
          "A sharp, rapid loss that can occur when recent losers, which the strategy is short, bounce back hard during a market recovery",
          "A regulatory halt on momentum trading",
          "The natural expiration of a momentum-based futures contract",
        ],
        correctIndex: 1,
        explanation:
          "Momentum's biggest tail risk is a sharp reversal where the market's worst recent performers — the names a momentum strategy is short or avoiding — rally hard, producing a severe loss concentrated in a short period.",
      },
      {
        id: "q5",
        prompt: "Why do momentum strategies typically rebalance their holdings periodically, such as monthly?",
        choices: [
          "Regulations require monthly rebalancing for all equity strategies",
          "A stock's momentum ranking isn't permanent — leadership rotates as new price trends emerge, so the ranking needs recalculating",
          "Rebalancing has no effect on strategy performance",
          "To avoid ever holding the same stock twice",
        ],
        correctIndex: 1,
        explanation:
          "Since momentum is about which stocks are currently leading or lagging, periodic reranking is needed to rotate out of fading leaders and into newly emerging ones.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "stocks-value",
    title: "Value",
    summary: "Buying stocks that are cheap relative to a fundamental measure of worth, betting the market will eventually recognize the mispricing.",
    body: [
      { type: "heading", text: "What Value Investing Is" },
      { type: "paragraph", text: "Value investing buys stocks that trade cheaply relative to some measure of fundamental worth — common metrics include price-to-earnings, price-to-book, price-to-cash-flow, or dividend yield — on the premise that the market has temporarily underpriced the company relative to its underlying economics, and that price will eventually converge back toward fair value." },
      { type: "heading", text: "Building a Value Portfolio" },
      { type: "paragraph", text: "A systematic value strategy typically ranks the investable universe by one or more of these cheapness metrics, buys the cheapest decile or quintile, and either holds long-only or pairs it with a short position in the most expensive names to isolate the value factor from the overall direction of the market." },
      { type: "heading", text: "The Value Trap" },
      { type: "paragraph", text: "The value premium's persistence has been debated: cheap stocks are often cheap for a real reason — declining industries, weaker growth prospects, or elevated risk — so a value strategy is partly compensated for bearing that risk, not just for exploiting a pure mispricing. This is why some value stocks, called \"value traps,\" stay cheap indefinitely rather than reverting." },
      { type: "heading", text: "Value and Momentum Together" },
      { type: "paragraph", text: "Value and momentum have historically shown low or even negative correlation to each other — a stock the value factor likes (cheap) is often one that momentum dislikes (a recent laggard, which is often why it got cheap), and vice versa. This makes combining value and momentum signals in one portfolio a common way to diversify factor exposure rather than relying on either alone." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What is the core premise of a value investing strategy?",
        choices: [
          "Buying whichever stock has risen the most recently",
          "Buying stocks that are cheap relative to a fundamental measure of worth, expecting the price to converge toward fair value",
          "Buying only stocks with the highest trading volume",
          "Ignoring price entirely and focusing only on company size",
        ],
        correctIndex: 1,
        explanation:
          "Value investing bets that a stock trading cheaply relative to its fundamentals (earnings, book value, cash flow) is mispriced and will eventually re-rate toward a fairer valuation.",
      },
      {
        id: "q2",
        prompt: "Which of these is a common metric used to identify \"cheap\" stocks in a value strategy?",
        choices: [
          "Price-to-earnings (P/E) ratio",
          "The company's stock ticker symbol",
          "The number of employees at the company",
          "The exchange the stock is listed on",
        ],
        correctIndex: 0,
        explanation:
          "P/E, along with price-to-book, price-to-cash-flow, and dividend yield, are standard fundamental cheapness metrics used to rank stocks for a value strategy.",
      },
      {
        id: "q3",
        prompt: "Why might the \"value premium\" partly reflect compensation for risk, rather than a pure mispricing?",
        choices: [
          "Cheap stocks are always mispriced with no underlying reason",
          "Stocks are often cheap because of real risks — weaker growth, declining industries, higher uncertainty — that the market is pricing in",
          "Value strategies never actually buy cheap stocks",
          "Risk has no relationship to stock valuation",
        ],
        correctIndex: 1,
        explanation:
          "Some of a value stock's cheapness may be an appropriate discount for genuine risk rather than a market error, which is part of why the value premium's size and persistence is debated.",
      },
      {
        id: "q4",
        prompt: "What is a \"value trap\"?",
        choices: [
          "A stock that is cheap and quickly reverts to a higher, fairer price",
          "A stock that stays cheap indefinitely rather than reverting, because its low valuation reflects a real, lasting problem",
          "A regulatory restriction on buying undervalued stocks",
          "A momentum strategy disguised as a value strategy",
        ],
        correctIndex: 1,
        explanation:
          "A value trap looks statistically cheap but never re-rates, because the cheapness reflects a genuine deterioration in the business rather than a temporary mispricing.",
      },
      {
        id: "q5",
        prompt: "Why are value and momentum often combined in the same portfolio?",
        choices: [
          "They are mathematically identical strategies",
          "They've historically shown low or negative correlation, since a stock value likes is often one momentum dislikes, diversifying factor exposure",
          "Combining them guarantees a higher return than either alone",
          "Regulations require pairing every value strategy with a momentum strategy",
        ],
        correctIndex: 1,
        explanation:
          "Value and momentum tend to like different stocks at different times, so combining them can smooth out a portfolio's reliance on any single factor being in favor.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "stocks-pairs-trading",
    title: "Pairs trading",
    summary: "A market-neutral strategy that trades the price spread between two historically correlated stocks, betting the spread reverts when it diverges.",
    body: [
      { type: "heading", text: "What a Pairs Trade Is" },
      { type: "paragraph", text: "Pairs trading identifies two stocks whose prices have historically moved together — often companies in the same industry, like two large retailers or two airlines — and monitors the spread, or ratio, between their prices. When that spread diverges further than usual from its typical relationship, the trader shorts the outperforming stock and buys the underperforming one, betting the spread will converge back to its historical norm regardless of which direction the overall market moves." },
      {
        type: "image",
        diagramId: "pairs-trading",
        caption: "Two correlated stocks track each other, then diverge — the pairs trade bets the spread closes again.",
      },
      { type: "heading", text: "Why It's Market-Neutral" },
      { type: "paragraph", text: "Because the strategy is simultaneously long one stock and short a similarly-sized position in a closely related one, it is largely market-neutral: if the whole market rises or falls, both legs move together and much of that common exposure cancels out, leaving a position that profits or loses mainly based on the relative performance between the two stocks, not the market's direction." },
      { type: "heading", text: "Selecting a Good Pair" },
      { type: "paragraph", text: "Identifying a good pair usually starts with a statistical measure of how tightly the two stocks' prices have historically tracked each other — commonly cointegration or a high, stable correlation over time — and defining the spread's normal range, often in terms of standard deviations from its historical average, to decide when a divergence is large enough to trade." },
      { type: "heading", text: "When the Relationship Breaks" },
      { type: "paragraph", text: "The central risk is that the relationship breaks down permanently rather than reverting — a merger, a company-specific event, or a structural shift in one company's business can cause the historical relationship to stop holding, in which case the spread never reverts and the trade can lose money on both legs at once instead of the offsetting behavior the strategy relies on." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What is the core mechanic of a pairs trade?",
        choices: [
          "Buying two unrelated stocks at random",
          "Shorting the outperforming stock in a historically correlated pair and buying the underperforming one, betting their spread converges",
          "Buying only the single best-performing stock in an industry",
          "Always holding both stocks long, never shorting either",
        ],
        correctIndex: 1,
        explanation:
          "A pairs trade bets on convergence in the relative price relationship between two historically correlated stocks, going long the relative laggard and short the relative leader.",
      },
      {
        id: "q2",
        prompt: "Why is pairs trading described as largely \"market-neutral\"?",
        choices: [
          "It never involves any risk",
          "Being simultaneously long one stock and short a related one cancels out much of the shared exposure to overall market moves",
          "It only trades stocks that never move",
          "It requires no capital to implement",
        ],
        correctIndex: 1,
        explanation:
          "Since both legs tend to move together with the broad market, a roughly balanced long/short pair largely cancels that common market exposure, isolating a bet on the relative performance between the two names.",
      },
      {
        id: "q3",
        prompt: "What statistical property do traders typically look for when selecting a pair?",
        choices: [
          "The two stocks should have completely uncorrelated prices",
          "A historically tight, stable relationship between the two prices, often measured via cointegration or high stable correlation",
          "The two companies must be headquartered in the same city",
          "Both stocks must have identical share prices",
        ],
        correctIndex: 1,
        explanation:
          "A workable pair needs a historically reliable price relationship — the tighter and more stable that relationship, the more confidently a trader can expect a divergence to revert.",
      },
      {
        id: "q4",
        prompt: "How do traders typically decide when a pair's spread has diverged enough to trade?",
        choices: [
          "Whenever either stock's price changes at all",
          "When the spread moves further from its historical average than usual, often measured in standard deviations",
          "Only on the first trading day of each month",
          "Spread divergence is never measured quantitatively",
        ],
        correctIndex: 1,
        explanation:
          "Traders typically define the spread's normal range statistically, often in standard deviations from its historical average, and trade when the current divergence exceeds that threshold.",
      },
      {
        id: "q5",
        prompt: "What is the central risk in pairs trading?",
        choices: [
          "The market rising too quickly",
          "The historical relationship between the two stocks breaking down permanently instead of reverting",
          "Both stocks becoming perfectly correlated",
          "There is no real risk once a pair is correctly identified",
        ],
        correctIndex: 1,
        explanation:
          "If a merger, company-specific event, or structural shift permanently changes one company's business, the historical relationship may never revert — the spread can widen indefinitely instead of converging, losing money on both legs.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "stocks-mean-reversion-single-cluster",
    title: "Mean-reversion – single cluster",
    summary: "Betting a stock's price will revert toward the average of a tightly related group of peers, after diverging from that group.",
    body: [
      { type: "heading", text: "Defining the Cluster" },
      { type: "paragraph", text: "This is a form of mean-reversion trading applied to a single, well-defined cluster of closely related stocks — for example, all the major stocks within one narrow industry, like large regional banks or big-box retailers — rather than to a broad, diverse market index. The trader computes some measure of the group's collective typical behavior, such as the cluster's average return over a short window, and looks for individual members whose price has deviated unusually far from that group average." },
      { type: "heading", text: "The Trading Rule" },
      { type: "paragraph", text: "The trading rule follows directly: when one stock in the cluster has fallen well below the group's recent average performance while its close peers haven't, buy it, expecting it to catch back up toward the cluster; when one stock has risen well above the group's average, sell or short it, expecting it to fall back in line." },
      {
        type: "image",
        diagramId: "cluster-deviation",
        caption: "One stock falls away from its peers while the rest of the cluster holds its band — the laggard is the buy candidate.",
      },
      { type: "heading", text: "Cluster vs. Pair" },
      { type: "paragraph", text: "This differs from pairs trading in scope: a pair looks at the relationship between exactly two stocks, while a single-cluster mean-reversion strategy looks at one stock's deviation from a whole group of peers at once, which can make the signal more statistically robust — a genuine outlier relative to five or ten closely related peers is a stronger signal than a divergence measured against just one other stock." },
      { type: "heading", text: "Choosing the Right Cluster" },
      { type: "paragraph", text: "Choosing the right cluster matters enormously: the stocks need to be similar enough in what drives their business — same industry, similar size, similar exposure to the same economic factors — that reverting to the group average is actually a sensible expectation, rather than grouping together stocks that only superficially resemble each other and have no real reason to move together." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does a single-cluster mean-reversion strategy compare an individual stock's price to?",
        choices: [
          "The stock's own price exactly one year ago",
          "The recent average behavior of a tightly related group of peer stocks",
          "A completely unrelated stock in a different industry",
          "The overall level of interest rates",
        ],
        correctIndex: 1,
        explanation:
          "This strategy defines \"normal\" relative to a specific, closely related cluster of peers — like major regional bank stocks — rather than the broad market or a single other name.",
      },
      {
        id: "q2",
        prompt: "If one stock in a cluster has fallen well below the group's recent average performance, the strategy would typically:",
        choices: [
          "Sell or short that stock, expecting it to keep falling",
          "Buy that stock, expecting it to catch back up toward the cluster average",
          "Ignore it entirely, since single stocks don't matter",
          "Buy every other stock in the cluster instead",
        ],
        correctIndex: 1,
        explanation:
          "A stock that has lagged well behind its close peers is the buy candidate — the strategy expects it to revert back toward the group's typical behavior.",
      },
      {
        id: "q3",
        prompt: "How does single-cluster mean-reversion differ from pairs trading?",
        choices: [
          "They are exactly the same strategy under a different name",
          "Pairs trading compares exactly two stocks, while single-cluster mean-reversion compares one stock against a whole group of peers at once",
          "Pairs trading never uses statistics, while cluster mean-reversion always does",
          "Single-cluster strategies can only be used on futures, not stocks",
        ],
        correctIndex: 1,
        explanation:
          "The scope differs — a pair is a relationship between two names, while a cluster strategy measures one stock's deviation from a broader group, which can make the resulting signal more statistically robust.",
      },
      {
        id: "q4",
        prompt: "Why can comparing a stock against a whole cluster of peers produce a more robust signal than comparing it to just one other stock?",
        choices: [
          "It doesn't — smaller comparisons are always more reliable",
          "A genuine outlier relative to several closely related peers is a stronger signal than a divergence measured against only one other name",
          "Clusters always contain exactly two stocks, same as a pair",
          "More stocks in a comparison always guarantees higher returns",
        ],
        correctIndex: 1,
        explanation:
          "Measuring deviation from a group average, rather than from a single comparison stock, reduces the chance that an idiosyncratic move in just one other name is mistaken for a genuine divergence.",
      },
      {
        id: "q5",
        prompt: "Why does the choice of which stocks belong in the cluster matter so much?",
        choices: [
          "It doesn't matter — any group of stocks works equally well",
          "The stocks need a real, shared reason to move together for \"reverting to the group average\" to be a sensible expectation",
          "Clusters must always contain exactly ten stocks by convention",
          "The cluster should include stocks from as many different industries as possible",
        ],
        correctIndex: 1,
        explanation:
          "If the grouped stocks don't actually share meaningful business or economic drivers, there's no real reason to expect one to revert toward the others' average — the strategy depends on the cluster being genuinely related, not just superficially similar.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "stocks-single-moving-average",
    title: "Single moving average",
    summary: "A basic trend-following rule that goes long when price is above its moving average and exits or shorts when price falls below it.",
    body: [
      { type: "heading", text: "What a Moving Average Is" },
      { type: "paragraph", text: "A moving average smooths out day-to-day price noise by averaging a stock's closing price over a fixed lookback window — a 50-day or 200-day moving average is common — recalculated fresh each day as the window rolls forward. A single-moving-average strategy uses just one such average as its entire trading signal." },
      { type: "heading", text: "The Trading Rule" },
      { type: "paragraph", text: "The rule is simple: when the stock's price is above its moving average, hold a long position, or stay long; when price falls below the moving average, exit the position, or go short in strategies that allow it. The moving average acts as a dynamic line in the sand — price crossing above or below it is treated as a shift from an uptrend to a downtrend, or vice versa." },
      {
        type: "image",
        diagramId: "single-moving-average",
        caption: "Price crossing above the moving average signals a long entry; crossing below signals an exit.",
      },
      { type: "heading", text: "Compared to a Crossover Rule" },
      { type: "paragraph", text: "This approach is a trend-following rule, closely related in spirit to the moving-average-crossover rule used in futures trend-following, but simpler: it compares price to just one reference line rather than comparing two moving averages of different lengths to each other. That simplicity is both its appeal, easy to compute and explain, and its main weakness." },
      { type: "heading", text: "The Whipsaw Problem" },
      { type: "paragraph", text: "The single-moving-average rule's main drawback shows up in sideways, choppy markets: when price oscillates back and forth across the moving average without establishing a real trend, the strategy generates a series of \"whipsaw\" trades — buying just before a small dip below the average, then selling just before it climbs back above — each one a small loss, with transaction costs compounding the damage. It performs best in markets with sustained, clear directional trends and worst in range-bound, noisy ones." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does a moving average do to a stock's price series?",
        choices: [
          "It predicts the exact future price with certainty",
          "It smooths out day-to-day noise by averaging price over a fixed lookback window",
          "It removes all trading volume data",
          "It converts the stock's price into a percentage of the S&P 500",
        ],
        correctIndex: 1,
        explanation:
          "A moving average is simply the average closing price over a set number of recent days, recalculated as that window rolls forward, which smooths out short-term noise.",
      },
      {
        id: "q2",
        prompt: "In a single-moving-average strategy, when does the trader typically hold a long position?",
        choices: [
          "Only on the first trading day of each month",
          "When the stock's price is above its moving average",
          "Only when trading volume is unusually low",
          "Regardless of where price sits relative to the average",
        ],
        correctIndex: 1,
        explanation:
          "Price above the moving average is read as an uptrend signal to stay long; price below it is read as a downtrend signal to exit or go short.",
      },
      {
        id: "q3",
        prompt: "How does a single-moving-average rule differ from a moving-average-crossover rule?",
        choices: [
          "They are identical in every way",
          "A single-moving-average rule compares price to one reference line, while a crossover rule compares two moving averages of different lengths to each other",
          "Crossover rules never use moving averages at all",
          "A single-moving-average rule can only be used on futures, never stocks",
        ],
        correctIndex: 1,
        explanation:
          "The single-average version is the simpler case — just one line to compare price against — while a crossover strategy adds a second, differently-lengthed average for a potentially smoother signal.",
      },
      {
        id: "q4",
        prompt: "What is a \"whipsaw,\" in the context of a moving-average strategy?",
        choices: [
          "A large, sustained profit from a strong trend",
          "A series of small losing trades caused by price oscillating back and forth across the moving average in a choppy market",
          "A type of futures contract",
          "A guaranteed way to avoid all trading losses",
        ],
        correctIndex: 1,
        explanation:
          "In range-bound markets without a real trend, price can cross the moving average repeatedly, triggering a string of buy-then-sell trades that each lose a little — a whipsaw.",
      },
      {
        id: "q5",
        prompt: "In what kind of market does a single-moving-average strategy tend to perform best?",
        choices: [
          "A sideways, range-bound, choppy market",
          "A market with a sustained, clear directional trend",
          "A market that never moves at all",
          "It performs identically in every market condition",
        ],
        correctIndex: 1,
        explanation:
          "Trend-following rules like this one are designed to capture sustained directional moves — they struggle in choppy markets but perform well when a real trend is underway.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "stocks-market-making",
    title: "Market-making",
    summary: "Continuously quoting both a buy and a sell price for a stock, earning the spread between them while managing the inventory risk that comes with it.",
    body: [
      { type: "heading", text: "Earning the Bid-Ask Spread" },
      { type: "paragraph", text: "A market maker continuously posts both a bid — a price at which they're willing to buy — and an ask — a price at which they're willing to sell — for a stock, profiting from the difference between the two, the bid-ask spread, by buying from sellers and selling to buyers throughout the day, rather than making a directional bet on where the stock is headed." },
      {
        type: "image",
        diagramId: "bid-ask-spread",
        caption: "The market maker earns the spread between bid and ask, and skews both quotes lower as unwanted long inventory builds up.",
      },
      { type: "heading", text: "Accumulating Inventory" },
      { type: "paragraph", text: "Because a market maker is constantly trading with whoever shows up, they inevitably accumulate inventory — if more people sell to them than buy from them over some stretch, their inventory of the stock grows; if more people buy than sell, it shrinks, or goes negative, meaning they end up short. Managing that inventory, rather than picking direction, is the central skill of market-making." },
      { type: "heading", text: "Managing Inventory by Repricing" },
      { type: "paragraph", text: "Market makers actively adjust their quoted prices to manage inventory risk: if they've accumulated more of a stock than they want to hold, they'll lower both their bid and ask slightly to encourage buyers and discourage further sellers, nudging their inventory back toward a comfortable level, and do the reverse if they've built up an unwanted short position. This constant, small repricing is a defining feature of the strategy, distinct from a directional trader who holds a fixed view." },
      { type: "heading", text: "The Risk of Adverse Selection" },
      { type: "paragraph", text: "The central risk in market-making is adverse selection: on average, the people most eager to trade with you right now are often the ones who know something you don't — informed traders who trade aggressively just before news moves the price. A market maker who can't tell informed order flow from routine liquidity-driven trading risks systematically buying right before a stock falls and selling right before it rises, which is why market makers widen their spreads when uncertainty or the risk of informed trading is elevated." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What is the primary source of profit for a market maker?",
        choices: [
          "Correctly predicting whether a stock will rise or fall",
          "The bid-ask spread — the difference between the price they buy at and the price they sell at",
          "Collecting dividends on stocks they hold long-term",
          "Charging a fixed monthly subscription fee to traders",
        ],
        correctIndex: 1,
        explanation:
          "A market maker profits from continuously buying at the bid and selling at the ask, earning the spread between the two on a large volume of trades, rather than betting on price direction.",
      },
      {
        id: "q2",
        prompt: "What happens to a market maker's inventory if more traders sell to them than buy from them over some period?",
        choices: [
          "Their inventory of the stock automatically resets to zero",
          "Their inventory of the stock grows",
          "They are required to stop trading immediately",
          "Nothing — market makers don't hold inventory",
        ],
        correctIndex: 1,
        explanation:
          "Since a market maker is on the other side of whichever trades come to them, one-sided order flow causes their inventory to build up, or on the other side go short — managing that buildup is central to the job.",
      },
      {
        id: "q3",
        prompt: "How does a market maker typically respond to having accumulated more inventory of a stock than they want?",
        choices: [
          "They stop quoting prices entirely",
          "They slightly lower both their bid and ask to encourage buyers and discourage further sellers",
          "They raise both their bid and ask to attract more sellers",
          "Inventory levels have no effect on their quoted prices",
        ],
        correctIndex: 1,
        explanation:
          "Skewing quotes lower nudges the market maker's inventory back toward a comfortable level by making it more attractive for others to buy from them and less attractive to sell to them.",
      },
      {
        id: "q4",
        prompt: "What is \"adverse selection\" risk in market-making?",
        choices: [
          "The risk that exchange fees rise unexpectedly",
          "The risk of systematically trading against informed traders who know something the market maker doesn't, just before news moves the price",
          "The risk that a stock gets delisted",
          "A rule that prevents market makers from trading with retail investors",
        ],
        correctIndex: 1,
        explanation:
          "Adverse selection is the risk that the counterparties most eager to trade right now are disproportionately informed ones, so the market maker ends up buying right before bad news or selling right before good news.",
      },
      {
        id: "q5",
        prompt: "Why do market makers widen their bid-ask spreads when uncertainty is elevated?",
        choices: [
          "Wider spreads are required by exchange regulations at all times",
          "A wider spread compensates for the increased risk of trading against informed order flow during uncertain periods",
          "Widening spreads has no relationship to risk",
          "To guarantee a fixed daily profit regardless of market conditions",
        ],
        correctIndex: 1,
        explanation:
          "Charging more for the service of continuously being available to trade helps offset the higher risk of adverse selection when the chance of trading against better-informed counterparties increases.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "stocks-earnings-momentum",
    title: "Earnings-momentum",
    summary:
      "Buying stocks following positive earnings surprises and avoiding or shorting those with negative surprises, since the market tends to underreact to earnings news.",
    body: [
      { type: "heading", text: "What Earnings-Momentum Is" },
      { type: "paragraph", text: "Earnings-momentum, also called post-earnings-announcement drift or PEAD, is a close cousin of price-momentum, but the signal comes from a company's earnings surprise — the difference between its actual reported earnings and what analysts expected — rather than from its raw stock-price trend. Stocks that beat expectations tend to keep drifting higher for weeks or months after the announcement, and stocks that miss tend to keep drifting lower." },
      { type: "heading", text: "Why Markets Underreact" },
      { type: "paragraph", text: "The core explanation is that markets underreact to earnings news: the initial price move on the announcement day doesn't fully capture the information, so the stock keeps adjusting gradually as more investors process the surprise, analysts revise their estimates, and the market gradually re-rates the stock. A standardized unexpected earnings (SUE) score — the surprise scaled by its own historical volatility — is a common way to rank stocks by how significant the surprise really was." },
      { type: "heading", text: "A Signal Tied to a Catalyst" },
      { type: "paragraph", text: "Unlike pure price-momentum, which reacts purely to price action and says nothing about why a stock moved, earnings-momentum ties directly to a specific, discrete, and repeatable catalyst — the quarterly earnings release — which makes the signal easier to time around, since a strategy typically re-evaluates its holdings shortly after each earnings season, but also concentrates risk around those release dates, when volatility is elevated." },
      { type: "heading", text: "Where the Drift Is Strongest" },
      { type: "paragraph", text: "The drift tends to be strongest in smaller, less-covered stocks, where fewer analysts and less trading activity slow down the market's absorption of new information — in large, heavily-covered names, the drift after an earnings surprise is much smaller because so much capital is already competing to process the news instantly." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What is the earnings-momentum signal based on?",
        choices: [
          "The difference between a company's actual reported earnings and what analysts expected",
          "The company's raw stock price trend over the past year",
          "The company's dividend yield",
          "The company's market capitalization",
        ],
        correctIndex: 0,
        explanation:
          "Earnings-momentum, or post-earnings-announcement drift, uses the earnings surprise itself as its signal, distinct from price-momentum's raw price trend.",
      },
      {
        id: "q2",
        prompt: "What does \"post-earnings-announcement drift\" refer to?",
        choices: [
          "Stock prices staying perfectly flat after an earnings announcement",
          "The tendency for a stock's price to keep moving in the direction of an earnings surprise for weeks or months afterward",
          "A rule requiring companies to announce earnings quarterly",
          "The gap between an earnings announcement and the next one",
        ],
        correctIndex: 1,
        explanation:
          "PEAD is the empirical finding that stocks continue drifting in the direction of their earnings surprise well after the announcement itself, rather than fully repricing instantly.",
      },
      {
        id: "q3",
        prompt: "What is a \"standardized unexpected earnings\" (SUE) score used for?",
        choices: [
          "Measuring a company's total revenue",
          "Scaling an earnings surprise by its own historical volatility, to rank how significant the surprise really was",
          "Predicting a company's stock split ratio",
          "Calculating a company's dividend payout",
        ],
        correctIndex: 1,
        explanation:
          "SUE normalizes the raw earnings surprise against how volatile that company's surprises typically are, making surprises comparable across different companies.",
      },
      {
        id: "q4",
        prompt: "Why does market underreaction help explain earnings-momentum drift?",
        choices: [
          "Markets always fully price in all information instantly",
          "The initial price move on announcement day doesn't fully capture the surprise, so the stock keeps adjusting gradually as more information is processed",
          "Underreaction only occurs in bond markets, not stocks",
          "Earnings announcements have no effect on stock prices",
        ],
        correctIndex: 1,
        explanation:
          "If the market fully and instantly priced in an earnings surprise, there would be no further drift — the observed drift implies the initial reaction was incomplete.",
      },
      {
        id: "q5",
        prompt: "In which kind of stocks does the earnings-momentum drift tend to be strongest?",
        choices: [
          "Large, heavily-covered stocks with many analysts",
          "Smaller, less-covered stocks, where information is absorbed into the price more slowly",
          "Stocks that never report earnings",
          "Only stocks with no dividend",
        ],
        correctIndex: 1,
        explanation:
          "Fewer analysts and less trading activity in smaller names slow down how quickly the market fully processes and prices in an earnings surprise, producing a stronger and longer-lasting drift.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "stocks-low-volatility-anomaly",
    title: "Low-volatility anomaly",
    summary:
      "Buying stocks with lower historical volatility than the market, an anomaly because standard theory says taking more risk should be rewarded with higher, not lower, returns.",
    body: [
      { type: "heading", text: "The Anomaly, Defined" },
      { type: "paragraph", text: "Standard finance theory, like the CAPM, predicts that riskier stocks — those with higher volatility or higher beta relative to the market — should earn higher expected returns to compensate investors for bearing that extra risk. The low-volatility anomaly is the empirical observation that this relationship doesn't hold in practice: low-volatility and low-beta stocks have historically delivered returns roughly comparable to, or even better than, high-volatility stocks on a risk-adjusted basis, quietly outperforming what theory would predict." },
      { type: "heading", text: "Building a Low-Volatility Portfolio" },
      { type: "paragraph", text: "A systematic low-volatility strategy ranks stocks by trailing realized volatility, or beta estimated against a market index, and buys the lowest-volatility decile, often while shorting or underweighting the highest-volatility names to isolate the anomaly from the market's overall direction." },
      { type: "heading", text: "Why the Anomaly Persists" },
      { type: "paragraph", text: "Several explanations have been proposed for why this anomaly persists: many investors are constrained from using leverage and instead reach for extra return by buying inherently risky, high-volatility \"lottery-like\" stocks directly, which bids up the price and lowers the future return of exactly those risky names, while boring, low-volatility stocks get relatively overlooked and undervalued." },
      { type: "heading", text: "A Defensive, Not Aggressive, Edge" },
      { type: "paragraph", text: "Because it tends to hold up defensively in market downturns — low-volatility stocks fall less than the market during selloffs, almost by definition — while still capturing most of the market's upside over a full cycle, the low-volatility anomaly is often framed as a way to improve a portfolio's risk-adjusted return rather than as a strategy for chasing the single highest raw return." },
    ],
    quiz: [
      {
        id: "q1",
        prompt:
          "What does standard finance theory (like the CAPM) predict about the relationship between a stock's risk and its expected return?",
        choices: [
          "Riskier stocks should earn lower expected returns",
          "Riskier stocks should earn higher expected returns, to compensate for the extra risk",
          "Risk has no relationship to expected return",
          "Only dividend-paying stocks carry any risk",
        ],
        correctIndex: 1,
        explanation:
          "The CAPM's core prediction is that investors demand higher expected returns for bearing higher risk (volatility or beta) — the low-volatility anomaly is the empirical violation of exactly this prediction.",
      },
      {
        id: "q2",
        prompt: "What is the \"low-volatility anomaly\"?",
        choices: [
          "The observation that low-volatility stocks have historically delivered comparable or better risk-adjusted returns than high-volatility stocks, contrary to standard theory",
          "The fact that all stocks have identical volatility",
          "A rule that low-volatility stocks cannot be traded",
          "The tendency for volatility to increase every year",
        ],
        correctIndex: 0,
        explanation:
          "The anomaly is that low-volatility (or low-beta) stocks don't underperform the way standard risk-return theory would predict — they often perform comparably or better on a risk-adjusted basis.",
      },
      {
        id: "q3",
        prompt: "How does a systematic low-volatility strategy typically select stocks?",
        choices: [
          "It buys the highest-volatility stocks in the market",
          "It ranks stocks by trailing realized volatility or beta and buys the lowest-volatility decile",
          "It selects stocks entirely at random",
          "It only buys stocks that pay no dividend",
        ],
        correctIndex: 1,
        explanation:
          "The strategy is built by explicitly ranking and selecting stocks with low historical volatility or beta relative to the market.",
      },
      {
        id: "q4",
        prompt: "What is one proposed explanation for why the low-volatility anomaly persists?",
        choices: [
          "All investors are legally required to avoid risky stocks",
          "Leverage-constrained investors reach for extra return by buying inherently risky \"lottery-like\" stocks directly, bidding up their price and lowering their future returns",
          "Low-volatility stocks are illegal to trade in most markets",
          "The anomaly has never actually been observed",
        ],
        correctIndex: 1,
        explanation:
          "Investors who can't use leverage to boost returns on safe stocks may instead buy risky, high-volatility stocks outright, which can overprice those risky names and leave low-volatility stocks comparatively undervalued.",
      },
      {
        id: "q5",
        prompt: "How does a low-volatility strategy typically behave during market downturns?",
        choices: [
          "It falls further than the overall market",
          "It tends to fall less than the market, since it's built from inherently less-volatile stocks",
          "It has no relationship to overall market direction",
          "It is only usable during downturns and unusable otherwise",
        ],
        correctIndex: 1,
        explanation:
          "Low-volatility stocks are, almost by definition, less sensitive to market swings, so the strategy tends to hold up defensively during selloffs while still capturing much of the market's upside over a full cycle.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "stocks-implied-volatility",
    title: "Implied volatility",
    summary:
      "Using the volatility priced into a stock's options — rather than its own historical volatility — as a forward-looking signal for trading the stock itself.",
    body: [
      { type: "heading", text: "What Implied Volatility Is" },
      { type: "paragraph", text: "Implied volatility (IV) is the volatility level that, when plugged into an option pricing model, produces the option's current market price — it represents what options traders collectively expect the stock's future volatility to be, in contrast to historical (realized) volatility, which just measures how much the stock actually moved in the past. Because options prices are forward-looking, IV often reacts to information before it's fully reflected in the stock price itself." },
      { type: "heading", text: "Trading IV Level and Changes" },
      { type: "paragraph", text: "A stock-selection strategy built on implied volatility typically looks at IV level or IV changes — a level far above or below the stock's own historical volatility, or a sudden spike or divergence in IV relative to peers, can signal that informed options traders expect an unusual move, which the strategy then trades in the underlying stock rather than the option itself." },
      { type: "heading", text: "Comparing IV to Peers" },
      { type: "paragraph", text: "One common variant compares a stock's IV to the IV of related stocks or its own sector — a stock whose IV is rising relative to its peers, without an obvious public news catalyst, can be a signal that informed money is positioning ahead of an anticipated event, such as an acquisition rumor, which the strategy tries to front-run or ride." },
      { type: "heading", text: "Why It Needs Other Filters" },
      { type: "paragraph", text: "Because IV also reflects the volatility risk premium — investors generally paying up for the insurance-like protection options provide, especially during periods of uncertainty — sustained differences between a stock's implied and realized volatility can reflect risk-aversion sentiment as much as directional information, so this signal is typically combined with other filters rather than traded in isolation." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does \"implied volatility\" represent?",
        choices: [
          "The volatility level that, plugged into an option pricing model, produces the option's current market price",
          "The stock's actual historical price volatility",
          "The company's dividend yield",
          "The number of shares outstanding",
        ],
        correctIndex: 0,
        explanation:
          "Implied volatility is backed out from the market price of an option using a pricing model, representing what the market collectively expects future volatility to be, as opposed to what already happened (realized volatility).",
      },
      {
        id: "q2",
        prompt: "How does implied volatility differ from historical (realized) volatility?",
        choices: [
          "They are always exactly equal",
          "Implied volatility is forward-looking, reflecting expectations priced into options, while realized volatility measures how much the stock actually moved in the past",
          "Realized volatility only applies to bonds, not stocks",
          "Implied volatility cannot be measured for any stock",
        ],
        correctIndex: 1,
        explanation:
          "Realized volatility looks backward at actual price moves, while implied volatility is extracted from current options prices and reflects the market's forward expectation.",
      },
      {
        id: "q3",
        prompt:
          "What can a sudden spike in a stock's implied volatility, without an obvious public news catalyst, signal?",
        choices: [
          "That the company has stopped trading entirely",
          "That informed options traders may expect an unusual move, potentially positioning ahead of an anticipated event",
          "That the stock's dividend has been permanently eliminated",
          "Nothing — IV spikes are always random noise",
        ],
        correctIndex: 1,
        explanation:
          "An unexplained IV spike relative to peers can indicate informed money positioning in the options market ahead of news not yet public, which a strategy might try to trade in the underlying stock.",
      },
      {
        id: "q4",
        prompt: "How might a strategy use implied volatility relative to a stock's peers or sector?",
        choices: [
          "By ignoring peer comparisons entirely",
          "By flagging a stock whose IV is rising relative to its peers as a potential signal of informed positioning",
          "By assuming all stocks in a sector always have identical implied volatility",
          "By using it exclusively to set dividend policy",
        ],
        correctIndex: 1,
        explanation:
          "Comparing a stock's IV to its peers helps isolate stock-specific signals from broad, sector-wide volatility moves that aren't informative about that particular company.",
      },
      {
        id: "q5",
        prompt: "Why must the implied-volatility signal typically be combined with other filters rather than traded alone?",
        choices: [
          "Implied volatility never changes",
          "Elevated implied volatility can also reflect a general volatility risk premium or risk-aversion sentiment, not just informed directional information",
          "Options markets are never liquid enough to compute implied volatility",
          "It is illegal to trade based on implied volatility",
        ],
        correctIndex: 1,
        explanation:
          "Since IV also embeds a general premium investors pay for downside protection, a high or rising IV doesn't always mean informed directional information — other filters help separate the two.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "stocks-multifactor-portfolio",
    title: "Multifactor portfolio",
    summary:
      "Combining several independent factors — like value, momentum, and quality — into a single composite score, rather than relying on any one factor alone.",
    body: [
      { type: "heading", text: "Why Combine Factors" },
      { type: "paragraph", text: "Individual factors like value, momentum, and low-volatility each capture a different, partial explanation for why some stocks outperform others, and each one goes through extended stretches of underperformance on its own — value can lag for years, momentum can suffer sharp reversals. A multifactor portfolio combines several factors into a single composite score per stock, on the idea that factors with low correlation to each other smooth out the ride, since it's unlikely all of them underperform at the same time." },
      { type: "heading", text: "Building the Composite Score" },
      { type: "paragraph", text: "A typical construction ranks every stock in the universe on each individual factor, say value, momentum, and quality, converts each ranking to a standardized score, a z-score for example, so factors measured in different units become comparable, and then averages or weights those scores into one combined ranking used to build the final portfolio." },
      { type: "heading", text: "Choosing the Right Factors" },
      { type: "paragraph", text: "Choosing which factors to combine matters as much as the combining method: factors should ideally be reasonably independent of each other, so they're not really just the same signal twice, and each should have a sound economic or behavioral rationale for existing, rather than being included just because it looked good in a backtest — a risk sometimes called \"factor mining.\"" },
      { type: "heading", text: "Consistency Over Peak Performance" },
      { type: "paragraph", text: "Multifactor portfolios trade off peak performance for consistency: a single-factor portfolio might outperform a multifactor blend in the specific years that factor is most in favor, but the multifactor blend is designed to avoid the multi-year underperformance stretches that any single factor eventually goes through, which is often the more important property for an investor who has to actually hold the strategy through difficult periods." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What is the main idea behind a multifactor portfolio?",
        choices: [
          "Relying on a single factor for all stock selection decisions",
          "Combining several relatively independent factors into one composite score, so it's unlikely all of them underperform at the same time",
          "Ignoring all quantitative factors and using only qualitative judgment",
          "Trading exclusively based on company size",
        ],
        correctIndex: 1,
        explanation:
          "Multifactor portfolios diversify across signals like value, momentum, and quality precisely because each factor has its own stretches of underperformance, and combining relatively uncorrelated factors smooths the overall ride.",
      },
      {
        id: "q2",
        prompt: "How is a stock's combined multifactor score typically constructed?",
        choices: [
          "By using only the single highest-ranked factor per stock",
          "By standardizing each factor's ranking (e.g., via z-scores) so different factors become comparable, then averaging or weighting them together",
          "By ignoring all factors and using market capitalization alone",
          "By picking one random factor for each stock",
        ],
        correctIndex: 1,
        explanation:
          "Since factors are measured in different units and scales, they're typically standardized before being combined into a single composite ranking used to build the portfolio.",
      },
      {
        id: "q3",
        prompt: "Why does it matter that the factors combined in a multifactor portfolio be reasonably independent of each other?",
        choices: [
          "It doesn't matter — any factors can be combined with equal benefit",
          "If factors are highly correlated, combining them doesn't provide real diversification — they're effectively the same signal counted twice",
          "Independent factors are illegal to combine",
          "Only exactly two factors can ever be combined",
        ],
        correctIndex: 1,
        explanation:
          "The diversification benefit of a multifactor approach comes from combining factors that behave differently from each other — redundant, highly correlated factors don't add that benefit.",
      },
      {
        id: "q4",
        prompt: "What is \"factor mining\"?",
        choices: [
          "A rigorous, economically justified process for selecting factors",
          "The risk of including a factor just because it looked good in a backtest, without a sound economic or behavioral rationale",
          "The process of physically extracting minerals used in computer chips",
          "A required regulatory filing for factor-based funds",
        ],
        correctIndex: 1,
        explanation:
          "Factor mining refers to over-fitting a factor selection to historical data without a real underlying rationale, which risks including a factor that won't actually hold up going forward.",
      },
      {
        id: "q5",
        prompt: "What is the main tradeoff of a multifactor portfolio compared to a single-factor portfolio?",
        choices: [
          "Multifactor portfolios always have higher returns in every single year",
          "A multifactor blend may underperform a single factor in that factor's best years, but is designed to avoid the multi-year underperformance any single factor eventually goes through",
          "There is no meaningful tradeoff at all",
          "Multifactor portfolios cannot be constructed using standardized scores",
        ],
        correctIndex: 1,
        explanation:
          "Combining factors sacrifices some peak performance in a single factor's best years in exchange for more consistent, less extreme performance over the full cycle.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "stocks-residual-momentum",
    title: "Residual momentum",
    summary:
      "Trading momentum in a stock's return after stripping out the part explained by broad factors, isolating the stock-specific component of the trend.",
    body: [
      { type: "heading", text: "Stripping Out Common Factors" },
      { type: "paragraph", text: "Ordinary price-momentum ranks stocks by their raw total return, but some of that return is really just the stock's exposure to broad factors — market direction, sector performance, or its beta — rather than anything specific to the company. Residual momentum first strips out those explained components, typically by regressing the stock's return against a factor model, like the market and a few other common factors, and then measures momentum only in what's left over: the residual, stock-specific return." },
      { type: "heading", text: "Why a Cleaner Signal" },
      { type: "paragraph", text: "The rationale is that momentum driven by a stock-specific residual is a cleaner, more genuine signal than momentum in the raw return, since raw-return momentum can just be a proxy for \"this stock happens to be in a sector that's been hot\" rather than anything distinctive about the company itself — residual momentum tries to isolate the latter." },
      { type: "heading", text: "Building the Residual Ranking" },
      { type: "paragraph", text: "In practice, this means computing each stock's residual return over a rolling window, after removing its typical factor exposures, ranking stocks by the cumulative or average residual, and building a long-short portfolio from the top and bottom of that ranking, much like ordinary momentum but applied to the \"cleaned\" return series." },
      { type: "heading", text: "A Steadier Momentum Profile" },
      { type: "paragraph", text: "Because it removes common factor exposure, residual momentum portfolios tend to run closer to market-neutral than raw-return momentum portfolios do, and empirical studies have found the residual version can produce steadier, more consistent momentum profits with less of the severe tail risk — the momentum crash — that plagues the raw-return version." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does residual momentum measure, that ordinary price-momentum does not isolate?",
        choices: [
          "The stock's total raw historical return",
          "The stock-specific component of return left over after removing exposure to broad factors like the market or sector",
          "The company's total revenue growth",
          "The stock's dividend history",
        ],
        correctIndex: 1,
        explanation:
          "Residual momentum strips out the portion of a stock's return explained by common factors (market, sector, beta) and measures momentum only in what remains — the stock-specific residual.",
      },
      {
        id: "q2",
        prompt: "How is a stock's \"residual return\" typically computed?",
        choices: [
          "By adding together every factor's return",
          "By regressing the stock's return against a factor model and taking what's left unexplained",
          "By ignoring the stock's price entirely",
          "By averaging the stock's price over the past decade",
        ],
        correctIndex: 1,
        explanation:
          "A factor regression separates a stock's return into the part explained by common factors and the residual, stock-specific part — residual momentum uses the latter.",
      },
      {
        id: "q3",
        prompt: "Why might raw-return momentum sometimes be a weaker signal than residual momentum?",
        choices: [
          "Raw-return momentum can just reflect a stock's sector or market exposure being hot, rather than anything specific to the company",
          "Raw-return momentum is always identical to residual momentum",
          "Raw returns cannot be measured for any stock",
          "Residual momentum ignores price entirely",
        ],
        correctIndex: 0,
        explanation:
          "A stock's raw return includes its exposure to common factors, so raw momentum can partly just be \"this stock's sector has been strong\" rather than a genuinely stock-specific signal — residual momentum tries to filter that out.",
      },
      {
        id: "q4",
        prompt: "How does a residual momentum portfolio typically compare to a raw-return momentum portfolio in terms of market exposure?",
        choices: [
          "It has identical market exposure",
          "It tends to run closer to market-neutral, since common factor exposure has already been removed",
          "It has double the market exposure",
          "Market exposure is not a meaningful concept for either strategy",
        ],
        correctIndex: 1,
        explanation:
          "Because residual momentum strips out common factor exposure before ranking, the resulting long-short portfolio tends to carry less unintended market or sector exposure than raw-return momentum.",
      },
      {
        id: "q5",
        prompt: "What potential benefit have empirical studies found for residual momentum compared to raw-return momentum?",
        choices: [
          "It always produces exactly double the returns",
          "Steadier, more consistent momentum profits with less severe tail risk, such as the momentum crash",
          "It eliminates all risk from the strategy entirely",
          "It only works on bonds, not stocks",
        ],
        correctIndex: 1,
        explanation:
          "By removing common factor exposure, residual momentum has been found in some studies to reduce the severe drawdowns that raw-return momentum can suffer during sharp market reversals.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "stocks-mean-reversion-multiple-clusters",
    title: "Mean-reversion – multiple clusters",
    summary:
      "Running single-cluster mean-reversion simultaneously across many industry or peer groups at once, diversifying the strategy across the whole market.",
    body: [
      { type: "heading", text: "Scaling Up from One Cluster" },
      { type: "paragraph", text: "Single-cluster mean-reversion trades one group of closely related stocks — say, regional banks — looking for members that have diverged from that group's average and betting on reversion. Mean-reversion across multiple clusters simply runs this same process simultaneously across many such clusters spanning the whole market — banks, retailers, airlines, utilities, and so on — each cluster generating its own independent set of long and short candidates." },
      { type: "heading", text: "The Diversification Advantage" },
      { type: "paragraph", text: "The main advantage over trading a single cluster is diversification: a single cluster's mean-reversion signal can go quiet for a long stretch, if that particular industry isn't experiencing much internal divergence, or can suffer if that one industry undergoes a structural shift that breaks its typical peer relationships. Spreading the same strategy across dozens of independent clusters means the overall portfolio isn't dependent on any single group behaving as expected." },
      { type: "heading", text: "Building Clusters Systematically" },
      { type: "paragraph", text: "Constructing the clusters well becomes a bigger and more systematic task at this scale — rather than hand-picking one obviously related group of stocks, a multi-cluster strategy typically uses a formal industry classification system, like GICS, or a statistical clustering method, grouping stocks by historical correlation, to partition the entire investable universe into clusters automatically, then applies the identical mean-reversion rule inside each one." },
      { type: "heading", text: "More Balanced in Aggregate" },
      { type: "paragraph", text: "Because the resulting long and short positions are spread across many unrelated industries rather than concentrated in one, a multi-cluster mean-reversion portfolio tends to be much more balanced and market-neutral in aggregate than a single-cluster version, even though each individual cluster's trades are exactly the same simple rule: buy the laggard, sell the leader, relative to that cluster's own average." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "How does multi-cluster mean-reversion differ from single-cluster mean-reversion?",
        choices: [
          "It only trades a single, hand-picked group of stocks",
          "It runs the same mean-reversion process simultaneously across many independent industry or peer groups spanning the whole market",
          "It ignores industry groupings entirely",
          "It can only be applied to bonds, not stocks",
        ],
        correctIndex: 1,
        explanation:
          "Multi-cluster mean-reversion scales the single-cluster idea up by running it in parallel across many clusters — banks, retailers, airlines, and so on — rather than just one.",
      },
      {
        id: "q2",
        prompt: "What is the main advantage of trading mean-reversion across multiple clusters instead of just one?",
        choices: [
          "It requires less data than single-cluster mean-reversion",
          "Diversification — the portfolio isn't dependent on any single cluster's internal divergence behaving as expected",
          "It guarantees higher returns than any other equity strategy",
          "It eliminates the need for any stock selection at all",
        ],
        correctIndex: 1,
        explanation:
          "Spreading the same rule across many independent clusters means a quiet or structurally-broken signal in any one industry has a much smaller effect on the overall portfolio.",
      },
      {
        id: "q3",
        prompt: "How are clusters typically formed at the scale of a multi-cluster strategy?",
        choices: [
          "By hand-picking exactly one group of similar stocks",
          "Using a formal industry classification system or a statistical clustering method to partition the entire universe automatically",
          "By selecting stocks alphabetically",
          "Clusters are never actually defined in multi-cluster strategies",
        ],
        correctIndex: 1,
        explanation:
          "At this scale, clusters are typically built systematically — via an industry classification standard like GICS or statistical correlation-based clustering — rather than manually chosen one at a time.",
      },
      {
        id: "q4",
        prompt: "Within each individual cluster, what trading rule does a multi-cluster strategy apply?",
        choices: [
          "A completely different rule for every cluster",
          "The same simple mean-reversion rule: buy the relative laggard, sell the relative leader, versus that cluster's own average",
          "No trading rule at all — clusters are used only for reporting purposes",
          "A rule based exclusively on company size",
        ],
        correctIndex: 1,
        explanation:
          "Each cluster runs the identical single-cluster mean-reversion logic; what changes across the strategy is which cluster of stocks that rule is applied to, not the rule itself.",
      },
      {
        id: "q5",
        prompt: "Why does a multi-cluster mean-reversion portfolio tend to be more market-neutral in aggregate than a single-cluster version?",
        choices: [
          "It isn't — multi-cluster portfolios are always more directional",
          "Long and short positions are spread across many unrelated industries rather than concentrated in just one",
          "It only ever holds a single stock at a time",
          "Market-neutrality is unrelated to how many clusters are used",
        ],
        correctIndex: 1,
        explanation:
          "Concentrating in one cluster leaves the portfolio exposed to that specific industry's overall direction, while spreading positions across many unrelated clusters balances that exposure out in aggregate.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "stocks-two-moving-averages",
    title: "Two moving averages",
    summary:
      "A trend-following rule based on the crossover of a fast and a slow moving average, rather than comparing price to just one reference line.",
    body: [
      { type: "heading", text: "The Crossover Rule" },
      { type: "paragraph", text: "A two-moving-average, or moving-average crossover, strategy uses a pair of moving averages computed over different lookback windows — a shorter, \"fast\" one, say 20 days, and a longer, \"slow\" one, say 100 days — and generates trading signals from their relationship to each other rather than from price alone. When the fast average crosses above the slow average, that's read as the start of an uptrend and triggers a buy; when the fast average crosses below the slow average, that's read as the start of a downtrend and triggers a sell or short." },
      {
        type: "image",
        diagramId: "moving-average-crossover",
        caption: "The fast average crossing above the slow average signals a buy; crossing below signals a sell.",
      },
      { type: "heading", text: "Why It's Smoother" },
      { type: "paragraph", text: "This differs from a single-moving-average rule mainly in smoothness: comparing price to a single moving average reacts very quickly to price moves, since raw price is noisy, while comparing two moving averages to each other is inherently smoother, since both lines are already averaged, which tends to filter out some of the noise that causes whipsaws in the single-average version." },
      { type: "heading", text: "Choosing the Lookback Windows" },
      { type: "paragraph", text: "The choice of the two lookback windows is itself a meaningful design decision: a shorter fast/slow pair, like 10/50 days, reacts to trend changes more quickly but generates more signals and more whipsaws in choppy markets, while a longer pair, like 50/200 days, the classic \"golden cross\" and \"death cross\" levels, reacts more slowly but with fewer false signals — there's a real tradeoff between responsiveness and reliability." },
      { type: "heading", text: "Where It Works Best" },
      { type: "paragraph", text: "Like any trend-following rule, the two-moving-average crossover performs best in markets with a sustained, persistent trend and worst in sideways, range-bound markets, where the fast and slow averages can cross back and forth repeatedly without either crossover reflecting a real, lasting shift in direction." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What triggers a buy signal in a two-moving-average crossover strategy?",
        choices: [
          "The stock's price falling to zero",
          "The fast (shorter-window) moving average crossing above the slow (longer-window) moving average",
          "The two moving averages becoming perfectly equal forever",
          "Trading volume dropping to zero",
        ],
        correctIndex: 1,
        explanation:
          "A crossover of the fast average above the slow average is read as the start of an uptrend, triggering a buy signal in this strategy.",
      },
      {
        id: "q2",
        prompt: "How does a two-moving-average strategy differ from a single-moving-average strategy?",
        choices: [
          "They are identical in every respect",
          "It compares two moving averages of different lengths to each other, rather than comparing price to just one reference line",
          "It uses no moving averages at all",
          "It can only be applied to bonds",
        ],
        correctIndex: 1,
        explanation:
          "The two-average version generates signals from the relationship between a fast and slow average, while the single-average version compares raw price to just one line.",
      },
      {
        id: "q3",
        prompt: "Why does comparing two moving averages to each other tend to be smoother than comparing price to a single moving average?",
        choices: [
          "It isn't smoother — it's identical in behavior",
          "Both lines being compared are already averaged, which filters out more of the noise that causes whipsaws",
          "Moving averages are never smooth by definition",
          "Smoothness has nothing to do with how many averages are used",
        ],
        correctIndex: 1,
        explanation:
          "Since both the fast and slow lines are themselves smoothed versions of price, comparing them to each other filters out more short-term noise than comparing raw, noisy price to a single average.",
      },
      {
        id: "q4",
        prompt: "What is the tradeoff between using a shorter fast/slow pair (e.g., 10/50 days) versus a longer pair (e.g., 50/200 days)?",
        choices: [
          "There is no tradeoff — longer and shorter pairs behave identically",
          "A shorter pair reacts to trend changes more quickly but generates more whipsaws, while a longer pair reacts more slowly but with fewer false signals",
          "Shorter pairs can only be used on futures, never stocks",
          "Longer pairs always produce more frequent trading signals",
        ],
        correctIndex: 1,
        explanation:
          "The lookback window choice trades off responsiveness (shorter windows react faster) against reliability (longer windows filter out more noise but lag more).",
      },
      {
        id: "q5",
        prompt: "In what kind of market does a two-moving-average crossover strategy perform worst?",
        choices: [
          "A market with a strong, sustained trend",
          "A sideways, range-bound market, where the two averages can cross back and forth without a real lasting shift in direction",
          "It performs identically in every market condition",
          "A market where trading is completely halted",
        ],
        correctIndex: 1,
        explanation:
          "Like other trend-following rules, the crossover strategy struggles in choppy markets, where the fast and slow averages can generate repeated false crossovers with no real trend behind them.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "stocks-three-moving-averages",
    title: "Three moving averages",
    summary:
      "A trend-following rule using three moving averages of different lengths together, requiring stronger alignment before signaling a trade.",
    body: [
      { type: "heading", text: "Adding a Third Average" },
      { type: "paragraph", text: "A three-moving-average strategy extends the two-average crossover idea by adding a third moving average — typically a short, medium, and long window, say 10, 50, and 200 days — and requiring some form of alignment among all three before generating a signal, rather than relying on just one crossover event. A common version requires the short average to be above the medium, and the medium above the long, before treating the trend as confirmed bullish, and the reverse ordering for bearish." },
      {
        type: "image",
        diagramId: "three-moving-average-alignment",
        caption: "Short, medium, and long averages stacking in order confirms the trend rather than relying on a single crossover.",
      },
      { type: "heading", text: "Filtering Out False Signals" },
      { type: "paragraph", text: "The motivation is filtering out false signals: a single two-average crossover can occasionally be a brief, noisy blip rather than a real trend shift, but requiring three averages to line up in the same order is a stronger, more demanding condition, which tends to trigger less often but with somewhat more confidence that a genuine trend is underway." },
      { type: "heading", text: "The Cost of Being Stricter" },
      { type: "paragraph", text: "This comes at a real cost, though: because the three-average alignment condition is stricter, the strategy tends to enter trends later, after more of the early move has already happened, and can also exit later, giving back more of a trend's late-stage reversal before the signal flips — there's a persistent tradeoff between signal quality and timeliness." },
      { type: "heading", text: "Using the Middle Average as a Warning" },
      { type: "paragraph", text: "Traders sometimes also use the middle-length average as an early-warning layer, watching for the short average to cross the medium average as a heads-up signal, while still waiting for full three-way alignment, including the long average, before treating the trend as confirmed and taking a full position — using the three lines together rather than just picking one crossover to act on." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What additional element does a three-moving-average strategy add beyond the two-average crossover?",
        choices: [
          "Nothing — it is identical to the two-average version",
          "A third moving average, requiring some form of alignment among all three (e.g., short above medium above long) before signaling a trend",
          "A rule that ignores price entirely",
          "A requirement to only trade once per year",
        ],
        correctIndex: 1,
        explanation:
          "The three-average version requires a stronger, more specific alignment among short, medium, and long averages before confirming a trend, rather than relying on a single two-average crossover.",
      },
      {
        id: "q2",
        prompt: "Why might requiring three moving averages to align reduce false signals compared to a single crossover?",
        choices: [
          "It doesn't reduce false signals at all",
          "The stricter, more demanding condition of three-way alignment is less likely to be triggered by brief, noisy price blips",
          "Three averages always move in perfect sync with each other",
          "False signals are impossible to reduce in any trend-following strategy",
        ],
        correctIndex: 1,
        explanation:
          "A single two-average crossover can be a brief, noisy event, but requiring three averages to align in a specific order is a stronger condition that filters out more of that noise.",
      },
      {
        id: "q3",
        prompt: "What is the main cost of the stricter three-moving-average alignment condition?",
        choices: [
          "The strategy becomes completely risk-free",
          "The strategy tends to enter and exit trends later, giving back more of an early move or a late reversal before signaling",
          "It has no cost — it is strictly better than a two-average strategy",
          "It requires exactly one moving average to compute",
        ],
        correctIndex: 1,
        explanation:
          "A stricter, more demanding signal condition tends to trigger later, meaning the strategy can miss some of the early part of a trend and give back more before flagging a reversal.",
      },
      {
        id: "q4",
        prompt: "How might a trader use the middle-length moving average in a three-average setup?",
        choices: [
          "As the only average that matters, ignoring the short and long ones",
          "As an early-warning layer — watching for the short average to cross it as a heads-up, before waiting for full three-way alignment to confirm",
          "It serves no purpose and is typically dropped",
          "Only for calculating dividend yield",
        ],
        correctIndex: 1,
        explanation:
          "The medium average can act as an intermediate signal, giving traders an early hint of a possible trend shift while they wait for the stricter full alignment across all three averages.",
      },
      {
        id: "q5",
        prompt: "What is the fundamental tradeoff illustrated by adding a third moving average to a trend-following rule?",
        choices: [
          "There is no tradeoff; more averages are always strictly better",
          "Signal quality (fewer false signals) versus timeliness (entering and exiting trends later)",
          "Moving averages have no relationship to signal quality",
          "Adding more averages always increases trading costs to infinity",
        ],
        correctIndex: 1,
        explanation:
          "Stricter alignment conditions reduce false signals but respond more slowly to real trend changes — a persistent tradeoff in designing trend-following rules with more confirming indicators.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "stocks-support-and-resistance",
    title: "Support and resistance",
    summary:
      "Trading around price levels where a stock has historically struggled to fall below (support) or rise above (resistance), betting on bounces or breakouts at those levels.",
    body: [
      { type: "heading", text: "What Support and Resistance Are" },
      { type: "paragraph", text: "Support and resistance are price levels where a stock's decline or rally has repeatedly stalled in the past — support is a level where buying pressure has historically emerged to stop further declines, and resistance is a level where selling pressure has historically emerged to cap further rallies. These levels are typically identified from a stock's own price history: a price that the stock has bounced off of, or been rejected from, multiple times." },
      {
        type: "image",
        diagramId: "support-resistance",
        caption: "Price repeatedly bounces off support and is repeatedly rejected at resistance.",
      },
      { type: "heading", text: "The Bounce Strategy" },
      { type: "paragraph", text: "One common way to trade these levels is a \"bounce\" strategy: buying near support on the expectation the stock will again fail to break through it and bounce higher, or shorting near resistance on the expectation it will again fail to break through and pull back — betting on the level continuing to hold, as it has in the past." },
      { type: "heading", text: "The Breakout Strategy" },
      { type: "paragraph", text: "The opposite approach is a breakout strategy: rather than betting the level holds, it bets that when the stock does finally break decisively through support or resistance, that breakout often continues, since a level breaking after multiple failed attempts can signal a genuine shift in the underlying balance between buyers and sellers, not just another temporary test of the level." },
      { type: "heading", text: "Why It's Subjective, and Risky" },
      { type: "paragraph", text: "The core risk with support and resistance is that these levels are somewhat subjective and self-referential — different traders may draw slightly different levels from the same price chart, and a level's significance can fade over time as new information arrives, meaning that trading a stale or overly precise level, or being caught on the wrong side of an unexpected breakout, are the main ways this approach can lose." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What is a \"support\" level, in this context?",
        choices: [
          "A price level where a stock's decline has repeatedly stalled in the past, due to historical buying pressure",
          "A level that guarantees a stock's price will never fall below it",
          "The company's total market capitalization",
          "A regulatory price floor set by an exchange",
        ],
        correctIndex: 0,
        explanation:
          "Support is identified from a stock's own price history as a level where declines have repeatedly stopped, historically due to buying pressure emerging at that price.",
      },
      {
        id: "q2",
        prompt: "What does a \"bounce\" strategy around support and resistance bet on?",
        choices: [
          "That support and resistance levels will always break immediately",
          "That the level will continue to hold, as it has in the past — buying near support, shorting near resistance",
          "That the stock's price will never change again",
          "That the company will announce a stock split",
        ],
        correctIndex: 1,
        explanation:
          "A bounce strategy bets on the historical pattern repeating — the stock failing to break through the level again and reversing back, just as it has before.",
      },
      {
        id: "q3",
        prompt: "How does a breakout strategy differ from a bounce strategy at support or resistance?",
        choices: [
          "They are the same strategy under different names",
          "A breakout strategy bets that when the level finally does break decisively, the move often continues, rather than betting the level holds",
          "Breakout strategies never involve support or resistance levels",
          "A breakout strategy only works on Fridays",
        ],
        correctIndex: 1,
        explanation:
          "Rather than betting on the level holding, a breakout strategy bets that a decisive break through a well-tested level signals a genuine shift in buyer/seller balance likely to continue.",
      },
      {
        id: "q4",
        prompt: "Why might a level breaking after multiple failed attempts be seen as a meaningful signal?",
        choices: [
          "It never signals anything meaningful",
          "It can indicate a genuine shift in the underlying balance between buyers and sellers, rather than just another temporary test",
          "It always means the company is about to be acquired",
          "It guarantees the stock will return to that level immediately",
        ],
        correctIndex: 1,
        explanation:
          "A level that has repeatedly held but finally breaks suggests something has changed in the supply/demand balance strongly enough to overcome the historical pattern, which breakout traders interpret as significant.",
      },
      {
        id: "q5",
        prompt: "What is a core risk of trading support and resistance levels?",
        choices: [
          "These levels are perfectly objective and identical for every trader",
          "The levels are somewhat subjective and self-referential, so different traders may draw them differently, and their significance can fade over time",
          "Support and resistance levels never change once identified",
          "There is no risk once a support or resistance level is identified",
        ],
        correctIndex: 1,
        explanation:
          "Because support and resistance levels are drawn from historical price action rather than a fixed rule, they carry some subjectivity, and trading a stale or imprecise level — or being wrong about a breakout — is how the approach can lose.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "stocks-channel",
    title: "Channel",
    summary:
      "Trading a stock within a well-defined price range bounded by parallel trendlines, buying near the lower bound and selling near the upper bound.",
    body: [
      { type: "heading", text: "What a Price Channel Is" },
      { type: "paragraph", text: "A price channel is formed by two roughly parallel trendlines — an upper line connecting a series of recent highs, and a lower line connecting a series of recent lows — within which a stock's price has been oscillating for some period. Unlike a single support or resistance level, a channel captures the stock's entire recent trading range as a structure, and that structure can itself be flat (sideways), rising (an uptrend channel), or falling (a downtrend channel)." },
      { type: "heading", text: "Trading the Range" },
      { type: "paragraph", text: "A basic channel-trading strategy buys the stock when its price approaches the lower boundary of the channel and sells or shorts when it approaches the upper boundary, on the expectation that the price will continue oscillating within the established range — effectively a mean-reversion strategy applied within the geometric structure of the channel rather than around a single average." },
      {
        type: "image",
        diagramId: "channel",
        caption: "Price oscillates between the channel's support and resistance lines until it finally breaks out.",
      },
      { type: "heading", text: "Trading the Breakout" },
      { type: "paragraph", text: "Channels are also used to trade breakouts: a decisive move outside either boundary, especially on higher-than-normal volume, is read as a signal that the established range no longer holds and a new trend may be starting, at which point a channel trader may reverse from range-trading the interior to trading the breakout in its new direction." },
      { type: "heading", text: "The Risk of a Failed Channel" },
      { type: "paragraph", text: "As with support and resistance, the main challenge is that channel boundaries are drawn somewhat subjectively from the trader's own reading of recent highs and lows, and a channel that has held reliably for a long stretch can still fail without warning — so channel strategies typically pair the range-trading rule with a stop-loss or a plan for handling the breakout scenario, rather than assuming the channel will hold indefinitely." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What forms a price channel?",
        choices: [
          "A single moving average line",
          "Two roughly parallel trendlines — an upper line connecting recent highs and a lower line connecting recent lows",
          "The company's earnings report schedule",
          "A single support level with no corresponding resistance",
        ],
        correctIndex: 1,
        explanation:
          "A channel is defined by a pair of parallel trendlines bounding the stock's recent trading range from above and below, unlike a single support or resistance level.",
      },
      {
        id: "q2",
        prompt: "What does a basic channel-trading strategy do when price approaches the lower boundary of the channel?",
        choices: [
          "Sell or short the stock",
          "Buy the stock, expecting it to bounce back within the established range",
          "Immediately close all positions in the stock",
          "Increase the size of the channel",
        ],
        correctIndex: 1,
        explanation:
          "A basic channel strategy is a mean-reversion approach within the channel's structure — buying near the lower boundary on the expectation the price continues oscillating within the range.",
      },
      {
        id: "q3",
        prompt: "How can a channel be used to trade breakouts, rather than just range-bound oscillation?",
        choices: [
          "Channels can never be used to trade breakouts",
          "A decisive move outside either boundary, especially on high volume, can signal a new trend starting, prompting the trader to reverse from range-trading to trading the breakout direction",
          "Breakouts only occur inside the channel, never outside it",
          "Channel breakouts are always ignored by traders",
        ],
        correctIndex: 1,
        explanation:
          "When price breaks decisively through a channel boundary, especially with strong volume, it's read as a signal the range no longer holds — a channel trader may switch from betting on reversion to betting on the new trend.",
      },
      {
        id: "q4",
        prompt: "Can a price channel itself be trending, rather than flat?",
        choices: [
          "No, channels are always perfectly flat",
          "Yes — a channel can be flat, rising (uptrend channel), or falling (downtrend channel)",
          "Channels can only exist in cryptocurrency markets",
          "A channel becomes a support level once it starts trending",
        ],
        correctIndex: 1,
        explanation:
          "A channel is defined by the parallel trendlines connecting highs and lows, which can themselves slope upward, downward, or stay flat, capturing trending as well as sideways price action.",
      },
      {
        id: "q5",
        prompt: "Why do channel strategies typically pair the range-trading rule with a stop-loss or breakout plan?",
        choices: [
          "Channels never fail once established",
          "A channel that has held reliably can still fail without warning, so relying on it holding indefinitely is risky without a plan for that scenario",
          "Stop-losses are required by regulation for all channel trades",
          "Channel boundaries are always perfectly objective and never subjective",
        ],
        correctIndex: 1,
        explanation:
          "Since channel boundaries are drawn somewhat subjectively and can break down unexpectedly, a purely range-trading approach without a breakout plan or stop-loss risks large losses if the range fails to hold.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "stocks-event-driven-ma",
    title: "Event-driven – M&A",
    summary:
      "Trading the price gap between a target company's stock and the announced acquisition price after a merger is announced — commonly called merger arbitrage.",
    body: [
      { type: "heading", text: "The Deal-Price Discount" },
      { type: "paragraph", text: "When one company announces it will acquire another, the target company's stock typically jumps toward the announced deal price but usually still trades at a discount to it, reflecting the market's assessment of the risk that the deal might not close, due to financing issues, regulatory objections, shareholder rejection, or a competing bid falling through. Merger arbitrage buys the target's stock at that discount, betting the deal closes and the stock converges to the full deal price." },
      { type: "heading", text: "Structuring the Hedge" },
      { type: "paragraph", text: "In a stock-for-stock deal, where the target's shareholders receive shares of the acquirer rather than cash, the standard structure is to go long the target's stock and simultaneously short the acquirer's stock in the ratio specified by the deal terms — this hedges out the acquirer's own stock-price moves, isolating a bet purely on whether the deal closes, rather than on where the acquirer's stock happens to trade." },
      { type: "heading", text: "Deal-Completion Risk" },
      { type: "paragraph", text: "The primary source of the discount, and the primary risk to the strategy, is deal-completion risk: mergers can fall apart due to antitrust challenges, financing falling through, a shareholder vote failing, or a material adverse change clause being invoked — and if a deal does collapse, the target's stock typically falls sharply back toward its pre-announcement price, which can produce a loss much larger than the modest discount the strategy was trying to capture." },
      { type: "heading", text: "A Return Profile Like Selling Insurance" },
      { type: "paragraph", text: "Because the return on a single deal is capped, the stock can only converge up to the deal price, while the downside on a collapsed deal is comparatively large and sudden, merger arbitrage return profiles resemble selling insurance — collecting a steady stream of small, positive spreads across many deals, punctuated by occasional sharp losses when a deal breaks, which is why diversifying across many uncorrelated deals is central to managing the strategy's risk." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does a target company's stock typically do immediately after a merger is announced?",
        choices: [
          "It falls to zero immediately",
          "It jumps toward the announced deal price, but usually still trades at a discount to it",
          "It becomes completely untradeable",
          "It always trades above the announced deal price",
        ],
        correctIndex: 1,
        explanation:
          "The stock rises toward the deal price on the announcement but typically trades below it, reflecting the market's assessment of the risk the deal might not close.",
      },
      {
        id: "q2",
        prompt: "What does merger arbitrage bet on?",
        choices: [
          "That the acquiring company's stock will double in price",
          "That the announced deal will close, allowing the target's stock to converge to the full deal price",
          "That the merger will definitely be rejected by regulators",
          "That interest rates will fall",
        ],
        correctIndex: 1,
        explanation:
          "Merger arbitrage buys the target at its discount to the deal price, betting the deal successfully closes and the discount closes with it.",
      },
      {
        id: "q3",
        prompt: "In a stock-for-stock deal, what is the standard merger-arbitrage position structure?",
        choices: [
          "Long the target's stock only, with no position in the acquirer",
          "Long the target's stock and short the acquirer's stock in the ratio specified by the deal terms",
          "Short both the target's and the acquirer's stock",
          "Long the acquirer's stock only",
        ],
        correctIndex: 1,
        explanation:
          "Shorting the acquirer in the deal's specified ratio hedges out the acquirer's own stock-price moves, isolating the bet purely on whether the deal itself closes.",
      },
      {
        id: "q4",
        prompt: "What is the primary risk in merger arbitrage?",
        choices: [
          "The risk that the stock market closes permanently",
          "Deal-completion risk — the merger falling apart due to antitrust challenges, financing issues, or a failed shareholder vote",
          "The risk that dividends are paid too frequently",
          "The risk that the target company's name changes",
        ],
        correctIndex: 1,
        explanation:
          "If the deal collapses for any of several possible reasons, the target's stock typically falls sharply back toward its pre-announcement level, which is the strategy's main risk.",
      },
      {
        id: "q5",
        prompt: "Why is merger arbitrage's return profile often compared to selling insurance?",
        choices: [
          "Because it involves literally selling insurance policies",
          "Because it collects a steady stream of small, positive spreads across many deals, punctuated by occasional sharp losses when a deal breaks",
          "Because it guarantees a fixed return with no risk at all",
          "Because it can only be used by insurance companies",
        ],
        correctIndex: 1,
        explanation:
          "Like selling insurance, the strategy earns small, consistent premiums (the deal spread) most of the time, but faces occasional large losses when a \"claim\" (a broken deal) occurs — which is why diversifying across many deals matters.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "stocks-machine-learning-knn",
    title: "Machine learning – single-stock KNN",
    summary:
      "Using the k-nearest-neighbors algorithm to predict a stock's next move by finding historical periods with the most similar pattern of features and seeing what happened next.",
    body: [
      { type: "heading", text: "What KNN Is" },
      { type: "paragraph", text: "K-nearest-neighbors (KNN) is a simple, non-parametric machine learning algorithm: to predict something about a new data point, it looks for the k most similar past data points, its \"nearest neighbors,\" measured by some distance metric across a set of features, and bases the prediction on what happened in those similar cases, rather than fitting a specific mathematical formula to the whole dataset in advance." },
      { type: "heading", text: "Building a Feature Vector" },
      { type: "paragraph", text: "Applied to a single stock, a KNN strategy defines a feature vector describing the stock's current state — for example, its recent returns over several lookback windows, its recent volatility, and maybe a volume measure — and searches through the stock's own trading history for the k historical days whose feature vectors were most similar to today's. The strategy then predicts the stock's next move based on the average of what actually happened on those k similar historical days." },
      { type: "heading", text: "Flexibility and Its Cost" },
      { type: "paragraph", text: "Because KNN makes no assumption about the shape of the relationship between features and future returns, unlike, say, a linear regression, which assumes a straight-line relationship, it can in principle capture more complex, nonlinear patterns in a stock's behavior — but this flexibility comes at the cost of needing a reasonably long price history to have enough genuinely similar past examples to draw from, and of being more prone to overfitting to noise if the feature set or the value of k isn't chosen carefully." },
      { type: "heading", text: "Choosing k and a Distance Metric" },
      { type: "paragraph", text: "Two of the most important design choices in a KNN strategy are k itself, how many neighbors to average over, since too few makes the prediction noisy and unstable while too many dilutes it toward the average, losing its ability to react to anything distinctive about the current setup, and the distance metric used to measure \"similarity\" between feature vectors, since different features may need to be weighted or scaled differently for the notion of \"nearest\" to be meaningful." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What is the core idea behind the k-nearest-neighbors (KNN) algorithm?",
        choices: [
          "Fitting a single mathematical formula to the entire dataset in advance",
          "Finding the k most similar past data points to a new one and basing the prediction on what happened in those similar cases",
          "Ignoring all historical data and predicting randomly",
          "Using only the single most recent data point to make every prediction",
        ],
        correctIndex: 1,
        explanation:
          "KNN is a non-parametric method — rather than assuming a fixed formula, it looks up the most similar historical examples and bases its prediction on what happened in those cases.",
      },
      {
        id: "q2",
        prompt: "In a single-stock KNN strategy, what is a \"feature vector\"?",
        choices: [
          "The stock's ticker symbol alone",
          "A description of the stock's current state, such as recent returns, volatility, and volume, used to find similar historical periods",
          "The company's full annual report",
          "A random number generated each trading day",
        ],
        correctIndex: 1,
        explanation:
          "The feature vector captures the relevant characteristics of the stock's current situation, which is then compared against historical feature vectors to find the most similar past periods.",
      },
      {
        id: "q3",
        prompt: "What is an advantage of KNN's lack of an assumed relationship shape (unlike linear regression)?",
        choices: [
          "It guarantees perfect predictions every time",
          "It can potentially capture more complex, nonlinear patterns in a stock's behavior",
          "It requires no historical data whatsoever",
          "It eliminates the need for any features at all",
        ],
        correctIndex: 1,
        explanation:
          "Since KNN doesn't assume a specific mathematical form (like a straight line) relating features to outcomes, it can in principle pick up on more complex, nonlinear patterns that a simpler model might miss.",
      },
      {
        id: "q4",
        prompt: "What happens if the value of k (the number of neighbors) is chosen too large?",
        choices: [
          "The prediction becomes noisier and less stable",
          "The prediction gets diluted toward the overall average, losing its ability to react to anything distinctive about the current setup",
          "The algorithm stops working entirely",
          "The stock's price is guaranteed to rise",
        ],
        correctIndex: 1,
        explanation:
          "Averaging over too many neighbors smooths the prediction toward the general average outcome, weakening its sensitivity to what's actually distinctive about the current situation — the opposite problem from choosing k too small, which makes it noisy.",
      },
      {
        id: "q5",
        prompt: "Why does the choice of distance metric matter in a KNN strategy?",
        choices: [
          "It doesn't matter — any distance metric produces identical results",
          "Different features may need to be weighted or scaled differently for the notion of \"nearest\" or \"most similar\" to be meaningful",
          "Distance metrics are only used in unrelated geometry problems",
          "The distance metric determines the company's stock ticker",
        ],
        correctIndex: 1,
        explanation:
          "If features are on different scales or have different relevance, an unweighted distance metric can be dominated by whichever feature happens to have the largest raw scale, so choosing (or scaling) the distance metric thoughtfully is an important design decision.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "stocks-statistical-arbitrage-optimization",
    title: "Statistical arbitrage – optimization",
    summary:
      "Building a large statistical-arbitrage portfolio as a formal optimization problem, balancing expected return, risk, and trading costs across many simultaneous positions.",
    body: [
      { type: "heading", text: "From Forecasts to Positions" },
      { type: "paragraph", text: "A large statistical arbitrage, or \"stat arb,\" operation typically generates hundreds or thousands of individual return forecasts across a broad universe of stocks — one per name, updated frequently, often blending several of the signals covered elsewhere in this course, such as momentum, mean-reversion, and factor scores. The question of exactly how much of each stock to actually hold, given all those simultaneous forecasts plus real-world constraints, is itself treated as a formal optimization problem rather than decided name-by-name." },
      { type: "heading", text: "The Optimization's Objective" },
      { type: "paragraph", text: "The optimization typically maximizes expected portfolio return, built from the individual stock forecasts, minus a penalty for risk, usually estimated portfolio variance from a factor-based risk model, minus a penalty for transaction costs, since trading hundreds of names, especially quickly, isn't free — subject to a set of constraints: dollar-neutrality, roughly equal long and short exposure, sector or factor neutrality, not accidentally making a big bet on one industry or common factor, and position-size limits per stock." },
      { type: "heading", text: "Penalizing Turnover" },
      { type: "paragraph", text: "Because the forecasts, the risk model, and the cost model can all disagree with each other, and because a portfolio that's optimal for today's forecasts can require large trades away from yesterday's portfolio, in practice the optimizer typically also penalizes turnover, trading too much too fast, to keep transaction costs manageable, which means the resulting portfolio is a genuine compromise, not simply \"the highest-conviction bets, sized as large as possible.\"" },
      { type: "heading", text: "A Discipline of Its Own" },
      { type: "paragraph", text: "This portfolio-construction-as-optimization approach is what elevates statistical arbitrage from a collection of individual trading signals into a coherent, risk-managed system — the same underlying signals could produce very different real portfolios, and very different risk and return profiles, depending on how the optimization is set up, which is why the optimization step is treated as its own discipline within a stat-arb operation, separate from generating the underlying forecasts themselves." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "In a large statistical arbitrage operation, how is the exact size of each individual stock position typically decided?",
        choices: [
          "By trading a fixed dollar amount in every stock regardless of forecast",
          "As a formal optimization problem that weighs all simultaneous forecasts and constraints together, rather than name-by-name",
          "Purely at random",
          "Only for the single stock with the highest forecast, ignoring all others",
        ],
        correctIndex: 1,
        explanation:
          "With hundreds or thousands of simultaneous return forecasts, position sizing is treated as a portfolio-level optimization problem rather than a series of independent, individual decisions.",
      },
      {
        id: "q2",
        prompt: "What does a typical stat-arb portfolio optimization try to maximize or minimize?",
        choices: [
          "Only the number of stocks traded, with no other consideration",
          "Expected return minus a penalty for estimated risk minus a penalty for transaction costs",
          "Only the portfolio's total dollar size",
          "The number of sectors represented in the portfolio",
        ],
        correctIndex: 1,
        explanation:
          "The optimization balances the portfolio's expected return (from the forecasts) against the risk it's taking on and the cost of trading into that portfolio.",
      },
      {
        id: "q3",
        prompt: "What is \"dollar-neutrality,\" as a constraint in stat-arb portfolio construction?",
        choices: [
          "Holding only long positions, never short",
          "Keeping roughly equal long and short dollar exposure in the portfolio",
          "Never trading in dollar-denominated stocks",
          "Holding exactly one dollar of every stock",
        ],
        correctIndex: 1,
        explanation:
          "Dollar-neutrality is a common constraint that keeps the portfolio's overall long exposure roughly balanced against its short exposure, reducing unintended directional market exposure.",
      },
      {
        id: "q4",
        prompt: "Why does a stat-arb optimizer typically penalize turnover (trading too much, too fast)?",
        choices: [
          "Turnover has no cost or downside in a real portfolio",
          "Because trading hundreds of names, especially quickly, incurs real transaction costs that erode returns if left unchecked",
          "Regulations forbid any turnover in a stat-arb portfolio",
          "Turnover always improves the portfolio's risk profile with no cost",
        ],
        correctIndex: 1,
        explanation:
          "Moving quickly toward an \"optimal\" portfolio based on today's forecasts can require large trades, which are costly at scale — penalizing turnover keeps the resulting trading manageable and cost-effective.",
      },
      {
        id: "q5",
        prompt: "Why is portfolio-construction optimization treated as its own discipline, separate from generating the underlying return forecasts?",
        choices: [
          "Because forecasts and portfolio construction are always exactly the same thing",
          "Because the same underlying forecasts can produce very different real portfolios, with very different risk and return profiles, depending on how the optimization is set up",
          "Because optimization has no effect on the resulting portfolio",
          "Because only one possible portfolio can ever be built from a given set of forecasts",
        ],
        correctIndex: 1,
        explanation:
          "How forecasts, risk, and costs are weighed and constrained in the optimization meaningfully shapes the resulting portfolio, which is why it's treated as a distinct step and discipline from generating the forecasts themselves.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "stocks-alpha-combos",
    title: "Alpha combos",
    summary:
      "Combining multiple distinct alpha-generating signals into a single blended forecast, on the same diversification logic as a multifactor portfolio but applied more broadly to any source of edge.",
    body: [
      { type: "heading", text: "What an \"Alpha\" Is" },
      { type: "paragraph", text: "An individual trading signal — momentum, an earnings surprise, a statistical mean-reversion score, a machine-learning prediction, and so on — is typically called an \"alpha\" in quantitative trading, shorthand for a forecast of a stock's expected excess return. An alpha combo blends several distinct alphas together into one combined forecast per stock, used as the actual signal driving the portfolio, rather than trading off of any single alpha alone." },
      { type: "heading", text: "Beyond Named Factors" },
      { type: "paragraph", text: "The logic closely parallels a multifactor portfolio, but generalizes beyond named academic factors like value and momentum to include any source of predictive signal a firm has access to — proprietary data, alternative datasets, machine-learning model outputs, or even a human analyst's discretionary view — combined via the same basic principle: individually noisy or unreliable signals, when combined, average out much of their independent noise if they're not too correlated with each other." },
      { type: "heading", text: "Weighting by Quality and Independence" },
      { type: "paragraph", text: "Combining alphas well requires more than just averaging them together: each alpha typically needs its own estimate of quality, how reliable has this particular alpha historically been, and how correlated is it with the others already in the combo, so that more reliable, more independent alphas are weighted more heavily than noisier or redundant ones — this weighting is often itself estimated statistically, similar in spirit to how a multifactor portfolio might use factor z-scores, but is usually a more involved, ongoing calibration process given the larger and more heterogeneous set of signals typically involved." },
      { type: "heading", text: "Diversifying Across Sources of Edge" },
      { type: "paragraph", text: "A well-built alpha combo captures a form of diversification that goes beyond just diversifying across stocks — it diversifies across sources of edge itself, so that if any one alpha decays over time, a common risk as a signal becomes more widely known and arbitraged away by other traders, the overall combined forecast is far less damaged than if the whole strategy had depended on that one alpha alone." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "In quantitative trading, what is an \"alpha\"?",
        choices: [
          "A stock's ticker symbol",
          "A forecast, or trading signal, of a stock's expected excess return",
          "A company's total market capitalization",
          "A type of bond issued by the government",
        ],
        correctIndex: 1,
        explanation:
          "\"Alpha\" is standard quant shorthand for an individual signal or forecast predicting a stock's expected excess return, whether from momentum, an earnings surprise, or any other source.",
      },
      {
        id: "q2",
        prompt: "What does an \"alpha combo\" do?",
        choices: [
          "Trades off of a single alpha signal exclusively",
          "Blends several distinct alpha signals together into one combined forecast used to drive the portfolio",
          "Ignores all quantitative signals in favor of pure guesswork",
          "Refers to a type of options combination strategy",
        ],
        correctIndex: 1,
        explanation:
          "Rather than relying on any single signal, an alpha combo blends multiple distinct alphas into one combined forecast, aiming to diversify across sources of predictive edge.",
      },
      {
        id: "q3",
        prompt: "How does the logic of an alpha combo relate to a multifactor portfolio?",
        choices: [
          "They are unrelated concepts with no shared logic",
          "It follows the same diversification principle, but generalizes beyond named academic factors to any source of predictive signal, including proprietary data or model outputs",
          "Alpha combos can only ever include exactly one signal",
          "Multifactor portfolios and alpha combos always produce identical portfolios",
        ],
        correctIndex: 1,
        explanation:
          "Both rely on the idea that combining relatively independent, individually noisy signals reduces overall noise — an alpha combo simply applies this more broadly, beyond just named factors like value and momentum.",
      },
      {
        id: "q4",
        prompt: "Why does combining alphas well require more than simply averaging them together?",
        choices: [
          "Simple averaging is always the optimal approach with no exceptions",
          "Each alpha typically needs its own quality estimate — reliability and correlation with other alphas — so more reliable, independent signals can be weighted more heavily",
          "Averaging alphas together is technically impossible",
          "Alphas can never be compared to each other in terms of quality",
        ],
        correctIndex: 1,
        explanation:
          "Treating every alpha as equally reliable and independent would waste the benefit of weighting toward the signals that actually add the most value — proper combination requires estimating each alpha's quality and correlation with the others.",
      },
      {
        id: "q5",
        prompt: "What risk does a well-diversified alpha combo help protect against?",
        choices: [
          "The risk that a single stock's price never changes",
          "The risk that any one individual alpha decays over time (e.g., becomes widely known and arbitraged away), damaging the overall strategy much less than if it depended on that alpha alone",
          "The risk that trading commissions increase",
          "There is no risk that diversifying alphas can help mitigate",
        ],
        correctIndex: 1,
        explanation:
          "Individual signals can lose their edge over time as more traders discover and exploit them — combining many relatively independent alphas means the failure of any single one has a much smaller impact on the overall combined forecast.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "stocks-what-is-a-stock",
    title: "What Is a Stock?",
    summary:
      "Owning a share of a company — what that ownership actually entitles you to, and how it differs from lending a company money.",
    body: [
      { type: "heading", text: "Ownership, Not a Loan" },
      { type: "paragraph", text: "A share of stock represents a fractional ownership stake in a company, not a loan to it. Unlike a bondholder, who's owed a fixed repayment, a shareholder owns a proportional slice of everything the company owns and earns, with no promise of repayment at all." },
      { type: "heading", text: "What Shareholders Are Entitled To" },
      { type: "paragraph", text: "Owning a share entitles you to a proportional claim on the company's future profits, through dividends if the company pays them and through the growth of the stock's own value, a vote on major corporate matters at the company's shareholder meetings, and a residual claim on the company's assets if it's ever liquidated — after every creditor and bondholder has been paid first." },
      { type: "heading", text: "Public vs. Private Companies" },
      { type: "paragraph", text: "A private company's shares are held by a small number of founders, employees, and investors, and aren't available for the general public to buy or sell. A public company has listed its shares on an exchange through an initial public offering (IPO), letting anyone buy or sell shares freely in the open market." },
      { type: "heading", text: "Why Stock Prices Move" },
      { type: "paragraph", text: "A stock's price is simply whatever the market is currently willing to pay for one share, constantly being reset by real buy and sell orders. That price reflects the market's collective, ever-changing view of the company's future profits, discounted back to what they're worth today — new information about the business updates that view, and the price along with it." },
      { type: "heading", text: "In Practice" },
      { type: "paragraph", text: "When a fast-growing private company decides to go public, it's converting itself from a business owned by a handful of founders and early investors into one that anyone can own a piece of by buying shares on an exchange. A retail investor who buys shares right after that IPO isn't lending the company money that has to be paid back — they now own a small, permanent slice of the business itself, sharing in its future profits and its future losses alike, with no one obligated to ever hand that money back." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does owning a share of stock represent?",
        choices: [
          "A loan to the company that must be repaid on a fixed schedule",
          "A fractional ownership stake in the company",
          "A guarantee of a fixed annual payment",
          "A right to manage the company's daily operations directly",
        ],
        correctIndex: 1,
        explanation:
          "A share is ownership, not debt — a shareholder owns a proportional slice of the company itself, with no promise of repayment the way a bondholder has.",
      },
      {
        id: "q2",
        prompt: "What is a shareholder's claim on a company's assets if it's ever liquidated?",
        choices: [
          "Shareholders are paid before any creditor or bondholder",
          "A residual claim, paid only after every creditor and bondholder has been paid first",
          "Shareholders have no claim on the company's assets at all",
          "Shareholders receive a fixed dollar amount regardless of what's left",
        ],
        correctIndex: 1,
        explanation:
          "Shareholders sit at the bottom of the claims hierarchy in a liquidation — they only receive whatever is left after creditors and bondholders have been paid in full.",
      },
      {
        id: "q3",
        prompt: "What distinguishes a public company from a private one?",
        choices: [
          "A public company's shares are listed on an exchange and can be freely bought or sold by anyone, while a private company's shares are held by a small, fixed group",
          "Private companies are always larger than public companies",
          "Public companies cannot ever pay dividends",
          "There is no meaningful difference between the two",
        ],
        correctIndex: 0,
        explanation:
          "Going public via an IPO is what opens a company's shares to trading by the general public on an exchange — a private company's ownership stays concentrated among a small group.",
      },
      {
        id: "q4",
        prompt: "What fundamentally causes a stock's price to move?",
        choices: [
          "The price is fixed permanently at the company's IPO price",
          "The market's collective, ever-changing view of the company's future profits, updated as new information arrives",
          "Stock prices change randomly with no relationship to the company at all",
          "Only the company's own management can change the stock price",
        ],
        correctIndex: 1,
        explanation:
          "A stock's price reflects what buyers and sellers currently believe the company's future profits are worth today — new information shifts that view, and the price moves with it.",
      },
      {
        id: "q5",
        prompt: "What does a shareholder receive that a bondholder does not?",
        choices: [
          "A fixed, guaranteed repayment date",
          "A vote on major corporate matters at shareholder meetings",
          "Priority over shareholders in a liquidation",
          "A fixed coupon payment schedule",
        ],
        correctIndex: 1,
        explanation:
          "Voting rights on major corporate matters are a feature of equity ownership, not debt — a bondholder is owed fixed payments but generally has no vote in how the company is run.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "stocks-how-stock-trading-works",
    title: "How Stock Trading Works",
    summary:
      "The mechanics of actually buying and selling a share — exchanges, order types, and what it means to go long or sell short.",
    body: [
      { type: "heading", text: "Exchanges and Market Makers" },
      { type: "paragraph", text: "Stocks trade on organized exchanges, like the NYSE or Nasdaq, where buy and sell orders from every participant are matched together. Underneath that matching, market makers continuously quote both a price they're willing to buy at, the bid, and a price they're willing to sell at, the ask, providing the liquidity that lets an order actually get filled quickly." },
      { type: "heading", text: "Market Orders vs. Limit Orders" },
      { type: "paragraph", text: "A market order buys or sells immediately at whatever the best available price happens to be right now, prioritizing speed of execution over price certainty. A limit order instead specifies the worst price you're willing to accept, guaranteeing the price if it fills, but with no guarantee it fills at all if the market never reaches that level." },
      { type: "heading", text: "Going Long" },
      { type: "paragraph", text: "Buying a stock outright, in the ordinary sense, is called going long: you profit if the price rises, and lose if it falls, with your maximum loss limited to what you paid for the shares." },
      { type: "heading", text: "Selling Short" },
      { type: "paragraph", text: "Selling short flips that around: borrowing shares you don't own, selling them immediately, and aiming to buy them back later at a lower price to return to the lender, pocketing the difference. A short seller profits if the price falls, but faces theoretically unlimited losses if the price rises instead, since there's no cap on how high a stock can go." },
      { type: "heading", text: "In Practice" },
      { type: "paragraph", text: "Picture a trader who believes a heavily hyped stock has run up further than its actual business justifies. Instead of buying, they borrow shares from their broker and sell them immediately at today's price, planning to buy them back later once the price comes back down and return the borrowed shares to close out the trade. If they're right, they pocket the difference; but if the stock keeps climbing instead, they have to buy back at a higher and higher price with no ceiling in sight, which is exactly why short selling carries a kind of risk that a simple long position never does." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What role do market makers play in stock trading?",
        choices: [
          "They continuously quote a bid and an ask price, providing the liquidity that lets orders get filled quickly",
          "They set the company's earnings reports",
          "They vote on behalf of all shareholders",
          "They determine a company's dividend policy",
        ],
        correctIndex: 0,
        explanation:
          "Market makers stand ready to buy at their quoted bid and sell at their quoted ask, which is what provides the liquidity underlying an exchange's order matching.",
      },
      {
        id: "q2",
        prompt: "What is the key difference between a market order and a limit order?",
        choices: [
          "A market order guarantees a specific price but not speed; a limit order guarantees speed but not price",
          "A market order fills immediately at the best available price, prioritizing speed; a limit order specifies a price and may not fill at all",
          "They are identical in every respect",
          "Limit orders can only be used to sell, never to buy",
        ],
        correctIndex: 1,
        explanation:
          "A market order trades execution certainty for price uncertainty, while a limit order trades price certainty (if it fills) for execution uncertainty.",
      },
      {
        id: "q3",
        prompt: "What does it mean to \"go long\" a stock?",
        choices: [
          "Borrowing shares and selling them immediately",
          "Buying the stock outright, profiting if the price rises and losing if it falls",
          "Holding a stock for at least ten years",
          "Betting that the stock's price will fall",
        ],
        correctIndex: 1,
        explanation:
          "Going long is simply the ordinary sense of buying a stock — you own it outright, and your position gains value as the price rises.",
      },
      {
        id: "q4",
        prompt: "How does selling short work?",
        choices: [
          "Borrowing shares, selling them immediately, and aiming to buy them back later at a lower price to return to the lender",
          "Buying a stock and holding it for a very short period of time",
          "Selling a stock you already own and never buying it back",
          "A type of dividend payment",
        ],
        correctIndex: 0,
        explanation:
          "Short selling borrows shares to sell first, with the plan to repurchase them later at a lower price — profiting from a price decline rather than a rise.",
      },
      {
        id: "q5",
        prompt: "Why does a short seller face theoretically unlimited losses, unlike a long position?",
        choices: [
          "Because there's no cap on how high a stock's price can rise, while a long position's maximum loss is capped at what was paid for the shares",
          "Short selling is actually less risky than going long",
          "Short sellers are protected by a guaranteed maximum loss limit",
          "A stock's price can never rise once it has been sold short",
        ],
        correctIndex: 0,
        explanation:
          "A long position's downside is capped at the purchase price, since a stock can't fall below zero, but a short position's losses grow without limit as the price keeps rising, since there's no ceiling on how high it can go.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "stocks-market-capitalization-and-sectors",
    title: "Market Capitalization and Sectors",
    summary:
      "How a company's total size is measured in the stock market, and the broad industry groupings used to compare similar companies.",
    body: [
      { type: "heading", text: "What Market Capitalization Is" },
      { type: "paragraph", text: "A company's market capitalization, or market cap, is simply its current share price multiplied by the total number of shares outstanding — a single number representing the market's current valuation of the entire company, not just one share of it." },
      { type: "heading", text: "Large-, Mid-, and Small-Cap" },
      { type: "paragraph", text: "Companies are commonly grouped by market cap into large-cap (generally the biggest, most established companies), mid-cap, and small-cap (typically newer or less established companies). These groupings matter because company size is correlated with other traits investors care about — liquidity, volatility, and growth potential all tend to differ systematically across the three groups." },
      { type: "heading", text: "Sectors and Industries" },
      { type: "paragraph", text: "Companies are also classified by what they actually do — sectors like technology, healthcare, energy, and financials, further broken into narrower industries within each. This classification lets investors compare a company against its closest peers, and lets a portfolio manager measure and control how much exposure they have to any one part of the economy." },
      { type: "heading", text: "Indices as Benchmarks" },
      { type: "paragraph", text: "A stock index, like the S&P 500, tracks a defined basket of stocks, often selected and weighted by market cap, to represent the performance of a market or a slice of it. Indices serve as benchmarks that individual stocks, sectors, and entire investment strategies are commonly measured against." },
      { type: "heading", text: "In Practice" },
      { type: "paragraph", text: "A portfolio manager building a technology-focused fund doesn't just buy the single largest tech company by market cap and call it done — they weigh exposure across large-cap software firms, mid-cap semiconductor makers, and smaller, newer companies, because a portfolio concentrated only in the very largest names behaves differently than one spread across the full size spectrum. Comparing that fund's return against a broad benchmark like the S&P 500 is then how the manager judges whether their sector bets actually added value beyond just being invested in stocks generally." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "How is a company's market capitalization calculated?",
        choices: [
          "Current share price multiplied by the total number of shares outstanding",
          "The company's total annual revenue",
          "The company's total debt outstanding",
          "The number of employees multiplied by average salary",
        ],
        correctIndex: 0,
        explanation:
          "Market cap is share price times shares outstanding — a single figure for what the market currently values the entire company at.",
      },
      {
        id: "q2",
        prompt: "Why does the large-cap/mid-cap/small-cap grouping matter to investors?",
        choices: [
          "It has no practical relevance to investing",
          "Company size is correlated with traits like liquidity, volatility, and growth potential that investors care about",
          "Only large-cap companies are legally allowed to be publicly traded",
          "Small-cap companies always outperform large-cap companies",
        ],
        correctIndex: 1,
        explanation:
          "Market cap groupings are useful because size tends to correlate systematically with liquidity, volatility, and growth characteristics that matter for portfolio construction.",
      },
      {
        id: "q3",
        prompt: "What does classifying companies into sectors and industries let investors do?",
        choices: [
          "Compare a company against its closest peers and measure exposure to a specific part of the economy",
          "Guarantee that every company in a sector performs identically",
          "Eliminate the need to analyze individual companies",
          "Sectors and industries have no practical use for investors",
        ],
        correctIndex: 0,
        explanation:
          "Sector and industry classification enables peer comparison and lets a portfolio manager measure and control concentration in any one part of the economy.",
      },
      {
        id: "q4",
        prompt: "What is a stock index like the S&P 500?",
        choices: [
          "A single company's stock ticker",
          "A defined basket of stocks, often weighted by market cap, that represents the performance of a market or a slice of it",
          "A type of bond issued by the government",
          "A regulatory body that oversees stock exchanges",
        ],
        correctIndex: 1,
        explanation:
          "An index tracks a defined basket of stocks to represent broader market or sector performance, and serves as a benchmark for comparison.",
      },
      {
        id: "q5",
        prompt: "What do indices commonly serve as, for individual stocks and strategies?",
        choices: [
          "A legal requirement for all public companies",
          "Benchmarks that performance is commonly measured against",
          "A guarantee of a minimum return",
          "Indices have no practical use in investing",
        ],
        correctIndex: 1,
        explanation:
          "Indices are widely used as benchmarks — a reference point for judging whether an individual stock, sector, or strategy over- or under-performed the broader market.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "stocks-dividends-and-corporate-actions",
    title: "Dividends and Corporate Actions",
    summary:
      "How a company returns cash to shareholders, and the routine corporate actions that change a stock's share count or price without changing what it's actually worth.",
    body: [
      { type: "heading", text: "Dividends" },
      { type: "paragraph", text: "A dividend is a direct cash payment a company makes to its shareholders, typically out of its profits, usually on a regular quarterly schedule. Not every company pays one — many younger, fast-growing companies reinvest all their profits back into the business instead, favoring share-price growth over a cash payout." },
      { type: "heading", text: "Stock Splits" },
      { type: "paragraph", text: "A stock split increases the number of shares outstanding by a fixed ratio, say two-for-one, while proportionally reducing the price per share, so the total value of what any shareholder holds doesn't actually change. Companies typically split their stock to bring a high per-share price back down to a more approachable, easily-traded range." },
      { type: "heading", text: "Buybacks" },
      { type: "paragraph", text: "A share buyback, or repurchase, is the mirror image of issuing new shares: the company uses its own cash to buy back and retire some of its outstanding shares, which increases each remaining shareholder's proportional ownership of the company without paying out a cash dividend." },
      { type: "heading", text: "Earnings Reports" },
      { type: "paragraph", text: "Public companies report their financial results, typically every quarter, disclosing revenue, profit, and other key business metrics. These earnings reports are closely watched catalysts, since they're often the single biggest source of new information the market uses to reassess what a company, and therefore its stock, is actually worth." },
      { type: "heading", text: "In Practice" },
      { type: "paragraph", text: "Consider a mature utility company that generates steady, predictable cash flow every quarter: rather than plowing all of it back into new growth projects, it distributes a portion directly to shareholders as a dividend, rewarding investors who bought the stock for steady income. Contrast that with a pharmaceutical company awaiting the results of a late-stage drug trial — its stock can swing sharply within minutes of the readout being announced, since that single piece of news instantly changes what the market thinks the company's future earnings, and therefore its stock, are worth." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What is a dividend?",
        choices: [
          "A direct cash payment a company makes to its shareholders, typically out of its profits",
          "A mandatory fee shareholders must pay the company",
          "A type of stock split",
          "A loan shareholders make to the company",
        ],
        correctIndex: 0,
        explanation:
          "A dividend is a cash distribution to shareholders, usually paid out of company profits on a regular schedule — not every company pays one.",
      },
      {
        id: "q2",
        prompt: "What happens to a shareholder's total position value in a stock split?",
        choices: [
          "It doubles automatically",
          "It stays the same — the share count increases and the price per share decreases proportionally",
          "It falls to zero",
          "Splits always reduce a shareholder's total position value",
        ],
        correctIndex: 1,
        explanation:
          "A split changes the share count and per-share price by offsetting amounts, so the total value of a shareholder's position is unaffected.",
      },
      {
        id: "q3",
        prompt: "How does a share buyback affect remaining shareholders?",
        choices: [
          "It increases each remaining shareholder's proportional ownership of the company, without a cash dividend payout",
          "It dilutes every shareholder's ownership stake",
          "It has no effect on shareholder ownership at all",
          "It automatically triggers a stock split",
        ],
        correctIndex: 0,
        explanation:
          "Retiring shares through a buyback reduces the total share count, which increases each remaining shareholder's proportional slice of the company.",
      },
      {
        id: "q4",
        prompt: "Why do younger, fast-growing companies often choose not to pay dividends?",
        choices: [
          "They are legally prohibited from paying dividends",
          "They typically reinvest profits back into the business instead, favoring share-price growth over a cash payout",
          "Dividends are only available to private companies",
          "Fast-growing companies never generate any profit",
        ],
        correctIndex: 1,
        explanation:
          "Reinvesting profits to fuel further growth is a common alternative to paying a dividend, especially for companies still in a high-growth phase.",
      },
      {
        id: "q5",
        prompt: "Why are quarterly earnings reports closely watched by the market?",
        choices: [
          "They're often the single biggest source of new information used to reassess what a company is actually worth",
          "They have no effect on a stock's price",
          "They are only relevant to company employees",
          "Earnings reports are published just once every ten years",
        ],
        correctIndex: 0,
        explanation:
          "Quarterly earnings reports deliver fresh, concrete information about a company's actual performance, which is exactly the kind of news that moves the market's view of what the stock is worth.",
      },
    ],
  },
];
