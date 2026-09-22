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
      "Price-momentum is one of the best-documented anomalies in finance: stocks that have outperformed over the past several months to a year tend to keep outperforming over the next few months, while recent laggards tend to keep lagging. A classic implementation ranks stocks by their trailing 12-month return, often skipping the most recent month which behaves differently, buys the top decile, and shorts or avoids the bottom decile.",
      "Unlike trend-following in futures, which reacts to an individual instrument's own price path, cross-sectional momentum ranks assets relative to each other at a point in time — it's a relative-strength approach, not an absolute-price one. A stock can be in a momentum uptrend relative to its peers even while its own absolute price is roughly flat, if its peers are falling faster.",
      "Momentum's most notorious risk is the \"momentum crash\": during sharp market reversals, especially recoveries after a crash, the stocks that fell hardest often bounce back hardest, and a momentum strategy that's short the recent losers can suffer a severe, rapid loss exactly when the broad market is recovering. This tail risk is why momentum strategies typically pair the signal with volatility controls or position limits rather than running it unhedged.",
      "Momentum is typically rebalanced periodically — monthly is common — reranking the universe and rotating out of names that have fallen out of the top ranks and into new leaders, since a stock's momentum ranking isn't a permanent property; the whole point is that leadership rotates as new price trends emerge.",
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
      "Value investing buys stocks that trade cheaply relative to some measure of fundamental worth — common metrics include price-to-earnings, price-to-book, price-to-cash-flow, or dividend yield — on the premise that the market has temporarily underpriced the company relative to its underlying economics, and that price will eventually converge back toward fair value.",
      "A systematic value strategy typically ranks the investable universe by one or more of these cheapness metrics, buys the cheapest decile or quintile, and either holds long-only or pairs it with a short position in the most expensive names to isolate the value factor from the overall direction of the market.",
      "The value premium's persistence has been debated: cheap stocks are often cheap for a real reason — declining industries, weaker growth prospects, or elevated risk — so a value strategy is partly compensated for bearing that risk, not just for exploiting a pure mispricing. This is why some value stocks, called \"value traps,\" stay cheap indefinitely rather than reverting.",
      "Value and momentum have historically shown low or even negative correlation to each other — a stock the value factor likes (cheap) is often one that momentum dislikes (a recent laggard, which is often why it got cheap), and vice versa. This makes combining value and momentum signals in one portfolio a common way to diversify factor exposure rather than relying on either alone.",
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
      "Pairs trading identifies two stocks whose prices have historically moved together — often companies in the same industry, like two large retailers or two airlines — and monitors the spread, or ratio, between their prices. When that spread diverges further than usual from its typical relationship, the trader shorts the outperforming stock and buys the underperforming one, betting the spread will converge back to its historical norm regardless of which direction the overall market moves.",
      "Because the strategy is simultaneously long one stock and short a similarly-sized position in a closely related one, it is largely market-neutral: if the whole market rises or falls, both legs move together and much of that common exposure cancels out, leaving a position that profits or loses mainly based on the relative performance between the two stocks, not the market's direction.",
      "Identifying a good pair usually starts with a statistical measure of how tightly the two stocks' prices have historically tracked each other — commonly cointegration or a high, stable correlation over time — and defining the spread's normal range, often in terms of standard deviations from its historical average, to decide when a divergence is large enough to trade.",
      "The central risk is that the relationship breaks down permanently rather than reverting — a merger, a company-specific event, or a structural shift in one company's business can cause the historical relationship to stop holding, in which case the spread never reverts and the trade can lose money on both legs at once instead of the offsetting behavior the strategy relies on.",
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
      "This is a form of mean-reversion trading applied to a single, well-defined cluster of closely related stocks — for example, all the major stocks within one narrow industry, like large regional banks or big-box retailers — rather than to a broad, diverse market index. The trader computes some measure of the group's collective typical behavior, such as the cluster's average return over a short window, and looks for individual members whose price has deviated unusually far from that group average.",
      "The trading rule follows directly: when one stock in the cluster has fallen well below the group's recent average performance while its close peers haven't, buy it, expecting it to catch back up toward the cluster; when one stock has risen well above the group's average, sell or short it, expecting it to fall back in line.",
      "This differs from pairs trading in scope: a pair looks at the relationship between exactly two stocks, while a single-cluster mean-reversion strategy looks at one stock's deviation from a whole group of peers at once, which can make the signal more statistically robust — a genuine outlier relative to five or ten closely related peers is a stronger signal than a divergence measured against just one other stock.",
      "Choosing the right cluster matters enormously: the stocks need to be similar enough in what drives their business — same industry, similar size, similar exposure to the same economic factors — that reverting to the group average is actually a sensible expectation, rather than grouping together stocks that only superficially resemble each other and have no real reason to move together.",
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
      "A moving average smooths out day-to-day price noise by averaging a stock's closing price over a fixed lookback window — a 50-day or 200-day moving average is common — recalculated fresh each day as the window rolls forward. A single-moving-average strategy uses just one such average as its entire trading signal.",
      "The rule is simple: when the stock's price is above its moving average, hold a long position, or stay long; when price falls below the moving average, exit the position, or go short in strategies that allow it. The moving average acts as a dynamic line in the sand — price crossing above or below it is treated as a shift from an uptrend to a downtrend, or vice versa.",
      "This approach is a trend-following rule, closely related in spirit to the moving-average-crossover rule used in futures trend-following, but simpler: it compares price to just one reference line rather than comparing two moving averages of different lengths to each other. That simplicity is both its appeal, easy to compute and explain, and its main weakness.",
      "The single-moving-average rule's main drawback shows up in sideways, choppy markets: when price oscillates back and forth across the moving average without establishing a real trend, the strategy generates a series of \"whipsaw\" trades — buying just before a small dip below the average, then selling just before it climbs back above — each one a small loss, with transaction costs compounding the damage. It performs best in markets with sustained, clear directional trends and worst in range-bound, noisy ones.",
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
      "A market maker continuously posts both a bid — a price at which they're willing to buy — and an ask — a price at which they're willing to sell — for a stock, profiting from the difference between the two, the bid-ask spread, by buying from sellers and selling to buyers throughout the day, rather than making a directional bet on where the stock is headed.",
      "Because a market maker is constantly trading with whoever shows up, they inevitably accumulate inventory — if more people sell to them than buy from them over some stretch, their inventory of the stock grows; if more people buy than sell, it shrinks, or goes negative, meaning they end up short. Managing that inventory, rather than picking direction, is the central skill of market-making.",
      "Market makers actively adjust their quoted prices to manage inventory risk: if they've accumulated more of a stock than they want to hold, they'll lower both their bid and ask slightly to encourage buyers and discourage further sellers, nudging their inventory back toward a comfortable level, and do the reverse if they've built up an unwanted short position. This constant, small repricing is a defining feature of the strategy, distinct from a directional trader who holds a fixed view.",
      "The central risk in market-making is adverse selection: on average, the people most eager to trade with you right now are often the ones who know something you don't — informed traders who trade aggressively just before news moves the price. A market maker who can't tell informed order flow from routine liquidity-driven trading risks systematically buying right before a stock falls and selling right before it rises, which is why market makers widen their spreads when uncertainty or the risk of informed trading is elevated.",
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
];
