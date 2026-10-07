---
slug: etf-r-squared
title: R-Squared
summary: Using how cleanly a trend has been moving — measured by the R-squared of price against time — to filter out choppy, low-quality trends before trading them.
---

## What R-Squared Measures

R-squared is a statistic, familiar from regression analysis, that measures how well a line fits a set of data points, ranging from 0 (no fit at all) to 1 (a perfect fit). Applied to a price trend, it measures how well a straight line fits a sector ETF's price plotted against time over some lookback window: a high R-squared means the price has been moving up, or down, smoothly and consistently, while a low R-squared means the price has been getting to roughly the same place, but bouncing around chaotically on the way.

![r-squared-comparison](Two trends that cover the same net move — only the smooth, high-R² one reflects genuine, trustworthy momentum.)

## Not All Trends Are Equal

The trading insight is that not all trends are created equal, even if they cover the same total price move — a smooth, high-R-squared uptrend reflects steady, persistent buying pressure and is more likely to continue, while a choppy, low-R-squared uptrend that ends up at the same price might just be noisy, directionless trading that happened to net out positive, and is less trustworthy as a signal of genuine momentum.

## Using It as a Filter

An R-squared-based strategy typically uses this statistic as a filter layered on top of another signal, like momentum or trend-following: before taking a position in a sector, or stock, or any other asset, that's ranked well by trailing return, the strategy checks whether that instrument's price trend also has a sufficiently high R-squared, only trading the cleanest, most consistent trends and skipping ones that technically qualify by raw return but got there through erratic price action.

## Quality Control, Not Direction

This is a form of quality control on top of a directional signal — R-squared doesn't tell you which direction to trade, only how much to trust the trend you've already identified, and combining it with momentum or trend-following aims to concentrate the strategy's capital in the trends most likely to persist, rather than treating every qualifying trend as equally reliable.

# Quiz

1. What does R-squared measure when applied to a price trend?
   - The exact future price of the asset
   - [x] How well a straight line fits the price plotted against time — how smooth and consistent the trend has been
   - The company's total dividend payments
   - The number of shares traded per day
   > R-squared, borrowed from regression analysis, quantifies how cleanly price has been moving in one direction over time, from 0 (no consistent fit) to 1 (a perfectly smooth trend).

2. What does a low R-squared indicate about a price trend, even if it ended up moving in one net direction?
   - That the trend was extremely smooth and consistent
   - [x] That the price got to roughly the same place through choppy, erratic movement rather than steady, consistent movement
   - That the asset had zero trading volume
   - That the trend is guaranteed to continue
   > A low R-squared means the straight-line fit is poor — the price bounced around a lot on its way to the net result, rather than moving smoothly and consistently.

3. How is R-squared typically used in a trading strategy?
   - As the sole signal determining which direction to trade
   - [x] As a filter layered on top of another signal like momentum, favoring smoother, higher-R-squared trends and skipping choppier ones
   - It has no practical trading application
   - To determine a company's credit rating
   > R-squared doesn't provide directional information on its own — it's typically used to filter or rank trends already identified by a directional signal, favoring the cleanest ones.

4. Why might a smooth, high-R-squared trend be considered more trustworthy than a choppy one with the same total return?
   - Smooth trends are always guaranteed to reverse immediately
   - [x] A smooth trend reflects steady, persistent buying (or selling) pressure and is thought more likely to continue than noisy, directionless action that happened to net out positive
   - R-squared has no relationship to trend quality
   - Choppy trends always outperform smooth trends
   > The underlying idea is that consistent, low-noise price action reflects a more genuine, persistent trend than erratic movement that merely arrived at a similar net result.

5. What role does R-squared play relative to a directional signal like momentum?
   - It replaces the need for any directional signal entirely
   - [x] It acts as a quality-control layer — telling you how much to trust a trend you've already identified, not which direction to trade
   - It always contradicts whatever the momentum signal indicates
   - It can only be computed once per year
   > R-squared is combined with, not substituted for, a directional signal — it helps concentrate capital in the trends most likely to persist rather than treating every qualifying trend as equally reliable.

6. {#calc1} [calc] A sector ETF's price against time over 60 days has an R-squared of 0.81. What is the correlation between price and time, and how much of the price variation does the trend line explain?
   - 0.81, and 90%
   - 0.9, and 90%
   - [x] 0.9, and 81%
   - 0.66, and 81%
   > The correlation is the square root of R-squared: √0.81 = 0.9. The line explains 81% of the variation, so this is a clean trend.
