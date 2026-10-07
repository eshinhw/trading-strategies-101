---
slug: futures-risk-management
---

# Quiz

1. {#bk1} [calc] A $100,000 account risks 1% per trade. An E-mini trade has a stop 20 points away and each point is worth $50. How many contracts can be traded?
   - 5
   - 10
   - [x] 1
   - 20
   > Risk budget = $1,000. Risk per contract = 20 × $50 = $1,000. Contracts = 1.

2. {#bk2} [calc] A trader limits a day's loss to 3% of a $60,000 account. A crude oil trade risks $0.90 per barrel with 1,000 barrels per contract. How many contracts keep the day's risk within the limit?
   - [x] 2
   - 1
   - 3
   - 6
   > Daily limit = $1,800. Risk per contract = $0.90 × 1,000 = $900. $1,800 / $900 = 2 contracts.

3. {#bk3} [calc] A trader holds 3 E-mini contracts at 4,500 (multiplier $50) in a $90,000 account. What is the notional exposure as a multiple of the account?
   - 3 times
   - 15 times
   - [x] 7.5 times
   - 0.13 times
   > Notional = 3 × 4,500 × $50 = $675,000. $675,000 / $90,000 = 7.5.

4. {#bk4} [calc] A trader is long 4 crude oil contracts (1,000 barrels each) with a sell stop at $78.50. The market opens at $77.00. How much more than planned is lost?
   - $1,500
   - [x] $6,000
   - $4,000
   - $600
   > The gap is $1.50 below the stop. $1.50 × 1,000 × 4 = $6,000.

5. {#bk5} [calc] A strategy wins 45% of the time making 2 times its risk, and loses 55% of the time losing 1 times its risk. What is the expectancy per trade, in multiples of risk?
   - +0.90
   - +1.00
   - −0.10
   - [x] +0.35
   > Expectancy = 0.45 × 2 − 0.55 × 1 = 0.90 − 0.55 = +0.35 per unit risked.

6. {#bk6} [calc] A trader has 10 positions that each risk 1% of the account but all move together in a crisis. What is the account risk if all are stopped out at once?
   - 1%
   - [x] 10%
   - 0.1%
   - 100%
   > If every position loses together, risks add: 10 × 1% = 10%.

7. {#bk7} A trader is highly confident in a trade idea. Which decisions should a separate risk plan still settle in advance?
   - How strongly to believe the thesis, since conviction sets the size
   - Nothing, because a good thesis makes a stop-loss unnecessary
   - Only the entry price, since exits take care of themselves
   - [x] How much capital is at stake, where the position is cut if wrong, and what happens around known event risk
   > A risk plan is decided in advance and independent of conviction. A strong thesis is the reason to enter, not a substitute for knowing the loss limit.

8. {#bk8} Why can a stop-loss order fail to limit a loss to the trigger price?
   - Stop orders are not allowed on futures
   - A stop order only works while the market is closed
   - [x] In a fast or gapping market the order becomes a market order and can fill at a much worse price
   - Stop orders guarantee the exact trigger price at all times
   > Prices can gap past a stop between sessions or in thin markets, so the fill can be well beyond the trigger.

9. {#bk9} What is the best check against over-leverage?
   - [x] Keeping total notional exposure proportionate to account size, not just to what margin technically allows
   - Using the maximum position the broker's margin allows
   - Holding more positions in the same direction
   - Ignoring notional value and watching only the margin balance
   > Margin is only a fraction of notional, so it is possible to control far more exposure than the account can absorb a loss on.
