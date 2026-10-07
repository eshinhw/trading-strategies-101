---
slug: volatility-implied-vol-and-the-risk-premium
---

# Quiz

1. {#q1} What has implied volatility tended to do relative to subsequently realized volatility, historically?
   - [x] Run higher, on average, than the volatility that actually ends up being realized
   - Run consistently lower than realized volatility
   - Always match realized volatility exactly
   - Have no measurable relationship to realized volatility at all
   > Across long historical samples, implied volatility has on average priced options a bit richer than what subsequently realized volatility would have justified.

2. {#q2} What is the leading explanation for why this gap exists?
   - [x] Option buyers are willing to pay a premium for insurance-like protection against sharp losses, similar to how insurance is priced above expected payouts
   - Option sellers are legally required to overcharge for every contract
   - The gap is purely a data error with no real economic explanation
   - Implied volatility is always miscalculated by the exchange
   > The willingness to pay for downside protection, much like buying insurance, is the standard explanation for why options tend to be priced a bit richer than realized outcomes justify.

3. {#q3} What is the volatility risk premium?
   - [x] The compensation earned by whoever is on the other side of that protection-buying demand, for bearing the corresponding risk
   - A fee charged by exchanges for trading options
   - The difference between two different stocks' volatility levels
   - A tax applied to volatility-linked products
   > The volatility risk premium is the reward for selling that insurance-like protection — collecting the gap between implied and (typically lower) realized volatility.

4. {#q4} What kind of strategies are built to harvest the volatility risk premium?
   - [x] Strategies like selling straddles/strangles and more sophisticated gamma-hedged or variance-swap approaches
   - Only strategies that buy options, never sell them
   - Strategies with no relationship to option prices at all
   - Strategies exclusively focused on individual stock picking
   > Premium-harvesting strategies generally involve selling volatility exposure (straddles, strangles, and more refined variants), collecting the gap between implied and realized volatility.

5. {#q5} What real risk does a strategy harvesting the volatility risk premium have to manage?
   - [x] The risk of a period where realized volatility spikes well above what was priced in
   - There is no real risk once the premium is collected
   - The only risk is that implied volatility might fall to zero
   - The strategy is risk-free by construction
   > Collecting the premium works most of the time, but a sudden spike in realized volatility beyond what was implied can produce a sharp loss — the core risk these strategies have to manage.

6. {#calc1} [calc] An option seller collects $2 million a month and pays out $0.8 million in a normal month. In a crash month the payout is $30 million. About how many normal months of profit does one crash month wipe out?
   - About 15 months
   - [x] About 23 months
   - About 35 months
   - About 12 months
   > A normal month earns $1.2M, and the crash month loses $2M − $30M = $28M, which is $28M / $1.2M ≈ 23 months.

7. {#bk1} [calc] An option's implied volatility is 22% while the stock then realizes 17%. What is the volatility risk premium captured by an option seller?
   - 39 volatility points
   - 1.3 volatility points
   - 0.5 volatility points
   - [x] 5 volatility points
   > The premium is implied minus realized volatility: 22 − 17 = 5 volatility points.

8. {#bk2} [calc] A trader sells an option with a vega of $0.15 per volatility point per share, and implied volatility falls from 25% to 21% with no price move. For 100 shares of one option, what is the gain from vega?
   - $15
   - [x] $60
   - $0.60
   - $600
   > Volatility drops 4 points, so 4 × $0.15 × 100 shares = $60 gained by the seller.

9. {#bk3} [calc] Implied volatility is 19% and a trader expects 24% realized volatility. Is the option cheap or rich relative to that forecast, and by how much?
   - Rich by 5 points
   - Cheap by 19 points
   - Fairly priced
   - [x] Cheap by 5 points
   > Expected realized volatility (24%) exceeds implied (19%) by 5 points, so the option looks cheap and a buyer expects to profit.
