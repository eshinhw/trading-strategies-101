---
slug: fx-hedging-currency-risk
title: Hedging Currency Risk
summary: Companies and investors with foreign-currency exposure can lock in an exchange rate today with a forward contract, trading away the chance of a favorable move for certainty about what they will actually receive or pay.
---

## Where Currency Exposure Comes From

A business has transaction exposure when it will receive or pay a foreign currency at a known future date, like an exporter waiting on a euro invoice. An investor has exposure when they own assets priced in another currency: a U.S. investor holding European stocks earns the stocks' return in euros, and then also gains or loses depending on how the euro moves against the dollar. In both cases a change in the exchange rate changes the home-currency outcome even if nothing else happens.

## Hedging with a Forward Contract

The most common tool is the forward contract, which fixes an exchange rate today for a currency exchange on a future date. An exporter expecting euros in three months can agree now to sell those euros at a set rate, so the dollar amount it will receive is known in advance no matter where EUR/USD ends up. The forward contract is explained in detail in the Forwards course.

## What Hedging Costs, or Earns

A forward rate isn't the same as today's spot rate: as covered in the interest rate parity lesson, it differs from spot by an amount tied to the interest rate difference between the two currencies. A hedger who sells a currency forward back into a higher-interest-rate currency earns that difference, while one who hedges into a lower-interest-rate currency pays it. So the cost of a hedge isn't a fee, it's built into the forward price and can be a gain or a loss depending on the rate gap.

## Full or Partial, Forward or Option

A hedge doesn't have to cover the whole exposure. Companies often hedge only part of what they expect to receive, or only the portion they're most sure about, to leave room for benefit if the rate moves their way. An option can also provide protection while keeping the upside, but the buyer pays a premium up front for it, while a forward has no upfront premium and gives up the upside completely.

## Example

A U.S. exporter expects €1,000,000 in three months. EUR/USD spot is 1.1000.

- Forward rate to sell euros in three months: 1.1055
- Locked-in dollars: 1,000,000 × 1.1055 = $1,105,500

**EUR/USD falls to 1.0500**

$$
\text{Unhedged: } 1{,}000{,}000 \times 1.0500 = \$1{,}050{,}000
$$

$$
\$1{,}105{,}500 - \$1{,}050{,}000 = \boxed{+\$55{,}500 \text{ saved by the hedge}}
$$

**EUR/USD rises to 1.1500**

$$
\text{Unhedged: } 1{,}000{,}000 \times 1.1500 = \$1{,}150{,}000
$$

$$
\$1{,}105{,}500 - \$1{,}150{,}000 = -\$44{,}500 \text{ given up}
$$

The exporter receives $1,105,500 in every case. It gives up the chance of the extra $44,500 in exchange for certainty about what it will receive.

# Quiz

1. What is transaction exposure?
   - [x] The risk that an exchange rate change alters the home-currency value of a foreign-currency amount you will receive or pay at a known future date
   - The risk that a stock exchange closes
   - The fee charged by a bank for exchanging currency
   - The risk of holding only your home currency
   > Transaction exposure comes from future foreign-currency receipts or payments, whose home-currency value changes when the exchange rate moves.

2. A U.S. investor owns European stocks. Besides the stocks' own return, what else affects the investor's dollar result?
   - Nothing, the stock return is all that matters
   - The investor's home-country tax rate only
   - [x] The movement of the euro against the dollar
   - The color of the stock certificates
   > Because the stocks are priced in euros, the investor's dollar return combines the stock return with the change in EUR/USD.

3. How does a forward contract hedge currency risk?
   - It guarantees the exchange rate will rise
   - It removes the need to ever convert currency
   - It pays a dividend when the rate falls
   - [x] It fixes an exchange rate today for a conversion on a future date, so the home-currency amount is known in advance
   > A forward locks in the rate, which makes the future amount certain regardless of where the market ends up.

4. Why can hedging produce a gain or a cost even with no change in the exchange rate?
   - Banks randomly add fees to forward trades
   - [x] The forward rate differs from spot by an amount tied to the interest rate difference between the two currencies
   - Hedging always loses money
   - Hedging always makes money
   > Forward prices embed the interest rate gap between the currencies, so hedging into a higher-rate currency earns that gap and hedging into a lower-rate currency pays it.

5. An exporter locks in a rate with a forward, and the currency then moves in its favor. What happens?
   - The exporter receives the better market rate automatically
   - The forward contract is cancelled
   - [x] The exporter still gets the locked-in rate, giving up the potential extra gain in return for certainty
   - The exporter owes the bank double
   > A forward removes both downside and upside, which is why some companies hedge only part of an exposure or use options to keep some benefit.

6. {#calc1} [calc] A U.S. exporter will receive €500,000 and sells it forward at 1.1000. At maturity EUR/USD is 1.0600. How much does the hedge save compared with not hedging?
   - [x] $20,000
   - $30,000
   - $550,000
   - $2,000
   > Hedged proceeds are 500,000 × 1.10 = $550,000, against 500,000 × 1.06 = $530,000 unhedged, a saving of $20,000.

7. {#calc2} [calc] EUR/USD spot is 1.1000 and the three-month forward is 1.1055. What are the forward points, and the forward premium as an annual rate?
   - 55 pips, about 0.5% a year
   - 5.5 pips, about 2.0% a year
   - [x] 55 pips, about 2.0% a year
   - 55 pips, about 8.0% a year
   > The gap is 0.0055 = 55 pips. As a rate, 0.0055 / 1.1000 = 0.5% for three months, or about 2.0% a year.
