---
slug: volatility-risk-premium
title: Volatility Risk Premium
summary: Systematically selling options (or variance) to collect the persistent gap between implied volatility and the volatility that actually ends up realized.
---

## What the Premium Is

Implied volatility, the volatility priced into an option, backed out from its market price, has historically tended to run higher, on average, than the volatility that actually ends up being realized by the underlying asset over the same period. This gap is called the volatility risk premium, and it exists for a similar reason other insurance-like premiums exist: buyers of options, protection against big moves, are willing to pay somewhat more than the "fair," purely statistical price, because that protection has value beyond just its expected payout — much like how insurance buyers generally pay more than their expected claims.

## Harvesting the Premium

A strategy built to harvest the volatility risk premium systematically sells options — a common approach is selling a diversified set of short-dated, out-of-the-money options, or a variance swap, across an index or basket of assets — collecting the premium and expecting realized volatility to come in below what the market implied, on average, over many trades.

## A Familiar Risk Profile

Because this premium is a statistical tendency rather than a certainty, the strategy behaves like most volatility-selling approaches: steady, positive returns most of the time as small premiums accumulate across many trades, punctuated by occasional sharp losses when realized volatility spikes well above what was implied — the same "collecting insurance premiums" risk profile that shows up across other short-volatility strategies covered elsewhere in this course.

## Why Risk Controls Matter

Because of this asymmetric risk profile, disciplined volatility-risk-premium strategies typically apply risk controls beyond simply selling as much premium as possible — position sizing limits, diversification across many uncorrelated underlyings, and sometimes partial hedges against extreme moves — since the strategy's long-run edge depends on surviving the occasional bad outcome rather than being wiped out by it.

# Quiz

1. What is the "volatility risk premium"?
   - The extra return investors earn from holding volatile stocks
   - [x] The historical tendency for implied volatility to run higher, on average, than the volatility that actually ends up realized
   - A fee charged by exchanges for trading options
   - The difference between two different stocks' volatility levels
   > The volatility risk premium refers to the persistent gap where options' implied volatility has tended to overstate the volatility that actually materializes, similar to how insurance premiums tend to exceed expected claims.

2. Why does the volatility risk premium exist, according to the insurance analogy?
   - Because options buyers are irrational and always overpay
   - [x] Buyers of options-based protection are willing to pay more than the "fair," purely statistical price, because that protection has value beyond its expected payout
   - Because implied volatility is always identical to realized volatility
   - Because options markets are illiquid and rarely traded
   > Similar to insurance, buyers of downside/upside protection via options are often willing to pay a premium above the statistically fair price for the value of that protection itself.

3. How does a strategy typically harvest the volatility risk premium?
   - By buying as many options as possible across every available underlying
   - [x] By systematically selling options (or variance swaps), often short-dated and out-of-the-money, across a diversified set of underlyings
   - By never trading options at all
   - By holding only risk-free government bonds
   > The strategy sells options or variance exposure to collect the premium, expecting realized volatility to average out below what was implied over many trades.

4. What risk profile does a volatility-risk-premium strategy typically exhibit?
   - Guaranteed steady returns with no possibility of loss
   - [x] Steady, positive returns most of the time, punctuated by occasional sharp losses when realized volatility spikes well above what was implied
   - Large losses every single trading day
   - Returns that have no relationship to volatility whatsoever
   > Like other volatility-selling strategies, this one behaves like collecting insurance premiums — small, steady gains most of the time, with occasional larger losses when the underlying risk materializes.

5. Why do disciplined volatility-risk-premium strategies typically apply risk controls like position limits and diversification?
   - Risk controls are legally required for all options trading
   - [x] Because the strategy's long-run edge depends on surviving occasional bad outcomes rather than being wiped out by them
   - Risk controls guarantee the strategy will never lose money
   - Diversification eliminates the volatility risk premium entirely
   > Given the asymmetric risk of occasional sharp losses, careful sizing and diversification help ensure the strategy can survive a bad outcome and continue collecting the premium over the long run.
