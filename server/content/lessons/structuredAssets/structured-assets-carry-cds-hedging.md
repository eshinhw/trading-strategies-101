---
slug: structured-assets-carry-cds-hedging
title: Carry – CDS Hedging
summary: Hedging a tranche position's carry using single-name CDS on the underlying reference entities, weighted by each name's contribution to the tranche's risk.
---

## Hedging With the Underlying Names Directly

Instead of hedging a tranche position with the index or another tranche, this approach hedges directly with single-name CDS on the individual reference entities that make up the underlying pool.

## Tranche Delta and Single-Name Sensitivity

Each name in the pool contributes differently to a given tranche's expected loss, depending on that name's own credit spread and its correlation with the rest of the pool. A tranche's "delta" to any one name captures how much the tranche's value moves for a small change in that name's spread, and single-name CDS positions are sized according to those deltas.

## Isolating Correlation Risk

Hedging away single-name spread risk this way leaves a position that's now primarily exposed to correlation — how likely defaults are to cluster together rather than happen independently — since both the broad, market-wide risk and the name-specific spread risk have been stripped out, leaving a purer bet on the shape of the loss distribution itself.

## A Dynamic, Rebalancing Hedge

Because each name's delta to the tranche changes as spreads move and as the pool ages, a CDS-hedged tranche position requires continuous rebalancing to stay properly hedged, unlike a simpler, more static index or tranche hedge — making this the most operationally intensive of the carry-hedging variants.

## A Worked Example

A trader sells protection on $10 million notional of the mezzanine tranche, collecting $150,000 a year in coupon. To hedge single-name risk, they buy CDS protection on the pool's five highest-delta names, sized according to each name's computed delta to the tranche, totaling $2 million of combined notional at an average spread of 80 basis points — about $16,000 a year. The remaining $134,000 of net carry is compensation for correlation risk alone, with both broad market and single-name spread risk stripped out — though as spreads move, those five deltas, and the hedge notionals sized to them, need to be recalculated and rebalanced.

# Quiz

1. What does CDS hedging use to hedge a tranche position?
   - [x] Single-name CDS on the individual reference entities that make up the underlying pool
   - A broad, unrelated credit index
   - Government bonds with no connection to the pool
   - Another tranche of a completely different structure
   > CDS hedging goes directly to the source, hedging with single-name CDS on the specific reference entities inside the underlying pool.

2. What does a tranche's "delta" to a given name measure?
   - [x] How much the tranche's value moves for a small change in that specific name's credit spread
   - The total number of names in the underlying pool
   - The tranche's coupon rate
   - The index's overall trading volume
   > Delta measures sensitivity — how much a tranche's value changes for a small move in one particular reference entity's spread — and is used to size the single-name CDS hedge for that name.

3. What risk remains after single-name spread risk is hedged away in this strategy?
   - [x] Correlation risk — the tendency of defaults to cluster together rather than happen independently
   - No risk remains at all
   - Only interest rate risk
   - Only currency risk
   > With both broad market risk and name-specific spread risk stripped out, what's left is a purer bet on correlation — how likely defaults are to happen together rather than independently.

4. Why does a CDS-hedged tranche position require continuous rebalancing?
   - [x] Because each name's delta to the tranche changes as spreads move and the pool ages
   - Because CDS contracts expire every single day
   - Rebalancing is never actually required for this strategy
   - Because the underlying index changes its composition daily
   > As spreads move and the pool's composition ages, each name's sensitivity to the tranche shifts, requiring the hedge to be adjusted to stay properly sized.

5. How does CDS hedging's operational intensity compare to index or tranche hedging?
   - [x] It's the most operationally intensive, since it requires tracking and rebalancing many individual name-level deltas rather than one or two broader positions
   - It's the least operationally intensive of the three
   - All three hedging approaches require identical effort
   - CDS hedging requires no monitoring once it's set up
   > Managing single-name deltas across every name in the pool, and rebalancing as those deltas shift, makes CDS hedging considerably more hands-on than a single index or tranche hedge.

6. A trader collects $150,000/year on a mezzanine tranche and pays $16,000/year hedging with five single-name CDS. What must happen to those five hedge positions over time?
   - [x] They need to be recalculated and rebalanced as each name's delta to the tranche shifts with spreads and pool aging
   - They can be set once and never touched again
   - They automatically hedge every other name in the pool as well
   - They expire and cannot be renewed
   > Because single-name deltas change as spreads move and the pool ages, a CDS-hedged position requires ongoing rebalancing to stay properly sized — the operational cost of this more precise hedge.
