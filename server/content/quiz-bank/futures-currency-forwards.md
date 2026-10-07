---
slug: futures-currency-forwards
---

# Quiz

1. {#q1} What is an FX forward?
   - [x] An agreement between two parties to exchange one currency for another at a fixed rate on a future date
   - A contract that guarantees a currency's spot rate will never change
   - A loan denominated in a foreign currency
   - A type of futures contract that can only be traded on an exchange
   > An FX forward is the currency-market application of the same basic forward contract idea, with an exchange rate playing the role of the delivery price.

2. {#q2} What does the gap between the spot rate and the forward rate actually reflect?
   - [x] The interest-rate differential between the two currencies, not a market prediction of the future spot rate
   - A guaranteed forecast of where the spot rate will be on the delivery date
   - A fee charged by the bank quoting the forward
   - The gap is always exactly zero for any currency pair
   > Covered interest rate parity ties the spot-forward gap to the interest-rate differential between the two currencies, not to a directional forecast.

3. {#q3} Under covered interest rate parity, which currency trades at a forward discount?
   - [x] The currency with the higher interest rate
   - The currency with the lower interest rate
   - Whichever currency is more widely traded
   - Neither currency ever trades at a discount
   > The higher-interest-rate currency trades at a forward discount, and the lower-interest-rate currency at a forward premium, so that a hedged interest-rate arbitrage can't produce a riskless profit.

4. {#q4} What do positive forward points indicate?
   - [x] The currency is at a forward premium — its forward rate is above the spot rate
   - The currency is at a forward discount
   - The spot and forward rates are identical
   - The currency cannot be hedged with a forward
   > Forward points are added to or subtracted from the spot rate to get the forward rate — positive points mean a forward premium (forward rate above spot).

5. {#q5} If U.S. rates are higher than euro rates, and spot is $1.08/euro, what would covered interest rate parity predict about the six-month forward rate?
   - [x] The euro trades at a forward premium, so the forward rate is above $1.08 (e.g., $1.10)
   - The euro trades at a forward discount, so the forward rate is below $1.08
   - The forward rate must be exactly $1.08
   - Interest rates have no effect on the forward rate
   > With U.S. rates higher than euro rates, the euro (the lower-rate currency) trades at a forward premium to the dollar, meaning more dollars per euro forward than spot.

6. {#q6} [calc] Spot is $1.08 per euro, the U.S. six-month rate is 5.5% and the euro rate is 1.8%. About what is the six-month forward rate?
   - $1.08
   - $1.04
   - [x] $1.10
   - $1.16
   > Covered interest parity gives $1.08 × (1 + 0.0275) / (1 + 0.009), about $1.0998, a forward premium because dollar rates are higher.

7. {#q7} [calc] A U.S. importer locks in $1.10 on a €400,000 invoice, and the spot rate at maturity is $1.05. What is the result of the hedge?
   - It saves $20,000 compared with not hedging
   - [x] It costs $20,000 more than not hedging, but the cost is fixed at $440,000
   - It loses the whole $440,000
   - It breaks even exactly
   > Unhedged the invoice would cost $420,000, so the hedge costs $20,000 extra, which is the price of certainty in the same way as the mill's forward.

8. {#bk1} [calc] EUR/USD spot is 1.0850. The quote-currency rate is 5% and the base-currency rate is 3% (continuously compounded). What is the fair 12-month forward rate?
   - [x] 1.1069
   - 1.0635
   - 1.0850
   - 1.1718
   > Forward = spot × e^((quote rate − base rate)×T) = 1.0850 × e^(+0.020×1) = 1.1069.

9. {#bk2} [calc] GBP/USD spot is 1.2600. The quote-currency rate is 4.5% and the base-currency rate is 2.5% (continuously compounded). What is the fair 6-month forward rate?
   - 1.2475
   - 1.2600
   - [x] 1.2727
   - 1.3041
   > Forward = spot × e^((quote rate − base rate)×T) = 1.2600 × e^(+0.020×0.5) = 1.2727.

10. {#bk3} [calc] USD/CAD spot is 1.3500. The quote-currency rate is 4% and the base-currency rate is 5% (continuously compounded). What is the fair 12-month forward rate?
   - [x] 1.3366
   - 1.3636
   - 1.3500
   - 1.4715
   > Forward = spot × e^((quote rate − base rate)×T) = 1.3500 × e^(-0.010×1) = 1.3366.

11. {#bk4} [calc] A US importer must pay €2 million in 6 months and buys euros forward at 1.1200 when spot is 1.1000. What does the importer pay in dollars, and how does that compare with paying at today's spot?
   - $2,200,000, the same as spot
   - $2,240,000, which is $40,000 less than the spot cost
   - $2,000,000, which is $200,000 less
   - [x] $2,240,000, which is $40,000 more than the spot cost
   > Forward cost = €2,000,000 × 1.1200 = $2,240,000. Spot cost = €2,000,000 × 1.1000 = $2,200,000. The difference is $40,000.

12. {#bk5} [calc] EUR/USD spot is 1.0850 and the 3-month forward points are +42 (each point is 0.0001). What is the 3-month forward rate?
   - 1.0808
   - [x] 1.0892
   - 1.1270
   - 1.0854
   > Forward = spot + points × 0.0001 = 1.0850 + 0.0042 = 1.0892.

13. {#bk6} [calc] GBP/USD spot is 1.2540 and the 3-month forward points are −35. What is the forward rate, and is sterling at a premium or discount?
   - 1.2575, at a premium
   - 1.2505, at a premium
   - 1.2890, at a discount
   - [x] 1.2505, at a discount
   > Forward = 1.2540 − 0.0035 = 1.2505, below spot, so sterling is at a forward discount.

14. {#bk7} [calc] EUR/USD spot is 1.0850 and the 3-month forward is 1.0892. What is the forward premium, annualized (simple)?
   - 0.39%
   - [x] 1.55%
   - 3.87%
   - 0.78%
   > (1.0892 / 1.0850 − 1) = 0.387% over 3 months. Annualized × 4 = 1.55%.

15. {#bk8} [calc] EUR/USD spot is 1.0850, the dollar rate is 5% and the euro rate is 3% (continuous). What is the 6-month forward rate from interest parity?
   - [x] 1.0959
   - 1.0850
   - 1.0742
   - 1.1150
   > F = 1.0850 × e^((5% − 3%) × 0.5) = 1.0959.

16. {#bk9} [calc] An importer owes £1,000,000 in 3 months and buys pounds forward at 1.2600. At maturity spot is 1.2900. How much does the forward save versus buying at spot?
   - $300,000
   - $3,000
   - [x] $30,000
   - $1,260,000
   > Spot would cost $1,290,000 and the forward costs $1,260,000, a saving of $30,000.

17. {#bk10} [calc] An exporter sells €3,000,000 forward at 1.0900. At maturity spot is 1.0600. How much more does the exporter receive than at spot?
   - $9,000
   - $900,000
   - [x] $90,000
   - $3,270,000
   > The exporter receives 1.0900 instead of 1.0600 per euro: 0.0300 × €3,000,000 = $90,000.

18. {#bk11} [calc] USD/JPY is 150, the dollar rate is 5% and the yen rate is 0.5% (continuous). What is the 1-year forward rate, in yen per dollar?
   - [x] 143.40
   - 156.90
   - 150.00
   - 145.00
   > The dollar has the higher rate, so it trades at a forward discount: F = 150 × e^((0.5% − 5%) × 1) = 143.40.

19. {#bk12} Is the gap between the forward and spot exchange rates a prediction of the future spot rate?
   - Yes, it is the market's best estimate of future spot
   - Yes, it is set by the central bank
   - [x] No, it reflects the interest-rate difference between the two currencies
   - No, it is random each day
   > Covered interest parity ties the forward rate to interest-rate differentials, so the gap is mostly a carrying cost, not a forecast.

20. {#bk13} Which currency trades at a forward discount, according to interest rate parity?
   - [x] The one with the higher interest rate
   - The one with the lower interest rate
   - The one with the lower inflation
   - The one traded in the larger volume
   > The higher-yielding currency is worth less in the forward market, offsetting the extra interest earned.

21. {#bk14} What do positive forward points mean for a currency?
   - The forward rate is below spot, so the currency is at a discount
   - The currency will rise in value
   - The forward contract is invalid
   - [x] The forward rate is above spot, so the currency is at a forward premium
   > Forward points are added to the spot rate to get the forward rate. A positive number means a premium.
