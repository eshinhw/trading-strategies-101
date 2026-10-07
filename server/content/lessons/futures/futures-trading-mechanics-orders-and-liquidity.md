---
slug: futures-trading-mechanics-orders-and-liquidity
title: Trading Mechanics: Orders, Liquidity, and Open Interest
summary: How a futures order actually gets filled — the roles of exchanges, brokers, and clearinghouses, the main order types, the bid-ask spread, and what volume and open interest reveal about a contract.
---

## Exchanges, Brokers, and Clearinghouses

A trader doesn't access a futures exchange directly — they place orders through a broker, which routes those orders to the exchange for matching, while the clearinghouse (covered in an earlier lesson) steps in as the guaranteed counterparty to every matched trade. Each layer has a distinct job: the exchange matches buyers and sellers, the broker provides account access and handles margin, and the clearinghouse guarantees performance.

## Order Types

A market order executes immediately at the best available price, prioritizing speed over price certainty. A limit order specifies the worst price a trader is willing to accept, executing only at that price or better, prioritizing price over speed. A stop order becomes a market order only once the price reaches a specified trigger level, commonly used to limit losses on an existing position. A stop-limit order combines the two: once the stop level triggers, it becomes a limit order rather than a market order, controlling price at the cost of a fill not being guaranteed.

## Bid-Ask Spread and Liquidity

The bid is the highest price a buyer is currently willing to pay; the ask is the lowest price a seller is currently willing to accept. The gap between them, the bid-ask spread, is a direct, real-time measure of a contract's liquidity — a tight spread means a trader can get in or out cheaply, while a wide spread means doing so costs more, especially for a market order that crosses straight to the other side.

## Volume vs. Open Interest

Volume counts the number of contracts traded during a given period (a day, an hour), reset to zero each new period. Open interest counts the total number of contracts currently open — not yet closed out, expired, or delivered — and only changes when a new position is opened or an existing one is closed, not with every trade. Rising open interest alongside a rising price is often read as new money confirming an uptrend, while rising open interest alongside a falling price can suggest fresh short positions being built.

## Example

**Choosing between a market and a limit order**

Two corn contracts (5,000 bushels each), one liquid and one thin:

- Liquid: bid $6.2000, ask $6.2025, so the spread is $0.0025 × 5,000 = $12.50
- Thin: bid $6.10, ask $6.30, so the spread is $0.20 × 5,000 = $1,000

A market buy in the thin contract fills at the ask, $6.30. The midpoint is $6.20.

$$
(\$6.30 - \$6.20) \times 5{,}000 = \$500 \text{ paid above the midpoint}
$$

A limit buy at $6.20 avoids that cost, though it may not fill right away.

**Volume versus open interest**

- Today's volume: 50,000 contracts
- Open interest: 200,000 to 202,000

$$
202{,}000 - 200{,}000 = 2{,}000 \text{ contracts of net new exposure}
$$

$$
\frac{2{,}000}{50{,}000} = 4\% \text{ of volume}
$$

The market looks busy, but most of the day's trading was existing positions changing hands.

# Quiz

1. What distinct role does a broker play, separate from the exchange and the clearinghouse?
   - [x] It provides account access for traders and routes their orders to the exchange, while handling margin
   - It physically stores every commodity underlying a futures contract
   - It sets the exchange's daily price limits
   - It replaces the need for a clearinghouse entirely
   > The broker is the trader's access point and margin handler, distinct from the exchange (which matches trades) and the clearinghouse (which guarantees them).

2. What is the key difference between a limit order and a stop order?
   - [x] A limit order sets a worst acceptable price and executes at that price or better; a stop order only becomes a market order once a trigger price is reached
   - They are identical in every respect
   - A stop order guarantees a specific fill price, while a limit order does not
   - Limit orders can only be used to open a position, never to close one
   > A limit order controls price directly; a stop order sits dormant until a trigger price is hit, then converts into a market order — commonly used to cap losses.

3. What does a tight bid-ask spread indicate about a futures contract?
   - [x] High liquidity — a trader can enter or exit a position cheaply
   - That the contract is about to be delisted
   - That the contract has no open interest at all
   - That the exchange has halted trading
   > A narrow gap between the best bid and best ask is a direct sign of a liquid, actively-traded contract, where transacting costs less in price impact.

4. How does open interest differ from volume?
   - [x] Volume counts trades within a period and resets each period; open interest counts total currently-open contracts and only changes with new or closed positions
   - They are the same measure with different names
   - Open interest resets to zero every day, while volume never resets
   - Volume only applies to options, never futures
   > Volume is a flow measure (trades per period), while open interest is a stock measure (total outstanding contracts) — a high-volume day can still leave open interest largely unchanged if positions are mostly being traded back and forth.

5. A contract has 50,000 contracts of volume today, but open interest rose only from 200,000 to 202,000. What does this suggest?
   - [x] Most of today's trading was existing positions being closed and re-opened, with only a net 2,000 new contracts of fresh exposure added
   - 50,000 brand-new positions were opened today
   - The contract's price limit was hit
   - Open interest and volume must always be equal
   > Because open interest only rose by 2,000 despite 50,000 in volume, the bulk of the day's trading was existing positions changing hands, not new exposure being added to the market.
