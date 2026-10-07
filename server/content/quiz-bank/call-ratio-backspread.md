---
slug: call-ratio-backspread
---

# Quiz

1. {#q1} What view does a call ratio backspread express?
   - The stock will stay in a narrow range
   - [x] Strongly bullish, expecting a sharp rally, while avoiding a large loss from a moderate move
   - The stock will fall sharply, so the short calls gain value while the long calls provide only a small cushion
   - The stock will rise slightly, so the position earns its maximum profit near the strikes with very little risk
   > It profits most from a big rally and has limited, concentrated risk.

2. {#q2} Why can a call ratio backspread often be opened for little cost?
   - The long calls are given away free by the exchange, which is why the position can sometimes cost nothing
   - The short calls are worthless at the start, so they add no cost and the long calls are simply discounted
   - [x] The premium from the short calls pays for the larger number of long calls
   - It is funded by selling puts, whose premium is large enough to pay for each of the long calls in full
   > More long calls than short calls, financed by the short option's premium.

3. {#q3} How is a call ratio backspread built?
   - Buy a near-the-money call and sell more calls than you bought at a higher strike, collecting extra premium
   - Sell a call and buy a put at the same strike, so that the position is protected against a decline in price
   - Buy a call and sell a call at the same strike, so that the two legs cancel out most of each other's value
   - [x] Sell a near-the-money call and buy more calls than you sold at a higher strike, same expiration
   > The long calls outnumber the short calls.

4. {#q4} Where is the risk of a call ratio backspread concentrated?
   - [x] In a modest range just above the short strike, where the long calls haven't yet paid off
   - At very high prices, where the short call has lost value and the long calls are limiting the final profit
   - Below the short strike only
   - Evenly across all prices, because the long and short calls offset each other at every possible stock price
   > A flat stock near the strikes produces a limited loss, while a big rally is rewarded.

5. {#calc1} [calc] A trader builds a Call Ratio Backspread: sells one $100 call and buys two $105 calls, for a net debit of $1 per share. What is the maximum loss at expiration, per share?
   - [x] $6
   - $5
   - $1
   - $111
   > For this position (K1 = 100, K2 = 105, NS = 1, NL = 2, net debit = 1), the maximum loss is $6 per share. Formula: L_max = NS×(K2 - K1) - netCF.

6. {#bk1} [calc] A trader builds a Call Ratio Backspread: sells one $100 call and buys two $105 calls, for a net debit of $1 per share. What is the break-even stock price at expiration, per share?
   - $6
   - [x] $111
   - $5
   - $1
   > For this position (K1 = 100, K2 = 105, NS = 1, NL = 2, net debit = 1), the break-even stock price is $111 per share. Formula: S*_down = K1 + netCF/NS; S*_up = (NL×K2 - NS×K1 - netCF)/(NL-NS).

7. {#bk2} [calc] A trader builds a Call Ratio Backspread: sells one $100 call and buys two $105 calls, for a net debit of $1 per share. At expiration the stock is at $106. What is the trader's profit or loss per share, counting the premium?
   - +$5
   - −$4
   - −$3
   - [x] −$5
   > At $106 the option legs are worth −$4 per share before the premium, and the net premium adds −$1, for −$5 per share (given K1 = 100, K2 = 105, NS = 1, NL = 2, net debit = 1).

8. {#bk3} [calc] A trader builds a Call Ratio Backspread: sells one $100 call and buys two $105 calls, for a net debit of $1 per share. What is the maximum loss on 8 contracts (100 shares each), in dollars?
   - $48
   - [x] $4,800
   - $600
   - $5,400
   > The maximum loss is $6 per share. One contract covers 100 shares, so 8 contracts give $6 × 100 × 8 = $4,800.

9. {#bk4} [calc] A trader builds a Call Ratio Backspread: sells one $100 call and buys two $105 calls, for a net debit of $1 per share. The stock is at $103 at expiration. What is the profit or loss per share, counting the premium?
   - +$4
   - −$3
   - [x] −$4
   - −$2
   > At $103 the legs are worth −$3 per share before the premium, and the net premium adds −$1, for −$4 per share (given K1 = 100, K2 = 105, NS = 1, NL = 2, net debit = 1).

10. {#bk5} [calc] A trader builds a Call Ratio Backspread: sells one $100 call and buys two $105 calls, for a net debit of $1 per share. At expiration the stock is at $104. What is the total profit or loss on 6 contracts (100 shares each), in dollars?
   - [x] −$3,000
   - −$30
   - −$500
   - +$3,000
   > Per share the position makes −$5 at $104. For 6 contracts: −$5 × 100 × 6 = −$3,000.

11. {#bk6} [calc] A trader builds a Call Ratio Backspread: sells one $100 call and buys two $105 calls, for a net debit of $1 per share. How much cash is paid up front in total if the trader opens 6 contracts (100 shares each)?
   - $6
   - $100
   - [x] $600
   - $700
   > The net debit is $1 per share. For 6 contracts: $1 × 100 × 6 = $600.
