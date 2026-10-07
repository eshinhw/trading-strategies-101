---
slug: long-combo
---

# Quiz

1. {#q1} How does a long combo differ from a long synthetic forward?
   - It uses the same strike for both options, which makes it a more expensive position with no flat zone
   - It has limited upside, since the short put caps the gain that the long call could otherwise earn
   - [x] It uses out-of-the-money strikes, which makes it cheaper but leaves a flat zone between the strikes
   - It profits when the stock falls, since the short put gains value as the stock moves lower in price
   > Different strikes create a dead zone where the position neither gains nor loses much.

2. {#q2} What happens if the stock stays between the two strikes at expiration?
   - It earns the maximum profit
   - It suffers the maximum loss, because both options expire worthless and the premium paid is lost
   - It earns a large premium, because the stock stayed between the strikes for the whole life of the trade
   - [x] The position roughly breaks even, since both options are out of the money
   > Inside the dead zone neither option has intrinsic value.

3. {#q3} How is a long combo built?
   - [x] Buy an out-of-the-money call and sell an out-of-the-money put, same expiration, with roughly balanced premiums
   - Buy a call and a put at the same strike, so that the position profits from a large move in either direction
   - Sell an out-of-the-money call and buy an out-of-the-money put, so that the position behaves like shorting
   - Buy a call and sell a call at a higher strike, so that part of the cost is financed by the second option
   > Balancing the premiums makes the position cost close to nothing.

4. {#q4} Which trader would use a long combo?
   - A bearish trader who wants limited risk and who expects the stock to decline within a defined period of time
   - [x] A bullish trader who wants low-cost, stock-like upside and accepts a flat zone near today's price
   - A trader who wants to profit from a quiet market and expects the stock to stay near today's price
   - A trader who needs a guaranteed gain and is unwilling to accept any risk of losing money on the position
   > It is a bullish, leveraged, near-zero-cost way to express a view.

5. {#calc1} [calc] A trader builds a Long Combo: buys one $105 call and sells one $95 put, for no net premium. What is the maximum loss at expiration, per share?
   - [x] $95
   - $10
   - $96
   - $94
   > For this position (K2 = 95, K1 = 105), the maximum loss is $95 per share. Formula: L_max = K2 + netCF.

6. {#bk1} [calc] A trader builds a Long Combo: buys one $105 call and sells one $95 put, for no net premium. What is the break-even stock price at expiration, per share?
   - $10
   - [x] $95
   - $96
   - $94
   > For this position (K2 = 95, K1 = 105), the break-even stock price is $95 per share. Formula: S* = K1 + netCF (if netCF<0); S* = K2 + netCF (if netCF>0).

7. {#bk2} [calc] A trader builds a Long Combo: buys one $105 call and sells one $95 put, for no net premium. What is the maximum loss on 8 contracts (100 shares each), in dollars?
   - $760
   - $9,500
   - $85,500
   - [x] $76,000
   > The maximum loss is $95 per share. One contract covers 100 shares, so 8 contracts give $95 × 100 × 8 = $76,000.

8. {#bk3} [calc] A trader builds a Long Combo: buys one $105 call and sells one $95 put, for no net premium. The stock is at $83 at expiration. What is the profit or loss per share, counting the premium?
   - +$12
   - [x] −$12
   - −$11
   - −$13
   > At $83 the legs are worth −$12 per share before the premium, and the net premium adds $0, for −$12 per share (given K2 = 95, K1 = 105).

9. {#bk4} [calc] A trader builds a Long Combo: buys one $105 call and sells one $95 put, for no net premium. The stock is at $92 at expiration. What is the profit or loss per share, counting the premium?
   - +$3
   - −$2
   - [x] −$3
   - −$4
   > At $92 the legs are worth −$3 per share before the premium, and the net premium adds $0, for −$3 per share (given K2 = 95, K1 = 105).

10. {#bk5} [calc] A trader builds a Long Combo: buys one $105 call and sells one $95 put, for no net premium. At expiration the stock is at $108. What is the total profit or loss on 5 contracts (100 shares each), in dollars?
   - [x] +$1,500
   - +$15
   - +$300
   - −$1,500
   > Per share the position makes +$3 at $108. For 5 contracts: +$3 × 100 × 5 = +$1,500.
