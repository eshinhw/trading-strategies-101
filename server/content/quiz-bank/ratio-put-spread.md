---
slug: ratio-put-spread
---

# Quiz

1. {#q1} Who would use a ratio put spread?
   - [x] Someone who expects the stock to stay flat or drift higher, wants income, and accepts large risk on a hard fall
   - Someone who expects a large decline and wants the long put to produce a large profit if the stock drops
   - Someone who wants limited risk in every scenario and is willing to collect a smaller credit to obtain it
   - Someone who expects a large move in either direction and wants to profit from the size of that move alone
   > It is a bullish to neutral credit strategy with an uncovered short put.

2. {#q2} What is the main risk of a ratio put spread?
   - The loss is limited to the credit, because the long put protects the position against every decline
   - [x] Below the lower breakeven, losses grow quickly, since the position is net short puts
   - The loss is limited to the width of the strikes, because the extra short put is covered by the long put
   - There is no loss if the stock falls, because the long put gains more than the short puts give back
   > The extra short put is uncovered.

3. {#q3} How is a ratio put spread built?
   - Sell an in-the-money put and buy more puts than you sold at a lower strike, paying a premium for the position
   - Buy a call and a put at the same strike, so that the position profits from a large move in either direction
   - [x] Buy an in-the-money put and sell more puts than you bought at a lower strike, same expiration
   - Sell a call and sell a put at the same strike, so that the position collects premium from both of the legs
   > The short puts outnumber the long puts.

4. {#q4} The stock unexpectedly crashes to 60. What happens?
   - The trader earns the maximum profit, because the long put gains more than the short puts lose in a crash
   - The trader keeps the credit, because the short puts expire worthless whenever the stock falls sharply lower
   - The loss is capped at a small amount
   - [x] The extra uncovered short put produces a large loss
   > A big drop is the scenario the position is exposed to.

5. {#calc1} [calc] A trader builds a Ratio Put Spread: sells two $100 puts and buys one $105 put, for a net credit of $2 per share. What is the maximum profit at expiration, per share?
   - $5
   - $2
   - [x] $7
   - $93
   > For this position (K2 = 105, K1 = 100, NL = 1, NS = 2, net credit = 2), the maximum profit is $7 per share. Formula: P_max = NL×(K2 - K1) + netCF.

6. {#bk1} [calc] A trader builds a Ratio Put Spread: sells two $100 puts and buys one $105 put, for a net credit of $2 per share. What is the maximum loss at expiration, per share?
   - $7
   - $5
   - [x] $93
   - $2
   > For this position (K2 = 105, K1 = 100, NL = 1, NS = 2, net credit = 2), the maximum loss is $93 per share. Formula: L_max = NS×K1 - NL×K2 - netCF.

7. {#bk2} [calc] A trader builds a Ratio Put Spread: sells two $100 puts and buys one $105 put, for a net credit of $2 per share. What is the break-even stock price at expiration, per share?
   - [x] $93
   - $7
   - $5
   - $2
   > For this position (K2 = 105, K1 = 100, NL = 1, NS = 2, net credit = 2), the break-even stock price is $93 per share. Formula: S*_up = K2 + netCF/NL; S*_down = (NS×K1 - NL×K2 - netCF)/(NS-NL).

8. {#bk3} [calc] A trader builds a Ratio Put Spread: sells two $100 puts and buys one $105 put, for a net credit of $2 per share. At expiration the stock is at $92. What is the trader's profit or loss per share, counting the premium?
   - +$1
   - −$3
   - [x] −$1
   - +$3
   > At $92 the option legs are worth −$3 per share before the premium, and the net premium adds +$2, for −$1 per share (given K2 = 105, K1 = 100, NL = 1, NS = 2, net credit = 2).

9. {#bk4} [calc] A trader builds a Ratio Put Spread: sells two $100 puts and buys one $105 put, for a net credit of $2 per share. At expiration the stock is at $106. What is the trader's profit or loss per share, counting the premium?
   - −$2
   - [x] +$2
   - +$6
   - +$3
   > At $106 the option legs are worth $0 per share before the premium, and the net premium adds +$2, for +$2 per share (given K2 = 105, K1 = 100, NL = 1, NS = 2, net credit = 2).

10. {#bk5} [calc] A trader builds a Ratio Put Spread: sells two $100 puts and buys one $105 put, for a net credit of $2 per share. What is the maximum profit on 10 contracts (100 shares each), in dollars?
   - $70
   - $700
   - $7,700
   - [x] $7,000
   > The maximum profit is $7 per share. One contract covers 100 shares, so 10 contracts give $7 × 100 × 10 = $7,000.

11. {#bk6} [calc] A trader builds a Ratio Put Spread: sells two $100 puts and buys one $105 put, for a net credit of $2 per share. The stock is at $100 at expiration. What is the profit or loss per share, counting the premium?
   - −$7
   - [x] +$7
   - +$5
   - +$11
   > At $100 the legs are worth +$5 per share before the premium, and the net premium adds +$2, for +$7 per share (given K2 = 105, K1 = 100, NL = 1, NS = 2, net credit = 2).

12. {#bk7} [calc] A trader builds a Ratio Put Spread: sells two $100 puts and buys one $105 put, for a net credit of $2 per share. The stock is at $103 at expiration. What is the profit or loss per share, counting the premium?
   - −$4
   - +$2
   - +$8
   - [x] +$4
   > At $103 the legs are worth +$2 per share before the premium, and the net premium adds +$2, for +$4 per share (given K2 = 105, K1 = 100, NL = 1, NS = 2, net credit = 2).

13. {#bk8} [calc] A trader builds a Ratio Put Spread: sells two $100 puts and buys one $105 put, for a net credit of $2 per share. At expiration the stock is at $104. What is the total profit or loss on 2 contracts (100 shares each), in dollars?
   - +$6
   - +$300
   - [x] +$600
   - −$600
   > Per share the position makes +$3 at $104. For 2 contracts: +$3 × 100 × 2 = +$600.

14. {#bk9} [calc] A trader builds a Ratio Put Spread: sells two $100 puts and buys one $105 put, for a net credit of $2 per share. How much cash is received up front in total if the trader opens 10 contracts (100 shares each)?
   - [x] $2,000
   - $20
   - $200
   - $2,200
   > The net credit is $2 per share. For 10 contracts: $2 × 100 × 10 = $2,000.

15. {#bk10} [calc] A trader builds a Ratio Put Spread: sells two $100 puts and buys one $105 put, for a net credit of $2 per share. What is the ratio of maximum profit to maximum loss?
   - 13.29 to 1
   - 7 to 1
   - [x] 0.08 to 1
   - 93 to 1
   > Maximum profit is $7 and maximum loss is $93 per share, so the ratio is $7 / $93 = 0.08 to 1.
