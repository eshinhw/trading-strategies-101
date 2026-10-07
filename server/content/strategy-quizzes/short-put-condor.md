---
slug: short-put-condor
---

# Quiz

1. When might a trader use a short put condor?
   - [x] They expect the stock to break out of a range in either direction but want defined, modest risk, safer than a short strangle
   - They expect the stock to stay in a tight range and want a cheap bet on that outcome at expiration
   - They want unlimited profit from a large move and are willing to accept a large loss if it fails
   - They expect no movement at all and want to collect premium without any risk on the position
   > It profits from a move outside the range.

2. What is the trade-off compared with a short strangle?
   - The loss is unlimited but the gain is larger
   - [x] The loss is capped, but the maximum gain is much smaller
   - The profit is unlimited, because the long inner puts keep gaining as the stock moves further away
   - There is no risk at all, because the long inner puts cancel the short outer puts at every price
   > Long options inside the range cap the loss.

3. How is a short put condor built?
   - Buy 1 put below the range, sell 2 inside it, and buy 1 above the range, with the strikes evenly spaced out
   - Sell 2 puts at the middle and buy the wings, so that the position profits most when the stock stays put
   - [x] Sell 1 put below the range, buy 1 at its lower edge, buy 1 at its upper edge, and sell 1 above, evenly spaced
   - Buy a put and a call at the same strike, then sell a put and a call at strikes on either side of the price
   > It is the reverse of a long put condor.

4. The stock ends outside the range, beyond the outer strikes. What happens?
   - The trader loses the full width of the strikes, because the outer short puts finish deep in the money
   - The trader earns unlimited profit
   - The trader is assigned shares at the upper short strike, because the options finish in the money
   - [x] The trader keeps close to the full credit
   > A breakout is the outcome the position is built for.

5. {#calc1} [calc] A trader builds a Short Put Condor: sells one $85 put, buys one $95 put, buys one $105 put, and sells one $115 put, for a net credit of $3 per share. What is the upper break-even stock price at expiration, per share?
   - $88
   - [x] $112
   - $30
   - $7
   > For this position (K1 = 85, K2 = 95, K3 = 105, K4 = 115, net credit = 3), the upper break-even stock price is $112 per share. Formula: S*_up = K4 - C; S*_down = K1 + C.
