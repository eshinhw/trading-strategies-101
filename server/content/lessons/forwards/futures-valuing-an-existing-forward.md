---
slug: futures-valuing-an-existing-forward
title: Valuing an Existing Forward Contract
summary: Once a forward is in place, its market value changes as time passes and the spot price moves — a different question from forward pricing, which only sets the fair price at inception.
---

## Pricing at Inception vs. Valuing Mid-Life

Forward pricing, covered earlier in this module, answers the question "what delivery price should this contract be struck at today, so that it has zero value to either side at signing?" Valuing an existing forward answers a different question: once that contract is signed and time has passed, what is it actually worth now to whoever holds it?

## Why the Value Isn't Zero Anymore

A forward is struck at a delivery price, fixed for the life of the contract, but the underlying's spot price and the cost of carry keep changing after that. As the asset's current forward price, recalculated using today's spot and financing cost, drifts away from the original delivery price, the contract accumulates real economic value — positive to one side, and equally negative to the other.

## The Valuation Formula's Intuition

The value of a long forward position, at any point before maturity, is approximately the present value of the difference between today's forward price for a brand-new contract of the same remaining maturity, and the original delivery price locked in at inception. If the market's current forward price is now higher than the original delivery price, the long position is in the money and worth something positive.

## Why This Matters in Practice

This mid-life valuation is what a company needs to mark a forward position on its own books, what a bank needs to calculate before agreeing to unwind or assign an existing forward early, and conceptually underlies the daily variation-margin logic used in a futures contract's mark-to-market process — even though a forward itself, unlike a future, doesn't settle any of that accumulated value until the very end.

## Example

A company hedged a future jet-fuel purchase with a forward a year ago, locking in 100,000 barrels at $70 a barrel for delivery in three months, and its auditors now need to know what that unmatured contract is worth for the quarterly financial statements — not what it was worth at signing. Today's price for a brand-new, equivalent three-month forward on the same fuel has since risen to $76 a barrel, so the finance team marks the position at roughly ($76 − $70) × 100,000 = $600,000 in the company's favor. That same $600,000 figure is what a bank would use if the company wanted to unwind the position early instead of waiting three more months for it to mature.

# Quiz

1. What question does "valuing an existing forward" answer, as distinct from forward pricing?
   - What the contract's delivery price should be set at, for it to have zero value at signing
   - [x] What the contract is actually worth now to whoever holds it, after time has passed since signing
   - Whether the contract should be cancelled
   - How much collateral the exchange requires
   > Forward pricing sets the fair delivery price at inception; valuing an existing forward asks what that already-signed contract is worth partway through its life.

2. Why does an existing forward's value drift away from zero over time?
   - [x] Because the underlying's spot price and cost of carry keep changing after the delivery price was fixed at inception
   - Forward contracts always keep a value of exactly zero throughout their life
   - Because the contract's delivery price changes automatically every day
   - Because forwards are marked to market daily like futures
   > The delivery price is locked in at signing, but the market's own forward price for a new, equivalent contract keeps moving with spot and financing costs, creating a gap that gives the existing contract real value.

3. What does it mean if a long forward position's current value is positive?
   - [x] Today's forward price for a new, equivalent contract is now higher than the original delivery price locked in at inception
   - The contract has already been physically settled
   - The holder must immediately pay additional margin
   - The underlying asset has been delisted
   > A long forward gains value when the market's current forward price rises above the original delivery price — the holder is now locked into buying below today's equivalent market rate.

4. Why would a bank need to value an existing forward contract mid-life?
   - [x] To agree on a fair price before unwinding or assigning the contract early, or to mark the position on its books
   - Forwards never need to be valued once they're signed
   - Only to determine the original delivery price
   - To calculate the underlying commodity's storage cost
   > Marking a position on the books, or agreeing a fair unwind price before maturity, both require knowing the contract's current value, not just its original delivery price.

5. How does a forward's value accumulation compare to a future's daily mark-to-market?
   - [x] A forward's value accumulates but isn't settled until maturity, while a future settles that same kind of value in cash every day
   - They are identical — forwards also settle in cash daily
   - A forward never accumulates any value at all
   - A future never accumulates value between settlements
   > The same underlying idea — value building up as the market forward price moves away from the locked-in price — is what a future actually pays out daily via mark-to-market, whereas a forward simply accumulates it unrealized until the end.
