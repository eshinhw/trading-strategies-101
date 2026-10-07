---
slug: convertible-arbitrage
---

# Quiz

1. {#q1} What are the two legs of a convertible arbitrage position?
   - [x] Buying the convertible bond and simultaneously shorting a calculated number of shares of the underlying stock
   - Buying the convertible bond and buying more of the underlying stock
   - Shorting the convertible bond with no stock position at all
   - Only ever holding the convertible bond with no hedge
   > Convertible arbitrage pairs a long convertible position with a short stock position sized to the bond's delta, rather than holding either leg alone.

2. {#q2} Why does shorting stock neutralize the position's directional exposure?
   - [x] The short stock offsets the convertible's own price sensitivity to the stock, which comes from its embedded conversion option
   - Shorting stock has no effect on the position's directional exposure
   - The convertible bond has no sensitivity to the stock price at all
   - Shorting stock only works if the stock price never changes
   > Since the convertible's value moves with the stock through its embedded option, an offsetting short stock position cancels out that directional sensitivity.

3. {#q3} What are the layered sources of profit in convertible arbitrage?
   - [x] The convertible's coupon income, interest on short-sale proceeds, and convexity gains as the bond's delta changes with the stock
   - Only the convertible's coupon income, with no other source
   - Profit comes exclusively from the stock's price direction
   - There is no realistic source of profit in convertible arbitrage
   > Convertible arbitrage combines coupon income, short-rebate interest, and gamma-like convexity gains from rebalancing the hedge as the stock moves.

4. {#q4} Why does the position's hedge need to be rebalanced over time?
   - [x] The convertible's delta changes as the stock price moves, so the short position needs to be adjusted to stay properly hedged
   - The hedge never needs to be adjusted once it's set
   - Rebalancing is only needed if the bond's coupon changes
   - The stock's price has no effect on the required hedge size
   > As the convertible's delta shifts with the stock price, the short stock position must be adjusted to keep the overall position properly hedged — and that rebalancing is what captures convexity profit.

5. {#q5} What costs can erode a convertible arbitrage position's profitability?
   - [x] Transaction costs from rebalancing, the cost of borrowing stock to short, and the issuer's credit risk
   - There are no real costs associated with convertible arbitrage
   - Only the convertible's own coupon payment is a cost
   - The strategy has zero exposure to the issuer's creditworthiness
   > Rebalancing costs, stock borrow costs, and issuer credit risk are all real frictions that reduce the strategy's net profitability despite its largely market-neutral design.

6. {#calc1} [calc] A convertible converts into 20 shares and has a delta of 0.6. A fund buys 500 bonds. How many shares does it short to hedge?
   - 10,000 shares
   - 600 shares
   - [x] 6,000 shares
   - 12,000 shares
   > Each bond behaves like 20 × 0.6 = 12 shares, and 500 × 12 = 6,000 shares.

7. {#calc2} [calc] A fund buys 500 convertible bonds, each convertible into 25 shares with a delta of 0.55. How many shares does it short?
   - [x] 6,875
   - 12,500
   - 13,750
   - 275
   > The hedge is 500 × 25 × 0.55 = 6,875 shares.

8. {#bk1} [calc] A convertible arbitrage trader owns 100 convertible bonds, each convertible into 20 shares, with an option delta of 0.6. How many shares should be shorted to be delta-neutral?
   - [x] 1,200 shares
   - 2,000 shares
   - 60 shares
   - 800 shares
   > Shares to short = bonds × ratio × delta = 100 × 20 × 0.6 = 1,200.

9. {#bk2} [calc] A convertible arbitrage trader owns 50 convertible bonds, each convertible into 16 shares, with an option delta of 0.4. How many shares should be shorted to be delta-neutral?
   - 800 shares
   - 20 shares
   - [x] 320 shares
   - 480 shares
   > Shares to short = bonds × ratio × delta = 50 × 16 × 0.4 = 320.
