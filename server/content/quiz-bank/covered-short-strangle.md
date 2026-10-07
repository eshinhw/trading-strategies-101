---
slug: covered-short-strangle
---

# Quiz

1. {#bk1} [calc] A trader builds a Covered Short Strangle: owns the stock, bought at $100, sells one $105 call, and sells one $95 put, with a net option premium of $5 received. What is the maximum loss at expiration, per share?
   - $95
   - $10
   - [x] $190
   - $5
   > For this position (S0 = 100, K = 105, Kp = 95, net credit = 5), the maximum loss is $190 per share. Formula: L_max = S0 + K' - C.

2. {#bk2} [calc] A trader builds a Covered Short Strangle: owns the stock, bought at $100, sells one $105 call, and sells one $95 put, with a net option premium of $5 received. What is the break-even stock price at expiration, per share?
   - [x] $95
   - $10
   - $5
   - $190
   > For this position (S0 = 100, K = 105, Kp = 95, net credit = 5), the break-even stock price is $95 per share. Formula: n/a (two-sided, solve numerically).

3. {#bk3} [calc] A trader builds a Covered Short Strangle: owns the stock, bought at $100, sells one $105 call, and sells one $95 put, with a net option premium of $5 received. At expiration the stock is at $87. What is the trader's profit or loss per share, counting the premium?
   - +$16
   - −$21
   - [x] −$16
   - −$6
   > At $87 the option legs are worth −$21 per share before the premium, and the net premium adds +$5, for −$16 per share (given S0 = 100, K = 105, Kp = 95, net credit = 5).

4. {#bk4} [calc] A trader builds a Covered Short Strangle: owns the stock, bought at $100, sells one $105 call, and sells one $95 put, with a net option premium of $5 received. At expiration the stock is at $103. What is the trader's profit or loss per share, counting the premium?
   - −$8
   - [x] +$8
   - +$3
   - +$18
   > At $103 the option legs are worth +$3 per share before the premium, and the net premium adds +$5, for +$8 per share (given S0 = 100, K = 105, Kp = 95, net credit = 5).

5. {#bk5} [calc] A trader builds a Covered Short Strangle: owns the stock, bought at $100, sells one $105 call, and sells one $95 put, with a net option premium of $5 received. What is the maximum profit on 10 contracts (100 shares each), in dollars?
   - $100
   - $1,000
   - $11,000
   - [x] $10,000
   > The maximum profit is $10 per share. One contract covers 100 shares, so 10 contracts give $10 × 100 × 10 = $10,000.
