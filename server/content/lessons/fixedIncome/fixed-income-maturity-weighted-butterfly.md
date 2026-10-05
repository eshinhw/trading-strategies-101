---
slug: fixed-income-maturity-weighted-butterfly
title: Maturity-Weighted Butterfly
summary: Weighting a butterfly's wings by their maturity distance from the body, a simple rule-of-thumb alternative to duration- or regression-based weighting.
---

## Weighting by Maturity Distance

A maturity-weighted butterfly sets its wing weights based on each wing's maturity distance from the body, rather than on dollar duration or a historical regression — for example, weighting the short wing and long wing inversely to how far their maturities sit from the body's maturity, so a wing closer to the body in maturity terms gets a larger weight than one further away.

## A Simple, Mechanical Rule

This is a simpler, more mechanical rule of thumb than either the dollar-duration-neutral or regression-weighted approaches: it doesn't require calculating each bond's precise duration or running a statistical regression on historical yield relationships, just measuring the maturity gap between each wing and the body, which makes it fast and easy to apply consistently across many different butterfly trades.

## Only a Rough Proxy

The tradeoff is that maturity distance is only a rough proxy for a bond's actual interest-rate sensitivity — two bonds the same distance in years from the body don't necessarily have the same dollar duration or the same historical co-movement with the body, especially since duration doesn't scale in a perfectly linear way with maturity, a bond's duration grows more slowly than its maturity, especially at longer maturities, because of the effect of coupon payments arriving along the way.

## A Starting Point, Not a Final Answer

In practice, a maturity-weighted butterfly is often used as a quick, intuitive starting point for structuring a butterfly trade — especially when a trader wants a fast, rule-of-thumb construction — before potentially refining the position with a more precise dollar-duration or regression-based weighting if the trade is going to be held for a meaningful period or sized significantly.

# Quiz

1. What does a maturity-weighted butterfly use to set its wing weights?
   - A statistical regression of historical yield movements
   - [x] Each wing's maturity distance from the body
   - The credit rating of each bond
   - A fixed 50/50 split regardless of maturity
   > This construction weights the wings based on how far their maturities sit from the body's maturity, rather than on duration calculations or historical regression.

2. What is the main appeal of the maturity-weighted approach?
   - It is the most mathematically precise weighting method available
   - [x] It's simple and mechanical — no need to calculate precise duration or run a statistical regression, just measure the maturity gap
   - It guarantees perfect dollar-duration neutrality
   - It requires the most extensive historical data of any method
   > Maturity-weighting is valued for being fast and easy to apply consistently, since it only requires measuring maturity distances rather than more involved calculations.

3. Why is maturity distance only a rough proxy for a bond's actual interest-rate sensitivity?
   - Maturity distance perfectly predicts interest-rate sensitivity in all cases
   - [x] Duration doesn't scale in a perfectly linear way with maturity — it grows more slowly than maturity, especially at longer maturities, due to coupon payments arriving along the way
   - Interest-rate sensitivity is unrelated to a bond's maturity
   - All bonds have identical duration regardless of maturity
   > Two bonds the same distance in years from the body don't necessarily have matching dollar duration, since duration grows more slowly than maturity because of intervening coupon payments.

4. How does maturity-weighting compare in complexity to dollar-duration-neutral or regression-weighted construction?
   - It is more complex than both alternatives
   - [x] It is simpler than both, since it skips precise duration calculations and historical regression entirely
   - It is identical in complexity to a regression-weighted butterfly
   - Complexity cannot be compared across these methods
   > Maturity-weighting is the most mechanical and simplest of the three approaches, trading precision for ease of use.

5. When is a maturity-weighted butterfly often used in practice?
   - Only for trades held for multiple decades
   - [x] As a quick, intuitive starting point, potentially refined later with a more precise weighting method for larger or longer-held positions
   - Only when regression data is completely unavailable
   - It is never used in practice
   > Its simplicity makes it a practical first-pass construction, which a trader might later refine with dollar-duration or regression-based weighting for a more significant or longer-held trade.
