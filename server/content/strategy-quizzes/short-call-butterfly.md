---
slug: short-call-butterfly
---

# Quiz

1. When might a trader use a short call butterfly?
   - [x] They expect a bigger move than usual but want defined, modest risk instead of a short straddle or strangle
   - They expect the stock to pin an exact price at expiration and want a cheap bet on that outcome
   - They want unlimited profit from a large move and are willing to accept a large loss if it fails
   - They expect a very quiet market and want to collect premium without any risk at all on the position
   > It profits when the stock ends far from the middle strike.

2. What is the trade-off compared with a true volatility-selling position?
   - The loss is unlimited, but the gain is larger, because the short wings are exposed to a very large move
   - [x] Risk is capped no matter how far the stock moves, but the maximum gain is much smaller
   - The profit is unlimited, because the long middle calls keep gaining as the stock moves further away
   - There is no risk at all, because the long middle calls cancel the short wings at every stock price
   > The long middle calls cap the loss but limit the credit.

3. How is a short call butterfly built?
   - Buy 1 call below the middle strike, sell 2 calls at the middle strike, and buy 1 call above it, evenly spaced
   - Sell 2 calls at the middle strike only, collecting a larger credit but taking on unlimited risk in a rally
   - [x] Sell 1 call below the middle strike, buy 2 calls at the middle strike, and sell 1 call above it, evenly spaced
   - Buy a call and a put at the middle strike, then sell a call and a put on either side at even spacing
   > It is the reverse of a long call butterfly.

4. The stock finishes exactly at the middle strike. What happens?
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
