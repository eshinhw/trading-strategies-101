---
slug: etf-leveraged-etfs
title: Leveraged ETFs (LETFs)
summary: Understanding how daily-reset leverage in LETFs causes long-term returns to diverge from a simple multiple of the underlying index — and how that divergence can itself be traded.
---

## What a Leveraged ETF Is

A leveraged ETF (LETF) aims to deliver a multiple, commonly 2x or 3x, of its underlying index's daily return, using derivatives and daily rebalancing to reset that leverage ratio every single trading day. The word "daily" is the crucial detail: an LETF's stated multiple applies only to a single day's return, not to its return over any longer holding period.

## Volatility Decay

This daily reset causes a well-known effect called volatility decay, or beta slippage: because gains and losses compound differently than a simple multiple would suggest, a 2x LETF held over many days in a choppy, sideways market can actually lose money even if the underlying index ends up completely flat over that same period — the daily rebalancing effectively "buys high and sells low" on a small scale every day the index reverses direction.

![leveraged-etf-decay](A choppy but flat index versus a 2x LETF over the same period — daily rebalancing quietly erodes the LETF's value.)

## What Drives the Decay

The size of this decay grows with the underlying index's volatility and the length of the holding period: in a smoothly trending market, a leveraged ETF can track reasonably close to its stated multiple over time, but the more choppy and volatile the underlying index is, the more its long-term LETF return diverges below a simple multiple of the index's own long-term return — which is why LETFs are generally described as tools for short-term, tactical exposure rather than long-term buy-and-hold positions.

## Trading the Decay Itself

This decay effect is itself something traders try to exploit directly: a strategy that shorts a pair of same-underlying leveraged ETFs, say, both the 3x-long and 3x-short versions of the same index, can, under the right conditions, collect the volatility decay from both sides simultaneously, profiting from the structural drag of daily rebalancing rather than betting on the underlying index's direction at all — though this comes with its own risks, since a strong sustained trend in either direction can produce large losses on the side of the pair moving against the position.

# Quiz

1. What does a leveraged ETF's stated multiple (e.g., "2x") actually apply to?
   - The ETF's return over its entire lifetime
   - [x] A single trading day's return of the underlying index
   - The ETF's return over exactly one calendar year
   - The dividend yield of the underlying index
   > LETFs reset their leverage daily, so the stated multiple is only accurate for a single day's return, not for longer holding periods.

2. What is "volatility decay" (or beta slippage) in the context of leveraged ETFs?
   - The guaranteed steady appreciation of an LETF over time
   - [x] The effect where daily rebalancing causes long-term LETF returns to diverge from, and often underperform, a simple multiple of the index's own long-term return, especially in choppy markets
   - A regulatory fee charged on all leveraged ETFs
   - The process of an LETF converting into a regular, unleveraged ETF
   > Because daily resets compound differently than a simple multiple would suggest, an LETF held over time in a volatile, sideways market can underperform, or even lose money, relative to what its stated multiple might suggest, even if the underlying index ends up flat.

3. Can a 2x leveraged ETF lose money even if its underlying index ends up completely flat over the holding period?
   - No, this is mathematically impossible
   - [x] Yes — in a choppy, sideways market, daily rebalancing can cause the LETF to lose money even when the underlying index is flat over the same period
   - Only if the index falls to zero
   - Only on the first day the LETF is issued
   > This is the core consequence of volatility decay — the daily "buy high, sell low" effect of rebalancing in a choppy market can erode an LETF's value even without a net move in the underlying index.

4. What factor most strongly increases the size of an LETF's volatility decay over time?
   - The underlying index's dividend yield
   - [x] The underlying index's volatility and the length of the holding period
   - The number of shares outstanding in the LETF
   - The LETF's expense ratio alone
   > The more volatile and choppy the underlying index, and the longer the LETF is held, the further its actual return tends to diverge from a simple multiple of the index's return.

5. How might a trader try to directly exploit the volatility decay effect in leveraged ETFs?
   - By buying and holding a single LETF for decades regardless of market conditions
   - [x] By shorting a pair of same-underlying leveraged ETFs (e.g., both the 3x-long and 3x-short versions), aiming to collect decay from both sides
   - Volatility decay cannot be traded directly under any strategy
   - By only ever trading unleveraged ETFs
   > A short position in both directions of a leveraged pair can, under the right conditions, profit from the structural drag of daily rebalancing itself, rather than from betting on the underlying index's direction — though a strong sustained trend in either direction still poses a real risk to this trade.
