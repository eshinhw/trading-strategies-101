---
slug: stocks-mean-reversion-multiple-clusters
---

# Quiz

1. {#q1} How does multi-cluster mean-reversion differ from single-cluster mean-reversion?
   - It only trades a single, hand-picked group of stocks
   - [x] It runs the same mean-reversion process simultaneously across many independent industry or peer groups spanning the whole market
   - It ignores industry groupings entirely
   - It can only be applied to bonds, not stocks
   > Multi-cluster mean-reversion scales the single-cluster idea up by running it in parallel across many clusters — banks, retailers, airlines, and so on — rather than just one.

2. {#q2} What is the main advantage of trading mean-reversion across multiple clusters instead of just one?
   - It requires less data than single-cluster mean-reversion
   - [x] Diversification — the portfolio isn't dependent on any single cluster's internal divergence behaving as expected
   - It guarantees higher returns than any other equity strategy
   - It eliminates the need for any stock selection at all
   > Spreading the same rule across many independent clusters means a quiet or structurally-broken signal in any one industry has a much smaller effect on the overall portfolio.

3. {#q3} How are clusters typically formed at the scale of a multi-cluster strategy?
   - By hand-picking exactly one group of similar stocks
   - [x] Using a formal industry classification system or a statistical clustering method to partition the entire universe automatically
   - By selecting stocks alphabetically
   - Clusters are never actually defined in multi-cluster strategies
   > At this scale, clusters are typically built systematically — via an industry classification standard like GICS or statistical correlation-based clustering — rather than manually chosen one at a time.

4. {#q4} Within each individual cluster, what trading rule does a multi-cluster strategy apply?
   - A completely different rule for every cluster
   - [x] The same simple mean-reversion rule: buy the relative laggard, sell the relative leader, versus that cluster's own average
   - No trading rule at all — clusters are used only for reporting purposes
   - A rule based exclusively on company size
   > Each cluster runs the identical single-cluster mean-reversion logic; what changes across the strategy is which cluster of stocks that rule is applied to, not the rule itself.

5. {#q5} Why does a multi-cluster mean-reversion portfolio tend to be more market-neutral in aggregate than a single-cluster version?
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

7. {#bk1} [calc] A mean-reversion strategy is run independently in 5 uncorrelated industry clusters, each with a Sharpe ratio of 0.5. What is the Sharpe ratio of the combined strategy?
   - 2.50
   - 0.50
   - 0.10
   - [x] 1.12
   > For uncorrelated, equally weighted strategies the Sharpe ratio scales with the square root of their number: 0.5 × √5 = 1.12.

8. {#bk2} [calc] A mean-reversion strategy earns $2 million of gross profit a year across 4 clusters and pays $0.5 million in trading costs. What is the profit per cluster after costs?
   - $0.5 million
   - [x] $0.375 million
   - $0.625 million
   - $1.5 million
   > Net profit is $2 million − $0.5 million = $1.5 million. Spread over 4 clusters: $0.375 million each.

9. {#bk3} [calc] Cluster A's stocks rose 3% above average and cluster B's fell 2% below average. The strategy shorts relative winners and buys relative losers with equal-sized positions of $1 million. After both revert fully, what is the total profit on the two $1 million positions?
   - $10,000
   - $500,000
   - $5,000
   - [x] $50,000
   > Shorting cluster A earns 3% × $1 million = $30,000. Buying cluster B earns 2% × $1 million = $20,000. Total $50,000.

10. {#bk4} [calc] A multi-cluster strategy runs 10 clusters, each with $1 million long and $1 million short. What are the total gross exposure and the net exposure?
   - [x] $20 million gross and $0 net
   - $10 million gross and $10 million net
   - $20 million gross and $20 million net
   - $2 million gross and $0 net
   > Gross = 10 × ($1 million + $1 million) = $20 million. Longs equal shorts, so net is $0.

11. {#bk5} What is the main advantage of running mean reversion across many clusters instead of one?
   - It guarantees that every cluster reverts
   - It removes the need to choose clusters
   - [x] Diversification: one cluster's signal can go quiet or fail, but many unrelated clusters balance each other
   - It increases risk by concentrating positions
   > Spreading positions over many unrelated industries makes the portfolio more balanced and market-neutral.
