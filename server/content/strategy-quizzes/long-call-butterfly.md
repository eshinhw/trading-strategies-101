---
slug: long-call-butterfly
---

# Quiz

1. What outcome does a long call butterfly bet on?
   - The stock makes a very large move
   - The stock rises steadily through every strike, so that all of the calls finish deep in the money
   - The stock collapses below the lowest strike, so that every call in the position expires worthless
   - [x] The stock ends very close to a specific price at expiration, a low-volatility, pinned outcome
   > A butterfly has its maximum profit at the middle strike.

2. Why is a long call butterfly cheap to put on?
   - [x] The two short calls in the middle largely offset the cost of the two long wing calls
   - The options are all out of the money
   - It involves no options at all, since the position is built entirely from the shares of the underlying stock
   - It is financed by selling stock, so the proceeds pay for the whole structure with no net cash required
   > The tradeoff for the low cost is a small, capped profit.

3. How is a long call butterfly built?
   - Sell 1 call below the target, buy 2 calls at the target, and sell 1 call above it, with evenly spaced strikes
   - [x] Buy 1 call below the target, sell 2 calls at the target, and buy 1 call above it, with evenly spaced strikes
   - Buy 2 calls at the target and sell 1 call on each side of it, with strikes that are evenly spaced out
   - Buy 1 call and 1 put at the target, with a further call and put on either side at evenly spaced strikes
   > The middle strike is the short body, with long wings on either side.

4. The stock finishes far from the middle strike in either direction. What happens?
   - The trader loses an unlimited amount, because the short calls are exposed to a very large move
   - The trader earns the maximum profit, because both of the wings gain value when the stock moves away
   - [x] The trader loses only the net debit paid
   - The trader is assigned shares at the middle strike, because the short calls finish in the money
   > Risk is limited to the debit.

5. {#calc1} [calc] A trader builds a Long Call Butterfly: buys one $110 call, sells two $100 calls, and buys one $90 call, for a net debit of $3 per share. What is the lower break-even stock price at expiration, per share?
   - $107
   - [x] $93
   - $20
   - $7
   > For this position (K3 = 90, K2 = 100, K1 = 110, net debit = 3), the lower break-even stock price is $93 per share. Formula: S*_down = K3 + D; S*_up = K1 - D.
