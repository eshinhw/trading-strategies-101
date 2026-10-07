---
slug: greeks-gamma
---

# Quiz

1. {#q1} What does gamma measure?
   - How the option's price changes with time
   - [x] How much delta changes for a 1 dollar move in the stock
   - The option's volatility
   - The interest rate sensitivity
   > Gamma is the rate of change of delta.

2. {#q2} [calc] A call has a delta of 0.50 and a gamma of 0.04. The stock rises 1 dollar. What is the new delta, roughly?
   - 0.46
   - 0.50
   - [x] 0.54
   - 1.04
   > The new delta is about 0.50 + 0.04 × 1 = 0.54.

3. {#q3} Where is gamma typically highest?
   - For deep in-the-money options with a long time left
   - [x] For at-the-money options close to expiration
   - For far out-of-the-money options
   - It is the same everywhere
   > Delta of an at-the-money, near-expiry option can swing quickly, so its gamma is largest.

4. {#q4} What gamma does a position of long options have?
   - Negative gamma
   - [x] Positive gamma, so delta moves in the holder's favor as the stock moves
   - Zero gamma
   - Gamma that depends only on the strike
   > Buying options gives positive gamma, and selling options gives negative gamma.

5. {#q5} What is the usual trade-off of positive gamma?
   - It reduces all risk at no cost
   - [x] It is typically paid for through time decay, or negative theta
   - It increases dividends
   - It always loses money
   > Positions that benefit from large moves usually pay for it with time decay.

6. {#bk1} [calc] A call has a delta of 0.50 and a gamma of 0.04. If the stock rises $2, what is the approximate new delta?
   - 0.54
   - [x] 0.58
   - 0.52
   - 0.60
   > New delta ≈ 0.50 + 0.04 × 2 = 0.58.

7. {#bk2} [calc] A call has a delta of 0.30 and a gamma of 0.05. If the stock falls $3, what is the approximate new delta?
   - 0.45
   - 0.25
   - 0.00
   - [x] 0.15
   > New delta ≈ 0.30 − 0.05 × 3 = 0.15.

8. {#bk3} [calc] A call with delta 0.50 and gamma 0.04 sees the stock rise $2. Using delta and gamma, what is the approximate price change?
   - +$1.00
   - [x] +$1.08
   - +$1.16
   - +$0.08
   > Change ≈ delta × move + ½ × gamma × move² = 0.50 × 2 + 0.5 × 0.04 × 4 = $1.00 + $0.08 = $1.08.
