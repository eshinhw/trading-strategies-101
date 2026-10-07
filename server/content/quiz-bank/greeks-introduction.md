---
slug: greeks-introduction
---

# Quiz

1. {#q1} What does a Greek measure?
   - The color of an option
   - [x] How much an option's price changes when one input changes, holding the others constant
   - The number of contracts held
   - The date of expiration
   > Each Greek isolates the sensitivity of the price to one input.

2. {#q2} Which Greek measures sensitivity to the passage of time?
   - Delta
   - Vega
   - [x] Theta
   - Rho
   > Theta measures time decay, the change in price as time passes.

3. {#q3} A Greek is quoted per share. How do you find the effect on one standard contract?
   - Divide by 100
   - [x] Multiply by 100, since a contract covers 100 shares
   - Add 100
   - Nothing, it is already per contract
   > One contract covers 100 shares, so per-share Greeks are multiplied by 100.

4. {#q4} How are the Greeks of a multi-leg position found?
   - They are unrelated to the legs
   - [x] By adding the Greeks of each leg, adjusted for long or short and the number of contracts
   - By taking the largest leg only
   - By averaging the strikes
   > Greeks add across legs, so a position can be understood from its pieces.

5. {#q5} A position has a theta of −30. What does this mean, in dollars?
   - It gains 30 dollars a day from time
   - [x] It loses about 30 dollars a day from time decay, all else equal
   - It loses 30 dollars a year
   - It is unaffected by time
   > A negative theta means the position loses value as time passes.

6. {#calc1} [calc] A position has a delta of 80, theta of −45 a day and vega of 150 per volatility point. The stock rises $3, four quiet days pass and volatility rises 2 points. What is the total change?
   - +$600
   - [x] +$360
   - +$240
   - −$180
   > Delta adds 80 × $3 = $240, theta costs 4 × $45 = $180, and vega adds 2 × $150 = $300. The total is $240 − $180 + $300 = +$360.

7. {#bk1} [calc] A call option costs $5.00 and has a delta of 0.50. The stock rises $1 and nothing else changes. What is the approximate new option price?
   - $6.00
   - [x] $5.50
   - $5.05
   - $4.50
   > New price ≈ $5.00 + 0.50 × $1 = $5.50.
