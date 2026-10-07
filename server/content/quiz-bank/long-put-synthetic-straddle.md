---
slug: long-put-synthetic-straddle
---

# Quiz

1. {#bk1} [calc] A trader builds a Long Put Synthetic Straddle: owns the stock, bought at $100, and buys two $100 puts, with a net option premium of $8 paid. What is the maximum loss at expiration, per share?
   - $92
   - $108
   - [x] $8
   - $9
   > For this position (S0 = 100, K = 100, net debit = 8), the maximum loss is $8 per share. Formula: L_max = D - (K - S0).

2. {#bk2} [calc] A trader builds a Long Put Synthetic Straddle: owns the stock, bought at $100, and buys two $100 puts, with a net option premium of $8 paid. What is the upper break-even stock price at expiration, per share?
   - [x] $108
   - $92
   - $8
   - $109
   > For this position (S0 = 100, K = 100, net debit = 8), the upper break-even stock price is $108 per share. Formula: S*_up = S0 + D; S*_down = 2K - S0 - D.

3. {#bk3} [calc] A trader builds a Long Put Synthetic Straddle: owns the stock, bought at $100, and buys two $100 puts, with a net option premium of $8 paid. At expiration the stock is at $103. What is the trader's profit or loss per share, counting the premium?
   - +$5
   - +$3
   - [x] −$5
   - +$11
   > At $103 the option legs are worth +$3 per share before the premium, and the net premium adds −$8, for −$5 per share (given S0 = 100, K = 100, net debit = 8).

4. {#bk4} [calc] A trader builds a Long Put Synthetic Straddle: owns the stock, bought at $100, and buys two $100 puts, with a net option premium of $8 paid. What is the maximum loss on 8 contracts (100 shares each), in dollars?
   - $64
   - [x] $6,400
   - $800
   - $7,200
   > The maximum loss is $8 per share. One contract covers 100 shares, so 8 contracts give $8 × 100 × 8 = $6,400.
