---
slug: calendar-put-spread
---

# Quiz

1. {#q1} Which market view fits a calendar put spread?
   - The stock will make a very large move in either direction soon, so the trader wants to profit from the swing
   - The stock will fall sharply over the next few days, so the trader wants unlimited gains from the put
   - The stock will rise sharply before the near-term expiration, so the trader wants to profit from the rally
   - [x] The stock will sit near a specific price through the near-term expiration, a bet on where it is pinned rather than on direction
   > A calendar spread profits from the stock staying near the strike while the short-dated option decays.

2. {#q2} Why does a calendar spread tend to profit if the stock stays near the strike?
   - [x] The option you sold decays faster than the longer-dated option you bought
   - Both options gain value as the stock stays still
   - The long option expires worthless first, so the loss on it is outweighed by the premium collected
   - Time decay only affects the option that you bought, which is why the position gains over time
   > The short-dated option loses time value more quickly than the long-dated one.

3. {#q3} How is a calendar put spread built?
   - Sell a put and buy a put at a lower strike with the same expiration, both of them out of the money
   - [x] Sell a near-term put and buy a put at the same strike with a later expiration, both close to at-the-money
   - Buy a near-term put and sell a later-dated put at a different strike, both of them deep in the money
   - Buy a put and a call at the same strike and expiration, both of them close to being at the money
   > The two puts share a strike but differ in expiration.

4. {#q4} What can a trader do once the short put expires?
   - Nothing, since the position has to be closed completely once the short put has expired or been assigned
   - Buy more long-dated puts immediately, because the long put loses all of its value when the short one expires
   - [x] Sell another short-dated put against the long one, repeating the income cycle, similar to a covered put
   - Convert the position into a straddle by selling a call, since the short put can no longer be replaced
   > The remaining long put can be used again to sell further near-term options.

5. {#calc1} [calc] A trader sells a 30-day put for $1.90 and buys a 60-day put at the same strike for $3.30. What is the most that can be lost per contract?
   - $520
   - $190
   - [x] $140
   - $330
   > The debit is $3.30 − $1.90 = $1.40 a share, or $140 per contract, and the debit is the maximum loss.

6. {#bk1} [calc] A trader sells a near-month $50 put for $1.20 and buys a far-month $50 put for $2.35 (a calendar put spread). The trader opens 10 contracts (100 shares each). How much net cash is paid up front?
   - [x] $1,150
   - $115
   - $2,350
   - $1,200
   > The net debit is $2.35 − $1.20 = $1.15 per share. For 10 contracts: $1.15 × 100 × 10 = $1,150.

7. {#bk2} [calc] A trader sells a near-month $50 put for $1.20 and buys a far-month $50 put for $2.35 (a calendar put spread). At the near-month expiration the stock is at $50 and the far-month put is worth $1.95. What is the profit per share?
   - +$1.95
   - −$1.15
   - [x] +$0.80
   - +$1.15
   > The near put expires worthless. Profit = far put value − net debit = $1.95 − $1.15 = +$0.80.

8. {#bk3} [calc] A trader sells a near-month $50 put for $1.20 and buys a far-month $50 put for $2.35 (a calendar put spread). What is the maximum loss on 3 contracts (100 shares each)?
   - [x] $345
   - $105
   - $705
   - $1,150
   > The most the spread can lose is its net debit: $1.15 × 100 × 3 = $345.
