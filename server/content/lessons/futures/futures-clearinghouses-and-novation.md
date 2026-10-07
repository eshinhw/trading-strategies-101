---
slug: futures-clearinghouses-and-novation
title: Clearinghouses and Novation
summary: How a clearinghouse steps into the middle of every futures trade, becoming the buyer to every seller and the seller to every buyer — the mechanism behind the guarantee referenced earlier in this course.
---

## What a Clearinghouse Does

A clearinghouse sits between every buyer and seller in the futures market, becoming the legal counterparty to both sides of every trade through a process called novation. The moment a trade is matched, the original bilateral contract between the two traders is replaced by two new contracts: one between the buyer and the clearinghouse, and one between the clearinghouse and the seller.

## Why Novation Matters

Because every trader's counterparty is now the clearinghouse itself, rather than the specific, possibly unknown trader on the other side of the original trade, no individual trader needs to assess or worry about the creditworthiness of whoever they happened to be matched with — a critical difference from a forward's direct, bilateral counterparty exposure.

## How the Clearinghouse Stays Solvent

The clearinghouse funds this guarantee through the margin system already covered in this module: every member posts initial margin, is marked to market daily, and faces margin calls, which means the clearinghouse is rarely exposed to more than a single day's adverse move on any position before that loss is collected in cash.

## The Guarantee Fund, as a Backstop

Beyond individual members' margin, clearinghouses maintain a mutualized guarantee, or default, fund, contributed to by all clearing members, that absorbs losses in the rare event a member defaults and its own posted margin isn't enough to cover the loss — a final layer of protection standing behind the daily margining process.

## Example

A buyer and a seller trade one crude oil futures contract (1,000 barrels) at $80 through an exchange. They have never met.

- The moment the trade matches, the clearinghouse becomes the seller to the buyer and the buyer to the seller.
- The seller posted $6,000 of initial margin.
- Crude then jumps to $89 in one sharp move, and the seller defaults.

**What the buyer is owed**

$$
(\$89 - \$80) \times 1{,}000 = \$9{,}000
$$

**How the clearinghouse covers the loss**

$$
\text{1. Seller's margin} = \$6{,}000
$$

$$
\text{2. Guarantee fund} = \$9{,}000 - \$6{,}000 = \boxed{\$3{,}000}
$$

The buyer receives the full $9,000, so the seller's default costs the buyer nothing. The buyer never needed to check the seller's credit.

# Quiz

1. What does novation mean in the context of a futures clearinghouse?
   - [x] The original bilateral trade between buyer and seller is replaced by two new contracts, each with the clearinghouse as counterparty
   - The trade is simply cancelled after being matched
   - The buyer and seller must renegotiate the price directly
   - Novation only applies to forward contracts, never futures
   > Novation is the legal substitution that inserts the clearinghouse as the counterparty to both sides, replacing the original buyer-seller contract with two new ones.

2. Why doesn't a futures trader need to assess the creditworthiness of the trader on the other side of their trade?
   - [x] Because the clearinghouse becomes the counterparty to both sides through novation, not the original trader
   - Because all futures traders are required to be the same size
   - Because futures trades are never actually matched with anyone
   - Because creditworthiness is irrelevant to any financial contract
   > Since novation makes the clearinghouse the counterparty to every trade, a trader's actual exposure is to the clearinghouse itself, not to whichever specific trader happened to take the other side.

3. How does the clearinghouse limit its own exposure to any single position?
   - [x] Through the same daily margining system covered earlier — initial margin, mark-to-market, and margin calls
   - By refusing to guarantee any trades at all
   - By requiring physical delivery on every contract the same day it's opened
   - The clearinghouse has no mechanism to limit its exposure
   > Daily mark-to-market and margin calls mean losses are collected in cash each day, so the clearinghouse is rarely exposed to more than a single day's adverse move on any position.

4. What is a clearinghouse's guarantee (or default) fund for?
   - [x] To absorb losses if a member defaults and its own posted margin isn't enough to cover the loss
   - To pay dividends to clearing members
   - To replace the need for any margin requirements at all
   - To fund the exchange's marketing budget
   > The mutualized guarantee fund is a backstop beyond individual margin — a final layer of protection for the rare case where a defaulting member's own margin falls short.

5. How does novation change a trader's counterparty risk compared to a private forward contract?
   - [x] It replaces exposure to one specific, possibly unknown counterparty with exposure to a well-capitalized, guarantee-fund-backed clearinghouse
   - It has no effect on counterparty risk at all
   - It increases counterparty risk compared to a forward
   - It eliminates the need for a clearinghouse entirely
   > Novation is precisely what converts the bilateral counterparty risk of a forward into exposure to a single, well-margined, guarantee-fund-backed clearinghouse instead.

6. {#calc1} [calc] A defaulting member owes a $12,000 loss and posted $7,500 of margin. How much does the guarantee fund have to cover?
   - $7,500
   - $12,000
   - $19,500
   - [x] $4,500
   > The margin absorbs $7,500 first, leaving $12,000 − $7,500 = $4,500 for the guarantee fund.
