---
slug: structured-assets-credit-default-swaps-and-indices
---

# Quiz

1. {#q1} What does a credit default swap let its buyer do?
   - [x] Transfer credit risk on a reference entity without owning its underlying bond, in exchange for a periodic premium
   - Directly lend money to the reference entity
   - Guarantee that the reference entity will never default
   - Automatically convert into an equity stake if the reference entity defaults
   > A CDS transfers credit exposure via a contract, not a bond purchase — the protection buyer pays a spread and is compensated if the reference entity defaults or has a credit event.

2. {#q2} What does selling CDS protection resemble economically?
   - Buying insurance against default
   - [x] Writing an insurance policy or selling an option — collecting premium income in exchange for taking on default risk
   - Guaranteeing a government bond
   - Lending money at a fixed interest rate with no default risk
   > The protection seller collects a periodic premium and, in exchange, takes on the risk of paying out if a credit event occurs — the same risk/reward shape as writing insurance or selling an option.

3. {#q3} What is a credit index like CDX or iTraxx?
   - A single company's stock price index
   - [x] A standardized basket of single-name CDS on a fixed list of reference entities, tradable in one transaction
   - A government bond yield curve
   - A measure of a single bond's credit rating
   > CDX and iTraxx bundle CDS on a fixed list of reference entities into one standardized, tradable basket, avoiding the need to trade each single-name CDS separately.

4. {#q4} What is an index tranche?
   - [x] A tranche written on a credit index itself, absorbing losses only within a specific range of the index's cumulative defaults
   - A single-name CDS on one company
   - A type of government bond
   - The same thing as the plain, untranched index
   > An index tranche, like a 0-3% equity tranche of CDX, absorbs losses only once the index's cumulative default losses fall within that specific attachment-to-detachment range — structurally similar to a CDO tranche.

5. {#q5} Why might a trader use a credit index rather than trading many single-name CDS individually?
   - [x] A credit index provides diversified exposure to many reference entities in a single, standardized, more liquid trade
   - Credit indices are always cheaper than every single-name CDS combined
   - Single-name CDS cannot legally be traded
   - Credit indices only exist for government bonds
   > Trading the index in one transaction is far more efficient than assembling the same basket of exposure through many separate, less liquid single-name CDS trades.

6. {#calc1} [calc] A bank holds $20 million of bonds and buys CDS protection. The company defaults and bonds recover 40%. How much does the CDS pay?
   - $20 million
   - [x] $12 million
   - $8 million
   - $40 million
   > The CDS pays the loss: $20M × (1 − 40%) = $12M.

7. {#calc2} [calc] A credit index has 125 names and $125 million of notional. One name defaults with a 35% recovery. What does the index protection pay?
   - $1 million
   - $350,000
   - $43.75 million
   - [x] $650,000
   > Each name is $1M of notional, and the loss is 65% of that: $650,000.

8. {#bk1} [calc] A credit default swap has a spread of 150 basis points on $10,000,000 of notional. What does the protection buyer pay each year?
   - $15,000
   - $1,500,000
   - $6,000,000
   - [x] $150,000
   > Annual premium = 0.0150 × $10,000,000 = $150,000.

9. {#bk2} [calc] A credit default swap has a spread of 200 basis points on $25,000,000 of notional. What does the protection buyer pay each year?
   - $50,000
   - [x] $500,000
   - $5,000,000
   - $15,000,000
   > Annual premium = 0.0200 × $25,000,000 = $500,000.

10. {#bk3} [calc] A credit default swap has a spread of 90 basis points on $40,000,000 of notional. What does the protection buyer pay each year?
   - $36,000
   - $3,600,000
   - $24,000,000
   - [x] $360,000
   > Annual premium = 0.0090 × $40,000,000 = $360,000.

11. {#bk4} [calc] A protection buyer holds a $10 million CDS. The reference company defaults and bonds are worth 40 cents on the dollar. What does the protection seller pay?
   - [x] $6,000,000
   - $4,000,000
   - $10,000,000
   - $600,000
   > The seller pays par minus recovery: $10,000,000 × (1 − 0.40) = $6,000,000.

12. {#bk5} [calc] A protection buyer's CDS has a CS01 of $4,500 per basis point. Spreads widen by 20 basis points. What is the position's gain?
   - $4,500
   - $225
   - [x] $90,000
   - $900,000
   > Gain = $4,500 × 20 = $90,000, since the protection buyer benefits when spreads widen.
