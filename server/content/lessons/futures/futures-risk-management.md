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

## Example in Practice

A desk holding a large futures position ahead of a major central bank rate announcement — a known high-impact event — will typically trim the position or widen its stop beforehand, accepting a smaller expected payoff in exchange for less exposure to the sharp, gap-prone move such announcements often trigger, no matter how strongly the desk believes in its underlying rate thesis. A retail trader applies the same discipline at a smaller scale with a hard number instead of a headline: with a $50,000 account and a rule of risking no more than 1% ($500) on any single trade, a $0.50-per-barrel stop-loss on one crude oil contract (1,000 barrels) caps that trade's risk at exactly $500. The stop distance comes from the risk budget, not from how bullish or bearish the trader feels about oil that day — which is the whole point of having a risk plan separate from a trading thesis.

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
