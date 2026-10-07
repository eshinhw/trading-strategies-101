---
slug: futures-interest-rate-risk-hedging
title: Interest Rate Risk Hedging
summary: Using interest rate futures to protect a bond portfolio, loan, or borrowing plan against unfavorable rate moves.
---

## Hedging a Bond Portfolio

Interest rate futures — Treasury note or bond futures, SOFR futures — let market participants hedge against the risk that interest rates move against them. Bond prices move inversely to interest rates: when rates rise, existing bond prices fall. A bond portfolio manager worried about rising rates can sell (short) interest rate futures — if rates rise and their bond portfolio loses value, the short futures position gains, offsetting the loss.

## Hedging a Future Borrowing Cost

The mirror case: a company planning to borrow money in three months is worried rates will rise before they lock in a loan, raising their future borrowing cost. They can hedge with a short position in interest rate futures, so that if rates do rise, a gain on the futures position offsets the higher interest expense they'll pay on the loan.

## Accounting for Duration

Because bonds of different maturities respond differently to a given change in rates — longer-maturity bonds are more sensitive — hedgers commonly account for duration, a measure of interest-rate sensitivity, when sizing a rate hedge, using more or fewer futures contracts depending on how sensitive their actual portfolio is compared to the futures contract's own underlying instrument.

## Where the Hedge Falls Short

As with other futures hedges, an interest-rate hedge isn't perfect: the specific bonds a portfolio holds may not move in perfect lockstep with the futures contract's benchmark instrument, and getting the duration-matched sizing wrong can leave the hedge over- or under-protecting the actual position.

## Example

A manager holds a bond portfolio and hedges it with Treasury futures.

- Portfolio value: $10,000,000, duration 7 years
- Futures contract: notional $100,000, duration 9 years

**Contracts to short**

$$
\frac{\$10{,}000{,}000 \times 7}{\$100{,}000 \times 9} = \frac{\$70{,}000{,}000}{\$900{,}000} = 77.8 \approx \boxed{78 \text{ contracts}}
$$

**Check: rates rise 1 percentage point**

$$
\text{Portfolio} = -7\% \times \$10{,}000{,}000 = -\$700{,}000
$$

$$
\text{Short futures} = 78 \times \$100{,}000 \times 9 \times 1\% = +\$702{,}000
$$

The $2,000 left over is rounding. Picking a round 100 contracts with no duration adjustment would hedge $900,000 per 1% move, which is over-hedged by about 29%.

# Quiz

1. A bond portfolio manager worried that interest rates will rise, pushing bond prices down, should typically:
   - Buy more bonds immediately
   - [x] Sell (short) interest rate futures
   - Buy interest rate futures
   - Interest rate futures cannot hedge bond portfolios
   > Since bond prices fall when rates rise, a manager hedges that risk by shorting interest rate futures — a rate rise then produces a gain on the futures position that offsets the portfolio's loss.

2. A company planning to borrow money in three months, worried rates will rise before then, would hedge by:
   - Going long interest rate futures
   - [x] Going short interest rate futures (or a similar rate-locking instrument)
   - Waiting and hoping rates fall
   - Buying more physical assets
   > A short futures position gains if rates rise, offsetting the higher interest cost the company will face when it actually borrows.

3. Why does a fixed-rate bond's price move inversely to interest rates?
   - It doesn't — bond prices and rates move in the same direction
   - [x] As rates rise, the bond's fixed coupon becomes less attractive relative to new bonds paying higher rates, so its price falls
   - Bond prices are set randomly and unrelated to rates
   - Only floating-rate bonds are affected by interest rates
   > A fixed-rate bond's value falls when new bonds offer higher yields, since investors won't pay full price for a lower fixed payment stream — that's the inverse price/rate relationship.

4. What does "duration" measure, in the context of sizing an interest rate hedge?
   - How many days until the futures contract expires
   - [x] A bond's sensitivity to a given change in interest rates
   - The length of the futures contract's trading day
   - The number of coupon payments remaining
   > Duration measures how much a bond's price is expected to move for a given change in rates — longer-duration bonds are more rate-sensitive, so hedgers size their futures position with duration in mind.

5. Why might an interest rate futures hedge be imperfect even when correctly sized?
   - Futures contracts settle instantly, leaving no room for error
   - [x] The specific bonds held may not move in perfect lockstep with the futures contract's benchmark instrument — basis risk
   - Interest rate futures don't actually exist
   - Hedging always doubles the original risk
   > As with any futures hedge, the hedged position and the futures' own underlying benchmark aren't identical, so their prices can diverge — a source of basis risk that keeps even a well-sized hedge from being perfect.

6. [calc] A $10 million portfolio with 7-year duration is hedged with Treasury futures (9-year duration, $100,000 notional each). About how many contracts should be shorted?
   - 9 contracts
   - 70 contracts
   - [x] About 78 contracts
   - 900 contracts
   > ($10,000,000 × 7) ÷ ($100,000 × 9) = $70,000,000 ÷ $900,000 ≈ 78 contracts — the duration-weighted hedge size, not a round or unadjusted number.
