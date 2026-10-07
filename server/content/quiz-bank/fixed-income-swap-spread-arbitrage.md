---
slug: fixed-income-swap-spread-arbitrage
---

# Quiz

1. {#q1} What is the "swap spread"?
   - The difference between two different companies' stock prices
   - [x] The difference between the fixed rate on an interest rate swap and the yield on a government bond of the same maturity
   - The coupon rate on a single government bond
   - The spread between a CDS contract and its underlying bond
   > The swap spread compares the fixed leg of an interest rate swap to a government bond yield of matching maturity — both reflect rate expectations over the same horizon.

2. {#q2} What does swap-spread arbitrage bet on?
   - The overall direction interest rates will move
   - [x] That a swap spread which has moved unusually wide or narrow relative to its historical range will revert back toward that typical level
   - That government bonds will default
   - That interest rate swaps will be banned by regulators
   > The trade is constructed to profit from the swap spread's mean-reversion toward its normal historical range, largely independent of the broad direction of rates.

3. {#q3} What factors can drive swap spreads independently of the general level of interest rates?
   - Nothing — swap spreads move in lockstep with rate levels at all times
   - [x] The perceived credit risk of swap-market bank counterparties, relative government bond supply versus swap demand, and regulatory/balance-sheet constraints on banks
   - Only the color of the currency used
   - Swap spreads cannot be influenced by any external factor
   > Swap spreads reflect factors specific to the swap and government bond markets separately — counterparty credit perception, issuance supply, and post-crisis regulatory constraints — not just the general rate level.

4. {#q4} What happened to swap spreads for long-maturity swaps after the 2008 financial crisis?
   - They stayed exactly the same as before the crisis
   - [x] They turned negative, a level that would have looked anomalous under pre-crisis assumptions about the swap market
   - They were permanently eliminated by regulators
   - They became identical to CDS spreads
   > Post-2008, long-maturity swap spreads turned negative, illustrating how swap spreads can move to levels that pre-crisis models wouldn't have anticipated, and can persist rather than quickly reverting.

5. {#q5} Why is swap-spread arbitrage not considered risk-free, despite betting on reversion to a historical norm?
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

7. {#bk1} [calc] A 10-year swap rate is 4.35% and the 10-year Treasury yield is 4.10%. A trader long the swap spread has a position DV01 of $8,500 per basis point, and the spread widens by 6 basis points. What is the gain?
   - $510
   - [x] $51,000
   - $212,500
   - $263,500
   > The spread starts at 4.35% − 4.10% = 25 basis points. The gain is the DV01 times the move: $8,500 × 6 = $51,000.

8. {#bk2} [calc] A 10-year swap rate is 4.35% and the 10-year Treasury yield is 4.10%. What is the swap spread?
   - 8.45 basis points
   - 2.5 basis points
   - −25 basis points
   - [x] 25 basis points
   > Swap spread = swap rate − Treasury yield = 4.35% − 4.10% = 0.25% = 25 basis points.

9. {#bk3} [calc] A 5-year swap spread moves from 25 to 19 basis points. A trader who pays fixed on the swap and holds the Treasury (a narrowing trade) has a DV01 of $5,000 per basis point. What is the result?
   - −$30,000
   - [x] +$30,000
   - +$5,000
   - +$125,000
   > The spread narrowed 6 basis points in the trade's favour: $5,000 × 6 = +$30,000.
