---
slug: concept-reading-a-payoff-diagram
title: Reading a Payoff Diagram
summary: How to read the chart you'll see on every strategy lesson in this course.
---

## What the Chart Shows

A payoff diagram plots profit or loss (y-axis) at expiration against the stock's price at expiration (x-axis). It answers one question: 'if the stock ends up at this price, how much money did I make or lose?'

## The Breakeven Point

The breakeven point is where the line crosses zero — below it you lose money, above it (or vice versa) you profit, depending on the strategy's shape. Some strategies have two breakevens (a range that's profitable, or a range that's a loss); some have none.

## Max Profit and Max Loss

Max profit and max loss are the best and worst outcomes the strategy can produce. For some strategies these are hard caps (a butterfly can't lose more than its debit); for others one side is 'unlimited' — the line keeps sloping away from zero as the stock keeps moving, with no ceiling or floor.

## Reading the Shape

The shape itself tells a story: a flat line means 'this outcome doesn't depend on the stock price here.' A sloped line means 'I'm exposed dollar-for-dollar in this zone.' A kink is where a leg's strike price is — that's where its behavior changes. Learning to read the shape at a glance, before looking at the exact numbers, is the single most useful skill this course builds.

## Example

Two positions on a stock at 100, each read from its payoff at expiration (per share).

**Long call: strike 100, premium paid 5.00**

- Stock at 90: −5.00
- Stock at 100: −5.00
- Stock at 105: 0.00
- Stock at 110: +5.00
- Stock at 120: +15.00

$$
\text{Maximum loss} = 5.00 \text{ per share} = \$500 \qquad \text{Breakeven} = 100 + 5 = 105
$$

The diagram is flat on the left (capped loss) and rises on the right (no cap on profit).

**Short call: strike 100, premium received 5.00**

- Stock at 100: +5.00
- Stock at 105: 0.00
- Stock at 120: −15.00
- Stock at 150: −45.00

$$
\text{Maximum profit} = 5.00 \text{ per share} = \$500 \qquad \text{Maximum loss} = \text{unlimited}
$$

A risk manager who has never seen the trade can read the shape and spot the danger. A line falling without limit on the right means uncapped loss.

# Quiz

1. What does the point where the payoff line crosses zero represent?
   - Max profit
   - Max loss
   - [x] Breakeven
   - The strike price, always
   > That's the breakeven — the stock price at expiration where the trade neither makes nor loses money.

2. A payoff line that keeps sloping upward with no flattening as the stock price rises means:
   - Max profit is capped
   - [x] Max profit is unlimited
   - The strategy always loses money
   - The chart has an error
   > If the line never flattens as the stock keeps rising, profit keeps growing without a ceiling — unlimited max profit.

3. What typically causes a 'kink' (a bend) in a payoff diagram?
   - Random noise in the chart
   - [x] A strike price, where an option leg's behavior changes
   - The current stock price, always
   - Kinks only appear in broken charts
   > Each option leg only starts paying off once the stock crosses its strike — that transition is exactly where you'll see a kink.

4. What does a payoff diagram's x-axis represent?
   - Time until expiration
   - [x] The stock's price at expiration
   - The option's premium
   - Implied volatility
   > The x-axis is the stock price at expiration; the y-axis is profit or loss at that price.

5. What does a flat (horizontal) segment of a payoff line tell you?
   - The strategy always loses money
   - [x] The outcome doesn't change with the stock price in that zone
   - The chart is missing data
   - The stock is exactly at the strike price
   > A flat line means profit or loss stays the same no matter how the stock price moves within that zone — you're not exposed there.
