---
slug: greeks-gamma
title: Gamma
summary: Gamma measures how quickly an option's delta changes as the stock moves, which is what makes long options gain faster than they lose and short options the reverse.
---

## What Gamma Measures

Delta isn't constant: as the stock moves, an option's delta changes, and gamma measures how fast. It is the change in delta for a 1 dollar move in the stock. If a call has a delta of 0.50 and a gamma of 0.04, a 1 dollar rise in the stock lifts the delta to about 0.54, and a 1 dollar fall lowers it to about 0.46:

$$
\Delta_{\text{new}} \approx \Delta + \Gamma \times \Delta S
$$

## Gamma and Price Changes

Because delta changes as the stock moves, an option's price doesn't move in a straight line. A better estimate of the price change for a move in the stock combines delta and gamma:

$$
\Delta V \approx \Delta \cdot \Delta S + \tfrac{1}{2}\,\Gamma\,(\Delta S)^2
$$

The gamma term is always positive for a long option, so large moves in either direction are worth a bit more than delta alone would suggest. That curvature is what you see in the payoff of a long call or put before expiration.

## Where Gamma Is Largest

Gamma is highest for options that are at the money and close to expiration, because those are the options whose delta can swing from near 0 to near 1 with a small move in the stock. Deep in-the-money and far out-of-the-money options have a low gamma, since their delta is already close to 1 or 0 and doesn't change much.

## Long Gamma and Short Gamma

Buying options gives a position positive gamma: as the stock moves in either direction, delta shifts in the buyer's favor, so gains build faster than losses. Selling options gives negative gamma, which works the other way: a large move hurts more and more as it continues. That is why short options are risky when the stock moves sharply, especially close to expiration.

## Gamma and Theta Trade Off

Positive gamma isn't free. A position that benefits from big moves usually pays for it through time decay, and a position that collects time decay is exposed to big moves. This trade-off between gamma and theta is one of the central ideas in options trading.

## Example

A trader is long an at-the-money call with a delta of 0.50 and a gamma of 0.05.

**The stock rises $2**

$$
\text{New delta} = 0.50 + 0.05 \times 2 = \boxed{0.60}
$$

The call now gains $0.60 for each further $1 rise, up from $0.50.

**The stock falls $2 instead**

$$
\text{New delta} = 0.50 - 0.05 \times 2 = 0.40
$$

The call now loses only $0.40 for each further $1 fall.

**Per contract (100 shares)**

- Delta 0.60 means the position gains about $60 per $1 further up.
- Delta 0.40 means the position loses about $40 per $1 further down.

A long option gains faster as it moves in its favor and loses more slowly as it moves against, so the trader benefits from the curvature in both directions. A short option position has the opposite, which is why its risk grows.

# Quiz

1. What does gamma measure?
   - How the option's price changes with time
   - [x] How much delta changes for a 1 dollar move in the stock
   - The option's volatility
   - The interest rate sensitivity
   > Gamma is the rate of change of delta.

2. A call has a delta of 0.50 and a gamma of 0.04. The stock rises 1 dollar. What is the new delta, roughly?
   - 0.46
   - 0.50
   - [x] 0.54
   - 1.04
   > The new delta is about 0.50 + 0.04 × 1 = 0.54.

3. Where is gamma typically highest?
   - For deep in-the-money options with a long time left
   - [x] For at-the-money options close to expiration
   - For far out-of-the-money options
   - It is the same everywhere
   > Delta of an at-the-money, near-expiry option can swing quickly, so its gamma is largest.

4. What gamma does a position of long options have?
   - Negative gamma
   - [x] Positive gamma, so delta moves in the holder's favor as the stock moves
   - Zero gamma
   - Gamma that depends only on the strike
   > Buying options gives positive gamma, and selling options gives negative gamma.

5. What is the usual trade-off of positive gamma?
   - It reduces all risk at no cost
   - [x] It is typically paid for through time decay, or negative theta
   - It increases dividends
   - It always loses money
   > Positions that benefit from large moves usually pay for it with time decay.
