---
slug: futures-currency-forwards
title: Currency Forwards (FX Forwards)
summary: How an FX forward locks in an exchange rate for a future date, the relationship between the spot rate and the forward rate, and why interest-rate differentials are what actually drive that relationship.
---

## Locking In an Exchange Rate

An FX forward is an agreement between two parties to exchange one currency for another at a fixed rate on a future date — the currency-market version of the same basic forward contract covered throughout this course, just with an exchange rate standing in for a delivery price. Anyone with a known future foreign-currency cash flow, an importer's payment or an exporter's receivable, can use one to remove exchange-rate uncertainty from that specific cash flow.

## Spot Rate vs. Forward Rate

The spot rate is today's exchange rate for immediate currency exchange; the forward rate is the rate agreed today for exchange on a specified future date. The two are rarely identical — the gap between them isn't a prediction of where the spot rate will actually be on that future date, but a reflection of the interest-rate relationship between the two currencies, covered next.

## Interest-Rate Differentials Drive the Forward Rate

As covered in the Forward Pricing lesson, covered interest rate parity ties the forward FX rate directly to the gap between the two currencies' risk-free interest rates: the currency with the higher interest rate trades at a forward discount, and the currency with the lower rate trades at a forward premium, precisely so that borrowing in one currency and lending in the other, hedged with a forward, can never produce a riskless profit.

## Forward Points: Premium or Discount

FX forward rates are often quoted not as an outright rate but as "forward points" — the difference to add to or subtract from the spot rate to get the forward rate. Positive forward points mean the currency is at a forward premium (its forward rate is above spot); negative points mean a forward discount (below spot) — directly reflecting which side of the interest-rate differential that currency sits on.

## Example

A corporate treasurer comparing forward quotes from two different banks for the same currency pair and maturity date should expect them to land very close to each other, since both banks are pricing off the same observable interest-rate gap — a forward rate wildly out of line with that relationship would be exactly the kind of arbitrage opportunity the cost-of-carry framework says shouldn't persist. That interest-rate gap is what actually produces the quote the treasurer sees: with U.S. rates above euro rates, covered interest rate parity says the euro should trade at a forward premium — a spot rate of $1.08 per euro alongside a six-month forward of $1.10, say, with the $0.02 gap reflecting the rate differential itself, not a bank's forecast that the euro will actually be worth $1.10 in six months.

# Quiz

1. What is an FX forward?
   - [x] An agreement between two parties to exchange one currency for another at a fixed rate on a future date
   - A contract that guarantees a currency's spot rate will never change
   - A loan denominated in a foreign currency
   - A type of futures contract that can only be traded on an exchange
   > An FX forward is the currency-market application of the same basic forward contract idea, with an exchange rate playing the role of the delivery price.

2. What does the gap between the spot rate and the forward rate actually reflect?
   - [x] The interest-rate differential between the two currencies, not a market prediction of the future spot rate
   - A guaranteed forecast of where the spot rate will be on the delivery date
   - A fee charged by the bank quoting the forward
   - The gap is always exactly zero for any currency pair
   > Covered interest rate parity ties the spot-forward gap to the interest-rate differential between the two currencies, not to a directional forecast.

3. Under covered interest rate parity, which currency trades at a forward discount?
   - [x] The currency with the higher interest rate
   - The currency with the lower interest rate
   - Whichever currency is more widely traded
   - Neither currency ever trades at a discount
   > The higher-interest-rate currency trades at a forward discount, and the lower-interest-rate currency at a forward premium, so that a hedged interest-rate arbitrage can't produce a riskless profit.

4. What do positive forward points indicate?
   - [x] The currency is at a forward premium — its forward rate is above the spot rate
   - The currency is at a forward discount
   - The spot and forward rates are identical
   - The currency cannot be hedged with a forward
   > Forward points are added to or subtracted from the spot rate to get the forward rate — positive points mean a forward premium (forward rate above spot).

5. If U.S. rates are higher than euro rates, and spot is $1.08/euro, what would covered interest rate parity predict about the six-month forward rate?
   - [x] The euro trades at a forward premium, so the forward rate is above $1.08 (e.g., $1.10)
   - The euro trades at a forward discount, so the forward rate is below $1.08
   - The forward rate must be exactly $1.08
   - Interest rates have no effect on the forward rate
   > With U.S. rates higher than euro rates, the euro (the lower-rate currency) trades at a forward premium to the dollar, meaning more dollars per euro forward than spot.
