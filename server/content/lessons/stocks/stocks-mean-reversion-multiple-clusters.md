---
slug: stocks-mean-reversion-multiple-clusters
title: Mean-Reversion: Multiple Clusters
summary: Running single-cluster mean-reversion simultaneously across many industry or peer groups at once, diversifying the strategy across the whole market.
---

## Scaling Up from One Cluster

Single-cluster mean-reversion trades one group of closely related stocks — say, regional banks — looking for members that have diverged from that group's average and betting on reversion. Mean-reversion across multiple clusters simply runs this same process simultaneously across many such clusters spanning the whole market — banks, retailers, airlines, utilities, and so on — each cluster generating its own independent set of long and short candidates.

## The Diversification Advantage

The main advantage over trading a single cluster is diversification: a single cluster's mean-reversion signal can go quiet for a long stretch, if that particular industry isn't experiencing much internal divergence, or can suffer if that one industry undergoes a structural shift that breaks its typical peer relationships. Spreading the same strategy across dozens of independent clusters means the overall portfolio isn't dependent on any single group behaving as expected.

## Building Clusters Systematically

Constructing the clusters well becomes a bigger and more systematic task at this scale — rather than hand-picking one obviously related group of stocks, a multi-cluster strategy typically uses a formal industry classification system, like GICS, or a statistical clustering method, grouping stocks by historical correlation, to partition the entire investable universe into clusters automatically, then applies the identical mean-reversion rule inside each one.

## More Balanced in Aggregate

Because the resulting long and short positions are spread across many unrelated industries rather than concentrated in one, a multi-cluster mean-reversion portfolio tends to be much more balanced and market-neutral in aggregate than a single-cluster version, even though each individual cluster's trades are exactly the same simple rule: buy the laggard, sell the leader, relative to that cluster's own average.

# Quiz

1. How does multi-cluster mean-reversion differ from single-cluster mean-reversion?
   - It only trades a single, hand-picked group of stocks
   - [x] It runs the same mean-reversion process simultaneously across many independent industry or peer groups spanning the whole market
   - It ignores industry groupings entirely
   - It can only be applied to bonds, not stocks
   > Multi-cluster mean-reversion scales the single-cluster idea up by running it in parallel across many clusters — banks, retailers, airlines, and so on — rather than just one.

2. What is the main advantage of trading mean-reversion across multiple clusters instead of just one?
   - It requires less data than single-cluster mean-reversion
   - [x] Diversification — the portfolio isn't dependent on any single cluster's internal divergence behaving as expected
   - It guarantees higher returns than any other equity strategy
   - It eliminates the need for any stock selection at all
   > Spreading the same rule across many independent clusters means a quiet or structurally-broken signal in any one industry has a much smaller effect on the overall portfolio.

3. How are clusters typically formed at the scale of a multi-cluster strategy?
   - By hand-picking exactly one group of similar stocks
   - [x] Using a formal industry classification system or a statistical clustering method to partition the entire universe automatically
   - By selecting stocks alphabetically
   - Clusters are never actually defined in multi-cluster strategies
   > At this scale, clusters are typically built systematically — via an industry classification standard like GICS or statistical correlation-based clustering — rather than manually chosen one at a time.

4. Within each individual cluster, what trading rule does a multi-cluster strategy apply?
   - A completely different rule for every cluster
   - [x] The same simple mean-reversion rule: buy the relative laggard, sell the relative leader, versus that cluster's own average
   - No trading rule at all — clusters are used only for reporting purposes
   - A rule based exclusively on company size
   > Each cluster runs the identical single-cluster mean-reversion logic; what changes across the strategy is which cluster of stocks that rule is applied to, not the rule itself.

5. Why does a multi-cluster mean-reversion portfolio tend to be more market-neutral in aggregate than a single-cluster version?
   - It isn't — multi-cluster portfolios are always more directional
   - [x] Long and short positions are spread across many unrelated industries rather than concentrated in just one
   - It only ever holds a single stock at a time
   - Market-neutrality is unrelated to how many clusters are used
   > Concentrating in one cluster leaves the portfolio exposed to that specific industry's overall direction, while spreading positions across many unrelated clusters balances that exposure out in aggregate.

6. {#calc1} [calc] A strategy puts $3 million in each of three clusters, which return +1.2%, −0.4% and +0.7% in a month. What is the total profit?
   - $15,000
   - $135,000
   - $4,500
   - [x] $45,000
   > The total return across clusters is +1.5% of $3M = $45,000. One weak cluster is offset by the others.
