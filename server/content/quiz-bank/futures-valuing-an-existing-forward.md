---
slug: futures-valuing-an-existing-forward
---

# Quiz

1. {#q1} What question does "valuing an existing forward" answer, as distinct from forward pricing?
   - What the contract's delivery price should be set at, for it to have zero value at signing
   - [x] What the contract is actually worth now to whoever holds it, after time has passed since signing
   - Whether the contract should be cancelled
   - How much collateral the exchange requires
   > Forward pricing sets the fair delivery price at inception; valuing an existing forward asks what that already-signed contract is worth partway through its life.

2. {#q2} Why does an existing forward's value drift away from zero over time?
   - [x] Because the underlying's spot price and cost of carry keep changing after the delivery price was fixed at inception
   - Forward contracts always keep a value of exactly zero throughout their life
   - Because the contract's delivery price changes automatically every day
   - Because forwards are marked to market daily like futures
   > The delivery price is locked in at signing, but the market's own forward price for a new, equivalent contract keeps moving with spot and financing costs, creating a gap that gives the existing contract real value.

3. {#q3} What does it mean if a long forward position's current value is positive?
   - [x] Today's forward price for a new, equivalent contract is now higher than the original delivery price locked in at inception
   - The contract has already been physically settled
   - The holder must immediately pay additional margin
   - The underlying asset has been delisted
   > A long forward gains value when the market's current forward price rises above the original delivery price — the holder is now locked into buying below today's equivalent market rate.

4. {#q4} Why would a bank need to value an existing forward contract mid-life?
   - [x] To agree on a fair price before unwinding or assigning the contract early, or to mark the position on its books
   - Forwards never need to be valued once they're signed
   - Only to determine the original delivery price
   - To calculate the underlying commodity's storage cost
   > Marking a position on the books, or agreeing a fair unwind price before maturity, both require knowing the contract's current value, not just its original delivery price.

5. {#q5} How does a forward's value accumulation compare to a future's daily mark-to-market?
   - [x] A forward's value accumulates but isn't settled until maturity, while a future settles that same kind of value in cash every day
   - They are identical — forwards also settle in cash daily
   - A forward never accumulates any value at all
   - A future never accumulates value between settlements
   > The same underlying idea — value building up as the market forward price moves away from the locked-in price — is what a future actually pays out daily via mark-to-market, whereas a forward simply accumulates it unrealized until the end.

6. {#q6} [calc] The mill holds a long forward at $6.50 on 10,000 bushels with three months left, and a new three-month forward is quoted at $7.00. At a 4% financing rate, what is the mill's contract worth?
   - Nothing, since the forward has no upfront cost
   - $5,000 exactly
   - [x] About $4,950
   - About -$4,950
   > The contract will pay ($7.00 - $6.50) × 10,000 = $5,000 at maturity, and discounting that for three months at 4% gives about $4,950.

7. {#q7} What does the merchant on the other side of that forward record?
   - A $4,950 asset
   - [x] A $4,950 liability, since the contract is worth that much less to the short
   - Nothing, since only the long values the contract
   - A $5,000 receivable
   > A forward is zero-sum, so whatever the long's contract is worth, it is worth the negative of that to the short.

8. {#bk1} [calc] A long forward on 10,000 bushels of wheat has a delivery price of $6.50. A new forward with the same remaining 3 months now costs $7, and the discount rate is 4%. What is the long position worth today?
   - $5,000
   - [x] $4,950
   - −$4,950
   - $5,050
   > ($7 − $6.50) × 10,000 = $5,000 at maturity, discounted at 4% for 0.25 years: $4,950.

9. {#bk2} [calc] A long forward on 1,000 barrels of oil has a delivery price of $80. A new forward with the same remaining 6 months now costs $76, and the discount rate is 5%. What is the long position worth today?
   - −$4,000
   - $3,901
   - −$4,101
   - [x] −$3,901
   > ($76 − $80) × 1,000 = −$4,000 at maturity, discounted at 5% for 0.5 years: −$3,901.

10. {#bk3} [calc] A long forward on 100 ounces of gold has a delivery price of $1,900. A new forward with the same remaining 12 months now costs $1,960, and the discount rate is 3%. What is the long position worth today?
   - $6,000
   - [x] $5,823
   - −$5,823
   - $6,183
   > ($1,960 − $1,900) × 100 = $6,000 at maturity, discounted at 3% for 1 years: $5,823.

11. {#bk4} [calc] A mill is long a forward for 10,000 bushels at $6.50. A new 3-month forward now costs $7.00 and the rate is 4%. What is the short side's position worth?
   - $4,950
   - $5,000
   - [x] −$4,950
   - $0
   > The long is worth ($7.00 − $6.50) × 10,000 × e^(−0.04 × 0.25) = $4,950. The short is the mirror image, −$4,950.

12. {#bk5} [calc] A long forward on 1,000 barrels has a delivery price of $82. A new forward with the same 6 months left costs $78 and the rate is 5%. What is the long worth?
   - [x] −$3,901
   - $3,901
   - −$4,000
   - −$7,802
   > ($78 − $82) × 1,000 = −$4,000, discounted at 5% for 6 months: −$4,000 × e^(−0.025) = −$3,901.

13. {#bk6} [calc] A forward is struck at the current forward price of $80, with no time yet passed. What is its value at signing?
   - $80
   - The present value of $80
   - [x] $0
   - $8
   > At signing the delivery price equals the forward price, so the value is zero to both sides.

14. {#bk7} [calc] A long forward on 100 ounces of gold has a delivery price of $1,900. A new 1-year forward costs $1,960 and the rate is 3%. What is the long worth?
   - [x] $5,823
   - $6,000
   - $6,180
   - $5,000
   > ($1,960 − $1,900) × 100 = $6,000, discounted for 1 year at 3%: $6,000 × e^(−0.03) = $5,823.

15. {#bk8} Why is an existing forward usually not worth zero after it has been signed?
   - Forward contracts always gain value over time
   - [x] The spot price and cost of carry change, so today's forward price for the remaining term drifts away from the original delivery price
   - The exchange adjusts the value daily to keep it at zero
   - Both parties pay a premium each month
   > A forward starts at zero value because the delivery price equals the forward price. Afterwards, the value is roughly the present value of the gap between today's forward price and the original price.

16. {#bk9} How does valuing an existing forward differ from pricing a new one?
   - Pricing is done at maturity and valuing at signing
   - They are the same calculation
   - Valuing sets the delivery price and pricing sets the quantity
   - [x] Pricing sets the delivery price so the value is zero at signing, while valuing measures what the contract is worth later
   > Pricing answers 'what price makes this worth nothing to either side today'. Valuing answers 'what is this contract worth now, given a price already agreed'.
