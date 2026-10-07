---
slug: short-iron-butterfly
---

# Quiz

1. {#q1} When might a trader use a short iron butterfly?
   - [x] They expect a large move away from today's price and want to reduce the cost compared with a long straddle
   - They expect the stock to stay still, so they want the at-the-money options to lose value over the period
   - They want unlimited profit from a large move, so they avoid selling any options further from the money
   - They want to collect income from a quiet market, so they sell the at-the-money put and call together
   > It is a cheaper version of a long straddle with capped profit.

2. {#q2} What does selling the outer put and call do?
   - It makes the profit unlimited
   - [x] It lowers the cost of the position, but it also caps the maximum profit
   - It increases the debit, because the sold options at the wings have to be paid for in addition to the straddle
   - It has no effect on the cost, because the wings are priced to cancel out against the at-the-money options
   > The premium from the wings offsets some of the straddle's cost.

3. {#q3} How is a short iron butterfly built?
   - Sell an at-the-money put and call at the same strike, and buy a further out-of-the-money put below and call above
   - Buy two calls at the money and sell one put below them at a lower strike, to finance part of the cost
   - [x] Buy an at-the-money put and call at the same strike, and sell a further out-of-the-money put below and call above
   - Sell a put and a call at different strikes on either side of the price, and buy a second pair further out
   > It is a long straddle with the wings sold.

4. {#q4} The stock stays near the middle strike. What happens?
   - The trader earns the maximum profit, because the at-the-money options hold their value if the stock stays put
   - The trader is assigned shares
   - The trader loses an unlimited amount, because the sold wings are exposed to a very large move in either direction
   - [x] The trader loses the debit paid
   > Without a large move, the options lose their value.

5. {#calc1} [calc] A trader builds a "Short" Iron Butterfly: sells one $90 put, buys one $100 put, buys one $100 call, and sells one $110 call, for a net debit of $6 per share. What is the lower break-even stock price at expiration, per share?
   - $106
   - $20
   - $6
   - [x] $94
   > For this position (K1 = 90, K2 = 100, K3 = 110, net debit = 6), the lower break-even stock price is $94 per share. Formula: S*_up = K2 + D; S*_down = K2 - D.

6. {#bk1} [calc] A trader builds a "Short" Iron Butterfly: sells one $90 put, buys one $100 put, buys one $100 call, and sells one $110 call, for a net debit of $6 per share. What is the maximum loss at expiration, per share?
   - $4
   - [x] $6
   - $20
   - $94
   > For this position (K1 = 90, K2 = 100, K3 = 110, net debit = 6), the maximum loss is $6 per share. Formula: L_max = D.

7. {#bk2} [calc] A trader builds a "Short" Iron Butterfly: sells one $90 put, buys one $100 put, buys one $100 call, and sells one $110 call, for a net debit of $6 per share. What is the maximum profit at expiration, per share?
   - $6
   - $20
   - $94
   - [x] $4
   > For this position (K1 = 90, K2 = 100, K3 = 110, net debit = 6), the maximum profit is $4 per share. Formula: P_max = κ - D, where κ = K2-K1 = K3-K2.

8. {#bk3} [calc] A trader builds a "Short" Iron Butterfly: sells one $90 put, buys one $100 put, buys one $100 call, and sells one $110 call, for a net debit of $6 per share. What is the upper break-even stock price at expiration, per share?
   - $94
   - [x] $106
   - $20
   - $6
   > For this position (K1 = 90, K2 = 100, K3 = 110, net debit = 6), the upper break-even stock price is $106 per share. Formula: S*_up = K2 + D; S*_down = K2 - D.

9. {#bk4} [calc] A trader builds a "Short" Iron Butterfly: sells one $90 put, buys one $100 put, buys one $100 call, and sells one $110 call, for a net debit of $6 per share. At expiration the stock is at $82. What is the trader's profit or loss per share, counting the premium?
   - −$4
   - +$10
   - [x] +$4
   - +$16
   > At $82 the option legs are worth +$10 per share before the premium, and the net premium adds −$6, for +$4 per share (given K1 = 90, K2 = 100, K3 = 110, net debit = 6).

10. {#bk5} [calc] A trader builds a "Short" Iron Butterfly: sells one $90 put, buys one $100 put, buys one $100 call, and sells one $110 call, for a net debit of $6 per share. At expiration the stock is at $103. What is the trader's profit or loss per share, counting the premium?
   - [x] −$3
   - +$3
   - +$9
   - −$2
   > At $103 the option legs are worth +$3 per share before the premium, and the net premium adds −$6, for −$3 per share (given K1 = 90, K2 = 100, K3 = 110, net debit = 6).

11. {#bk6} [calc] A trader builds a "Short" Iron Butterfly: sells one $90 put, buys one $100 put, buys one $100 call, and sells one $110 call, for a net debit of $6 per share. What is the maximum profit on 4 contracts (100 shares each), in dollars?
   - $16
   - $400
   - [x] $1,600
   - $2,000
   > The maximum profit is $4 per share. One contract covers 100 shares, so 4 contracts give $4 × 100 × 4 = $1,600.

12. {#bk7} [calc] A trader builds a "Short" Iron Butterfly: sells one $90 put, buys one $100 put, buys one $100 call, and sells one $110 call, for a net debit of $6 per share. The stock is at $100 at expiration. What is the profit or loss per share, counting the premium?
   - [x] −$6
   - +$6
   - −$5
   - −$7
   > At $100 the legs are worth $0 per share before the premium, and the net premium adds −$6, for −$6 per share (given K1 = 90, K2 = 100, K3 = 110, net debit = 6).

13. {#bk8} [calc] A trader builds a "Short" Iron Butterfly: sells one $90 put, buys one $100 put, buys one $100 call, and sells one $110 call, for a net debit of $6 per share. The stock is at $101 at expiration. What is the profit or loss per share, counting the premium?
   - +$5
   - [x] −$5
   - +$1
   - +$7
   > At $101 the legs are worth +$1 per share before the premium, and the net premium adds −$6, for −$5 per share (given K1 = 90, K2 = 100, K3 = 110, net debit = 6).

14. {#bk9} [calc] A trader builds a "Short" Iron Butterfly: sells one $90 put, buys one $100 put, buys one $100 call, and sells one $110 call, for a net debit of $6 per share. At expiration the stock is at $110. What is the total profit or loss on 2 contracts (100 shares each), in dollars?
   - +$8
   - +$400
   - −$800
   - [x] +$800
   > Per share the position makes +$4 at $110. For 2 contracts: +$4 × 100 × 2 = +$800.

15. {#bk10} [calc] A trader builds a "Short" Iron Butterfly: sells one $90 put, buys one $100 put, buys one $100 call, and sells one $110 call, for a net debit of $6 per share. How much cash is paid up front in total if the trader opens 10 contracts (100 shares each)?
   - [x] $6,000
   - $60
   - $600
   - $6,600
   > The net debit is $6 per share. For 10 contracts: $6 × 100 × 10 = $6,000.

16. {#bk11} [calc] A trader builds a "Short" Iron Butterfly: sells one $90 put, buys one $100 put, buys one $100 call, and sells one $110 call, for a net debit of $6 per share. What is the ratio of maximum profit to maximum loss?
   - 1.5 to 1
   - 4 to 1
   - [x] 0.67 to 1
   - 6 to 1
   > Maximum profit is $4 and maximum loss is $6 per share, so the ratio is $4 / $6 = 0.67 to 1.
