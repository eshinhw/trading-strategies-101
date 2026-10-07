---
slug: long-call-condor
---

# Quiz

1. {#bk1} [calc] A trader builds a Long Call Condor: buys one $85 call, sells one $95 call, sells one $105 call, and buys one $115 call, for a net debit of $3 per share. What is the maximum loss at expiration, per share?
   - $7
   - $30
   - [x] $3
   - $88
   > For this position (K1 = 85, K2 = 95, K3 = 105, K4 = 115, net debit = 3), the maximum loss is $3 per share. Formula: L_max = D.

2. {#bk2} [calc] A trader builds a Long Call Condor: buys one $85 call, sells one $95 call, sells one $105 call, and buys one $115 call, for a net debit of $3 per share. What is the maximum profit at expiration, per share?
   - [x] $7
   - $3
   - $30
   - $88
   > For this position (K1 = 85, K2 = 95, K3 = 105, K4 = 115, net debit = 3), the maximum profit is $7 per share. Formula: P_max = κ - D, equidistant strikes with gap κ.

3. {#bk3} [calc] A trader builds a Long Call Condor: buys one $85 call, sells one $95 call, sells one $105 call, and buys one $115 call, for a net debit of $3 per share. What is the upper break-even stock price at expiration, per share?
   - $88
   - $30
   - [x] $112
   - $7
   > For this position (K1 = 85, K2 = 95, K3 = 105, K4 = 115, net debit = 3), the upper break-even stock price is $112 per share. Formula: S*_up = K4 - D; S*_down = K1 + D.

4. {#bk4} [calc] A trader builds a Long Call Condor: buys one $85 call, sells one $95 call, sells one $105 call, and buys one $115 call, for a net debit of $3 per share. At expiration the stock is at $103. What is the trader's profit or loss per share, counting the premium?
   - −$7
   - [x] +$7
   - +$10
   - +$13
   > At $103 the option legs are worth +$10 per share before the premium, and the net premium adds −$3, for +$7 per share (given K1 = 85, K2 = 95, K3 = 105, K4 = 115, net debit = 3).

5. {#bk5} [calc] A trader builds a Long Call Condor: buys one $85 call, sells one $95 call, sells one $105 call, and buys one $115 call, for a net debit of $3 per share. What is the maximum loss on 8 contracts (100 shares each), in dollars?
   - $24
   - $300
   - $2,700
   - [x] $2,400
   > The maximum loss is $3 per share. One contract covers 100 shares, so 8 contracts give $3 × 100 × 8 = $2,400.
