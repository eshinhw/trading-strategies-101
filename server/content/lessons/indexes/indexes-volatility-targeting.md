---
slug: indexes-volatility-targeting
title: Index Volatility Targeting with Risk-Free Asset
summary: Dynamically shifting a portfolio between an index and a risk-free asset to hold the portfolio's overall volatility near a constant target, rather than letting it swing with the market.
---

## Adjusting Exposure to Hold a Target

An index's realized volatility isn't constant — it tends to rise during turbulent, uncertain periods and fall during calm ones. A volatility-targeting strategy responds to this by dynamically adjusting how much of a portfolio is allocated to the index versus a risk-free asset, like short-term Treasury bills, aiming to keep the overall portfolio's volatility close to a fixed target level regardless of how choppy or calm the index itself is behaving.

## The Mechanism

The mechanism is straightforward: when the index's recent realized volatility is running below the target, the strategy increases its allocation to the index, since more index exposure is needed to reach the target volatility, potentially even using leverage if allowed; when the index's volatility rises above the target, the strategy reduces its index allocation and shifts more into the risk-free asset, scaling back exposure to keep overall portfolio volatility from rising along with it.

## A More Stable Risk Level

This produces a portfolio whose risk level stays comparatively stable over time, in contrast to a simple buy-and-hold index position, whose risk level fluctuates directly with whatever the market happens to be doing — proponents argue this is more intuitive for investors who want a consistent risk experience, since a fixed-dollar index position can quietly become much riskier during a volatility spike without the investor taking any action.

## The Lag Problem

The strategy isn't without drawbacks: because it reduces exposure after volatility has already risen, a lagging response, based on backward-looking realized volatility, and increases exposure after volatility has already fallen, it can end up selling into some of a selloff and buying into some of a calm rally — a pattern that resembles a mechanical version of "sell weakness, buy strength" rather than genuine market timing, and can underperform a static buy-and-hold approach in markets where volatility and returns aren't cleanly related in the way the strategy assumes.

# Quiz

1. What does a volatility-targeting strategy dynamically adjust?
   - The dividend yield of the index
   - [x] How much of a portfolio is allocated to the index versus a risk-free asset
   - The number of shares in the underlying companies
   - The maturity of every bond in a fixed-income portfolio
   > The strategy shifts allocation between the index and a risk-free asset to try to hold overall portfolio volatility near a fixed target.

2. What does the strategy do when the index's recent realized volatility falls below the target?
   - It sells all index exposure and holds only the risk-free asset
   - [x] It increases its allocation to the index, potentially using leverage if allowed, to reach the target volatility
   - It has no reaction to falling volatility
   - It immediately liquidates the entire portfolio
   > When the index is calmer than the target volatility level, the strategy adds more index exposure (or leverage) to bring overall portfolio risk back up to target.

3. What happens to the strategy's index allocation when volatility rises above the target?
   - The allocation to the index increases further
   - [x] The allocation to the index is reduced, shifting more into the risk-free asset
   - The strategy takes no action regardless of volatility changes
   - The index is replaced with a completely different asset class
   > Rising volatility triggers a reduction in index exposure and a shift toward the risk-free asset, to keep overall portfolio volatility from rising along with the market.

4. How does a volatility-targeted portfolio's risk level compare to a simple buy-and-hold index position?
   - It is identical, since both hold the same underlying index
   - [x] It stays comparatively stable over time, while a buy-and-hold position's risk fluctuates directly with whatever the market is doing
   - It is always riskier than a buy-and-hold position
   - Volatility targeting eliminates all risk entirely
   > The whole point of the strategy is to keep the portfolio's realized risk level more consistent, in contrast to a static position whose riskiness rises and falls with market volatility on its own.

5. What is a key drawback of volatility targeting's reliance on backward-looking realized volatility?
   - It has no drawbacks — the strategy responds instantly to future volatility
   - [x] It's a lagging response that can end up reducing exposure after a selloff has already happened and increasing exposure after a calm rally has already happened
   - It requires no historical data whatsoever
   - Realized volatility cannot be measured for any index
   > Since the strategy reacts to volatility that has already occurred, it can inadvertently sell into weakness and buy into strength, a pattern that can underperform a static approach when volatility and returns don't move in the way the strategy assumes.
