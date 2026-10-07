---
slug: futures-valuing-an-existing-forward
---

# Quiz

1. {#bk1} [calc] A long forward on 10,000 bushels of wheat has a delivery price of $6.50. A new forward with the same remaining 3 months now costs $7, and the discount rate is 4%. What is the long position worth today?
   - $5,000
   - [x] $4,950
   - −$4,950
   - $5,050
   > ($7 − $6.50) × 10,000 = $5,000 at maturity, discounted at 4% for 0.25 years: $4,950.

2. {#bk2} [calc] A long forward on 1,000 barrels of oil has a delivery price of $80. A new forward with the same remaining 6 months now costs $76, and the discount rate is 5%. What is the long position worth today?
   - −$4,000
   - $3,901
   - −$4,101
   - [x] −$3,901
   > ($76 − $80) × 1,000 = −$4,000 at maturity, discounted at 5% for 0.5 years: −$3,901.

3. {#bk3} [calc] A long forward on 100 ounces of gold has a delivery price of $1,900. A new forward with the same remaining 12 months now costs $1,960, and the discount rate is 3%. What is the long position worth today?
   - $6,000
   - [x] $5,823
   - −$5,823
   - $6,183
   > ($1,960 − $1,900) × 100 = $6,000 at maturity, discounted at 3% for 1 years: $5,823.

4. {#bk4} [calc] A mill is long a forward for 10,000 bushels at $6.50. A new 3-month forward now costs $7.00 and the rate is 4%. What is the short side's position worth?
   - $4,950
   - $5,000
   - [x] −$4,950
   - $0
   > The long is worth ($7.00 − $6.50) × 10,000 × e^(−0.04 × 0.25) = $4,950. The short is the mirror image, −$4,950.

5. {#bk5} [calc] A long forward on 1,000 barrels has a delivery price of $82. A new forward with the same 6 months left costs $78 and the rate is 5%. What is the long worth?
   - [x] −$3,901
   - $3,901
   - −$4,000
   - −$7,802
   > ($78 − $82) × 1,000 = −$4,000, discounted at 5% for 6 months: −$4,000 × e^(−0.025) = −$3,901.

6. {#bk6} [calc] A forward is struck at the current forward price of $80, with no time yet passed. What is its value at signing?
   - $80
   - The present value of $80
   - [x] $0
   - $8
   > At signing the delivery price equals the forward price, so the value is zero to both sides.

7. {#bk7} [calc] A long forward on 100 ounces of gold has a delivery price of $1,900. A new 1-year forward costs $1,960 and the rate is 3%. What is the long worth?
   - [x] $5,823
   - $6,000
   - $6,180
   - $5,000
   > ($1,960 − $1,900) × 100 = $6,000, discounted for 1 year at 3%: $6,000 × e^(−0.03) = $5,823.

8. {#bk8} Why is an existing forward usually not worth zero after it has been signed?
   - Forward contracts always gain value over time
   - [x] The spot price and cost of carry change, so today's forward price for the remaining term drifts away from the original delivery price
   - The exchange adjusts the value daily to keep it at zero
   - Both parties pay a premium each month
   > A forward starts at zero value because the delivery price equals the forward price. Afterwards, the value is roughly the present value of the gap between today's forward price and the original price.

9. {#bk9} How does valuing an existing forward differ from pricing a new one?
   - Pricing is done at maturity and valuing at signing
   - They are the same calculation
   - Valuing sets the delivery price and pricing sets the quantity
   - [x] Pricing sets the delivery price so the value is zero at signing, while valuing measures what the contract is worth later
   > Pricing answers 'what price makes this worth nothing to either side today'. Valuing answers 'what is this contract worth now, given a price already agreed'.
