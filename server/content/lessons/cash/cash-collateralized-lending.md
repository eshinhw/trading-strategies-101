---
slug: cash-collateralized-lending
title: Collateralized Borrowing and Lending
summary: Why lenders often demand collateral for short-term loans, and how posting it lets a borrower access cash more cheaply than an unsecured loan would allow.
---

## Why Collateral Changes the Deal

An unsecured loan relies entirely on the lender's trust that the borrower will repay. Collateral changes that calculus: it gives the lender a specific asset to claim if the borrower defaults, which lowers the lender's risk and, in turn, the interest rate a borrower has to pay for that same loan.

## Haircuts and Margin

A lender typically advances less cash than the collateral's current market value — the gap is called a haircut. That buffer protects the lender if the collateral's value falls before it can be sold following a default, so the sale proceeds still cover what's owed.

## Common Forms of Collateral

Collateral takes many forms depending on the loan: real estate secures a mortgage, securities secure a repo or a margin loan, and inventory or receivables secure asset-based business lending. In each case, the lender's fallback claim is on that specific, identifiable asset rather than the borrower's general promise to pay.

## Short-Term Collateralized Lending in Practice

This same pattern — cash lent against securities as collateral, at a low rate because the loan is fully secured — underlies the repurchase agreement (repo) market covered later in this course: a way for holders of safe securities to borrow cash cheaply overnight, and for cash-rich lenders to earn a safe return the whole time backed by that collateral.

## Example

A borrower needs $200 quickly. Compare a pawn loan with an unsecured loan of the same size.

- Pawn loan: secured by jewelry appraised at $600
- Unsecured loan: backed only by the borrower's promise

**Loan-to-value on the pawn loan**

$$
\frac{\$200}{\$600} = 33\%
$$

**If the borrower never repays**

- Pawn lender: keeps the jewelry and resells it. Even a forced sale at 50% of appraisal ($300) covers the $200 loan, so the lender loses nothing.
- Unsecured lender: recovers $0 and loses the full $200.

$$
\text{Worst-case loss: pawn } = \$0 \quad\text{vs.}\quad \text{unsecured } = \$200
$$

The jewelry caps the lender's risk, so no credit check is needed. Collateral does the work a credit check would otherwise do.

# Quiz

1. How does posting collateral typically affect the interest rate on a loan?
   - [x] It generally lowers the rate, since the lender's risk is reduced by having a specific asset to claim on default
   - It always raises the rate
   - Collateral has no effect on the interest rate charged
   - Collateral eliminates the need for any interest at all
   > Because the lender has a fallback claim on the collateral, their risk (and the rate they need to charge to compensate for it) is lower than on an equivalent unsecured loan.

2. What is a "haircut" in the context of collateralized lending?
   - [x] Lending less cash than the collateral's current market value, as a buffer against its price falling
   - A fee charged only on unsecured loans
   - The interest rate charged on the loan
   - A penalty for repaying a loan early
   > The haircut protects the lender: if the collateral has to be sold after a default, the gap between what was lent and the collateral's value gives room for its price to have fallen.

3. Which of these is an example of collateral securing a loan?
   - [x] Real estate securing a mortgage
   - A borrower's verbal promise with no underlying asset
   - The lender's own unrelated assets
   - Collateral is never used to secure any type of loan
   > A mortgage is a classic collateralized loan — the property itself is the lender's fallback claim if the borrower fails to repay.

4. What short-term market does this lesson say the collateralized-lending pattern underlies?
   - [x] The repurchase agreement (repo) market
   - The stock market generally
   - The market for uninsured deposits only
   - Collateralized lending has no connection to any other market
   > Repo is essentially short-term, collateralized cash lending against securities — the same underlying logic covered in this lesson, applied at large scale.

5. Why can a pawn loan be issued without a credit check, according to this lesson's example?
   - [x] The lender's risk is capped by the collateral's resale value rather than the borrower's promise to repay
   - Pawn loans are always government-guaranteed
   - Pawnbrokers are legally forbidden from checking credit
   - Credit checks are unnecessary for every type of loan
   > Because the item itself secures the loan, the pawnbroker doesn't need to evaluate the borrower's creditworthiness the way an unsecured lender would.

6. {#calc1} [calc] A borrower pledges a watch appraised at $800 and receives a $240 loan. What is the loan-to-value ratio?
   - 3.3%
   - [x] 30%
   - 70%
   - 240%
   > Loan-to-value is the loan divided by the collateral's value: $240 / $800 = 30%, so the lender has a wide cushion if the borrower doesn't repay.
