---
slug: commodities-skewness-premium
title: Skewness Premium
summary: Selling commodities (or commodity options) with a history of positively skewed returns — occasional large spikes — to collect the premium investors pay for lottery-like upside exposure.
---

## What Positive Skew Looks Like

Some commodities have historically exhibited positively skewed return distributions — most of the time, prices move in relatively small, unremarkable increments, but occasionally a commodity experiences a sharp, large price spike, often driven by a sudden supply disruption, extreme weather, or a geopolitical shock, producing a return distribution with a long right tail of infrequent but large gains. This pattern is common in commodities exposed to acute supply-shock risk, such as natural gas around extreme weather events, or agricultural commodities around harvest failures.

## The Lottery-Ticket Premise

The skewness premium strategy is built on the idea that investors have a behavioral preference for holding assets with this "lottery-like" positive skew, similar to how people are often willing to overpay for a lottery ticket with a small chance of a large payoff, which can lead to these commodities' futures, or their options, trading at prices that overstate their true expected value, since buyers are willing to pay up for the small chance of catching a big spike.

## Harvesting the Premium

A strategy harvesting this premium typically takes the other side, selling futures or options in commodities with a strong history of positive skew, collecting a premium from investors seeking that lottery-like exposure, betting that most of the time, the "normal" scenario without a spike, the position profits from the premium collected, even though it will occasionally suffer a large loss when the rare spike scenario actually occurs.

## Why Diversification Matters Here

This risk profile, collecting a steady premium most of the time in exchange for occasional sharp losses when the rare, large event materializes, is structurally similar to other insurance-like, premium-selling strategies covered elsewhere in this course, and the same discipline applies: position sizing and diversification across multiple, ideally uncorrelated, skewed commodities matters, since the strategy's edge depends on surviving the inevitable spike events rather than being wiped out by concentrating too much risk in any single one.

# Quiz

1. What does a positively skewed return distribution mean for a commodity?
   - Prices move by the exact same amount every single day
   - [x] Most price moves are small and unremarkable, but occasionally there's a sharp, large price spike, producing a long right tail of infrequent large gains
   - The commodity's price only ever falls, never rises
   - The commodity has no price volatility whatsoever
   > Positive skew describes a distribution where typical moves are modest but there's an occasional large upside spike, often driven by supply shocks or extreme events.

2. What behavioral tendency does the skewness premium strategy rely on?
   - Investors always prefer assets with guaranteed, steady returns
   - [x] Investors have a preference for holding "lottery-like" assets with positive skew, similar to overpaying for a lottery ticket with a small chance of a large payoff
   - Investors never pay attention to a commodity's historical return distribution
   - Investors always avoid any commodity with any volatility
   > The strategy is premised on the idea that investors are willing to pay a premium for the small chance of a large positive spike, similar to lottery-ticket-buying behavior.

3. How does a strategy harvest the skewness premium?
   - By buying futures or options in commodities with a strong history of positive skew
   - [x] By selling futures or options in commodities with a strong history of positive skew, collecting a premium from investors seeking that exposure
   - By avoiding all commodities with any historical skew
   - By holding only commodities with perfectly symmetric return distributions
   > The strategy takes the other side of the lottery-like demand, selling exposure to collect the premium buyers are willing to pay for the chance of a large spike.

4. What is the risk profile of a skewness-premium-selling strategy?
   - Guaranteed steady returns with no possibility of loss
   - [x] Collecting a steady premium most of the time, with occasional sharp losses when the rare, large spike event actually occurs
   - Large losses every single trading day
   - The strategy has no relationship to the commodity's actual price behavior
   > Like other premium-selling strategies, this one profits steadily in the "normal" scenario but suffers when the rare, large event the premium was compensating for actually materializes.

5. Why does diversification across multiple uncorrelated skewed commodities matter for this strategy?
   - Diversification has no effect on the strategy's risk
   - [x] Because the strategy's long-run edge depends on surviving the inevitable spike events rather than being wiped out by concentrating too much risk in any single commodity
   - Diversification guarantees the strategy will never experience a loss
   - Diversification eliminates the skewness premium entirely
   > Since any single commodity can experience its rare spike event at any time, spreading exposure across several uncorrelated skewed commodities reduces the risk of a single event wiping out the accumulated premium.

6. {#calc1} [calc] A trader sells a call on 5,000 bushels for $0.12 a bushel, collecting $600. A weather scare pushes the price $0.50 above the strike. What is the net loss?
   - $2,500
   - $600
   - $3,100
   - [x] $1,900
   > The call is worth $0.50 × 5,000 = $2,500 to the buyer, and the seller keeps $600, so the net loss is $1,900.

7. {#calc2} [calc] A trader sells a spike-prone call for $600. 95% of the time it expires worthless and 5% of the time it costs $5,000 to settle. What is the expected profit?
   - $600
   - [x] $350
   - $570
   - $220
   > The expected payout is 5% × $5,000 = $250, so the expected profit is $600 − $250 = $350. Without the spike risk, the premium would be the whole $600.
