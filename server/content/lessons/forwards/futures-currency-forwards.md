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

A U.S. importer owes €400,000 on an invoice due in six months.

- Spot rate: $1.08 per euro
- Six-month U.S. interest rate: 5.5% a year
- Six-month euro interest rate: 1.8% a year (illustrative)

**Forward rate from interest rate parity**

$$
F = S \times \frac{1 + r_{\$}\,T}{1 + r_{€}\,T}
$$

$$
F = \$1.08 \times \frac{1 + 0.055 \times 0.5}{1 + 0.018 \times 0.5} = \$1.0998 \approx \boxed{\$1.10}
$$

The $0.02 premium over spot reflects the interest gap. It is not a forecast that the euro will rise.

**The hedge**

The importer locks in $1.10, so the invoice costs €400,000 × $1.10 = $440,000.

- Spot at $1.15: unhedged cost is $460,000, so the forward saves $20,000.
- Spot at $1.05: unhedged cost is $420,000, so the forward costs $20,000 extra.

Either way the importer pays $440,000, which is the number it budgeted.

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

6. Spot is $1.08 per euro, the U.S. six-month rate is 5.5% and the euro rate is 1.8%. About what is the six-month forward rate?
   - $1.08
   - $1.04
   - [x] $1.10
   - $1.16
   > Covered interest parity gives $1.08 × (1 + 0.0275) / (1 + 0.009), about $1.0998, a forward premium because dollar rates are higher.

7. A U.S. importer locks in $1.10 on a €400,000 invoice, and the spot rate at maturity is $1.05. What is the result of the hedge?
   - It saves $20,000 compared with not hedging
   - [x] It costs $20,000 more than not hedging, but the cost is fixed at $440,000
   - It loses the whole $440,000
   - It breaks even exactly
   > Unhedged the invoice would cost $420,000, so the hedge costs $20,000 extra, which is the price of certainty in the same way as the mill's forward.
