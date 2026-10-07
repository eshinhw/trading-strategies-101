---
slug: stocks-mean-reversion-single-cluster
---

# Quiz

1. {#q1} What does a single-cluster mean-reversion strategy compare an individual stock's price to?
   - The stock's own price exactly one year ago
   - [x] The recent average behavior of a tightly related group of peer stocks
   - A completely unrelated stock in a different industry
   - The overall level of interest rates
   > A single-cluster strategy defines "normal" relative to a specific, closely related cluster of peers — like major regional bank stocks — rather than the broad market or a single other name.

2. {#q2} If one stock in a cluster has fallen well below the group's recent average performance, the strategy would typically:
   - Sell or short that stock, expecting it to keep falling
   - [x] Buy that stock, expecting it to catch back up toward the cluster average
   - Ignore it entirely, since single stocks don't matter
   - Buy every other stock in the cluster instead
   > A stock that has lagged well behind its close peers is the buy candidate — the strategy expects it to revert back toward the group's typical behavior.

3. {#q3} How does single-cluster mean-reversion differ from pairs trading?
   - They are exactly the same strategy under a different name
   - [x] Pairs trading compares exactly two stocks, while single-cluster mean-reversion compares one stock against a whole group of peers at once
   - Pairs trading never uses statistics, while cluster mean-reversion always does
   - Single-cluster strategies can only be used on futures, not stocks
   > The scope differs — a pair is a relationship between two names, while a cluster strategy measures one stock's deviation from a broader group, which can make the resulting signal more statistically robust.

4. {#q4} Why can comparing a stock against a whole cluster of peers produce a more robust signal than comparing it to just one other stock?
   - It doesn't — smaller comparisons are always more reliable
   - [x] A genuine outlier relative to several closely related peers is a stronger signal than a divergence measured against only one other name
   - Clusters always contain exactly two stocks, same as a pair
   - More stocks in a comparison always guarantees higher returns
   > Measuring deviation from a group average, rather than from a single comparison stock, reduces the chance that an idiosyncratic move in just one other name is mistaken for a genuine divergence.

5. {#q5} Why does the choice of which stocks belong in the cluster matter so much?
   - It doesn't matter — any group of stocks works equally well
   - [x] The stocks need a real, shared reason to move together for "reverting to the group average" to be a sensible expectation
   - Clusters must always contain exactly ten stocks by convention
   - The cluster should include stocks from as many different industries as possible
   > If the grouped stocks don't actually share meaningful business or economic drivers, there's no real reason to expect one to revert toward the others' average — the strategy depends on the cluster being genuinely related, not just superficially similar.

6. {#calc1} [calc] A stock falls 8% while its peer cluster falls 2%. The gap between a stock and its cluster usually has a standard deviation of 3%. What is the stock's z-score against the cluster?
   - −6.0
   - −2.7
   - [x] −2.0
   - +2.0
   > The deviation is −8% − (−2%) = −6%, and −6% / 3% = −2.0, which is far enough below the group to be a buy candidate.

7. {#bk1} [calc] A cluster of four stocks returned +6%, +2%, −1% and −3% last week. A mean-reversion rule weights each stock by minus its deviation from the cluster average, divided by the sum of absolute deviations. What weight does the first stock get?
   - +41.7%
   - [x] −41.7%
   - −50%
   - −25%
   > The average is 1%. Deviations are +5, +1, −2, −4, with absolute sum 12. The first weight is −5 / 12 = −41.7%.

8. {#bk2} [calc] A cluster's average weekly return is 1%. One stock rose 5% and is expected to give back half its excess over the cluster. What is the expected move in that stock?
   - −4%
   - −2.5%
   - −1%
   - [x] −2%
   > Excess return = 5% − 1% = 4%. Half of it is 2%, so the stock is expected to fall 2% relative to the cluster.

9. {#bk3} [calc] A mean-reversion portfolio uses weights equal to minus each stock's deviation, scaled so absolute weights sum to 100%. Why do the weights sum to zero, and what does that make the portfolio?
   - Longs always exceed shorts, so it is net long
   - [x] Deviations from an average sum to zero, so the portfolio is dollar-neutral
   - The weights are all positive, so it is long-only
   - Weights are random, so the portfolio is unhedged
   > Deviations from the cluster average sum to zero, so minus those deviations also sum to zero. Longs equal shorts, making the portfolio dollar-neutral.

10. {#bk4} [calc] A cluster of 5 stocks has an average weekly return of 1.2%. One stock returned −3.0%. By how much did it lag its cluster?
   - 1.8 percentage points
   - 3.0 percentage points
   - [x] 4.2 percentage points
   - −4.2 percentage points
   > −3.0% − 1.2% = −4.2 points, so it lagged by 4.2 points and is the buy candidate.

11. {#bk5} [calc] A stock lags its cluster by 4.2 percentage points and is expected to recover 60% of the gap. What relative gain is expected?
   - [x] 2.52 percentage points
   - 4.2 percentage points
   - 1.68 percentage points
   - 7 percentage points
   > 60% × 4.2 = 2.52 percentage points.

12. {#bk6} How does single-cluster mean reversion differ from a pairs trade?
   - It compares exactly two stocks, while a pair uses a whole group
   - It trades only index futures
   - [x] It measures a stock's deviation from a whole group of peers, while a pair compares exactly two stocks
   - It uses no short positions
   > A cluster approach looks at one stock against the group at once, which spreads the signal across more names.
