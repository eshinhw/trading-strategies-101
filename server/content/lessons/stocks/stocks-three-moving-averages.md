---
slug: stocks-three-moving-averages
title: Three Moving Averages
summary: A trend-following rule using three moving averages of different lengths together, requiring stronger alignment before signaling a trade.
---

## Adding a Third Average

A three-moving-average strategy extends the two-average crossover idea by adding a third moving average — typically a short, medium, and long window, say 10, 50, and 200 days — and requiring some form of alignment among all three before generating a signal, rather than relying on just one crossover event. A common version requires the short average to be above the medium, and the medium above the long, before treating the trend as confirmed bullish, and the reverse ordering for bearish.

![three-moving-average-alignment](Short, medium, and long averages stacking in order confirms the trend rather than relying on a single crossover.)

## Filtering Out False Signals

The motivation is filtering out false signals: a single two-average crossover can occasionally be a brief, noisy blip rather than a real trend shift, but requiring three averages to line up in the same order is a stronger, more demanding condition, which tends to trigger less often but with somewhat more confidence that a genuine trend is underway.

## The Cost of Being Stricter

This comes at a real cost, though: because the three-average alignment condition is stricter, the strategy tends to enter trends later, after more of the early move has already happened, and can also exit later, giving back more of a trend's late-stage reversal before the signal flips — there's a persistent tradeoff between signal quality and timeliness.

## Using the Middle Average as a Warning

Traders sometimes also use the middle-length average as an early-warning layer, watching for the short average to cross the medium average as a heads-up signal, while still waiting for full three-way alignment, including the long average, before treating the trend as confirmed and taking a full position — using the three lines together rather than just picking one crossover to act on.

# Quiz

1. What additional element does a three-moving-average strategy add beyond the two-average crossover?
   - Nothing — it is identical to the two-average version
   - [x] A third moving average, requiring some form of alignment among all three (e.g., short above medium above long) before signaling a trend
   - A rule that ignores price entirely
   - A requirement to only trade once per year
   > The three-average version requires a stronger, more specific alignment among short, medium, and long averages before confirming a trend, rather than relying on a single two-average crossover.

2. Why might requiring three moving averages to align reduce false signals compared to a single crossover?
   - It doesn't reduce false signals at all
   - [x] The stricter, more demanding condition of three-way alignment is less likely to be triggered by brief, noisy price blips
   - Three averages always move in perfect sync with each other
   - False signals are impossible to reduce in any trend-following strategy
   > A single two-average crossover can be a brief, noisy event, but requiring three averages to align in a specific order is a stronger condition that filters out more of that noise.

3. What is the main cost of the stricter three-moving-average alignment condition?
   - The strategy becomes completely risk-free
   - [x] The strategy tends to enter and exit trends later, giving back more of an early move or a late reversal before signaling
   - It has no cost — it is strictly better than a two-average strategy
   - It requires exactly one moving average to compute
   > A stricter, more demanding signal condition tends to trigger later, meaning the strategy can miss some of the early part of a trend and give back more before flagging a reversal.

4. How might a trader use the middle-length moving average in a three-average setup?
   - As the only average that matters, ignoring the short and long ones
   - [x] As an early-warning layer — watching for the short average to cross it as a heads-up, before waiting for full three-way alignment to confirm
   - It serves no purpose and is typically dropped
   - Only for calculating dividend yield
   > The medium average can act as an intermediate signal, giving traders an early hint of a possible trend shift while they wait for the stricter full alignment across all three averages.

5. What is the fundamental tradeoff illustrated by adding a third moving average to a trend-following rule?
   - There is no tradeoff; more averages are always strictly better
   - [x] Signal quality (fewer false signals) versus timeliness (entering and exiting trends later)
   - Moving averages have no relationship to signal quality
   - Adding more averages always increases trading costs to infinity
   > Stricter alignment conditions reduce false signals but respond more slowly to real trend changes — a persistent tradeoff in designing trend-following rules with more confirming indicators.
