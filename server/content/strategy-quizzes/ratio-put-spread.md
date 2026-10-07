---
slug: ratio-put-spread
---

# Quiz

1. Who would use a ratio put spread?
   - [x] Someone who expects the stock to stay flat or drift higher, wants income, and accepts large risk on a hard fall
   - Someone who expects a large decline and wants the long put to produce a large profit if the stock drops
   - Someone who wants limited risk in every scenario and is willing to collect a smaller credit to obtain it
   - Someone who expects a large move in either direction and wants to profit from the size of that move alone
   > It is a bullish to neutral credit strategy with an uncovered short put.

2. What is the main risk of a ratio put spread?
   - The loss is limited to the credit, because the long put protects the position against every decline
   - [x] Below the lower breakeven, losses grow quickly, since the position is net short puts
   - The loss is limited to the width of the strikes, because the extra short put is covered by the long put
   - There is no loss if the stock falls, because the long put gains more than the short puts give back
   > The extra short put is uncovered.

3. How is a ratio put spread built?
   - Sell an in-the-money put and buy more puts than you sold at a lower strike, paying a premium for the position
   - Buy a call and a put at the same strike, so that the position profits from a large move in either direction
   - [x] Buy an in-the-money put and sell more puts than you bought at a lower strike, same expiration
   - Sell a call and sell a put at the same strike, so that the position collects premium from both of the legs
   > The short puts outnumber the long puts.

4. The stock unexpectedly crashes to 60. What happens?
   - The trader earns the maximum profit, because the long put gains more than the short puts lose in a crash
   - The trader keeps the credit, because the short puts expire worthless whenever the stock falls sharply lower
   - The loss is capped at a small amount
   - [x] The extra uncovered short put produces a large loss
   > A big drop is the scenario the position is exposed to.

5. {#calc1} [calc] A trader builds a Ratio Put Spread: sells two $100 puts and buys one $105 put, for a net credit of $2 per share. What is the maximum profit at expiration, per share?
   - $5
   - $2
   - [x] $7
   - $93
   > For this position (K2 = 105, K1 = 100, NL = 1, NS = 2, net credit = 2), the maximum profit is $7 per share. Formula: P_max = NL×(K2 - K1) + netCF.
