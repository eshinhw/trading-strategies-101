---
slug: put-ratio-backspread
---

# Quiz

1. {#q1} What view does a put ratio backspread express?
   - [x] Strongly bearish, expecting a sharp decline, while avoiding a large loss from a moderate move
   - The stock will stay in a narrow range
   - The stock will rise sharply, so the short puts gain value while the long puts provide only a small cushion
   - The stock will fall slightly, so the position earns its maximum profit near the strikes with very little risk
   > It profits most from a big decline and has limited, concentrated risk.

2. {#q2} Why can a put ratio backspread often be opened for little cost?
   - The long puts are given away free by the exchange, which is why the position can sometimes cost nothing
   - [x] The premium from the short put pays for the larger number of long puts
   - The short puts are worthless at the start, so they add no cost and the long puts are simply discounted
   - It is funded by selling calls
   > More long puts than short puts, financed by the short option's premium.

3. {#q3} How is a put ratio backspread built?
   - Buy a near-the-money put and sell more puts than you bought at a lower strike, collecting extra premium
   - Sell a put and buy a call at the same strike, so that the position is protected against a rise in price
   - [x] Sell a near-the-money put and buy more puts than you sold at a lower strike, same expiration
   - Buy a put and sell a put at the same strike, so that the two legs cancel out most of each other's value
   > The long puts outnumber the short puts.

4. {#q4} Where is the risk of a put ratio backspread concentrated?
   - At very low prices, where the short put has lost value and the long puts are limiting the final profit
   - Above the short strike only, where all of the options expire worthless and the premium is lost in full
   - Evenly across all prices, because the long and short puts offset each other at every possible stock price
   - [x] In a modest range just below the short strike, where the long puts haven't yet paid off
   > A flat stock near the strikes produces a limited loss, while a big decline is rewarded.

5. {#calc1} [calc] A trader builds a Put Ratio Backspread: sells one $100 put and buys two $95 puts, for a net debit of $1 per share. What is the maximum profit at expiration, per share?
   - $6
   - $5
   - $1
   - [x] $89
   > For this position (K1 = 100, K2 = 95, NS = 1, NL = 2, net debit = 1), the maximum profit is $89 per share. Formula: P_max = NL×K2 - NS×K1 + netCF.

6. {#bk1} [calc] A trader builds a Put Ratio Backspread: sells one $100 put and buys two $95 puts, for a net debit of $1 per share. What is the maximum loss at expiration, per share?
   - $5
   - [x] $6
   - $1
   - $89
   > For this position (K1 = 100, K2 = 95, NS = 1, NL = 2, net debit = 1), the maximum loss is $6 per share. Formula: L_max = NS×(K1 - K2) - netCF.

7. {#bk2} [calc] A trader builds a Put Ratio Backspread: sells one $100 put and buys two $95 puts, for a net debit of $1 per share. What is the break-even stock price at expiration, per share?
   - $6
   - $5
   - $1
   - [x] $89
   > For this position (K1 = 100, K2 = 95, NS = 1, NL = 2, net debit = 1), the break-even stock price is $89 per share. Formula: S*_up = K1 - netCF/NS; S*_down = (NL×K2 - NS×K1 + netCF)/(NL-NS).

8. {#bk3} [calc] A trader builds a Put Ratio Backspread: sells one $100 put and buys two $95 puts, for a net debit of $1 per share. At expiration the stock is at $87. What is the trader's profit or loss per share, counting the premium?
   - −$2
   - [x] +$2
   - +$3
   - +$4
   > At $87 the option legs are worth +$3 per share before the premium, and the net premium adds −$1, for +$2 per share (given K1 = 100, K2 = 95, NS = 1, NL = 2, net debit = 1).

9. {#bk4} [calc] A trader builds a Put Ratio Backspread: sells one $100 put and buys two $95 puts, for a net debit of $1 per share. What is the maximum profit on 3 contracts (100 shares each), in dollars?
   - $267
   - $8,900
   - [x] $26,700
   - $35,600
   > The maximum profit is $89 per share. One contract covers 100 shares, so 3 contracts give $89 × 100 × 3 = $26,700.

10. {#bk5} [calc] A trader builds a Put Ratio Backspread: sells one $100 put and buys two $95 puts, for a net debit of $1 per share. At expiration the stock is at $112. What is the total profit or loss on 3 contracts (100 shares each), in dollars?
   - [x] −$300
   - −$3
   - −$100
   - +$300
   > Per share the position makes −$1 at $112. For 3 contracts: −$1 × 100 × 3 = −$300.

11. {#bk6} [calc] A trader builds a Put Ratio Backspread: sells one $100 put and buys two $95 puts, for a net debit of $1 per share. How much cash is paid up front in total if the trader opens 8 contracts (100 shares each)?
   - $8
   - $100
   - [x] $800
   - $900
   > The net debit is $1 per share. For 8 contracts: $1 × 100 × 8 = $800.

12. {#bk7} [calc] A trader builds a Put Ratio Backspread: sells one $100 put and buys two $95 puts, for a net debit of $1 per share. What is the ratio of maximum profit to maximum loss?
   - [x] 14.83 to 1
   - 0.07 to 1
   - 89 to 1
   - 6 to 1
   > Maximum profit is $89 and maximum loss is $6 per share, so the ratio is $89 / $6 = 14.83 to 1.
