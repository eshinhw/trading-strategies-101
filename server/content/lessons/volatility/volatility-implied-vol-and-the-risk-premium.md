---
slug: volatility-implied-vol-and-the-risk-premium
title: Implied Volatility and the Volatility Risk Premium
summary: The well-documented tendency for implied volatility to run higher than the volatility that actually ends up being realized — and why that gap is tradable.
---

## Revisiting Implied Volatility

As covered earlier in this course, implied volatility is the market's forward-looking estimate of future volatility, backed out of current option prices, in contrast to realized volatility, which is only known after the fact, once the period has actually played out.

## A Persistent Gap

Across long historical samples, implied volatility has tended to run higher, on average, than the volatility that subsequently gets realized — options, in other words, have tended to be priced a bit more expensively than the underlying's actual future movement would have justified in hindsight.

## Why This Gap Might Exist

The leading explanation is that option buyers are willing to pay a premium for the insurance-like protection options provide against sharp, sudden losses, much like an insurance buyer accepts a policy priced above the insurer's expected payout — that willingness to overpay for protection is what creates the volatility risk premium, compensating whoever is on the other side of that trade for bearing the corresponding risk.

## Where This Leads

This persistent gap between implied and realized volatility is exactly what a family of strategies covered later in this course, from selling straddles and strangles to more sophisticated gamma-hedged and variance-swap approaches, is built to systematically harvest — collecting the premium embedded in option prices, while managing the real risk of a period where realized volatility spikes well above what was priced in.

## In Practice

A trader who systematically sells index options, collecting premium month after month, is functioning much like an insurance company that sells policies against events that rarely happen: most months the options expire with little drama and the premium is pure profit, but the strategy's entire viability depends on setting aside enough of that collected premium to absorb the occasional month when realized volatility spikes far beyond what was priced in and a large payout comes due.

# Quiz

1. What has implied volatility tended to do relative to subsequently realized volatility, historically?
   - [x] Run higher, on average, than the volatility that actually ends up being realized
   - Run consistently lower than realized volatility
   - Always match realized volatility exactly
   - Have no measurable relationship to realized volatility at all
   > Across long historical samples, implied volatility has on average priced options a bit richer than what subsequently realized volatility would have justified.

2. What is the leading explanation for why this gap exists?
   - [x] Option buyers are willing to pay a premium for insurance-like protection against sharp losses, similar to how insurance is priced above expected payouts
   - Option sellers are legally required to overcharge for every contract
   - The gap is purely a data error with no real economic explanation
   - Implied volatility is always miscalculated by the exchange
   > The willingness to pay for downside protection, much like buying insurance, is the standard explanation for why options tend to be priced a bit richer than realized outcomes justify.

3. What is the volatility risk premium?
   - [x] The compensation earned by whoever is on the other side of that protection-buying demand, for bearing the corresponding risk
   - A fee charged by exchanges for trading options
   - The difference between two different stocks' volatility levels
   - A tax applied to volatility-linked products
   > The volatility risk premium is the reward for selling that insurance-like protection — collecting the gap between implied and (typically lower) realized volatility.

4. What kind of strategies are built to harvest this premium, according to this lesson?
   - [x] Strategies like selling straddles/strangles and more sophisticated gamma-hedged or variance-swap approaches, covered later in this course
   - Only strategies that buy options, never sell them
   - Strategies with no relationship to option prices at all
   - Strategies exclusively focused on individual stock picking
   > Premium-harvesting strategies generally involve selling volatility exposure (straddles, strangles, and more refined variants), collecting the gap between implied and realized volatility.

5. What real risk does a strategy harvesting the volatility risk premium have to manage?
   - [x] The risk of a period where realized volatility spikes well above what was priced in
   - There is no real risk once the premium is collected
   - The only risk is that implied volatility might fall to zero
   - The strategy is risk-free by construction
   > Collecting the premium works most of the time, but a sudden spike in realized volatility beyond what was implied can produce a sharp loss — the core risk these strategies have to manage.
