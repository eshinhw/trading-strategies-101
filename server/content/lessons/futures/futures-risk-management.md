---
slug: futures-risk-management
title: Risk Management for Futures Traders
summary: The practical risk controls every futures trader needs beyond having a market view — position sizing, stop-losses, the risks leverage magnifies, and why a trading thesis is not the same thing as a risk plan.
---

## Position Sizing

Because a futures contract's notional value can be many times the margin required to hold it, position size has to be set relative to account capital and the contract's actual dollar volatility, not just to how strongly a trader believes in a trade. A common approach is to size a position so that a reasonable adverse move costs only a small, predefined fraction of total account capital.

## Stop-Loss Orders and Max Loss

A stop-loss order, covered mechanically in the trading-mechanics lesson, is the most common tool for capping how much a single trade can lose — deciding the maximum acceptable loss before entering a position, rather than reacting emotionally once already in a losing trade. Setting a hard maximum loss per trade, and per day, is what keeps one bad trade or one bad session from doing outsized damage to an account.

## Volatility, Overnight, and Event Risk

A futures position carries risk even while a trader isn't watching it — overnight, over a weekend, or around a scheduled event like an economic data release or a government report, prices can gap sharply between one session's close and the next session's open, jumping straight past any stop-loss level set in between. Traders often reduce position size, or close out entirely, ahead of known high-impact events for exactly this reason.

## Liquidity and Gap Risk

In a thin or fast-moving market, an order can execute at a materially worse price than expected — a gap — especially a stop order converting to a market order during a sharp move, or any order placed in an illiquid contract with a wide bid-ask spread. Trading only reasonably liquid contracts, and sizing down in illiquid ones, is a direct defense against this risk.

## A Trading Thesis Is Not a Risk Plan

A trading thesis is the reason to enter a position — a view that a price, spread, or trend will move a certain way. A risk plan is a separate decision: how much capital is at stake, where the position gets cut if wrong, and what happens around known event risk — decided in advance, independent of how convinced the trader is the thesis will play out. Confusing the two, treating conviction in the thesis as a substitute for a predetermined exit, is one of the more common ways a single trade does outsized damage.

## Avoiding Over-Leverage

Because margin is only a fraction of a contract's notional value, it's possible to control far more exposure than an account can actually absorb a loss on — over-leverage. Keeping total notional exposure across all open positions proportionate to account size, not just to what the margin requirement technically allows, is the core discipline that prevents a string of losses from escalating into a full account wipeout.

## Example

**Position size from a risk budget**

A trader has a $50,000 account and risks no more than 1% on any trade.

$$
1\% \times \$50{,}000 = \$500 \text{ maximum risk}
$$

For 1 crude oil contract (1,000 barrels), the stop distance that fits the budget is:

$$
\frac{\$500}{1{,}000 \text{ barrels}} = \boxed{\$0.50 \text{ per barrel}}
$$

If the setup needs a $2.00 stop instead:

- Risk on 1 contract: 1,000 × $2.00 = $2,000, which is 4% of the account and too large
- Risk on 1 micro contract (100 barrels): 100 × $2.00 = $200, which is 0.4% and fits

The stop comes from the risk budget, not from how bullish the trader feels.

**Event risk: a central bank announcement**

A desk holds 10 crude contracts and expects a possible $2 gap on the news.

- Before trimming: 10 × 1,000 × $2 = $20,000 at risk
- After trimming to 6 contracts: 6 × 1,000 × $2 = $12,000 at risk

The desk gives up some expected payoff to cut the loss from a gap by $8,000, however strongly it believes its rate view.

# Quiz

1. Why does position sizing in futures need to account for more than just conviction in a trade?
   - [x] Because a contract's notional value can be many times the margin required, so size has to be set relative to account capital and volatility, not belief alone
   - Conviction is actually the only factor that should determine position size
   - Position sizing is irrelevant once a stop-loss is in place
   - Futures contracts have no notional value to consider
   > Leverage means a small contract commitment can represent large real exposure, so sizing has to be grounded in account capital and the contract's dollar volatility, not just how strongly a trader believes in the trade.

2. Why can overnight or event risk defeat a stop-loss order?
   - [x] A price can gap sharply between sessions, jumping straight past a stop level with no chance to fill at the intended price
   - Stop-loss orders are guaranteed to fill at the exact stop price under all conditions
   - Overnight risk does not exist in futures markets
   - Stops only work overnight, never during regular trading hours
   > A stop only triggers when price reaches it during trading — a large overnight gap can skip past that level entirely, filling at a materially worse price once trading resumes.

3. What is the difference between a trading thesis and a risk plan?
   - [x] A thesis is the reason to enter a trade; a risk plan is the separate, predetermined decision about capital at risk and exit points, independent of conviction in the thesis
   - They are the same thing and can be used interchangeably
   - A risk plan is only needed if the thesis turns out to be wrong
   - A trading thesis always includes a risk plan automatically
   > Treating strong conviction in a thesis as a reason to skip or override a predetermined risk plan is exactly the mistake this lesson warns against.

4. What does it mean to be over-leveraged in futures trading?
   - [x] Controlling more notional exposure across open positions than the account can actually absorb a loss on, even though margin requirements technically allow it
   - Trading too few contracts relative to account size
   - Only trading contracts with high open interest
   - Using stop-loss orders on every position
   > Because margin is only a fraction of notional value, an account can be allowed to hold far more exposure than it could actually survive a loss on — that gap is over-leverage.

5. A trader with a $50,000 account risks 1% ($500) per trade. Trading one crude oil contract (1,000 barrels), what stop-loss distance caps risk at exactly $500?
   - [x] $0.50 per barrel
   - $5.00 per barrel
   - $50 per barrel
   - $500 per barrel
   > 1,000 barrels × $0.50 = $500 — the stop distance is derived directly from the pre-set risk budget, which is what a risk plan (as opposed to a trading thesis) actually determines.
