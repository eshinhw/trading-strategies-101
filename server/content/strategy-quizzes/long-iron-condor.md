---
slug: long-iron-condor
---

# Quiz

1. Why is the iron condor one of the most widely used income strategies?
   - [x] It collects income with strictly limited, known-in-advance risk when the stock stays in a range
   - It has unlimited profit potential, because the long options gain value whenever the stock makes a large move
   - It profits from a large move in either direction, since the long wings are cheap compared with a straddle
   - It requires no margin, because the long options remove every possible obligation that the short options create
   > Both long options cap the total risk on each side.

2. How is it more forgiving than an iron butterfly?
   - It collects a larger credit than an iron butterfly, because the long wings are placed much further from the money
   - [x] The short strikes are out of the money rather than at the money, so the stock has more room before losses begin
   - It has unlimited profit, because the extra distance between the strikes leaves the position open to a big move
   - It has no risk, because the wider spacing between the strikes means the options can never finish in the money
   > A wider profit range comes at the cost of a smaller credit.

3. How is a long iron condor built?
   - Buy an out-of-the-money put spread and an out-of-the-money call spread at the same time, same expiration
   - Sell a straddle and buy a strangle at the same strike, collecting a credit that is not at risk of loss
   - [x] Sell an out-of-the-money put spread and an out-of-the-money call spread at the same time, same expiration
   - Buy a call and a put at the same strike, then sell a further call and put to reduce the overall cost
   > It is a bull put spread plus a bear call spread.

4. The stock breaks out far beyond one of the long wings. What happens?
   - The loss is unlimited, because the short call is exposed to a very large rally beyond the long wing
   - The trader earns the maximum profit, because the long wing gains value when the stock breaks out far
   - The trader keeps the full credit, because the long wing cancels any loss that the short option creates
   - [x] The loss is capped at the wing width minus the credit received
   > The long options define the maximum loss.

5. {#calc1} [calc] A trader builds a Long Iron Condor: buys one $85 put, sells one $95 put, sells one $105 call, and buys one $115 call, for a net credit of $4 per share. What is the maximum loss at expiration, per share?
   - [x] $6
   - $4
   - $30
   - $91
   > For this position (K1 = 85, K2 = 95, K3 = 105, K4 = 115, net credit = 4), the maximum loss is $6 per share. Formula: L_max = κ - C, equidistant strikes with gap κ.
