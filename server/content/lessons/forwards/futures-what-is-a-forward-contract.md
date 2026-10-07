---
slug: what-is-a-forward-contract
title: The Forward Contract
summary: The simplest building block of the derivatives market: an agreement to buy or sell an asset at a predetermined price on a future date. In this module, we'll build the concept from the ground up — what a forward contract is, why participants use it, what it means to be long or short, the terms every forward must specify, how settlement works, and why counterparty risk matters.
---

## A Simple Definition

At its core, a forward contract is an agreement between two parties to buy or sell something at an agreed price on an agreed future date. Nothing is typically paid when the contract is entered into. Instead, both parties make a legally binding commitment to transact later at the price agreed upon today.

For example, a coffee roaster agrees today to buy 100,000 pounds of coffee beans three months from now at $2.50 per pound. The price is locked in today, but the actual transaction happens in the future.

The key idea is a forward contract separates **when you agree on the price** from **when the transaction takes place.**

Today:

- Agree on price
- Agree on quantity
- Agree on future date
- Commit to the transaction

At maturity:

- Exchange the asset and payment, or
- Settle the difference in cash

## Long and Short

Every forward has two sides. The long side of a forward contract is the party agreeing to buy the underlying asset in the future. The short side of a forward contract is the party agreeing to sell the underlying asset in the future. This terminology is the same used throughout derivatives and trading.

Being long a forward creates positive exposure to the future price of the underlying. If the market price rises above the agreed forward price, the long position benefits. Being short creates the opposite exposure.

## An Obligation, Not a Choice

A forward is a binding obligation for both parties, which means the long must buy and the short must sell. Neither party can simply walk away because the market subsequently moves against them. This symmetric obligation is what makes a forward's payoff, covered in the next module, a mirror image for the two sides rather than the lopsided, capped-risk shape an option produces for its buyer.

## How Forwards Differ from Futures

A futures contract, covered in the Futures course, promises the exact same basic thing a forward does, but **a forward is customized and traded over the counter (OTC) — negotiated privately between two specific parties on whatever terms they agree to — while a futures contract is standardized and exchange-traded, centrally cleared through a clearinghouse.**

Both differences trace back to the same root cause: a forward is a private bilateral deal, and a future is a public, exchange-cleared one.

## A Real World Motivation

The whole point of a forward is trading away uncertainty for certainty. Neither side knows for sure whether they'll end up ahead compared to simply waiting and transacting at whatever the market price happens to be later — but both sides get something they value more than that uncertainty: a known, fixed number to plan around.

Imagine a coffee roaster who knows they'll need a large shipment of coffee beans in three months, and worries the price might rise before then. By agreeing today with a coffee grower on a fixed price for that future delivery, the roaster removes the uncertainty entirely — whatever the market price does between now and then, their cost is already locked in.

## The Terms of a Forward

Because a forward is negotiated privately and no exchange standardizes it, the two parties have to spell out every term themselves, with no rulebook to fall back on if something is left ambiguous.

### Underlying Asset and Quantity

Exactly what is being bought and sold, and how much of it. A futures contract's size is fixed by the exchange for every trader, while a forward's quantity is whatever the two parties actually need, from a single custom-sized shipment to a notional amount with no physical quantity at all, like an FRA's reference principal.

### Delivery Date

The single future date the contract settles on. It is fully negotiable rather than chosen from an exchange's calendar of expiration months, so it can match a real need such as a shipment's expected arrival date.

### Forward Price

The fixed price both sides agree the transaction will happen at, regardless of where the market trades on the delivery date. The Forward Pricing lesson later in this course covers how a theoretical fair forward price is derived, but the price two parties actually agree to can differ from that benchmark depending on each side's bargaining position.

### Currency and Location

For a cross-border deal or a physical commodity, the contract also has to state the currency the price is quoted and paid in and, for anything physically delivered, the delivery location. A futures contract has a short list of approved locations built into its specification, but a forward has none, so the parties write down whatever works for them.

The settlement method, physical delivery or cash, is also a term that must be written in, and it is covered below. A U.S. refiner and an overseas crude oil producer, for example, would agree the grade, 50,000 barrels, a date four months out, a price in U.S. dollars, a named port terminal, and physical settlement, with every detail agreed by hand because no exchange specification exists to supply it.

## Notional Value

The notional value of a forward contract is the total value of the underlying asset the contract controls — the agreed forward price multiplied by the quantity of the asset being bought or sold. This number, not the (typically zero) amount of cash exchanged upfront, is what determines the actual economic exposure both parties are taking on, as the worked example below shows.

## Settlement: Physical or Cash

At the contract's maturity date, a forward is settled in one of two ways: **physical settlement**, where the seller actually delivers the underlying asset and the buyer pays the agreed forward price, or **cash settlement**, where instead of exchanging the physical asset, the two parties simply exchange the difference between the agreed forward price and the asset's actual market price at maturity.

Which settlement method applies is specified in the contract terms at the outset. Physical settlement is more common for commodities where the underlying asset genuinely changes hands, while cash settlement is common when physical delivery is impractical, for a financial index, for example, where there's no single physical asset to deliver.

## Example

A flour mill expects to need 10,000 bushels of wheat in six months.

The mill is concerned that wheat prices may rise, so it enters into a forward contract with a grain merchant:

- Quantity: 10,000 bushels
- Forward price: $6.50/bushel
- Maturity: six months
- Notional value: $65,000

The mill is long the forward. The grain merchant is short.

Six months later, the actual wheat price rose to $7.

$$
S_T = \$7.00
$$

The forward price remains:

$$
K = \$6.50
$$

The long's payoff is:

$$
(\$7.00 - \$6.50) \times 10{,}000 = \$5{,}000
$$

### Cash Settlement

The merchant pays the mill $5,000. The mill can then buy wheat in the market:

$$
10{,}000 \times \$7.00 = \$70{,}000
$$

After receiving the $5,000 forward settlement:

$$
\$70{,}000 - \$5{,}000 = \$65{,}000
$$

Therefore:

$$
\frac{\$65{,}000}{10{,}000} = \boxed{\$6.50 / \text{bushel}}
$$

The mill has effectively locked in $6.50.

### Physical Settlement

The merchant delivers the 10,000 bushels. The mill pays:

$$
10{,}000 \times \$6.50 = \$65{,}000
$$

Again, the effective purchase price is:

$$
\boxed{\$6.50 / \text{bushel}}
$$

The settlement mechanism is different, but the economic outcome is the same.

## Counterparty Risk

A forward is a bilateral OTC contract, which means the contract is negotiated directly between two parties rather than being centrally cleared through an exchange. This nature creates counterparty risk that is the possibility that the other party fails to fulfill its contractual obligation.

Imagine the wheat forward has become valuable to the mill because wheat prices have risen sharply. If the grain merchant becomes unable or unwilling to honor the contract, the mill may have to replace the hedge in the market at a much less favorable price.

This is an important structural difference between forward and futures. An exchange-traded futures contract is guaranteed by a clearinghouse and backed by daily margin requirements that limit how much loss can accumulate before it's collected, while a forward's integrity depends entirely on the creditworthiness and good faith of the specific counterparty on the other side of the deal.

# Quiz

1. In the simplest terms, what is a forward contract?
   - [x] An agreement between two parties to buy and sell something at an agreed price on an agreed future date
   - A loan that must be repaid immediately
   - A guarantee that an asset's price will never change
   - A contract that can only be used for stocks
     > A forward is fundamentally just a promise: a fixed price and a fixed future date, agreed by two parties today, with the actual exchange happening later.

2. What does it mean to be "long" a forward contract?
   - You've agreed to sell the asset later
   - [x] You've agreed to buy the asset later
   - You've cancelled the contract
   - You have no position in the contract at all
     > The long side of a forward is the party who has agreed to buy the underlying asset at the agreed future date — the short side is whoever agreed to sell it.

3. In the coffee roaster example, why does the roaster enter into a forward with a coffee grower?
   - [x] To remove the uncertainty of not knowing what coffee will cost in three months, by locking in a fixed price today
   - To immediately receive the coffee beans today
   - To guarantee a lower price than the grower's cost
   - Forwards cannot be used for physical commodities like coffee
     > The roaster's motivation is certainty: locking in today's agreed price removes the risk that coffee prices might rise before the shipment is actually needed.

4. What is the fundamental tradeoff both sides of a forward contract accept?
   - Both sides guarantee themselves a profit no matter what happens
   - [x] Both sides give up the chance of a better outcome from waiting, in exchange for a known, fixed number to plan around
   - Only one side takes on any risk at all
   - Forwards eliminate risk for the entire market, not just the two parties involved
     > Neither side knows in advance whether the locked-in price will end up better or worse than the eventual market price — the value of a forward is the certainty itself, not a guaranteed favorable outcome.

5. How is a forward contract's notional value calculated?
   - The amount of cash exchanged when the contract is signed
   - [x] The agreed forward price multiplied by the quantity of the underlying asset
   - The total profit the long party expects to earn
   - A fixed fee charged by the exchange
     > Notional value represents the total economic exposure of the contract — the forward price times the quantity of the asset — even though little or no cash typically changes hands upfront.

6. What are the two ways a forward contract can be settled at maturity?
   - [x] Physical settlement (delivering the actual asset) or cash settlement (exchanging the price difference)
   - Early settlement or late settlement, with no other options
   - Settlement can only ever happen through physical delivery
   - Settlement always happens automatically without any agreement
     > A forward can be settled either through actual physical delivery of the underlying asset against payment, or through a cash payment reflecting the difference between the agreed and actual market price.

7. [calc] A forward on 10,000 bushels of wheat at $6.50/bushel is cash-settled when the market price is $7.00/bushel. What does the merchant pay the mill?
   - $65,000
   - $70,000
   - [x] $5,000
   - Nothing — cash settlement means no payment is made
     > Cash settlement pays only the difference between the agreed and market price: ($7.00 − $6.50) × 10,000 = $5,000, which gives the mill the same $6.50-per-bushel economic outcome as physical delivery would.

8. Why does a forward contract carry counterparty risk?
   - Because forwards are always guaranteed by a central clearinghouse
   - [x] Because it's a private, over-the-counter agreement, so its fulfillment depends entirely on the other party's willingness and ability to honor it
   - Because forward contracts cannot legally be enforced
   - Counterparty risk does not apply to forward contracts
     > Unlike an exchange-cleared contract, a forward's integrity rests entirely on the specific counterparty actually following through at maturity, with no clearinghouse guarantee behind it.

9. How does a forward's obligation differ from an option buyer's?
   - [x] Both sides of a forward are obligated to go through with the deal at maturity, while an option buyer can simply let an unfavorable option expire worthless
   - A forward buyer can walk away at any time with no consequence, just like an option buyer
   - Only the short side of a forward has any obligation
   - Options carry more obligation than forwards do
     > A forward's defining feature is symmetric obligation on both sides — neither can walk away — unlike an option, where the buyer holds a right without an obligation.

10. What are the two main structural differences between a forward and a futures contract?

- [x] A forward is customized and OTC, settling once at maturity; a future is standardized, exchange-traded, and marked to market daily
- There are no real differences between the two
- A forward is exchange-traded while a future is private and customized
- Futures always require physical delivery, while forwards never do
  > Customization/OTC-vs-standardized/exchange-traded, and lump-sum-at-maturity-vs-daily-mark-to-market, are the two defining structural differences, both rooted in a forward being a private bilateral deal versus a future being a public, cleared one.

11. Why must a forward contract spell out its currency and delivery location?
   - [x] There's no exchange-approved standard list to fall back on, unlike a futures contract's built-in specification
   - Currency and location are irrelevant to a forward contract
   - All forwards are automatically settled in U.S. dollars
   - Only commodity forwards ever have a delivery location
   > A futures contract's specification includes approved delivery locations by default; a forward has none of that built in, so the two parties have to write it in themselves.

12. Why can the negotiated forward price differ from the theoretical fair forward price?
   - The negotiated price and the fair price are always identical
   - Forward prices are set by an exchange, not negotiated
   - [x] A specific deal's price still depends on each side's relative bargaining position, not purely on the fair-value formula
   - Fair value only applies to futures
   > The cost-of-carry formula gives a theoretical benchmark, but a negotiated deal between two parties can land somewhat away from it depending on their relative leverage.
