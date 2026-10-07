---
slug: volatility-risk-premium
---

# Quiz

1. {#q1} What is the "volatility risk premium"?
   - The extra return investors earn from holding volatile stocks
   - [x] The historical tendency for implied volatility to run higher, on average, than the volatility that actually ends up realized
   - A fee charged by exchanges for trading options
   - The difference between two different stocks' volatility levels
   > The volatility risk premium refers to the persistent gap where options' implied volatility has tended to overstate the volatility that actually materializes, similar to how insurance premiums tend to exceed expected claims.

2. {#q2} Why does the volatility risk premium exist, in terms of an insurance analogy?
   - Because options buyers are irrational and always overpay
   - [x] Buyers of options-based protection are willing to pay more than the "fair," purely statistical price, because that protection has value beyond its expected payout
   - Because implied volatility is always identical to realized volatility
   - Because options markets are illiquid and rarely traded
   > Similar to insurance, buyers of downside/upside protection via options are often willing to pay a premium above the statistically fair price for the value of that protection itself.

3. {#q3} How does a strategy typically harvest the volatility risk premium?
   - By buying as many options as possible across every available underlying
   - [x] By systematically selling options (or variance swaps), often short-dated and out-of-the-money, across a diversified set of underlyings
   - By never trading options at all
   - By holding only risk-free government bonds
   > The strategy sells options or variance exposure to collect the premium, expecting realized volatility to average out below what was implied over many trades.

4. {#q4} What risk profile does a volatility-risk-premium strategy typically exhibit?
   - Guaranteed steady returns with no possibility of loss
   - [x] Steady, positive returns most of the time, punctuated by occasional sharp losses when realized volatility spikes well above what was implied
   - Large losses every single trading day
   - Returns that have no relationship to volatility whatsoever
   > Like other volatility-selling strategies, this one behaves like collecting insurance premiums — small, steady gains most of the time, with occasional larger losses when the underlying risk materializes.

5. {#q5} Why do disciplined volatility-risk-premium strategies typically apply risk controls like position limits and diversification?
   - Risk controls are legally required for all options trading
   - [x] Because the strategy's long-run edge depends on surviving occasional bad outcomes rather than being wiped out by them
   - Risk controls guarantee the strategy will never lose money
   - Diversification eliminates the volatility risk premium entirely
   > Given the asymmetric risk of occasional sharp losses, careful sizing and diversification help ensure the strategy can survive a bad outcome and continue collecting the premium over the long run.

6. {#calc1} [calc] A trader sells volatility with a vega of $10,000 per volatility point when implied volatility is 20% and realized volatility ends at 15%. What is the gain?
   - [x] $50,000
   - $5,000
   - $150,000
   - $200,000
   > The gap is 20 − 15 = 5 volatility points, and 5 × $10,000 = $50,000.

7. {#bk1} [calc] A trader sells a variance swap with a strike of 19 volatility points and a vega notional of $50,000. Realized volatility is 15. What is the profit (variance notional = vega notional / (2 × strike))?
   - [x] $178,947
   - $200,000
   - $50,000
   - $13,158
   > Variance notional = $50,000 / 38 = $1,315.79. A seller earns notional × (strike² − realized²) = $1,315.79 × (361 − 225) = $178,947.

8. {#bk2} [calc] Implied volatility is 18 and realized volatility is 14. What is the volatility risk premium, and what is it as a percentage of implied?
   - 4 points, or 29%
   - 32 points, or 78%
   - [x] 4 points, or 22%
   - 4 points, or 4%
   > Premium = 18 − 14 = 4 points. As a percentage of implied: 4 / 18 = 22%.

9. {#bk3} [calc] A volatility-selling strategy earns an average premium of 3 volatility points on a vega notional of $200,000 per point. What is the average yearly premium?
   - [x] $600,000
   - $200,000
   - $66,667
   - $6,000,000
   > Premium = 3 points × $200,000 = $600,000.
