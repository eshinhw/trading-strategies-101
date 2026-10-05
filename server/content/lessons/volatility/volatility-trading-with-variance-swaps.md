---
slug: volatility-trading-with-variance-swaps
title: Volatility Trading with Variance Swaps
summary: Trading realized variance directly via a swap contract, avoiding the path-dependent hedging headaches of replicating a pure volatility bet with options.
---

## What a Variance Swap Pays

A variance swap is a derivative contract that pays out based on the difference between realized variance, volatility squared, over a period and a variance level agreed upon when the contract was entered — the buyer profits if realized volatility comes in higher than what was priced into the swap, and the seller profits if it comes in lower. Unlike an option, a variance swap's payoff depends only on how much the underlying actually moved over the period, not on the specific path it took to get there or where it ended up relative to any particular strike.

## Avoiding the Gamma-Hedging Problem

This is the key advantage variance swaps offer over trying to build a pure volatility bet out of options: a single option's exposure to volatility changes as the stock price moves, its gamma isn't constant, which is exactly the problem gamma hedging is built to manage for an options position — a variance swap, by contrast, provides volatility exposure that doesn't require this kind of continuous delta-hedging to isolate, since its payoff is already defined directly in terms of realized variance rather than built up from the changing sensitivities of an option position.

## How It's Priced in Practice

In practice, a variance swap's payoff can be replicated, and is often priced, using a carefully weighted portfolio of options across many different strikes on the same underlying and expiration — but from the trader's perspective, buying or selling the swap directly gives that same aggregated volatility exposure in one contract, without needing to construct, monitor, and rebalance that whole options portfolio individually.

## Who Trades Variance Swaps

Variance swaps are typically used by more sophisticated institutional participants — hedge funds, volatility-focused funds, and dealers hedging their own options books — since they trade over-the-counter rather than on a public exchange, require a counterparty relationship and negotiated terms, and their payoff is quadratic in the underlying's moves, a "variance" swap rather than a "volatility" swap, meaning large moves have an outsized effect on the payoff relative to what a simpler linear intuition about volatility might suggest.

# Quiz

1. What does a variance swap's payoff depend on?
   - The specific path the underlying took and where it ended up relative to a strike price
   - [x] The difference between realized variance over the period and the variance level agreed upon when the contract was entered
   - The dividend yield of the underlying stock
   - The total trading volume during the contract period
   > A variance swap pays out based purely on how much realized variance differed from the agreed-upon level, unlike an option, whose payoff depends on the path and the final price relative to a strike.

2. What key advantage does a variance swap offer over trying to build a pure volatility bet from options?
   - Variance swaps require no counterparty
   - [x] It provides volatility exposure without needing continuous delta-hedging to isolate it, since the payoff is already defined directly in terms of realized variance
   - Variance swaps are always cheaper than any options position
   - Variance swaps eliminate all forms of risk entirely
   > A single option's volatility exposure changes as the stock moves, requiring gamma hedging to isolate a pure volatility bet — a variance swap's payoff is already defined in terms of realized variance, sidestepping that issue.

3. How is a variance swap's payoff often replicated or priced in practice?
   - Using a single at-the-money option only
   - [x] Using a carefully weighted portfolio of options across many different strikes on the same underlying and expiration
   - Variance swaps have no relationship to the options market
   - Using only futures contracts, with no options involved
   > The aggregated volatility exposure a variance swap provides can be replicated with a weighted basket of options across strikes, which is part of how such swaps are typically priced.

4. What kind of market participants typically use variance swaps?
   - Only individual retail investors trading small accounts
   - [x] More sophisticated institutional participants like hedge funds, volatility-focused funds, and dealers hedging their own options books
   - Variance swaps are not used by any real market participants
   - Only government central banks
   > Since variance swaps trade over-the-counter and require a negotiated counterparty relationship, they're typically the domain of institutional and professional participants rather than retail traders.

5. Why does a variance swap's payoff have an outsized effect from large underlying moves?
   - Because the payoff is linear in the underlying's moves, like a simple volatility swap
   - [x] Because the payoff is quadratic in the underlying's moves — it's a "variance" swap, not a "volatility" swap — so large moves affect the payoff more than a simpler linear intuition might suggest
   - Because variance swaps only pay out on the exact settlement date
   - Large moves have no effect on a variance swap's payoff
   > Since variance is volatility squared, the swap's payoff scales quadratically with the size of underlying moves, giving large moves a disproportionately large effect compared to what a "volatility" swap (linear) would produce.
