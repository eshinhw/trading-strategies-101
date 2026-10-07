---
slug: long-put-butterfly
---

# Quiz

1. {#q1} What outcome does a long put butterfly bet on?
   - The stock makes a very large move in either direction, so that the outer long puts gain a great deal
   - The stock rises steadily through every strike, so that all of the puts finish deep in the money
   - [x] The stock ends very close to a specific price at expiration, using puts instead of calls
   - The stock collapses below the lowest strike, so that every put in the position finishes with full value
   > A butterfly has its maximum profit at the middle strike.

2. {#q2} Why is a long put butterfly cheap to put on?
   - The options are all far out of the money, which is why the premium is so small compared with a straddle
   - It involves no options at all, since the position is built entirely from the shares of the underlying stock
   - It is financed by selling stock, so the proceeds pay for the whole structure with no net cash required
   - [x] The two short puts in the middle largely offset the cost of the two long wing puts
   > The tradeoff for the low cost is a small, capped profit.

3. {#q3} How is a long put butterfly built?
   - [x] Buy 1 put below the target, sell 2 puts at the target, and buy 1 put above it, with evenly spaced strikes
   - Sell 1 put below the target, buy 2 puts at the target, and sell 1 put above it, with evenly spaced strikes
   - Buy 2 puts at the target and sell 1 put on each side of it, with strikes that are evenly spaced out
   - Buy 1 put and 1 call at the target, with a further put and call on either side at evenly spaced strikes
   > The middle strike is the short body, with long wings on either side.

4. {#q4} The stock finishes far from the middle strike in either direction. What happens?
   - The trader loses an unlimited amount
   - [x] The trader loses only the net debit paid
   - The trader earns the maximum profit, because both of the wings gain value when the stock moves away
   - The trader is assigned shares at the middle strike, because the short puts finish in the money
   > Risk is limited to the debit.

5. {#calc1} [calc] A trader builds a Long Put Butterfly: buys one $90 put, sells two $100 puts, and buys one $110 put, for a net debit of $3 per share. What is the upper break-even stock price at expiration, per share?
   - [x] $107
   - $93
   - $20
   - $7
   > For this position (K1 = 90, K2 = 100, K3 = 110, net debit = 3), the upper break-even stock price is $107 per share. Formula: S*_up = K3 - D; S*_down = K1 + D.

6. {#bk1} [calc] A trader builds a Long Put Butterfly: buys one $90 put, sells two $100 puts, and buys one $110 put, for a net debit of $3 per share. What is the maximum loss at expiration, per share?
   - $7
   - $20
   - $93
   - [x] $3
   > For this position (K1 = 90, K2 = 100, K3 = 110, net debit = 3), the maximum loss is $3 per share. Formula: L_max = D.

7. {#bk2} [calc] A trader builds a Long Put Butterfly: buys one $90 put, sells two $100 puts, and buys one $110 put, for a net debit of $3 per share. What is the maximum profit at expiration, per share?
   - $3
   - [x] $7
   - $20
   - $93
   > For this position (K1 = 90, K2 = 100, K3 = 110, net debit = 3), the maximum profit is $7 per share. Formula: P_max = κ - D, where κ = K3-K2 = K2-K1.

8. {#bk3} [calc] A trader builds a Long Put Butterfly: buys one $90 put, sells two $100 puts, and buys one $110 put, for a net debit of $3 per share. What is the lower break-even stock price at expiration, per share?
   - $107
   - $20
   - $7
   - [x] $93
   > For this position (K1 = 90, K2 = 100, K3 = 110, net debit = 3), the lower break-even stock price is $93 per share. Formula: S*_up = K3 - D; S*_down = K1 + D.

9. {#bk4} [calc] A trader builds a Long Put Butterfly: buys one $90 put, sells two $100 puts, and buys one $110 put, for a net debit of $3 per share. At expiration the stock is at $103. What is the trader's profit or loss per share, counting the premium?
   - [x] +$4
   - −$4
   - +$7
   - +$10
   > At $103 the option legs are worth +$7 per share before the premium, and the net premium adds −$3, for +$4 per share (given K1 = 90, K2 = 100, K3 = 110, net debit = 3).

10. {#bk5} [calc] A trader builds a Long Put Butterfly: buys one $90 put, sells two $100 puts, and buys one $110 put, for a net debit of $3 per share. What is the maximum loss on 3 contracts (100 shares each), in dollars?
   - $9
   - $300
   - [x] $900
   - $1,200
   > The maximum loss is $3 per share. One contract covers 100 shares, so 3 contracts give $3 × 100 × 3 = $900.

11. {#bk6} [calc] A trader builds a Long Put Butterfly: buys one $90 put, sells two $100 puts, and buys one $110 put, for a net debit of $3 per share. The stock is at $78 at expiration. What is the profit or loss per share, counting the premium?
   - [x] −$3
   - +$3
   - −$2
   - −$4
   > At $78 the legs are worth $0 per share before the premium, and the net premium adds −$3, for −$3 per share (given K1 = 90, K2 = 100, K3 = 110, net debit = 3).

12. {#bk7} [calc] A trader builds a Long Put Butterfly: buys one $90 put, sells two $100 puts, and buys one $110 put, for a net debit of $3 per share. The stock is at $87 at expiration. What is the profit or loss per share, counting the premium?
   - +$3
   - −$2
   - [x] −$3
   - −$4
   > At $87 the legs are worth $0 per share before the premium, and the net premium adds −$3, for −$3 per share (given K1 = 90, K2 = 100, K3 = 110, net debit = 3).

13. {#bk8} [calc] A trader builds a Long Put Butterfly: buys one $90 put, sells two $100 puts, and buys one $110 put, for a net debit of $3 per share. At expiration the stock is at $90. What is the total profit or loss on 2 contracts (100 shares each), in dollars?
   - −$6
   - −$300
   - +$600
   - [x] −$600
   > Per share the position makes −$3 at $90. For 2 contracts: −$3 × 100 × 2 = −$600.

14. {#bk9} [calc] A trader builds a Long Put Butterfly: buys one $90 put, sells two $100 puts, and buys one $110 put, for a net debit of $3 per share. How much cash is paid up front in total if the trader opens 5 contracts (100 shares each)?
   - $15
   - [x] $1,500
   - $300
   - $1,800
   > The net debit is $3 per share. For 5 contracts: $3 × 100 × 5 = $1,500.

15. {#bk10} [calc] A trader builds a Long Put Butterfly: buys one $90 put, sells two $100 puts, and buys one $110 put, for a net debit of $3 per share. What is the ratio of maximum profit to maximum loss?
   - 0.43 to 1
   - 7 to 1
   - [x] 2.33 to 1
   - 3 to 1
   > Maximum profit is $7 and maximum loss is $3 per share, so the ratio is $7 / $3 = 2.33 to 1.
