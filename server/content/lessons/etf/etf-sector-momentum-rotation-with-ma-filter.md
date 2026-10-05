---
slug: etf-sector-momentum-rotation-with-ma-filter
title: Sector Momentum Rotation with MA Filter
summary: Adding a moving-average trend filter on top of sector momentum rotation, staying in cash instead of a leading sector when that sector itself is in a downtrend.
---

## The Problem With Plain Rotation

Plain sector momentum rotation always holds whichever sector, or sectors, ranks highest by trailing return, even if that "leading" sector is actually falling — it might simply be falling less than everything else. Adding a moving-average filter addresses this: before taking a position in the top-ranked sector, the strategy checks whether that sector ETF's own price is above its moving average, a common absolute-trend confirmation, and only invests if it is; otherwise it holds cash, or a safe asset like short-term Treasury bills, instead.

## Relative Momentum Plus Absolute Trend

This combines two distinct ideas — relative momentum, which sector is leading the others, and absolute trend, is that sector's own price actually rising — because a sector can be relatively strong, the best of a bad group, while still being in an absolute downtrend, and taking a position in a "leading" sector that's still falling defeats the purpose of a trend-following approach.

## The Benefit in Downturns

The main benefit shows up during broad market downturns: in a bear market, momentum rotation without a trend filter still forces the strategy to hold the "least bad" sector, which can still lose significant money, while the MA filter lets the strategy step aside into cash when even the leading sector fails its own trend test, meaningfully reducing drawdowns during systemic selloffs.

## The Cost in Choppy Markets

The tradeoff is reduced participation during choppy, range-bound periods: since the MA filter can flip on and off as a sector's price oscillates around its moving average, the strategy can end up sitting in cash more often, missing some of the modest gains a fully-invested rotation strategy would have captured, in exchange for the downside protection the filter provides during genuine downturns.

# Quiz

1. What problem does adding a moving-average filter address in a sector rotation strategy?
   - The fact that plain momentum rotation is too slow to compute
   - [x] The fact that plain momentum rotation always invests in the "leading" sector even when that sector is itself falling
   - The fact that ETFs cannot be shorted
   - The fact that sector ETFs have no trading volume
   > A sector can be the relative leader, the least bad of a falling group, while still being in an absolute downtrend — the MA filter checks for genuine absolute strength before committing capital.

2. What does the moving-average filter check before the strategy invests in the top-ranked sector?
   - The sector ETF's dividend yield
   - [x] Whether that sector ETF's own price is above its moving average
   - The number of stocks held within the sector ETF
   - The sector's historical volatility only
   > The filter requires the top-ranked sector to also be in an absolute uptrend (price above its own moving average) before the strategy takes a position in it.

3. What does the strategy do if the top-ranked sector fails the moving-average filter?
   - It shorts that sector aggressively
   - [x] It holds cash (or a safe asset) instead of investing in that sector
   - It invests double the normal amount in that sector
   - It ignores the filter and invests anyway
   > If even the relatively strongest sector is in an absolute downtrend, the strategy steps aside into cash rather than forcing an investment.

4. What is the main benefit of adding the MA filter during broad market downturns?
   - It guarantees the strategy never loses money
   - [x] It lets the strategy step aside into cash when even the leading sector fails its own trend test, reducing drawdowns during systemic selloffs
   - It has no effect during downturns
   - It forces the strategy to double its sector exposure
   > Without the filter, the strategy is always forced into the "least bad" sector during a broad downturn; the filter allows it to avoid that sector entirely when it's also trending down.

5. What is the main tradeoff of adding the MA filter?
   - There is no tradeoff — it is strictly better in every scenario
   - [x] The strategy can sit in cash more often during choppy, range-bound periods, missing some gains a fully-invested strategy would capture
   - It eliminates all trading costs entirely
   - It requires holding twice as many sector ETFs
   > Since the filter can flip on and off as price oscillates around the moving average, the strategy may miss some modest gains during choppy periods in exchange for the downside protection it provides during real downturns.
