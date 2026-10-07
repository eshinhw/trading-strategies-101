---
slug: modified-put-butterfly
---

# Quiz

1. How does a modified put butterfly differ from a plain put butterfly?
   - The strikes are identical, so the position is a regular put butterfly that always costs a little more to enter
   - It uses calls instead of puts, which turns the bullish lean into a bearish lean around the middle strike
   - [x] The strikes are spaced unevenly, which can turn it into a small net credit and tilts the payoff toward a bullish outcome
   - It always costs more than a plain butterfly, since the uneven wings add extra premium to the structure
   > Uneven spacing changes both the cost and the shape of the profit zone.

2. What view does a modified put butterfly express?
   - The stock will make a very large move in either direction, so the outer puts gain a great deal of value
   - The stock will collapse far below every strike, so that all of the puts finish with their full value
   - The stock will rise far above all strikes
   - [x] The stock will settle near the middle strike, with a bullish lean
   > It keeps the pinned-outcome idea with a bullish skew.

3. How is a modified put butterfly built?
   - [x] Buy a put well below the target, sell 2 puts at the target, and buy a put only slightly above it
   - Buy 2 puts at the target and sell the wings, one well below the target and one only slightly above it
   - Sell a put below the target and buy 2 at the target
   - Buy puts and calls at the same strike, then sell a wing on one side to skew the position toward a rise
   > The wings are different distances from the body, ideally producing a net credit.

4. Where does the position profit?
   - Only if the stock rises sharply, because the narrower wing on one side makes the position gain from a rally
   - [x] When the stock lands at or below the middle strike, but not too far below the lowest strike
   - Only if the stock collapses far below every strike, since the long puts then finish with their full value
   - Only if the stock finishes above the highest strike, where all of the puts expire worthless for the trader
   > A large move either way limits the gain or turns it into a loss.

5. {#calc1} [calc] A trader builds a Modified Put Butterfly: buys one $85 put, sells two $100 puts, and buys one $105 put, for a net credit of $1 per share. What is the maximum profit at expiration, per share?
   - [x] $6
   - $9
   - $1
   - $20
   > For this position (K1 = 85, K2 = 100, K3 = 105, net credit = 1), the maximum profit is $6 per share. Formula: P_max = K3 - K2 - H.
