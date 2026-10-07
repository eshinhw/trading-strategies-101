---
slug: structured-assets-credit-default-swaps-and-indices
title: Credit Default Swaps and Credit Indices
summary: How a CDS transfers credit risk without transferring the underlying bond or loan, and how a credit index bundles many single-name CDS into one tradable basket.
---

## What a Credit Default Swap Is

A credit default swap (CDS) is a contract where the protection buyer pays a periodic premium, called a spread, to the protection seller, and in exchange the seller pays the buyer if a specified reference entity defaults or has some other defined credit event. It's economically similar to buying insurance against an issuer's default, without needing to own the underlying bond at all.

## Buying and Selling Protection

Buying CDS protection profits if the reference entity's credit worsens, meaning spreads widen, or it actually defaults. Selling protection is the opposite bet — collecting premium income in exchange for taking on default risk, similar in spirit to selling an option or writing an insurance policy.

## What a Credit Index Is

A credit index like CDX, for North American names, or iTraxx, for European names, is a standardized basket of single-name CDS on a fixed list of reference entities, often 125 companies. It lets a trader buy or sell protection on the whole basket in a single trade, instead of executing well over a hundred separate single-name CDS trades.

## Index Tranches

Beyond the plain index, tranches can also be written on the index itself — for example, a 0-3% equity tranche or a 3-7% mezzanine tranche of the index — absorbing losses only once the index's cumulative default losses fall within that specific tranche's range. This is directly analogous to CDO tranching, but built on a standardized index rather than a bespoke pool of loans.

## Example

**A bank hedges one company's credit (single-name CDS)**

The bank holds $50 million of a company's bonds and does not want to sell them, perhaps because selling would signal distress.

- CDS spread: 120 basis points
- Recovery assumed in a default: 40%

$$
\$50{,}000{,}000 \times 1.20\% = \$600{,}000 \text{ a year premium}
$$

$$
\text{If the company defaults, the CDS pays } \$50\text{M} \times (1 - 40\%) = \boxed{\$30{,}000{,}000}
$$

The bonds stay on the bank's books, and the default risk has moved elsewhere for $600,000 a year.

**A macro fund takes a view on corporate credit as a whole (CDX index)**

- Index notional: $100 million, covering 125 companies
- Coupon: 100 basis points

$$
\$100{,}000{,}000 \times 1.00\% = \$1{,}000{,}000 \text{ a year}
$$

$$
\frac{\$100\text{M}}{125} = \$0.8\text{M of exposure to each name}
$$

One trade gives exposure to all 125 names. Building the same position with single-name CDS would take 125 separate trades.

# Quiz

1. What does a credit default swap let its buyer do?
   - [x] Transfer credit risk on a reference entity without owning its underlying bond, in exchange for a periodic premium
   - Directly lend money to the reference entity
   - Guarantee that the reference entity will never default
   - Automatically convert into an equity stake if the reference entity defaults
   > A CDS transfers credit exposure via a contract, not a bond purchase — the protection buyer pays a spread and is compensated if the reference entity defaults or has a credit event.

2. What does selling CDS protection resemble economically?
   - Buying insurance against default
   - [x] Writing an insurance policy or selling an option — collecting premium income in exchange for taking on default risk
   - Guaranteeing a government bond
   - Lending money at a fixed interest rate with no default risk
   > The protection seller collects a periodic premium and, in exchange, takes on the risk of paying out if a credit event occurs — the same risk/reward shape as writing insurance or selling an option.

3. What is a credit index like CDX or iTraxx?
   - A single company's stock price index
   - [x] A standardized basket of single-name CDS on a fixed list of reference entities, tradable in one transaction
   - A government bond yield curve
   - A measure of a single bond's credit rating
   > CDX and iTraxx bundle CDS on a fixed list of reference entities into one standardized, tradable basket, avoiding the need to trade each single-name CDS separately.

4. What is an index tranche?
   - [x] A tranche written on a credit index itself, absorbing losses only within a specific range of the index's cumulative defaults
   - A single-name CDS on one company
   - A type of government bond
   - The same thing as the plain, untranched index
   > An index tranche, like a 0-3% equity tranche of CDX, absorbs losses only once the index's cumulative default losses fall within that specific attachment-to-detachment range — structurally similar to a CDO tranche.

5. Why might a trader use a credit index rather than trading many single-name CDS individually?
   - [x] A credit index provides diversified exposure to many reference entities in a single, standardized, more liquid trade
   - Credit indices are always cheaper than every single-name CDS combined
   - Single-name CDS cannot legally be traded
   - Credit indices only exist for government bonds
   > Trading the index in one transaction is far more efficient than assembling the same basket of exposure through many separate, less liquid single-name CDS trades.
