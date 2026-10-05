---
slug: fx-triangular-arbitrage
title: FX Triangular Arbitrage
summary: Trading three currency pairs in a loop to exploit a brief mispricing between their quoted exchange rates, converting through all three back to the starting currency for a profit.
---

## Three Rates, One Consistency Check

Any three currencies have three exchange rates between them — for example, USD/EUR, EUR/JPY, and USD/JPY — and in an efficient market, these three rates should be mutually consistent: converting USD to EUR, then EUR to JPY, then JPY back to USD should return you to approximately the same amount of USD you started with, since any other outcome would represent a mispricing across the three pairs. Triangular arbitrage exploits the brief moments when this consistency breaks down.

## Executing the Triangle

When the three exchange rates become inconsistent, the implied cross-rate calculated from two of the pairs differs from the directly-quoted rate of the third pair, a trader can execute a sequence of three trades around the "triangle," for example, USD to EUR, EUR to JPY, JPY to USD, and end up with more of the starting currency than they began with, capturing the mispricing as a small, close-to-riskless profit.

## Why It's Close to Riskless

Like other pure arbitrage opportunities, triangular arbitrage in liquid major currency pairs tends to be small and extremely short-lived, since it requires zero directional view — the trader isn't betting on any currency's direction, just on the internal consistency of the three quoted rates — and any persistent mispricing would be rapidly traded away by market participants and automated systems constantly monitoring exchange rates for exactly this kind of inconsistency.

## A Game of Speed and Infrastructure

Because the opportunity is fleeting and the profit margin thin, capturing triangular arbitrage reliably requires very fast execution, low transaction costs, and the ability to simultaneously monitor and trade many currency pairs at once — which is why, much like other high-frequency arbitrage strategies covered elsewhere in this course, it's predominantly the domain of automated trading systems and market makers with direct, low-latency market access, rather than a strategy accessible to slower-moving traders.

# Quiz

1. What relationship should exist between the three exchange rates connecting three currencies, in an efficient market?
   - The three rates should have no relationship to each other whatsoever
   - [x] They should be mutually consistent — converting through all three back to the starting currency should return approximately the same amount you started with
   - Two of the three rates should always be identical to each other
   - The three rates should always sum to exactly 1.0
   > In an efficient market, the three exchange rates between three currencies should be internally consistent, since any inconsistency would represent an exploitable mispricing.

2. What does a trader do when a triangular arbitrage opportunity exists?
   - Hold a single currency position and wait for it to appreciate
   - [x] Execute a sequence of three trades around the "triangle," converting through all three currencies and ending with more of the starting currency
   - Buy and sell the exact same currency pair twice in a row
   - Avoid trading entirely until the rates become consistent
   > The arbitrage is captured by executing all three trades in sequence, ending up with a small profit in the original starting currency due to the momentary inconsistency.

3. Why is triangular arbitrage considered close to riskless?
   - Because it requires taking a strong directional view on one currency
   - [x] Because it requires zero directional view — the trader isn't betting on any currency's direction, only on the internal consistency of the three rates
   - Because currency prices never change once a trade begins
   - Because the trade is guaranteed by international regulators
   > The trade doesn't depend on where any currency's price goes — it captures a mathematical inconsistency between three quoted rates, independent of market direction.

4. Why does triangular arbitrage tend to be small and extremely short-lived in liquid major currency pairs?
   - Because major currency pairs are rarely traded
   - [x] Because any persistent mispricing would be rapidly traded away by market participants and automated systems constantly monitoring for exactly this inconsistency
   - Because triangular arbitrage is illegal in major currency markets
   - Because exchange rates are fixed by central banks and never fluctuate
   > Given how closely monitored and heavily traded major currency pairs are, any inconsistency between their rates tends to be corrected very quickly by other market participants.

5. What is required to capture triangular arbitrage opportunities reliably?
   - A large directional bet on a single currency's future direction
   - [x] Very fast execution, low transaction costs, and the ability to simultaneously monitor and trade many currency pairs at once
   - Slow, careful analysis over several days before executing any trade
   - No special infrastructure is required at all
   > Because the opportunity is fleeting and thin, capturing it reliably requires speed and infrastructure typically associated with automated trading systems and market makers with low-latency access.
