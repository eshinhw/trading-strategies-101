---
slug: short-combo
---

# Quiz

1. How does a short combo differ from a short synthetic forward?
   - It uses the same strike for both options, which makes it a more expensive position with no flat zone
   - It has limited downside, since the short call caps the loss that the long put could otherwise produce
   - It profits when the stock rises, since the short call gains value as the stock moves higher in price
   - [x] It uses out-of-the-money strikes, which makes it cheaper but leaves a flat zone between the strikes
   > Different strikes create a dead zone where the position neither gains nor loses much.

2. What happens if the stock stays between the two strikes at expiration?
   - [x] The position roughly breaks even, since both options are out of the money
   - It earns the maximum profit
   - It suffers the maximum loss, because both options expire worthless and the premium paid is lost
   - It earns a large premium, because the stock stayed between the strikes for the whole life of the trade
   > Inside the dead zone neither option has intrinsic value.

3. How is a short combo built?
   - Buy a call and a put at the same strike, so that the position profits from a large move in either direction
   - [x] Buy an out-of-the-money put and sell an out-of-the-money call, same expiration, with roughly balanced premiums
   - Sell an out-of-the-money put and buy an out-of-the-money call, so that the position behaves like owning
   - Buy a put and sell a put at a lower strike, so that part of the cost is financed by the second option
   > Balancing the premiums makes the position cost close to nothing.

4. Which trader would use a short combo?
   - A bullish trader who wants limited risk and who expects the stock to rise within a defined period of time
   - A trader who wants to profit from a quiet market and expects the stock to stay near today's price
   - [x] A bearish trader who wants low-cost, stock-like downside exposure and accepts a flat zone near today's price
   - A trader who needs a guaranteed gain and is unwilling to accept any risk of losing money on the position
   > It is a bearish, leveraged, near-zero-cost way to express a view.

5. {#calc1} [calc] A trader builds a Short Combo: buys one $95 put and sells one $105 call, for no net premium. What is the maximum profit at expiration, per share?
   - [x] $95
   - $10
   - $96
   - $94
   > For this position (K1 = 95, K2 = 105), the maximum profit is $95 per share. Formula: P_max = K1 + netCF.
