---
slug: futures-cross-hedging
title: Cross-Hedging
summary: Hedging with futures on a different but closely related asset, when no futures contract exists on the exact one you hold.
---

## What Cross-Hedging Is

A direct hedge uses a futures contract on the exact asset you're exposed to. Cross-hedging is what you do when no such contract exists, or it's too illiquid to use — you hedge with futures on a different but closely correlated asset instead. A regional jet-fuel buyer can't easily trade jet-fuel futures, since the market is thin, so they hedge using heating oil or crude oil futures, since jet fuel prices tend to move closely with those more liquid contracts.

## The Correlation Requirement

The key requirement for a cross-hedge to work is a strong, stable historical correlation between the price of the asset you're exposed to and the price of the futures contract you're using to hedge it. The stronger and more stable that relationship, the more effective the hedge.

## An Extra Layer of Basis Risk

Cross-hedging introduces an additional layer of basis risk beyond a normal direct hedge. Not only can the futures price diverge from the spot price of its own underlying — ordinary basis risk — but the price of the asset you actually hold can also diverge from the price of the futures' underlying asset. Jet fuel and heating oil don't always move in perfect lockstep, even though they're closely related refined products.

## Sizing With a Hedge Ratio

To size a cross-hedge, traders often compute a hedge ratio, commonly estimated by regressing the exposed asset's price changes against the hedging instrument's price changes. That regression's slope — sometimes called the minimum-variance hedge ratio — tells them how many futures contracts to use per unit of exposure, rather than assuming a naive one-for-one match.

## Example

A jet-fuel buyer needs to hedge 100,000 gallons of future purchases, but no jet-fuel futures contract is available. It hedges with heating oil futures instead.

- Hedge ratio from past data: 0.85 (jet fuel moves about $0.85 for every $1.00 in heating oil)
- Heating oil contract size: 42,000 gallons

**Gallons of heating oil exposure needed**

$$
0.85 \times 100{,}000 = 85{,}000 \text{ gallons}
$$

**Contracts needed**

$$
\frac{85{,}000}{42{,}000} \approx \boxed{2 \text{ contracts}}
$$

A one-to-one hedge would use 100,000 ÷ 42,000 = 2.4 contracts, which over-hedges by about 18%.

**Check: heating oil rises $0.10 a gallon**

- Extra jet-fuel cost: 100,000 × $0.085 = $8,500
- Hedge gain: 2 × 42,000 × $0.10 = $8,400

The hedge covers almost all of the increase. It isn't exact, because the 0.85 ratio is an average from past data.

# Quiz

1. What is cross-hedging?
   - Hedging using a futures contract on the exact same asset you hold
   - [x] Hedging using a futures contract on a different but closely correlated asset, when no direct contract is available
   - Simultaneously hedging with both a call and a put option
   - A hedge that automatically adjusts itself daily
   > Cross-hedging is used when there's no liquid futures market on the exact asset you're exposed to, so you substitute a closely correlated instrument instead.

2. What determines how effective a cross-hedge will be?
   - The number of exchanges the futures contract trades on
   - [x] The strength and stability of the historical price correlation between the held asset and the hedging instrument
   - The futures contract's expiration date, regardless of the underlying
   - Whether the trader uses a broker or trades directly
   > The stronger and more stable the correlation between the two assets' prices, the more effective the cross-hedge will be at offsetting risk.

3. Compared to a direct hedge, a cross-hedge carries:
   - Less basis risk, since it uses a more liquid contract
   - [x] An additional layer of basis risk, from the price gap between the held asset and the futures' own underlying
   - No risk at all, since the correlation is always perfect
   - The exact same risk profile as holding no hedge
   > A cross-hedge adds a second source of basis risk on top of ordinary futures basis risk — the exposed asset and the futures' underlying aren't the same thing, so their prices can diverge.

4. What is a "hedge ratio" used for in cross-hedging?
   - The interest rate charged on a margin account
   - [x] Determining how many futures contracts to use per unit of the exposure, often estimated via regression
   - The ratio of long to short traders in the market
   - A fixed 1:1 rule that never changes
   > A hedge ratio — often the slope of a regression of the exposed asset's returns against the futures' returns — tells the hedger the right sizing, rather than assuming a naive one-to-one match.

5. A regional jet-fuel buyer who can't easily trade jet-fuel futures might cross-hedge using:
   - Wheat futures
   - [x] Heating oil or crude oil futures
   - Equity index futures
   - They cannot hedge at all
   > Jet fuel prices tend to move closely with other refined petroleum products like heating oil and crude oil, making them a workable, if imperfect, cross-hedge.

6. [calc] A regression gives a hedge ratio of 0.85 for a 100,000-gallon jet-fuel exposure hedged with heating oil futures. How many gallon-equivalents of heating oil futures exposure should be used?
   - 100,000 gallons, a full one-to-one hedge
   - [x] 85,000 gallons (0.85 × 100,000)
   - 15,000 gallons
   - 185,000 gallons
   > The hedge ratio scales the notional hedge size: 0.85 × 100,000 gallons = 85,000 gallon-equivalents of heating oil futures, not a naive one-to-one match.
