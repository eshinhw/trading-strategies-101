---
slug: ratio-call-spread
---

# Quiz

1. Who would use a ratio call spread?
   - Someone who expects a large rally and wants the long call to produce unlimited profit if the stock jumps
   - [x] Someone who expects the stock to stay flat or drift lower, wants income, and accepts open-ended risk on a hard rally
   - Someone who wants limited risk in every scenario and is willing to collect a smaller credit to obtain it
   - Someone who expects a large move in either direction and wants to profit from the size of that move alone
   > It is a bearish to neutral credit strategy with an uncovered short call.

2. What is the main risk of a ratio call spread?
   - The loss is limited to the credit, because the long call protects the position against every rally
   - The loss is limited to the width of the strikes
   - [x] Past the upper breakeven, losses are unlimited, since the position is net short calls
   - There is no loss if the stock rises, because the long call gains more than the short calls give back
   > The extra short call is uncovered.

3. How is a ratio call spread built?
   - Sell an in-the-money call and buy more calls at a higher strike
   - Buy a call and a put at the same strike, so that the position profits from a large move in either direction
   - Sell a call and sell a put at the same strike, so that the position collects premium from both of the legs
   - [x] Buy an in-the-money call and sell more calls than you bought at a higher strike, same expiration
   > The short calls outnumber the long calls.

4. The stock unexpectedly rallies to 140. What happens?
   - [x] The extra uncovered short call produces a large, growing loss
   - The trader earns the maximum profit, because the long call gains more than the short calls lose in a rally
   - The trader keeps the credit, because the short calls expire worthless whenever the stock rises sharply higher
   - The loss is capped at a small amount
   > A big rally is the scenario the position is exposed to.

5. {#calc1} [calc] A trader builds a Ratio Call Spread: sells two $100 calls and buys one $95 call, for a net credit of $2 per share. What is the break-even stock price at expiration, per share?
   - $7
   - $5
   - $2
   - [x] $107
   > For this position (K2 = 95, K1 = 100, NL = 1, NS = 2, net credit = 2), the break-even stock price is $107 per share. Formula: S*_down = K2 - netCF/NL; S*_up = (NS×K1 - NL×K2 + netCF)/(NS-NL).
