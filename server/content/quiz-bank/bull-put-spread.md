---
slug: bull-put-spread
---

# Quiz

1. {#q1} What view fits a bull put spread?
   - The stock will fall sharply, and the trader wants to profit from the decline using a defined-risk position
   - The stock will move a lot in either direction, and the trader wants to profit from the size of the move
   - The stock will rise explosively, and the trader wants unlimited profit from every dollar of the rise
   - [x] The stock will hold above a certain level, or at least won't crash, and you want to collect income
   > It is a bullish to neutral credit strategy.

2. {#q2} How does the long put improve on selling a naked put?
   - [x] It caps the loss if the stock falls hard, at the cost of some premium
   - It increases the maximum profit, because the long put adds a second premium to the credit collected
   - It removes the possibility of any loss, because the long put pays out in every price scenario
   - It pays additional income, because the long put earns a premium while the short put is open
   > The purchased put defines the risk of the trade.

3. {#q3} How is a bull put spread built?
   - Buy a put closer to the current price and sell a put at a lower strike
   - [x] Sell a put closer to the current price and buy a put at a lower strike, same expiration
   - Sell a call and buy a call at a higher strike, so that the position profits when the stock falls
   - Buy a put and a call at the same strike, so that the position profits from a large move either way
   > The short put is the higher strike, and the long put is the protection below it.

4. {#q4} A trader sells the 95 put and buys the 90 put for a net credit. The stock finishes above 95. What happens?
   - The trader must buy shares at 95, because both of the puts are exercised against the trader
   - The trader loses the width of the spread
   - [x] Both puts expire worthless and the trader keeps the full credit
   - The trader keeps only half of the credit, because the long put also has to be paid for
   > The maximum profit is the credit, earned when the stock stays above the short strike.

5. {#calc1} [calc] A trader builds a Bull Put Spread: buys one $90 put and sells one $95 put, for a net credit of $2 per share. What is the break-even stock price at expiration, per share?
   - $5
   - $3
   - $2
   - [x] $93
   > For this position (K1 = 90, K2 = 95, net credit = 2), the break-even stock price is $93 per share. Formula: S* = K2 - C.

6. {#bk1} [calc] A trader builds a Bull Put Spread: buys one $90 put and sells one $95 put, for a net credit of $2 per share. What is the maximum loss at expiration, per share?
   - $2
   - [x] $3
   - $5
   - $93
   > For this position (K1 = 90, K2 = 95, net credit = 2), the maximum loss is $3 per share. Formula: L_max = K2 - K1 - C.

7. {#bk2} [calc] A trader builds a Bull Put Spread: buys one $90 put and sells one $95 put, for a net credit of $2 per share. What is the maximum profit at expiration, per share?
   - $3
   - $5
   - $93
   - [x] $2
   > For this position (K1 = 90, K2 = 95, net credit = 2), the maximum profit is $2 per share. Formula: P_max = C.

8. {#bk3} [calc] A trader builds a Bull Put Spread: buys one $90 put and sells one $95 put, for a net credit of $2 per share. At expiration the stock is at $103. What is the trader's profit or loss per share, counting the premium?
   - −$2
   - [x] +$2
   - +$6
   - +$3
   > At $103 the option legs are worth $0 per share before the premium, and the net premium adds +$2, for +$2 per share (given K1 = 90, K2 = 95, net credit = 2).

9. {#bk4} [calc] A trader builds a Bull Put Spread: buys one $90 put and sells one $95 put, for a net credit of $2 per share. At expiration the stock is at $82. What is the trader's profit or loss per share, counting the premium?
   - +$3
   - −$5
   - [x] −$3
   - +$1
   > At $82 the option legs are worth −$5 per share before the premium, and the net premium adds +$2, for −$3 per share (given K1 = 90, K2 = 95, net credit = 2).

10. {#bk5} [calc] A trader builds a Bull Put Spread: buys one $90 put and sells one $95 put, for a net credit of $2 per share. What is the maximum loss on 4 contracts (100 shares each), in dollars?
   - [x] $1,200
   - $12
   - $300
   - $1,500
   > The maximum loss is $3 per share. One contract covers 100 shares, so 4 contracts give $3 × 100 × 4 = $1,200.

11. {#bk6} [calc] A trader builds a Bull Put Spread: buys one $90 put and sells one $95 put, for a net credit of $2 per share. The stock is at $78 at expiration. What is the profit or loss per share, counting the premium?
   - +$3
   - −$5
   - [x] −$3
   - +$1
   > At $78 the legs are worth −$5 per share before the premium, and the net premium adds +$2, for −$3 per share (given K1 = 90, K2 = 95, net credit = 2).

12. {#bk7} [calc] A trader builds a Bull Put Spread: buys one $90 put and sells one $95 put, for a net credit of $2 per share. The stock is at $87 at expiration. What is the profit or loss per share, counting the premium?
   - [x] −$3
   - +$3
   - −$5
   - +$1
   > At $87 the legs are worth −$5 per share before the premium, and the net premium adds +$2, for −$3 per share (given K1 = 90, K2 = 95, net credit = 2).

13. {#bk8} [calc] A trader builds a Bull Put Spread: buys one $90 put and sells one $95 put, for a net credit of $2 per share. At expiration the stock is at $90. What is the total profit or loss on 5 contracts (100 shares each), in dollars?
   - −$15
   - [x] −$1,500
   - −$300
   - +$1,500
   > Per share the position makes −$3 at $90. For 5 contracts: −$3 × 100 × 5 = −$1,500.

14. {#bk9} [calc] A trader builds a Bull Put Spread: buys one $90 put and sells one $95 put, for a net credit of $2 per share. How much cash is received up front in total if the trader opens 4 contracts (100 shares each)?
   - $8
   - $200
   - $1,000
   - [x] $800
   > The net credit is $2 per share. For 4 contracts: $2 × 100 × 4 = $800.

15. {#bk10} [calc] A trader builds a Bull Put Spread: buys one $90 put and sells one $95 put, for a net credit of $2 per share. What is the ratio of maximum profit to maximum loss?
   - 1.5 to 1
   - 2 to 1
   - [x] 0.67 to 1
   - 3 to 1
   > Maximum profit is $2 and maximum loss is $3 per share, so the ratio is $2 / $3 = 0.67 to 1.
