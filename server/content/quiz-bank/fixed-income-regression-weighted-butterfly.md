---
slug: fixed-income-regression-weighted-butterfly
---

# Quiz

1. {#q1} How does a regression-weighted butterfly determine its wing weights?
   - By splitting the weight 50/50 between the wings regardless of history
   - [x] By running a statistical regression of how each wing's yield has historically moved relative to the body's yield, and using those coefficients to set the weights
   - By ignoring the body entirely and weighting only the wings against each other
   - By using a fixed weight that never changes across any butterfly trade
   > This construction uses empirical, historically observed relationships between the wings and the body, rather than a purely theoretical duration calculation or a fixed split.

2. {#q2} Why might a regression-based weighting differ from a pure dollar-duration weighting?
   - They are always mathematically identical
   - [x] Different points on the curve don't always move in the simple, proportional way a duration calculation assumes — actual historical co-movement can differ from theoretical sensitivity
   - Regression weighting ignores yield curve data entirely
   - Dollar duration cannot be calculated for any bond
   > The short and long ends of the curve can respond differently to different drivers (like policy changes versus inflation expectations), so their real historical relationship to the body may not match what a duration calculation alone predicts.

3. {#q3} What is the potential benefit of weighting wings by their empirically observed sensitivity rather than theoretical duration?
   - It guarantees a risk-free trade
   - [x] It aims to be neutral to the kinds of rate moves that have actually occurred historically, potentially making it more robust to real-world curve behavior
   - It eliminates the need to hold any bonds at all
   - It has no potential benefit over other weighting methods
   > By using historically observed co-movement rather than a purely theoretical calculation, the trade is designed to match actual observed curve behavior more closely.

4. {#q4} What is a key limitation of regression-based weights?
   - They are always identical to a fifty-fifty split
   - [x] They depend on the historical period used to estimate them, and historical relationships aren't guaranteed to hold going forward
   - Regression weights cannot be recalculated once set
   - They require no historical data whatsoever
   > A regression fit over one rate environment may not accurately describe curve behavior in a different future environment, so the weights need periodic re-estimation.

5. {#q5} Why might weights estimated during a period of aggressive central-bank tightening be a poor guide for future trades?
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

7. {#bk1} [calc] A regression finds that the body yield moves 0.4 basis points per 1 basis point move in the 2-year wing. The body DV01 is $460 per $1 million and the 2-year DV01 is $190 per $1 million. How much 2-year face value hedges $1 million of body against moves in that wing?
   - $2.42 million
   - $0.40 million
   - [x] $0.97 million
   - $1.15 million
   > Hedge ratio = beta × body DV01 / wing DV01 = 0.4 × $460 / $190 = 0.968, or about $0.97 million per $1 million of body.

8. {#bk2} [calc] A regression predicts the body yield change from the wings. The body moves 0.4 times the 2-year wing change and 0.6 times the 10-year wing change. The wings move 6 and 4 basis points. What body move is predicted?
   - [x] 4.8 basis points
   - 10 basis points
   - 2.4 basis points
   - 5.0 basis points
   > Predicted = 0.4 × 6 + 0.6 × 4 = 2.4 + 2.4 = 4.8 basis points.

9. {#bk3} [calc] A trader is short $10 million of body (DV01 $4,600 per basis point) hedged by the regression. The body yield rises 6.0 basis points when the regression predicted 4.8. What is the profit or loss from the surprise 1.2 basis points?
   - −$5,520
   - +$27,600
   - [x] +$5,520
   - −$55,200
   > The surprise is 1.2 basis points. A short body gains when yields rise: $4,600 × 1.2 = +$5,520.
