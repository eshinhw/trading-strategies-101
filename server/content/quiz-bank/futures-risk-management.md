---
slug: futures-risk-management
---

# Quiz

1. {#q1} Why does position sizing in futures need to account for more than just conviction in a trade?
   - [x] Because a contract's notional value can be many times the margin required, so size has to be set relative to account capital and volatility, not belief alone
   - Conviction is actually the only factor that should determine position size
   - Position sizing is irrelevant once a stop-loss is in place
   - Futures contracts have no notional value to consider
   > Leverage means a small contract commitment can represent large real exposure, so sizing has to be grounded in account capital and the contract's dollar volatility, not just how strongly a trader believes in the trade.

2. {#q2} Why can overnight or event risk defeat a stop-loss order?
   - [x] A price can gap sharply between sessions, jumping straight past a stop level with no chance to fill at the intended price
   - Stop-loss orders are guaranteed to fill at the exact stop price under all conditions
   - Overnight risk does not exist in futures markets
   - Stops only work overnight, never during regular trading hours
   > A stop only triggers when price reaches it during trading — a large overnight gap can skip past that level entirely, filling at a materially worse price once trading resumes.

3. {#q3} What is the difference between a trading thesis and a risk plan?
   - [x] A thesis is the reason to enter a trade; a risk plan is the separate, predetermined decision about capital at risk and exit points, independent of conviction in the thesis
   - They are the same thing and can be used interchangeably
   - A risk plan is only needed if the thesis turns out to be wrong
   - A trading thesis always includes a risk plan automatically
   > Treating strong conviction in a thesis as a reason to skip or override a predetermined risk plan is a classic and costly mistake.

4. {#q4} What does it mean to be over-leveraged in futures trading?
   - [x] Controlling more notional exposure across open positions than the account can actually absorb a loss on, even though margin requirements technically allow it
   - Trading too few contracts relative to account size
   - Only trading contracts with high open interest
   - Using stop-loss orders on every position
   > Because margin is only a fraction of notional value, an account can be allowed to hold far more exposure than it could actually survive a loss on — that gap is over-leverage.

5. {#q5} [calc] A trader with a $50,000 account risks 1% ($500) per trade. Trading one crude oil contract (1,000 barrels), what stop-loss distance caps risk at exactly $500?
   - [x] $0.50 per barrel
   - $5.00 per barrel
   - $50 per barrel
   - $500 per barrel
   > 1,000 barrels × $0.50 = $500 — the stop distance is derived directly from the pre-set risk budget, which is what a risk plan (as opposed to a trading thesis) actually determines.

6. {#bk1} [calc] A $100,000 account risks 1% per trade. An E-mini trade has a stop 20 points away and each point is worth $50. How many contracts can be traded?
   - 5
   - 10
   - [x] 1
   - 20
   > Risk budget = $1,000. Risk per contract = 20 × $50 = $1,000. Contracts = 1.

7. {#bk2} [calc] A trader limits a day's loss to 3% of a $60,000 account. A crude oil trade risks $0.90 per barrel with 1,000 barrels per contract. How many contracts keep the day's risk within the limit?
   - [x] 2
   - 1
   - 3
   - 6
   > Daily limit = $1,800. Risk per contract = $0.90 × 1,000 = $900. $1,800 / $900 = 2 contracts.

8. {#bk3} [calc] A trader holds 3 E-mini contracts at 4,500 (multiplier $50) in a $90,000 account. What is the notional exposure as a multiple of the account?
   - 3 times
   - 15 times
   - [x] 7.5 times
   - 0.13 times
   > Notional = 3 × 4,500 × $50 = $675,000. $675,000 / $90,000 = 7.5.

9. {#bk4} [calc] A trader is long 4 crude oil contracts (1,000 barrels each) with a sell stop at $78.50. The market opens at $77.00. How much more than planned is lost?
   - $1,500
   - [x] $6,000
   - $4,000
   - $600
   > The gap is $1.50 below the stop. $1.50 × 1,000 × 4 = $6,000.

10. {#bk5} [calc] A strategy wins 45% of the time making 2 times its risk, and loses 55% of the time losing 1 times its risk. What is the expectancy per trade, in multiples of risk?
   - +0.90
   - +1.00
   - −0.10
   - [x] +0.35
   > Expectancy = 0.45 × 2 − 0.55 × 1 = 0.90 − 0.55 = +0.35 per unit risked.

11. {#bk6} [calc] A trader has 10 positions that each risk 1% of the account but all move together in a crisis. What is the account risk if all are stopped out at once?
   - 1%
   - [x] 10%
   - 0.1%
   - 100%
   > If every position loses together, risks add: 10 × 1% = 10%.

12. {#bk7} A trader is highly confident in a trade idea. Which decisions should a separate risk plan still settle in advance?
   - How strongly to believe the thesis, since conviction sets the size
   - Nothing, because a good thesis makes a stop-loss unnecessary
   - Only the entry price, since exits take care of themselves
   - [x] How much capital is at stake, where the position is cut if wrong, and what happens around known event risk
   > A risk plan is decided in advance and independent of conviction. A strong thesis is the reason to enter, not a substitute for knowing the loss limit.

13. {#bk8} Why can a stop-loss order fail to limit a loss to the trigger price?
   - Stop orders are not allowed on futures
   - A stop order only works while the market is closed
   - [x] In a fast or gapping market the order becomes a market order and can fill at a much worse price
   - Stop orders guarantee the exact trigger price at all times
   > Prices can gap past a stop between sessions or in thin markets, so the fill can be well beyond the trigger.

14. {#bk9} What is the best check against over-leverage?
   - [x] Keeping total notional exposure proportionate to account size, not just to what margin technically allows
   - Using the maximum position the broker's margin allows
   - Holding more positions in the same direction
   - Ignoring notional value and watching only the margin balance
   > Margin is only a fraction of notional, so it is possible to control far more exposure than the account can absorb a loss on.
