---
slug: futures-commodity-forwards
title: Commodity Forwards
summary: How producers and consumers of a physical commodity use forwards to hedge, the storage and delivery logistics unique to a physical asset, and why basis risk can still leave even a well-built commodity hedge imperfect.
---

## Producer Hedging

A commodity producer — a farmer, a miner, an oil driller — faces the risk that prices fall before their output is ready to sell. By going short a forward, agreeing today to sell a future harvest or extraction at a fixed price, the producer locks in revenue on that hedged volume regardless of where the spot price actually lands by the time production is complete.

## Consumer Hedging

On the other side, a commodity consumer — a refiner buying crude oil, a food company buying wheat — faces the mirror-image risk that prices rise before they need to buy. Going long a forward locks in a purchase price today for a future delivery, protecting the consumer's input costs from an unfavorable price increase.

## Storage and Delivery Considerations

Because a physical commodity forward may actually require storing, insuring, and transporting a real physical asset, its pricing and its practical terms both have to account for that — the storage and financing costs behind the cost-of-carry framework from the Forward Pricing lesson, and, operationally, who's responsible for arranging warehousing, transport, and quality inspection between agreement and delivery.

## Price, Quality, and Location Specifications

Just as a futures contract's specification pins down an exact grade and approved delivery locations, a commodity forward has to spell out the same details itself, since there's no exchange doing it by default: the precise grade or quality of the commodity being delivered, and exactly where delivery will take place — details that matter enormously, since a lower-quality or wrong-location delivery can be a real dispute, not just a technicality.

## Basis Risk in a Commodity Hedge

Even a carefully built commodity forward hedge can leave real exposure behind if the hedge's terms don't exactly match the underlying exposure being hedged — a different grade, a different delivery location, or a delivery date that doesn't line up precisely with when the commodity is actually bought or sold. That mismatch is basis risk, covered in more depth in the Cross-Hedging lesson later in this course, and it's exactly why even a forward hedge, custom-built as it is, isn't automatically a perfect one.

## Example

**A bakery's basis risk**

A bakery chain needs 10,000 bushels of wheat delivered to its mill in six months. The only forward it can buy is on standard-grade wheat at the terminal.

- Forward price: $6.50
- Local basis when it hedges: $0.10 above the terminal price
- Planned cost: $6.50 + $0.10 = $6.60

At maturity the terminal price is $7.00, but the local basis has widened to $0.25.

$$
\text{Forward gain} = (\$7.00 - \$6.50) \times 10{,}000 = \$5{,}000
$$

$$
\text{Net cost} = 10{,}000 \times \$7.25 - \$5{,}000 = \$67{,}500 = \boxed{\$6.75 \text{ per bushel}}
$$

The hedge covered the $0.50 rise in the terminal price. The $0.15 the basis moved is not covered: $0.15 × 10,000 = $1,500.

**An airline's cross-hedge**

An airline will burn 1,000,000 gallons of jet fuel in three months. No jet fuel forward is available in that size, so it buys a heating oil forward on 1,000,000 gallons at $2.80.

- Jet fuel rises $0.40, so the airline pays $400,000 more.
- Heating oil rises $0.30, so the forward gains $300,000.

$$
\$400{,}000 - \$300{,}000 = \boxed{\$100{,}000 \text{ left unhedged}}
$$

The cross-hedge removes 75% of the increase, which is better than leaving all of it open.

# Quiz

1. How does a commodity producer typically use a forward contract to hedge?
   - [x] By going short a forward, locking in a sale price for future output
   - By going long a forward on their own product
   - Producers cannot use forward contracts to hedge
   - By buying insurance instead of a forward contract
   > A short forward locks in a fixed sale price for output not yet produced, protecting the producer from a price decline before the harvest or extraction is ready.

2. How does a commodity consumer's hedge differ from a producer's?
   - [x] A consumer goes long a forward to lock in a purchase price, the mirror image of a producer's short hedge
   - Consumers and producers use the exact same side of the forward
   - Consumers cannot hedge commodity price risk with forwards
   - A consumer's hedge always requires physical delivery, while a producer's never does
   > A consumer facing rising input costs goes long a forward to lock in a purchase price, the opposite side from a producer locking in a sale price.

3. Why do commodity forwards need to specify an exact grade and delivery location, just like a futures contract's specification?
   - [x] Because there's no exchange default to fall back on, and mismatched quality or location can create a real dispute at delivery
   - Grade and location are irrelevant to a forward contract
   - Only futures contracts need to specify grade and location
   - All commodities are identical regardless of grade or location
   > Since a forward has no exchange specification supplying these details automatically, the two parties have to negotiate and document them explicitly to avoid disputes.

4. What is basis risk in the context of a commodity forward hedge?
   - [x] The risk that a mismatch between the hedge's exact terms (grade, location, timing) and the actual underlying exposure leaves the hedge imperfect
   - The risk that the forward price will never be paid at all
   - A risk that only applies to futures, never to forwards
   - The risk of the commodity's price falling to zero
   > Basis risk arises whenever a hedge's specific terms don't line up exactly with what's actually being hedged — even a custom-built forward can leave this gap.

5. In the bakery example, what causes the potential imperfection in the wheat hedge?
   - [x] A possible mismatch between the forward's specified grade and delivery location and the bakery's actual wheat purchases
   - The forward contract has no delivery date
   - Wheat prices never actually change
   - The bakery used a futures contract instead of a forward
   > If the bakery's real purchases differ in grade or delivery point from what the forward specifies, the hedge may not offset the bakery's actual cost changes perfectly.

6. Why might an airline hedge jet fuel costs using a heating oil or crude oil forward instead of a jet-fuel-specific contract?
   - [x] A closely related product may be the only way to hedge at all when no jet-fuel forward exists in the needed size or location, accepting some basis risk in the process
   - Heating oil and jet fuel are always identical in price
   - Airlines are legally required to use crude oil rather than jet fuel contracts
   - Cross-hedging eliminates all basis risk entirely
   > A deliberate cross-hedge accepts some basis risk in exchange for being able to hedge exposure that would otherwise have no direct hedging instrument available.

7. [calc] A bakery buys a terminal wheat forward at $6.50 and plans around a $0.10 local basis, so $6.60. At maturity the terminal price is $7.00 and the local basis is $0.25. What is its effective cost per bushel?
   - $6.50
   - $6.60
   - [x] $6.75
   - $7.25
   > It pays $7.25 locally and collects a $0.50 gain from the forward, so the net cost is $6.75. That is $0.15 above the $6.60 plan because the basis widened.

8. What does the $1,500 difference from the bakery's plan represent?
   - The forward's financing cost
   - [x] Basis risk: the local price moved differently from the contract's reference price
   - Counterparty default by the grain merchant
   - A tax on the forward's gain
   > The forward hedges the terminal price, not the bakery's local delivery price, so a change in the gap between them is a risk the hedge leaves open.
