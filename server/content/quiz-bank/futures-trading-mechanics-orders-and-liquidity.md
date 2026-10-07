---
slug: futures-trading-mechanics-orders-and-liquidity
---

# Quiz

1. {#q1} What distinct role does a broker play, separate from the exchange and the clearinghouse?
   - [x] It provides account access for traders and routes their orders to the exchange, while handling margin
   - It physically stores every commodity underlying a futures contract
   - It sets the exchange's daily price limits
   - It replaces the need for a clearinghouse entirely
   > The broker is the trader's access point and margin handler, distinct from the exchange (which matches trades) and the clearinghouse (which guarantees them).

2. {#q2} What is the key difference between a limit order and a stop order?
   - [x] A limit order sets a worst acceptable price and executes at that price or better; a stop order only becomes a market order once a trigger price is reached
   - They are identical in every respect
   - A stop order guarantees a specific fill price, while a limit order does not
   - Limit orders can only be used to open a position, never to close one
   > A limit order controls price directly; a stop order sits dormant until a trigger price is hit, then converts into a market order — commonly used to cap losses.

3. {#q3} What does a tight bid-ask spread indicate about a futures contract?
   - [x] High liquidity — a trader can enter or exit a position cheaply
   - That the contract is about to be delisted
   - That the contract has no open interest at all
   - That the exchange has halted trading
   > A narrow gap between the best bid and best ask is a direct sign of a liquid, actively-traded contract, where transacting costs less in price impact.

4. {#q4} How does open interest differ from volume?
   - [x] Volume counts trades within a period and resets each period; open interest counts total currently-open contracts and only changes with new or closed positions
   - They are the same measure with different names
   - Open interest resets to zero every day, while volume never resets
   - Volume only applies to options, never futures
   > Volume is a flow measure (trades per period), while open interest is a stock measure (total outstanding contracts) — a high-volume day can still leave open interest largely unchanged if positions are mostly being traded back and forth.

5. {#q5} A contract has 50,000 contracts of volume today, but open interest rose only from 200,000 to 202,000. What does this suggest?
   - [x] Most of today's trading was existing positions being closed and re-opened, with only a net 2,000 new contracts of fresh exposure added
   - 50,000 brand-new positions were opened today
   - The contract's price limit was hit
   - Open interest and volume must always be equal
   > Because open interest only rose by 2,000 despite 50,000 in volume, the bulk of the day's trading was existing positions changing hands, not new exposure being added to the market.

6. {#calc1} [calc] A futures contract quotes 99.95 bid and 100.05 ask. Each point is worth $100 and a trader buys 50 contracts at the ask and sells them back at the bid. What does crossing the spread cost?
   - $5,000
   - $50
   - $10
   - [x] $500
   > The spread is 0.10 points, and 0.10 × $100 × 50 contracts = $500.

7. {#bk1} [calc] A crude oil future quotes $79.98 bid and $80.02 ask. A trader buys 10 contracts (1,000 barrels each) at the ask and sells them straight back at the bid. What does crossing the spread cost?
   - $40
   - [x] $400
   - $4,000
   - $200
   > The spread is $0.04. $0.04 × 1,000 × 10 = $400.

8. {#bk2} [calc] A trader is long 3 crude oil contracts with a sell stop at $78.50. The market gaps and the stop fills at $77.90. What is the loss versus the intended stop price?
   - $600
   - $3,000
   - $6,300
   - [x] $1,800
   > The fill is $0.60 below the stop. $0.60 × 1,000 × 3 = $1,800 more than planned.

9. {#bk3} [calc] In one session four trades occur: two where both sides open new positions, one where both sides close existing positions, and one where a buyer opens a new position against a seller closing an old one. What is the net change in open interest?
   - +3 contracts
   - [x] +1 contract
   - +2 contracts
   - 0 contracts
   > New-new trades add 1 each (+2). Close-close removes 1 (−1). New-close leaves open interest unchanged. Net = +2 − 1 + 0 = +1.

10. {#bk4} [calc] Open interest falls from 200,000 to 195,500 on a day with volume of 80,000 contracts. By what percentage did open interest change?
   - −5.6%
   - −4,500%
   - [x] −2.25%
   - +2.25%
   > (195,500 − 200,000) / 200,000 = −2.25%. Most of the day's volume was positions being closed out or changing hands.

11. {#bk5} [calc] A trader buys 20 contracts with a market order. The book has 10 contracts offered at 100.05 and 10 at 100.10. What is the average fill price?
   - [x] 100.075
   - 100.05
   - 100.10
   - 100.15
   > Average = (10 × 100.05 + 10 × 100.10) / 20 = 100.075.

12. {#bk6} [calc] Corn quotes $5.99 bid and $6.01 ask, so the midpoint is $6.00. A trader buys 8 contracts (5,000 bushels each) at the ask. How much is paid above the midpoint?
   - $800
   - $40
   - [x] $400
   - $4,000
   > $0.01 above the midpoint × 5,000 × 8 = $400.

13. {#bk7} What does a market order prioritize?
   - [x] Executing immediately at the best available price, putting speed ahead of price certainty
   - Executing only at a specific price or better, even if it never fills
   - Waiting until a trigger price is reached before doing anything
   - Guaranteeing the final fill price in advance
   > A market order trades now at whatever the best prices are. A limit order is the one that controls price.

14. {#bk8} Rising open interest alongside a rising price is often read as what?
   - Traders closing out existing positions and leaving
   - [x] New money entering the market and confirming the uptrend
   - A sign that the contract is about to expire
   - A sign that volume is zero
   > Open interest only rises when new positions are opened, so rising open interest with a rising price suggests new participation behind the move.

15. {#bk9} How do the exchange and the clearinghouse differ in the life of a trade?
   - The exchange guarantees the trade, while the clearinghouse matches buyers and sellers
   - Both only handle margin accounts
   - The clearinghouse sets the order types, while the exchange sets the price
   - [x] The exchange matches buyers and sellers, while the clearinghouse guarantees the matched trade
   > Each layer has a distinct job: the exchange matches orders, the broker gives account access and handles margin, and the clearinghouse becomes the counterparty to every trade.
