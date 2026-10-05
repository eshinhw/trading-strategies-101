---
slug: fixed-income-fifty-fifty-butterfly
title: Fifty-Fifty Butterfly
summary: A simplified butterfly construction that splits the body's duration equally, 50/50, between the two wings — an easy-to-build alternative to full dollar-duration matching.
---

## A Simpler Butterfly Construction

A fifty-fifty butterfly is a simpler way to construct a butterfly trade than fully solving for dollar-duration neutrality: rather than calculating the precise dollar-duration split needed between the wings based on their individual durations, it simply allocates half of the body's dollar duration to the short wing and half to the long wing, in a fixed 50/50 split, regardless of the wings' actual relative durations.

## The Cost of Simplicity

This makes the trade much easier to set up and explain — no need to solve equations weighting each wing by its specific duration and price sensitivity — but it comes at the cost of precision: because a fifty-fifty split doesn't account for the fact that the short and long wings typically have very different durations from each other, the resulting position usually isn't perfectly dollar-duration-neutral to a parallel shift in rates, unlike a fully weighted dollar-duration-neutral butterfly.

## Residual Parallel-Shift Exposure

In practice, this means a fifty-fifty butterfly retains some residual exposure to the overall level of interest rates, not just to the curve's shape — a parallel shift in the yield curve can move the position's value by a small amount, whereas a true dollar-duration-neutral construction is designed to cancel that out almost entirely.

## Why It Remains Popular

Despite this imprecision, the fifty-fifty approach remains popular for its simplicity and transparency: traders who want a quick, easy-to-communicate butterfly position, and are willing to tolerate a bit of residual parallel-shift exposure in exchange for not having to run a more involved weighting calculation, often default to this construction as a starting point before considering more precisely weighted alternatives.

# Quiz

1. How does a fifty-fifty butterfly allocate dollar duration between its two wings?
   - It calculates a precise weighting based on each wing's individual duration
   - [x] It simply splits the body's dollar duration equally, 50/50, between the two wings regardless of their individual durations
   - It allocates 100% of the duration to only one wing
   - It ignores duration entirely
   > The fifty-fifty construction is a simplified approach that fixes the split at 50/50 rather than solving for each wing's precise, duration-based weighting.

2. What is the main appeal of a fifty-fifty butterfly compared to a fully dollar-duration-neutral butterfly?
   - It is always more profitable
   - [x] It's simpler and easier to set up, since it avoids solving for each wing's precise duration-based weighting
   - It eliminates all interest-rate risk completely
   - It requires no capital to implement
   > The fifty-fifty split trades off precision for simplicity — no need to calculate exact dollar-duration weightings for each wing.

3. What is the main drawback of the fifty-fifty approach compared to a fully weighted dollar-duration-neutral butterfly?
   - It has no drawback — the two approaches are identical
   - [x] It usually isn't perfectly neutral to a parallel shift in rates, since it doesn't account for the wings' differing individual durations
   - It requires significantly more capital to implement
   - It can only be used with government bonds
   > Because the wings typically have different durations from each other, a fixed 50/50 split doesn't precisely offset the body's dollar duration, leaving some residual parallel-shift exposure.

4. What kind of exposure does a fifty-fifty butterfly typically retain that a true dollar-duration-neutral butterfly is designed to cancel out?
   - Credit risk
   - [x] Some exposure to the overall level of interest rates from a parallel shift in the curve
   - Exposure to equity market movements
   - Currency exposure
   > Since the 50/50 split doesn't perfectly offset dollar duration, the position retains a small amount of sensitivity to a parallel move in rates, not just to the curve's shape.

5. Why might a trader choose a fifty-fifty butterfly despite its imprecision?
   - It is required by regulation for all butterfly trades
   - [x] Its simplicity and transparency make it an easy starting point, even at the cost of some residual parallel-shift exposure
   - It always produces better returns than a precisely weighted butterfly
   - It cannot be constructed using real bonds
   > Traders who want a quick, easy-to-communicate position often accept the small imprecision of a fixed 50/50 split rather than running a more involved weighting calculation.
