---
slug: long-iron-butterfly
---

# Quiz

1. {#q1} Why choose an iron butterfly over a short straddle?
   - It collects a larger premium than a short straddle does, because the long wings add to the credit received
   - It has unlimited profit potential, because the long wings gain value when the stock makes a large move
   - It profits from a large move in either direction, since the long wings are cheap compared with a straddle
   - [x] It has defined, limited risk, at the cost of a somewhat smaller maximum profit
   > The long wings cap the risk on both sides.

2. {#q2} What view does a long iron butterfly express?
   - [x] The stock will stay close to today's price, and the trader wants income
   - The stock will break out sharply in either direction, so the trader wants the long wings to pay off
   - The stock will rise sharply, so the trader wants the short call at the middle strike to gain in value
   - The stock will collapse far below the strikes, so the trader wants the long put wing to gain in value
   > Selling the at-the-money put and call profits when the stock stays near the strike.

3. {#q3} How is a long iron butterfly built?
   - Buy an at-the-money put and call at the same strike, and sell a further out-of-the-money put below and call above
   - [x] Sell an at-the-money put and call at the same strike, and buy a further out-of-the-money put below and call above
   - Sell two at-the-money calls and buy one call above them at a higher strike, to protect against a rally
   - Buy a put and a call at different strikes on either side of the price, and sell a second pair further out
   > It is a short straddle with protective wings.

4. {#q4} The stock moves sharply far above the upper wing. What happens?
   - The loss is unlimited, because the short call at the middle strike is exposed to a very large rally
   - The trader earns the maximum profit, because the long call wing gains value as the stock moves higher
   - [x] The loss is capped at the wing width minus the credit, instead of growing without bound
   - The loss equals the entire credit plus the stock move
   > The long call limits the risk that a plain short straddle carries.

5. {#calc1} [calc] A trader builds a "Long" Iron Butterfly: buys one $90 put, sells one $100 put, sells one $100 call, and buys one $110 call, for a net credit of $6 per share. What is the maximum loss at expiration, per share?
   - $6
   - [x] $4
   - $20
   - $94
   > For this position (K1 = 90, K2 = 100, K3 = 110, net credit = 6), the maximum loss is $4 per share. Formula: L_max = κ - C, where κ = K2-K1 = K3-K2.

6. {#bk1} [calc] A trader builds a "Long" Iron Butterfly: buys one $90 put, sells one $100 put, sells one $100 call, and buys one $110 call, for a net credit of $6 per share. What is the maximum profit at expiration, per share?
   - $4
   - [x] $6
   - $20
   - $94
   > For this position (K1 = 90, K2 = 100, K3 = 110, net credit = 6), the maximum profit is $6 per share. Formula: P_max = C.

7. {#bk2} [calc] A trader builds a "Long" Iron Butterfly: buys one $90 put, sells one $100 put, sells one $100 call, and buys one $110 call, for a net credit of $6 per share. What is the lower break-even stock price at expiration, per share?
   - $106
   - $20
   - $6
   - [x] $94
   > For this position (K1 = 90, K2 = 100, K3 = 110, net credit = 6), the lower break-even stock price is $94 per share. Formula: S*_up = K2 + C; S*_down = K2 - C.

8. {#bk3} [calc] A trader builds a "Long" Iron Butterfly: buys one $90 put, sells one $100 put, sells one $100 call, and buys one $110 call, for a net credit of $6 per share. What is the upper break-even stock price at expiration, per share?
   - $94
   - [x] $106
   - $20
   - $6
   > For this position (K1 = 90, K2 = 100, K3 = 110, net credit = 6), the upper break-even stock price is $106 per share. Formula: S*_up = K2 + C; S*_down = K2 - C.

9. {#bk4} [calc] A trader builds a "Long" Iron Butterfly: buys one $90 put, sells one $100 put, sells one $100 call, and buys one $110 call, for a net credit of $6 per share. At expiration the stock is at $103. What is the trader's profit or loss per share, counting the premium?
   - −$3
   - +$15
   - [x] +$3
   - +$4
   > At $103 the option legs are worth −$3 per share before the premium, and the net premium adds +$6, for +$3 per share (given K1 = 90, K2 = 100, K3 = 110, net credit = 6).

10. {#bk5} [calc] A trader builds a "Long" Iron Butterfly: buys one $90 put, sells one $100 put, sells one $100 call, and buys one $110 call, for a net credit of $6 per share. At expiration the stock is at $118. What is the trader's profit or loss per share, counting the premium?
   - [x] −$4
   - +$4
   - −$10
   - +$8
   > At $118 the option legs are worth −$10 per share before the premium, and the net premium adds +$6, for −$4 per share (given K1 = 90, K2 = 100, K3 = 110, net credit = 6).

11. {#bk6} [calc] A trader builds a "Long" Iron Butterfly: buys one $90 put, sells one $100 put, sells one $100 call, and buys one $110 call, for a net credit of $6 per share. What is the maximum profit on 10 contracts (100 shares each), in dollars?
   - $60
   - $600
   - [x] $6,000
   - $6,600
   > The maximum profit is $6 per share. One contract covers 100 shares, so 10 contracts give $6 × 100 × 10 = $6,000.

12. {#bk7} [calc] A trader builds a "Long" Iron Butterfly: buys one $90 put, sells one $100 put, sells one $100 call, and buys one $110 call, for a net credit of $6 per share. The stock is at $100 at expiration. What is the profit or loss per share, counting the premium?
   - [x] +$6
   - −$6
   - +$18
   - +$7
   > At $100 the legs are worth $0 per share before the premium, and the net premium adds +$6, for +$6 per share (given K1 = 90, K2 = 100, K3 = 110, net credit = 6).

13. {#bk8} [calc] A trader builds a "Long" Iron Butterfly: buys one $90 put, sells one $100 put, sells one $100 call, and buys one $110 call, for a net credit of $6 per share. The stock is at $101 at expiration. What is the profit or loss per share, counting the premium?
   - −$5
   - [x] +$5
   - −$1
   - +$17
   > At $101 the legs are worth −$1 per share before the premium, and the net premium adds +$6, for +$5 per share (given K1 = 90, K2 = 100, K3 = 110, net credit = 6).

14. {#bk9} [calc] A trader builds a "Long" Iron Butterfly: buys one $90 put, sells one $100 put, sells one $100 call, and buys one $110 call, for a net credit of $6 per share. At expiration the stock is at $110. What is the total profit or loss on 2 contracts (100 shares each), in dollars?
   - −$8
   - −$400
   - +$800
   - [x] −$800
   > Per share the position makes −$4 at $110. For 2 contracts: −$4 × 100 × 2 = −$800.

15. {#bk10} [calc] A trader builds a "Long" Iron Butterfly: buys one $90 put, sells one $100 put, sells one $100 call, and buys one $110 call, for a net credit of $6 per share. How much cash is received up front in total if the trader opens 10 contracts (100 shares each)?
   - $60
   - $600
   - $6,600
   - [x] $6,000
   > The net credit is $6 per share. For 10 contracts: $6 × 100 × 10 = $6,000.

16. {#bk11} [calc] A trader builds a "Long" Iron Butterfly: buys one $90 put, sells one $100 put, sells one $100 call, and buys one $110 call, for a net credit of $6 per share. What is the ratio of maximum profit to maximum loss?
   - 0.67 to 1
   - [x] 1.5 to 1
   - 6 to 1
   - 4 to 1
   > Maximum profit is $6 and maximum loss is $4 per share, so the ratio is $6 / $4 = 1.5 to 1.
