---
slug: misc-spread-and-basis-trading
title: Spread and Basis Trading
summary: Trading the gap between two related prices — a spread or basis — rather than either price outright, the shared logic behind several of this course's otherwise very different strategies.
---

## Trading a Gap, Not a Level

A spread (or basis) trade takes a position on the relationship between two related prices — the gap between them — rather than betting on either price rising or falling outright. The trade can profit even if both underlying prices move, as long as they move in a way that changes the gap in the anticipated direction.

## Why Trade the Gap Instead of a Price

Two related prices are often driven by many of the same broad market forces, so a spread position can filter out that shared, common movement and isolate a narrower, more specific view — on a margin, a relationship, or a mispricing — while leaving less exposure to the market's overall direction than an outright position in either price alone would carry.

## Examples of the Underlying Relationship

The "gap" being traded takes different forms depending on the situation: it can be the difference between two related yields (as with breakeven inflation, covered earlier in this module), the margin between an input cost and an output price (as with the spark spread covered next), or the difference between a commodity's futures price and its physical spot price, among many other possible pairings.

## Why the Relationship Isn't Always Stable

A spread's historical range is a useful reference point, but it isn't a hard boundary — genuine structural change, a shift in supply and demand, or a change in the underlying relationship itself can push a spread persistently outside its historical range rather than reliably reverting, which is a real risk in any spread-trading approach.

## Example

A trader believes electricity will rise faster than natural gas. Instead of betting on either price, the trader trades the gap (the spark spread).

- Electricity: $45 per MWh, long 72,000 MWh
- Gas: $3.00 per MMBtu, short 540,000 MMBtu (7.5 MMBtu per MWh)
- Spread: $45 − 7.5 × $3.00 = $22.50 per MWh

**Both prices fall, but electricity falls less**

- Electricity: $45 to $42 (−$3)
- Gas: $3.00 to $2.50, so the gas cost per MWh falls from $22.50 to 7.5 × $2.50 = $18.75 (−$3.75)

$$
\text{New spread} = \$42 - \$18.75 = \$23.25 \quad (+\$0.75)
$$

$$
\text{Power leg: } -\$3 \times 72{,}000 = -\$216{,}000 \qquad \text{Gas leg: } +\$3.75 \times 72{,}000 = +\$270{,}000
$$

$$
-\$216{,}000 + \$270{,}000 = \boxed{+\$54{,}000}
$$

The trader profits even though both prices fell, because electricity fell by less than gas did.

**Other kinds of gap that can be traded**

- Breakeven inflation: the nominal yield minus the inflation-linked yield (for example 4.5% − 2.0% = 2.5%)
- A spark spread: an output price minus an input cost
- A basis: a commodity's futures price minus its spot price

A spread's historical range is a reference, not a boundary. A structural change can push it outside that range and keep it there.

# Quiz

1. What does a spread or basis trade take a position on?
   - [x] The relationship, or gap, between two related prices, rather than either price outright
   - A single price moving in one specific direction
   - Spread trading has no defined structure of any kind
   - The total combined value of an entire market index
   > The defining feature of a spread trade is positioning on the gap between two related prices rather than an outright directional bet on either one.

2. Why might trading the gap between two prices carry less market-direction exposure than trading either price outright?
   - [x] The two prices are often driven by shared, common market forces, which the spread position can filter out
   - Spread trades always carry more market risk than outright positions
   - There is no difference in risk between spread trades and outright positions
   - Spread trades are only possible for identical, not related, prices
   > Isolating the narrower relationship between two related prices, rather than their shared broad market exposure, is exactly what reduces directional risk in a spread trade.

3. Which of these is given as an example of a "gap" that can be traded as a spread?
   - [x] The margin between an input cost and an output price, as with the spark spread
   - The total market capitalization of the entire stock market
   - A single company's quarterly earnings figure
   - The nominal face value of a single bond
   > An input-output margin, like the spark spread covered later in this course, is exactly the kind of relationship a spread trade can target.

4. Why isn't a spread's historical range a hard, reliable boundary?
   - [x] Genuine structural change or shifts in supply and demand can push a spread persistently outside its historical range
   - Spreads are mathematically guaranteed to always revert to their historical average
   - Historical range has no relevance to spread trading at all
   - Spreads never move outside their historical range under any circumstances
   > Structural shifts can invalidate the assumption that a spread will revert, which is a genuine risk any spread-trading approach has to account for.

5. In the example, under what condition does the trader profit even if both electricity and gas prices fall?
   - [x] If the electricity price falls by less, or rises by more, than the gas price does — widening the gap as anticipated
   - The trader can never profit if both prices fall
   - Only if both prices fall by an identical amount
   - Only if gas prices rise while electricity prices stay completely flat
   > Because the trade is on the relationship between the two prices, what matters is the relative move between them, not their absolute direction individually.

6. {#calc1} [calc] Power is $60 per MWh, gas is $5 per MMBtu and the heat rate is 7.5. What is the spark spread?
   - $52.50 per MWh
   - $37.50 per MWh
   - [x] $22.50 per MWh
   - $55.00 per MWh
   > The gas cost per MWh is 7.5 × $5 = $37.50, so the spread is $60 − $37.50 = $22.50.

7. {#calc2} [calc] A spread has averaged $18 with a standard deviation of $3, and it is now $26. What is the z-score?
   - [x] About 2.7
   - About 8.0
   - About 0.3
   - About 1.5
   > ($26 − $18) / $3 ≈ 2.7 standard deviations above average.
