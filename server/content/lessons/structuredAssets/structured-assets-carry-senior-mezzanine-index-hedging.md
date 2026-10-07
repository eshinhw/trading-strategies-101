---
slug: structured-assets-carry-senior-mezzanine-index-hedging
title: Carry, Senior/Mezzanine – Index Hedging
summary: The same index-hedged carry idea as the equity tranche trade, applied further up the capital structure, where the coupon is thinner but the loss protection is deeper.
---

## A Thinner, More Protected Coupon

Senior and mezzanine tranches sit higher in the capital structure than the equity tranche, protected by the subordination of everything beneath them. That extra protection means a much lower running coupon than the equity tranche pays, but still a genuine spread over risk-free financing for bearing the residual risk of losses reaching that high into the structure.

## When Senior/Mezzanine Carry Becomes Attractive

Senior and mezzanine tranche spreads widen and narrow with the market's overall assessment of default risk and correlation, and can, at times, offer carry that looks rich relative to the tranche's actual loss probability — particularly during periods of elevated market fear, when senior tranche spreads can overshoot the risk they're genuinely compensating for.

## Hedging With the Index

As with the equity tranche trade, the position is hedged against the broad index to strip out systematic spread-widening risk, isolating the tranche-specific compensation from the market's overall direction.

## A Different Correlation Bet

Because senior and mezzanine tranches are only touched by losses once more junior tranches are wiped out, being long one of these tranches, after the index hedge, is a bet that defaults will be relatively idiosyncratic and spread out, rather than a correlated wave that burns through the entire capital structure at once — the opposite correlation exposure from the equity tranche trade.

## Example

A trader sells protection on the mezzanine tranche (7-15%), further up the capital structure.

- Notional: $10 million
- Running coupon: 150 basis points a year

$$
\$10{,}000{,}000 \times 1.50\% = \$150{,}000 \text{ collected a year}
$$

**Hedging with the plain index**

The mezzanine tranche has a smaller index delta, about $1.5 million, at about 60 basis points.

$$
\$1{,}500{,}000 \times 0.60\% = \$9{,}000 \text{ paid a year}
$$

**Net carry**

$$
\$150{,}000 - \$9{,}000 = \boxed{\$141{,}000 \text{ a year}}
$$

**Comparison with the equity tranche trade (same $10 million)**

- Equity tranche: $500,000 coupon, $482,000 net carry, hit by the first losses
- Mezzanine tranche: $150,000 coupon, $141,000 net carry, hit only when losses climb above 7%

The net carry pays for the risk that losses climb far enough up the structure to reach this tranche, which is much less likely than for the equity tranche but still real.

# Quiz

1. Why do senior and mezzanine tranches pay a lower coupon than the equity tranche?
   - [x] They are protected by the subordination of the tranches beneath them, so they carry less risk
   - They have no protection from losses at all
   - Coupon size is set randomly, unrelated to seniority
   - Senior tranches are always more risky than equity tranches
   > The subordination cushion beneath senior and mezzanine tranches means losses have to burn through everything junior first, which is why they command a lower coupon than the first-loss equity tranche.

2. When can senior/mezzanine tranche carry become especially attractive?
   - [x] During periods of elevated market fear, when spreads can overshoot the risk they're genuinely compensating for
   - Only when there is no risk in the market at all
   - Senior tranche carry is always constant and never changes
   - Only during periods when the credit index doesn't exist
   > Market-wide fear can push senior and mezzanine spreads wider than the tranche's actual loss probability justifies, creating an attractive carry opportunity for a trader willing to hold the position.

3. Why is this position also hedged with the broad index?
   - [x] To strip out systematic, broad spread-widening risk, isolating the tranche-specific compensation
   - To increase the position's directional market exposure
   - Hedging has no purpose in this strategy
   - To eliminate the tranche's coupon entirely
   > Just as with the equity tranche version, hedging with the index removes the broad, systematic component of price movement, leaving a more isolated bet on the tranche itself.

4. What correlation bet does a long senior/mezzanine tranche position (after the index hedge) represent?
   - [x] A bet that defaults will be relatively idiosyncratic and spread out, rather than a correlated wave burning through the whole structure
   - The exact same correlation bet as the equity tranche trade
   - A bet that interest rates will rise
   - A bet that the index will stop existing
   > Because senior/mezzanine tranches are only hit once junior tranches are wiped out, being long them is a bet against a highly correlated default wave — the opposite exposure from the equity tranche trade.

5. How does the risk profile of a senior/mezzanine carry trade differ from an equity tranche carry trade?
   - [x] Senior/mezzanine offers thinner carry with deeper loss protection and a bet against correlated defaults, while equity offers richer carry with thin protection and a bet tied to correlated defaults
   - They are identical in every respect
   - Senior/mezzanine tranches carry more risk than equity tranches
   - Neither trade involves any correlation exposure
   > The two trades sit at opposite ends of the capital structure — different coupon size, different loss protection, and opposite exposure to correlated versus idiosyncratic default risk.

6. [calc] A trader collects $150,000/year selling protection on a mezzanine tranche and pays $9,000/year hedging with the index. What is the approximate net carry remaining?
   - [x] $141,000
   - $159,000
   - $9,000
   - $150,000
   > $150,000 in coupon collected minus $9,000 paid on the index hedge leaves roughly $141,000 a year in net carry, compensating for the tranche-specific risk that survives the hedge.

7. {#calc1} [calc] A trader sells protection on a $12 million mezzanine tranche at 160 basis points and hedges with $1.8 million of the index at 60 basis points. What is the net annual carry?
   - $192,000
   - $10,800
   - [x] $181,200
   - $202,800
   > The coupon is $12M × 1.60% = $192,000 and the hedge costs $1.8M × 0.60% = $10,800, so the net is $181,200.
