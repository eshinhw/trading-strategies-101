---
slug: fixed-income-duration
---

# Quiz

1. {#q1} What does a bond's duration of 7 approximately tell you?
   - [x] The bond's price is expected to move roughly 7% for each 1-percentage-point change in interest rates
   - The bond matures in exactly 7 months
   - The bond pays a 7% coupon
   - The bond has 7 different coupon payment dates remaining
   > Duration translates directly into an expected percentage price change per 1-point move in rates — a duration of 7 means roughly a 7% move for a 1-point rate change.

2. {#q2} How does duration differ from a bond's simple time to maturity?
   - [x] Duration is a present-value-weighted average of when all the bond's cash flows arrive, not just the final maturity date
   - Duration and time to maturity are always exactly identical
   - Duration only considers the bond's final principal repayment
   - Duration has no relationship to a bond's cash flow timing
   > Duration weights every cash flow's timing by its present value, so a bond returning value earlier (larger coupons) has a duration below its raw maturity date.

3. {#q3} Why does a zero-coupon bond have the highest duration for a given maturity?
   - [x] All of its value is returned in a single, far-off principal payment, with no earlier coupons pulling the weighted average down
   - Zero-coupon bonds are not sensitive to interest rates at all
   - Zero-coupon bonds always mature faster than coupon bonds
   - Duration does not apply to zero-coupon bonds
   > With no coupons returning value along the way, a zero-coupon bond's entire value depends on that one distant principal payment, maximizing its duration relative to a coupon-paying bond of the same maturity.

4. {#q4} Why is duration more useful than raw maturity for comparing bonds' rate sensitivity?
   - [x] Two bonds with the same maturity but different coupons can have meaningfully different rate sensitivity, which duration captures and maturity alone does not
   - Maturity and duration always produce identical comparisons
   - Duration ignores coupon size entirely, just like maturity does
   - Duration is only relevant for bonds trading at a premium
   > Because duration accounts for coupon size and timing, not just the final maturity date, it gives a more accurate, comparable measure of actual interest-rate sensitivity across different bonds.

5. {#q5} How is duration used when constructing a hedge for a bond position?
   - [x] By matching the dollar duration of the hedging instrument to the dollar duration of the exposure being hedged
   - By simply matching the maturity dates of the two instruments, ignoring duration
   - Duration has no practical use in hedging
   - By matching the coupon rates of the two instruments exactly
   > Sizing a hedge by dollar duration, not just maturity, is what actually matches the rate sensitivity of the hedge to the position being protected.

6. {#q6} [calc] A pension fund holds $20 million of the manufacturer's bonds, which have a modified duration of about 7.8. By roughly how much does the position change if rates rise 1 percentage point?
   - Gains about $1.56 million
   - [x] Loses about $1.56 million
   - Loses about $156,000
   - Loses about $7.8 million
   > A duration of 7.8 means about a 7.8% price drop for a 1-point rise in rates, and 7.8% of $20 million is about $1.56 million.

7. {#q7} Repricing the bond at a 6% yield shows a loss of about $1.49 million, a little less than the duration estimate. Why?
   - Duration ignores the coupon
   - [x] Duration is a straight-line estimate of a price-yield relationship that is slightly curved
   - The company made an extra coupon payment
   - Bond prices don't respond to rates over 1 point
   > The real price-yield curve bends, so the straight-line estimate overstates the loss when rates rise and understates the gain when they fall.

8. {#bk1} [calc] A bond priced at $980 has a modified duration of 7.2. If its yield rises 50 basis points, what is the approximate price change?
   - $35.28
   - $3.60
   - [x] −$35.28
   - −$0.04
   > Price change ≈ −modified duration × yield change × price = −7.2 × 0.0050 × $980 = −$35.28.

9. {#bk2} [calc] A bond priced at $1,020 has a modified duration of 4.5. If its yield rises 100 basis points, what is the approximate price change?
   - [x] −$45.90
   - $45.90
   - $4.50
   - −$0.04
   > Price change ≈ −modified duration × yield change × price = −4.5 × 0.0100 × $1,020 = −$45.90.

10. {#bk3} [calc] A bond priced at $1,000 has a modified duration of 9.8. If its yield rises 25 basis points, what is the approximate price change?
   - $24.50
   - $2.45
   - [x] −$24.50
   - −$0.02
   > Price change ≈ −modified duration × yield change × price = −9.8 × 0.0025 × $1,000 = −$24.50.

11. {#bk4} [calc] A portfolio worth $5 million has a modified duration of 6.0. What is its DV01, the dollar change for a one-basis-point move in yield?
   - $30,000
   - [x] $3,000
   - $300
   - $0
   > DV01 = duration × value × 0.0001 = 6.0 × $5,000,000 × 0.0001 = $3,000.

12. {#bk5} [calc] A portfolio worth $20 million has a modified duration of 8.5. What is its DV01, the dollar change for a one-basis-point move in yield?
   - $170,000
   - $1,700
   - $0
   - [x] $17,000
   > DV01 = duration × value × 0.0001 = 8.5 × $20,000,000 × 0.0001 = $17,000.
