---
slug: stocks-mean-reversion-single-cluster
title: Mean-Reversion: Single Cluster
summary: Betting a stock's price will revert toward the average of a tightly related group of peers, after diverging from that group.
---

## Defining the Cluster

This is a form of mean-reversion trading applied to a single, well-defined cluster of closely related stocks — for example, all the major stocks within one narrow industry, like large regional banks or big-box retailers — rather than to a broad, diverse market index. The trader computes some measure of the group's collective typical behavior, such as the cluster's average return over a short window, and looks for individual members whose price has deviated unusually far from that group average.

## The Trading Rule

The trading rule follows directly: when one stock in the cluster has fallen well below the group's recent average performance while its close peers haven't, buy it, expecting it to catch back up toward the cluster; when one stock has risen well above the group's average, sell or short it, expecting it to fall back in line.

![cluster-deviation](One stock falls away from its peers while the rest of the cluster holds its band — the laggard is the buy candidate.)

## Cluster vs. Pair

This differs from pairs trading in scope: a pair looks at the relationship between exactly two stocks, while a single-cluster mean-reversion strategy looks at one stock's deviation from a whole group of peers at once, which can make the signal more statistically robust — a genuine outlier relative to five or ten closely related peers is a stronger signal than a divergence measured against just one other stock.

## Choosing the Right Cluster

Choosing the right cluster matters enormously: the stocks need to be similar enough in what drives their business — same industry, similar size, similar exposure to the same economic factors — that reverting to the group average is actually a sensible expectation, rather than grouping together stocks that only superficially resemble each other and have no real reason to move together.

# Quiz

1. What does a single-cluster mean-reversion strategy compare an individual stock's price to?
   - The stock's own price exactly one year ago
   - [x] The recent average behavior of a tightly related group of peer stocks
   - A completely unrelated stock in a different industry
   - The overall level of interest rates
   > This strategy defines "normal" relative to a specific, closely related cluster of peers — like major regional bank stocks — rather than the broad market or a single other name.

2. If one stock in a cluster has fallen well below the group's recent average performance, the strategy would typically:
   - Sell or short that stock, expecting it to keep falling
   - [x] Buy that stock, expecting it to catch back up toward the cluster average
   - Ignore it entirely, since single stocks don't matter
   - Buy every other stock in the cluster instead
   > A stock that has lagged well behind its close peers is the buy candidate — the strategy expects it to revert back toward the group's typical behavior.

3. How does single-cluster mean-reversion differ from pairs trading?
   - They are exactly the same strategy under a different name
   - [x] Pairs trading compares exactly two stocks, while single-cluster mean-reversion compares one stock against a whole group of peers at once
   - Pairs trading never uses statistics, while cluster mean-reversion always does
   - Single-cluster strategies can only be used on futures, not stocks
   > The scope differs — a pair is a relationship between two names, while a cluster strategy measures one stock's deviation from a broader group, which can make the resulting signal more statistically robust.

4. Why can comparing a stock against a whole cluster of peers produce a more robust signal than comparing it to just one other stock?
   - It doesn't — smaller comparisons are always more reliable
   - [x] A genuine outlier relative to several closely related peers is a stronger signal than a divergence measured against only one other name
   - Clusters always contain exactly two stocks, same as a pair
   - More stocks in a comparison always guarantees higher returns
   > Measuring deviation from a group average, rather than from a single comparison stock, reduces the chance that an idiosyncratic move in just one other name is mistaken for a genuine divergence.

5. Why does the choice of which stocks belong in the cluster matter so much?
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
