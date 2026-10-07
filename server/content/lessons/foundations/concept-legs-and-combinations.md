---
slug: concept-legs-and-combinations
title: Legs and Combinations
summary: The mental model that makes dozens of strategies feel like far fewer.
---

## What a Leg Is

Every strategy in this course — no matter how exotic-sounding — is a combination of a small number of 'legs': individual positions in stock, calls, or puts, each with its own direction (long/short) and, for options, a strike price.

## Combining Simpler Strategies

This matters because it means you don't need to memorize dozens of unrelated recipes. A bull call spread is a long call plus a short call. An iron condor is a bull put spread plus a bear call spread, run at the same time. A long straddle is a long call plus a long put at the same strike. Once you can see a complex strategy as 'strategy A plus strategy B,' it stops being intimidating.

## How This Course Is Ordered

The strategies in this course are ordered from the simplest to the most advanced. They start with single options, long and short calls and puts, then move to a stock position paired with an option, then to two-leg spreads, and finally to the three- and four-leg strategies built by combining or adjusting those spreads, such as butterflies, condors, and calendar spreads. When you reach a new strategy, your first move should be to count the legs and ask which simpler strategies you can already see inside it.

## Seeing It in the Simulator

The Options Payoff Simulator in the Practice section lets you build a position one leg at a time and watch the combined payoff line, which is really just the sum of what each leg would do on its own.

## Example

A bull call spread on a stock trading at 100 is built from two legs.

- Leg 1: buy a 100-strike call for 5.00
- Leg 2: sell a 110-strike call for 2.00

**Net cost**

$$
5.00 - 2.00 = 3.00 \text{ debit, which is } \$300 \text{ per contract}
$$

**Each leg and the total, at expiration (per share)**

- Stock at 90: long call −5.00, short call +2.00, total **−3.00**
- Stock at 105: long call (105 − 100) − 5 = 0.00, short call +2.00, total **+2.00**
- Stock at 115: long call (115 − 100) − 5 = +10.00, short call 2 − (115 − 110) = −3.00, total **+7.00**

**Key numbers**

$$
\text{Maximum loss} = \$300 \qquad \text{Maximum profit} = (110 - 100 - 3.00) \times 100 = \$700
$$

$$
\text{Breakeven} = 100 + 3.00 = 103
$$

Reading the position as legs you already know (a long call and a short call) gives the whole payoff without memorizing the strategy's shape.

# Quiz

1. An iron condor can be understood as a combination of which two simpler strategies?
   - A long straddle and a short straddle
   - [x] A bull put spread and a bear call spread
   - Two covered calls
   - A protective put and a protective call
   > An iron condor sells an OTM put spread and an OTM call spread at the same time — a bull put spread plus a bear call spread.

2. What's the main benefit of thinking in terms of 'legs' rather than memorizing whole strategies?
   - It makes the payoff diagrams disappear
   - [x] It lets you recognize complex strategies as combinations of simpler ones you already understand
   - It removes the need to know strike prices
   - There is no benefit — every strategy must be memorized independently
   > Seeing the building blocks means new, unfamiliar-looking strategies become far less intimidating once you spot the simpler strategies inside them.

3. Per this lesson, a bull call spread is described as a combination of which two positions?
   - A long put and a short put
   - [x] A long call and a short call
   - A long call and a long put
   - A covered call and a protective put
   > A bull call spread is a long call plus a short call at a different strike — one of the simplest examples of combining legs.

4. A long straddle is described in this lesson as which combination?
   - [x] A long call and a long put at the same strike
   - A long call and a short call at different strikes
   - Two long puts at different strikes
   - A long stock position plus a short call
   > A long straddle is a long call plus a long put at the same strike — betting on a big move in either direction.

5. What does the Options Payoff Simulator in the Practice section let you see, according to this lesson?
   - That every strategy is unique and unrelated to the others
   - [x] How the combined payoff line is really just the sum of what each individual leg would do on its own
   - The historical price of the underlying stock
   - The tax treatment of each strategy
   > Watching the combined line break down into its legs reinforces the core mental model: complex strategies are just sums of simpler positions.

6. {#calc1} [calc] A trader buys a 100 call for $5.00 and sells a 110 call for $2.00. What is the maximum profit per contract?
   - $300
   - $1,000
   - [x] $700
   - $500
   > The net cost is $3.00, and the most the spread can earn is the strike gap of $10 minus that cost: ($10 − $3) × 100 = $700.
