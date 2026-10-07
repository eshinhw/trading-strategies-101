---
slug: fx-interest-rate-parity
---

# Quiz

1. {#q1} What does covered interest rate parity say about a currency pair's forward exchange rate?
   - [x] It's tied to the gap between the two countries' interest rates, with the higher-rate currency trading at a forward discount
   - The forward rate is always identical to the spot rate
   - Interest rates have no relationship to forward exchange rates
   - The forward rate is set arbitrarily by each country's government
   > Covered interest rate parity directly links the forward rate to the interest rate differential, ensuring no riskless arbitrage from borrowing in one currency and lending in the other.

2. {#q2} Why does covered interest rate parity have to hold, in an efficient market?
   - [x] Otherwise an arbitrageur could borrow low, invest high, hedge with a forward, and lock in a riskless profit, which trading pressure would eliminate
   - It's simply a rule imposed by international regulators
   - It only holds by coincidence, with no underlying economic force
   - It has nothing to do with arbitrage opportunities
   > The relationship is enforced by arbitrage: any deviation would let a trader lock in a riskless profit, and that trading activity pushes the forward rate back into line.

3. {#q3} What does uncovered interest rate parity suggest?
   - [x] A higher-yielding currency should be expected to depreciate over time by roughly the size of its interest rate advantage
   - A higher-yielding currency should be expected to appreciate indefinitely
   - Interest rate differentials should have no relationship to future currency moves
   - Uncovered interest rate parity is identical to the covered version in every way
   > Uncovered interest rate parity is the looser, expectations-based theory that currency depreciation should offset the interest rate gap on average, unlike the covered version's enforced no-arbitrage relationship.

4. {#q4} How does uncovered interest rate parity differ from the covered version?
   - [x] It's a market expectation, not an enforced no-arbitrage relationship like the covered version
   - They are exactly the same concept with different names
   - Uncovered parity is enforced by arbitrage, while covered parity is not
   - Uncovered parity applies only to forward contracts, never spot rates
   > Covered interest rate parity is enforced by arbitrage using a forward contract; uncovered parity is just a theoretical expectation about future spot rate movement, with no hedge locking it in.

5. {#q5} Why does the carry trade have a potential edge to exploit, given uncovered interest rate parity?
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

8. {#bk1} [calc] The spot rate is 1.1000 dollars per foreign unit, the dollar interest rate is 5%, and the foreign rate is 3% (1-year, simple annual compounding). What is the 1-year forward rate under covered interest parity?
   - 1.0790
   - 1.1000
   - 1.1320
   - [x] 1.1214
   > Forward = spot × (1 + domestic rate) / (1 + foreign rate) = 1.1000 × 1.05 / 1.03 = 1.1214.

9. {#bk2} [calc] The spot rate is 1.2500 dollars per foreign unit, the dollar interest rate is 4%, and the foreign rate is 1% (1-year, simple annual compounding). What is the 1-year forward rate under covered interest parity?
   - 1.2139
   - [x] 1.2871
   - 1.2500
   - 1.2975
   > Forward = spot × (1 + domestic rate) / (1 + foreign rate) = 1.2500 × 1.04 / 1.01 = 1.2871.

10. {#bk3} [calc] The spot rate is 0.7500 dollars per foreign unit, the dollar interest rate is 6%, and the foreign rate is 2% (1-year, simple annual compounding). What is the 1-year forward rate under covered interest parity?
   - 0.7217
   - 0.7500
   - 0.7900
   - [x] 0.7794
   > Forward = spot × (1 + domestic rate) / (1 + foreign rate) = 0.7500 × 1.06 / 1.02 = 0.7794.
