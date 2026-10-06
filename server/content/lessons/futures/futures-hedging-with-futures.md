---
slug: futures-hedging-with-futures
title: Hedging Risk with Futures
summary: Using a futures contract to offset the price risk of a position you already hold, or will hold.
---

## What a Futures Hedge Is

A futures contract is a standardized, exchange-traded agreement to buy or sell an asset at a set price on a future date. Hedging with futures means taking the opposite position to whatever exposure you already have, so that a loss on one side is offset by a gain on the other.

## The Short Hedge

Take a wheat farmer who will harvest and sell wheat in six months and is worried prices will fall by then. They sell (go short) wheat futures now, locking in today's price. If the cash price falls, the loss on the physical crop is offset by a gain on the short futures position. This is a short hedge — used by anyone who is effectively long the underlying and worried about a price drop.

## The Long Hedge

The mirror image is a long hedge: a cereal manufacturer who will need to buy wheat in three months and is worried prices will rise buys (goes long) wheat futures now. If the cash price rises, the higher cost of the physical wheat is offset by a gain on the long futures position.

## Basis Risk and Tradeoffs

Hedging with futures doesn't eliminate risk — it trades price risk for basis risk, the risk that the futures price and the cash price don't move in perfect lockstep. A hedger also gives up the benefit of a favorable price move in exchange for protection against an unfavorable one; certainty has a cost.

## Example

A farmer expects to harvest 50,000 bushels of wheat in six months and sells wheat futures today at $6.00 per bushel, locking in $300,000 of notional value. At harvest, the cash price has fallen to $5.50 per bushel. Selling the physical wheat now brings in only 50,000 × $5.50 = $275,000, but the short futures position has gained ($6.00 − $5.50) × 50,000 = $25,000, since the trader locked in the higher price and can buy back the futures cheaper than they sold it. Adding the two together, $275,000 + $25,000 = $300,000, the farmer nets almost exactly the $300,000 they locked in — the futures gain offset the cash-market loss, aside from any small basis gap between the futures and cash markets.

# Quiz

1. A farmer who will sell wheat in six months and wants to hedge against falling prices should:
   - Buy wheat futures (a long hedge)
   - [x] Sell wheat futures (a short hedge)
   - Buy wheat call options only
   - Do nothing — futures can't hedge production risk
   > The farmer is effectively already long the wheat they'll produce, so they hedge by going short futures — a gain on the futures position offsets a drop in the cash price.

2. A cereal manufacturer who will need to buy wheat in three months and fears rising prices should:
   - Sell wheat futures
   - [x] Buy wheat futures (a long hedge)
   - Sell their existing wheat inventory
   - Wait until the price drops
   > The manufacturer is effectively short the wheat they'll need to buy, so they hedge with a long futures position — a rise in futures offsets the higher price they'll pay later.

3. What does it mean that a futures hedge trades price risk for "basis risk"?
   - The hedge eliminates all risk entirely
   - [x] The futures price and the spot price may not move in perfect lockstep, so the hedge can be imperfect
   - Futures contracts carry no risk at all
   - Basis risk only affects long hedges, never short hedges
   > Basis is the difference between the spot price and the futures price. Because that difference can change, a futures hedge reduces but rarely fully eliminates price risk.

4. What's a key tradeoff a hedger accepts when using futures to lock in a price?
   - [x] They give up potential gains if the price moves in their favor instead of against them
   - They lose ownership of the underlying asset immediately
   - They must physically deliver the commodity the next day
   - They can never close the position before expiration
   > Locking in a price protects against an adverse move, but also gives up the benefit of a favorable one — that's the cost of the certainty a hedge provides.

5. Futures contracts are described as being "marked to market daily." What does that mean?
   - [x] Gains and losses on the position are settled in cash at the end of each trading day
   - The contract's price is only updated once, at expiration
   - Futures can only be traded once per day
   - The exchange sets a new strike price every day
   > Exchange-traded futures are marked to market daily — the account is credited or debited each day for gains and losses, unlike a simple one-time-settlement forward agreement.

6. A farmer sells 50,000 bushels of wheat futures at $6.00/bushel. At harvest, the cash price is $5.50/bushel. What's the total from selling the physical wheat plus the futures gain?
   - $275,000, since the futures position had no effect
   - [x] $300,000 — the $25,000 futures gain offsets the lower cash-market proceeds
   - $325,000, an unexpected extra profit
   - $250,000, a loss on both legs
   > Cash proceeds of $275,000 (50,000 × $5.50) plus a $25,000 futures gain (50,000 × $0.50) add up to $300,000 — close to the price the farmer originally locked in by hedging.
