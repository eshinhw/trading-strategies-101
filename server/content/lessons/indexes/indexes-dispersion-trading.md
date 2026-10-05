---
slug: indexes-dispersion-trading
title: Dispersion Trading in Equity Indexes
summary: Trading the difference between an index's implied volatility and the average implied volatility of its individual components, betting on how correlated those components will actually be.
---

## Volatility Depends on Correlation

An equity index's volatility isn't just the average of its components' individual volatilities — it also depends heavily on how correlated those components are with each other. When index members move together, high correlation, their individual moves reinforce each other and the index as a whole swings a lot; when they move more independently, low correlation, individual swings partly cancel out and the index itself stays comparatively calm. Dispersion trading is built directly on this relationship between index volatility, component volatility, and their average correlation.

## The Classic Trade

A classic dispersion trade sells options, or variance swaps, on the index while buying options, or variance swaps, on a basket of its individual components, in a ratio designed to be roughly neutral to the overall level of volatility — the trader isn't betting on volatility rising or falling broadly, but on the relationship between index-level and component-level volatility, which is really a bet on correlation. Selling index volatility while buying component volatility profits if realized correlation between the components comes in lower than what was implied when the trade was put on.

## Why Index Options Run Rich

The intuition is that index options often trade at an implied correlation that's elevated relative to what typically materializes — investors buying index protection tend to bid up index-level implied volatility, while single-stock options are driven more by name-specific factors, creating a persistent gap that dispersion trades are designed to harvest, similar in spirit to how other volatility risk premium strategies collect a premium for providing insurance-like protection.

## The Correlation Spike Risk

The central risk is a "correlation spike": during broad market stress, individual stocks that normally move somewhat independently often start moving together sharply, a flight to a single risk factor, often just "the market going down", pushing realized correlation up rather than down — exactly the scenario a short-index, long-component dispersion trade loses money in, which is why dispersion trading, like other volatility-selling strategies, tends to do well in calm periods and can suffer sharp losses during systemic selloffs.

# Quiz

1. What does an equity index's volatility depend on, beyond just the average volatility of its components?
   - Only the total number of stocks in the index
   - [x] How correlated the components are with each other
   - The index's dividend yield
   - The index's historical age
   > When components move together, their moves reinforce each other and index volatility rises; when they move independently, individual swings partly cancel out, so correlation drives the gap between index volatility and average component volatility.

2. How is a classic dispersion trade typically structured?
   - Buying options on the index and selling options on all its components
   - [x] Selling options (or variance swaps) on the index while buying options (or variance swaps) on a basket of its components
   - Buying only index options with no position in individual components
   - Selling every option in the market simultaneously
   > The trade sells index-level volatility exposure and buys component-level volatility exposure, sized to be roughly neutral to the overall level of volatility.

3. What is dispersion trading fundamentally a bet on?
   - The overall direction of the stock market
   - [x] The correlation between an index's individual components
   - A single company's earnings report
   - Interest rate changes
   > Since the trade is designed to be neutral to the broad level of volatility, its return depends on whether realized correlation between components comes in higher or lower than what was implied when the trade was placed.

4. Why might index options tend to trade at an elevated implied correlation relative to what typically materializes?
   - Because single-stock options are always more expensive than index options
   - [x] Investors buying index protection tend to bid up index-level implied volatility, while single-stock options are driven more by name-specific factors, creating a persistent gap
   - Because correlation is fixed by regulation and cannot change
   - Because index options are illiquid and rarely traded
   > Demand for portfolio-level insurance tends to keep index implied volatility (and thus implied correlation) elevated relative to what actually plays out, which dispersion trades try to harvest.

5. What is the central risk of a short-index, long-component dispersion trade?
   - [x] A "correlation spike" during market stress, when individual stocks that normally move independently start moving together sharply
   - The risk that all stocks in the index stop trading permanently
   - The risk that index options cannot be sold short
   - There is no risk once the trade is correctly sized
   > During systemic selloffs, correlation often spikes as stocks move together in a broad risk-off move, which is exactly the scenario that hurts a trade positioned for correlation to come in lower than implied.
