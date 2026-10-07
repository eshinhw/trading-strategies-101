---
slug: modified-call-butterfly
---

# Quiz

1. How does a modified call butterfly differ from a plain butterfly?
   - The strikes are identical, so the position is just a regular butterfly with a slightly lower cost to enter
   - It uses puts instead of calls, which turns the bullish lean into a bearish lean on the middle strike
   - It profits from large moves instead of small ones, because the uneven wings gain value if the stock moves
   - [x] The strikes are spaced unevenly, which skews the profit zone toward a modest rally
   > Uneven spacing shifts where the profit zone sits.

2. What view does a modified call butterfly express?
   - [x] The stock will settle near the middle strike, with a bullish lean and a limited move
   - A large move in either direction
   - A steep decline, because the narrower wing on one side makes the position gain value as the stock falls
   - A very large rally, because the wider wing on one side lets the position gain value without any limit
   > It keeps the pinned-outcome logic with extra room on the bullish side.

3. How is a modified call butterfly built?
   - Buy 2 calls at the target and sell the wings, one well below the target and one only slightly above it
   - [x] Buy a call well below the target, sell 2 calls at the target, and buy a call only slightly above it
   - Sell a call below the target and buy 2 at the target
   - Buy calls and puts at the same strike, then sell a wing on one side to skew the position toward a rally
   > The wings are different distances from the body.

4. Where does the sweet spot of a modified call butterfly sit?
   - Far above the highest strike, where the long calls have gained the most and the short calls have lost the most
   - Below the lowest strike, where all of the calls expire worthless and the premium paid is kept by the trader
   - [x] Skewed toward the moderate-rally side of the middle strike
   - Exactly at the current price only
   > The uneven spacing leans the profit zone toward the bullish side.

5. {#calc1} [calc] A trader builds a Modified Call Butterfly: buys one $105 call, sells two $100 calls, and buys one $85 call, for a net debit of $3 per share. What is the break-even stock price at expiration, per share?
   - $20
   - $12
   - $3
   - [x] $88
   > For this position (K3 = 85, K2 = 100, K1 = 105, net debit = 3), the break-even stock price is $88 per share. Formula: S* = K3 + D.
