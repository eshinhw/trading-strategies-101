---
slug: long-call-butterfly
---

# Quiz

1. {#q1} What outcome does a long call butterfly bet on?
   - The stock makes a very large move
   - The stock rises steadily through every strike, so that all of the calls finish deep in the money
   - The stock collapses below the lowest strike, so that every call in the position expires worthless
   - [x] The stock ends very close to a specific price at expiration, a low-volatility, pinned outcome
   > A butterfly has its maximum profit at the middle strike.

2. {#q2} Why is a long call butterfly cheap to put on?
   - [x] The two short calls in the middle largely offset the cost of the two long wing calls
   - The options are all out of the money
   - It involves no options at all, since the position is built entirely from the shares of the underlying stock
   - It is financed by selling stock, so the proceeds pay for the whole structure with no net cash required
   > The tradeoff for the low cost is a small, capped profit.

3. {#q3} How is a long call butterfly built?
   - Sell 1 call below the target, buy 2 calls at the target, and sell 1 call above it, with evenly spaced strikes
   - [x] Buy 1 call below the target, sell 2 calls at the target, and buy 1 call above it, with evenly spaced strikes
   - Buy 2 calls at the target and sell 1 call on each side of it, with strikes that are evenly spaced out
   - Buy 1 call and 1 put at the target, with a further call and put on either side at evenly spaced strikes
   > The middle strike is the short body, with long wings on either side.

4. {#q4} The stock finishes far from the middle strike in either direction. What happens?
   - The trader loses an unlimited amount, because the short calls are exposed to a very large move
   - The trader earns the maximum profit, because both of the wings gain value when the stock moves away
   - [x] The trader loses only the net debit paid
   - The trader is assigned shares at the middle strike, because the short calls finish in the money
   > Risk is limited to the debit.

5. {#calc1} [calc] A trader builds a Long Call Butterfly: buys one $110 call, sells two $100 calls, and buys one $90 call, for a net debit of $3 per share. What is the lower break-even stock price at expiration, per share?
   - $107
   - [x] $93
   - $20
   - $7
   > For this position (K3 = 90, K2 = 100, K1 = 110, net debit = 3), the lower break-even stock price is $93 per share. Formula: S*_down = K3 + D; S*_up = K1 - D.

6. {#bk1} [calc] A trader builds a Long Call Butterfly: buys one $110 call, sells two $100 calls, and buys one $90 call, for a net debit of $3 per share. What is the maximum loss at expiration, per share?
   - [x] $3
   - $7
   - $20
   - $93
   > For this position (K3 = 90, K2 = 100, K1 = 110, net debit = 3), the maximum loss is $3 per share. Formula: L_max = D.

7. {#bk2} [calc] A trader builds a Long Call Butterfly: buys one $110 call, sells two $100 calls, and buys one $90 call, for a net debit of $3 per share. What is the maximum profit at expiration, per share?
   - $3
   - $20
   - [x] $7
   - $93
   > For this position (K3 = 90, K2 = 100, K1 = 110, net debit = 3), the maximum profit is $7 per share. Formula: P_max = κ - D, where κ = K1-K2 = K2-K3.

8. {#bk3} [calc] A trader builds a Long Call Butterfly: buys one $110 call, sells two $100 calls, and buys one $90 call, for a net debit of $3 per share. What is the upper break-even stock price at expiration, per share?
   - [x] $107
   - $93
   - $20
   - $7
   > For this position (K3 = 90, K2 = 100, K1 = 110, net debit = 3), the upper break-even stock price is $107 per share. Formula: S*_down = K3 + D; S*_up = K1 - D.

9. {#bk4} [calc] A trader builds a Long Call Butterfly: buys one $110 call, sells two $100 calls, and buys one $90 call, for a net debit of $3 per share. At expiration the stock is at $103. What is the trader's profit or loss per share, counting the premium?
   - −$4
   - +$7
   - +$10
   - [x] +$4
   > At $103 the option legs are worth +$7 per share before the premium, and the net premium adds −$3, for +$4 per share (given K3 = 90, K2 = 100, K1 = 110, net debit = 3).

10. {#bk5} [calc] A trader builds a Long Call Butterfly: buys one $110 call, sells two $100 calls, and buys one $90 call, for a net debit of $3 per share. What is the maximum profit on 8 contracts (100 shares each), in dollars?
   - $56
   - [x] $5,600
   - $700
   - $6,300
   > The maximum profit is $7 per share. One contract covers 100 shares, so 8 contracts give $7 × 100 × 8 = $5,600.

11. {#bk6} [calc] A trader builds a Long Call Butterfly: buys one $110 call, sells two $100 calls, and buys one $90 call, for a net debit of $3 per share. The stock is at $100 at expiration. What is the profit or loss per share, counting the premium?
   - −$7
   - +$10
   - +$13
   - [x] +$7
   > At $100 the legs are worth +$10 per share before the premium, and the net premium adds −$3, for +$7 per share (given K3 = 90, K2 = 100, K1 = 110, net debit = 3).

12. {#bk7} [calc] A trader builds a Long Call Butterfly: buys one $110 call, sells two $100 calls, and buys one $90 call, for a net debit of $3 per share. The stock is at $101 at expiration. What is the profit or loss per share, counting the premium?
   - −$6
   - [x] +$6
   - +$9
   - +$12
   > At $101 the legs are worth +$9 per share before the premium, and the net premium adds −$3, for +$6 per share (given K3 = 90, K2 = 100, K1 = 110, net debit = 3).

13. {#bk8} [calc] A trader builds a Long Call Butterfly: buys one $110 call, sells two $100 calls, and buys one $90 call, for a net debit of $3 per share. At expiration the stock is at $110. What is the total profit or loss on 7 contracts (100 shares each), in dollars?
   - [x] −$2,100
   - −$21
   - −$300
   - +$2,100
   > Per share the position makes −$3 at $110. For 7 contracts: −$3 × 100 × 7 = −$2,100.

14. {#bk9} [calc] A trader builds a Long Call Butterfly: buys one $110 call, sells two $100 calls, and buys one $90 call, for a net debit of $3 per share. How much cash is paid up front in total if the trader opens 6 contracts (100 shares each)?
   - $18
   - $300
   - [x] $1,800
   - $2,100
   > The net debit is $3 per share. For 6 contracts: $3 × 100 × 6 = $1,800.

15. {#bk10} [calc] A trader builds a Long Call Butterfly: buys one $110 call, sells two $100 calls, and buys one $90 call, for a net debit of $3 per share. What is the ratio of maximum profit to maximum loss?
   - 0.43 to 1
   - 7 to 1
   - [x] 2.33 to 1
   - 3 to 1
   > Maximum profit is $7 and maximum loss is $3 per share, so the ratio is $7 / $3 = 2.33 to 1.
