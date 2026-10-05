---
slug: volatility-risk-premium-with-gamma-hedging
title: Volatility Risk Premium with Gamma Hedging
summary: Collecting the volatility risk premium from short options while continuously hedging the position's delta, isolating the bet on implied-versus-realized volatility from the stock's direction.
---

## Beyond the Premium: Directional Risk

A short options position collecting the volatility risk premium is exposed to more than just the volatility risk premium itself — it also carries directional risk (delta) from the underlying moving up or down, which can dominate the position's day-to-day profit and loss and obscure whether the volatility bet itself is actually working. Gamma hedging addresses this by continuously adjusting a hedge in the underlying stock, or futures, to keep the position's delta close to zero as the underlying price moves, isolating the volatility risk premium bet from directional risk.

## How Negative Gamma Works

The mechanism works through the position's gamma — how much delta changes as the underlying price moves. A short options position typically has negative gamma, meaning its delta becomes more negative as the stock rises and more positive as the stock falls, opposite to what a simple directional hedge would want, so a gamma-hedger continuously rebalances the underlying hedge as the stock moves, buying or selling shares to bring delta back toward zero.

## Rebalancing and the Core Bet

This continuous rebalancing has a direct link to the position's core bet: each rebalance effectively "buys high, sells low" relative to the stock's actual path, a consequence of negative gamma, and the cost of doing this repeatedly is compensated by the option premium collected upfront — if realized volatility, which determines how much rebalancing is needed and how costly it is, comes in below what was implied when the premium was sold, the premium collected exceeds the rebalancing cost, and the position profits; if realized volatility comes in higher than implied, the rebalancing cost can exceed the premium collected.

## A Purer Volatility Bet

This structure is what makes gamma-hedged volatility risk premium strategies a genuinely different exposure than a plain, unhedged short-options position: rather than a bet that also depends heavily on where the stock ends up relative to the strike at expiration, a well-executed gamma-hedged position isolates something close to a pure bet on implied volatility versus realized volatility, though in practice it requires frequent, often daily or more, rebalancing and incurs real transaction costs each time, which themselves eat into the premium being collected.

# Quiz

1. What additional risk does an unhedged short options position carry, beyond the volatility risk premium itself?
   - No additional risk — it is a pure volatility bet by default
   - [x] Directional risk (delta) from the underlying moving up or down, which can dominate the position's day-to-day P&L
   - The risk that options can never be sold short
   - Currency risk unrelated to the underlying stock
   > A short options position isn't automatically a pure volatility bet — it also carries delta exposure to the underlying's direction, which gamma hedging is designed to remove.

2. What does gamma hedging aim to do?
   - Maximize directional exposure to the underlying stock
   - [x] Continuously adjust a hedge in the underlying to keep the position's delta close to zero as the price moves
   - Eliminate the volatility risk premium entirely
   - Convert the position into a pure directional bet
   > By rebalancing the underlying hedge as the stock price moves, gamma hedging keeps delta near zero, isolating the position from directional risk.

3. Why does a short options position typically have negative gamma?
   - Negative gamma is unrelated to short options positions
   - [x] Its delta becomes more negative as the stock rises and more positive as the stock falls — opposite to what a simple directional hedge would want
   - Negative gamma means the position never needs rebalancing
   - Short options positions always have zero gamma
   > Negative gamma describes how a short options position's delta moves against the direction of the underlying's move, requiring continuous rebalancing to stay delta-neutral.

4. How does continuous gamma-hedging rebalancing relate to the position's profitability?
   - Rebalancing has no cost and no relationship to the position's profit
   - [x] Each rebalance effectively "buys high, sells low," and this cost is compensated by the option premium collected — the position profits if realized volatility comes in below what was implied
   - Rebalancing always guarantees a profit regardless of realized volatility
   - Rebalancing eliminates the need to collect any option premium
   > The rebalancing cost driven by negative gamma is compared against the premium collected upfront — if realized volatility is lower than implied, the premium exceeds the rebalancing cost and the position profits.

5. Why does gamma hedging make a short-options position a genuinely different exposure than an unhedged one?
   - It has no effect on the nature of the position's exposure
   - [x] It isolates something close to a pure bet on implied versus realized volatility, rather than a position that also depends heavily on where the stock ends up relative to the strike
   - It guarantees the position will never lose money
   - It removes the need for any option premium to be collected
   > By continuously neutralizing delta, gamma hedging strips out much of the dependence on the stock's final price relative to the strike, leaving a position whose profitability depends mainly on implied versus realized volatility.
