---
slug: volatility-trading-with-variance-swaps
---

# Quiz

1. {#q1} What does a variance swap's payoff depend on?
   - The specific path the underlying took and where it ended up relative to a strike price
   - [x] The difference between realized variance over the period and the variance level agreed upon when the contract was entered
   - The dividend yield of the underlying stock
   - The total trading volume during the contract period
   > A variance swap pays out based purely on how much realized variance differed from the agreed-upon level, unlike an option, whose payoff depends on the path and the final price relative to a strike.

2. {#q2} What key advantage does a variance swap offer over trying to build a pure volatility bet from options?
   - Variance swaps require no counterparty
   - [x] It provides volatility exposure without needing continuous delta-hedging to isolate it, since the payoff is already defined directly in terms of realized variance
   - Variance swaps are always cheaper than any options position
   - Variance swaps eliminate all forms of risk entirely
   > A single option's volatility exposure changes as the stock moves, requiring gamma hedging to isolate a pure volatility bet — a variance swap's payoff is already defined in terms of realized variance, sidestepping that issue.

3. {#q3} How is a variance swap's payoff often replicated or priced in practice?
   - Using a single at-the-money option only
   - [x] Using a carefully weighted portfolio of options across many different strikes on the same underlying and expiration
   - Variance swaps have no relationship to the options market
   - Using only futures contracts, with no options involved
   > The aggregated volatility exposure a variance swap provides can be replicated with a weighted basket of options across strikes, which is part of how such swaps are typically priced.

4. {#q4} What kind of market participants typically use variance swaps?
   - Only individual retail investors trading small accounts
   - [x] More sophisticated institutional participants like hedge funds, volatility-focused funds, and dealers hedging their own options books
   - Variance swaps are not used by any real market participants
   - Only government central banks
   > Since variance swaps trade over-the-counter and require a negotiated counterparty relationship, they're typically the domain of institutional and professional participants rather than retail traders.

5. {#q5} Why does a variance swap's payoff have an outsized effect from large underlying moves?
   - Because the payoff is linear in the underlying's moves, like a simple volatility swap
   - [x] Because the payoff is quadratic in the underlying's moves — it's a "variance" swap, not a "volatility" swap — so large moves affect the payoff more than a simpler linear intuition might suggest
   - Because variance swaps only pay out on the exact settlement date
   - Large moves have no effect on a variance swap's payoff
   > Since variance is volatility squared, the swap's payoff scales quadratically with the size of underlying moves, giving large moves a disproportionately large effect compared to what a "volatility" swap (linear) would produce.

6. {#calc1} [calc] A variance swap has a strike of 20 and a vega notional of $10,000. Realized volatility ends at 25. The payoff is vega notional × (realized² − strike²) / (2 × strike). What does the buyer receive?
   - $50,000
   - $45,000
   - [x] $56,250
   - $12,500
   > The payoff is $10,000 × (625 − 400) / 40 = $56,250. It is larger than a simple $50,000 because the contract pays on variance.

7. {#calc2} [calc] A variance swap has a strike of 22 and a vega notional of $10,000. Realized volatility is 18. Using vega notional × (strike² − realized²) / (2 × strike), what does the seller of variance earn?
   - [x] About $36,364
   - $40,000
   - $20,000
   - About $2,900
   > The payoff is $10,000 × (484 − 324) / 44 ≈ $36,364.

8. {#bk1} [calc] A long variance swap has a vega notional of $100,000 and a strike of 20 volatility points. Realized volatility finishes at 24. What is the payoff? (Variance notional = vega notional / (2 × strike))
   - $400,000
   - −$440,000
   - [x] $440,000
   - $10,000
   > Variance notional = $100,000 / (2 × 20) = $2,500. Payoff = $2,500 × (24² − 20²) = $2,500 × 176 = $440,000.

9. {#bk2} [calc] A long variance swap has a vega notional of $50,000 and a strike of 16 volatility points. Realized volatility finishes at 12. What is the payoff? (Variance notional = vega notional / (2 × strike))
   - [x] −$175,000
   - −$200,000
   - $175,000
   - −$6,250
   > Variance notional = $50,000 / (2 × 16) = $1,562. Payoff = $1,562 × (12² − 16²) = $1,562 × -112 = −$175,000.
