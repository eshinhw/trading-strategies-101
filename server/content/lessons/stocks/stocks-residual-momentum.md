---
slug: stocks-residual-momentum
title: Residual Momentum
summary: Trading momentum in a stock's return after stripping out the part explained by broad factors, isolating the stock-specific component of the trend.
---

## Stripping Out Common Factors

Ordinary price-momentum ranks stocks by their raw total return, but some of that return is really just the stock's exposure to broad factors — market direction, sector performance, or its beta — rather than anything specific to the company. Residual momentum first strips out those explained components, typically by regressing the stock's return against a factor model, like the market and a few other common factors, and then measures momentum only in what's left over: the residual, stock-specific return.

## Why a Cleaner Signal

The rationale is that momentum driven by a stock-specific residual is a cleaner, more genuine signal than momentum in the raw return, since raw-return momentum can just be a proxy for "this stock happens to be in a sector that's been hot" rather than anything distinctive about the company itself — residual momentum tries to isolate the latter.

## Building the Residual Ranking

In practice, this means computing each stock's residual return over a rolling window, after removing its typical factor exposures, ranking stocks by the cumulative or average residual, and building a long-short portfolio from the top and bottom of that ranking, much like ordinary momentum but applied to the "cleaned" return series.

## A Steadier Momentum Profile

Because it removes common factor exposure, residual momentum portfolios tend to run closer to market-neutral than raw-return momentum portfolios do, and empirical studies have found the residual version can produce steadier, more consistent momentum profits with less of the severe tail risk — the momentum crash — that plagues the raw-return version.

# Quiz

1. What does residual momentum measure, that ordinary price-momentum does not isolate?
   - The stock's total raw historical return
   - [x] The stock-specific component of return left over after removing exposure to broad factors like the market or sector
   - The company's total revenue growth
   - The stock's dividend history
   > Residual momentum strips out the portion of a stock's return explained by common factors (market, sector, beta) and measures momentum only in what remains — the stock-specific residual.

2. How is a stock's "residual return" typically computed?
   - By adding together every factor's return
   - [x] By regressing the stock's return against a factor model and taking what's left unexplained
   - By ignoring the stock's price entirely
   - By averaging the stock's price over the past decade
   > A factor regression separates a stock's return into the part explained by common factors and the residual, stock-specific part — residual momentum uses the latter.

3. Why might raw-return momentum sometimes be a weaker signal than residual momentum?
   - [x] Raw-return momentum can just reflect a stock's sector or market exposure being hot, rather than anything specific to the company
   - Raw-return momentum is always identical to residual momentum
   - Raw returns cannot be measured for any stock
   - Residual momentum ignores price entirely
   > A stock's raw return includes its exposure to common factors, so raw momentum can partly just be "this stock's sector has been strong" rather than a genuinely stock-specific signal — residual momentum tries to filter that out.

4. How does a residual momentum portfolio typically compare to a raw-return momentum portfolio in terms of market exposure?
   - It has identical market exposure
   - [x] It tends to run closer to market-neutral, since common factor exposure has already been removed
   - It has double the market exposure
   - Market exposure is not a meaningful concept for either strategy
   > Because residual momentum strips out common factor exposure before ranking, the resulting long-short portfolio tends to carry less unintended market or sector exposure than raw-return momentum.

5. What potential benefit have empirical studies found for residual momentum compared to raw-return momentum?
   - It always produces exactly double the returns
   - [x] Steadier, more consistent momentum profits with less severe tail risk, such as the momentum crash
   - It eliminates all risk from the strategy entirely
   - It only works on bonds, not stocks
   > By removing common factor exposure, residual momentum has been found in some studies to reduce the severe drawdowns that raw-return momentum can suffer during sharp market reversals.
