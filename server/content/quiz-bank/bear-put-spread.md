---
slug: bear-put-spread
---

# Quiz

1. {#q1} Which view fits a bear put spread?
   - The stock will rise over the next few weeks, and the trader wants a cheap way to profit from the rally
   - The stock will crash to zero and you want unlimited profit
   - The stock will stay exactly flat, and the trader wants to collect income from the passing of time
   - [x] The stock will fall but not collapse, and you want to pay less than for an outright put
   > It is a moderately bearish, defined-risk trade.

2. {#q2} What does selling the lower-strike put accomplish?
   - [x] It finances part of the long put, lowering the cost and breakeven, but caps the profit
   - It makes the profit unlimited, because the short put gains value faster than the long put does
   - It removes all risk from the trade, because the premium received is larger than the premium paid
   - It increases the cost of the trade
   > The premium received reduces the debit, and the profit is limited once the stock falls below the short strike.

3. {#q3} How is a bear put spread built?
   - Buy a put and buy a call at the same strike, so that the position profits from a move in either direction
   - [x] Buy a put near the money and sell a put at a lower strike with the same expiration
   - Sell a put near the money and buy a put at a higher strike
   - Buy a put and sell a call at the same strike, so that the position behaves like shorting the stock
   > Both puts share the same expiration and number of contracts.

4. {#q4} The stock stays above the long put's strike at expiration. What does the bear put spread lose?
   - The full width of the spread, because the short put is exercised against the trader at expiration
   - An unlimited amount, because the short put keeps losing value as the stock moves higher
   - [x] Only the debit paid
   - Nothing at all, because the short put premium is larger than the premium paid for the long put
   > Maximum loss is the net debit, which happens when both puts expire worthless.

5. {#calc1} [calc] A trader builds a Bear Put Spread: buys one $100 put and sells one $90 put, for a net debit of $3 per share. What is the maximum loss at expiration, per share?
   - $7
   - [x] $3
   - $10
   - $97
   > For this position (K1 = 100, K2 = 90, net debit = 3), the maximum loss is $3 per share. Formula: L_max = D.

6. {#bk1} [calc] A trader builds a Bear Put Spread: buys one $100 put and sells one $90 put, for a net debit of $3 per share. What is the maximum profit at expiration, per share?
   - $10
   - $3
   - $97
   - [x] $7
   > For this position (K1 = 100, K2 = 90, net debit = 3), the maximum profit is $7 per share. Formula: P_max = K1 - K2 - D.

7. {#bk2} [calc] A trader builds a Bear Put Spread: buys one $100 put and sells one $90 put, for a net debit of $3 per share. What is the break-even stock price at expiration, per share?
   - $10
   - [x] $97
   - $7
   - $3
   > For this position (K1 = 100, K2 = 90, net debit = 3), the break-even stock price is $97 per share. Formula: S* = K1 - D.

8. {#bk3} [calc] A trader builds a Bear Put Spread: buys one $100 put and sells one $90 put, for a net debit of $3 per share. At expiration the stock is at $82. What is the trader's profit or loss per share, counting the premium?
   - −$7
   - +$10
   - +$13
   - [x] +$7
   > At $82 the option legs are worth +$10 per share before the premium, and the net premium adds −$3, for +$7 per share (given K1 = 100, K2 = 90, net debit = 3).

9. {#bk4} [calc] A trader builds a Bear Put Spread: buys one $100 put and sells one $90 put, for a net debit of $3 per share. What is the maximum profit on 5 contracts (100 shares each), in dollars?
   - [x] $3,500
   - $35
   - $700
   - $4,200
   > The maximum profit is $7 per share. One contract covers 100 shares, so 5 contracts give $7 × 100 × 5 = $3,500.

10. {#bk5} [calc] A trader builds a Bear Put Spread: buys one $100 put and sells one $90 put, for a net debit of $3 per share. The stock is at $100 at expiration. What is the profit or loss per share, counting the premium?
   - +$3
   - −$2
   - [x] −$3
   - −$4
   > At $100 the legs are worth $0 per share before the premium, and the net premium adds −$3, for −$3 per share (given K1 = 100, K2 = 90, net debit = 3).

11. {#bk6} [calc] A trader builds a Bear Put Spread: buys one $100 put and sells one $90 put, for a net debit of $3 per share. The stock is at $103 at expiration. What is the profit or loss per share, counting the premium?
   - [x] −$3
   - +$3
   - −$2
   - −$4
   > At $103 the legs are worth $0 per share before the premium, and the net premium adds −$3, for −$3 per share (given K1 = 100, K2 = 90, net debit = 3).

12. {#bk7} [calc] A trader builds a Bear Put Spread: buys one $100 put and sells one $90 put, for a net debit of $3 per share. At expiration the stock is at $112. What is the total profit or loss on 3 contracts (100 shares each), in dollars?
   - −$9
   - −$300
   - [x] −$900
   - +$900
   > Per share the position makes −$3 at $112. For 3 contracts: −$3 × 100 × 3 = −$900.

13. {#bk8} [calc] A trader builds a Bear Put Spread: buys one $100 put and sells one $90 put, for a net debit of $3 per share. How much cash is paid up front in total if the trader opens 5 contracts (100 shares each)?
   - $15
   - $300
   - $1,800
   - [x] $1,500
   > The net debit is $3 per share. For 5 contracts: $3 × 100 × 5 = $1,500.

14. {#bk9} [calc] A trader builds a Bear Put Spread: buys one $100 put and sells one $90 put, for a net debit of $3 per share. What is the ratio of maximum profit to maximum loss?
   - 0.43 to 1
   - [x] 2.33 to 1
   - 7 to 1
   - 3 to 1
   > Maximum profit is $7 and maximum loss is $3 per share, so the ratio is $7 / $3 = 2.33 to 1.
