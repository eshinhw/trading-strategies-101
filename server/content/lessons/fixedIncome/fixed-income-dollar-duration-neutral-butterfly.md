---
slug: fixed-income-dollar-duration-neutral-butterfly
title: Dollar-Duration-Neutral Butterfly
summary: A three-maturity bond trade — long the wings, short the body, or vice versa — structured so the position has zero net sensitivity to a parallel shift in rates, isolating a bet on the yield curve's curvature.
---

## Three Points on the Curve

A dollar-duration-neutral butterfly is a trade built from three points on the yield curve — a short maturity and a long maturity (the "wings") and an intermediate maturity in between (the "body") — combined so that the position's total dollar duration nets to zero. That means if interest rates move up or down by the same amount across the whole curve, a parallel shift, the position's value is largely unaffected either way.

## How the Trade Is Built

The trade is constructed by taking opposite positions in the wings versus the body — for example, short the body and long both wings, sized so the dollar duration of the two wing positions combined exactly offsets the dollar duration of the body position. Because the position is neutral to a parallel shift, its return instead depends on how the curve's curvature changes: specifically, whether the body's yield moves up or down relative to the average of the two wings.

## Isolating a Bet on Curvature

This isolates a bet purely on the shape of the yield curve at that middle point, rather than on the overall level of interest rates. If the curve becomes more "bowed," the body's yield falls relative to the wings, a position short the body and long the wings profits; if the curve flattens out at that point instead, the position loses.

## Getting the Sizing Right

Sizing the wings correctly is the key mechanical challenge: because dollar duration depends on both a bond's price and its duration, the amount invested in each wing has to be carefully calculated, not just an equal dollar amount in each, so that their combined dollar duration truly offsets the body's — get the sizing wrong and the trade retains unwanted exposure to a parallel rate shift instead of being purely a curvature bet.

# Quiz

1. What three points on the yield curve does a dollar-duration-neutral butterfly trade use?
   - Only the shortest available maturity, sized three different ways
   - [x] A short maturity and a long maturity (the "wings") and an intermediate maturity (the "body")
   - Three bonds all with the exact same maturity
   - Only maturities beyond 30 years
   > The butterfly trade combines a short-maturity wing, a long-maturity wing, and an intermediate-maturity body into one position.

2. What does it mean for the trade to be "dollar-duration-neutral"?
   - The trade has no interest-rate exposure at any maturity
   - [x] The position's total dollar duration nets to zero, so a parallel shift in rates across the whole curve leaves its value largely unaffected
   - The trade requires exactly one dollar of capital
   - The trade is neutral only to changes in credit risk, not interest rates
   > Sizing the wing and body positions so their dollar durations offset means the trade doesn't gain or lose value from a uniform, parallel move in interest rates.

3. What does the trade's return actually depend on, once it's neutral to a parallel shift?
   - The overall direction interest rates move
   - [x] How the curve's curvature changes — specifically, whether the body's yield moves relative to the average of the two wings
   - The trade has no possible source of return once neutralized
   - Changes in the stock market unrelated to bonds
   > With parallel-shift risk removed, the trade's profit or loss comes from changes in the curve's shape at that middle point, not from the overall level of rates.

4. If the body's yield falls relative to the wings (the curve becomes more "bowed"), what happens to a position short the body and long the wings?
   - It loses money
   - [x] It profits
   - It has no effect on the position
   - The position is automatically closed
   > A position short the body and long the wings is designed to profit when the curve bows in that direction — the body's relative yield decline benefits the short-body leg.

5. Why is sizing the wing positions correctly so important to this trade?
   - Sizing doesn't matter as long as both wings are held
   - [x] Because dollar duration depends on both price and duration, the wings must be carefully sized so their combined dollar duration truly offsets the body's — otherwise unwanted parallel-shift exposure remains
   - Incorrect sizing has no effect on the trade's risk profile
   - The wings must always be sized as exactly equal dollar amounts
   > Simply putting equal dollar amounts in each wing isn't enough — the dollar-duration calculation, which accounts for both price and duration, must be used to properly offset the body, or the trade retains unintended exposure to a parallel rate move.

6. {#calc1} [calc] A trader is short $10 million of a 5-year note (DV01 $450 per $1 million) and puts half of that risk in each wing. How much 10-year notional (DV01 $800 per $1 million) is needed?
   - About $5.63 million
   - [x] About $2.81 million
   - About $11.84 million
   - About $0.56 million
   > The body's DV01 is 10 × $450 = $4,500, so each wing needs $2,250. For the 10-year that is $2,250 / $800 per million ≈ $2.81 million.
