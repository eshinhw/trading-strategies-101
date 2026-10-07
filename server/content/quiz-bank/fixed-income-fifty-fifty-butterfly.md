---
slug: fixed-income-fifty-fifty-butterfly
---

# Quiz

1. {#q1} How does a fifty-fifty butterfly allocate dollar duration between its two wings?
   - It calculates a precise weighting based on each wing's individual duration
   - [x] It simply splits the body's dollar duration equally, 50/50, between the two wings regardless of their individual durations
   - It allocates 100% of the duration to only one wing
   - It ignores duration entirely
   > The fifty-fifty construction is a simplified approach that fixes the split at 50/50 rather than solving for each wing's precise, duration-based weighting.

2. {#q2} What is the main appeal of a fifty-fifty butterfly compared to a fully dollar-duration-neutral butterfly?
   - It is always more profitable
   - [x] It's simpler and easier to set up, since it avoids solving for each wing's precise duration-based weighting
   - It eliminates all interest-rate risk completely
   - It requires no capital to implement
   > The fifty-fifty split trades off precision for simplicity — no need to calculate exact dollar-duration weightings for each wing.

3. {#q3} What is the main drawback of the fifty-fifty approach compared to a fully weighted dollar-duration-neutral butterfly?
   - It has no drawback — the two approaches are identical
   - [x] It usually isn't perfectly neutral to a parallel shift in rates, since it doesn't account for the wings' differing individual durations
   - It requires significantly more capital to implement
   - It can only be used with government bonds
   > Because the wings typically have different durations from each other, a fixed 50/50 split doesn't precisely offset the body's dollar duration, leaving some residual parallel-shift exposure.

4. {#q4} What kind of exposure does a fifty-fifty butterfly typically retain that a true dollar-duration-neutral butterfly is designed to cancel out?
   - Credit risk
   - [x] Some exposure to the overall level of interest rates from a parallel shift in the curve
   - Exposure to equity market movements
   - Currency exposure
   > Since the 50/50 split doesn't perfectly offset dollar duration, the position retains a small amount of sensitivity to a parallel move in rates, not just to the curve's shape.

5. {#q5} Why might a trader choose a fifty-fifty butterfly despite its imprecision?
   - It is required by regulation for all butterfly trades
   - [x] Its simplicity and transparency make it an easy starting point, even at the cost of some residual parallel-shift exposure
   - It always produces better returns than a precisely weighted butterfly
   - It cannot be constructed using real bonds
   > Traders who want a quick, easy-to-communicate position often accept the small imprecision of a fixed 50/50 split rather than running a more involved weighting calculation.

6. {#calc1} [calc] A butterfly is short $20 million of a 5-year note with a duration of 4.6. Each wing takes half of the body's dollar duration. How much of a 2-year note (duration 1.9) is bought?
   - About $48.4 million
   - [x] About $24.2 million
   - About $9.2 million
   - About $12.1 million
   > The body's dollar duration is 20 × 4.6 = 92, so each wing gets 46. For the 2-year, 46 / 1.9 ≈ $24.2 million.

7. {#bk1} [calc] A fifty-fifty butterfly sells $1 million of 5-year notes (DV01 $460 per $1 million) and buys 2-year notes (DV01 $190 per $1 million) and 10-year notes (DV01 $850 per $1 million), each wing covering half of the body's DV01. How much 2-year face value is bought?
   - $0.27 million
   - $2.42 million
   - $0.50 million
   - [x] $1.21 million
   > Half of the body's $460 DV01 is $230. The 2-year wing needs $230 / $190 = $1.21 million of face value.

8. {#bk2} [calc] In the same fifty-fifty butterfly (5-year DV01 $460, 2-year DV01 $190, 10-year DV01 $850 per $1 million), how much 10-year face value is bought against $1 million of 5-year notes?
   - $1.21 million
   - [x] $0.27 million
   - $0.50 million
   - $0.54 million
   > Half of the body's $460 DV01 is $230. The 10-year wing needs $230 / $850 = $0.27 million of face value.

9. {#bk3} [calc] A fifty-fifty butterfly is short $10 million of 5-year notes (DV01 $4,600 per basis point). The 5-year yield rises 5 basis points while the wings are unchanged. What is the gain on the short body?
   - $4,600
   - $230,000
   - $920
   - [x] $23,000
   > A short position gains when yields rise: $4,600 × 5 = $23,000.
