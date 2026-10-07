---
slug: futures-interest-rate-risk-hedging
---

# Quiz

1. {#q1} A bond portfolio manager worried that interest rates will rise, pushing bond prices down, should typically:
   - Buy more bonds immediately
   - [x] Sell (short) interest rate futures
   - Buy interest rate futures
   - Interest rate futures cannot hedge bond portfolios
   > Since bond prices fall when rates rise, a manager hedges that risk by shorting interest rate futures — a rate rise then produces a gain on the futures position that offsets the portfolio's loss.

2. {#q2} A company planning to borrow money in three months, worried rates will rise before then, would hedge by:
   - Going long interest rate futures
   - [x] Going short interest rate futures (or a similar rate-locking instrument)
   - Waiting and hoping rates fall
   - Buying more physical assets
   > A short futures position gains if rates rise, offsetting the higher interest cost the company will face when it actually borrows.

3. {#q3} Why does a fixed-rate bond's price move inversely to interest rates?
   - It doesn't — bond prices and rates move in the same direction
   - [x] As rates rise, the bond's fixed coupon becomes less attractive relative to new bonds paying higher rates, so its price falls
   - Bond prices are set randomly and unrelated to rates
   - Only floating-rate bonds are affected by interest rates
   > A fixed-rate bond's value falls when new bonds offer higher yields, since investors won't pay full price for a lower fixed payment stream — that's the inverse price/rate relationship.

4. {#q4} What does "duration" measure, in the context of sizing an interest rate hedge?
   - How many days until the futures contract expires
   - [x] A bond's sensitivity to a given change in interest rates
   - The length of the futures contract's trading day
   - The number of coupon payments remaining
   > Duration measures how much a bond's price is expected to move for a given change in rates — longer-duration bonds are more rate-sensitive, so hedgers size their futures position with duration in mind.

5. {#q5} Why might an interest rate futures hedge be imperfect even when correctly sized?
   - Futures contracts settle instantly, leaving no room for error
   - [x] The specific bonds held may not move in perfect lockstep with the futures contract's benchmark instrument — basis risk
   - Interest rate futures don't actually exist
   - Hedging always doubles the original risk
   > As with any futures hedge, the hedged position and the futures' own underlying benchmark aren't identical, so their prices can diverge — a source of basis risk that keeps even a well-sized hedge from being perfect.

6. {#q6} [calc] A $10 million portfolio with 7-year duration is hedged with Treasury futures (9-year duration, $100,000 notional each). About how many contracts should be shorted?
   - 9 contracts
   - 70 contracts
   - [x] About 78 contracts
   - 900 contracts
   > ($10,000,000 × 7) ÷ ($100,000 × 9) = $70,000,000 ÷ $900,000 ≈ 78 contracts — the duration-weighted hedge size, not a round or unadjusted number.

7. {#bk1} [calc] A bond portfolio worth $50,000,000 has a modified duration of 6.5. A Treasury future is worth $110,000 per contract with a duration of 6.0. How many futures should be sold to hedge the portfolio's rate risk (nearest whole contract)?
   - [x] 492
   - 455
   - 2,955
   - 420
   > Contracts = (portfolio duration × portfolio value) / (futures duration × futures value) = (6.5 × $50,000,000) / (6.0 × $110,000) = 492.4, about 492.

8. {#bk2} [calc] A bond portfolio worth $120,000,000 has a modified duration of 8.0. A Treasury future is worth $100,000 per contract with a duration of 7.2. How many futures should be sold to hedge the portfolio's rate risk (nearest whole contract)?
   - 1,200
   - 9,600
   - [x] 1,333
   - 1,080
   > Contracts = (portfolio duration × portfolio value) / (futures duration × futures value) = (8.0 × $120,000,000) / (7.2 × $100,000) = 1333.3, about 1333.

9. {#bk3} [calc] A bond portfolio worth $30,000,000 has a modified duration of 4.2. A Treasury future is worth $120,000 per contract with a duration of 5.0. How many futures should be sold to hedge the portfolio's rate risk (nearest whole contract)?
   - [x] 210
   - 250
   - 1,050
   - 298
   > Contracts = (portfolio duration × portfolio value) / (futures duration × futures value) = (4.2 × $30,000,000) / (5.0 × $120,000) = 210.0, about 210.

10. {#bk4} [calc] A portfolio has a DV01 of $32,000 and a Treasury future has a DV01 of $80 per contract. How many contracts must be sold to neutralize the portfolio's DV01?
   - 40
   - 4,000
   - 2,560,000
   - [x] 400
   > Contracts = portfolio DV01 / future DV01 = $32,000 / $80 = 400.

11. {#bk5} [calc] A portfolio with a DV01 of $32,000 is hedged by selling 380 futures contracts with a DV01 of $80 each. Yields rise 10 basis points. What is the net profit or loss of portfolio plus hedge?
   - +$16,000
   - [x] −$16,000
   - $0
   - −$320,000
   > The portfolio loses 10 × $32,000 = $320,000. The short futures gain 380 × $80 × 10 = $304,000. Net = −$16,000, the unhedged DV01 of 20 × $80 = $1,600 per basis point.
