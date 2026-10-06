---
slug: futures-common-beginner-mistakes
title: Common Beginner Mistakes
summary: Five recurring mistakes that trip up new futures traders — confusing margin with a down payment, ignoring contract size and tick value, unintentional delivery, trading illiquid contracts, and over-risking a single position.
---

## Confusing Margin with a Down Payment

A down payment on a house is a partial payment toward eventual full ownership. Margin, covered earlier in this course, is collateral against potential losses on a leveraged position you don't partially own — it doesn't reduce the amount you owe on some larger purchase, and it can be called on to grow if the position moves against you. Treating margin like a down payment badly understates how much is actually at risk in a futures position.

## Ignoring Contract Size and Tick Value

A new trader sizing a position by number of contracts, without first working out what one contract's tick value and full notional actually represent in dollars, can end up with wildly more (or less) exposure than intended — the contract-specification lesson's E-mini S&P example, where a single tick is worth $12.50, is exactly the kind of number that needs to be checked before, not after, placing a trade.

## Unintentional Delivery

A retail trader with no ability or intention to take physical delivery of a commodity can end up right in the middle of a contract's delivery process simply by holding a physically-settled position too close to expiration — exactly the scenario the delivery-and-close-out lesson warns about. Knowing a contract's first notice date, and closing out or rolling well before it, is a simple habit that avoids this entirely.

## Trading Illiquid Contracts

A contract with low volume and open interest, and a wide bid-ask spread, can be far more expensive to trade than its quoted price suggests, since entering and exiting both cost more in price impact than in a deep, liquid market. New traders drawn to an unusual or obscure contract by a compelling story often underweight just how much that illiquidity costs in practice.

## Over-Risking a Single Position

Putting on a position sized to what feels exciting, rather than to a predetermined fraction of account capital, is the single fastest way a string of ordinary losing trades turns into a career-ending drawdown — precisely the discipline the risk-management lesson's position-sizing and stop-loss framework exists to prevent.

## Example

An experienced desk's onboarding checklist for a new trader covers exactly the five mistakes in this lesson explicitly — confirm margin isn't a down payment, know the contract's tick value before sizing a trade, know its first notice date, check its typical bid-ask spread and open interest, and cap risk per trade as a fixed share of capital — precisely because they're common enough to be worth spelling out up front. A trader who skipped that checklist shows exactly why it exists: with a $10,000 account, they put on five crude oil contracts (5,000 barrels) purely because the margin requirement allowed it, without separately checking that a routine $2 adverse move would cost $10,000 — the entire account — a mistake combining ignored notional exposure with over-risking a single position that a two-minute, pre-trade dollar-risk calculation would have caught.

# Quiz

1. Why is it a mistake to think of margin like a down payment?
   - [x] Margin is collateral against potential losses on a leveraged position, not a partial payment toward ownership, and it can be called on to grow if the position moves against you
   - Margin and a down payment are functionally identical
   - Margin is refunded in full regardless of how a position performs
   - Margin only applies to options, never futures
   > Unlike a down payment, margin doesn't reduce a larger amount owed — it's collateral against losses, and a losing position can trigger a margin call requiring more capital, not less.

2. Why does ignoring a contract's tick value and notional size lead to sizing mistakes?
   - [x] Because the actual dollar exposure per contract can be far larger (or smaller) than a trader assumes without checking it explicitly
   - Tick value never actually affects a position's real risk
   - All futures contracts have identical tick values and notional sizes
   - Notional size only matters for equity index futures
   > Contract specifications vary widely — sizing based on contract count alone, without translating that into actual dollar exposure, can create far more risk than intended.

3. How can a new trader avoid unintentional physical delivery?
   - [x] Know the contract's first notice date and close out or roll the position well before it arrives
   - It's impossible to avoid delivery once a position is opened
   - Only trade cash-settled contracts, since delivery risk applies to every futures contract
   - Delivery only happens to institutional traders, never retail accounts
   > Tracking a physically-settled contract's delivery window and exiting beforehand, exactly as covered in the delivery-and-close-out lesson, is the straightforward fix.

4. Why can trading an illiquid futures contract cost more than its quoted price suggests?
   - [x] A wide bid-ask spread and thin trading mean entering and exiting both cost more in price impact than in a liquid market
   - Illiquid contracts always have zero trading costs
   - Liquidity has no effect on the actual cost of trading a contract
   - Illiquid contracts cannot legally be traded
   > Thin liquidity shows up directly as a wider bid-ask spread and worse fills, an often-underestimated real cost of trading an obscure or low-volume contract.

5. A $10,000 account holds five crude oil contracts (5,000 barrels) sized only to available margin. What mistake does a $2 adverse move expose?
   - [x] It would cost $10,000 — the entire account — combining ignored notional exposure with over-risking a single position
   - It would cost only $50, a negligible amount
   - There is no risk since margin was sufficient to open the position
   - The position would automatically close before any loss occurred
   > 5,000 barrels × $2 = $10,000 — wiping out the entire account on a routine price move, exactly the combination of mistakes (ignoring true notional exposure and over-sizing) this lesson warns against.
