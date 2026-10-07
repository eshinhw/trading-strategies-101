---
slug: call-ratio-backspread
---

# Quiz

1. {#bk1} [calc] A trader builds a Call Ratio Backspread: sells one $100 call and buys two $105 calls, for a net debit of $1 per share. What is the break-even stock price at expiration, per share?
   - $6
   - [x] $111
   - $5
   - $1
   > For this position (K1 = 100, K2 = 105, NS = 1, NL = 2, net debit = 1), the break-even stock price is $111 per share. Formula: S*_down = K1 + netCF/NS; S*_up = (NL×K2 - NS×K1 - netCF)/(NL-NS).

2. {#bk2} [calc] A trader builds a Call Ratio Backspread: sells one $100 call and buys two $105 calls, for a net debit of $1 per share. At expiration the stock is at $106. What is the trader's profit or loss per share, counting the premium?
   - +$5
   - −$4
   - −$3
   - [x] −$5
   > At $106 the option legs are worth −$4 per share before the premium, and the net premium adds −$1, for −$5 per share (given K1 = 100, K2 = 105, NS = 1, NL = 2, net debit = 1).

3. {#bk3} [calc] A trader builds a Call Ratio Backspread: sells one $100 call and buys two $105 calls, for a net debit of $1 per share. What is the maximum loss on 8 contracts (100 shares each), in dollars?
   - $48
   - [x] $4,800
   - $600
   - $5,400
   > The maximum loss is $6 per share. One contract covers 100 shares, so 8 contracts give $6 × 100 × 8 = $4,800.
