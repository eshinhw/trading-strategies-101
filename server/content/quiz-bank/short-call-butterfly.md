---
slug: short-call-butterfly
---

# Quiz

1. {#q1} When might a trader use a short call butterfly?
   - [x] They expect a bigger move than usual but want defined, modest risk instead of a short straddle or strangle
   - They expect the stock to pin an exact price at expiration and want a cheap bet on that outcome
   - They want unlimited profit from a large move and are willing to accept a large loss if it fails
   - They expect a very quiet market and want to collect premium without any risk at all on the position
   > It profits when the stock ends far from the middle strike.

2. {#q2} What is the trade-off compared with a true volatility-selling position?
   - The loss is unlimited, but the gain is larger, because the short wings are exposed to a very large move
   - [x] Risk is capped no matter how far the stock moves, but the maximum gain is much smaller
   - The profit is unlimited, because the long middle calls keep gaining as the stock moves further away
   - There is no risk at all, because the long middle calls cancel the short wings at every stock price
   > The long middle calls cap the loss but limit the credit.

3. {#q3} How is a short call butterfly built?
   - Buy 1 call below the middle strike, sell 2 calls at the middle strike, and buy 1 call above it, evenly spaced
   - Sell 2 calls at the middle strike only, collecting a larger credit but taking on unlimited risk in a rally
   - [x] Sell 1 call below the middle strike, buy 2 calls at the middle strike, and sell 1 call above it, evenly spaced
   - Buy a call and a put at the middle strike, then sell a call and a put on either side at even spacing
   > It is the reverse of a long call butterfly.

4. {#q4} The stock finishes exactly at the middle strike. What happens?
   - The trader earns the maximum profit, because the long middle calls finish at their most valuable level
   - The trader loses an unlimited amount
   - The trader is assigned shares at the middle strike, because the short wings finish deep in the money
   - [x] The trader has the worst, though still capped, result
   > The credit is kept in full only when the stock ends far from the middle.

5. {#calc1} [calc] A trader builds a Short Call Butterfly: sells one $90 call, buys two $100 calls, and sells one $110 call, for a net credit of $3 per share. What is the maximum loss at expiration, per share?
   - $3
   - $20
   - $93
   - [x] $7
   > For this position (K1 = 90, K2 = 100, K3 = 110, net credit = 3), the maximum loss is $7 per share. Formula: L_max = κ - C, where κ = K3-K2 = K2-K1.

6. {#bk1} [calc] A trader builds a Short Call Butterfly: sells one $90 call, buys two $100 calls, and sells one $110 call, for a net credit of $3 per share. What is the maximum profit at expiration, per share?
   - [x] $3
   - $7
   - $20
   - $93
   > For this position (K1 = 90, K2 = 100, K3 = 110, net credit = 3), the maximum profit is $3 per share. Formula: P_max = C.

7. {#bk2} [calc] A trader builds a Short Call Butterfly: sells one $90 call, buys two $100 calls, and sells one $110 call, for a net credit of $3 per share. What is the lower break-even stock price at expiration, per share?
   - $107
   - $20
   - [x] $93
   - $7
   > For this position (K1 = 90, K2 = 100, K3 = 110, net credit = 3), the lower break-even stock price is $93 per share. Formula: S*_up = K3 - C; S*_down = K1 + C.

8. {#bk3} [calc] A trader builds a Short Call Butterfly: sells one $90 call, buys two $100 calls, and sells one $110 call, for a net credit of $3 per share. What is the upper break-even stock price at expiration, per share?
   - [x] $107
   - $93
   - $20
   - $7
   > For this position (K1 = 90, K2 = 100, K3 = 110, net credit = 3), the upper break-even stock price is $107 per share. Formula: S*_up = K3 - C; S*_down = K1 + C.

9. {#bk4} [calc] A trader builds a Short Call Butterfly: sells one $90 call, buys two $100 calls, and sells one $110 call, for a net credit of $3 per share. At expiration the stock is at $103. What is the trader's profit or loss per share, counting the premium?
   - +$4
   - −$7
   - +$2
   - [x] −$4
   > At $103 the option legs are worth −$7 per share before the premium, and the net premium adds +$3, for −$4 per share (given K1 = 90, K2 = 100, K3 = 110, net credit = 3).

10. {#bk5} [calc] A trader builds a Short Call Butterfly: sells one $90 call, buys two $100 calls, and sells one $110 call, for a net credit of $3 per share. At expiration the stock is at $118. What is the trader's profit or loss per share, counting the premium?
   - −$3
   - [x] +$3
   - +$9
   - +$4
   > At $118 the option legs are worth $0 per share before the premium, and the net premium adds +$3, for +$3 per share (given K1 = 90, K2 = 100, K3 = 110, net credit = 3).

11. {#bk6} [calc] A trader builds a Short Call Butterfly: sells one $90 call, buys two $100 calls, and sells one $110 call, for a net credit of $3 per share. What is the maximum loss on 5 contracts (100 shares each), in dollars?
   - $35
   - $700
   - $4,200
   - [x] $3,500
   > The maximum loss is $7 per share. One contract covers 100 shares, so 5 contracts give $7 × 100 × 5 = $3,500.

12. {#bk7} [calc] A trader builds a Short Call Butterfly: sells one $90 call, buys two $100 calls, and sells one $110 call, for a net credit of $3 per share. The stock is at $78 at expiration. What is the profit or loss per share, counting the premium?
   - −$3
   - [x] +$3
   - +$9
   - +$4
   > At $78 the legs are worth $0 per share before the premium, and the net premium adds +$3, for +$3 per share (given K1 = 90, K2 = 100, K3 = 110, net credit = 3).

13. {#bk8} [calc] A trader builds a Short Call Butterfly: sells one $90 call, buys two $100 calls, and sells one $110 call, for a net credit of $3 per share. The stock is at $87 at expiration. What is the profit or loss per share, counting the premium?
   - [x] +$3
   - −$3
   - +$9
   - +$4
   > At $87 the legs are worth $0 per share before the premium, and the net premium adds +$3, for +$3 per share (given K1 = 90, K2 = 100, K3 = 110, net credit = 3).

14. {#bk9} [calc] A trader builds a Short Call Butterfly: sells one $90 call, buys two $100 calls, and sells one $110 call, for a net credit of $3 per share. At expiration the stock is at $90. What is the total profit or loss on 7 contracts (100 shares each), in dollars?
   - +$21
   - +$300
   - [x] +$2,100
   - −$2,100
   > Per share the position makes +$3 at $90. For 7 contracts: +$3 × 100 × 7 = +$2,100.

15. {#bk10} [calc] A trader builds a Short Call Butterfly: sells one $90 call, buys two $100 calls, and sells one $110 call, for a net credit of $3 per share. How much cash is received up front in total if the trader opens 6 contracts (100 shares each)?
   - $18
   - [x] $1,800
   - $300
   - $2,100
   > The net credit is $3 per share. For 6 contracts: $3 × 100 × 6 = $1,800.

16. {#bk11} [calc] A trader builds a Short Call Butterfly: sells one $90 call, buys two $100 calls, and sells one $110 call, for a net credit of $3 per share. What is the ratio of maximum profit to maximum loss?
   - 2.33 to 1
   - 3 to 1
   - 7 to 1
   - [x] 0.43 to 1
   > Maximum profit is $3 and maximum loss is $7 per share, so the ratio is $3 / $7 = 0.43 to 1.
