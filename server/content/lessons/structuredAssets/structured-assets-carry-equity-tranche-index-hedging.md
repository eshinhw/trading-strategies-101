---
slug: structured-assets-carry-equity-tranche-index-hedging
title: Carry, Equity Tranche – Index Hedging
summary: Collecting the high coupon of a credit index's equity tranche while hedging away the index's broad market and spread risk.
---

## The Equity Tranche's High Carry

The equity tranche of a credit index — for example, the 0-3% tranche of CDX — absorbs the first losses from the underlying basket, so it pays a much higher running coupon than the plain index or its senior tranches. A trader who sells protection on, effectively going long, the equity tranche collects that premium every period as long as cumulative losses stay below the tranche's threshold.

## The Risk Being Compensated

That outsized coupon compensates for genuine risk: if defaults or credit deterioration among the underlying names push cumulative losses into the tranche's loss range, the tranche can be wiped out entirely, well before the same event would ever touch a senior tranche.

## Hedging With the Broad Index

Much of the equity tranche's day-to-day price movement comes from the same broad credit-spread-widening or narrowing moves that push the whole index around, not from tranche-specific developments. A trader hedges out that broad, systematic exposure by taking an offsetting position in the plain index CDS.

## What's Left After the Hedge

Once the broad index exposure is hedged away, what remains is a more isolated bet: collecting the tranche's rich carry in exchange for bearing correlation risk — the pool's tendency toward clustered, correlated defaults rather than broad, market-wide spread moves — a subtler and harder-to-hedge risk than simple market direction.

## Example

A trader sells protection on the CDX equity tranche (0-3%).

- Notional: $10 million
- Running coupon: 500 basis points a year

$$
\$10{,}000{,}000 \times 5.00\% = \$500{,}000 \text{ collected a year}
$$

**Hedging the broad index risk**

The trader buys protection on the plain index, sized to the tranche's index delta of about $3 million, at a running coupon of 60 basis points.

$$
\$3{,}000{,}000 \times 0.60\% = \$18{,}000 \text{ paid a year}
$$

**Net carry**

$$
\$500{,}000 - \$18{,}000 = \boxed{\$482{,}000 \text{ a year}}
$$

- Return on the $10 million notional: 4.82%
- What it pays for: correlation risk specifically, not the market's direction, which the index leg has already neutralized.

# Quiz

1. Why does the equity tranche of a credit index pay a much higher coupon than the plain index?
   - [x] It absorbs the first losses from the underlying basket, so it's compensated with richer carry for that greater risk
   - Equity tranches are guaranteed by a government agency
   - The equity tranche has no exposure to any losses at all
   - Coupon size is unrelated to a tranche's position in the capital structure
   > As the first-loss piece, the equity tranche is compensated with a much richer running coupon for bearing the risk of being wiped out before any senior tranche is touched.

2. What risk does the equity tranche's high coupon compensate for?
   - [x] The risk that the tranche can be wiped out entirely if losses push into its range, well before a senior tranche would be affected
   - The risk that interest rates will never change
   - The risk that the index will stop trading
   - There is no real risk being compensated — it's simply excess profit
   > The equity tranche's high carry directly compensates for its first-loss position — it can be wiped out by losses that would leave senior tranches completely untouched.

3. Why does this strategy hedge the equity tranche position with the broad index?
   - [x] To strip out the broad, systematic spread-widening or narrowing risk that drives much of the tranche's day-to-day price movement
   - To increase the position's exposure to market direction
   - Index hedging has no effect on the position's risk
   - To guarantee a fixed, unchanging profit regardless of any market conditions
   > Hedging with the plain index offsets the broad, systematic component of the tranche's price movement, isolating the tranche-specific risk and carry from the market's overall direction.

4. What risk remains after the equity tranche position is hedged with the index?
   - No risk remains at all
   - [x] Correlation risk — the pool's tendency toward clustered, correlated defaults rather than broad market-wide spread moves
   - Only interest rate risk
   - Only the risk of the index ceasing to trade
   > After stripping out broad market direction, what's left is a bet on correlation — whether defaults cluster together in a way that would burn through the equity tranche.

5. What does "selling protection" on the equity tranche mean in this strategy?
   - Buying insurance against the tranche's own default
   - [x] Taking on the equity tranche's first-loss risk in exchange for collecting its rich running coupon
   - Refusing to trade the tranche at all
   - Guaranteeing the entire credit index against all losses
   > Selling protection on the tranche means taking on its default risk — the first-loss exposure — in exchange for the coupon income that compensates for that risk.

6. A trader collects $500,000/year selling protection on the equity tranche and pays $18,000/year hedging with the index. What does the roughly $482,000 of remaining net carry compensate for?
   - [x] Correlation risk, since the broad index exposure has already been hedged away
   - Interest rate risk alone
   - It is pure, riskless profit with nothing being compensated
   - The risk that the index itself defaults
   > Once the index hedge strips out systematic, broad market exposure, the remaining carry is compensation for correlation risk — the tranche-specific risk that survives the hedge.

7. {#calc1} [calc] A trader sells protection on a $5 million equity tranche at 500 basis points and buys protection on $1.2 million of the index at 60 basis points. What is the net annual carry?
   - $250,000
   - $7,200
   - $257,200
   - [x] $242,800
   > The coupon is $5M × 5% = $250,000 and the index hedge costs $1.2M × 0.60% = $7,200, so the net carry is $242,800.
