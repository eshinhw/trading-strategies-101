---
slug: protective-put
---

# Quiz

1. When is a protective put most useful?
   - You expect the stock to stay completely flat and want to collect additional premium income on shares
   - You want to profit from a large fall in the stock and don't own any shares today
   - [x] You are bullish long term but worried about a near-term drop, such as ahead of earnings
   - You want to earn regular income from a stock you hold and are comfortable selling it at a higher price
   > It works as insurance on a position you want to keep.

2. How does a protective put act like insurance?
   - It pays you income every month from the shares, so the insurance cost is covered by the premium itself
   - It eliminates the cost of owning the stock, since the put premium is returned if the shares don't fall
   - It caps your gains at the strike price, so you can never lose money but also cannot profit above it
   - [x] It lets you sell at the strike no matter how far the stock falls, for a premium, while upside stays uncapped
   > The premium is the cost of protection, and it is the most the hedge can cost you.

3. How should the strike of a protective put be chosen?
   - [x] Based on how much downside you are willing to tolerate before the insurance kicks in
   - Always as far in the money as possible, because the more intrinsic value the put has, the safer it is
   - Always far below any plausible price, since the cheapest put is also the one that protects the best
   - It makes no difference, because every put gives the same protection regardless of the strike price
   > A higher strike protects more but costs more, and a lower strike costs less but covers less.

4. You own shares at 100 and bought a 95 put for 3. The stock jumps to 120. What should you do?
   - Exercise the put to lock in the gain
   - [x] Let the put expire and keep the gain minus the 3 you paid
   - Sell more shares to cover the put, because the put must be funded if the stock moves up sharply
   - Nothing, because the put forces the shares to be sold at 95 when the option expires at the end
   > A protective put keeps unlimited upside; the premium is the only cost.

5. {#calc1} [calc] A trader builds a Protective Put: owns the stock, bought at $100 and buys one $95 put, with a net option premium of $3 paid. What is the maximum loss at expiration, per share?
   - $3
   - [x] $8
   - $100
   - $103
   > For this position (S0 = 100, K = 95, net debit = 3), the maximum loss is $8 per share. Formula: L_max = S0 - K + D.
