---
slug: why-forward-contracts-exist
title: Why Forward Contracts Exist
summary: Producers, consumers, and businesses often know they will buy or sell something later but not what it will cost, and a private, tailor-made agreement to fix the price today is the simplest way to remove that uncertainty.
---

## The Problem: Uncertainty About a Future Transaction

Many businesses can predict that they will make a transaction long before they know the price. A farmer knows roughly how much wheat the harvest will produce, a bakery knows it will need wheat to bake with, and an importer knows an invoice in a foreign currency will fall due in 90 days. In each case the quantity and timing are clear, but the price or exchange rate on that future date is not, and a large move in either direction can turn a profitable business into a losing one.

## The Solution: Agree on the Price Today

A forward contract removes that uncertainty by letting two parties agree today on the price for a transaction that will happen later. Both sides give something up: whichever way the market moves, one of them would have been better off waiting, but each gets certainty about what they will receive or pay. For a business whose goal is to run its operations rather than to bet on prices, that certainty is often worth more than the chance of a better price.

## Why Tailor-Made Matters

A forward is negotiated privately between two specific parties, so it can be built around the exact quantity, delivery date, quality, and location that matches the exposure being hedged. A farmer with 5,000 bushels arriving in October doesn't want to be forced into a contract sized for 10,000 bushels in September. That flexibility is the main reason forwards remain in use today, and the price of it is that each party depends on the other to perform and can't easily exit, as covered later in this course.

## Where Forwards Fit Among Derivatives

Agreements to deliver something later at a price set today are among the oldest financial contracts, since merchants made them long before organized exchanges existed. A forward is the simplest derivative, and later instruments were built on it: futures standardized the contract and routed it through an exchange and clearinghouse to reduce counterparty risk and make exiting easy, and options added the choice of whether to go through with the deal. Understanding why a forward exists makes it easier to see what each of those later instruments was designed to fix.

## Example

A wheat farmer and a bakery agree a price today for wheat delivered at harvest, six months from now.

- Quantity: 5,000 bushels
- Forward price: $6.00 per bushel
- Locked-in value: 5,000 × $6.00 = $30,000

At harvest, the outcome depends on the market price:

- Wheat at $7.00: the bakery pays $30,000 instead of $35,000 and saves $5,000. The farmer receives $30,000 instead of $35,000 and gives up $5,000.
- Wheat at $5.00: the bakery pays $30,000 instead of $25,000 and overpays $5,000. The farmer receives $30,000 instead of $25,000 and is protected by $5,000.

Either way, the amount that moves between them is:

$$
|S_T - \$6.00| \times 5{,}000 = \$1.00 \times 5{,}000 = \$5{,}000
$$

Both sides pay or receive exactly $6.00 a bushel whatever wheat does, so neither one's business depends on the harvest price.

# Quiz

1. What kind of uncertainty does a forward contract mainly address?
   - Uncertainty about whether a transaction will happen at all
   - [x] Uncertainty about the price or exchange rate of a transaction a business knows it will make later
   - Uncertainty about the weather
   - Uncertainty about which exchange to use
   > A forward helps when quantity and timing are known but the future price is not, by fixing the price today.

2. What does each party give up when it enters a forward?
   - Nothing, since both sides always benefit
   - [x] The chance to benefit if the market moves in its favor, in exchange for certainty about the price
   - The right to ever trade the asset again
   - Ownership of its business
   > Whichever way the price moves, one party would have done better by waiting, and both accept that in return for a known price.

3. Why are forwards still used even though standardized futures exist?
   - Futures are illegal for businesses
   - Forwards are always cheaper
   - [x] A forward can be tailored to the exact quantity, date, quality, and location of the exposure being hedged
   - Forwards have no risk
   > Because a forward is negotiated privately, it can match a specific exposure exactly, which a standardized contract can't.

4. What is the main trade-off of that flexibility?
   - Forwards must be traded on an exchange
   - There is no flexibility at all
   - There is no trade-off
   - [x] Each party relies on the other to perform and can't easily exit the contract early
   > A private contract carries counterparty risk and is harder to close out than an exchange-traded contract.

5. How did futures and options relate to the forward contract historically?
   - Futures and options came before forwards
   - [x] Futures standardized and exchange-cleared the forward idea, and options added the choice of whether to go through with the deal
   - They are the same instrument
   - Forwards were created to replace options
   > The forward is the simplest derivative, and later instruments were built to address its limits in counterparty risk, exit, and optionality.

6. {#calc1} [calc] A farmer agrees a forward at $6.25 for 8,000 bushels, and the harvest-time price is $5.60. How much better off is the farmer than selling at the market price?
   - [x] $5,200
   - $50,000
   - $44,800
   - $520
   > The forward fixes $6.25 × 8,000 = $50,000, against 8,000 × $5.60 = $44,800 in the market, so the farmer is $5,200 better off.
