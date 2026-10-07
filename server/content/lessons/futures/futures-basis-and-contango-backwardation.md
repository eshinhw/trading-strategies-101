---
slug: futures-basis-and-contango-backwardation
title: Basis, Contango, and Backwardation
summary: The gap between an asset's spot price and its futures price, what that gap is called, and what contango and backwardation reveal about a market's supply, demand, and cost of carry.
---

## Defining Basis

Basis is defined as spot price minus futures price: basis = spot − futures. A positive basis means spot is trading above the futures price; a negative basis means futures is trading above spot. Basis isn't a fixed number — it changes as both prices move, and it shrinks toward zero as a contract approaches expiration, since the spot and futures prices must converge by the delivery date.

## Contango

A market is in contango when futures prices are higher than the spot price — a negative basis by the definition above — typically because the cost of carry (storage, financing, insurance) makes holding the physical asset until a later date more expensive than buying it today, so the futures price embeds that extra cost. Contango is the "normal" shape for many storable commodities and financial assets.

## Backwardation

A market is in backwardation when futures prices are lower than the spot price — a positive basis — often a signal of near-term scarcity: buyers are willing to pay a premium for the asset right now rather than wait for later delivery, which can happen when current supply is tight relative to demand, even though the same cost-of-carry logic would otherwise argue for a futures premium.

## Connecting Back to Cost of Carry

The cost-of-carry model covered in the Forward Pricing lesson explains a large part of typical basis behavior — storage and financing costs pushing many markets into contango — but real markets also reflect supply and demand imbalances the pure cost-of-carry formula doesn't capture, which is exactly what shows up as backwardation when it happens.

## Example

Crude oil today, with two possible three-month futures prices.

- Spot price: $78
- Three-month futures in contango: $80
- Three-month futures in backwardation: $75

**Basis = spot − futures**

$$
\text{Contango: } \$78 - \$80 = -\$2
$$

$$
\text{Backwardation: } \$78 - \$75 = +\$3
$$

**Rolling a long position (1 contract, 1,000 barrels)**

In contango, the trader closes the expiring contract and buys the next one $2 higher:

$$
\$2 \times 1{,}000 = \$2{,}000 \text{ cost per roll}
$$

- If the same $2 gap appears at each of four quarterly rolls, that is $8,000 a year, or 10.3% of the $78,000 position.
- In backwardation the roll works the other way: buying the next contract $3 lower earns $3 × 1,000 = $3,000.

The roll cost has nothing to do with whether the trader's view on crude's direction was right.

# Quiz

1. How is basis defined?
   - [x] Basis = spot price − futures price
   - Basis = futures price ÷ spot price
   - Basis = the exchange's daily price limit
   - Basis = the notional value of a futures contract
   > Basis is simply spot minus futures — a positive basis means spot is above futures, a negative basis means futures is above spot.

2. What does it mean for a market to be in contango?
   - [x] Futures prices are higher than the spot price, typically reflecting the cost of carrying the asset forward in time
   - Futures prices are always equal to spot price
   - The market has no basis at all
   - Futures prices are lower than spot, reflecting scarcity
   > Contango describes futures trading above spot — the normal shape for many storable assets once storage and financing costs are built into the futures price.

3. What does backwardation typically signal?
   - [x] Near-term scarcity — buyers willing to pay a premium for the asset now rather than wait for future delivery
   - That the futures contract is about to be delisted
   - That the asset has no storage costs
   - That the market is perfectly efficient with zero basis
   > Backwardation (futures below spot) often reflects tight current supply relative to demand, with buyers valuing immediate availability over locking in a future delivery price.

4. Why does basis shrink toward zero as a futures contract approaches expiration?
   - [x] Because the spot and futures prices must converge by the delivery date
   - Because exchanges force basis to zero by rule the day before expiration
   - Basis actually grows larger as expiration approaches
   - Because trading volume disappears near expiration
   > At expiration, the futures price and spot price must reflect the same asset at the same moment, so any remaining basis converges to (near) zero as that date arrives.

5. Crude oil spot is $78 and the three-month future is $80. What is the basis, and what market condition does it describe?
   - [x] −$2 basis, contango
   - +$2 basis, backwardation
   - $0 basis, no relationship between spot and futures
   - −$2 basis, backwardation
   > Basis = spot − futures = $78 − $80 = −$2, a negative basis, meaning futures trade above spot — the definition of contango.
