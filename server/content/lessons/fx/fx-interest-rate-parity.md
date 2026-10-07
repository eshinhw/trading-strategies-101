---
slug: fx-interest-rate-parity
title: Interest Rate Parity
summary: The no-arbitrage relationship linking spot and forward exchange rates to the interest rate gap between two currencies — the same relationship behind forward FX pricing and the carry trade.
---

## Revisiting Covered Interest Rate Parity

As introduced in this curriculum's Forward Pricing lesson, covered interest rate parity ties a currency pair's forward exchange rate to the gap between the two countries' interest rates: the currency with the higher interest rate trades at a forward discount, and the currency with the lower rate trades at a forward premium, so that borrowing in one currency and lending in the other, fully hedged with a forward, can't produce a riskless profit.

## Why It Has to Hold

If this relationship didn't hold, an arbitrageur could borrow in the low-rate currency, convert it to the high-rate currency, invest at the higher rate, and lock in the future conversion back with a forward contract, pocketing a riskless profit funded entirely by the interest rate gap. The forward rate adjusts, through active trading, until that opportunity disappears.

## Uncovered Interest Rate Parity

A related, looser idea is uncovered interest rate parity: the theory that a higher-yielding currency should be expected to depreciate over time by roughly the size of its interest rate advantage, so that an investor gains nothing extra, on average, from simply holding the higher-rate currency unhedged. Unlike the covered version, this is a market expectation, not an enforced no-arbitrage relationship.

## Why the Carry Trade Exists At All

If uncovered interest rate parity held perfectly and consistently, there would be no expected profit from the carry trade covered later in this course, since the higher-rate currency's interest advantage would be expected to be offset exactly by its own depreciation. In practice, that offsetting depreciation doesn't show up reliably enough, or by the theoretically "correct" amount, which is precisely the persistent anomaly the carry trade is designed to exploit.

## Example

The dollar earns 5% a year and the euro earns 3%. EUR/USD spot is 1.10.

**Carry trade (unhedged): borrow €1,000,000 at 3%, convert to dollars and invest at 5%**

$$
€1{,}000{,}000 \times 1.10 = \$1{,}100{,}000 \quad\Rightarrow\quad \$1{,}100{,}000 \times 1.05 = \$1{,}155{,}000
$$

Repay in one year: €1,030,000.

$$
\text{Breakeven EUR/USD} = \frac{\$1{,}155{,}000}{€1{,}030{,}000} = 1.1214
$$

- EUR/USD unchanged at 1.10: repay $1,133,000, so profit **+$22,000**
- EUR/USD rises to 1.15: repay $1,184,500, so loss **−$29,500**

The trader earns the 2% rate gap only if the euro does not rise more than 1.9% (to 1.1214).

**The same trade hedged with a one-year forward**

$$
F = 1.10 \times \frac{1.05}{1.03} = 1.1214
$$

$$
\frac{\$1{,}155{,}000}{1.1214} = €1{,}030{,}000 \quad\Rightarrow\quad \text{profit} = \boxed{\$0}
$$

Hedging locks in a return of zero, which is what covered interest rate parity says it must be. The carry trader accepts an open bet that the euro will not rise enough to erase the rate advantage.

# Quiz

1. What does covered interest rate parity say about a currency pair's forward exchange rate?
   - [x] It's tied to the gap between the two countries' interest rates, with the higher-rate currency trading at a forward discount
   - The forward rate is always identical to the spot rate
   - Interest rates have no relationship to forward exchange rates
   - The forward rate is set arbitrarily by each country's government
   > Covered interest rate parity directly links the forward rate to the interest rate differential, ensuring no riskless arbitrage from borrowing in one currency and lending in the other.

2. Why does covered interest rate parity have to hold, in an efficient market?
   - [x] Otherwise an arbitrageur could borrow low, invest high, hedge with a forward, and lock in a riskless profit, which trading pressure would eliminate
   - It's simply a rule imposed by international regulators
   - It only holds by coincidence, with no underlying economic force
   - It has nothing to do with arbitrage opportunities
   > The relationship is enforced by arbitrage: any deviation would let a trader lock in a riskless profit, and that trading activity pushes the forward rate back into line.

3. What does uncovered interest rate parity suggest?
   - [x] A higher-yielding currency should be expected to depreciate over time by roughly the size of its interest rate advantage
   - A higher-yielding currency should be expected to appreciate indefinitely
   - Interest rate differentials should have no relationship to future currency moves
   - Uncovered interest rate parity is identical to the covered version in every way
   > Uncovered interest rate parity is the looser, expectations-based theory that currency depreciation should offset the interest rate gap on average, unlike the covered version's enforced no-arbitrage relationship.

4. How does uncovered interest rate parity differ from the covered version?
   - [x] It's a market expectation, not an enforced no-arbitrage relationship like the covered version
   - They are exactly the same concept with different names
   - Uncovered parity is enforced by arbitrage, while covered parity is not
   - Uncovered parity applies only to forward contracts, never spot rates
   > Covered interest rate parity is enforced by arbitrage using a forward contract; uncovered parity is just a theoretical expectation about future spot rate movement, with no hedge locking it in.

5. Why does the carry trade have a potential edge to exploit, given uncovered interest rate parity?
   - [x] In practice, higher-rate currencies don't reliably depreciate by the theoretically "correct" amount, leaving a persistent gap the carry trade targets
   - Uncovered interest rate parity always holds perfectly, leaving no room for any strategy
   - The carry trade has no relationship to interest rate parity at all
   - Higher-rate currencies always appreciate, guaranteeing carry trade profits
   > Because the depreciation predicted by uncovered interest rate parity doesn't show up reliably in practice, that persistent gap is exactly what carry trade strategies are built to capture.

6. {#calc1} [calc] EUR/USD spot is 1.10, the one-year dollar rate is 5% and the euro rate is 3%. What is the one-year forward rate?
   - About 1.0786
   - [x] About 1.1214
   - About 1.1330
   - About 1.1000
   > F = 1.10 × (1.05 / 1.03) ≈ 1.1214. The higher-rate currency (the dollar) trades at a forward discount, so the euro is at a premium.

7. {#calc2} [calc] USD/JPY is 150.00, the three-month dollar rate is 5% and the yen rate is 0.5%. What is the three-month forward rate?
   - About ¥151.69
   - About ¥150.00
   - About ¥157.50
   - [x] About ¥148.33
   > F = 150 × (1 + 0.005 × 0.25) / (1 + 0.05 × 0.25) ≈ 148.33. The dollar has the higher interest rate, so it trades at a forward discount: fewer yen per dollar for delivery in three months.