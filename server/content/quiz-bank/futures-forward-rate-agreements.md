---
slug: futures-forward-rate-agreements
---

# Quiz

1. {#q1} What does an FRA let two parties do?
   - Exchange a notional principal amount immediately
   - [x] Agree today on an interest rate that will apply to a notional amount over a specified future period, without exchanging the notional itself
   - Guarantee that interest rates will never change
   - Buy and sell a physical commodity
   > An FRA locks in a future interest rate on a notional amount used only to calculate settlement — the notional itself is never actually loaned or exchanged.

2. {#q2} How is an FRA settled?
   - [x] The difference between the agreed fixed rate and the actual reference rate is calculated on the notional amount, and paid in cash by one party to the other
   - The full notional amount is physically delivered
   - Both parties simply walk away with no payment
   - Settlement only happens if interest rates stay exactly the same
   > FRA settlement is a cash payment based on the gap between the locked-in rate and the realized reference rate, applied to the notional — not a physical exchange of principal.

3. {#q3} How would a company use an FRA to hedge a future borrowing need?
   - [x] By locking in today's rate for the future borrowing period, so a settlement payment offsets a higher realized rate when the loan is actually taken out
   - FRAs cannot be used to hedge borrowing costs
   - By borrowing the money immediately instead of waiting
   - By canceling the planned loan entirely
   > Locking in a rate today via an FRA means that if rates rise before the loan is drawn, the FRA settlement payment offsets the higher cost — the same hedging logic as any other forward.

4. {#q4} How does an FRA differ from an exchange-traded interest rate future?
   - [x] An FRA is a private, over-the-counter, custom-tailored contract carrying counterparty risk, while a future is standardized, exchange-cleared, and daily-margined
   - They are identical in every respect
   - FRAs are always exchange-traded, never private
   - Interest rate futures cannot be used to hedge borrowing costs
   > FRAs and interest rate futures serve a similar hedging purpose, but an FRA is a bespoke bilateral forward while a future is the standardized, clearinghouse-guaranteed version of the same idea.

5. {#q5} Why is the notional amount in an FRA never actually exchanged?
   - [x] Because it exists only to calculate the cash settlement payment, not as a real loan
   - Because FRAs are illegal in most jurisdictions
   - Because the notional amount is always zero
   - Because FRAs always involve physical delivery of a commodity instead
   > The notional is purely a reference amount for calculating the interest-rate-difference settlement — no actual loan or deposit of that principal ever takes place between the two parties.

6. {#q6} [calc] A company buys a 3×9 FRA on $50 million at 5.00%, and the reference rate is 5.75% when the period starts. What does the FRA pay it, to the nearest thousand?
   - $37,500
   - $187,500
   - [x] $182,000
   - $375,000
   > The extra interest is $50 million × 0.75% × 0.5 = $187,500, and because the FRA settles upfront it is discounted by 1.02875 to about $182,260.

7. {#q7} If the reference rate falls to 4.25% instead, what happens to the company's effective borrowing rate?
   - It falls to 4.25%
   - It rises above 5.00%
   - [x] It stays at about 5.00%, since the FRA payment it makes offsets the interest it saves
   - It becomes 0%
   > An FRA locks in the rate both ways: the company pays on the FRA when rates fall, and that payment cancels the lower interest it would otherwise have enjoyed.

8. {#bk1} [calc] A company buys a FRA on $50,000,000 at 5% for a 6-month period. At settlement the reference rate is 5.75%. What is the payment to the company, discounted to the start of the period?
   - [x] $182,260
   - $187,500
   - −$182,260
   - $375,000
   > $50,000,000 × (5.75% − 5%) × 0.5 = $187,500, divided by 1 + 5.75% × 0.5 = $182,260.

9. {#bk2} [calc] A company buys a FRA on $20,000,000 at 4% for a 3-month period. At settlement the reference rate is 3.25%. What is the payment to the company, discounted to the start of the period?
   - −$37,500
   - $37,198
   - [x] −$37,198
   - −$150,000
   > $20,000,000 × (3.25% − 4%) × 0.25 = −$37,500, divided by 1 + 3.25% × 0.25 = −$37,198.

10. {#bk3} [calc] A company buys a FRA on $10,000,000 at 6% for a 6-month period. At settlement the reference rate is 6.75%. What is the payment to the company, discounted to the start of the period?
   - [x] $36,276
   - $37,500
   - −$36,276
   - $75,000
   > $10,000,000 × (6.75% − 6%) × 0.5 = $37,500, divided by 1 + 6.75% × 0.5 = $36,276.

11. {#bk4} [calc] A company buys a 3-month FRA on $20 million at 4.00%. At settlement the 3-month reference rate is 4.60%. What is the payment to the company, discounted to the start of the period?
   - $30,000
   - $120,000
   - $118,636
   - [x] $29,659
   > $20 million × (4.60% − 4.00%) × 0.25 = $30,000, divided by 1 + 4.60% × 0.25 = 1.0115, which is $29,659.

12. {#bk5} [calc] A borrower buys a 6-month FRA on $10 million at 4.00%. At settlement the reference rate is 3.20%. How much does the FRA buyer pay, discounted to the start of the period?
   - $40,000
   - [x] $39,370
   - $80,000
   - $40,640
   > $10,000,000 × (4.00% − 3.20%) × 0.5 = $40,000, divided by 1 + 3.20% × 0.5 = 1.016, which is $39,370.

13. {#bk6} [calc] A company locks in 5.00% with an FRA and borrows at a margin of 0.50% above the reference rate. What is its effective borrowing rate?
   - 5.00%
   - 0.50%
   - 10.50%
   - [x] 5.50%
   > The FRA fixes the reference rate at 5.00%. The margin adds 0.50%, for 5.50% whatever the reference rate does.

14. {#bk7} [calc] A 3×9 FRA starts in 3 months and ends in 9 months, on a notional of $25 million. How much is one basis point worth over the period?
   - $2,500
   - [x] $1,250
   - $625
   - $250
   > The period is 6 months. One basis point is $25,000,000 × 0.0001 × 0.5 = $1,250.

15. {#bk8} [calc] A 6×9 FRA covers a 3-month period on a $40 million notional. The reference rate ends 35 basis points above the FRA rate. What is the gain for the FRA buyer, before discounting?
   - [x] $35,000
   - $140,000
   - $350,000
   - $8,750
   > $40,000,000 × 0.35% × 0.25 = $35,000.
