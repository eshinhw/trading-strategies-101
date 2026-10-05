---
slug: convertible-arbitrage
title: Convertible Arbitrage
summary: Buying a convertible bond and shorting a hedge ratio of the underlying stock, aiming to profit from the bond's own income and convexity while staying largely neutral to the stock's direction.
---

## The Basic Trade

A convertible arbitrage position buys the convertible bond and simultaneously sells short a calculated number of shares of the underlying stock, sized to offset the bond's own sensitivity to the stock price — its delta. The two legs together are designed to be far less exposed to the stock's outright direction than either leg would be alone.

## Why Hedge With a Short Stock Position

Because the convertible's embedded conversion option makes its price sensitive to the stock, shorting stock in proportion to that sensitivity neutralizes the position's directional exposure — the trade isn't a bet on whether the stock rises or falls, but on something else entirely.

## Where the Profit Comes From

Profit comes from several sources layered together: the convertible's own coupon income, interest earned on the cash proceeds from the short sale, and gains from convexity, since the bond's delta itself changes as the stock moves — rising as the stock climbs, falling as it drops — in a way that resembles being long an option's gamma.

## Dynamic Hedging and Its Costs

As the stock price moves, the convertible's delta changes, so the position's hedge has to be periodically rebalanced — adding to or trimming the short as needed to stay neutral. That ongoing rebalancing is exactly what captures the convexity profit, but it isn't free: transaction costs, the cost of borrowing stock to short, and the issuer's own credit risk all cut into what the strategy actually nets.

# Quiz

1. What are the two legs of a convertible arbitrage position?
   - [x] Buying the convertible bond and simultaneously shorting a calculated number of shares of the underlying stock
   - Buying the convertible bond and buying more of the underlying stock
   - Shorting the convertible bond with no stock position at all
   - Only ever holding the convertible bond with no hedge
   > Convertible arbitrage pairs a long convertible position with a short stock position sized to the bond's delta, rather than holding either leg alone.

2. Why does shorting stock neutralize the position's directional exposure?
   - [x] The short stock offsets the convertible's own price sensitivity to the stock, which comes from its embedded conversion option
   - Shorting stock has no effect on the position's directional exposure
   - The convertible bond has no sensitivity to the stock price at all
   - Shorting stock only works if the stock price never changes
   > Since the convertible's value moves with the stock through its embedded option, an offsetting short stock position cancels out that directional sensitivity.

3. What are the layered sources of profit in convertible arbitrage?
   - [x] The convertible's coupon income, interest on short-sale proceeds, and convexity gains as the bond's delta changes with the stock
   - Only the convertible's coupon income, with no other source
   - Profit comes exclusively from the stock's price direction
   - There is no realistic source of profit in this strategy
   > Convertible arbitrage combines coupon income, short-rebate interest, and gamma-like convexity gains from rebalancing the hedge as the stock moves.

4. Why does the position's hedge need to be rebalanced over time?
   - [x] The convertible's delta changes as the stock price moves, so the short position needs to be adjusted to stay properly hedged
   - The hedge never needs to be adjusted once it's set
   - Rebalancing is only needed if the bond's coupon changes
   - The stock's price has no effect on the required hedge size
   > As the convertible's delta shifts with the stock price, the short stock position must be adjusted to keep the overall position properly hedged — and that rebalancing is what captures convexity profit.

5. What costs can erode a convertible arbitrage position's profitability?
   - [x] Transaction costs from rebalancing, the cost of borrowing stock to short, and the issuer's credit risk
   - There are no real costs associated with this strategy
   - Only the convertible's own coupon payment is a cost
   - The strategy has zero exposure to the issuer's creditworthiness
   > Rebalancing costs, stock borrow costs, and issuer credit risk are all real frictions that reduce the strategy's net profitability despite its largely market-neutral design.
