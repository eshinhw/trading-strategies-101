---
slug: put-ratio-backspread
---

# Quiz

1. What view does a put ratio backspread express?
   - [x] Strongly bearish, expecting a sharp decline, while avoiding a large loss from a moderate move
   - The stock will stay in a narrow range
   - The stock will rise sharply, so the short puts gain value while the long puts provide only a small cushion
   - The stock will fall slightly, so the position earns its maximum profit near the strikes with very little risk
   > It profits most from a big decline and has limited, concentrated risk.

2. Why can a put ratio backspread often be opened for little cost?
   - The long puts are given away free by the exchange, which is why the position can sometimes cost nothing
   - [x] The premium from the short put pays for the larger number of long puts
   - The short puts are worthless at the start, so they add no cost and the long puts are simply discounted
   - It is funded by selling calls
   > More long puts than short puts, financed by the short option's premium.

3. How is a put ratio backspread built?
   - Buy a near-the-money put and sell more puts than you bought at a lower strike, collecting extra premium
   - Sell a put and buy a call at the same strike, so that the position is protected against a rise in price
   - [x] Sell a near-the-money put and buy more puts than you sold at a lower strike, same expiration
   - Buy a put and sell a put at the same strike, so that the two legs cancel out most of each other's value
   > The long puts outnumber the short puts.

4. Where is the risk of a put ratio backspread concentrated?
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
