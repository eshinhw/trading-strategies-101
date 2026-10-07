---
slug: futures-common-beginner-mistakes
---

# Quiz

1. {#q1} Why is it a mistake to think of margin like a down payment?
   - [x] Margin is collateral against potential losses on a leveraged position, not a partial payment toward ownership, and it can be called on to grow if the position moves against you
   - Margin and a down payment are functionally identical
   - Margin is refunded in full regardless of how a position performs
   - Margin only applies to options, never futures
   > Unlike a down payment, margin doesn't reduce a larger amount owed — it's collateral against losses, and a losing position can trigger a margin call requiring more capital, not less.

2. {#q2} Why does ignoring a contract's tick value and notional size lead to sizing mistakes?
   - [x] Because the actual dollar exposure per contract can be far larger (or smaller) than a trader assumes without checking it explicitly
   - Tick value never actually affects a position's real risk
   - All futures contracts have identical tick values and notional sizes
   - Notional size only matters for equity index futures
   > Contract specifications vary widely — sizing based on contract count alone, without translating that into actual dollar exposure, can create far more risk than intended.

3. {#q3} How can a new trader avoid unintentional physical delivery?
   - [x] Know the contract's first notice date and close out or roll the position well before it arrives
   - It's impossible to avoid delivery once a position is opened
   - Only trade cash-settled contracts, since delivery risk applies to every futures contract
   - Delivery only happens to institutional traders, never retail accounts
   > Tracking a physically-settled contract's delivery window and exiting beforehand is the straightforward fix.

4. {#q4} Why can trading an illiquid futures contract cost more than its quoted price suggests?
   - [x] A wide bid-ask spread and thin trading mean entering and exiting both cost more in price impact than in a liquid market
   - Illiquid contracts always have zero trading costs
   - Liquidity has no effect on the actual cost of trading a contract
   - Illiquid contracts cannot legally be traded
   > Thin liquidity shows up directly as a wider bid-ask spread and worse fills, an often-underestimated real cost of trading an obscure or low-volume contract.

5. {#q5} [calc] A $10,000 account holds five crude oil contracts (5,000 barrels) sized only to available margin. What mistake does a $2 adverse move expose?
   - [x] It would cost $10,000 — the entire account — combining ignored notional exposure with over-risking a single position
   - It would cost only $50, a negligible amount
   - There is no risk since margin was sufficient to open the position
   - The position would automatically close before any loss occurred
   > 5,000 barrels × $2 = $10,000 — wiping out the entire account on a routine price move, the combination of two classic mistakes: ignoring true notional exposure and over-sizing.

6. {#bk1} [calc] A crude oil contract has a notional value of $80,000 and a margin of $6,000. What percentage of notional is margin?
   - [x] 7.5%
   - 75%
   - 13.3%
   - 0.75%
   > $6,000 / $80,000 = 7.5%, so the contract is levered about 13 times.

7. {#bk2} [calc] One E-mini contract at 4,500 (multiplier $50) needs $12,000 of margin. If the index falls 3%, what is the loss as a percentage of the margin?
   - 3%
   - 12%
   - [x] 56.25%
   - 150%
   > Notional = $225,000. A 3% fall loses $6,750. $6,750 / $12,000 = 56.25% of the margin.

8. {#bk3} [calc] A trader with a $20,000 account risks at most 2% on a trade. A micro crude contract covers 100 barrels and the stop is $2 away. How many contracts fit the limit?
   - [x] 2
   - 1
   - 4
   - 20
   > Risk limit = $400. Risk per contract = $2 × 100 = $200. $400 / $200 = 2 contracts.

9. {#bk4} [calc] A beginner thinks an E-mini tick costs $0.25 per contract, but each 0.25-point tick is worth $12.50. A trader holds 10 contracts and the market moves 8 ticks against them. What is the real loss?
   - $20
   - $80
   - $100
   - [x] $1,000
   > Loss = 8 ticks × $12.50 × 10 contracts = $1,000.

10. {#bk5} What should set the size of a new futures position?
   - How exciting or convincing the trade feels
   - [x] A predetermined fraction of account capital that the trader can afford to lose
   - The maximum the broker's margin allows
   - The number of contracts a friend is trading
   > Sizing from a risk limit, not from margin or emotion, keeps ordinary losing streaks from becoming career-ending drawdowns.

11. {#bk6} What does the broker's margin requirement tell a trader?
   - The most the position can ever lose
   - The trader's ideal position size
   - The profit the position is expected to make
   - [x] What the broker requires to hold the position, not how much the trader can afford to lose
   > Margin is collateral set by the broker and exchange. It says nothing about the trader's own loss limit.
