---
slug: etf-dual-momentum-sector-rotation
title: Dual-Momentum Sector Rotation
summary: Combining relative momentum (which sector is leading) with absolute momentum (is that sector's own trailing return positive) before allocating.
---

## Two Momentum Tests

Dual-momentum sector rotation requires a sector to pass two separate momentum tests before earning a position, rather than just one: relative momentum, ranking sector ETFs against each other and favoring the leaders, and absolute momentum, checking whether that sector's own trailing return is positive in absolute terms, not just relative to its peers. A sector only gets an allocation if it clears both hurdles.

## A Different Way to Confirm Strength

This is conceptually similar to pairing momentum rotation with a moving-average filter, but uses the sector's own trailing return, over the same or a similar lookback window used for the relative ranking, as the absolute test, rather than a separate technical indicator like a moving average — it's a slightly different way of asking essentially the same underlying question: is this "leading" sector actually going up, or just falling the least?

## The Cash Fallback

When no sector clears the absolute-momentum hurdle — for example, during a broad, synchronized market decline where every sector's trailing return is negative — the strategy holds cash or a defensive asset instead of forcing an allocation into whichever sector merely ranks highest among a group of losers, which is the central mechanism by which dual momentum tries to sidestep major drawdowns.

## Valued for Its Simplicity

The dual-momentum framework, popularized in the context of simple asset-class rotation strategies and adapted here to sectors, is valued for its simplicity — just two momentum checks, computed from the same basic trailing-return data, no separate technical layer required — while still capturing much of the downside protection that a more elaborate trend-following overlay would provide.

# Quiz

1. What two tests must a sector pass in a dual-momentum strategy?
   - Only a test of the sector's dividend yield
   - [x] Relative momentum (is it leading its peers) and absolute momentum (is its own trailing return positive)
   - Two separate relative-momentum tests against different peer groups
   - A test of market capitalization and a test of trading volume
   > Dual momentum requires a sector to both outrank its peers (relative momentum) and have a positive trailing return in absolute terms (absolute momentum) before it receives an allocation.

2. How does dual momentum's absolute-momentum check differ mechanically from a separate moving-average filter?
   - They are mathematically identical calculations with different names
   - [x] It uses the sector's own trailing return over a lookback window, rather than comparing current price to a separately-computed moving average
   - Absolute momentum ignores trailing returns entirely
   - A moving-average filter cannot be used with momentum strategies
   > Both approaches try to confirm a sector is genuinely rising rather than just relatively strong, but dual momentum does this using the same trailing-return data as the relative ranking, rather than a separate technical indicator.

3. What does dual-momentum sector rotation do when no sector clears the absolute-momentum hurdle?
   - It forces an allocation into the highest-ranked sector regardless
   - [x] It holds cash or a defensive asset instead of investing in any sector
   - It shorts every sector simultaneously
   - It doubles the position size in the top sector
   > If even the best-ranked sector has a negative trailing return, the strategy sits out rather than allocating to whichever sector merely lost the least.

4. In what market scenario is dual momentum's cash/defensive fallback most likely to trigger?
   - A calm, steadily rising market
   - [x] A broad, synchronized market decline where every sector's trailing return is negative
   - A market where all sectors have identical returns
   - It never triggers under any circumstances
   > When every sector is falling together, none clears the absolute-momentum bar, so the strategy defaults to cash rather than forcing a losing allocation.

5. What is dual momentum generally valued for, compared to a more elaborate trend-following overlay?
   - Its extreme complexity and need for many separate indicators
   - [x] Its simplicity — just two momentum checks computed from the same basic trailing-return data — while still capturing much of the downside protection of more elaborate approaches
   - Its guarantee of outperforming every other strategy in this course
   - Its requirement to hold every sector at all times
   > Dual momentum achieves meaningful downside protection using a lean framework built entirely from trailing-return comparisons, without needing a separate technical layer.
