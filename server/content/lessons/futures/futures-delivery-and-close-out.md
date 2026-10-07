---
slug: futures-delivery-and-close-out
title: Delivery and Closing Out a Position
summary: Why the overwhelming majority of futures contracts never reach physical delivery — and what actually happens as a contract's expiration approaches.
---

## Two Ways a Futures Contract Ends

A futures position ends in one of two ways: it runs to expiration and settles, either through physical delivery of the underlying asset or, for contracts like stock index futures or VIX futures that have no single physical asset to hand over, through cash settlement — or the trader closes out the position early with an offsetting trade, buying back a short or selling out a long, before expiration ever arrives. The vast majority of speculative traders exit this second way.

## Physical Delivery in Practice

For a physically-settled contract, only accounts still holding an open position once the exchange's delivery process begins risk being matched for actual delivery, and the exchange runs a formal notice process pairing the remaining longs and shorts. Because that process is operationally demanding — arranging storage, transport, and quality inspection — most speculative and retail accounts close out well before this window opens, leaving physical delivery mainly to the commercial participants, grain elevators, refiners, and the like, who actually want or already hold the underlying commodity.

## Cash-Settled Contracts

Many modern futures contracts, especially financial futures, are cash-settled by design and have no physical delivery mechanism at all: at expiration, the contract simply settles against an agreed reference price or index level, and the difference is paid in cash. This removes the operational complexity of delivery entirely, at the cost of the contract being a purely financial instrument rather than a claim on a physical asset.

## Rolling a Position Forward

A trader who wants continuous exposure without ever taking delivery closes out the expiring contract and simultaneously opens an equivalent position in a later-dated contract — a roll. The price difference between the two contracts, driven largely by the same cost-of-carry logic behind forward pricing, becomes a return or a cost of maintaining that exposure over time, which is exactly the dynamic behind both calendar-spread trading and roll yield in commodity futures.

## Example

A trader is long 1 crude oil contract (1,000 barrels) and rolls it before expiration.

- Bought September at $75
- Market is in contango: September trades at $76, December at $77

**Close the September contract**

$$
(\$76 - \$75) \times 1{,}000 = +\$1{,}000
$$

**Open the December contract**

December costs $1 more than September:

$$
(\$77 - \$76) \times 1{,}000 = \boxed{\$1{,}000 \text{ roll cost}}
$$

**If the same $1 gap appears at every quarterly roll**

$$
4 \times \$1{,}000 = \$4{,}000 \text{ a year} = \frac{\$4{,}000}{\$76{,}000} = 5.3\% \text{ of the position}
$$

A trader who only wants price exposure never takes delivery. Closing out before expiration avoids storing 1,000 barrels, but each roll in contango quietly erodes the return.

# Quiz

1. What are the two ways a futures position can end?
   - It must always run to physical delivery, with no other option
   - [x] It runs to expiration and settles (physically or in cash), or the trader closes it out early with an offsetting trade
   - It can only be cancelled by the exchange
   - It automatically converts into a forward contract
   > A futures position either settles at expiration — physically or in cash — or, far more commonly for speculative traders, is closed out early with an offsetting trade.

2. Who mainly ends up taking physical delivery on a futures contract?
   - Every trader who ever holds the contract, without exception
   - [x] Mainly commercial participants who actually want or hold the underlying commodity, since most speculative accounts close out before the delivery window
   - No one — physical delivery never actually happens
   - Only the exchange itself
   > Because physical delivery is operationally demanding, most speculative traders close out beforehand, leaving delivery mainly to commercial hedgers who actually want the physical asset.

3. What is a cash-settled futures contract?
   - A contract that requires the underlying asset to be physically delivered
   - [x] A contract that settles at expiration against a reference price or index, paying the difference in cash, with no physical delivery mechanism
   - A contract that can only be traded with cash, never on margin
   - A contract that never expires
   > Cash settlement pays the difference between the contract price and a reference price in cash at expiration, avoiding physical delivery entirely — common for financial futures.

4. What does it mean to "roll" a futures position?
   - Letting the position run into physical delivery
   - [x] Closing out the expiring contract and simultaneously opening an equivalent position in a later-dated contract, to maintain continuous exposure
   - Doubling the size of a position right before expiration
   - Cancelling the position with no replacement
   > Rolling swaps an expiring contract for a later-dated one in a single move, letting a trader maintain exposure indefinitely without ever taking delivery.

5. What determines the price difference between the contract being rolled out of and the one being rolled into?
   - The difference is always zero
   - [x] Largely the same cost-of-carry logic behind forward pricing, which is also the dynamic behind calendar spreads and commodity roll yield
   - It is set arbitrarily by the trader
   - It depends only on the trader's broker fees
   > The roll's price difference reflects cost-of-carry between the two expirations — the same underlying dynamic that drives calendar-spread trading and roll yield in commodities.

6. A trader closes September crude at $76 and buys December at $77 to roll the position forward. What does the $1-per-barrel gap represent?
   - A trading error that should never happen
   - [x] A roll cost from contango — the new position starts $1,000 more expensive on 1,000 barrels
   - A guaranteed $1,000 profit
   - The exchange's transaction fee
   > Buying the further-dated December contract at a $1 premium to the September contract just sold is a contango-driven roll cost — $1,000 on a 1,000-barrel contract, separate from whatever gain or loss was realized on September itself.

7. {#calc1} [calc] A trader rolls 5 crude oil contracts (1,000 barrels each) by selling March at $82 and buying June at $84. What is the roll cost?
   - $2,000
   - $5,000
   - $20,000
   - [x] $10,000
   > The extra $2 a barrel on 5 × 1,000 barrels is $10,000.
