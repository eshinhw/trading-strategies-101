---
slug: futures-margin-and-mark-to-market
---

# Quiz

1. {#q1} What is initial margin?
   - The full notional value of the futures contract, paid upfront
   - [x] Collateral posted by both the long and short side, set as a fraction of notional value, required to open a futures position
   - A fee paid only by the seller of the contract
   - The profit a trader expects to earn from the position
   > Initial margin is a fraction of the contract's notional value, posted by both sides of the trade — it's what makes futures capital-efficient and leveraged compared to owning the underlying outright.

2. {#q2} What happens if losses push an account below maintenance margin?
   - Nothing — maintenance margin is only a suggestion
   - [x] The broker issues a margin call, requiring a deposit back up to the initial margin level or the position is liquidated
   - The contract is automatically extended to a later expiration
   - The exchange refunds the trader's initial margin
   > Falling below maintenance margin triggers a margin call: the trader must post variation margin to restore the account to the initial margin level, or the position gets liquidated.

3. {#q3} How does daily mark-to-market differ from how a forward contract settles?
   - They are identical — both settle only once, at maturity
   - [x] A futures position settles gains and losses in cash every day, while a forward settles its entire profit or loss in one lump sum at maturity
   - Futures never settle at all
   - A forward settles daily, while futures settle only once
   > Daily mark-to-market realizes a futures position's gains and losses incrementally in cash each day, unlike a forward's single lump-sum settlement at expiration.

4. {#q4} Why does the daily mark-to-market process eliminate the counterparty risk that forwards carry?
   - It doesn't — futures carry the exact same counterparty risk as forwards
   - [x] Because losses are collected in cash each day rather than allowed to accumulate unpaid over the life of the contract, no single party can build up a large unhonored loss
   - Because futures contracts are never allowed to lose value
   - Because futures are always held to physical delivery
   > Collecting losses daily, in cash, is precisely what prevents the kind of large, unpaid, end-of-contract loss that makes a private forward agreement risky.

5. {#q5} Why does posting only a fraction of notional value as margin create risk for a futures trader?
   - It doesn't create any additional risk
   - [x] A modest move in the underlying translates into a much larger percentage gain or loss on the margin capital actually posted, which can trigger a margin call quickly
   - Because margin requirements are set randomly by each broker
   - Because leverage only ever increases a trader's profits, never their losses
   > Since margin is a small fraction of notional value, the same dollar move in the underlying is a much larger percentage move on the margin posted — leverage that cuts both ways.

6. {#q6} [calc] A trader posts $6,000 initial margin on a crude oil contract (1,000 barrels). Crude falls $2/barrel, a $2,000 loss. If maintenance margin is $5,000, what happens?
   - Nothing — the account still has a positive balance
   - [x] A margin call, since $6,000 − $2,000 = $4,000 is below the $5,000 maintenance threshold
   - The position automatically doubles in size
   - The exchange refunds the loss
   > The account balance falls to $4,000, below the $5,000 maintenance margin, so the broker issues a margin call requiring a deposit back up to the $6,000 initial margin level.

7. {#bk1} [calc] A trader buys one crude oil (1,000 barrels) future at 80 with $6,000 initial margin and $5,000 maintenance margin. The price closes at 77.5. What margin call, if any, follows?
   - [x] $2,500
   - $1,500
   - $3,500
   - $8,500
   > The loss is (80 − 77.5) × 1,000 = $2,500, leaving $3,500, below the $5,000 maintenance level. The call restores the account to the $6,000 initial margin, which is $2,500.

8. {#bk2} [calc] A trader buys one corn (5,000 bushels) future at 6.2 with $4,000 initial margin and $3,500 maintenance margin. The price closes at 6.05. What margin call, if any, follows?
   - $250
   - $3,250
   - [x] $750
   - $4,750
   > The loss is (6.2 − 6.05) × 5,000 = $750, leaving $3,250, below the $3,500 maintenance level. The call restores the account to the $4,000 initial margin, which is $750.

9. {#bk3} [calc] A trader buys one gold (100 ounces) future at 2,000 with $9,000 initial margin and $8,000 maintenance margin. The price closes at 1,930. What margin call, if any, follows?
   - [x] $7,000
   - $6,000
   - $2,000
   - $16,000
   > The loss is (2,000 − 1,930) × 100 = $7,000, leaving $2,000, below the $8,000 maintenance level. The call restores the account to the $9,000 initial margin, which is $7,000.

10. {#bk4} [calc] A trader buys one E-mini S&P 500 ($50 a point) future at 4,300 with $12,000 initial margin and $10,500 maintenance margin. The price closes at 4,150. What margin call, if any, follows?
   - $6,000
   - $4,500
   - $19,500
   - [x] $7,500
   > The loss is (4,300 − 4,150) × 50 = $7,500, leaving $4,500, below the $10,500 maintenance level. The call restores the account to the $12,000 initial margin, which is $7,500.

11. {#bk5} [calc] A trader buys one natural gas (10,000 MMBtu) future at 3.6 with $7,500 initial margin and $6,500 maintenance margin. The price closes at 3.46. What margin call, if any, follows?
   - $400
   - [x] $1,400
   - $6,100
   - $8,900
   > The loss is (3.6 − 3.46) × 10,000 = $1,400, leaving $6,100, below the $6,500 maintenance level. The call restores the account to the $7,500 initial margin, which is $1,400.

12. {#bk6} [calc] A trader is long 2 E-mini contracts (multiplier $50). The settlement price goes from 4,500 to 4,484. How much variation margin is debited?
   - $800
   - $16
   - $160
   - [x] $1,600
   > The fall is 16 points. 16 × $50 × 2 = $1,600.

13. {#bk7} [calc] A long gold future (100 ounces) starts with $9,000 of margin. Daily settlements move the price by +$8, −$15 and −$12. What is the account balance after three days?
   - $9,000
   - [x] $7,100
   - $8,100
   - $5,100
   > The net move is 8 − 15 − 12 = −$19 per ounce. −$19 × 100 = −$1,900. $9,000 − $1,900 = $7,100.

14. {#bk8} [calc] A trader's margin account has $12,000 initial and $10,800 maintenance margin. A $1,500 loss leaves $10,500. What deposit restores the account to the initial margin?
   - [x] $1,500
   - $300
   - $10,800
   - $12,000
   > The account is below maintenance at $10,500, so the margin call restores it to the initial margin: $12,000 − $10,500 = $1,500.
