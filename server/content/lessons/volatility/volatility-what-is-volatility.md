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

## Example

An options market maker quotes a $100 stock ahead of a major announcement.

- Implied volatility (what the options market charges now): 40%
- Historical volatility around similar past events: 28%

**Expected one-month move (one standard deviation)**

$$
\frac{40\%}{\sqrt{12}} = 11.5\% \qquad\text{vs.}\qquad \frac{28\%}{\sqrt{12}} = 8.1\%
$$

**Price of a one-month at-the-money call (approximation: 0.4 × stock × volatility × √time)**

$$
\text{At 40\%: } 0.4 \times \$100 \times 0.40 \times \sqrt{1/12} = \$4.61
$$

$$
\text{At 28\%: } 0.4 \times \$100 \times 0.28 \times \sqrt{1/12} = \$3.22
$$

**How rich the options look**

$$
\frac{\$4.61 - \$3.22}{\$3.22} = \boxed{43\% \text{ richer than the stock's own track record}}
$$

The market maker does not know whether the stock will end up 2% higher or 15% lower. Comparing implied with historical volatility shows whether the options look rich, cheap or fair against what the stock has actually done around similar events.

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

6. {#calc1} [calc] A stock trades at $80 and its implied volatility is 36% a year. What is the expected one-month move (one standard deviation)?
   - About $28.80
   - About $2.40
   - [x] About $8.31
   - About $4.16
   > The monthly volatility is 36% / √12 ≈ 10.4%, and 10.4% × $80 ≈ $8.31.

7. {#calc2} [calc] A stock's daily volatility is 1.2%. What is its approximate annualized volatility (252 trading days)?
   - [x] About 19%
   - About 1.2%
   - About 302%
   - About 75%
   > Annualized volatility is 1.2% × √252 ≈ 19.05%.
