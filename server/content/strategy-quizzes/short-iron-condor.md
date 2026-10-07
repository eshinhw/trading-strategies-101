---
slug: short-iron-condor
---

# Quiz

1. When might a trader use a short iron condor?
   - They expect the stock to stay in a range, so they want the short options to lose their value over time
   - [x] They expect a breakout in either direction and want defined, limited risk instead of a naked directional bet
   - They want to collect income from a quiet market, so they sell an out-of-the-money put spread and call spread
   - They want unlimited profit from a breakout, so they avoid selling any of the options further from the money
   > It profits from a move beyond the wings.

2. Why is it cheaper than a long straddle or strangle?
   - It collects a credit instead of paying one
   - It has unlimited profit, because the sold wings gain value whenever the stock breaks out of the range
   - [x] The sold wings offset part of the cost, and the debit paid is the maximum loss
   - It has no maximum loss, because the sold wings cannot cancel the cost of the options that are bought
   > The tradeoff is a capped maximum profit.

3. How is a short iron condor built?
   - Sell an out-of-the-money put spread and an out-of-the-money call spread at the same time, same expiration
   - Sell a straddle and buy a strangle at the same strike, collecting a credit that is not at risk of loss
   - Buy a call and a put at the same strike, then sell a further call and put to increase the overall cost
   - [x] Buy an out-of-the-money put spread and an out-of-the-money call spread at the same time, same expiration
   > It is a bear put spread plus a bull call spread.

4. The stock stays range-bound. What happens?
   - [x] The trader loses the debit paid
   - The trader earns the maximum profit, because the bought options keep their value if the stock stays put
   - The trader loses an unlimited amount, because the sold wings are exposed to a very large move upward
   - The trader keeps a credit
   > Without a breakout, the options expire worthless.

5. {#calc1} [calc] A trader builds a Short Iron Condor: sells one $85 put, buys one $95 put, buys one $105 call, and sells one $115 call, for a net debit of $4 per share. What is the lower break-even stock price at expiration, per share?
   - $109
   - [x] $91
   - $30
   - $6
   > For this position (K1 = 85, K2 = 95, K3 = 105, K4 = 115, net debit = 4), the lower break-even stock price is $91 per share. Formula: S*_up = K3 + D; S*_down = K2 - D.
