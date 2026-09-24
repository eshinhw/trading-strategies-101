import type { ConceptLesson } from "./types.js";

// Concept-lesson format, same reasoning as the other non-options courses —
// these are currency-market trading and arbitrage concepts, not
// option-payoff structures, so prose + a knowledge-check quiz fits better
// than the options-specific engine.
export const fxConceptLessons: ConceptLesson[] = [
  {
    kind: "concept",
    slug: "fx-moving-averages-with-hp-filter",
    title: "Moving averages with HP filter",
    summary: "Filtering out short-term noise from a currency's price with a Hodrick-Prescott filter before applying a moving-average trend rule, to trade the underlying trend more cleanly.",
    body: [
      { type: "heading", text: "What the HP Filter Does" },
      { type: "paragraph", text: "The Hodrick-Prescott (HP) filter is a statistical technique that decomposes a time series — like a currency's exchange rate — into two components: a smooth, slow-moving \"trend\" component and a \"cyclical\" component capturing the shorter-term noise and fluctuations around that trend. Rather than applying a moving average directly to the raw, noisy exchange-rate series, this strategy first runs the HP filter to extract the smoother trend component, and then applies the moving-average trend-following rule to that filtered series instead." },
      { type: "heading", text: "Filtering Out Whipsaws" },
      { type: "paragraph", text: "The motivation is that FX rates, like many financial time series, contain a lot of short-term noise that can generate false signals in a standard moving-average crossover — whipsaws where the price crosses the average briefly without reflecting a genuine shift in trend. By filtering out some of that noise first, the HP-filtered trend line should, in principle, cross less erratically, producing a cleaner set of trend signals than working with the raw price series directly." },
      { type: "heading", text: "Two-Sided vs. Real-Time" },
      { type: "paragraph", text: "A key technical wrinkle is that the HP filter, in its standard form, is a \"two-sided\" filter — it uses both past and future data points to smooth the series, which works well for looking back at history but isn't directly usable for real-time trading, since future data isn't available yet. Practical implementations address this by using a one-sided, or \"real-time,\" version of the filter, which estimates the trend using only data available up to the current point, at the cost of some smoothing quality compared to the full two-sided version." },
      { type: "heading", text: "Still Needs a Real Trend" },
      { type: "paragraph", text: "Like any trend-following approach, this strategy still depends on genuine, sustained currency trends existing to trade — the HP filter improves the quality of the trend estimate and reduces, but doesn't eliminate, false signals from noise, but it doesn't manufacture a trend where the underlying currency pair is genuinely range-bound; in truly choppy, directionless FX markets, even a filtered trend signal can still whipsaw, just less often than an unfiltered one would." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does the Hodrick-Prescott (HP) filter do to a time series?",
        choices: [
          "It deletes all data points from before the current year",
          "It decomposes the series into a smooth trend component and a cyclical (noise) component",
          "It converts the exchange rate into a completely different currency",
          "It guarantees the series will trend upward",
        ],
        correctIndex: 1,
        explanation:
          "The HP filter statistically separates a time series into a slow-moving trend and shorter-term fluctuations around it, which this strategy uses to extract a cleaner trend signal.",
      },
      {
        id: "q2",
        prompt: "Why does this strategy apply the HP filter before running a moving-average trend rule?",
        choices: [
          "To make the strategy slower and less responsive on purpose",
          "To filter out short-term noise that can cause whipsaws in a standard moving-average crossover, producing cleaner trend signals",
          "The HP filter has no effect on trading signals",
          "To eliminate the need for any moving average at all",
        ],
        correctIndex: 1,
        explanation:
          "Filtering out noise first is intended to reduce the false signals (whipsaws) that a moving average applied to raw, noisy price data would otherwise generate.",
      },
      {
        id: "q3",
        prompt: "Why is the standard, \"two-sided\" HP filter not directly usable for real-time trading?",
        choices: [
          "It requires too much historical data to ever be computed",
          "It uses both past and future data points to smooth the series, but future data isn't available in real time",
          "It can only be applied to stock prices, not currencies",
          "It is illegal to use in financial markets",
        ],
        correctIndex: 1,
        explanation:
          "The standard HP filter smooths using data from both directions in time, which works for historical analysis but can't be directly applied to real-time decisions where future data doesn't yet exist.",
      },
      {
        id: "q4",
        prompt: "How do practical implementations address the two-sided filter's limitation for real-time trading?",
        choices: [
          "By ignoring the problem and using the two-sided filter anyway",
          "By using a one-sided (\"real-time\") version of the filter that only uses data available up to the current point, at some cost to smoothing quality",
          "By only trading currencies that don't require real-time data",
          "By removing the need for a moving average entirely",
        ],
        correctIndex: 1,
        explanation:
          "A one-sided variant estimates the trend using only past and current data, sacrificing some smoothing quality compared to the full two-sided filter in exchange for being usable in live trading.",
      },
      {
        id: "q5",
        prompt: "Does the HP filter guarantee a currency pair will have a tradeable trend?",
        choices: [
          "Yes, the filter creates a trend even in range-bound markets",
          "No — it improves the quality of the trend estimate and reduces false signals, but doesn't manufacture a trend where the underlying market is genuinely range-bound",
          "Yes, but only for major currency pairs",
          "The filter has no relationship to whether a trend exists",
        ],
        correctIndex: 1,
        explanation:
          "The HP filter is a noise-reduction tool, not a trend-creation tool — in truly choppy markets, even a filtered signal can still generate false whipsaws, just less often than an unfiltered one.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "fx-carry-trade",
    title: "Carry trade",
    summary: "Borrowing in a low-interest-rate currency and investing in a high-interest-rate currency, collecting the interest-rate differential as long as the exchange rate doesn't move against the trade.",
    body: [
      { type: "heading", text: "What a Carry Trade Is" },
      { type: "paragraph", text: "A currency carry trade borrows, or shorts, a currency with a low interest rate and uses the proceeds to invest in, goes long, a currency with a higher interest rate, collecting the difference between the two rates, the \"carry,\" as long as the position is held. If exchange rates stayed perfectly still, this would be pure, riskless profit: borrow cheaply in one currency, earn a higher rate in another, pocket the spread." },
      { type: "heading", text: "The Interest Rate Parity Puzzle" },
      { type: "paragraph", text: "In theory, uncovered interest rate parity suggests this shouldn't be a reliably profitable strategy: the higher-interest-rate currency should be expected to depreciate against the lower-interest-rate currency by roughly the amount of the interest-rate differential, exactly offsetting the carry earned. In practice, though, this relationship has historically held up poorly, and carry trades have shown a persistent tendency to be profitable on average over time — a well-documented anomaly in currency markets, sometimes attributed to a risk premium investors demand for holding riskier, higher-yielding currencies." },
      { type: "heading", text: "The Classic Crash Risk" },
      { type: "paragraph", text: "The classic risk of carry trades is a sharp reversal: because carry trades are often crowded, many market participants running similar trades, a shock that causes the higher-yielding currency to suddenly depreciate sharply can trigger many carry positions to unwind at once, compounding the move — a dynamic sometimes described as the trade \"going up by the stairs and down by the elevator,\" since carry profits accumulate slowly but a reversal can happen fast and sharply." },
      { type: "heading", text: "When Carry Performs Best" },
      { type: "paragraph", text: "Because of this crash risk, carry trades tend to perform best during calm, low-volatility market environments, when the interest-rate differential can be collected with less risk of a sudden reversal, and can suffer sharply during broad risk-off episodes, when investors flee riskier currencies en masse — which is why carry trade returns are often observed to correlate with broader measures of market volatility and risk appetite, rather than behaving as a purely currency-specific strategy." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does a currency carry trade do?",
        choices: [
          "Borrow in a high-interest-rate currency and invest in a low-interest-rate currency",
          "Borrow (or short) a low-interest-rate currency and invest (go long) in a higher-interest-rate currency",
          "Buy and sell the same currency simultaneously",
          "Avoid holding any currency positions at all",
        ],
        correctIndex: 1,
        explanation:
          "The carry trade profits from the interest-rate differential by borrowing cheaply in a low-rate currency and investing in a higher-rate one.",
      },
      {
        id: "q2",
        prompt: "What does uncovered interest rate parity theoretically predict about carry trades?",
        choices: [
          "That carry trades should be reliably and permanently profitable",
          "That the higher-interest-rate currency should depreciate by roughly the interest-rate differential, offsetting the carry earned",
          "That interest rates have no relationship to exchange rates",
          "That carry trades are illegal under international law",
        ],
        correctIndex: 1,
        explanation:
          "In theory, exchange rate movements should offset interest-rate differences, making carry trades unprofitable on average — though this has historically not held up well in practice.",
      },
      {
        id: "q3",
        prompt: "What is the classic risk associated with carry trades?",
        choices: [
          "There is no risk once the position is placed",
          "A sharp reversal where the higher-yielding currency suddenly depreciates, triggering many crowded carry positions to unwind at once",
          "The risk that interest rates never change",
          "The risk that currencies stop being traded entirely",
        ],
        correctIndex: 1,
        explanation:
          "Because carry trades are often crowded, a shock triggering a sharp depreciation in the higher-yielding currency can cause many positions to unwind simultaneously, compounding the move.",
      },
      {
        id: "q4",
        prompt: "What does \"up by the stairs and down by the elevator\" describe about carry trades?",
        choices: [
          "Carry trades never experience any losses",
          "Carry profits accumulate slowly over time, but a reversal can happen fast and sharply",
          "Carry trades always lose money slowly over time",
          "The phrase has no relationship to carry trading",
        ],
        correctIndex: 1,
        explanation:
          "This describes the asymmetric pattern where carry trade gains build up gradually through the collected interest differential, while losses from a reversal can occur abruptly.",
      },
      {
        id: "q5",
        prompt: "In what kind of market environment do carry trades tend to perform best?",
        choices: [
          "During broad risk-off episodes when investors flee risky assets",
          "During calm, low-volatility periods, when the interest-rate differential can be collected with less risk of a sudden reversal",
          "Carry trade performance has no relationship to market volatility",
          "Only during periods of extremely high inflation",
        ],
        correctIndex: 1,
        explanation:
          "Carry trades tend to do well when markets are calm and risk appetite is stable, and tend to suffer during broad risk-off episodes when investors flee riskier, higher-yielding currencies en masse.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "fx-high-minus-low-carry",
    title: "High-minus-low carry",
    summary: "A cross-sectional carry strategy that goes long the highest-interest-rate currencies and short the lowest-interest-rate currencies across a broad basket, rather than trading just one currency pair.",
    body: [
      { type: "heading", text: "Ranking a Basket, Not a Pair" },
      { type: "paragraph", text: "Rather than running a single carry trade between two specific currencies, a high-minus-low (HML) carry strategy ranks a broad basket of currencies by their interest rates, goes long a group of the highest-yielding currencies, and shorts a group of the lowest-yielding currencies — spreading the basic carry-trade logic across many currency pairs simultaneously rather than concentrating it in just one." },
      { type: "heading", text: "Smoothing Out Pair-Specific Noise" },
      { type: "paragraph", text: "This diversification addresses a specific weakness of a single-pair carry trade: any one currency pair's carry return depends heavily on the idiosyncratic behavior of those two specific currencies, but a broad, ranked basket smooths out some of that pair-specific noise, since the strategy is really trying to capture the general, systematic tendency for high-yielding currencies to outperform low-yielding ones, rather than betting on any one particular pair." },
      { type: "heading", text: "A Continuously Re-Ranked Basket" },
      { type: "paragraph", text: "The basket is typically rebalanced periodically as interest-rate differentials shift — a currency that was high-yielding might have its rate cut and drop out of the \"long\" group, while another currency's rate might rise enough to newly qualify, so the composition of the long and short baskets isn't fixed, but continuously re-ranked based on current rate levels." },
      { type: "heading", text: "Diversified, Not Immune" },
      { type: "paragraph", text: "Because it's diversified across many currency pairs rather than concentrated in one, HML carry can reduce some of the idiosyncratic risk of a single-pair carry trade, but it doesn't eliminate the strategy's fundamental crash risk: during a broad risk-off episode, high-yielding currencies as a group tend to depreciate together against low-yielding, \"safe-haven\" currencies, so the strategy's systematic, basket-wide structure doesn't protect against, and is in fact directly exposed to, the same kind of broad carry-unwind event that hurts single-pair carry trades." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "How does a high-minus-low carry strategy differ from a single-pair carry trade?",
        choices: [
          "It trades only one specific currency pair, just like a single-pair carry trade",
          "It ranks a broad basket of currencies by interest rate, going long the highest-yielding group and short the lowest-yielding group",
          "It avoids all exposure to interest-rate differentials",
          "It only trades currencies from a single country",
        ],
        correctIndex: 1,
        explanation:
          "Rather than concentrating in one pair, HML carry spreads the carry logic across many currencies, ranked and grouped by their interest rate levels.",
      },
      {
        id: "q2",
        prompt: "What weakness of a single-pair carry trade does the HML approach address?",
        choices: [
          "The risk that interest rates never change",
          "The dependence on the idiosyncratic behavior of just two specific currencies, which a broad basket smooths out",
          "The risk that currencies cannot be shorted",
          "HML carry has no advantage over a single-pair trade",
        ],
        correctIndex: 1,
        explanation:
          "Diversifying across many currency pairs reduces reliance on any one pair's specific behavior, aiming to capture the more general, systematic carry pattern instead.",
      },
      {
        id: "q3",
        prompt: "Why does the HML basket's composition change over time?",
        choices: [
          "It never changes once established",
          "It's periodically rebalanced as interest-rate differentials shift, with currencies moving in and out of the long/short groups based on current rate levels",
          "The basket is chosen randomly each month",
          "Only the strategy's overall direction changes, never its composition",
        ],
        correctIndex: 1,
        explanation:
          "As rates rise and fall across different countries, the ranking of which currencies qualify as high- or low-yielding changes, so the basket is periodically re-ranked and rebalanced.",
      },
      {
        id: "q4",
        prompt: "What kind of risk does diversifying across a broad basket reduce, and what risk does it NOT eliminate?",
        choices: [
          "It reduces idiosyncratic, pair-specific risk but does not eliminate the strategy's systematic crash risk during broad risk-off events",
          "It eliminates all risk entirely, including crash risk",
          "It has no effect on any form of risk",
          "It only reduces risk during risk-off episodes, not during calm periods",
        ],
        correctIndex: 0,
        explanation:
          "Diversification smooths out noise specific to any one currency pair, but the strategy remains exposed to broad, systematic moves where high-yielding currencies as a group depreciate together.",
      },
      {
        id: "q5",
        prompt: "What happens to high-yielding currencies as a group during a broad risk-off episode?",
        choices: [
          "They tend to appreciate strongly against low-yielding currencies",
          "They tend to depreciate together against low-yielding, \"safe-haven\" currencies",
          "They are completely unaffected by risk-off episodes",
          "They become impossible to trade during risk-off periods",
        ],
        correctIndex: 1,
        explanation:
          "During broad market stress, investors often flee riskier, higher-yielding currencies in favor of safe havens, causing the whole group of high-yielders to depreciate together — directly hurting a basket-wide long position in them.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "fx-dollar-carry-trade",
    title: "Dollar carry trade",
    summary: "A carry strategy that trades the US dollar as a single unit against a basket of other currencies, based on whether the dollar's interest rate sits above or below the global average.",
    body: [
      { type: "heading", text: "Dollar Versus the World" },
      { type: "paragraph", text: "Rather than ranking many individual currencies against each other, the dollar carry trade treats the US dollar as one side of the trade and a broad basket of other currencies as the other side, based on a simple rule: when US interest rates are relatively high compared to the global average, go long the dollar, short the basket; when US rates are relatively low compared to the global average, go short the dollar, long the basket — funding or receiving the carry based on the dollar's position relative to the rest of the world, rather than through individual currency-pair rankings." },
      { type: "heading", text: "Why the Dollar Gets Its Own Trade" },
      { type: "paragraph", text: "This dollar-centric framing reflects the dollar's outsized role in the global financial system: as the world's primary reserve and funding currency, the dollar's interest-rate level relative to the rest of the world tends to have broad, systematic effects on global capital flows and risk appetite that a currency-by-currency ranking approach doesn't directly capture — the dollar carry trade is built specifically to trade that dollar-versus-the-world relationship." },
      { type: "heading", text: "Tied to Fed Policy" },
      { type: "paragraph", text: "The strategy's return is driven by the same basic carry logic as any other carry trade — earning the rate differential as long as it holds — but concentrated into a single dollar-versus-basket position rather than diversified across many individual currency pairs, which means its behavior is more directly tied to shifts in the Federal Reserve's policy stance relative to other major central banks than to the idiosyncrasies of any particular non-dollar currency pair." },
      { type: "heading", text: "The Safe-Haven Risk" },
      { type: "paragraph", text: "Because the dollar often serves as a safe-haven currency during periods of global market stress, capital tends to flow toward the dollar when risk appetite deteriorates, regardless of the interest-rate differential at that moment, a short-dollar dollar carry position, betting on a weaker dollar because US rates are relatively low, can be particularly exposed to sudden reversals during risk-off episodes, when the dollar can strengthen sharply for reasons unrelated to interest-rate differentials." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "How does the dollar carry trade differ from ranking many individual currencies against each other?",
        choices: [
          "It treats the US dollar as one side of the trade against a broad basket of other currencies, based on the dollar's rate relative to the global average",
          "It only ever trades two specific non-dollar currencies against each other",
          "It has no relationship to interest rates at all",
          "It is identical to a high-minus-low carry strategy in every respect",
        ],
        correctIndex: 0,
        explanation:
          "Rather than ranking many currencies individually, the dollar carry trade simplifies the structure to dollar-versus-basket, based on whether US rates sit above or below the global average.",
      },
      {
        id: "q2",
        prompt: "When does the dollar carry trade go long the dollar?",
        choices: [
          "When US interest rates are relatively low compared to the global average",
          "When US interest rates are relatively high compared to the global average",
          "The dollar carry trade never takes a long dollar position",
          "Only when the dollar is the only currency being traded globally",
        ],
        correctIndex: 1,
        explanation:
          "The strategy goes long the dollar when US rates sit above the global average, collecting carry by holding the higher-yielding currency (the dollar) against the basket.",
      },
      {
        id: "q3",
        prompt: "Why does the dollar carry trade focus specifically on the dollar rather than treating it like any other currency?",
        choices: [
          "The dollar has no special role in global markets",
          "The dollar's outsized role as the world's primary reserve and funding currency gives its interest-rate level broad, systematic effects on global capital flows",
          "The dollar cannot be included in any basket-based strategy",
          "US interest rates never change, unlike other countries' rates",
        ],
        correctIndex: 1,
        explanation:
          "Because of the dollar's central role in the global financial system, its rate relative to the rest of the world has systematic effects that a currency-by-currency ranking approach wouldn't directly capture.",
      },
      {
        id: "q4",
        prompt: "What primarily drives the dollar carry trade's return?",
        choices: [
          "A completely different mechanism unrelated to any interest-rate differential",
          "The same basic carry logic as other carry trades — earning the rate differential — but concentrated into a single dollar-versus-basket position",
          "Only the price of gold",
          "The trade has no relationship to the Federal Reserve's policy",
        ],
        correctIndex: 1,
        explanation:
          "Like other carry trades, the return comes from the interest-rate differential, but here it's tied specifically to the dollar's rate relative to the global average rather than diversified across many pairs.",
      },
      {
        id: "q5",
        prompt: "Why can a short-dollar dollar carry position be particularly exposed to sudden reversals during risk-off episodes?",
        choices: [
          "The dollar has no safe-haven characteristics",
          "The dollar often serves as a safe-haven currency, so capital can flow toward it during stress regardless of the interest-rate differential, causing it to strengthen sharply",
          "Risk-off episodes have no effect on currency markets",
          "A short-dollar position is always risk-free",
        ],
        correctIndex: 1,
        explanation:
          "Because the dollar tends to strengthen during global market stress as a safe haven, a position betting on dollar weakness can be hit hard by a sudden risk-off-driven dollar rally, independent of interest-rate differentials.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "fx-momentum-and-carry-combo",
    title: "Momentum & carry combo",
    summary: "Combining a currency's interest-rate carry signal with its price-momentum signal into one blended score, since the two factors tend to be relatively independent sources of currency return.",
    body: [
      { type: "heading", text: "Two Different Signals" },
      { type: "paragraph", text: "Carry and momentum are two of the best-documented systematic signals in currency markets, and they capture different things: carry ranks currencies by their interest-rate differential, a relatively stable, slow-moving signal, while momentum ranks currencies by their recent price trend, a signal based purely on price action rather than yield. A momentum-and-carry combo strategy combines both signals into a single blended score per currency, rather than trading either one in isolation." },
      { type: "heading", text: "The Case for Combining Them" },
      { type: "paragraph", text: "The rationale for combining them mirrors the logic behind any multifactor approach: carry and momentum have historically shown relatively low correlation to each other as standalone signals, and each has its own periods of underperformance — carry tends to struggle during sharp risk-off reversals, while momentum can suffer during abrupt trend reversals — so blending the two aims to smooth out the combined strategy's return profile compared to relying on just one signal alone." },
      { type: "heading", text: "Building the Combined Score" },
      { type: "paragraph", text: "A typical construction standardizes each currency's carry ranking and momentum ranking, combines them, often with equal or near-equal weighting, though this can be tuned, into one composite score, and builds long and short positions from the currencies ranking best and worst on that combined score — a currency that's not simply the highest-yielding or the strongest-trending individually, but the best combination of the two, can end up as a top pick." },
      { type: "heading", text: "When the Signals Agree or Disagree" },
      { type: "paragraph", text: "One particularly notable interaction between the two signals: carry and momentum sometimes point in the same direction, a high-yielding currency that's also been strengthening, reinforcing the combined signal, and sometimes point in opposite directions, a high-yielding currency that's been weakening, or a low-yielding currency that's been strengthening — in the latter case, the combined score effectively down-weights that currency relative to either signal alone, which can help avoid currencies where the momentum signal is quietly warning against a carry position that's on the verge of unwinding." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What do carry and momentum measure, respectively, in currency markets?",
        choices: [
          "Carry measures recent price trend, and momentum measures interest-rate differentials",
          "Carry measures a currency's interest-rate differential, and momentum measures its recent price trend",
          "Both measure exactly the same thing",
          "Neither has any relationship to currency returns",
        ],
        correctIndex: 1,
        explanation:
          "Carry is based on yield differentials between currencies, while momentum is based purely on recent price action — two distinct sources of signal.",
      },
      {
        id: "q2",
        prompt: "Why does combining carry and momentum into one score make sense, according to the multifactor logic?",
        choices: [
          "Because the two signals are always perfectly correlated",
          "Because they've historically shown relatively low correlation and each has its own periods of underperformance, so blending them can smooth the combined return profile",
          "Because using two signals guarantees higher returns than either alone",
          "Because carry and momentum cannot be measured separately",
        ],
        correctIndex: 1,
        explanation:
          "Since carry and momentum tend to struggle at different times and aren't highly correlated, combining them follows the same diversification logic used in other multifactor strategies.",
      },
      {
        id: "q3",
        prompt: "How is a typical momentum-and-carry combined score constructed?",
        choices: [
          "By using only the single highest-carry currency, ignoring momentum entirely",
          "By standardizing each currency's carry and momentum rankings and combining them into one composite score",
          "By ignoring carry entirely and using only momentum",
          "By selecting currencies at random regardless of either signal",
        ],
        correctIndex: 1,
        explanation:
          "The combined approach standardizes and blends both rankings, so a currency's overall attractiveness reflects both its carry and momentum characteristics together.",
      },
      {
        id: "q4",
        prompt: "What happens when a currency's carry and momentum signals point in opposite directions?",
        choices: [
          "The combined score always matches whichever signal is stronger",
          "The combined score effectively down-weights that currency relative to either signal alone",
          "The currency is automatically excluded from all trading",
          "Opposite signals have no effect on the combined score",
        ],
        correctIndex: 1,
        explanation:
          "When the two signals disagree — for example, a high-yielding currency that's been weakening — the blended score reflects that disagreement, reducing the currency's overall attractiveness compared to a case where both signals agree.",
      },
      {
        id: "q5",
        prompt: "What can a currency being both high-yielding and strengthening represent for the combined strategy?",
        choices: [
          "A signal to be automatically excluded from the strategy",
          "A case where carry and momentum reinforce each other, strengthening the combined signal",
          "A sign that the strategy has failed",
          "An irrelevant coincidence with no effect on the combined score",
        ],
        correctIndex: 1,
        explanation:
          "When carry and momentum point in the same direction, they reinforce each other in the combined score, often making that currency a stronger pick than either signal would suggest alone.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "fx-triangular-arbitrage",
    title: "FX triangular arbitrage",
    summary: "Trading three currency pairs in a loop to exploit a brief mispricing between their quoted exchange rates, converting through all three back to the starting currency for a profit.",
    body: [
      { type: "heading", text: "Three Rates, One Consistency Check" },
      { type: "paragraph", text: "Any three currencies have three exchange rates between them — for example, USD/EUR, EUR/JPY, and USD/JPY — and in an efficient market, these three rates should be mutually consistent: converting USD to EUR, then EUR to JPY, then JPY back to USD should return you to approximately the same amount of USD you started with, since any other outcome would represent a mispricing across the three pairs. Triangular arbitrage exploits the brief moments when this consistency breaks down." },
      { type: "heading", text: "Executing the Triangle" },
      { type: "paragraph", text: "When the three exchange rates become inconsistent, the implied cross-rate calculated from two of the pairs differs from the directly-quoted rate of the third pair, a trader can execute a sequence of three trades around the \"triangle,\" for example, USD to EUR, EUR to JPY, JPY to USD, and end up with more of the starting currency than they began with, capturing the mispricing as a small, close-to-riskless profit." },
      { type: "heading", text: "Why It's Close to Riskless" },
      { type: "paragraph", text: "Like other pure arbitrage opportunities, triangular arbitrage in liquid major currency pairs tends to be small and extremely short-lived, since it requires zero directional view — the trader isn't betting on any currency's direction, just on the internal consistency of the three quoted rates — and any persistent mispricing would be rapidly traded away by market participants and automated systems constantly monitoring exchange rates for exactly this kind of inconsistency." },
      { type: "heading", text: "A Game of Speed and Infrastructure" },
      { type: "paragraph", text: "Because the opportunity is fleeting and the profit margin thin, capturing triangular arbitrage reliably requires very fast execution, low transaction costs, and the ability to simultaneously monitor and trade many currency pairs at once — which is why, much like other high-frequency arbitrage strategies covered elsewhere in this course, it's predominantly the domain of automated trading systems and market makers with direct, low-latency market access, rather than a strategy accessible to slower-moving traders." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What relationship should exist between the three exchange rates connecting three currencies, in an efficient market?",
        choices: [
          "The three rates should have no relationship to each other whatsoever",
          "They should be mutually consistent — converting through all three back to the starting currency should return approximately the same amount you started with",
          "Two of the three rates should always be identical to each other",
          "The three rates should always sum to exactly 1.0",
        ],
        correctIndex: 1,
        explanation:
          "In an efficient market, the three exchange rates between three currencies should be internally consistent, since any inconsistency would represent an exploitable mispricing.",
      },
      {
        id: "q2",
        prompt: "What does a trader do when a triangular arbitrage opportunity exists?",
        choices: [
          "Hold a single currency position and wait for it to appreciate",
          "Execute a sequence of three trades around the \"triangle,\" converting through all three currencies and ending with more of the starting currency",
          "Buy and sell the exact same currency pair twice in a row",
          "Avoid trading entirely until the rates become consistent",
        ],
        correctIndex: 1,
        explanation:
          "The arbitrage is captured by executing all three trades in sequence, ending up with a small profit in the original starting currency due to the momentary inconsistency.",
      },
      {
        id: "q3",
        prompt: "Why is triangular arbitrage considered close to riskless?",
        choices: [
          "Because it requires taking a strong directional view on one currency",
          "Because it requires zero directional view — the trader isn't betting on any currency's direction, only on the internal consistency of the three rates",
          "Because currency prices never change once a trade begins",
          "Because the trade is guaranteed by international regulators",
        ],
        correctIndex: 1,
        explanation:
          "The trade doesn't depend on where any currency's price goes — it captures a mathematical inconsistency between three quoted rates, independent of market direction.",
      },
      {
        id: "q4",
        prompt: "Why does triangular arbitrage tend to be small and extremely short-lived in liquid major currency pairs?",
        choices: [
          "Because major currency pairs are rarely traded",
          "Because any persistent mispricing would be rapidly traded away by market participants and automated systems constantly monitoring for exactly this inconsistency",
          "Because triangular arbitrage is illegal in major currency markets",
          "Because exchange rates are fixed by central banks and never fluctuate",
        ],
        correctIndex: 1,
        explanation:
          "Given how closely monitored and heavily traded major currency pairs are, any inconsistency between their rates tends to be corrected very quickly by other market participants.",
      },
      {
        id: "q5",
        prompt: "What is required to capture triangular arbitrage opportunities reliably?",
        choices: [
          "A large directional bet on a single currency's future direction",
          "Very fast execution, low transaction costs, and the ability to simultaneously monitor and trade many currency pairs at once",
          "Slow, careful analysis over several days before executing any trade",
          "No special infrastructure is required at all",
        ],
        correctIndex: 1,
        explanation:
          "Because the opportunity is fleeting and thin, capturing it reliably requires speed and infrastructure typically associated with automated trading systems and market makers with low-latency access.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "fx-what-is-a-currency-pair",
    title: "What Is a Currency Pair?",
    summary:
      "Every FX trade is a simultaneous bet on two currencies at once — the base and the quote — and understanding that pairing is the starting point for everything else in this course.",
    body: [
      { type: "heading", text: "Trading Two Currencies at Once" },
      { type: "paragraph", text: "Unlike a stock, which has a single price, a currency only has a value relative to another currency — you can't simply buy \"a dollar,\" only a dollar in exchange for some other currency. A currency pair, like EUR/USD, expresses exactly that relationship: how much of the second currency it takes to buy one unit of the first." },
      { type: "heading", text: "Base and Quote Currency" },
      { type: "paragraph", text: "In a pair like EUR/USD, the first currency listed, EUR, is the base currency, and the second, USD, is the quote currency. The quoted price tells you how many units of the quote currency one unit of the base currency is worth — a EUR/USD price of 1.10 means one euro buys $1.10." },
      { type: "heading", text: "Going Long or Short a Pair" },
      { type: "paragraph", text: "Going long a currency pair means buying the base currency and simultaneously selling the quote currency, profiting if the base strengthens relative to the quote. Going short does the reverse — selling the base and buying the quote, profiting if the base weakens instead." },
      { type: "heading", text: "Major, Minor, and Exotic Pairs" },
      { type: "paragraph", text: "Pairs are commonly grouped by how heavily they trade: major pairs involve the U.S. dollar and another large, freely-traded currency (like EUR/USD or USD/JPY) and are the most liquid; minor pairs pair two major currencies without the dollar (like EUR/GBP); and exotic pairs involve a major currency against a smaller or less liquid one (like USD/TRY), typically trading with wider spreads and less liquidity." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Why does a currency always need to be quoted against another currency?",
        choices: [
          "A currency only has a value relative to another currency — there's no single, standalone price the way a stock has",
          "Currencies are always quoted against gold specifically",
          "It's purely a regulatory requirement with no economic reason",
          "Currencies actually do have a single, standalone price like stocks",
        ],
        correctIndex: 0,
        explanation:
          "Unlike a stock's single price, an exchange rate is inherently relative — expressing how much of one currency it takes to buy another.",
      },
      {
        id: "q2",
        prompt: "In the pair EUR/USD, which is the base currency and which is the quote currency?",
        choices: [
          "EUR is the base currency, USD is the quote currency",
          "USD is the base currency, EUR is the quote currency",
          "Both are considered base currencies",
          "Neither is a base or quote currency",
        ],
        correctIndex: 0,
        explanation:
          "By convention, the first currency listed in a pair is the base currency, and the second is the quote currency, which expresses the base's price.",
      },
      {
        id: "q3",
        prompt: "What does going long EUR/USD mean?",
        choices: [
          "Buying euros and simultaneously selling dollars, profiting if the euro strengthens against the dollar",
          "Buying dollars and selling euros",
          "Holding cash in a savings account",
          "Betting the euro will weaken against the dollar",
        ],
        correctIndex: 0,
        explanation:
          "Going long a pair means buying the base currency (EUR) against the quote currency (USD), profiting when the base strengthens relative to the quote.",
      },
      {
        id: "q4",
        prompt: "What distinguishes a \"major\" currency pair from an \"exotic\" one?",
        choices: [
          "Major pairs involve the U.S. dollar and another large, freely-traded currency and are highly liquid; exotic pairs involve smaller, less liquid currencies with wider spreads",
          "Major pairs never involve the U.S. dollar",
          "Exotic pairs are always more liquid than major pairs",
          "There is no meaningful difference between major and exotic pairs",
        ],
        correctIndex: 0,
        explanation:
          "Major pairs are the most heavily traded and liquid, typically involving the dollar, while exotic pairs involve less liquid currencies and tend to trade with wider spreads.",
      },
      {
        id: "q5",
        prompt: "What is a \"minor\" currency pair?",
        choices: [
          "A pair that combines two major currencies without the U.S. dollar, like EUR/GBP",
          "A pair that only exists between two exotic currencies",
          "Any pair with a price below 1.00",
          "A pair that cannot legally be traded",
        ],
        correctIndex: 0,
        explanation:
          "Minor pairs sit between majors and exotics — two significant, liquid currencies paired together, just without the U.S. dollar on either side.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "fx-how-currencies-are-traded",
    title: "How Currencies Are Traded",
    summary:
      "The FX market's decentralized, round-the-clock structure, and the basic units — pips and lots — used to size and measure a trade.",
    body: [
      { type: "heading", text: "A Decentralized, Over-the-Counter Market" },
      { type: "paragraph", text: "Unlike stocks, which trade on centralized exchanges, the FX market is over-the-counter: trading happens directly between banks, brokers, and other participants across a decentralized global network, rather than through one central exchange that all trades pass through." },
      { type: "heading", text: "Trading Around the Clock" },
      { type: "paragraph", text: "Because major financial centers around the world (Tokyo, London, New York) operate in different time zones, the FX market is open nearly 24 hours a day during the trading week, with trading activity handing off from one region to the next as each one's business day begins." },
      { type: "heading", text: "Pips: The Basic Unit of Price Movement" },
      { type: "paragraph", text: "A pip is the standard, smallest conventional unit of price movement for most currency pairs, typically the fourth decimal place (for a pair like EUR/USD moving from 1.1050 to 1.1051, that's a one-pip move). Pips give traders a common, comparable way to talk about price changes across different pairs, regardless of the pair's actual price level." },
      { type: "heading", text: "Lot Sizes" },
      { type: "paragraph", text: "A lot is the standard trade size in FX: a standard lot is typically 100,000 units of the base currency, with mini (10,000 units) and micro (1,000 units) lots available for smaller position sizes. Because a full lot represents a large notional amount, leverage is commonly used in FX trading to control a position of that size with a smaller amount of posted capital." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "How does the FX market's structure differ from a stock exchange?",
        choices: [
          "FX is an over-the-counter market, with trading happening directly between participants rather than through one central exchange",
          "FX only trades on a single centralized exchange, just like stocks",
          "FX trading is illegal in most countries",
          "There is no structural difference between FX and stock markets",
        ],
        correctIndex: 0,
        explanation:
          "Unlike a centralized stock exchange, FX trading is decentralized and over-the-counter, happening directly between banks, brokers, and other participants.",
      },
      {
        id: "q2",
        prompt: "Why does the FX market trade nearly 24 hours a day during the week?",
        choices: [
          "Major financial centers around the world operate in different time zones, handing trading activity off from one region to the next",
          "FX trading is required by law to run continuously",
          "There is only one trading session per day, but it's very long",
          "FX markets are only open during a single country's business hours",
        ],
        correctIndex: 0,
        explanation:
          "As different global financial centers open and close throughout the day, FX trading activity continues nearly around the clock during the week.",
      },
      {
        id: "q3",
        prompt: "What is a pip?",
        choices: [
          "The standard, smallest conventional unit of price movement for most currency pairs",
          "A type of currency pair involving only exotic currencies",
          "A fee charged on every FX trade",
          "The maximum position size allowed in FX trading",
        ],
        correctIndex: 0,
        explanation:
          "A pip is the standard unit traders use to talk about price moves consistently across different currency pairs.",
      },
      {
        id: "q4",
        prompt: "What is a standard lot in FX trading?",
        choices: [
          "Typically 100,000 units of the base currency",
          "Exactly 1 unit of the base currency",
          "A fixed dollar amount regardless of currency",
          "The total daily trading volume of the FX market",
        ],
        correctIndex: 0,
        explanation:
          "A standard lot is conventionally 100,000 units of the base currency, with mini and micro lots available for smaller position sizes.",
      },
      {
        id: "q5",
        prompt: "Why is leverage commonly used in FX trading?",
        choices: [
          "A full lot represents a large notional amount, so leverage lets a trader control that size position with a smaller amount of posted capital",
          "Leverage is required by regulation for every FX trade",
          "FX trading never involves any notion of position size",
          "Leverage eliminates all risk from a position",
        ],
        correctIndex: 0,
        explanation:
          "Because standard lot sizes represent large notional amounts, leverage allows traders to control that exposure without posting the full notional value in capital.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "fx-what-moves-exchange-rates",
    title: "What Moves Exchange Rates",
    summary:
      "The fundamental forces — interest rates, inflation, trade flows, and risk sentiment — that drive one currency to strengthen or weaken against another.",
    body: [
      { type: "heading", text: "Interest Rate Differentials" },
      { type: "paragraph", text: "A country offering higher interest rates tends to attract capital seeking that better return, increasing demand for its currency and pushing it stronger — the same interest rate differential that underlies the carry trade strategies covered later in this course." },
      { type: "heading", text: "Inflation" },
      { type: "paragraph", text: "A currency in a country with persistently higher inflation than its trading partners tends to weaken over time, since that inflation erodes the currency's real purchasing power relative to currencies from lower-inflation countries — a relationship formalized in purchasing power parity." },
      { type: "heading", text: "Trade Balances and Capital Flows" },
      { type: "paragraph", text: "A country running a large trade deficit, importing much more than it exports, tends to see steady selling pressure on its own currency, since importers need to convert their currency into foreign currency to pay for those goods, while a trade surplus creates the opposite, currency-supportive pressure." },
      { type: "heading", text: "Central Bank Policy and Risk Sentiment" },
      { type: "paragraph", text: "Beyond the interest rate level itself, central bank policy decisions and signals about future rate changes can move a currency sharply on the expectation of what's coming, not just what's already happened. Broader risk sentiment matters too: in periods of global uncertainty, capital often flows toward currencies seen as safe havens, regardless of what any single country's fundamentals are doing at that moment." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Why do higher interest rates tend to strengthen a currency?",
        choices: [
          "They attract capital seeking a better return, increasing demand for that currency",
          "Higher interest rates always weaken a currency, with no exceptions",
          "Interest rates have no relationship to currency values",
          "Higher rates automatically reduce a country's money supply to zero",
        ],
        correctIndex: 0,
        explanation:
          "Capital flows toward higher-yielding currencies seeking better returns, and that increased demand tends to push the currency stronger.",
      },
      {
        id: "q2",
        prompt: "How does persistently higher inflation tend to affect a currency?",
        choices: [
          "It tends to weaken the currency over time, as inflation erodes its real purchasing power relative to other currencies",
          "Higher inflation always strengthens a currency",
          "Inflation has no relationship to currency values",
          "Inflation only affects a currency's interest rate, never its exchange rate",
        ],
        correctIndex: 0,
        explanation:
          "A currency eroded by high inflation loses purchasing power relative to lower-inflation currencies, a relationship captured by purchasing power parity.",
      },
      {
        id: "q3",
        prompt: "How does a large trade deficit tend to affect a country's currency?",
        choices: [
          "It tends to create selling pressure on the currency, since importers must convert to foreign currency to pay for imports",
          "A trade deficit always strengthens the currency",
          "Trade balances have no effect on currency values",
          "A trade deficit automatically raises interest rates",
        ],
        correctIndex: 0,
        explanation:
          "Importing more than is exported means more of the domestic currency is being sold to buy foreign currency, creating downward pressure on it.",
      },
      {
        id: "q4",
        prompt: "Why can central bank policy signals move a currency even before any actual rate change happens?",
        choices: [
          "Markets price in expectations about future policy, not just rates that have already changed",
          "Central bank signals have no effect on currency markets",
          "Currency markets only react to changes after they officially happen",
          "Central banks are prohibited from making any policy signals",
        ],
        correctIndex: 0,
        explanation:
          "Forward-looking markets react to expected future policy changes, not just realized ones, which is why signals and guidance can move a currency on their own.",
      },
      {
        id: "q5",
        prompt: "What happens to \"safe haven\" currencies during periods of global risk aversion?",
        choices: [
          "Capital tends to flow toward them, regardless of what any single country's own fundamentals are doing",
          "They are universally sold off during uncertainty",
          "Safe haven currencies do not exist in practice",
          "They become completely illiquid during uncertain periods",
        ],
        correctIndex: 0,
        explanation:
          "During global uncertainty, investors often seek currencies perceived as safe havens, a flow that can happen independent of that country's own individual economic conditions.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "fx-interest-rate-parity",
    title: "Interest Rate Parity",
    summary:
      "The no-arbitrage relationship linking spot and forward exchange rates to the interest rate gap between two currencies — the same relationship behind forward FX pricing and the carry trade.",
    body: [
      { type: "heading", text: "Revisiting Covered Interest Rate Parity" },
      { type: "paragraph", text: "As introduced in this curriculum's Forward Pricing lesson, covered interest rate parity ties a currency pair's forward exchange rate to the gap between the two countries' interest rates: the currency with the higher interest rate trades at a forward discount, and the currency with the lower rate trades at a forward premium, so that borrowing in one currency and lending in the other, fully hedged with a forward, can't produce a riskless profit." },
      { type: "heading", text: "Why It Has to Hold" },
      { type: "paragraph", text: "If this relationship didn't hold, an arbitrageur could borrow in the low-rate currency, convert it to the high-rate currency, invest at the higher rate, and lock in the future conversion back with a forward contract, pocketing a riskless profit funded entirely by the interest rate gap. The forward rate adjusts, through active trading, until that opportunity disappears." },
      { type: "heading", text: "Uncovered Interest Rate Parity" },
      { type: "paragraph", text: "A related, looser idea is uncovered interest rate parity: the theory that a higher-yielding currency should be expected to depreciate over time by roughly the size of its interest rate advantage, so that an investor gains nothing extra, on average, from simply holding the higher-rate currency unhedged. Unlike the covered version, this is a market expectation, not an enforced no-arbitrage relationship." },
      { type: "heading", text: "Why the Carry Trade Exists At All" },
      { type: "paragraph", text: "If uncovered interest rate parity held perfectly and consistently, there would be no expected profit from the carry trade covered later in this course, since the higher-rate currency's interest advantage would be expected to be offset exactly by its own depreciation. In practice, that offsetting depreciation doesn't show up reliably enough, or by the theoretically \"correct\" amount, which is precisely the persistent anomaly the carry trade is designed to exploit." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does covered interest rate parity say about a currency pair's forward exchange rate?",
        choices: [
          "It's tied to the gap between the two countries' interest rates, with the higher-rate currency trading at a forward discount",
          "The forward rate is always identical to the spot rate",
          "Interest rates have no relationship to forward exchange rates",
          "The forward rate is set arbitrarily by each country's government",
        ],
        correctIndex: 0,
        explanation:
          "Covered interest rate parity directly links the forward rate to the interest rate differential, ensuring no riskless arbitrage from borrowing in one currency and lending in the other.",
      },
      {
        id: "q2",
        prompt: "Why does covered interest rate parity have to hold, in an efficient market?",
        choices: [
          "Otherwise an arbitrageur could borrow low, invest high, hedge with a forward, and lock in a riskless profit, which trading pressure would eliminate",
          "It's simply a rule imposed by international regulators",
          "It only holds by coincidence, with no underlying economic force",
          "It has nothing to do with arbitrage opportunities",
        ],
        correctIndex: 0,
        explanation:
          "The relationship is enforced by arbitrage: any deviation would let a trader lock in a riskless profit, and that trading activity pushes the forward rate back into line.",
      },
      {
        id: "q3",
        prompt: "What does uncovered interest rate parity suggest?",
        choices: [
          "A higher-yielding currency should be expected to depreciate over time by roughly the size of its interest rate advantage",
          "A higher-yielding currency should be expected to appreciate indefinitely",
          "Interest rate differentials should have no relationship to future currency moves",
          "Uncovered interest rate parity is identical to the covered version in every way",
        ],
        correctIndex: 0,
        explanation:
          "Uncovered interest rate parity is the looser, expectations-based theory that currency depreciation should offset the interest rate gap on average, unlike the covered version's enforced no-arbitrage relationship.",
      },
      {
        id: "q4",
        prompt: "How does uncovered interest rate parity differ from the covered version?",
        choices: [
          "It's a market expectation, not an enforced no-arbitrage relationship like the covered version",
          "They are exactly the same concept with different names",
          "Uncovered parity is enforced by arbitrage, while covered parity is not",
          "Uncovered parity applies only to forward contracts, never spot rates",
        ],
        correctIndex: 0,
        explanation:
          "Covered interest rate parity is enforced by arbitrage using a forward contract; uncovered parity is just a theoretical expectation about future spot rate movement, with no hedge locking it in.",
      },
      {
        id: "q5",
        prompt: "Why does the carry trade have a potential edge to exploit, given uncovered interest rate parity?",
        choices: [
          "In practice, higher-rate currencies don't reliably depreciate by the theoretically \"correct\" amount, leaving a persistent gap the carry trade targets",
          "Uncovered interest rate parity always holds perfectly, leaving no room for any strategy",
          "The carry trade has no relationship to interest rate parity at all",
          "Higher-rate currencies always appreciate, guaranteeing carry trade profits",
        ],
        correctIndex: 0,
        explanation:
          "Because the depreciation predicted by uncovered interest rate parity doesn't show up reliably in practice, that persistent gap is exactly what carry trade strategies are built to capture.",
      },
    ],
  },
];
