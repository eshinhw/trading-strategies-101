---
slug: fixed-income-duration
title: Duration: Measuring Interest Rate Sensitivity
summary: A single number that summarizes how much a bond's price is expected to move for a given change in interest rates.
---

## What Duration Measures

Duration measures a bond's sensitivity to interest rate changes, expressed in years, but functioning as a percentage-price-change figure: a bond with a duration of 7 is expected to lose roughly 7% of its value for each 1-percentage-point rise in rates, and gain roughly 7% for each 1-point fall, all else equal.

## Why Duration Isn't Just Time to Maturity

Duration is related to, but not the same as, a bond's time to maturity — it's more precisely a weighted average of when the bond's cash flows (coupons and final principal) actually arrive, weighted by their present value. A bond that pays a large coupon early on has some of its value returned sooner, which pulls its duration below its raw maturity date.

## What Drives a Bond's Duration Higher or Lower

Longer maturity generally means higher duration, since more of the bond's value depends on a cash flow far in the future, which is more sensitive to a change in the discount rate. Lower coupons also raise duration, since more of the bond's total value sits in the single, far-off principal repayment rather than being returned steadily through coupons along the way — a zero-coupon bond has the highest duration of all, for a given maturity.

## Why Duration Matters for Portfolio Construction

Duration is the tool that lets a bond portfolio manager size a position, compare bonds of different maturities and coupons on a common basis, or construct a hedge, by matching the dollar duration of a hedging instrument to the dollar duration of the exposure being hedged, rather than relying on maturity alone, which can be a misleading measure of actual rate sensitivity.

## In Practice

A pension fund has to pay out a known stream of benefits stretching decades into the future, so its manager builds a bond portfolio whose duration is deliberately matched to the duration of those future payments. If rates move, the value of the bonds held and the present value of the benefits owed shift by roughly the same amount, keeping the fund's ability to meet its obligations largely insulated from swings in interest rates.

# Quiz

1. What does a bond's duration of 7 approximately tell you?
   - [x] The bond's price is expected to move roughly 7% for each 1-percentage-point change in interest rates
   - The bond matures in exactly 7 months
   - The bond pays a 7% coupon
   - The bond has 7 different coupon payment dates remaining
   > Duration translates directly into an expected percentage price change per 1-point move in rates — a duration of 7 means roughly a 7% move for a 1-point rate change.

2. How does duration differ from a bond's simple time to maturity?
   - [x] Duration is a present-value-weighted average of when all the bond's cash flows arrive, not just the final maturity date
   - Duration and time to maturity are always exactly identical
   - Duration only considers the bond's final principal repayment
   - Duration has no relationship to a bond's cash flow timing
   > Duration weights every cash flow's timing by its present value, so a bond returning value earlier (larger coupons) has a duration below its raw maturity date.

3. Why does a zero-coupon bond have the highest duration for a given maturity?
   - [x] All of its value is returned in a single, far-off principal payment, with no earlier coupons pulling the weighted average down
   - Zero-coupon bonds are not sensitive to interest rates at all
   - Zero-coupon bonds always mature faster than coupon bonds
   - Duration does not apply to zero-coupon bonds
   > With no coupons returning value along the way, a zero-coupon bond's entire value depends on that one distant principal payment, maximizing its duration relative to a coupon-paying bond of the same maturity.

4. Why is duration more useful than raw maturity for comparing bonds' rate sensitivity?
   - [x] Two bonds with the same maturity but different coupons can have meaningfully different rate sensitivity, which duration captures and maturity alone does not
   - Maturity and duration always produce identical comparisons
   - Duration ignores coupon size entirely, just like maturity does
   - Duration is only relevant for bonds trading at a premium
   > Because duration accounts for coupon size and timing, not just the final maturity date, it gives a more accurate, comparable measure of actual interest-rate sensitivity across different bonds.

5. How is duration used when constructing a hedge for a bond position?
   - [x] By matching the dollar duration of the hedging instrument to the dollar duration of the exposure being hedged
   - By simply matching the maturity dates of the two instruments, ignoring duration
   - Duration has no practical use in hedging
   - By matching the coupon rates of the two instruments exactly
   > Sizing a hedge by dollar duration, not just maturity, is what actually matches the rate sensitivity of the hedge to the position being protected.
