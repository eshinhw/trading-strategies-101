---
slug: volatility-risk-premium-with-gamma-hedging
---

# Quiz

1. {#q1} What additional risk does an unhedged short options position carry, beyond the volatility risk premium itself?
   - No additional risk — it is a pure volatility bet by default
   - [x] Directional risk (delta) from the underlying moving up or down, which can dominate the position's day-to-day P&L
   - The risk that options can never be sold short
   - Currency risk unrelated to the underlying stock
   > A short options position isn't automatically a pure volatility bet — it also carries delta exposure to the underlying's direction, which gamma hedging is designed to remove.

2. {#q2} What does gamma hedging aim to do?
   - Maximize directional exposure to the underlying stock
   - [x] Continuously adjust a hedge in the underlying to keep the position's delta close to zero as the price moves
   - Eliminate the volatility risk premium entirely
   - Convert the position into a pure directional bet
   > By rebalancing the underlying hedge as the stock price moves, gamma hedging keeps delta near zero, isolating the position from directional risk.

3. {#q3} Why does a short options position typically have negative gamma?
   - Negative gamma is unrelated to short options positions
   - [x] Its delta becomes more negative as the stock rises and more positive as the stock falls — opposite to what a simple directional hedge would want
   - Negative gamma means the position never needs rebalancing
   - Short options positions always have zero gamma
   > Negative gamma describes how a short options position's delta moves against the direction of the underlying's move, requiring continuous rebalancing to stay delta-neutral.

4. {#q4} How does continuous gamma-hedging rebalancing relate to the position's profitability?
   - Rebalancing has no cost and no relationship to the position's profit
   - [x] Each rebalance effectively "buys high, sells low," and this cost is compensated by the option premium collected — the position profits if realized volatility comes in below what was implied
   - Rebalancing always guarantees a profit regardless of realized volatility
   - Rebalancing eliminates the need to collect any option premium
   > The rebalancing cost driven by negative gamma is compared against the premium collected upfront — if realized volatility is lower than implied, the premium exceeds the rebalancing cost and the position profits.

5. {#q5} Why does gamma hedging make a short-options position a genuinely different exposure than an unhedged one?
   - It has no effect on the nature of the position's exposure
   - [x] It isolates something close to a pure bet on implied versus realized volatility, rather than a position that also depends heavily on where the stock ends up relative to the strike
   - It guarantees the position will never lose money
   - It removes the need for any option premium to be collected
   > By continuously neutralizing delta, gamma hedging strips out much of the dependence on the stock's final price relative to the strike, leaving a position whose profitability depends mainly on implied versus realized volatility.

6. {#calc1} [calc] A delta-hedged short option position has gamma of −2,000 shares per $1 and collects $7,000 a day in time decay. The stock moves $3 in a day. What is the day's profit or loss? (gamma P&L = ½ × gamma × move²)
   - +$16,000
   - −$9,000
   - [x] −$2,000
   - +$7,000
   > The gamma loss is ½ × 2,000 × 3² = $9,000 against +$7,000 of decay, so the day is −$2,000. Large moves overwhelm the premium.

7. {#calc2} [calc] Implied volatility is 25%. About what daily move (one standard deviation, 252 days) must a $100 stock make for a delta-hedged short option to break even?
   - [x] About $1.57
   - About $25
   - About $0.25
   - About $6.25
   > The daily break-even move is 25% / √252 × $100 ≈ $1.57. Moves bigger than that make the short option lose money.

8. {#bk1} [calc] A delta-hedged short option position has a dollar gamma of $2,000 per (1%)². The market implies a daily move of 1%. The stock moves 2%. Using P&L = −0.5 × dollar gamma × (move² − implied move²), what is the result?
   - +$3,000
   - [x] −$3,000
   - −$2,000
   - −$6,000
   > P&L = −0.5 × $2,000 × (4 − 1) = −$3,000. A realized move bigger than implied hurts a short gamma position.

9. {#bk2} [calc] A delta-hedged short option position has a dollar gamma of $2,000 per (1%)² and the market implies a daily move of 1%. The stock moves only 0.5%. What is the result?
   - −$750
   - +$3,000
   - +$2,000
   - [x] +$750
   > P&L = −0.5 × $2,000 × (0.25 − 1) = +$750. A realized move smaller than implied helps a short gamma position.
