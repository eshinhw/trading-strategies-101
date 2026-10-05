---
slug: volatility-hedging-short-vxx
title: Hedging Short VXX with VIX Futures
summary: Buying VIX futures alongside a short position in a long-volatility ETN like VXX, to collect the contango roll yield while capping the risk of a sudden volatility spike.
---

## What VXX Is

VXX is a widely-traded exchange-traded note designed to track short-term VIX futures, giving long exposure to volatility. Because VXX typically loses value over time in a contango environment, from the same roll-yield drag discussed with volatility-carry ETNs, some traders short VXX directly to collect that decay as a form of income, betting the structural drag from contango outweighs any short-term volatility spikes.

## The Risk of Going Unhedged

The problem with an unhedged short VXX position is the same tail risk that hits short-volatility ETNs generally: a sudden, sharp spike in volatility can cause VXX to jump dramatically in value, and because the position is short, that jump translates into a correspondingly large, fast loss — potentially large enough to wipe out a substantial portion of the position's capital in a single trading session.

## Hedging With VIX Futures

Hedging a short VXX position with a long position in VIX futures addresses this directly: if volatility spikes and VXX jumps against the short position, the VIX futures purchased as a hedge should also rise in value, offsetting some or most of the loss on the short VXX leg. The tradeoff is that this hedge also eats into the carry the trade is trying to collect during calm periods, since the long VIX futures position itself is subject to the same contango drag working against it.

## Sizing the Hedge

Sizing the hedge is the central design challenge: too little VIX futures exposure and the position remains dangerously exposed to a sharp spike, defeating the purpose of hedging at all; too much and the hedge consumes so much of the contango roll yield that the trade barely earns a positive return during calm periods, undermining the reason for putting the trade on in the first place — a hedged short-VXX position is fundamentally a tradeoff between how much protection you buy and how much carry you're willing to give up for it.

# Quiz

1. What does VXX track, and what kind of volatility exposure does it give?
   - [x] Short-term VIX futures, giving long exposure to volatility
   - The S&P 500's dividend yield
   - Long-term corporate bond yields
   - Short-term VIX futures, giving short exposure to volatility
   > VXX is designed to track short-term VIX futures, giving investors long exposure to volatility — its value tends to rise when volatility rises.

2. Why might a trader short VXX directly?
   - To bet that volatility will spike immediately
   - [x] To collect the contango-driven decay in VXX's value as a form of income, betting the structural drag outweighs short-term spikes
   - Because VXX cannot be shorted under any circumstances
   - To eliminate all risk from a volatility-related position
   > Since VXX tends to lose value over time from the contango roll effect, shorting it directly is a way to try to collect that decay as income.

3. What is the main risk of an unhedged short VXX position?
   - There is no risk once the position is placed
   - [x] A sudden, sharp spike in volatility can cause VXX to jump dramatically, producing a large, fast loss on the short position
   - VXX can only ever move in small, gradual increments
   - Short VXX positions are risk-free by regulation
   > Because the position is short a long-volatility instrument, a sharp volatility spike (which makes VXX jump up) directly produces a large loss on the short position.

4. How does buying VIX futures hedge a short VXX position?
   - It has no effect on the position's risk at all
   - [x] If volatility spikes and VXX jumps against the short position, the long VIX futures should also rise in value, offsetting some or most of the loss
   - It doubles the risk of the short VXX position
   - It eliminates the need to monitor the position at all
   > The long VIX futures hedge is designed to gain value during the same volatility spikes that would hurt the short VXX leg, offsetting the loss.

5. What is the central tradeoff in sizing the VIX futures hedge?
   - There is no tradeoff — more hedging is always strictly better
   - [x] Too little hedge leaves the position exposed to a spike; too much hedge eats into the contango carry the trade is trying to collect
   - The hedge size has no effect on the trade's carry or risk
   - The hedge must always exactly equal the short VXX position's dollar value
   > More hedge protection reduces spike risk but also consumes more of the contango roll yield the trade earns during calm periods — sizing the hedge means balancing protection against reduced carry.
