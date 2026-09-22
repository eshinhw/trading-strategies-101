import type { ConceptLesson } from "./types.js";

// Concept-lesson format, same reasoning as futuresConceptLessons.ts /
// stocksConceptLessons.ts — these are portfolio-rotation, technical, and
// structural ETF-mechanics concepts, not option-payoff structures, so prose +
// a knowledge-check quiz fits better than the options-specific engine.
export const etfConceptLessons: ConceptLesson[] = [
  {
    kind: "concept",
    slug: "etf-sector-momentum-rotation",
    title: "Sector momentum rotation",
    summary:
      "Rotating capital into the sector ETFs with the strongest recent performance, on the premise that sector-level leadership persists for a while.",
    body: [
      { type: "paragraph", text: "Sector momentum rotation applies the same idea behind single-stock price-momentum, but one level up: instead of ranking individual stocks by trailing performance, it ranks entire sector ETFs — technology, energy, healthcare, financials, and so on — by their trailing return, and rotates the portfolio into whichever sector, or handful of sectors, has been leading recently." },
      { type: "paragraph", text: "The appeal of doing this at the sector level rather than the stock level is breadth and simplicity: a handful of liquid sector ETFs, the S&P sector SPDRs, for example, covers the entire market with a small number of positions, avoids single-stock idiosyncratic risk almost entirely, and can be rebalanced with far fewer trades than a stock-picking momentum strategy touching hundreds of names." },
      { type: "paragraph", text: "The mechanics mirror single-stock momentum closely: compute each sector ETF's trailing return over a lookback window, often 3, 6, or 12 months, rank the sectors, hold the top-ranked one or few, and rebalance periodically — monthly is typical — rotating out of a sector as soon as it falls out of the leading group and into whichever sector has taken its place." },
      { type: "paragraph", text: "Because it's concentrated in just one or a few sectors at a time rather than diversified across the whole market, sector rotation carries more concentration risk than a broad-market momentum strategy, and it's vulnerable to the same \"momentum crash\" dynamic as single-stock momentum — a sharp, sudden rotation in market leadership, often around turning points in the economic cycle, can whipsaw the strategy just as it's fully committed to the prior leading sector." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does sector momentum rotation rank, instead of individual stocks?",
        choices: [
          "Individual bonds",
          "Entire sector ETFs, by their trailing return",
          "Currency pairs",
          "Commodity futures contracts",
        ],
        correctIndex: 1,
        explanation:
          "Sector momentum rotation applies the momentum idea one level up from individual stocks, ranking and rotating among whole sector ETFs based on their recent performance.",
      },
      {
        id: "q2",
        prompt: "What is one practical advantage of doing momentum at the sector level rather than the individual-stock level?",
        choices: [
          "It requires holding thousands of individual positions",
          "A small number of liquid sector ETFs can cover the entire market with far fewer trades and less single-stock idiosyncratic risk",
          "It eliminates all risk from the strategy",
          "It requires no rebalancing at all",
        ],
        correctIndex: 1,
        explanation:
          "A handful of sector ETFs gives broad market coverage with simpler, less frequent rebalancing than a stock-picking momentum strategy spanning hundreds of individual names.",
      },
      {
        id: "q3",
        prompt: "How does a sector momentum rotation strategy typically decide which sector(s) to hold?",
        choices: [
          "By picking sectors at random each month",
          "By ranking sector ETFs on trailing return over a lookback window and holding the top-ranked one or few",
          "By holding every sector equally at all times",
          "By avoiding whichever sector has performed best recently",
        ],
        correctIndex: 1,
        explanation:
          "The strategy computes each sector's trailing return, ranks them, and concentrates the portfolio in the leading sector or sectors, rebalancing periodically as leadership shifts.",
      },
      {
        id: "q4",
        prompt: "Why does sector rotation carry more concentration risk than a broad-market momentum strategy?",
        choices: [
          "It never actually holds any positions",
          "It's typically concentrated in just one or a few sectors at a time, rather than diversified across many individual names",
          "Concentration risk does not apply to ETF-based strategies",
          "Sector ETFs are risk-free by construction",
        ],
        correctIndex: 1,
        explanation:
          "Because the portfolio is typically weighted toward a small number of leading sectors rather than spread across the whole market, its fortunes are tied more tightly to how those specific sectors perform.",
      },
      {
        id: "q5",
        prompt: "What risk does sector momentum rotation share with single-stock price-momentum?",
        choices: [
          "The risk of guaranteed, permanent outperformance",
          "The risk of a sharp, sudden reversal in leadership — a \"momentum crash\" — that can hurt the strategy right as it's fully committed to the prior leader",
          "The risk of the ETF issuer changing its logo",
          "There is no shared risk between the two approaches",
        ],
        correctIndex: 1,
        explanation:
          "Like single-stock momentum, sector rotation is vulnerable to abrupt shifts in relative leadership, which can occur suddenly around turning points in the economic cycle.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "etf-sector-momentum-rotation-with-ma-filter",
    title: "Sector momentum rotation with MA filter",
    summary:
      "Adding a moving-average trend filter on top of sector momentum rotation, staying in cash instead of a leading sector when that sector itself is in a downtrend.",
    body: [
      { type: "paragraph", text: "Plain sector momentum rotation always holds whichever sector, or sectors, ranks highest by trailing return, even if that \"leading\" sector is actually falling — it might simply be falling less than everything else. Adding a moving-average filter addresses this: before taking a position in the top-ranked sector, the strategy checks whether that sector ETF's own price is above its moving average, a common absolute-trend confirmation, and only invests if it is; otherwise it holds cash, or a safe asset like short-term Treasury bills, instead." },
      { type: "paragraph", text: "This combines two distinct ideas — relative momentum, which sector is leading the others, and absolute trend, is that sector's own price actually rising — because a sector can be relatively strong, the best of a bad group, while still being in an absolute downtrend, and taking a position in a \"leading\" sector that's still falling defeats the purpose of a trend-following approach." },
      { type: "paragraph", text: "The main benefit shows up during broad market downturns: in a bear market, momentum rotation without a trend filter still forces the strategy to hold the \"least bad\" sector, which can still lose significant money, while the MA filter lets the strategy step aside into cash when even the leading sector fails its own trend test, meaningfully reducing drawdowns during systemic selloffs." },
      { type: "paragraph", text: "The tradeoff is reduced participation during choppy, range-bound periods: since the MA filter can flip on and off as a sector's price oscillates around its moving average, the strategy can end up sitting in cash more often, missing some of the modest gains a fully-invested rotation strategy would have captured, in exchange for the downside protection the filter provides during genuine downturns." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What problem does adding a moving-average filter address in a sector rotation strategy?",
        choices: [
          "The fact that plain momentum rotation is too slow to compute",
          "The fact that plain momentum rotation always invests in the \"leading\" sector even when that sector is itself falling",
          "The fact that ETFs cannot be shorted",
          "The fact that sector ETFs have no trading volume",
        ],
        correctIndex: 1,
        explanation:
          "A sector can be the relative leader, the least bad of a falling group, while still being in an absolute downtrend — the MA filter checks for genuine absolute strength before committing capital.",
      },
      {
        id: "q2",
        prompt: "What does the moving-average filter check before the strategy invests in the top-ranked sector?",
        choices: [
          "The sector ETF's dividend yield",
          "Whether that sector ETF's own price is above its moving average",
          "The number of stocks held within the sector ETF",
          "The sector's historical volatility only",
        ],
        correctIndex: 1,
        explanation:
          "The filter requires the top-ranked sector to also be in an absolute uptrend (price above its own moving average) before the strategy takes a position in it.",
      },
      {
        id: "q3",
        prompt: "What does the strategy do if the top-ranked sector fails the moving-average filter?",
        choices: [
          "It shorts that sector aggressively",
          "It holds cash (or a safe asset) instead of investing in that sector",
          "It invests double the normal amount in that sector",
          "It ignores the filter and invests anyway",
        ],
        correctIndex: 1,
        explanation:
          "If even the relatively strongest sector is in an absolute downtrend, the strategy steps aside into cash rather than forcing an investment.",
      },
      {
        id: "q4",
        prompt: "What is the main benefit of adding the MA filter during broad market downturns?",
        choices: [
          "It guarantees the strategy never loses money",
          "It lets the strategy step aside into cash when even the leading sector fails its own trend test, reducing drawdowns during systemic selloffs",
          "It has no effect during downturns",
          "It forces the strategy to double its sector exposure",
        ],
        correctIndex: 1,
        explanation:
          "Without the filter, the strategy is always forced into the \"least bad\" sector during a broad downturn; the filter allows it to avoid that sector entirely when it's also trending down.",
      },
      {
        id: "q5",
        prompt: "What is the main tradeoff of adding the MA filter?",
        choices: [
          "There is no tradeoff — it is strictly better in every scenario",
          "The strategy can sit in cash more often during choppy, range-bound periods, missing some gains a fully-invested strategy would capture",
          "It eliminates all trading costs entirely",
          "It requires holding twice as many sector ETFs",
        ],
        correctIndex: 1,
        explanation:
          "Since the filter can flip on and off as price oscillates around the moving average, the strategy may miss some modest gains during choppy periods in exchange for the downside protection it provides during real downturns.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "etf-dual-momentum-sector-rotation",
    title: "Dual-momentum sector rotation",
    summary:
      "Combining relative momentum (which sector is leading) with absolute momentum (is that sector's own trailing return positive) before allocating.",
    body: [
      { type: "paragraph", text: "Dual-momentum sector rotation requires a sector to pass two separate momentum tests before earning a position, rather than just one: relative momentum, ranking sector ETFs against each other and favoring the leaders, and absolute momentum, checking whether that sector's own trailing return is positive in absolute terms, not just relative to its peers. A sector only gets an allocation if it clears both hurdles." },
      { type: "paragraph", text: "This is conceptually similar to pairing momentum rotation with a moving-average filter, but uses the sector's own trailing return, over the same or a similar lookback window used for the relative ranking, as the absolute test, rather than a separate technical indicator like a moving average — it's a slightly different way of asking essentially the same underlying question: is this \"leading\" sector actually going up, or just falling the least?" },
      { type: "paragraph", text: "When no sector clears the absolute-momentum hurdle — for example, during a broad, synchronized market decline where every sector's trailing return is negative — the strategy holds cash or a defensive asset instead of forcing an allocation into whichever sector merely ranks highest among a group of losers, which is the central mechanism by which dual momentum tries to sidestep major drawdowns." },
      { type: "paragraph", text: "The dual-momentum framework, popularized in the context of simple asset-class rotation strategies and adapted here to sectors, is valued for its simplicity — just two momentum checks, computed from the same basic trailing-return data, no separate technical layer required — while still capturing much of the downside protection that a more elaborate trend-following overlay would provide." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What two tests must a sector pass in a dual-momentum strategy?",
        choices: [
          "Only a test of the sector's dividend yield",
          "Relative momentum (is it leading its peers) and absolute momentum (is its own trailing return positive)",
          "Two separate relative-momentum tests against different peer groups",
          "A test of market capitalization and a test of trading volume",
        ],
        correctIndex: 1,
        explanation:
          "Dual momentum requires a sector to both outrank its peers (relative momentum) and have a positive trailing return in absolute terms (absolute momentum) before it receives an allocation.",
      },
      {
        id: "q2",
        prompt: "How does dual momentum's absolute-momentum check differ mechanically from a separate moving-average filter?",
        choices: [
          "They are mathematically identical calculations with different names",
          "It uses the sector's own trailing return over a lookback window, rather than comparing current price to a separately-computed moving average",
          "Absolute momentum ignores trailing returns entirely",
          "A moving-average filter cannot be used with momentum strategies",
        ],
        correctIndex: 1,
        explanation:
          "Both approaches try to confirm a sector is genuinely rising rather than just relatively strong, but dual momentum does this using the same trailing-return data as the relative ranking, rather than a separate technical indicator.",
      },
      {
        id: "q3",
        prompt: "What does dual-momentum sector rotation do when no sector clears the absolute-momentum hurdle?",
        choices: [
          "It forces an allocation into the highest-ranked sector regardless",
          "It holds cash or a defensive asset instead of investing in any sector",
          "It shorts every sector simultaneously",
          "It doubles the position size in the top sector",
        ],
        correctIndex: 1,
        explanation:
          "If even the best-ranked sector has a negative trailing return, the strategy sits out rather than allocating to whichever sector merely lost the least.",
      },
      {
        id: "q4",
        prompt: "In what market scenario is dual momentum's cash/defensive fallback most likely to trigger?",
        choices: [
          "A calm, steadily rising market",
          "A broad, synchronized market decline where every sector's trailing return is negative",
          "A market where all sectors have identical returns",
          "It never triggers under any circumstances",
        ],
        correctIndex: 1,
        explanation:
          "When every sector is falling together, none clears the absolute-momentum bar, so the strategy defaults to cash rather than forcing a losing allocation.",
      },
      {
        id: "q5",
        prompt: "What is dual momentum generally valued for, compared to a more elaborate trend-following overlay?",
        choices: [
          "Its extreme complexity and need for many separate indicators",
          "Its simplicity — just two momentum checks computed from the same basic trailing-return data — while still capturing much of the downside protection of more elaborate approaches",
          "Its guarantee of outperforming every other strategy in this course",
          "Its requirement to hold every sector at all times",
        ],
        correctIndex: 1,
        explanation:
          "Dual momentum achieves meaningful downside protection using a lean framework built entirely from trailing-return comparisons, without needing a separate technical layer.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "etf-alpha-rotation",
    title: "Alpha rotation",
    summary: "Rotating sector or asset-class ETF exposure based on a broader combined alpha score, rather than raw trailing return alone.",
    body: [
      { type: "paragraph", text: "Where plain momentum rotation ranks sector ETFs using a single signal — trailing return — alpha rotation ranks them using a broader, combined score built from multiple underlying signals: momentum, but also valuation-style measures, volatility, macro sensitivity, or any other factor a manager believes has predictive power for which sector is likely to lead going forward. The resulting composite \"alpha\" score, much like the alpha combos discussed for individual stocks, is what actually drives the rotation decision." },
      { type: "paragraph", text: "The rationale for going beyond pure price momentum is that trailing return, while a strong and persistent signal on its own, is also noisy and reactive — it only tells the strategy what has already happened, not why, and blending it with other signals, say, a sector's relative valuation, or its typical sensitivity to changes in interest rates or the economic cycle, can produce a more forward-looking, better-timed rotation decision than momentum alone." },
      { type: "paragraph", text: "Constructing the combined score follows the same basic recipe as any multifactor or alpha-combo approach: standardize each individual signal so they're comparable across sectors, weight them according to each signal's estimated reliability and its independence from the others already in the blend, and combine them into one composite ranking used to decide sector allocations at each rebalance." },
      { type: "paragraph", text: "Because it draws on a richer information set than trailing return alone, alpha rotation in principle can react to shifts in sector leadership earlier or more accurately than pure price momentum — but it also depends on the quality and continued relevance of whichever extra signals are included, and a poorly-chosen or stale additional signal can drag down the combined score rather than improve it, so the same discipline that applies to building any alpha combo applies here too." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "How does alpha rotation's ranking signal differ from plain momentum rotation's?",
        choices: [
          "They are identical — both use only trailing return",
          "Alpha rotation uses a broader, combined score built from multiple signals, not just trailing return alone",
          "Alpha rotation ignores price entirely",
          "Alpha rotation can only be used with individual stocks, not ETFs",
        ],
        correctIndex: 1,
        explanation:
          "While momentum rotation ranks sectors purely by trailing return, alpha rotation blends momentum with other signals — valuation, volatility, macro sensitivity, and so on — into one composite score.",
      },
      {
        id: "q2",
        prompt: "What is a limitation of relying on trailing return (pure momentum) alone, that motivates alpha rotation?",
        choices: [
          "Trailing return is always a perfect, noise-free predictor",
          "Trailing return only reflects what has already happened and can be noisy and reactive, without explaining why a sector is moving",
          "Trailing return cannot be computed for sector ETFs",
          "Momentum has no relationship to future sector performance",
        ],
        correctIndex: 1,
        explanation:
          "Pure trailing-return momentum is backward-looking and doesn't distinguish between genuine forward-looking strength and noise, which is part of the motivation for blending in additional signals.",
      },
      {
        id: "q3",
        prompt: "How is alpha rotation's combined score typically constructed?",
        choices: [
          "By using only the single highest-scoring signal for each sector",
          "By standardizing each individual signal, weighting them by reliability and independence, and combining them into one composite ranking",
          "By ignoring all signals except trading volume",
          "By randomly assigning scores to each sector",
        ],
        correctIndex: 1,
        explanation:
          "This mirrors the standard approach used for any multifactor or alpha-combo construction — standardize, weight by quality and independence, then combine into a single ranking.",
      },
      {
        id: "q4",
        prompt: "What is a potential downside of including additional signals beyond trailing return in alpha rotation?",
        choices: [
          "Additional signals always improve the strategy with no risk",
          "A poorly-chosen or stale additional signal can drag down the combined score rather than improve it",
          "Additional signals make the strategy impossible to compute",
          "There is no downside to adding more signals",
        ],
        correctIndex: 1,
        explanation:
          "Just as with any alpha combo, the quality of each included signal matters — a weak or outdated signal can hurt the composite score's predictive power rather than help it.",
      },
      {
        id: "q5",
        prompt: "What is the potential benefit of alpha rotation's richer information set compared to pure price momentum?",
        choices: [
          "It guarantees the strategy will never underperform",
          "It can, in principle, react to shifts in sector leadership earlier or more accurately than pure price momentum alone",
          "It eliminates the need for any rebalancing",
          "It only works during market holidays",
        ],
        correctIndex: 1,
        explanation:
          "By drawing on more than just trailing return, alpha rotation aims to anticipate or confirm sector leadership shifts using information that raw price momentum alone wouldn't capture.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "etf-r-squared",
    title: "R-squared",
    summary:
      "Using how cleanly a trend has been moving — measured by the R-squared of price against time — to filter out choppy, low-quality trends before trading them.",
    body: [
      { type: "paragraph", text: "R-squared is a statistic, familiar from regression analysis, that measures how well a line fits a set of data points, ranging from 0 (no fit at all) to 1 (a perfect fit). Applied to a price trend, it measures how well a straight line fits a sector ETF's price plotted against time over some lookback window: a high R-squared means the price has been moving up, or down, smoothly and consistently, while a low R-squared means the price has been getting to roughly the same place, but bouncing around chaotically on the way." },
      {
        type: "image",
        diagramId: "r-squared-comparison",
        caption: "Two trends that cover the same net move — only the smooth, high-R² one reflects genuine, trustworthy momentum.",
      },
      { type: "paragraph", text: "The trading insight is that not all trends are created equal, even if they cover the same total price move — a smooth, high-R-squared uptrend reflects steady, persistent buying pressure and is more likely to continue, while a choppy, low-R-squared uptrend that ends up at the same price might just be noisy, directionless trading that happened to net out positive, and is less trustworthy as a signal of genuine momentum." },
      { type: "paragraph", text: "An R-squared-based strategy typically uses this statistic as a filter layered on top of another signal, like momentum or trend-following: before taking a position in a sector, or stock, or any other asset, that's ranked well by trailing return, the strategy checks whether that instrument's price trend also has a sufficiently high R-squared, only trading the cleanest, most consistent trends and skipping ones that technically qualify by raw return but got there through erratic price action." },
      { type: "paragraph", text: "This is a form of quality control on top of a directional signal — R-squared doesn't tell you which direction to trade, only how much to trust the trend you've already identified, and combining it with momentum or trend-following aims to concentrate the strategy's capital in the trends most likely to persist, rather than treating every qualifying trend as equally reliable." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does R-squared measure when applied to a price trend?",
        choices: [
          "The exact future price of the asset",
          "How well a straight line fits the price plotted against time — how smooth and consistent the trend has been",
          "The company's total dividend payments",
          "The number of shares traded per day",
        ],
        correctIndex: 1,
        explanation:
          "R-squared, borrowed from regression analysis, quantifies how cleanly price has been moving in one direction over time, from 0 (no consistent fit) to 1 (a perfectly smooth trend).",
      },
      {
        id: "q2",
        prompt: "What does a low R-squared indicate about a price trend, even if it ended up moving in one net direction?",
        choices: [
          "That the trend was extremely smooth and consistent",
          "That the price got to roughly the same place through choppy, erratic movement rather than steady, consistent movement",
          "That the asset had zero trading volume",
          "That the trend is guaranteed to continue",
        ],
        correctIndex: 1,
        explanation:
          "A low R-squared means the straight-line fit is poor — the price bounced around a lot on its way to the net result, rather than moving smoothly and consistently.",
      },
      {
        id: "q3",
        prompt: "How is R-squared typically used in a trading strategy?",
        choices: [
          "As the sole signal determining which direction to trade",
          "As a filter layered on top of another signal like momentum, favoring smoother, higher-R-squared trends and skipping choppier ones",
          "It has no practical trading application",
          "To determine a company's credit rating",
        ],
        correctIndex: 1,
        explanation:
          "R-squared doesn't provide directional information on its own — it's typically used to filter or rank trends already identified by a directional signal, favoring the cleanest ones.",
      },
      {
        id: "q4",
        prompt: "Why might a smooth, high-R-squared trend be considered more trustworthy than a choppy one with the same total return?",
        choices: [
          "Smooth trends are always guaranteed to reverse immediately",
          "A smooth trend reflects steady, persistent buying (or selling) pressure and is thought more likely to continue than noisy, directionless action that happened to net out positive",
          "R-squared has no relationship to trend quality",
          "Choppy trends always outperform smooth trends",
        ],
        correctIndex: 1,
        explanation:
          "The underlying idea is that consistent, low-noise price action reflects a more genuine, persistent trend than erratic movement that merely arrived at a similar net result.",
      },
      {
        id: "q5",
        prompt: "What role does R-squared play relative to a directional signal like momentum?",
        choices: [
          "It replaces the need for any directional signal entirely",
          "It acts as a quality-control layer — telling you how much to trust a trend you've already identified, not which direction to trade",
          "It always contradicts whatever the momentum signal indicates",
          "It can only be computed once per year",
        ],
        correctIndex: 1,
        explanation:
          "R-squared is combined with, not substituted for, a directional signal — it helps concentrate capital in the trends most likely to persist rather than treating every qualifying trend as equally reliable.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "etf-mean-reversion",
    title: "Mean-reversion",
    summary: "Trading an ETF's short-term deviations from its own recent average price, betting those deviations correct rather than persist.",
    body: [
      { type: "paragraph", text: "Applied to ETFs, mean-reversion follows the same basic logic covered for single stocks, but takes advantage of the fact that an ETF's price is itself already a diversified, relatively smooth aggregate of many underlying holdings — buying an ETF after it has fallen unusually far below its own recent average price, betting on a bounce back, and selling or shorting after it has risen unusually far above that average, betting on a pullback." },
      { type: "paragraph", text: "A typical implementation computes a short-term moving average, often just days or a couple of weeks, since this is meant to capture short-lived deviations, not a long-term trend, and a band around it, commonly based on standard deviations of recent price moves, similar in spirit to Bollinger Bands, then trades when price pokes outside that band, on the expectation it reverts back toward the average and inside the band again." },
      {
        type: "image",
        diagramId: "mean-reversion-band",
        caption: "Price wandering outside the band around its moving average triggers a trade betting on reversion back inside it.",
      },
      { type: "paragraph", text: "Because a broad-market or sector ETF is diversified across many underlying stocks, its short-term price swings are somewhat less prone to being driven by single-company idiosyncratic news than an individual stock's would be, which can make mean-reversion signals on ETFs a bit cleaner and less noisy — a sharp, unexplained move in a diversified ETF is more likely to reflect a broad, temporary imbalance in buying or selling pressure, rather than a genuine repricing of fundamental value, which is exactly the kind of move mean-reversion is designed to trade." },
      { type: "paragraph", text: "The strategy's central risk is the same as for any mean-reversion approach: not every large deviation reverts, and a real, fundamentals-driven shift, a sudden change in the outlook for an entire sector, for example, rather than just a temporary imbalance in short-term buying and selling, can cause the ETF's price to simply keep moving away from its prior average instead of snapping back, turning what looked like a reversion trade into a persistent, growing loss." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does a mean-reversion strategy do when an ETF's price falls unusually far below its own recent average?",
        choices: [
          "Sell or short the ETF, expecting the decline to continue",
          "Buy the ETF, betting on a bounce back toward its recent average",
          "Ignore the ETF entirely",
          "Immediately delist the ETF",
        ],
        correctIndex: 1,
        explanation:
          "Mean-reversion bets on deviations correcting — a sharp drop below the recent average is treated as a buying opportunity on the expectation of a bounce back.",
      },
      {
        id: "q2",
        prompt: "How is the \"band\" around an ETF's moving average typically constructed in a mean-reversion strategy?",
        choices: [
          "It is drawn completely at random",
          "Commonly based on standard deviations of recent price moves, similar in spirit to Bollinger Bands",
          "It is always set to exactly the ETF's all-time high and low",
          "It never changes regardless of the ETF's volatility",
        ],
        correctIndex: 1,
        explanation:
          "A statistically-based band, scaled to recent volatility, defines how far price needs to deviate from the average before the strategy considers it a mean-reversion trading opportunity.",
      },
      {
        id: "q3",
        prompt: "Why might mean-reversion signals on diversified ETFs be somewhat cleaner than on individual stocks?",
        choices: [
          "ETFs never experience any price movement",
          "A diversified ETF's short-term swings are less prone to being driven by single-company idiosyncratic news, so sharp moves are more likely to reflect a broad, temporary imbalance",
          "ETFs are legally required to always revert to their average",
          "Diversification eliminates all price risk in an ETF",
        ],
        correctIndex: 1,
        explanation:
          "Because an ETF aggregates many underlying holdings, a sharp, unexplained move is less likely to be one company's news and more likely to reflect a genuine, temporary supply/demand imbalance — the kind of move mean-reversion aims to capture.",
      },
      {
        id: "q4",
        prompt: "What is the central risk of ETF mean-reversion?",
        choices: [
          "The ETF's price never changes, eliminating all risk",
          "A real, fundamentals-driven shift can cause the ETF's price to keep moving away from its prior average instead of reverting",
          "Mean-reversion strategies are risk-free once implemented on ETFs",
          "The risk only applies to bonds, not ETFs",
        ],
        correctIndex: 1,
        explanation:
          "Not every large deviation is temporary — a genuine shift in outlook for the ETF's underlying sector or holdings can cause the price to persist in its new direction rather than snap back, hurting the strategy.",
      },
      {
        id: "q5",
        prompt: "How does the typical lookback window for ETF mean-reversion compare to a long-term trend-following strategy?",
        choices: [
          "It uses the exact same multi-year lookback window",
          "It's typically much shorter — days or a couple of weeks — since it's meant to capture short-lived deviations, not a long-term trend",
          "Mean-reversion strategies never use a lookback window",
          "The lookback window is always exactly one trading day",
        ],
        correctIndex: 1,
        explanation:
          "Because mean-reversion targets short-term deviations rather than sustained directional moves, it uses a shorter moving-average window than a long-term trend-following approach would.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "etf-leveraged-etfs",
    title: "Leveraged ETFs (LETFs)",
    summary:
      "Understanding how daily-reset leverage in LETFs causes long-term returns to diverge from a simple multiple of the underlying index — and how that divergence can itself be traded.",
    body: [
      { type: "paragraph", text: "A leveraged ETF (LETF) aims to deliver a multiple, commonly 2x or 3x, of its underlying index's daily return, using derivatives and daily rebalancing to reset that leverage ratio every single trading day. The word \"daily\" is the crucial detail: an LETF's stated multiple applies only to a single day's return, not to its return over any longer holding period." },
      { type: "paragraph", text: "This daily reset causes a well-known effect called volatility decay, or beta slippage: because gains and losses compound differently than a simple multiple would suggest, a 2x LETF held over many days in a choppy, sideways market can actually lose money even if the underlying index ends up completely flat over that same period — the daily rebalancing effectively \"buys high and sells low\" on a small scale every day the index reverses direction." },
      {
        type: "image",
        diagramId: "leveraged-etf-decay",
        caption: "A choppy but flat index versus a 2x LETF over the same period — daily rebalancing quietly erodes the LETF's value.",
      },
      { type: "paragraph", text: "The size of this decay grows with the underlying index's volatility and the length of the holding period: in a smoothly trending market, a leveraged ETF can track reasonably close to its stated multiple over time, but the more choppy and volatile the underlying index is, the more its long-term LETF return diverges below a simple multiple of the index's own long-term return — which is why LETFs are generally described as tools for short-term, tactical exposure rather than long-term buy-and-hold positions." },
      { type: "paragraph", text: "This decay effect is itself something traders try to exploit directly: a strategy that shorts a pair of same-underlying leveraged ETFs, say, both the 3x-long and 3x-short versions of the same index, can, under the right conditions, collect the volatility decay from both sides simultaneously, profiting from the structural drag of daily rebalancing rather than betting on the underlying index's direction at all — though this comes with its own risks, since a strong sustained trend in either direction can produce large losses on the side of the pair moving against the position." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does a leveraged ETF's stated multiple (e.g., \"2x\") actually apply to?",
        choices: [
          "The ETF's return over its entire lifetime",
          "A single trading day's return of the underlying index",
          "The ETF's return over exactly one calendar year",
          "The dividend yield of the underlying index",
        ],
        correctIndex: 1,
        explanation:
          "LETFs reset their leverage daily, so the stated multiple is only accurate for a single day's return, not for longer holding periods.",
      },
      {
        id: "q2",
        prompt: "What is \"volatility decay\" (or beta slippage) in the context of leveraged ETFs?",
        choices: [
          "The guaranteed steady appreciation of an LETF over time",
          "The effect where daily rebalancing causes long-term LETF returns to diverge from, and often underperform, a simple multiple of the index's own long-term return, especially in choppy markets",
          "A regulatory fee charged on all leveraged ETFs",
          "The process of an LETF converting into a regular, unleveraged ETF",
        ],
        correctIndex: 1,
        explanation:
          "Because daily resets compound differently than a simple multiple would suggest, an LETF held over time in a volatile, sideways market can underperform, or even lose money, relative to what its stated multiple might suggest, even if the underlying index ends up flat.",
      },
      {
        id: "q3",
        prompt: "Can a 2x leveraged ETF lose money even if its underlying index ends up completely flat over the holding period?",
        choices: [
          "No, this is mathematically impossible",
          "Yes — in a choppy, sideways market, daily rebalancing can cause the LETF to lose money even when the underlying index is flat over the same period",
          "Only if the index falls to zero",
          "Only on the first day the LETF is issued",
        ],
        correctIndex: 1,
        explanation:
          "This is the core consequence of volatility decay — the daily \"buy high, sell low\" effect of rebalancing in a choppy market can erode an LETF's value even without a net move in the underlying index.",
      },
      {
        id: "q4",
        prompt: "What factor most strongly increases the size of an LETF's volatility decay over time?",
        choices: [
          "The underlying index's dividend yield",
          "The underlying index's volatility and the length of the holding period",
          "The number of shares outstanding in the LETF",
          "The LETF's expense ratio alone",
        ],
        correctIndex: 1,
        explanation:
          "The more volatile and choppy the underlying index, and the longer the LETF is held, the further its actual return tends to diverge from a simple multiple of the index's return.",
      },
      {
        id: "q5",
        prompt: "How might a trader try to directly exploit the volatility decay effect in leveraged ETFs?",
        choices: [
          "By buying and holding a single LETF for decades regardless of market conditions",
          "By shorting a pair of same-underlying leveraged ETFs (e.g., both the 3x-long and 3x-short versions), aiming to collect decay from both sides",
          "Volatility decay cannot be traded directly under any strategy",
          "By only ever trading unleveraged ETFs",
        ],
        correctIndex: 1,
        explanation:
          "A short position in both directions of a leveraged pair can, under the right conditions, profit from the structural drag of daily rebalancing itself, rather than from betting on the underlying index's direction — though a strong sustained trend in either direction still poses a real risk to this trade.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "etf-multi-asset-trend-following",
    title: "Multi-asset trend following",
    summary:
      "Applying the same trend-following rule simultaneously across ETFs spanning many different asset classes, diversifying a single trading rule across uncorrelated markets.",
    body: [
      { type: "paragraph", text: "Multi-asset trend following takes a simple trend-following rule, like a moving-average crossover, and applies it identically across a broad basket of ETFs spanning many different, largely uncorrelated asset classes: equities, bonds, commodities, real estate, and currencies, for example, each represented by a liquid ETF proxy rather than requiring direct access to futures or other specialized markets in each asset class." },
      { type: "paragraph", text: "The logic for spreading a single trading rule across so many different asset classes is diversification of trend opportunity: any one asset class might be trendless or choppy at a given time, but with a broad enough basket, there's a good chance that at least some of the ETFs in the basket are in a genuine, tradeable trend at any given moment, and the strategy's overall return depends on capturing those trends wherever they happen to show up, rather than betting on trends appearing in any one specific market." },
      { type: "paragraph", text: "Because the underlying asset classes are relatively uncorrelated with each other, day-to-day and month-to-month, a diversified multi-asset trend portfolio also tends to have a smoother overall return profile than applying the same trend rule to just one or two closely related markets — a trend-following equity ETF position losing money doesn't necessarily mean a trend-following bond or commodity ETF position is losing money at the same time, since they're often responding to different underlying drivers." },
      { type: "paragraph", text: "Multi-asset trend following has historically shown a useful property during equity market crises: because trends can also form during equity selloffs, a sustained downtrend is still a trend, and the strategy can go short or move to cash on the equity leg while simultaneously catching a rising trend in, say, government bonds or gold, the strategy has sometimes performed well precisely during periods when a simple buy-and-hold equity portfolio performs poorly, which is part of why it is often framed as a portfolio diversifier rather than purely a source of standalone returns." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does multi-asset trend following apply a single trend-following rule to?",
        choices: [
          "Only a single stock",
          "A broad basket of ETFs spanning many different, largely uncorrelated asset classes, such as equities, bonds, commodities, and currencies",
          "Only cryptocurrency ETFs",
          "Only ETFs within a single sector",
        ],
        correctIndex: 1,
        explanation:
          "Rather than trading one market, multi-asset trend following applies the same trend rule identically across many different asset classes represented by liquid ETF proxies.",
      },
      {
        id: "q2",
        prompt: "What is the main rationale for spreading one trading rule across so many different asset classes?",
        choices: [
          "To guarantee every asset class is always in a strong trend simultaneously",
          "Diversification of trend opportunity — at any given time, some asset classes in a broad basket are likely to be in a genuine, tradeable trend even if others aren't",
          "To reduce the total number of positions held to just one",
          "Asset classes never actually behave differently from each other",
        ],
        correctIndex: 1,
        explanation:
          "Since no single market trends all the time, spreading the same rule across many uncorrelated asset classes increases the chance that the strategy captures a trend wherever one happens to be occurring.",
      },
      {
        id: "q3",
        prompt: "Why does a diversified multi-asset trend portfolio tend to have a smoother overall return profile than applying the same rule to just one or two closely related markets?",
        choices: [
          "Smoother returns are unrelated to the correlation between asset classes",
          "The underlying asset classes are relatively uncorrelated, so a losing position in one (like equities) doesn't necessarily coincide with a losing position in another (like bonds or commodities)",
          "All asset classes are perfectly correlated by definition",
          "The strategy always holds exactly one position at a time",
        ],
        correctIndex: 1,
        explanation:
          "Because different asset classes often respond to different underlying drivers, their trend-following returns tend not to move in lockstep, smoothing the overall portfolio's return relative to trading a single market.",
      },
      {
        id: "q4",
        prompt: "Why can multi-asset trend following sometimes perform well during equity market crises?",
        choices: [
          "It is legally prohibited from trading during crises",
          "A sustained equity downtrend is still a trend the strategy can trade (e.g., going short or to cash), while it may simultaneously catch rising trends in other asset classes like bonds or gold",
          "Trend-following strategies automatically shut down during any market stress",
          "Equity crises always cause every asset class to fall together with no exceptions",
        ],
        correctIndex: 1,
        explanation:
          "Since trends can form in either direction and across many markets, the strategy isn't dependent on equities specifically rising — it can capture downtrends in equities and uptrends elsewhere during the same crisis period.",
      },
      {
        id: "q5",
        prompt: "Why is multi-asset trend following often framed as a portfolio diversifier rather than purely a standalone return source?",
        choices: [
          "Because it has historically performed identically to a simple buy-and-hold equity portfolio at all times",
          "Because it has sometimes performed well precisely during periods when equity buy-and-hold performs poorly, due to its ability to trade trends across many uncorrelated markets and directions",
          "Because it can only be used by institutional investors",
          "Because it requires no capital to implement",
        ],
        correctIndex: 1,
        explanation:
          "Its ability to find and trade trends outside of equities, including during equity selloffs, gives it a return pattern that can complement rather than mirror a traditional stock-heavy portfolio, which is why it's often used as a diversifying allocation.",
      },
    ],
  },
];
