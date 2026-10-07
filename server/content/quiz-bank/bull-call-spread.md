---
slug: bull-call-spread
---

# Quiz

1. {#q1} Which view fits a bull call spread?
   - [x] The stock will rise but not explosively, and you want to pay less than for an outright call
   - The stock will fall sharply in the near term, and the trader wants a cheap way to profit from the decline
   - The stock will make a huge rally, and the trader wants unlimited profit from every dollar of the rise
   - The stock will stay exactly flat, and the trader wants to collect income from the passing of time
   > It is a moderately bullish, defined-risk trade.

2. {#q2} What does selling the higher-strike call accomplish?
   - It removes all risk from the trade
   - [x] It finances part of the long call, lowering cost and breakeven, but caps the profit
   - It makes the profit unlimited, because the short call gains value faster than the long call does
   - It increases the cost of the trade, because a second option has to be paid for in addition
   > The premium received reduces the debit, and the profit is limited once the stock passes the short strike.

3. {#q3} How is a bull call spread built?
   - Buy a call and buy a put at the same strike, so that the position profits from a move in either direction
   - Sell a call near the money and buy a call at a lower strike
   - [x] Buy a call near the money and sell a call at a higher strike with the same expiration
   - Buy a call and sell a put at the same strike, so that the position behaves like owning the stock
   > Both calls share the same expiration and number of contracts.

4. {#q4} The stock finishes far above the short call's strike. What does the bull call spread earn?
   - Unlimited profit, because the long call keeps gaining value as the stock continues to rise higher
   - Only the debit that was paid, because the short call takes back everything above the higher strike
   - A loss equal to the spread width
   - [x] The full spread width minus the debit paid, and no more
   > Profit is capped at the difference between the strikes minus what was paid.

5. {#calc1} [calc] A trader builds a Bull Call Spread: buys one $95 call and sells one $105 call, for a net debit of $3 per share. What is the maximum loss at expiration, per share?
   - $7
   - [x] $3
   - $10
   - $98
   > For this position (K1 = 95, K2 = 105, net debit = 3), the maximum loss is $3 per share. Formula: L_max = D.

6. {#bk1} [calc] A trader builds a Bull Call Spread: buys one $95 call and sells one $105 call, for a net debit of $3 per share. What is the maximum profit at expiration, per share?
   - $10
   - $3
   - [x] $7
   - $98
   > For this position (K1 = 95, K2 = 105, net debit = 3), the maximum profit is $7 per share. Formula: P_max = K2 - K1 - D.

7. {#bk2} [calc] A trader builds a Bull Call Spread: buys one $95 call and sells one $105 call, for a net debit of $3 per share. What is the break-even stock price at expiration, per share?
   - [x] $98
   - $10
   - $7
   - $3
   > For this position (K1 = 95, K2 = 105, net debit = 3), the break-even stock price is $98 per share. Formula: S* = K1 + D.

8. {#bk3} [calc] A trader builds a Bull Call Spread: buys one $95 call and sells one $105 call, for a net debit of $3 per share. At expiration the stock is at $103. What is the trader's profit or loss per share, counting the premium?
   - −$5
   - +$8
   - [x] +$5
   - +$11
   > At $103 the option legs are worth +$8 per share before the premium, and the net premium adds −$3, for +$5 per share (given K1 = 95, K2 = 105, net debit = 3).

9. {#bk4} [calc] A trader builds a Bull Call Spread: buys one $95 call and sells one $105 call, for a net debit of $3 per share. What is the maximum profit on 8 contracts (100 shares each), in dollars?
   - $56
   - [x] $5,600
   - $700
   - $6,300
   > The maximum profit is $7 per share. One contract covers 100 shares, so 8 contracts give $7 × 100 × 8 = $5,600.

10. {#bk5} [calc] A trader builds a Bull Call Spread: buys one $95 call and sells one $105 call, for a net debit of $3 per share. The stock is at $100 at expiration. What is the profit or loss per share, counting the premium?
   - −$2
   - +$5
   - +$8
   - [x] +$2
   > At $100 the legs are worth +$5 per share before the premium, and the net premium adds −$3, for +$2 per share (given K1 = 95, K2 = 105, net debit = 3).

11. {#bk6} [calc] A trader builds a Bull Call Spread: buys one $95 call and sells one $105 call, for a net debit of $3 per share. The stock is at $101 at expiration. What is the profit or loss per share, counting the premium?
   - −$3
   - [x] +$3
   - +$6
   - +$9
   > At $101 the legs are worth +$6 per share before the premium, and the net premium adds −$3, for +$3 per share (given K1 = 95, K2 = 105, net debit = 3).

12. {#bk7} [calc] A trader builds a Bull Call Spread: buys one $95 call and sells one $105 call, for a net debit of $3 per share. At expiration the stock is at $105. What is the total profit or loss on 5 contracts (100 shares each), in dollars?
   - +$35
   - +$700
   - −$3,500
   - [x] +$3,500
   > Per share the position makes +$7 at $105. For 5 contracts: +$7 × 100 × 5 = +$3,500.

13. {#bk8} [calc] A trader builds a Bull Call Spread: buys one $95 call and sells one $105 call, for a net debit of $3 per share. How much cash is paid up front in total if the trader opens 2 contracts (100 shares each)?
   - $6
   - $300
   - [x] $600
   - $900
   > The net debit is $3 per share. For 2 contracts: $3 × 100 × 2 = $600.

14. {#bk9} [calc] A trader builds a Bull Call Spread: buys one $95 call and sells one $105 call, for a net debit of $3 per share. What is the ratio of maximum profit to maximum loss?
   - [x] 2.33 to 1
   - 0.43 to 1
   - 7 to 1
   - 3 to 1
   > Maximum profit is $7 and maximum loss is $3 per share, so the ratio is $7 / $3 = 2.33 to 1.
