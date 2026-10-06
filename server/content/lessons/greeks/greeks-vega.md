---
slug: greeks-vega
title: Vega
summary: Vega measures how much an option's price changes when implied volatility changes by one percentage point, so it is the Greek that tells you how much a position gains or loses from shifts in the market's expectation of future movement.
---

## What Vega Measures

Vega is the change in an option's price for a 1 percentage point change in implied volatility. It is not literally a Greek letter, but it is treated as one. An option with a vega of 0.15 gains about 0.15 per share if implied volatility rises by one point, which is 15 dollars per contract, and loses the same amount if it falls by one point.

## Long Options Have Positive Vega

Both calls and puts become more valuable when implied volatility rises, because bigger expected moves make a profitable outcome more likely. Buying options therefore gives positive vega, and selling options gives negative vega. A trader who expects volatility to rise buys options, and one who expects it to fall sells them, even without any view on direction.

## Where Vega Is Largest

Vega is highest for at-the-money options and increases with the time left to expiration, since there is more time for a change in expected volatility to matter. Short-dated options have a small vega, while long-dated options have a large one. Far out-of-the-money and deep in-the-money options have lower vega than those at the money.

## Volatility Crush

Implied volatility often climbs before a known event, such as an earnings report, and then falls sharply once the news is out. This drop, known as a volatility crush, can reduce option prices even if the stock moves in the expected direction. A trader who buys a call before earnings can be right about direction and still lose money if the fall in implied volatility is larger than the gain from the stock's move.

## Vega in Strategies

A long straddle has a large positive vega, making it a bet that volatility, or the stock's actual movement, will exceed what the market expects. A short iron condor or short strangle has negative vega and does well when volatility falls. Spreads that combine long and short options at different strikes have a smaller net vega because the legs offset each other.

## In Practice

A trader buys a call with a vega of 0.20 two days before earnings, when implied volatility is 50%. After the report the stock rises, but implied volatility falls to 35%, a drop of 15 points. The vega effect is about 0.20 × (−15) = −3.00 per share, or 300 dollars per contract, which can easily outweigh the gain from the stock's move.

# Quiz

1. What does vega measure?
   - The effect of time
   - [x] The change in an option's price for a 1 percentage point change in implied volatility
   - The change for a 1 dollar stock move
   - The effect of interest rates
   > Vega is the sensitivity to implied volatility.

2. What happens to both call and put prices when implied volatility rises?
   - Both fall
   - [x] Both generally rise
   - Calls rise and puts fall
   - Neither changes
   > Higher expected volatility raises the value of both calls and puts.

3. Where is vega typically largest?
   - For short-dated, far out-of-the-money options
   - [x] For at-the-money options with a long time to expiration
   - For options about to expire
   - It is the same for all options
   > Longer time and at-the-money strikes give the greatest sensitivity to volatility.

4. What is a volatility crush?
   - A rise in implied volatility before an event
   - [x] A sharp fall in implied volatility after an event, which can lower option prices even if the stock moves as expected
   - A ban on options trading
   - A rise in the stock price
   > After a known event, implied volatility often drops, and the vega loss can outweigh gains from the stock's move.

5. A call has a vega of 0.20. Implied volatility falls 15 points. About how much does the call lose per share?
   - 0.20
   - 1.50
   - [x] 3.00
   - 30.00
   > The effect is about 0.20 × 15 = 3.00 per share.
