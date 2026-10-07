---
slug: structured-assets-mortgage-backed-securities
title: Mortgage-Backed Securities and Prepayment Risk
summary: How a pool of mortgages becomes a tradable security, and the unique risk that comes from homeowners being free to repay their mortgage early.
---

## What an MBS Is

A mortgage-backed security (MBS) is backed by a pool of residential or commercial mortgages, where investors receive a pass-through share of the pool's combined interest and principal payments as homeowners make their monthly mortgage payments.

## Pass-Throughs vs. Structured MBS

The simplest MBS is a plain pass-through, where every investor receives a pro-rata share of the pool's cash flows. More complex, structured MBS split the pool's cash flows into multiple tranches, similar to a CDO, that prioritize principal or interest differently, or absorb prepayment risk differently across the structure.

## Prepayment Risk

Unlike a corporate bond, a mortgage borrower can pay off their loan early at any time, whether by refinancing, selling the home, or simply paying down the balance ahead of schedule. This option to prepay is the defining risk of MBS investing, since it returns an investor's principal early — often right when interest rates have fallen and reinvestment options have gotten worse.

## What Drives Prepayment Speed

The biggest driver of prepayment speed is the gap between a pool's existing mortgage rates and current market mortgage rates. When rates fall well below what homeowners in the pool are paying, refinancing accelerates and prepayments speed up; when rates rise, homeowners are less likely to move or refinance, and prepayments slow down.

## Example

An investor buys a $100 million pool of mortgages that were originated when rates were 6%.

- Coupon: 6%, so annual interest is $6 million
- Expected life: about 10 years

**Rates fall to 4%, and homeowners refinance**

- Share of the pool repaid in one year: 40%, which is $40 million

$$
\$40{,}000{,}000 \text{ comes back early at full face value}
$$

**Reinvesting at the new rate**

$$
\text{Income lost each year} = \$40{,}000{,}000 \times (6\% - 4\%) = \boxed{\$800{,}000}
$$

**The effect on price**

A non-callable 10-year 6% bond is worth more when yields fall to 4%:

$$
\text{Price per } \$100 \text{ at a 4\% yield} = \$116.35
$$

A mortgage pool's price is capped near par because homeowners can repay at 100. Say it rises only to about 103.

$$
\text{Gain: } 116.35 - 100 = 16.35 \text{ points} \quad\text{vs.}\quad 103 - 100 = 3 \text{ points}
$$

The investor gets little of the price gain when rates fall, and still absorbs the full loss when rates rise and prepayments slow. That is why MBS pricing has to model how prepayment speed reacts to rates, not just the coupon and maturity.

# Quiz

1. What backs a mortgage-backed security?
   - A single homeowner's mortgage
   - [x] A pool of residential or commercial mortgages, whose combined payments flow through to investors
   - A government guarantee with no underlying mortgages
   - A pool of unrelated corporate bonds
   > An MBS is backed by a pool of many mortgages, and investors receive a share of that pool's combined interest and principal payments.

2. What distinguishes a plain pass-through MBS from a structured MBS?
   - [x] A pass-through gives every investor a pro-rata share of the pool's cash flows, while a structured MBS splits cash flows into multiple differentiated tranches
   - A pass-through has no underlying mortgages at all
   - A structured MBS always has a lower coupon than a pass-through
   - There is no meaningful difference between the two
   > A pass-through's investors all get an identical, proportional slice of the pool, while a structured MBS tranches those same cash flows into securities with different priorities and risk profiles.

3. What is prepayment risk?
   - The risk that a homeowner never makes any mortgage payment
   - [x] The risk that a borrower pays off their mortgage early, returning principal to investors sooner than expected, often when reinvestment options are worse
   - The risk that mortgage rates never change
   - The risk that an MBS cannot legally be sold
   > Because mortgage borrowers can prepay at any time, an MBS investor's principal can be returned earlier than expected — commonly right when rates have fallen and reinvesting that cash is less attractive.

4. What typically happens to prepayment speed when market mortgage rates fall well below a pool's existing rates?
   - Prepayments slow down significantly
   - [x] Prepayments speed up, as more homeowners refinance into the lower available rate
   - Prepayment speed is completely unaffected by rate changes
   - All homeowners in the pool default simultaneously
   > A large gap between a pool's existing mortgage rates and lower current market rates gives homeowners a strong incentive to refinance, accelerating prepayment speed.

5. Why is an MBS investor's principal return considered riskier to time than a plain corporate bond's?
   - [x] Because a mortgage borrower has the option to prepay at any time, unlike a corporate bond issuer who generally cannot repay early without penalty
   - Because MBS never pay any interest at all
   - Because corporate bonds also allow unlimited early prepayment
   - Because MBS principal is never actually repaid
   > The borrower's prepayment option is what makes MBS cash flow timing uncertain in a way a typical corporate bond, without an equivalent early-repayment option, is not.

6. {#calc1} [calc] A $50 million mortgage pool pays 6%. After rates fall, 30% is repaid early and reinvested at 4%. How much annual income is lost?
   - $900,000
   - [x] $300,000
   - $600,000
   - $3,000,000
   > The prepaid amount is $15M, and the rate falls from 6% to 4%, so the lost income is $15M × 2% = $300,000 a year.

7. {#calc2} [calc] An $80 million pool at 5.5% sees 25% prepaid, and the cash is reinvested at 4.0%. How much annual income is lost?
   - $1.1 million
   - $800,000
   - $3 million
   - [x] $300,000
   > The prepaid amount is $20M, and 5.5% − 4.0% = 1.5%, so $20M × 1.5% = $300,000.
