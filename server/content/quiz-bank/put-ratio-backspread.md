---
slug: put-ratio-backspread
---

# Quiz

1. {#bk1} [calc] A trader builds a Put Ratio Backspread: sells one $100 put and buys two $95 puts, for a net debit of $1 per share. What is the maximum loss at expiration, per share?
   - $5
   - [x] $6
   - $1
   - $89
   > For this position (K1 = 100, K2 = 95, NS = 1, NL = 2, net debit = 1), the maximum loss is $6 per share. Formula: L_max = NS×(K1 - K2) - netCF.

2. {#bk2} [calc] A trader builds a Put Ratio Backspread: sells one $100 put and buys two $95 puts, for a net debit of $1 per share. What is the break-even stock price at expiration, per share?
   - $6
   - $5
   - $1
   - [x] $89
   > For this position (K1 = 100, K2 = 95, NS = 1, NL = 2, net debit = 1), the break-even stock price is $89 per share. Formula: S*_up = K1 - netCF/NS; S*_down = (NL×K2 - NS×K1 + netCF)/(NL-NS).

3. {#bk3} [calc] A trader builds a Put Ratio Backspread: sells one $100 put and buys two $95 puts, for a net debit of $1 per share. At expiration the stock is at $87. What is the trader's profit or loss per share, counting the premium?
   - −$2
   - [x] +$2
   - +$3
   - +$4
   > At $87 the option legs are worth +$3 per share before the premium, and the net premium adds −$1, for +$2 per share (given K1 = 100, K2 = 95, NS = 1, NL = 2, net debit = 1).

4. {#bk4} [calc] A trader builds a Put Ratio Backspread: sells one $100 put and buys two $95 puts, for a net debit of $1 per share. What is the maximum profit on 3 contracts (100 shares each), in dollars?
   - $267
   - $8,900
   - [x] $26,700
   - $35,600
   > The maximum profit is $89 per share. One contract covers 100 shares, so 3 contracts give $89 × 100 × 3 = $26,700.

5. {#bk5} [calc] A trader builds a Put Ratio Backspread: sells one $100 put and buys two $95 puts, for a net debit of $1 per share. At expiration the stock is at $112. What is the total profit or loss on 3 contracts (100 shares each), in dollars?
   - [x] −$300
   - −$3
   - −$100
   - +$300
   > Per share the position makes −$1 at $112. For 3 contracts: −$1 × 100 × 3 = −$300.

6. {#bk6} [calc] A trader builds a Put Ratio Backspread: sells one $100 put and buys two $95 puts, for a net debit of $1 per share. How much cash is paid up front in total if the trader opens 8 contracts (100 shares each)?
   - $8
   - $100
   - [x] $800
   - $900
   > The net debit is $1 per share. For 8 contracts: $1 × 100 × 8 = $800.

7. {#bk7} [calc] A trader builds a Put Ratio Backspread: sells one $100 put and buys two $95 puts, for a net debit of $1 per share. What is the ratio of maximum profit to maximum loss?
   - [x] 14.83 to 1
   - 0.07 to 1
   - 89 to 1
   - 6 to 1
   > Maximum profit is $89 and maximum loss is $6 per share, so the ratio is $89 / $6 = 14.83 to 1.
