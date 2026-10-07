---
slug: bear-call-spread
---

# Quiz

1. {#q1} What view fits a bear call spread?
   - [x] The stock will stay flat or fall, or at least won't rally much past a level, and you want income instead of shorting stock
   - The stock will rally sharply, and the trader wants to profit from the rise using a defined-risk position
   - The stock will move a lot in either direction, and the trader wants to profit from the size of the move
   - The stock will fall steeply, and the trader wants unlimited profit from every dollar of the decline
   > It is a bearish to neutral credit strategy.

2. {#q2} How does the long call improve on selling a naked call?
   - It makes the profit unlimited, because the long call gains value if the stock continues to rise higher
   - [x] It caps the loss if the stock unexpectedly rallies, at the cost of some premium
   - It removes the premium received
   - It guarantees that the stock will fall, because the long call acts as a hedge for the short call
   > The purchased call defines the risk that a naked short call lacks.

3. {#q3} How is a bear call spread built?
   - Buy a call closer to the current price and sell a call at a higher strike, so that a debit is paid up front
   - Sell a put and buy a put at a lower strike, so that the position profits when the stock rises
   - [x] Sell a call closer to the current price and buy a call at a higher strike, same expiration
   - Buy a call and a put at the same strike, so that the position profits from a large move either way
   > The short call is the lower strike, and the long call is the protection above it.

4. {#q4} A trader sells the 100 call and buys the 105 call for a net credit. The stock stays below 100. What happens?
   - The trader must deliver shares at 100, because both calls are exercised against the trader
   - The trader loses the width of the spread, because the long call finishes out of the money
   - The trader earns unlimited profit, because the long call keeps gaining as the stock moves
   - [x] Both calls expire worthless and the trader keeps the full credit
   > The maximum profit is the credit, earned when the stock stays below the short strike.

5. {#calc1} [calc] A trader builds a Bear Call Spread: buys one $105 call and sells one $100 call, for a net credit of $3 per share. What is the maximum profit at expiration, per share?
   - $2
   - $5
   - $103
   - [x] $3
   > For this position (K2 = 100, K1 = 105, net credit = 3), the maximum profit is $3 per share. Formula: P_max = C.

6. {#bk1} [calc] A trader builds a Bear Call Spread: buys one $105 call and sells one $100 call, for a net credit of $3 per share. What is the maximum loss at expiration, per share?
   - $3
   - [x] $2
   - $5
   - $103
   > For this position (K2 = 100, K1 = 105, net credit = 3), the maximum loss is $2 per share. Formula: L_max = K1 - K2 - C.

7. {#bk2} [calc] A trader builds a Bear Call Spread: buys one $105 call and sells one $100 call, for a net credit of $3 per share. What is the break-even stock price at expiration, per share?
   - $5
   - $3
   - $2
   - [x] $103
   > For this position (K2 = 100, K1 = 105, net credit = 3), the break-even stock price is $103 per share. Formula: S* = K2 + C.

8. {#bk3} [calc] A trader builds a Bear Call Spread: buys one $105 call and sells one $100 call, for a net credit of $3 per share. At expiration the stock is at $106. What is the trader's profit or loss per share, counting the premium?
   - +$2
   - [x] −$2
   - −$5
   - +$4
   > At $106 the option legs are worth −$5 per share before the premium, and the net premium adds +$3, for −$2 per share (given K2 = 100, K1 = 105, net credit = 3).

9. {#bk4} [calc] A trader builds a Bear Call Spread: buys one $105 call and sells one $100 call, for a net credit of $3 per share. At expiration the stock is at $113. What is the trader's profit or loss per share, counting the premium?
   - +$2
   - −$5
   - [x] −$2
   - +$4
   > At $113 the option legs are worth −$5 per share before the premium, and the net premium adds +$3, for −$2 per share (given K2 = 100, K1 = 105, net credit = 3).

10. {#bk5} [calc] A trader builds a Bear Call Spread: buys one $105 call and sells one $100 call, for a net credit of $3 per share. What is the maximum loss on 4 contracts (100 shares each), in dollars?
   - [x] $800
   - $8
   - $200
   - $1,000
   > The maximum loss is $2 per share. One contract covers 100 shares, so 4 contracts give $2 × 100 × 4 = $800.

11. {#bk6} [calc] A trader builds a Bear Call Spread: buys one $105 call and sells one $100 call, for a net credit of $3 per share. The stock is at $88 at expiration. What is the profit or loss per share, counting the premium?
   - −$3
   - +$9
   - [x] +$3
   - +$4
   > At $88 the legs are worth $0 per share before the premium, and the net premium adds +$3, for +$3 per share (given K2 = 100, K1 = 105, net credit = 3).

12. {#bk7} [calc] A trader builds a Bear Call Spread: buys one $105 call and sells one $100 call, for a net credit of $3 per share. The stock is at $97 at expiration. What is the profit or loss per share, counting the premium?
   - [x] +$3
   - −$3
   - +$9
   - +$4
   > At $97 the legs are worth $0 per share before the premium, and the net premium adds +$3, for +$3 per share (given K2 = 100, K1 = 105, net credit = 3).

13. {#bk8} [calc] A trader builds a Bear Call Spread: buys one $105 call and sells one $100 call, for a net credit of $3 per share. At expiration the stock is at $100. What is the total profit or loss on 6 contracts (100 shares each), in dollars?
   - +$18
   - [x] +$1,800
   - +$300
   - −$1,800
   > Per share the position makes +$3 at $100. For 6 contracts: +$3 × 100 × 6 = +$1,800.

14. {#bk9} [calc] A trader builds a Bear Call Spread: buys one $105 call and sells one $100 call, for a net credit of $3 per share. How much cash is received up front in total if the trader opens 10 contracts (100 shares each)?
   - $30
   - $300
   - $3,300
   - [x] $3,000
   > The net credit is $3 per share. For 10 contracts: $3 × 100 × 10 = $3,000.

15. {#bk10} [calc] A trader builds a Bear Call Spread: buys one $105 call and sells one $100 call, for a net credit of $3 per share. What is the ratio of maximum profit to maximum loss?
   - 0.67 to 1
   - 3 to 1
   - [x] 1.5 to 1
   - 2 to 1
   > Maximum profit is $3 and maximum loss is $2 per share, so the ratio is $3 / $2 = 1.5 to 1.
