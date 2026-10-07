---
slug: diagonal-call-spread
---

# Quiz

1. {#q1} Which view fits a diagonal call spread?
   - [x] You are bullish over the longer term and want income along the way by repeatedly selling short-dated, out-of-the-money calls
   - You are bearish over the longer term and want income along the way by repeatedly selling short-dated puts
   - You expect a sudden drop before the near-term expiration and want the short call to gain as the stock falls
   - You expect no movement at all and want a pinned outcome, so that both of the options expire at the same time
   > It combines a stock-like long call with recurring income from short-dated calls.

2. {#q2} Why use a deep in-the-money long-dated call as the long leg?
   - It has no time value at all and so can never lose money, whatever the stock does before it expires
   - [x] It moves almost dollar for dollar with the stock, like owning shares, but costs less and ties up less capital
   - It is the cheapest option in the chain, which is why it is chosen over options closer to the money instead
   - It pays out a fixed amount regardless of where the stock goes, so it provides a guaranteed income stream
   > A deep in-the-money call has a high delta and behaves like a stock substitute.

3. {#q3} How is a diagonal call spread built?
   - Buy a short-dated call and sell a long-dated call at the same strike
   - Buy a call and a put with different expirations and sell a second call to cover part of the total cost
   - [x] Buy a longer-dated, deep in-the-money call and sell a shorter-dated, out-of-the-money call against it
   - Sell a short-dated call and a short-dated put at the same strike, keeping both premiums as the income
   > The strikes and expirations both differ, which is what makes it diagonal.

4. {#q4} The stock stays below the short call's strike through its expiration. What happens?
   - The long call must be exercised immediately, since the short call expired and can no longer cover it
   - The position loses the whole debit, because the long call also expires worthless alongside the short call
   - The short call is assigned and shares are delivered
   - [x] The short call expires worthless, the premium was income, and the long call keeps most of its value
   > The trader can then repeat the cycle by selling another short-dated call.

5. {#calc1} [calc] A trader buys a 60-day 90 call for $9.00 and sells a 30-day 105 call for $1.20. What is the net debit per contract?
   - $1,020
   - [x] $780
   - $7.80
   - $1,080
   > The debit is $9.00 − $1.20 = $7.80 a share, and $7.80 × 100 = $780 per contract.

6. {#bk1} [calc] A trader buys a far-month $100 call for $6.00 and sells a near-month $105 call for $2.50 (a diagonal call spread). The trader opens 5 contracts (100 shares each). How much net cash is paid up front?
   - [x] $1,750
   - $300
   - $4,250
   - $3,500
   > The net debit is $6.00 − $2.50 = $3.50 per share. For 5 contracts: $3.50 × 100 × 5 = $1,750.

7. {#bk2} [calc] A trader buys a far-month $100 call for $6.00 and sells a near-month $105 call for $2.50 (a diagonal call spread). At the near-month expiration the stock is at $105 and the far-month call is worth $8.20. What is the profit per share?
   - +$8.20
   - +$5.70
   - [x] +$4.70
   - +$1.20
   > The near $105 call expires worthless at $105. Profit = $8.20 − $3.50 = +$4.70.

8. {#bk3} [calc] A trader buys a far-month $100 call for $6.00 and sells a near-month $105 call for $2.50 (a diagonal call spread). At the near-month expiration the stock is at $110, the short $105 call is worth $5 (intrinsic) and the far-month call is worth $12.00. What is the profit per share if the trader closes both?
   - [x] +$3.50
   - +$8.50
   - +$12.00
   - −$3.50
   > Closing both: the far call is worth $12.00 and the short call costs $5.00 to buy back. Profit = $12.00 − $5.00 − $3.50 net debit = +$3.50.
