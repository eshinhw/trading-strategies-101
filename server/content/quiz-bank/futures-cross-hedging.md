---
slug: futures-cross-hedging
---

# Quiz

1. {#q1} What is cross-hedging?
   - Hedging using a futures contract on the exact same asset you hold
   - [x] Hedging using a futures contract on a different but closely correlated asset, when no direct contract is available
   - Simultaneously hedging with both a call and a put option
   - A hedge that automatically adjusts itself daily
   > Cross-hedging is used when there's no liquid futures market on the exact asset you're exposed to, so you substitute a closely correlated instrument instead.

2. {#q2} What determines how effective a cross-hedge will be?
   - The number of exchanges the futures contract trades on
   - [x] The strength and stability of the historical price correlation between the held asset and the hedging instrument
   - The futures contract's expiration date, regardless of the underlying
   - Whether the trader uses a broker or trades directly
   > The stronger and more stable the correlation between the two assets' prices, the more effective the cross-hedge will be at offsetting risk.

3. {#q3} Compared to a direct hedge, a cross-hedge carries:
   - Less basis risk, since it uses a more liquid contract
   - [x] An additional layer of basis risk, from the price gap between the held asset and the futures' own underlying
   - No risk at all, since the correlation is always perfect
   - The exact same risk profile as holding no hedge
   > A cross-hedge adds a second source of basis risk on top of ordinary futures basis risk — the exposed asset and the futures' underlying aren't the same thing, so their prices can diverge.

4. {#q4} What is a "hedge ratio" used for in cross-hedging?
   - The interest rate charged on a margin account
   - [x] Determining how many futures contracts to use per unit of the exposure, often estimated via regression
   - The ratio of long to short traders in the market
   - A fixed 1:1 rule that never changes
   > A hedge ratio — often the slope of a regression of the exposed asset's returns against the futures' returns — tells the hedger the right sizing, rather than assuming a naive one-to-one match.

5. {#q5} A regional jet-fuel buyer who can't easily trade jet-fuel futures might cross-hedge using:
   - Wheat futures
   - [x] Heating oil or crude oil futures
   - Equity index futures
   - They cannot hedge at all
   > Jet fuel prices tend to move closely with other refined petroleum products like heating oil and crude oil, making them a workable, if imperfect, cross-hedge.

6. {#q6} [calc] A regression gives a hedge ratio of 0.85 for a 100,000-gallon jet-fuel exposure hedged with heating oil futures. How many gallon-equivalents of heating oil futures exposure should be used?
   - 100,000 gallons, a full one-to-one hedge
   - [x] 85,000 gallons (0.85 × 100,000)
   - 15,000 gallons
   - 185,000 gallons
   > The hedge ratio scales the notional hedge size: 0.85 × 100,000 gallons = 85,000 gallon-equivalents of heating oil futures, not a naive one-to-one match.

7. {#bk1} [calc] A firm must hedge $2,400,000 of exposure using futures on a related asset. The correlation between the two prices is 0.85, the exposure's volatility is 20% and the futures' volatility is 25%. Each futures contract has a notional value of $150,000. How many contracts (rounded to the nearest whole contract) minimize risk?
   - 16
   - [x] 11
   - 14
   - 20
   > Minimum-variance hedge ratio = correlation × exposure volatility / futures volatility = 0.85 × 20% / 25% = 0.680. Contracts = 0.680 × $2,400,000 / $150,000 = 10.9, about 11.

8. {#bk2} [calc] A firm must hedge $5,000,000 of exposure using futures on a related asset. The correlation between the two prices is 0.9, the exposure's volatility is 3% and the futures' volatility is 2.5%. Each futures contract has a notional value of $100,000. How many contracts (rounded to the nearest whole contract) minimize risk?
   - 50
   - 45
   - 42
   - [x] 54
   > Minimum-variance hedge ratio = correlation × exposure volatility / futures volatility = 0.9 × 3% / 2.5% = 1.080. Contracts = 1.080 × $5,000,000 / $100,000 = 54.0, about 54.

9. {#bk3} [calc] A firm must hedge $3,000,000 of exposure using futures on a related asset. The correlation between the two prices is 0.7, the exposure's volatility is 22% and the futures' volatility is 18%. Each futures contract has a notional value of $120,000. How many contracts (rounded to the nearest whole contract) minimize risk?
   - 25
   - [x] 21
   - 18
   - 20
   > Minimum-variance hedge ratio = correlation × exposure volatility / futures volatility = 0.7 × 22% / 18% = 0.856. Contracts = 0.856 × $3,000,000 / $120,000 = 21.4, about 21.

10. {#bk4} [calc] A cross hedge has a correlation of 0.8 between the exposure and the hedging future. What share of the exposure's price variance does the hedge remove?
   - 80%
   - 20%
   - [x] 64%
   - 89%
   > The variance reduction equals the correlation squared: 0.8² = 0.64, so 64% of the variance is removed.
