---
slug: structured-assets-carry-cds-hedging
---

# Quiz

1. {#q1} What does CDS hedging use to hedge a tranche position?
   - [x] Single-name CDS on the individual reference entities that make up the underlying pool
   - A broad, unrelated credit index
   - Government bonds with no connection to the pool
   - Another tranche of a completely different structure
   > CDS hedging goes directly to the source, hedging with single-name CDS on the specific reference entities inside the underlying pool.

2. {#q2} What does a tranche's "delta" to a given name measure?
   - [x] How much the tranche's value moves for a small change in that specific name's credit spread
   - The total number of names in the underlying pool
   - The tranche's coupon rate
   - The index's overall trading volume
   > Delta measures sensitivity — how much a tranche's value changes for a small move in one particular reference entity's spread — and is used to size the single-name CDS hedge for that name.

3. {#q3} What risk remains after single-name spread risk is hedged away in a CDS-hedged tranche carry trade?
   - [x] Correlation risk — the tendency of defaults to cluster together rather than happen independently
   - No risk remains at all
   - Only interest rate risk
   - Only currency risk
   > With both broad market risk and name-specific spread risk stripped out, what's left is a purer bet on correlation — how likely defaults are to happen together rather than independently.

4. {#q4} Why does a CDS-hedged tranche position require continuous rebalancing?
   - [x] Because each name's delta to the tranche changes as spreads move and the pool ages
   - Because CDS contracts expire every single day
   - Rebalancing is never actually required
   - Because the underlying index changes its composition daily
   > As spreads move and the pool's composition ages, each name's sensitivity to the tranche shifts, requiring the hedge to be adjusted to stay properly sized.

5. {#q5} How does CDS hedging's operational intensity compare to index or tranche hedging?
   - [x] It's the most operationally intensive, since it requires tracking and rebalancing many individual name-level deltas rather than one or two broader positions
   - It's the least operationally intensive of the three
   - All three hedging approaches require identical effort
   - CDS hedging requires no monitoring once it's set up
   > Managing single-name deltas across every name in the pool, and rebalancing as those deltas shift, makes CDS hedging considerably more hands-on than a single index or tranche hedge.

6. {#q6} A trader collects $150,000/year on a mezzanine tranche and pays $16,000/year hedging with five single-name CDS. What must happen to those five hedge positions over time?
   - [x] They need to be recalculated and rebalanced as each name's delta to the tranche shifts with spreads and pool aging
   - They can be set once and never touched again
   - They automatically hedge every other name in the pool as well
   - They expire and cannot be renewed
   > Because single-name deltas change as spreads move and the pool ages, a CDS-hedged position requires ongoing rebalancing to stay properly sized — the operational cost of this more precise hedge.

7. {#calc1} [calc] A trader sells protection on a $20 million mezzanine tranche at a 2% coupon and buys CDS on $3 million at 70 basis points. What is the net annual carry?
   - $400,000
   - $21,000
   - [x] $379,000
   - $421,000
   > The tranche coupon is $20M × 2% = $400,000 and the hedge costs $3M × 0.70% = $21,000, so the net carry is $379,000.

8. {#calc2} [calc] A trader holds a $20 million mezzanine tranche and hedges with single-name CDS equal to the tranche's 0.18 delta to the names. What CDS notional is needed?
   - [x] $3.6 million
   - $20 million
   - $0.18 million
   - $111 million
   > The hedge notional is $20M × 0.18 = $3.6M.

9. {#bk1} [calc] A trader earns $1,000,000 carry on a long equity tranche and pays 100 basis points a year on $30 million of index protection. What is the net carry?
   - [x] $700,000
   - $300,000
   - $1,300,000
   - $970,000
   > Protection costs 1% × $30 million = $300,000. Net carry = $1,000,000 − $300,000 = $700,000.

10. {#bk2} [calc] A trader earns 25% a year on a $4 million equity tranche and buys $20 million of index protection at 60 basis points. What is the net carry?
   - $1,000,000
   - $120,000
   - [x] $880,000
   - $1,120,000
   > Tranche income = 25% × $4 million = $1,000,000. Hedge cost = 0.6% × $20 million = $120,000. Net = $880,000.
