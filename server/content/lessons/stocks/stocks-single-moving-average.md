---
slug: stocks-single-moving-average
title: Single Moving Average
summary: A basic trend-following rule that goes long when price is above its moving average and exits or shorts when price falls below it.
---

## What a Moving Average Is

A moving average smooths out day-to-day price noise by averaging a stock's closing price over a fixed lookback window — a 50-day or 200-day moving average is common — recalculated fresh each day as the window rolls forward. A single-moving-average strategy uses just one such average as its entire trading signal.

## The Trading Rule

The rule is simple: when the stock's price is above its moving average, hold a long position, or stay long; when price falls below the moving average, exit the position, or go short in strategies that allow it. The moving average acts as a dynamic line in the sand — price crossing above or below it is treated as a shift from an uptrend to a downtrend, or vice versa.

![single-moving-average](Price crossing above the moving average signals a long entry; crossing below signals an exit.)

## Compared to a Crossover Rule

This approach is a trend-following rule, closely related in spirit to the moving-average-crossover rule used in futures trend-following, but simpler: it compares price to just one reference line rather than comparing two moving averages of different lengths to each other. That simplicity is both its appeal, easy to compute and explain, and its main weakness.

## The Whipsaw Problem

The single-moving-average rule's main drawback shows up in sideways, choppy markets: when price oscillates back and forth across the moving average without establishing a real trend, the strategy generates a series of "whipsaw" trades — buying just before a small dip below the average, then selling just before it climbs back above — each one a small loss, with transaction costs compounding the damage. It performs best in markets with sustained, clear directional trends and worst in range-bound, noisy ones.

# Quiz

1. What does a moving average do to a stock's price series?
   - It predicts the exact future price with certainty
   - [x] It smooths out day-to-day noise by averaging price over a fixed lookback window
   - It removes all trading volume data
   - It converts the stock's price into a percentage of the S&P 500
   > A moving average is simply the average closing price over a set number of recent days, recalculated as that window rolls forward, which smooths out short-term noise.

2. In a single-moving-average strategy, when does the trader typically hold a long position?
   - Only on the first trading day of each month
   - [x] When the stock's price is above its moving average
   - Only when trading volume is unusually low
   - Regardless of where price sits relative to the average
   > Price above the moving average is read as an uptrend signal to stay long; price below it is read as a downtrend signal to exit or go short.

3. How does a single-moving-average rule differ from a moving-average-crossover rule?
   - They are identical in every way
   - [x] A single-moving-average rule compares price to one reference line, while a crossover rule compares two moving averages of different lengths to each other
   - Crossover rules never use moving averages at all
   - A single-moving-average rule can only be used on futures, never stocks
   > The single-average version is the simpler case — just one line to compare price against — while a crossover strategy adds a second, differently-lengthed average for a potentially smoother signal.

4. What is a "whipsaw," in the context of a moving-average strategy?
   - A large, sustained profit from a strong trend
   - [x] A series of small losing trades caused by price oscillating back and forth across the moving average in a choppy market
   - A type of futures contract
   - A guaranteed way to avoid all trading losses
   > In range-bound markets without a real trend, price can cross the moving average repeatedly, triggering a string of buy-then-sell trades that each lose a little — a whipsaw.

5. In what kind of market does a single-moving-average strategy tend to perform best?
   - A sideways, range-bound, choppy market
   - [x] A market with a sustained, clear directional trend
   - A market that never moves at all
   - It performs identically in every market condition
   > Trend-following rules like this one are designed to capture sustained directional moves — they struggle in choppy markets but perform well when a real trend is underway.
