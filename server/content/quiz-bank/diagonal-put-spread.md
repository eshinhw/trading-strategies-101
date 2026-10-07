---
slug: diagonal-put-spread
---

# Quiz

1. {#q1} Which view fits a diagonal put spread?
   - You are bullish over the longer term and want income along the way by repeatedly selling short-dated calls
   - You expect a sudden jump before the near-term expiration and want the short put to gain as the stock rises
   - You expect no movement at all and want a pinned outcome, so that both of the options expire at the same time
   - [x] You are bearish over the longer term and want income along the way by repeatedly selling short-dated, out-of-the-money puts
   > It combines a short-stock-like long put with recurring income from short-dated puts.

2. {#q2} Why use a deep in-the-money long-dated put as the long leg?
   - [x] It moves almost dollar for dollar, inversely, with the stock, like a short position, but ties up less capital than shorting shares
   - It has no time value at all and so can never lose money, whatever the stock does before it expires
   - It is the cheapest option in the chain, which is why it is chosen over options closer to the money instead
   - It pays out a fixed amount regardless of where the stock goes, so it provides a guaranteed income stream
   > A deep in-the-money put has a high negative delta and behaves like a short stock substitute.

3. {#q3} How is a diagonal put spread built?
   - Buy a shorter-dated, out-of-the-money put and sell a longer-dated, deep in-the-money put against it
   - [x] Buy a longer-dated, deep in-the-money put and sell a shorter-dated, out-of-the-money put against it
   - Buy a put and a call with different expirations and sell a second put to cover part of the total cost
   - Sell a short-dated put and a short-dated call at the same strike, keeping both premiums as the income
   > The strikes and expirations both differ, which is what makes it diagonal.

4. {#q4} The stock stays above the short put's strike through its expiration. What happens?
   - The long put must be exercised immediately, since the short put expired and can no longer cover it
   - The position loses the whole debit, because the long put also expires worthless alongside the short put
   - [x] The short put expires worthless, the premium was income, and the long put keeps most of its value
   - The short put is assigned and shares are bought, ending the position with a loss on the long put
   > The trader can then repeat the cycle by selling another short-dated put.

5. {#calc1} [calc] A trader buys a 60-day 110 put for $8.50 and sells a 30-day 95 put for $1.50. What is the net debit per contract?
   - $1,000
   - [x] $700
   - $7.00
   - $850
   > The debit is $8.50 − $1.50 = $7.00 a share, which is $700 per 100-share contract.

6. {#bk1} [calc] A trader buys a far-month $100 put for $5.00 and sells a near-month $95 put for $1.80 (a diagonal put spread). The trader opens 3 contracts (100 shares each). How much net cash is paid up front?
   - [x] $960
   - $320
   - $680
   - $2,040
   > The net debit is $5.00 − $1.80 = $3.20 per share. For 3 contracts: $3.20 × 100 × 3 = $960.

7. {#bk2} [calc] A trader buys a far-month $100 put for $5.00 and sells a near-month $95 put for $1.80 (a diagonal put spread). At the near-month expiration the stock is at $95 and the far-month put is worth $7.10. What is the profit per share?
   - +$7.10
   - +$5.30
   - [x] +$3.90
   - +$1.80
   > The near $95 put expires worthless at $95. Profit = $7.10 − $3.20 = +$3.90.

8. {#bk3} [calc] A trader buys a far-month $100 put for $5.00 and sells a near-month $95 put for $1.80 (a diagonal put spread). At the near-month expiration the stock is at $90, the short $95 put is worth $5 (intrinsic) and the far-month put is worth $11.00. What is the profit per share if the trader closes both?
   - [x] +$2.80
   - +$6.00
   - +$11.00
   - −$2.80
   > Closing both: the far put is worth $11.00 and the short put costs $5.00 to buy back. Profit = $11.00 − $5.00 − $3.20 net debit = +$2.80.
