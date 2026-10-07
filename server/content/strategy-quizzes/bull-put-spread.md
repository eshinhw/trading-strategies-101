---
slug: bull-put-spread
---

# Quiz

1. What view fits a bull put spread?
   - The stock will fall sharply, and the trader wants to profit from the decline using a defined-risk position
   - The stock will move a lot in either direction, and the trader wants to profit from the size of the move
   - The stock will rise explosively, and the trader wants unlimited profit from every dollar of the rise
   - [x] The stock will hold above a certain level, or at least won't crash, and you want to collect income
   > It is a bullish to neutral credit strategy.

2. How does the long put improve on selling a naked put?
   - [x] It caps the loss if the stock falls hard, at the cost of some premium
   - It increases the maximum profit, because the long put adds a second premium to the credit collected
   - It removes the possibility of any loss, because the long put pays out in every price scenario
   - It pays additional income, because the long put earns a premium while the short put is open
   > The purchased put defines the risk of the trade.

3. How is a bull put spread built?
   - Buy a put closer to the current price and sell a put at a lower strike
   - [x] Sell a put closer to the current price and buy a put at a lower strike, same expiration
   - Sell a call and buy a call at a higher strike, so that the position profits when the stock falls
   - Buy a put and a call at the same strike, so that the position profits from a large move either way
   > The short put is the higher strike, and the long put is the protection below it.

4. A trader sells the 95 put and buys the 90 put for a net credit. The stock finishes above 95. What happens?
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
