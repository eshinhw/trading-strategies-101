---
slug: futures-forward-rate-agreements
title: Forward Rate Agreements (FRAs)
summary: A forward contract on an interest rate itself — locking in a borrowing or lending rate for a future period without any principal actually changing hands.
---

## What an FRA Is

A forward rate agreement (FRA) is a forward contract where two parties agree today on an interest rate that will apply to a notional principal amount over a specified future period — for example, a 3-month rate starting 6 months from now. Unlike an actual loan, the notional amount is never exchanged; it exists purely to calculate the settlement payment.

## How Settlement Works

At the FRA's settlement date, the difference between the agreed fixed rate and the actual reference rate observed at that time, such as SOFR, is calculated on the notional amount, and one party pays the other that difference in cash. If the realized rate ends up higher than the agreed rate, the party who locked in the fixed rate profits, since they avoided paying the higher rate that materialized.

## Hedging a Future Borrowing or Lending Rate

A company that knows it will need to borrow money in six months, for a three-month term, can use an FRA to lock in today's rate for that future period, protecting against the risk that rates rise before the loan is actually taken out. The FRA settlement payment offsets the difference between the rate they locked in and the rate they'd actually pay on the loan when it's drawn.

## FRAs vs. Interest Rate Futures

FRAs serve a similar purpose to the exchange-traded interest rate futures covered elsewhere in this course, but FRAs are private, over-the-counter contracts, custom-tailored between two parties in size and dates, carrying the same counterparty-risk tradeoff as any other forward. An interest rate future is the standardized, exchange-cleared, daily-margined version of essentially the same underlying idea.

## Example

A corporate treasurer knows the company will issue a $50 million bond in three months but is worried benchmark rates could climb before pricing, raising the company's borrowing cost. Rather than wait and hope, the treasurer locks in today's 5% rate for that period with an FRA. If rates do climb to 5.75% by the time the bond actually prices, the FRA pays the company roughly the 0.75-percentage-point gap applied to the $50 million notional for that period — offsetting the higher coupon the bond ends up carrying and leaving the company's effective borrowing cost close to the 5% it locked in three months earlier.

# Quiz

1. What does an FRA let two parties do?
   - Exchange a notional principal amount immediately
   - [x] Agree today on an interest rate that will apply to a notional amount over a specified future period, without exchanging the notional itself
   - Guarantee that interest rates will never change
   - Buy and sell a physical commodity
   > An FRA locks in a future interest rate on a notional amount used only to calculate settlement — the notional itself is never actually loaned or exchanged.

2. How is an FRA settled?
   - [x] The difference between the agreed fixed rate and the actual reference rate is calculated on the notional amount, and paid in cash by one party to the other
   - The full notional amount is physically delivered
   - Both parties simply walk away with no payment
   - Settlement only happens if interest rates stay exactly the same
   > FRA settlement is a cash payment based on the gap between the locked-in rate and the realized reference rate, applied to the notional — not a physical exchange of principal.

3. How would a company use an FRA to hedge a future borrowing need?
   - [x] By locking in today's rate for the future borrowing period, so a settlement payment offsets a higher realized rate when the loan is actually taken out
   - FRAs cannot be used to hedge borrowing costs
   - By borrowing the money immediately instead of waiting
   - By canceling the planned loan entirely
   > Locking in a rate today via an FRA means that if rates rise before the loan is drawn, the FRA settlement payment offsets the higher cost — the same hedging logic used elsewhere in this course.

4. How does an FRA differ from an exchange-traded interest rate future?
   - [x] An FRA is a private, over-the-counter, custom-tailored contract carrying counterparty risk, while a future is standardized, exchange-cleared, and daily-margined
   - They are identical in every respect
   - FRAs are always exchange-traded, never private
   - Interest rate futures cannot be used to hedge borrowing costs
   > FRAs and interest rate futures serve a similar hedging purpose, but an FRA is a bespoke bilateral forward while a future is the standardized, clearinghouse-guaranteed version of the same idea.

5. Why is the notional amount in an FRA never actually exchanged?
   - [x] Because it exists only to calculate the cash settlement payment, not as a real loan
   - Because FRAs are illegal in most jurisdictions
   - Because the notional amount is always zero
   - Because FRAs always involve physical delivery of a commodity instead
   > The notional is purely a reference amount for calculating the interest-rate-difference settlement — no actual loan or deposit of that principal ever takes place between the two parties.
