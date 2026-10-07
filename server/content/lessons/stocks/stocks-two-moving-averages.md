---
slug: stocks-two-moving-averages
title: Two Moving Averages
summary: A trend-following rule based on the crossover of a fast and a slow moving average, rather than comparing price to just one reference line.
---

## The Crossover Rule

A two-moving-average, or moving-average crossover, strategy uses a pair of moving averages computed over different lookback windows — a shorter, "fast" one, say 20 days, and a longer, "slow" one, say 100 days — and generates trading signals from their relationship to each other rather than from price alone. When the fast average crosses above the slow average, that's read as the start of an uptrend and triggers a buy; when the fast average crosses below the slow average, that's read as the start of a downtrend and triggers a sell or short.

![moving-average-crossover](The fast average crossing above the slow average signals a buy; crossing below signals a sell.)

## Why It's Smoother

This differs from a single-moving-average rule mainly in smoothness: comparing price to a single moving average reacts very quickly to price moves, since raw price is noisy, while comparing two moving averages to each other is inherently smoother, since both lines are already averaged, which tends to filter out some of the noise that causes whipsaws in the single-average version.

## Choosing the Lookback Windows

The choice of the two lookback windows is itself a meaningful design decision: a shorter fast/slow pair, like 10/50 days, reacts to trend changes more quickly but generates more signals and more whipsaws in choppy markets, while a longer pair, like 50/200 days, the classic "golden cross" and "death cross" levels, reacts more slowly but with fewer false signals — there's a real tradeoff between responsiveness and reliability.

## Where It Works Best

Like any trend-following rule, the two-moving-average crossover performs best in markets with a sustained, persistent trend and worst in sideways, range-bound markets, where the fast and slow averages can cross back and forth repeatedly without either crossover reflecting a real, lasting shift in direction.

# Quiz

1. What triggers a buy signal in a two-moving-average crossover strategy?
   - The stock's price falling to zero
   - [x] The fast (shorter-window) moving average crossing above the slow (longer-window) moving average
   - The two moving averages becoming perfectly equal forever
   - Trading volume dropping to zero
   > A crossover of the fast average above the slow average is read as the start of an uptrend, triggering a buy signal in this strategy.

2. How does a two-moving-average strategy differ from a single-moving-average strategy?
   - They are identical in every respect
   - [x] It compares two moving averages of different lengths to each other, rather than comparing price to just one reference line
   - It uses no moving averages at all
   - It can only be applied to bonds
   > The two-average version generates signals from the relationship between a fast and slow average, while the single-average version compares raw price to just one line.

3. Why does comparing two moving averages to each other tend to be smoother than comparing price to a single moving average?
   - It isn't smoother — it's identical in behavior
   - [x] Both lines being compared are already averaged, which filters out more of the noise that causes whipsaws
   - Moving averages are never smooth by definition
   - Smoothness has nothing to do with how many averages are used
   > Since both the fast and slow lines are themselves smoothed versions of price, comparing them to each other filters out more short-term noise than comparing raw, noisy price to a single average.

4. What is the tradeoff between using a shorter fast/slow pair (e.g., 10/50 days) versus a longer pair (e.g., 50/200 days)?
   - There is no tradeoff — longer and shorter pairs behave identically
   - [x] A shorter pair reacts to trend changes more quickly but generates more whipsaws, while a longer pair reacts more slowly but with fewer false signals
   - Shorter pairs can only be used on futures, never stocks
   - Longer pairs always produce more frequent trading signals
   > The lookback window choice trades off responsiveness (shorter windows react faster) against reliability (longer windows filter out more noise but lag more).

5. In what kind of market does a two-moving-average crossover strategy perform worst?
   - A market with a strong, sustained trend
   - [x] A sideways, range-bound market, where the two averages can cross back and forth without a real lasting shift in direction
   - It performs identically in every market condition
   - A market where trading is completely halted
   > Like other trend-following rules, the crossover strategy struggles in choppy markets, where the fast and slow averages can generate repeated false crossovers with no real trend behind them.

6. {#calc1} [calc] A 20-day moving average is $102.40 and the 100-day moving average is $100.00. By what percentage is the fast average above the slow one, and what is the signal?
   - 2.4%, so the rule is short
   - [x] 2.4%, so the rule is long
   - 2.34%, so the rule is flat
   - 24%, so the rule is long
   > (102.40 − 100.00) / 100.00 = 2.4%. The fast average is above the slow one, so the crossover rule holds a long position.
