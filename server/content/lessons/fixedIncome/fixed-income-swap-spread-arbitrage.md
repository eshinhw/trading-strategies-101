---
slug: fixed-income-swap-spread-arbitrage
title: Swap-Spread Arbitrage
summary: Trading the gap between a fixed-for-floating interest rate swap's fixed rate and the yield on a government bond of the same maturity, betting the spread reverts to its typical range.
---

## What the Swap Spread Is

An interest rate swap exchanges a stream of fixed payments for a stream of floating payments, typically tied to a short-term reference rate, over a set period. The "swap spread" is the difference between the fixed rate on a swap and the yield on a government bond of the same maturity — for example, the 10-year swap rate minus the 10-year government bond yield. Because both reflect the market's view of interest rates over the same horizon, they tend to move together, but the swap spread itself fluctuates within a historical range influenced by factors specific to each market.

## Betting on Reversion

Swap-spread arbitrage bets that a swap spread which has moved unusually wide or narrow relative to its historical range will revert back toward that typical level — a trader might, for example, receive fixed on the swap and simultaneously short the government bond, or the reverse, constructing a position that profits as the swap spread moves back toward its normal range, largely independent of which direction interest rates broadly move.

## What Drives the Spread

Swap spreads are driven by factors distinct from the general level of rates: the perceived credit risk of the bank counterparties in the swap market versus the near-risk-free status of government debt, the relative supply of new government bond issuance versus swap market demand, and, especially since the 2008 financial crisis, regulatory and balance-sheet constraints on banks' capacity to intermediate swap trades, all of which can push the spread away from its historical norm for reasons unrelated to the direction of interest rates.

## Not Risk-Free

Like other spread-arbitrage trades, the position is not risk-free: dealer balance-sheet constraints and shifts in bond supply can cause swap spreads to move further away from historical norms, and can stay unusually wide or narrow for extended periods rather than reverting quickly — a well-known example is when swap spreads turned negative for long-maturity swaps after 2008, a level that would have looked anomalous, and unprofitable to bet against, under pre-crisis assumptions about the swap market's structure.

# Quiz

1. What is the "swap spread"?
   - The difference between two different companies' stock prices
   - [x] The difference between the fixed rate on an interest rate swap and the yield on a government bond of the same maturity
   - The coupon rate on a single government bond
   - The spread between a CDS contract and its underlying bond
   > The swap spread compares the fixed leg of an interest rate swap to a government bond yield of matching maturity — both reflect rate expectations over the same horizon.

2. What does swap-spread arbitrage bet on?
   - The overall direction interest rates will move
   - [x] That a swap spread which has moved unusually wide or narrow relative to its historical range will revert back toward that typical level
   - That government bonds will default
   - That interest rate swaps will be banned by regulators
   > The trade is constructed to profit from the swap spread's mean-reversion toward its normal historical range, largely independent of the broad direction of rates.

3. What factors can drive swap spreads independently of the general level of interest rates?
   - Nothing — swap spreads move in lockstep with rate levels at all times
   - [x] The perceived credit risk of swap-market bank counterparties, relative government bond supply versus swap demand, and regulatory/balance-sheet constraints on banks
   - Only the color of the currency used
   - Swap spreads cannot be influenced by any external factor
   > Swap spreads reflect factors specific to the swap and government bond markets separately — counterparty credit perception, issuance supply, and post-crisis regulatory constraints — not just the general rate level.

4. What happened to swap spreads for long-maturity swaps after the 2008 financial crisis?
   - They stayed exactly the same as before the crisis
   - [x] They turned negative, a level that would have looked anomalous under pre-crisis assumptions about the swap market
   - They were permanently eliminated by regulators
   - They became identical to CDS spreads
   > Post-2008, long-maturity swap spreads turned negative, illustrating how swap spreads can move to levels that pre-crisis models wouldn't have anticipated, and can persist rather than quickly reverting.

5. Why is swap-spread arbitrage not considered risk-free, despite betting on reversion to a historical norm?
   - Because government bonds carry no interest-rate risk
   - [x] Because dealer balance-sheet constraints and shifts in bond supply can cause spreads to move further from historical norms and stay unusually wide or narrow for extended periods rather than reverting quickly
   - Because swaps cannot be traded by any market participant
   - There is no risk in this trade once it is constructed
   > Structural factors like balance-sheet constraints can keep spreads away from their historical range for a long time, meaning the anticipated reversion may be delayed or not happen as expected, exposing the trade to real losses in the meantime.

6. {#calc1} [calc] The 10-year swap rate is 4.35% and the 10-year Treasury yields 4.10%. The spread normally sits near 15 basis points. If it reverts, what is the profit at $6,000 per basis point?
   - [x] $60,000
   - $150,000
   - $25,000
   - $90,000
   > The spread is 4.35% − 4.10% = 25 basis points. A reversion to 15 is a 10 basis point move, and 10 × $6,000 = $60,000.
