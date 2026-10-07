---
slug: concept-debit-vs-credit
title: Debit vs. Credit Trades
summary: Do you pay to enter the trade, or get paid?
---

## Net Cash Flow at Entry

Every options strategy has a net cash flow at entry: either you pay money to put it on (a net debit) or you receive money for putting it on (a net credit).

## Net Debit Trades

A net debit trade means you bought more option value than you sold. Your maximum possible loss is capped at what you paid, and you need the stock to move enough to earn that cost back before you're profitable — that's exactly what a breakeven point represents in a debit trade.

## Net Credit Trades

A net credit trade means you sold more option value than you bought. You keep the credit if things go your way, but now you're the one with an obligation — your risk is on the other side, and depending on the strategy it can be capped or uncapped.

## Choosing Between Them

Neither is inherently 'better' — a debit trade risks a known, limited amount for a shot at a bigger (sometimes unlimited) gain; a credit trade collects a known, limited amount upfront in exchange for taking on the risk side of that same trade. Matching the type to your market view and risk tolerance is most of the job.

## Example

Two trades on a $100 stock, one debit and one credit (margin is illustrative and varies by broker).

**Net debit: buy 1 call, strike 100, premium $5.00**

$$
\$5.00 \times 100 = \$500 \text{ paid}
$$

- Cash tied up: $500
- Maximum loss: $500, which is exactly what was paid

**Net credit: sell a straddle (a 100 call at $4.50 and a 100 put at $4.50)**

$$
(\$4.50 + \$4.50) \times 100 = \$900 \text{ received}
$$

- Cash received: $900
- Margin the broker requires: about $2,000 (assumed 20% of the stock's $10,000 value)
- Maximum loss: unlimited, since the stock can rise without limit

**Comparison**

- The debit trade costs $500 and risks only $500.
- The credit trade pays $900 but ties up about $2,000 and carries unlimited risk.

Whether cash comes in or goes out says nothing about risk. Margin follows the risk, not the cash flow.

# Quiz

1. In a net debit trade, what is your maximum possible loss (in the simplest case)?
   - Unlimited
   - [x] The amount you paid to enter the trade
   - Zero — debit trades can't lose money
   - The strike price
   > You can't lose more than you paid — the debit is money already spent, and that's the cap on the downside.

2. A net credit trade means:
   - You paid money to enter the position
   - [x] You received money to enter the position
   - The trade is guaranteed to profit
   - No options were actually traded
   > Net credit means the premium you collected from what you sold exceeded what you paid for what you bought.

3. Is a net credit strategy always lower-risk than a net debit strategy?
   - Yes, always
   - [x] No — some credit strategies carry unlimited risk despite the upfront credit
   - Credit and debit trades carry identical risk by definition
   - Risk doesn't apply to credit trades
   > A short straddle, for example, is a net credit trade with unlimited risk. The cash flow direction tells you nothing about risk on its own.

4. In a net debit trade, what does the breakeven price represent?
   - The price at which the stock was originally purchased
   - [x] The stock price at expiration where you've just earned back what you paid
   - The strike price of the option, always
   - The point where the seller starts losing money
   > The breakeven in a debit trade is where the position's value exactly offsets what you paid to enter it — beyond that, you're profitable.

5. According to this lesson, how should you decide between a debit and a credit structure for a given trade idea?
   - Always prefer credit trades — they're objectively safer
   - Always prefer debit trades — they have capped risk
   - [x] Match the structure to your market view and risk tolerance — neither is inherently better
   - It doesn't matter; debit and credit trades are functionally identical
   > The lesson's takeaway is explicit: you're choosing between a known, limited cost for a shot at uncapped upside, or a known, limited credit for taking on risk. Fit the choice to your view and risk tolerance.
