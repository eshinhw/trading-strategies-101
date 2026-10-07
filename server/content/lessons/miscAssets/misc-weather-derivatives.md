---
slug: misc-weather-derivatives
title: Weather Derivatives
summary: A financial contract whose payout is tied to a weather index, like heating or cooling degree days, rather than to any traded asset's price — built for businesses whose revenue or costs swing with the weather.
---

## A Payout Tied to Weather, Not Price

A weather derivative's payout depends on a measured weather outcome over a period, like total rainfall, average temperature, or a temperature-based index, rather than on the price of any traded security or commodity — the "underlying" here is a weather measurement, not an asset.

## Heating and Cooling Degree Days

The most common weather indices are built from degree days: a heating degree day accumulates for each degree a day's average temperature falls below a reference point (a rough proxy for how much heating demand that day likely generated), and a cooling degree day works the same way in reverse for air-conditioning demand. Contracts commonly pay out based on the cumulative degree-day total over a season.

## Who Uses Weather Derivatives

Energy utilities are the most natural users, since demand for heating or cooling fuel swings directly with weather, but agricultural businesses, event organizers, and any company whose revenue or costs are weather-sensitive can use the same basic tool to hedge that exposure.

## Why Weather Risk Is a Genuinely Distinct Risk

Weather outcomes are largely uncorrelated with broader financial markets, which is exactly what makes weather derivatives useful as a hedge: a company can neutralize a real, weather-driven swing in its business without taking on offsetting exposure to interest rates, equities, or credit that an unrelated financial hedge might otherwise introduce.

## Example

A natural gas utility earns less when the winter is warm, because customers heat less. Heating degree days (HDD) measure how cold it is.

- Normal winter: 5,000 HDD
- Revenue lost for each HDD below 4,800: about $5,000
- The utility buys a weather derivative with a strike of 4,800 HDD, paying $5,000 per HDD below the strike
- Premium: $150,000

**A mild winter: 4,500 HDD**

$$
\text{Derivative payout} = (4{,}800 - 4{,}500) \times \$5{,}000 = \$1{,}500{,}000
$$

$$
\text{Lost revenue} = 300 \times \$5{,}000 = -\$1{,}500{,}000
$$

$$
\$1{,}500{,}000 - \$1{,}500{,}000 - \$150{,}000 = \boxed{-\$150{,}000 \text{ (the premium only)}}
$$

**A cold winter: 5,100 HDD**

The derivative pays $0, and the utility keeps its normal revenue, so the premium of $150,000 is the whole cost.

The payout does not depend on the stock market, so it offsets the shortfall from the weather alone.

# Quiz

1. What determines a weather derivative's payout?
   - [x] A measured weather outcome, like a temperature-based index, rather than the price of a traded asset
   - The daily closing price of a specific stock
   - The exchange rate between two currencies
   - Weather derivatives have no defined payout mechanism
   > The underlying for a weather derivative is a weather measurement itself, not a traditional traded asset's price.

2. What does a heating degree day roughly proxy for?
   - [x] How much heating demand a day likely generated, based on how far its average temperature fell below a reference point
   - The total rainfall recorded on a given day
   - The number of hours of daylight in a day
   - Heating degree days have no connection to heating demand
   > The degree-day calculation is specifically designed to approximate heating (or cooling) demand driven by how temperature deviates from a reference level.

3. Who are natural users of weather derivatives, beyond energy utilities?
   - [x] Agricultural businesses, event organizers, and other companies whose revenue or costs are weather-sensitive
   - Only investors with no connection to any weather-exposed business
   - Weather derivatives have no users beyond a single utility company
   - Only central banks are permitted to use weather derivatives
   > Any business genuinely exposed to weather-driven swings in revenue or cost can use the same basic hedging tool, not just energy companies.

4. Why is weather risk's low correlation with financial markets valuable for hedging?
   - [x] It lets a company neutralize a weather-driven business risk without taking on unrelated exposure to markets like equities or rates
   - Correlation with financial markets has no bearing on a hedge's usefulness
   - Weather derivatives are actually highly correlated with equity markets
   - Low correlation makes weather derivatives impossible to use as a hedge
   > Because weather outcomes move independently of financial markets, a weather hedge targets the specific risk a company actually faces without introducing new, unrelated market exposure.

5. In the example, what does the gas utility's weather derivative do if the winter is mild?
   - [x] It pays out if cumulative heating degree days fall below a set threshold, offsetting the revenue shortfall from lower heating demand
   - It pays out only if the winter is colder than normal
   - It has no payout structure related to winter temperatures at all
   - It requires the utility to pay an additional penalty for the mild winter
   > The derivative is structured specifically to offset the exact revenue risk a mild winter creates for a heating-demand-dependent utility.

6. {#calc1} [calc] A weather derivative pays $4,000 per heating degree day below 4,600. The winter has 4,350. What is the payout?
   - $250,000
   - [x] $1,000,000
   - $4,000,000
   - $100,000
   > The shortfall is 4,600 − 4,350 = 250 degree days, and 250 × $4,000 = $1,000,000.

7. {#calc2} [calc] A cooling-degree-day contract pays $3,000 for each day above 900. The summer has 1,060. What is the payout?
   - $3,180,000
   - $160,000
   - $300,000
   - [x] $480,000
   > The excess is 1,060 − 900 = 160 days, and 160 × $3,000 = $480,000.
