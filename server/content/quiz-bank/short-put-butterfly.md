---
slug: short-put-butterfly
---

# Quiz

1. {#q1} When might a trader use a short put butterfly?
   - They expect the stock to pin an exact price at expiration and want a cheap bet on that outcome
   - They want unlimited profit from a large move and are willing to accept a large loss if it fails
   - They expect a very quiet market and want to collect premium without any risk at all on the position
   - [x] They expect a bigger move than usual but want defined, modest risk instead of a short straddle or strangle
   > It profits when the stock ends far from the middle strike.

2. {#q2} What is the trade-off compared with a true volatility-selling position?
   - [x] Risk is capped no matter how far the stock moves, but the maximum gain is much smaller
   - The loss is unlimited but the gain is larger
   - The profit is unlimited, because the long middle puts keep gaining as the stock moves further away
   - There is no risk at all, because the long middle puts cancel the short wings at every stock price
   > The long middle puts cap the loss but limit the credit.

3. {#q3} How is a short put butterfly built?
   - Buy 1 put above the middle strike, sell 2 puts at the middle strike, and buy 1 put below it, evenly spaced
   - [x] Sell 1 put above the middle strike, buy 2 puts at the middle strike, and sell 1 put below it, evenly spaced
   - Sell 2 puts at the middle strike only, collecting a larger credit but taking on large risk in a decline
   - Buy a call and a put at the middle strike, then sell a call and a put on either side at even spacing
   > It is the reverse of a long put butterfly.

4. {#q4} The stock finishes far from the middle strike in either direction. What happens?
   - The trader loses the full width of the strikes, because the short wings finish deep in the money
   - The trader earns unlimited profit
   - [x] The trader keeps close to the full credit
   - The trader is assigned shares at the middle strike, because the short wings finish in the money
   > A large move is the outcome the position is built for.

5. {#calc1} [calc] A trader builds a Short Put Butterfly: sells one $110 put, buys two $100 puts, and sells one $90 put, for a net credit of $3 per share. What is the maximum profit at expiration, per share?
   - $7
   - $20
   - [x] $3
   - $93
   > For this position (K1 = 110, K2 = 100, K3 = 90, net credit = 3), the maximum profit is $3 per share. Formula: P_max = C.

6. {#bk1} [calc] A trader builds a Short Put Butterfly: sells one $110 put, buys two $100 puts, and sells one $90 put, for a net credit of $3 per share. What is the maximum loss at expiration, per share?
   - $3
   - [x] $7
   - $20
   - $93
   > For this position (K1 = 110, K2 = 100, K3 = 90, net credit = 3), the maximum loss is $7 per share. Formula: L_max = κ - C, where κ = K1-K2 = K2-K3.

7. {#bk2} [calc] A trader builds a Short Put Butterfly: sells one $110 put, buys two $100 puts, and sells one $90 put, for a net credit of $3 per share. What is the lower break-even stock price at expiration, per share?
   - $107
   - $20
   - $7
   - [x] $93
   > For this position (K1 = 110, K2 = 100, K3 = 90, net credit = 3), the lower break-even stock price is $93 per share. Formula: S*_down = K3 + C; S*_up = K1 - C.

8. {#bk3} [calc] A trader builds a Short Put Butterfly: sells one $110 put, buys two $100 puts, and sells one $90 put, for a net credit of $3 per share. What is the upper break-even stock price at expiration, per share?
   - $93
   - [x] $107
   - $20
   - $7
   > For this position (K1 = 110, K2 = 100, K3 = 90, net credit = 3), the upper break-even stock price is $107 per share. Formula: S*_down = K3 + C; S*_up = K1 - C.

9. {#bk4} [calc] A trader builds a Short Put Butterfly: sells one $110 put, buys two $100 puts, and sells one $90 put, for a net credit of $3 per share. At expiration the stock is at $82. What is the trader's profit or loss per share, counting the premium?
   - −$3
   - +$9
   - [x] +$3
   - +$4
   > At $82 the option legs are worth $0 per share before the premium, and the net premium adds +$3, for +$3 per share (given K1 = 110, K2 = 100, K3 = 90, net credit = 3).

10. {#bk5} [calc] A trader builds a Short Put Butterfly: sells one $110 put, buys two $100 puts, and sells one $90 put, for a net credit of $3 per share. At expiration the stock is at $103. What is the trader's profit or loss per share, counting the premium?
   - [x] −$4
   - +$4
   - −$7
   - +$2
   > At $103 the option legs are worth −$7 per share before the premium, and the net premium adds +$3, for −$4 per share (given K1 = 110, K2 = 100, K3 = 90, net credit = 3).

11. {#bk6} [calc] A trader builds a Short Put Butterfly: sells one $110 put, buys two $100 puts, and sells one $90 put, for a net credit of $3 per share. What is the maximum loss on 3 contracts (100 shares each), in dollars?
   - $21
   - $700
   - [x] $2,100
   - $2,800
   > The maximum loss is $7 per share. One contract covers 100 shares, so 3 contracts give $7 × 100 × 3 = $2,100.

12. {#bk7} [calc] A trader builds a Short Put Butterfly: sells one $110 put, buys two $100 puts, and sells one $90 put, for a net credit of $3 per share. The stock is at $100 at expiration. What is the profit or loss per share, counting the premium?
   - [x] −$7
   - +$7
   - −$10
   - −$1
   > At $100 the legs are worth −$10 per share before the premium, and the net premium adds +$3, for −$7 per share (given K1 = 110, K2 = 100, K3 = 90, net credit = 3).

13. {#bk8} [calc] A trader builds a Short Put Butterfly: sells one $110 put, buys two $100 puts, and sells one $90 put, for a net credit of $3 per share. The stock is at $101 at expiration. What is the profit or loss per share, counting the premium?
   - +$6
   - [x] −$6
   - −$9
   - −$5
   > At $101 the legs are worth −$9 per share before the premium, and the net premium adds +$3, for −$6 per share (given K1 = 110, K2 = 100, K3 = 90, net credit = 3).

14. {#bk9} [calc] A trader builds a Short Put Butterfly: sells one $110 put, buys two $100 puts, and sells one $90 put, for a net credit of $3 per share. At expiration the stock is at $110. What is the total profit or loss on 5 contracts (100 shares each), in dollars?
   - +$15
   - +$300
   - −$1,500
   - [x] +$1,500
   > Per share the position makes +$3 at $110. For 5 contracts: +$3 × 100 × 5 = +$1,500.

15. {#bk10} [calc] A trader builds a Short Put Butterfly: sells one $110 put, buys two $100 puts, and sells one $90 put, for a net credit of $3 per share. How much cash is received up front in total if the trader opens 8 contracts (100 shares each)?
   - $24
   - $300
   - [x] $2,400
   - $2,700
   > The net credit is $3 per share. For 8 contracts: $3 × 100 × 8 = $2,400.

16. {#bk11} [calc] A trader builds a Short Put Butterfly: sells one $110 put, buys two $100 puts, and sells one $90 put, for a net credit of $3 per share. What is the ratio of maximum profit to maximum loss?
   - [x] 0.43 to 1
   - 2.33 to 1
   - 3 to 1
   - 7 to 1
   > Maximum profit is $3 and maximum loss is $7 per share, so the ratio is $3 / $7 = 0.43 to 1.
