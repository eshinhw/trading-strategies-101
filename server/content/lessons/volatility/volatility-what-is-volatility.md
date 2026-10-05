---
slug: volatility-what-is-volatility
title: Volatility
summary: A statistical measure of how much a price fluctuates — and the crucial difference between volatility that already happened and volatility the market expects.
---

## Volatility as a Measure of Movement

Volatility measures how much a price fluctuates over time, typically expressed as an annualized percentage — a stock with 20% volatility is expected, statistically, to see its price wander within roughly a 20% range up or down over the course of a year, though it says nothing about which direction the price actually ends up moving.

## Historical (Realized) Volatility

Historical volatility, also called realized volatility, is calculated by looking backward: measuring how much a price actually moved over some past period, using its recorded daily (or other interval) returns. It's a factual, after-the-fact number — a description of what happened, not a forecast.

## Implied Volatility

Implied volatility looks forward instead: it's the volatility level that, when plugged into an option pricing model, produces the option's actual current market price. Rather than being calculated directly from past price data, implied volatility is backed out from what option traders are collectively willing to pay right now, making it a market-based estimate of future volatility.

## Why the Distinction Matters

Historical and implied volatility can, and often do, diverge — implied volatility can run higher or lower than what realized volatility ends up being once the period actually plays out. That gap is the foundation for an entire category of volatility trading strategies, covered later in this course, built around betting on the relationship between what the market expects and what actually happens.

## In Practice

An options market maker quoting a stock ahead of a major public announcement doesn't know whether the stock will end up 2% higher or 15% lower — but by comparing the price the options market is currently charging (implied volatility) against how much the stock has actually swung around similar events in the past (historical volatility), the market maker can judge whether current option prices look rich, cheap, or roughly fair relative to the stock's own track record.

# Quiz

1. What does volatility measure?
   - [x] How much a price fluctuates over time, typically expressed as an annualized percentage
   - The direction a price is expected to move
   - A company's total market capitalization
   - The dividend yield of a stock
   > Volatility is a measure of the magnitude of price movement, not its direction — it says how much a price might wander, not which way.

2. What is historical (realized) volatility?
   - [x] A backward-looking measurement of how much a price actually moved over some past period
   - A forecast of future price movement derived from option prices
   - The volatility level guaranteed by an exchange
   - A measure of a company's revenue growth
   > Historical volatility is calculated directly from actual past price data — a factual record of what happened, not a prediction.

3. What is implied volatility?
   - [x] The volatility level that, plugged into an option pricing model, produces the option's actual current market price
   - The exact volatility a stock will have next year, guaranteed
   - A measure calculated purely from historical price data
   - The volatility of a company's earnings reports
   > Implied volatility is backed out from current option prices, making it a market-based, forward-looking estimate rather than a backward-looking calculation.

4. Why can historical and implied volatility diverge?
   - [x] Implied volatility reflects the market's current expectation, which can end up higher or lower than what realized volatility turns out to be
   - They are mathematically required to always be identical
   - Historical volatility is always higher than implied volatility
   - Implied volatility never changes once set
   > Implied volatility is an expectation baked into option prices today, while realized volatility is what actually happens later — the two can and do diverge.

5. Why does the gap between historical and implied volatility matter for this course?
   - [x] It's the foundation for an entire category of volatility trading strategies covered later in the course
   - It has no practical relevance to trading
   - It only matters for calculating dividends
   - The gap is always exactly zero, so it's not a useful signal
   > Strategies that bet on the relationship between what the market expects (implied) and what actually happens (realized) are built directly on this distinction.
