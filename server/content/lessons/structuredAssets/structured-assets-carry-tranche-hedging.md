---
slug: structured-assets-carry-tranche-hedging
title: Carry – Tranche Hedging
summary: Hedging a tranche's carry position with a different tranche from the same capital structure, instead of the broad index, for a more precisely targeted hedge.
---

## A More Targeted Hedge

Rather than hedging a tranche position with the broad, plain index, this variant hedges one tranche against another tranche of the same underlying structure — for example, hedging a mezzanine tranche's spread risk with a position in an adjacent tranche, whether more junior or more senior.

## Why Use Another Tranche Instead of the Index

Two tranches from the same capital structure share direct exposure to the exact same specific pool of underlying names, so a tranche-versus-tranche hedge can offset structure-specific risk, not just broad market direction, that a generic index hedge would miss entirely.

## Isolating Compensation for Subordination

After hedging with a nearby tranche, what's left is a more precise bet on the compensation for that specific tranche's position in the capital structure — its exact attachment and detachment points — rather than a broader bet muddied by exposure to the whole index's composition.

## The Cost of Precision

A tranche-versus-tranche hedge is harder to execute than an index hedge, since specific tranches of a given structure are less liquid than the plain index, and the hedge ratio between two tranches of the same structure requires a more detailed model of how losses propagate through the capital structure than a simple index hedge does.

## A Worked Example

A trader sells protection on $10 million notional of the mezzanine tranche (7-15%), collecting $150,000 a year in running coupon. Instead of hedging with the broad index, the trader buys protection on $800,000 notional of the equity tranche (0-3%) from the same underlying structure, paying 500 basis points running, about $40,000 a year. The resulting net carry, roughly $110,000 a year, is a more tightly targeted bet on the mezzanine tranche's specific subordination, since both legs are drawn from the identical pool of names rather than the broader, more diluted index.

# Quiz

1. What does tranche hedging use to hedge a tranche position, instead of the broad index?
   - [x] Another tranche from the same underlying capital structure
   - A completely unrelated credit index
   - A government bond with no connection to the structure
   - Nothing — tranche hedging uses no hedge at all
   > Tranche hedging offsets risk using a different tranche of the same structure, rather than the broad, generic index.

2. Why can a tranche-versus-tranche hedge offset risk that an index hedge would miss?
   - [x] Because both tranches share direct exposure to the exact same specific pool of underlying names
   - Because tranches from the same structure have no shared exposure at all
   - Because index hedges are always more precise than tranche hedges
   - Because tranches never share any underlying exposure with each other
   > Since both tranches are drawn from the same pool, a tranche-versus-tranche hedge can offset structure-specific risk that a generic, broad index hedge simply can't reach.

3. What does a trader isolate by hedging with a nearby tranche rather than the index?
   - [x] A more precise bet on the compensation for that specific tranche's exact position in the capital structure
   - A bet on the overall direction of interest rates
   - Complete elimination of all risk in the position
   - A bet unrelated to the underlying pool entirely
   > The more targeted hedge strips out structure-specific noise, isolating compensation for the specific tranche's attachment and detachment points rather than a broader, index-level bet.

4. What is the main drawback of a tranche-versus-tranche hedge compared to an index hedge?
   - [x] Specific tranches are less liquid than the plain index, and the hedge ratio requires a more detailed loss-propagation model
   - Tranche hedges are always cheaper and easier to execute than index hedges
   - There is no drawback whatsoever
   - Tranche hedges eliminate the need for any modeling at all
   > Individual tranches trade less liquidly than the standardized index, and correctly sizing the hedge requires modeling how losses flow through the capital structure — more complex than a simple index hedge.

5. Why might a trader accept the extra complexity of a tranche-versus-tranche hedge?
   - [x] For a more precisely targeted hedge against structure-specific risk that a broad index hedge can't offset
   - Because it's always cheaper than an index hedge
   - Because tranche hedges require no ongoing management
   - Because regulators require it for all trades
   > The tradeoff is precision: a tranche-versus-tranche hedge targets structure-specific risk more accurately, at the cost of liquidity and modeling complexity.

6. A trader collects $150,000/year on a mezzanine tranche and pays $40,000/year hedging with the equity tranche of the same structure. What is the approximate net carry?
   - [x] $110,000
   - $190,000
   - $40,000
   - $150,000
   > $150,000 collected minus $40,000 paid on the equity-tranche hedge leaves roughly $110,000 a year — a more tightly isolated bet on the mezzanine tranche's specific subordination.
