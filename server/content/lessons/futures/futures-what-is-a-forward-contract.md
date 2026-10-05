---
slug: futures-what-is-a-forward-contract
title: The Forward Contract
summary: The simplest building block of the derivatives market: an agreement to buy or sell an asset at a predetermined price on a future date. In this module, we'll build the concept from the ground up — what a forward contract is, why participants use it, what it means to be long or short, how settlement works, and why counterparty risk matters.
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

The party who agrees to buy the asset later is said to be "long" the forward. The party who agrees to sell it is "short." These are the same long and short terms used throughout trading more generally, and a forward is really just the simplest possible way to express a long or short view on something's future price, locked in today rather than left to chance.

## An Obligation, Not a Choice

Both the long and the short side of a forward are obligated to go through with the deal at maturity — neither side can simply walk away if the market moves against them, the way an option buyer can let an unfavorable option expire worthless. That symmetric obligation is what makes a forward's payoff, covered later in this module, a mirror image for the two sides rather than the lopsided, capped-risk shape an option produces for its buyer.

## How Forwards Differ from Futures

A futures contract, covered in the next module, promises the exact same basic thing a forward does, but a forward is customized and traded over the counter (OTC) — negotiated privately between two specific parties on whatever terms they agree to — while a futures contract is standardized and exchange-traded, centrally cleared through a clearinghouse. A forward also typically settles its entire profit or loss once, in a single payment at maturity, while a futures position is marked to market and settled in cash every trading day. Both differences trace back to the same root cause: a forward is a private bilateral deal, and a future is a public, exchange-cleared one.

## A Real-World Motivation

Picture a coffee roaster who knows they'll need a large shipment of coffee beans in three months, and worries the price might rise before then. By agreeing today with a coffee grower on a fixed price for that future delivery, the roaster removes the uncertainty entirely — whatever the market price does between now and then, their cost is already locked in.

## Why Go to the Trouble

The whole point of a forward is trading away uncertainty for certainty. Neither side knows for sure whether they'll end up ahead compared to simply waiting and transacting at whatever the market price happens to be later — but both sides get something they value more than that uncertainty: a known, fixed number to plan around.

## Notional Value

The notional value of a forward contract is the total value of the underlying asset the contract controls — the agreed forward price multiplied by the quantity of the asset being bought or sold. This number, not the (typically zero) amount of cash exchanged upfront, is what determines the actual economic exposure both parties are taking on, as the worked example below shows.

## Settlement: Physical or Cash

At the contract's maturity date, a forward is settled in one of two ways: physical settlement, where the seller actually delivers the underlying asset and the buyer pays the agreed forward price, or cash settlement, where instead of exchanging the physical asset, the two parties simply exchange the difference between the agreed forward price and the asset's actual market price at maturity. Which settlement method applies is specified in the contract terms at the outset — physical settlement is more common for commodities where the underlying asset genuinely changes hands, while cash settlement is common when physical delivery is impractical, for a financial index, for example, where there's no single physical asset to deliver.

## Counterparty Risk

Because a forward contract is a private, over-the-counter agreement between two specific parties rather than a contract cleared through an exchange, it carries counterparty risk — the risk that the other side simply fails to honor the agreement at maturity, whether from an inability or unwillingness to pay. This is the central structural weakness forwards have relative to futures: an exchange-traded futures contract is guaranteed by a clearinghouse and backed by daily margin requirements that limit how much loss can accumulate before it's collected, while a forward's integrity depends entirely on the creditworthiness and good faith of the specific counterparty on the other side of the deal.

## Example in Practice

A flour mill and a U.S. exporter never need to have heard of each other to use the exact same tool for two completely different problems. The mill agrees today to buy 10,000 bushels of wheat in six months from a grain merchant at a forward price of $6.50 per bushel — a $65,000 notional contract (10,000 × $6.50). Six months later, wheat is actually trading at $7.00 a bushel. If the contract is cash-settled, the merchant simply pays the mill the $5,000 difference (($7.00 − $6.50) × 10,000); if it's physically settled, the merchant delivers the wheat and the mill pays the full $65,000. Either way, the mill ends up paying an effective $6.50 a bushel, exactly what it locked in six months earlier, regardless of where the market actually landed.

The exporter's forward looks nothing like a wheat contract on the surface, but it solves the identical problem. Expecting to receive 10 million euros from a European customer in three months, the exporter signs a forward with its bank to sell those euros at a fixed rate on the payment date — no cash changes hands today, but the dollar value of that future payment is locked in just as firmly as the mill's wheat cost was. The one real difference: if the bank were to fail before the contract settles, the exporter would be exposed to exactly the counterparty risk described above, a risk the mill's forward carries too, just with a grain merchant standing in for a bank.

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

7. A forward on 10,000 bushels of wheat at $6.50/bushel is cash-settled when the market price is $7.00/bushel. What does the merchant pay the mill?
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
