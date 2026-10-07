---
slug: fixed-income-regression-weighted-butterfly
title: Regression-Weighted Butterfly
summary: Weighting a butterfly's wings using a statistical regression of how each maturity has historically moved relative to the body, rather than a simple duration calculation.
---

## Weighting by Historical Data

A regression-weighted butterfly improves on simpler weighting methods by using historical data: instead of weighting the wings purely by dollar duration, which only captures a bond's theoretical price sensitivity, or splitting 50/50, which ignores the wings' relative behavior entirely, it runs a statistical regression of how each wing's yield has actually moved historically relative to the body's yield, and uses those regression coefficients, the "betas" of each wing to the body, to set the weights.

## Why Duration Alone Isn't Enough

This matters because, in practice, different points on the yield curve don't always move in the simple, proportional way that a pure duration calculation assumes — the short end of the curve might be more sensitive to central bank policy changes, for example, while the long end responds more to inflation expectations, so their actual historical co-movement with the body can differ from what a dollar-duration calculation alone would predict.

## A More Robust Neutrality

By weighting the wings according to their empirically observed sensitivity to the body, rather than their theoretical duration-based sensitivity, a regression-weighted butterfly aims to be neutral to the kinds of rate moves that have actually occurred historically, which can make it more robust to real-world curve behavior than a purely theoretical dollar-duration-neutral construction.

## The Limits of a Historical Fit

The tradeoff is that regression-based weights depend on the historical period used to estimate them, and historical relationships between yield-curve points aren't guaranteed to hold going forward — a regression fit over a very different rate environment, say, a period of aggressive central-bank tightening, may not describe how the curve behaves in the future, so the weights need to be periodically re-estimated and used with the understanding that they're describing the past, not guaranteeing the future.

# Quiz

1. How does a regression-weighted butterfly determine its wing weights?
   - By splitting the weight 50/50 between the wings regardless of history
   - [x] By running a statistical regression of how each wing's yield has historically moved relative to the body's yield, and using those coefficients to set the weights
   - By ignoring the body entirely and weighting only the wings against each other
   - By using a fixed weight that never changes across any butterfly trade
   > This construction uses empirical, historically observed relationships between the wings and the body, rather than a purely theoretical duration calculation or a fixed split.

2. Why might a regression-based weighting differ from a pure dollar-duration weighting?
   - They are always mathematically identical
   - [x] Different points on the curve don't always move in the simple, proportional way a duration calculation assumes — actual historical co-movement can differ from theoretical sensitivity
   - Regression weighting ignores yield curve data entirely
   - Dollar duration cannot be calculated for any bond
   > The short and long ends of the curve can respond differently to different drivers (like policy changes versus inflation expectations), so their real historical relationship to the body may not match what a duration calculation alone predicts.

3. What is the potential benefit of weighting wings by their empirically observed sensitivity rather than theoretical duration?
   - It guarantees a risk-free trade
   - [x] It aims to be neutral to the kinds of rate moves that have actually occurred historically, potentially making it more robust to real-world curve behavior
   - It eliminates the need to hold any bonds at all
   - It has no potential benefit over other weighting methods
   > By using historically observed co-movement rather than a purely theoretical calculation, the trade is designed to match actual observed curve behavior more closely.

4. What is a key limitation of regression-based weights?
   - They are always identical to a fifty-fifty split
   - [x] They depend on the historical period used to estimate them, and historical relationships aren't guaranteed to hold going forward
   - Regression weights cannot be recalculated once set
   - They require no historical data whatsoever
   > A regression fit over one rate environment may not accurately describe curve behavior in a different future environment, so the weights need periodic re-estimation.

5. Why might weights estimated during a period of aggressive central-bank tightening be a poor guide for future trades?
   - Central bank policy has no effect on the yield curve
   - [x] Historical relationships between yield-curve points estimated in one environment aren't guaranteed to describe how the curve behaves in a different future environment
   - Regression weights are always accurate regardless of the period used
   - Tightening periods make regression analysis impossible to run
   > The regression describes the past relationship observed during a specific period — if future conditions differ meaningfully, that historical relationship may no longer hold.

6. {#calc1} [calc] A regression shows the 2-year yield moves 0.8 basis points for every 1 basis point move in the 5-year yield. If the 5-year yield rises 10 basis points, what 2-year move does the regression predict?
   - 10 basis points
   - 12.5 basis points
   - [x] 8 basis points
   - 0.8 basis points
   > The predicted move is the beta times the body's move: 0.8 × 10 = 8 basis points. Weighting by this relationship protects the trade from non-parallel moves.
