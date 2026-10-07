---
slug: futures-margin-and-mark-to-market
title: Margin and Daily Settlement
summary: How futures contracts stay solvent day to day — initial margin, maintenance margin, and the daily mark-to-market process that settles gains and losses in cash every single day.
---

## Initial Margin

Unlike a forward, which typically requires no cash upfront, opening a futures position requires posting collateral with the broker and clearinghouse called initial margin — a fraction of the contract's notional value, not the full amount, which is what gives futures their capital efficiency and leverage. The exchange sets initial margin based on the contract's historical volatility, and it's required from both the long and short side of every trade, unlike an option, where only the seller posts margin.

## Maintenance Margin and Margin Calls

Maintenance margin is a lower threshold, below the initial margin level, that an account's balance is never allowed to fall under. If a run of daily losses pushes the account below that threshold, the broker issues a margin call, requiring the trader to deposit additional cash — variation margin — back up to the initial margin level, typically within one business day, or have the position liquidated to cap further losses.

## Daily Mark-to-Market

Every trading day, the exchange marks every open futures position to that day's settlement price and credits or debits the resulting gain or loss in cash to each account. This is the core structural difference from a forward, which settles its entire profit or loss in a single lump sum at maturity: a futures trader's gains and losses are realized incrementally, in cash, day by day, rather than accumulating unrealized until expiration.

## Leverage Cuts Both Ways

Because initial margin is only a small fraction of a contract's notional value, a modest move in the underlying's price translates into a much larger percentage gain or loss on the margin capital actually posted. That same leverage that makes futures capital-efficient for hedgers and speculators also means a string of adverse daily marks can trigger a margin call, or a full liquidation, far faster than an equivalent-sized position in the cash market ever would.

## Example

A trader buys one crude oil futures contract (1,000 barrels) at $80.

- Notional value: 1,000 × $80 = $80,000
- Initial margin: $6,000, which is 7.5% of notional
- Maintenance margin: $5,000

**Overnight, crude falls to $78**

$$
\text{Loss} = (\$80 - \$78) \times 1{,}000 = \$2{,}000
$$

$$
\text{Account} = \$6{,}000 - \$2{,}000 = \$4{,}000 \quad (\text{below the } \$5{,}000 \text{ maintenance level})
$$

**Margin call**

$$
\$6{,}000 - \$4{,}000 = \boxed{\$2{,}000 \text{ to deposit}}
$$

**How much room was there?**

- Cushion above maintenance: $6,000 − $5,000 = $1,000, which is a $1 move in crude
- Any fall of more than $1 a barrel triggers a call
- Leverage: $80,000 ÷ $6,000 = 13.3 times

Gains and losses are paid in cash every day, so a desk sizes positions by how much overnight movement its margin can absorb.

# Quiz

1. What is initial margin?
   - The full notional value of the futures contract, paid upfront
   - [x] Collateral posted by both the long and short side, set as a fraction of notional value, required to open a futures position
   - A fee paid only by the seller of the contract
   - The profit a trader expects to earn from the position
   > Initial margin is a fraction of the contract's notional value, posted by both sides of the trade — it's what makes futures capital-efficient and leveraged compared to owning the underlying outright.

2. What happens if losses push an account below maintenance margin?
   - Nothing — maintenance margin is only a suggestion
   - [x] The broker issues a margin call, requiring a deposit back up to the initial margin level or the position is liquidated
   - The contract is automatically extended to a later expiration
   - The exchange refunds the trader's initial margin
   > Falling below maintenance margin triggers a margin call: the trader must post variation margin to restore the account to the initial margin level, or the position gets liquidated.

3. How does daily mark-to-market differ from how a forward contract settles?
   - They are identical — both settle only once, at maturity
   - [x] A futures position settles gains and losses in cash every day, while a forward settles its entire profit or loss in one lump sum at maturity
   - Futures never settle at all
   - A forward settles daily, while futures settle only once
   > Daily mark-to-market realizes a futures position's gains and losses incrementally in cash each day, unlike a forward's single lump-sum settlement at expiration.

4. Why does the daily mark-to-market process eliminate the counterparty risk that forwards carry?
   - It doesn't — futures carry the exact same counterparty risk as forwards
   - [x] Because losses are collected in cash each day rather than allowed to accumulate unpaid over the life of the contract, no single party can build up a large unhonored loss
   - Because futures contracts are never allowed to lose value
   - Because futures are always held to physical delivery
   > Collecting losses daily, in cash, is precisely what prevents the kind of large, unpaid, end-of-contract loss that makes a private forward agreement risky.

5. Why does posting only a fraction of notional value as margin create risk for a futures trader?
   - It doesn't create any additional risk
   - [x] A modest move in the underlying translates into a much larger percentage gain or loss on the margin capital actually posted, which can trigger a margin call quickly
   - Because margin requirements are set randomly by each broker
   - Because leverage only ever increases a trader's profits, never their losses
   > Since margin is a small fraction of notional value, the same dollar move in the underlying is a much larger percentage move on the margin posted — leverage that cuts both ways.

6. A trader posts $6,000 initial margin on a crude oil contract (1,000 barrels). Crude falls $2/barrel, a $2,000 loss. If maintenance margin is $5,000, what happens?
   - Nothing — the account still has a positive balance
   - [x] A margin call, since $6,000 − $2,000 = $4,000 is below the $5,000 maintenance threshold
   - The position automatically doubles in size
   - The exchange refunds the loss
   > The account balance falls to $4,000, below the $5,000 maintenance margin, so the broker issues a margin call requiring a deposit back up to the $6,000 initial margin level.
