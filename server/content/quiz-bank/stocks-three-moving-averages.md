---
slug: stocks-three-moving-averages
---

# Quiz

1. {#q1} What additional element does a three-moving-average strategy add beyond the two-average crossover?
   - Nothing — it is identical to the two-average version
   - [x] A third moving average, requiring some form of alignment among all three (e.g., short above medium above long) before signaling a trend
   - A rule that ignores price entirely
   - A requirement to only trade once per year
   > The three-average version requires a stronger, more specific alignment among short, medium, and long averages before confirming a trend, rather than relying on a single two-average crossover.

2. {#q2} Why might requiring three moving averages to align reduce false signals compared to a single crossover?
   - It doesn't reduce false signals at all
   - [x] The stricter, more demanding condition of three-way alignment is less likely to be triggered by brief, noisy price blips
   - Three averages always move in perfect sync with each other
   - False signals are impossible to reduce in any trend-following strategy
   > A single two-average crossover can be a brief, noisy event, but requiring three averages to align in a specific order is a stronger condition that filters out more of that noise.

3. {#q3} What is the main cost of the stricter three-moving-average alignment condition?
   - The strategy becomes completely risk-free
   - [x] The strategy tends to enter and exit trends later, giving back more of an early move or a late reversal before signaling
   - It has no cost — it is strictly better than a two-average strategy
   - It requires exactly one moving average to compute
   > A stricter, more demanding signal condition tends to trigger later, meaning the strategy can miss some of the early part of a trend and give back more before flagging a reversal.

4. {#q4} How might a trader use the middle-length moving average in a three-average setup?
   - As the only average that matters, ignoring the short and long ones
   - [x] As an early-warning layer — watching for the short average to cross it as a heads-up, before waiting for full three-way alignment to confirm
   - It serves no purpose and is typically dropped
   - Only for calculating dividend yield
   > The medium average can act as an intermediate signal, giving traders an early hint of a possible trend shift while they wait for the stricter full alignment across all three averages.

5. {#q5} What is the fundamental tradeoff illustrated by adding a third moving average to a trend-following rule?
   - There is no tradeoff; more averages are always strictly better
   - [x] Signal quality (fewer false signals) versus timeliness (entering and exiting trends later)
   - Moving averages have no relationship to signal quality
   - Adding more averages always increases trading costs to infinity
   > Stricter alignment conditions reduce false signals but respond more slowly to real trend changes — a persistent tradeoff in designing trend-following rules with more confirming indicators.

6. {#calc1} [calc] A rule needs the 10-day average above the 50-day, which is above the 200-day. The averages are 108, 104 and 106. Is the condition met?
   - [x] No, the 50-day (104) is below the 200-day (106)
   - Yes, since 108 is the highest
   - Yes, since all three are above 100
   - No, since the 10-day is above the 50-day
   > The required order is 108 > 104 > 106, and 104 is not above 106, so the three averages are not aligned and there is no signal.

7. {#bk1} [calc] A three-average rule buys only when the 5-day average is above the 10-day, which is above the 20-day. The averages are 54, 52 and 50. Is the buy condition met?
   - No, because the 20-day average is lowest
   - No, because the averages must be equal
   - Yes, but only if the price is below 50
   - [x] Yes, because 54 > 52 > 50
   > The averages are in bullish order, 5-day above 10-day above 20-day, so all conditions are met.

8. {#bk2} [calc] A three-average rule gives 8 signals in a year. Each trade costs 0.2% round trip. What is the total yearly cost drag?
   - 0.2%
   - [x] 1.6%
   - 16%
   - 0.8%
   > 8 × 0.2% = 1.6%.

9. {#bk3} [calc] A two-average rule makes 20 trades a year at 0.15% cost each. Adding a third average cuts the number of trades in half. How much yearly trading cost is saved?
   - 3.0%
   - 0.15%
   - 0.75%
   - [x] 1.5%
   > Filtering out 10 trades saves 10 × 0.15% = 1.5%.

10. {#bk4} [calc] A strategy needs 10, 50 and 200-day averages to be ordered 10 > 50 > 200. The three are 108, 112 and 105. Is the buy condition met?
   - [x] No, because the 10-day average is below the 50-day
   - Yes, because all three are above 100
   - Yes, because the 200-day is the lowest
   - No, because the 200-day is the highest
   > The order must be 10 > 50 > 200. Here 108 is below 112, so the condition fails.

11. {#bk5} What is the cost of requiring three moving averages to line up before trading?
   - It trades far more often
   - It enters trends earlier
   - [x] Entries and exits come later, so the strategy gives up more of each trend
   - It ignores the long average
   > A stricter condition filters out false signals but waits for more confirmation.
