---
slug: etf-mean-reversion
---

# Quiz

1. {#q1} What does a mean-reversion strategy do when an ETF's price falls unusually far below its own recent average?
   - Sell or short the ETF, expecting the decline to continue
   - [x] Buy the ETF, betting on a bounce back toward its recent average
   - Ignore the ETF entirely
   - Immediately delist the ETF
   > Mean-reversion bets on deviations correcting — a sharp drop below the recent average is treated as a buying opportunity on the expectation of a bounce back.

2. {#q2} How is the "band" around an ETF's moving average typically constructed in a mean-reversion strategy?
   - It is drawn completely at random
   - [x] Commonly based on standard deviations of recent price moves, similar in spirit to Bollinger Bands
   - It is always set to exactly the ETF's all-time high and low
   - It never changes regardless of the ETF's volatility
   > A statistically-based band, scaled to recent volatility, defines how far price needs to deviate from the average before the strategy considers it a mean-reversion trading opportunity.

3. {#q3} Why might mean-reversion signals on diversified ETFs be somewhat cleaner than on individual stocks?
   - ETFs never experience any price movement
   - [x] A diversified ETF's short-term swings are less prone to being driven by single-company idiosyncratic news, so sharp moves are more likely to reflect a broad, temporary imbalance
   - ETFs are legally required to always revert to their average
   - Diversification eliminates all price risk in an ETF
   > Because an ETF aggregates many underlying holdings, a sharp, unexplained move is less likely to be one company's news and more likely to reflect a genuine, temporary supply/demand imbalance — the kind of move mean-reversion aims to capture.

4. {#q4} What is the central risk of ETF mean-reversion?
   - The ETF's price never changes, eliminating all risk
   - [x] A real, fundamentals-driven shift can cause the ETF's price to keep moving away from its prior average instead of reverting
   - Mean-reversion strategies are risk-free once implemented on ETFs
   - The risk only applies to bonds, not ETFs
   > Not every large deviation is temporary — a genuine shift in outlook for the ETF's underlying sector or holdings can cause the price to persist in its new direction rather than snap back, hurting the strategy.

5. {#q5} How does the typical lookback window for ETF mean-reversion compare to a long-term trend-following strategy?
   - It uses the exact same multi-year lookback window
   - [x] It's typically much shorter — days or a couple of weeks — since it's meant to capture short-lived deviations, not a long-term trend
   - Mean-reversion strategies never use a lookback window
   - The lookback window is always exactly one trading day
   > Because mean-reversion targets short-term deviations rather than sustained directional moves, it uses a shorter moving-average window than a long-term trend-following approach would.

6. {#calc1} [calc] An ETF's 20-day average price is $100 with a standard deviation of $2. It closes at $95.50. What is the z-score?
   - −4.5
   - −2.0
   - [x] −2.25
   - −0.045
   > The z-score is ($95.50 − $100) / $2 = −2.25, which is far enough below its average to be a buy signal.

7. {#calc2} [calc] An ETF is bought at $94 with a target at its average of $100 and a stop at $91. What is the reward-to-risk ratio?
   - [x] 2 to 1
   - 1 to 2
   - 6 to 1
   - 3 to 1
   > The reward is $100 − $94 = $6 and the risk is $94 − $91 = $3, so reward / risk = 2.

8. {#bk1} [calc] An ETF's 20-day average is $100 with a standard deviation of $2. It closes at $95.60. How many standard deviations below the average is it?
   - 4.4
   - 1.1
   - [x] 2.2
   - 2.0
   > ($100 − $95.60) / $2 = 2.2 standard deviations below the mean.

9. {#bk2} [calc] A trader buys an ETF at 95 expecting a return to 100, with a stop at 92. What is the reward-to-risk ratio?
   - [x] 1.67 to 1
   - 0.6 to 1
   - 3 to 1
   - 5 to 1
   > Reward = 100 − 95 = 5. Risk = 95 − 92 = 3. 5 / 3 = 1.67.

10. {#bk3} [calc] A trader buys 500 shares of an ETF at 95. The ETF reverts to 100. What is the profit?
   - $5
   - $47,500
   - [x] $2,500
   - $25,000
   > Profit = (100 − 95) × 500 = $2,500.

11. {#bk4} [calc] An ETF's 20-day average is $100 with a standard deviation of $2. Bands are set at 2 standard deviations. What are the lower and upper bands?
   - $98 and $102
   - [x] $96 and $104
   - $94 and $106
   - $100 and $104
   > Lower = $100 − 2 × $2 = $96. Upper = $100 + 2 × $2 = $104.

12. {#bk5} [calc] An ETF's 20-day average is $100, the standard deviation is $2.50 and the ETF trades at $93.50. What is the z-score?
   - −6.5
   - 2.6
   - −0.26
   - [x] −2.6
   > ($93.50 − $100) / $2.50 = −2.6.

13. {#bk6} [calc] A trader buys 400 ETF shares at $95 expecting a return to $100, paying $0.10 per share in round-trip costs. What is the profit if the ETF reaches $100?
   - $2,000
   - [x] $1,960
   - $2,040
   - $1,900
   > Gross = $5 × 400 = $2,000. Costs = $0.10 × 400 = $40. Net = $1,960.

14. {#bk7} Why can ETF mean-reversion signals be cleaner than those for single stocks?
   - ETFs never move
   - ETFs have no bid-ask spread
   - ETFs are guaranteed to revert
   - [x] An ETF's price is a diversified aggregate, so swings are less driven by single-company news
   > Short-term moves in a broad ETF are less often caused by one company's idiosyncratic event.

15. {#bk8} What is the central risk of an ETF mean-reversion strategy?
   - Deviations always revert, so there is no risk
   - The ETF pays no dividend
   - [x] Some large deviations do not revert because of a real shift in fundamentals
   - Short selling is banned
   > A sector-wide change in outlook can be a lasting move rather than a temporary swing.
