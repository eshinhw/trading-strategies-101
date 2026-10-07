---
slug: futures-calendar-spread
title: Calendar Spread
summary: Trading the price relationship between two futures contracts on the same underlying that expire at different times.
---

## What a Calendar Spread Is

A futures calendar spread (also called a time spread) means simultaneously buying one futures contract and selling another on the same underlying asset, but with different expiration months — for example, buying December crude oil futures and selling November crude oil futures. Rather than betting on which direction the underlying commodity moves, the trader is betting on how the price difference between the two expirations changes.

## Contango and Backwardation

That difference reflects the market's expectations about supply and storage costs between now and each delivery date. It can sit in contango, where later-dated contracts are priced higher than near-dated ones — common when storage costs are significant, as with crude oil or grains — or in backwardation, where later-dated contracts are priced lower, often a sign that near-term supply is unusually tight and buyers are paying up for more immediate availability.

![futures-curve](Contango: further-dated contracts cost more. Backwardation: further-dated contracts cost less.)

## Isolating the Curve, Not the Price

Because both legs of the spread move together with the overall commodity price most of the time, a calendar spread is far less exposed to day-to-day price noise than an outright long or short futures position. The trader is isolating a narrower bet on the shape of the futures curve — the supply, demand, and storage dynamics between two dates — rather than on the commodity's absolute price level.

## A Classic Use Case

A classic use case: heading into a season where a supply crunch is expected, such as a natural gas contract approaching a cold winter with low storage, a trader might buy the near-month contract and sell a further-out month, expecting the near-term squeeze to push the front contract's price up relative to the back one. That profits from the change in the spread, largely independent of whether natural gas prices broadly rise or fall.

## Example

A trader expects the near-term squeeze to ease, so the gap between the two months should narrow.

- November crude: $76
- December crude: $78
- Spread (December − November): $2.00
- Trade: buy November, sell December (1 contract each, 1,000 barrels)

**Case 1: November rises to $77.50, December stays at $78.00**

$$
\text{Long November} = (\$77.50 - \$76.00) \times 1{,}000 = +\$1{,}500
$$

$$
\text{Short December} = (\$78.00 - \$78.00) \times 1{,}000 = \$0
$$

$$
\text{Spread} = \$78.00 - \$77.50 = \$0.50 \quad\Rightarrow\quad \text{profit} = \boxed{\$1{,}500}
$$

**Case 2: both months rise $5 (November $81, December $83)**

$$
+\$5{,}000 - \$5{,}000 = \$0 \text{ (the spread is still } \$2.00 \text{)}
$$

The profit comes from the spread narrowing from $2.00 to $0.50. A $1 narrowing is worth $1,000, whatever crude does outright.

# Quiz

1. A futures calendar spread involves:
   - Buying and selling futures on two different underlying commodities
   - [x] Buying one futures contract and selling another on the same underlying but a different expiration month
   - Buying a futures contract and an option with the same expiration
   - Holding a single futures contract until expiration
   > A calendar spread trades the price relationship between two expirations of the same underlying, not two different commodities.

2. What is a trader in a calendar spread primarily betting on?
   - The absolute direction of the underlying commodity's price
   - [x] How the price difference between the two expiration months will change
   - Which exchange offers the lowest trading fees
   - That the commodity's price will double
   > Because both legs move together with the broad commodity price most of the time, the trader is isolating a bet on the relative price difference between the two dates, not the outright price level.

3. When later-dated futures contracts are priced higher than near-dated ones, the market is said to be in:
   - Backwardation
   - [x] Contango
   - Equilibrium
   - Arbitrage
   > Contango — later contracts priced higher — is common when storage and carry costs are significant between now and the later delivery date.

4. Backwardation (near-dated futures priced higher than later-dated ones) is often a signal of:
   - Excess supply with no storage costs
   - [x] An immediate, tight near-term supply, with buyers paying up for nearer availability
   - A guaranteed rise in the overall commodity price
   - A data error on the exchange
   > Backwardation typically shows up when near-term supply is unusually tight — buyers who need the commodity soon pay a premium over the price for later delivery.

5. Compared to holding an outright long or short futures position, a calendar spread is generally:
   - Exposed to exactly the same risk as an outright position
   - [x] Less exposed to day-to-day noise in the overall commodity price, since both legs move together with it
   - Impossible to lose money on
   - Only available on stock index futures
   > Since both legs are on the same underlying and tend to move together with the broad commodity price, much of that outright price risk cancels out, leaving a narrower bet on the shape of the futures curve.

6. A trader buys November crude at $76 and sells December crude at $78. November later rises to $77.50 while December stays at $78.00. What's the profit per barrel?
   - $0.50
   - [x] $1.50
   - $2.00
   - There is no profit
   > The long November leg gained $1.50 ($77.50 − $76.00) and the short December leg was flat, so the spread's narrowing from $2.00 to $0.50 nets $1.50 per barrel.
