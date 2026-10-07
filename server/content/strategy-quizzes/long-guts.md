---
slug: long-guts
---

# Quiz

1. What distinguishes a long guts position from a long strangle?
   - Both options start out of the money, so it costs much less and has no intrinsic value from the first day
   - [x] Both options start in the money, so it holds real intrinsic value from day one but costs much more
   - It uses the same strike for both options, so it is identical to a straddle but costs somewhat more
   - It collects a premium instead of paying one
   > Guts uses in-the-money options, unlike a strangle's out-of-the-money options.

2. Why does a long guts position need an even larger move to profit?
   - Because it has no intrinsic value
   - Because the options expire sooner than those of a straddle, leaving less time for the move to happen
   - [x] Because it costs substantially more than an equivalent straddle
   - Because it is a credit trade, so the premium collected must be repaid before any profit can be made
   > The higher cost raises the breakevens.

3. How is a long guts position built?
   - Sell an in-the-money call and put with different strikes that straddle the current price, collecting a credit
   - Buy a call and a put at the same out-of-the-money strike, which costs far less than a straddle does
   - Buy a call and sell a put at different strikes that straddle the current price, to finance the position
   - [x] Buy an in-the-money call and an in-the-money put with different strikes that straddle the current price
   > The call strike is below the price and the put strike is above it.

4. Why is long guts a less common choice?
   - [x] It is a higher-cost variation that mostly makes sense when in-the-money options happen to be priced favorably
   - It is prohibited by exchanges, since in-the-money options on both sides cannot legally be bought together
   - It has unlimited risk, so only experienced traders with large accounts are allowed to place the trade
   - It only works on index options, because single stocks do not offer strikes on both sides of the price
   > A straddle or strangle is usually cheaper for the same view.

5. {#calc1} [calc] A trader builds a Long Guts: buys one $95 call and buys one $105 put, for a net debit of $14 per share. What is the lower break-even stock price at expiration, per share?
   - $109
   - $14
   - $10
   - [x] $91
   > For this position (K1 = 95, K2 = 105, net debit = 14), the lower break-even stock price is $91 per share. Formula: S*_up = K1 + D; S*_down = K2 - D.
