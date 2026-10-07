---
slug: etf-mean-reversion
title: Mean-Reversion
summary: Trading an ETF's short-term deviations from its own recent average price, betting those deviations correct rather than persist.
---

## Applying Mean-Reversion to ETFs

Applied to ETFs, mean-reversion follows the same basic logic covered for single stocks, but takes advantage of the fact that an ETF's price is itself already a diversified, relatively smooth aggregate of many underlying holdings — buying an ETF after it has fallen unusually far below its own recent average price, betting on a bounce back, and selling or shorting after it has risen unusually far above that average, betting on a pullback.

## Building the Band

A typical implementation computes a short-term moving average, often just days or a couple of weeks, since this is meant to capture short-lived deviations, not a long-term trend, and a band around it, commonly based on standard deviations of recent price moves, similar in spirit to Bollinger Bands, then trades when price pokes outside that band, on the expectation it reverts back toward the average and inside the band again.

![mean-reversion-band](Price wandering outside the band around its moving average triggers a trade betting on reversion back inside it.)

## Why Signals Are Cleaner Here

Because a broad-market or sector ETF is diversified across many underlying stocks, its short-term price swings are somewhat less prone to being driven by single-company idiosyncratic news than an individual stock's would be, which can make mean-reversion signals on ETFs a bit cleaner and less noisy — a sharp, unexplained move in a diversified ETF is more likely to reflect a broad, temporary imbalance in buying or selling pressure, rather than a genuine repricing of fundamental value, which is exactly the kind of move mean-reversion is designed to trade.

## When Deviations Don't Revert

The strategy's central risk is the same as for any mean-reversion approach: not every large deviation reverts, and a real, fundamentals-driven shift, a sudden change in the outlook for an entire sector, for example, rather than just a temporary imbalance in short-term buying and selling, can cause the ETF's price to simply keep moving away from its prior average instead of snapping back, turning what looked like a reversion trade into a persistent, growing loss.

# Quiz

1. What does a mean-reversion strategy do when an ETF's price falls unusually far below its own recent average?
   - Sell or short the ETF, expecting the decline to continue
   - [x] Buy the ETF, betting on a bounce back toward its recent average
   - Ignore the ETF entirely
   - Immediately delist the ETF
   > Mean-reversion bets on deviations correcting — a sharp drop below the recent average is treated as a buying opportunity on the expectation of a bounce back.

2. How is the "band" around an ETF's moving average typically constructed in a mean-reversion strategy?
   - It is drawn completely at random
   - [x] Commonly based on standard deviations of recent price moves, similar in spirit to Bollinger Bands
   - It is always set to exactly the ETF's all-time high and low
   - It never changes regardless of the ETF's volatility
   > A statistically-based band, scaled to recent volatility, defines how far price needs to deviate from the average before the strategy considers it a mean-reversion trading opportunity.

3. Why might mean-reversion signals on diversified ETFs be somewhat cleaner than on individual stocks?
   - ETFs never experience any price movement
   - [x] A diversified ETF's short-term swings are less prone to being driven by single-company idiosyncratic news, so sharp moves are more likely to reflect a broad, temporary imbalance
   - ETFs are legally required to always revert to their average
   - Diversification eliminates all price risk in an ETF
   > Because an ETF aggregates many underlying holdings, a sharp, unexplained move is less likely to be one company's news and more likely to reflect a genuine, temporary supply/demand imbalance — the kind of move mean-reversion aims to capture.

4. What is the central risk of ETF mean-reversion?
   - The ETF's price never changes, eliminating all risk
   - [x] A real, fundamentals-driven shift can cause the ETF's price to keep moving away from its prior average instead of reverting
   - Mean-reversion strategies are risk-free once implemented on ETFs
   - The risk only applies to bonds, not ETFs
   > Not every large deviation is temporary — a genuine shift in outlook for the ETF's underlying sector or holdings can cause the price to persist in its new direction rather than snap back, hurting the strategy.

5. How does the typical lookback window for ETF mean-reversion compare to a long-term trend-following strategy?
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
