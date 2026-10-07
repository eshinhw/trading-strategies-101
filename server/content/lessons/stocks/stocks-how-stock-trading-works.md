---
slug: stocks-how-stock-trading-works
title: How Stock Trading Works
summary: The mechanics of actually buying and selling a share — exchanges, order types, and what it means to go long or sell short.
---

## Exchanges and Market Makers

Stocks trade on organized exchanges, like the NYSE or Nasdaq, where buy and sell orders from every participant are matched together. Underneath that matching, market makers continuously quote both a price they're willing to buy at, the bid, and a price they're willing to sell at, the ask, providing the liquidity that lets an order actually get filled quickly.

## Market Orders vs. Limit Orders

A market order buys or sells immediately at whatever the best available price happens to be right now, prioritizing speed of execution over price certainty. A limit order instead specifies the worst price you're willing to accept, guaranteeing the price if it fills, but with no guarantee it fills at all if the market never reaches that level.

## Going Long

Buying a stock outright, in the ordinary sense, is called going long: you profit if the price rises, and lose if it falls, with your maximum loss limited to what you paid for the shares.

## Selling Short

Selling short flips that around: borrowing shares you don't own, selling them immediately, and aiming to buy them back later at a lower price to return to the lender, pocketing the difference. A short seller profits if the price falls, but faces theoretically unlimited losses if the price rises instead, since there's no cap on how high a stock can go.

## Example

A trader believes a heavily hyped stock at $50 has run up too far. Instead of buying, the trader sells short 100 shares.

- Borrow 100 shares from the broker and sell them: 100 × $50 = $5,000 received
- Plan: buy them back later at a lower price and return them

**The stock falls to $40**

$$
\$5{,}000 - 100 \times \$40 = \boxed{+\$1{,}000}
$$

**The stock rises to $70**

$$
\$5{,}000 - 100 \times \$70 = -\$2{,}000
$$

**The stock rises to $100**

$$
\$5{,}000 - 100 \times \$100 = -\$5{,}000
$$

**A long position in the same stock (buy 100 shares at $50)**

$$
\text{Maximum loss} = \$5{,}000 \text{ (the stock goes to } \$0\text{)}
$$

$$
\text{Maximum gain on a short} = \$5{,}000 \text{ (the stock goes to } \$0\text{)}
$$

- A long position cannot lose more than the $5,000 paid.
- A short position gains at most $5,000, but its loss has no limit, since the stock can keep rising.

That is the kind of risk short selling carries that a simple long position does not.

# Quiz

1. What role do market makers play in stock trading?
   - [x] They continuously quote a bid and an ask price, providing the liquidity that lets orders get filled quickly
   - They set the company's earnings reports
   - They vote on behalf of all shareholders
   - They determine a company's dividend policy
   > Market makers stand ready to buy at their quoted bid and sell at their quoted ask, which is what provides the liquidity underlying an exchange's order matching.

2. What is the key difference between a market order and a limit order?
   - A market order guarantees a specific price but not speed; a limit order guarantees speed but not price
   - [x] A market order fills immediately at the best available price, prioritizing speed; a limit order specifies a price and may not fill at all
   - They are identical in every respect
   - Limit orders can only be used to sell, never to buy
   > A market order trades execution certainty for price uncertainty, while a limit order trades price certainty (if it fills) for execution uncertainty.

3. What does it mean to "go long" a stock?
   - Borrowing shares and selling them immediately
   - [x] Buying the stock outright, profiting if the price rises and losing if it falls
   - Holding a stock for at least ten years
   - Betting that the stock's price will fall
   > Going long is simply the ordinary sense of buying a stock — you own it outright, and your position gains value as the price rises.

4. How does selling short work?
   - [x] Borrowing shares, selling them immediately, and aiming to buy them back later at a lower price to return to the lender
   - Buying a stock and holding it for a very short period of time
   - Selling a stock you already own and never buying it back
   - A type of dividend payment
   > Short selling borrows shares to sell first, with the plan to repurchase them later at a lower price — profiting from a price decline rather than a rise.

5. Why does a short seller face theoretically unlimited losses, unlike a long position?
   - [x] Because there's no cap on how high a stock's price can rise, while a long position's maximum loss is capped at what was paid for the shares
   - Short selling is actually less risky than going long
   - Short sellers are protected by a guaranteed maximum loss limit
   - A stock's price can never rise once it has been sold short
   > A long position's downside is capped at the purchase price, since a stock can't fall below zero, but a short position's losses grow without limit as the price keeps rising, since there's no ceiling on how high it can go.

6. {#calc1} [calc] A trader shorts 200 shares at $40 and buys them back at $46. What is the result?
   - [x] A $1,200 loss
   - A $1,200 gain
   - A $6 loss
   - An $800 loss
   > The loss is ($46 − $40) × 200 shares = $1,200, since the trader sold at $40 and had to buy back higher.
