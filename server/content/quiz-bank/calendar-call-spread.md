---
slug: calendar-call-spread
---

# Quiz

1. {#q1} Which market view fits a calendar call spread?
   - [x] The stock will sit near a specific price through the near-term expiration, which is a bet on where it is pinned, not on direction
   - The stock will make a very large move in either direction soon, so the trader wants to profit from the swing
   - The stock will rise sharply over the next few days, so the trader wants unlimited upside from the call
   - The stock will fall sharply before the near-term expiration, so the trader wants to profit from the decline
   > A calendar spread profits from the stock staying near the strike while the short-dated option decays.

2. {#q2} Why does a calendar spread tend to profit if the stock stays near the strike?
   - Both options gain value together as the stock stays still, so the position grows steadily over time
   - [x] The option you sold decays faster than the longer-dated option you bought
   - The long option expires worthless first, so the loss on it is outweighed by the premium collected
   - Time decay only affects the option that you bought, which is why the position gains over time
   > The short-dated option loses time value more quickly than the long-dated one.

3. {#q3} How is a calendar call spread built?
   - Sell a call and buy a call at a higher strike with the same expiration, both of them out of the money
   - Buy a near-term call and sell a later-dated call at a different strike, both of them deep in the money
   - [x] Sell a near-term call and buy a call at the same strike with a later expiration, both close to at-the-money
   - Buy a call and a put at the same strike and expiration, both of them close to being at the money
   > The two calls share a strike but differ in expiration.

4. {#q4} What limits the risk of a calendar call spread?
   - The risk is unlimited if the stock rallies, since the short call is covered only until it expires
   - The risk equals the width between the two strikes, which is paid if the stock moves far away
   - There is no risk at all if the stock stays still, since time decay always favors the position
   - [x] The maximum loss is the net debit paid to open it
   > Because the long option is further out in time, the loss cannot exceed what was paid.

5. {#calc1} [calc] A trader sells a 30-day call for $2.10 and buys a 60-day call at the same strike for $3.60. What is the net debit, and the most that can be lost per contract?
   - [x] $1.50 per share, so $150
   - $5.70 per share, so $570
   - $1.50 per share, so unlimited
   - $2.10 per share, so $210
   > The debit is $3.60 − $2.10 = $1.50 a share, which is $150 for a 100-share contract. That debit is the most the spread can lose.

6. {#bk1} [calc] A trader sells a near-month $100 call for $2.10 and buys a far-month $100 call for $4.20 (a calendar call spread). The trader opens 4 contracts (100 shares each). What is the maximum possible loss in dollars?
   - $210
   - $1,680
   - $420
   - [x] $840
   > The net debit is $4.20 − $2.10 = $2.10 per share. The most the spread can lose is that debit: $2.10 × 100 × 4 = $840.

7. {#bk2} [calc] A trader sells a near-month $100 call for $2.10 and buys a far-month $100 call for $4.20 (a calendar call spread). At the near-month expiration the stock is at $100 and the far-month call is worth $3.40. What is the profit per share?
   - +$3.40
   - [x] +$1.30
   - −$2.10
   - +$2.10
   > The near call expires worthless and the far call is worth $3.40. Profit = $3.40 − $2.10 net debit = +$1.30.

8. {#bk3} [calc] A trader sells a near-month $100 call for $2.10 and buys a far-month $100 call for $4.20 (a calendar call spread). The stock falls sharply, the near call expires worthless, and the far call is worth only $1.00. What is the result per share?
   - −$2.10
   - −$1.00
   - +$1.00
   - [x] −$1.10
   > The far call is worth $1.00 against the $2.10 net debit paid: $1.00 − $2.10 = −$1.10, which is less than the full debit.
