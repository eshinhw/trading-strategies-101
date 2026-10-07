---
slug: etf-alpha-rotation
title: Alpha Rotation
summary: Rotating sector or asset-class ETF exposure based on a broader combined alpha score, rather than raw trailing return alone.
---

## Beyond Trailing Return

Where plain momentum rotation ranks sector ETFs using a single signal — trailing return — alpha rotation ranks them using a broader, combined score built from multiple underlying signals: momentum, but also valuation-style measures, volatility, macro sensitivity, or any other factor a manager believes has predictive power for which sector is likely to lead going forward. The resulting composite "alpha" score, much like the alpha combos discussed for individual stocks, is what actually drives the rotation decision.

## Why Go Beyond Momentum

The rationale for going beyond pure price momentum is that trailing return, while a strong and persistent signal on its own, is also noisy and reactive — it only tells the strategy what has already happened, not why, and blending it with other signals, say, a sector's relative valuation, or its typical sensitivity to changes in interest rates or the economic cycle, can produce a more forward-looking, better-timed rotation decision than momentum alone.

## Constructing the Composite Score

Constructing the combined score follows the same basic recipe as any multifactor or alpha-combo approach: standardize each individual signal so they're comparable across sectors, weight them according to each signal's estimated reliability and its independence from the others already in the blend, and combine them into one composite ranking used to decide sector allocations at each rebalance.

## The Tradeoff of a Richer Signal

Because it draws on a richer information set than trailing return alone, alpha rotation in principle can react to shifts in sector leadership earlier or more accurately than pure price momentum — but it also depends on the quality and continued relevance of whichever extra signals are included, and a poorly-chosen or stale additional signal can drag down the combined score rather than improve it, so the same discipline that applies to building any alpha combo applies here too.

# Quiz

1. How does alpha rotation's ranking signal differ from plain momentum rotation's?
   - They are identical — both use only trailing return
   - [x] Alpha rotation uses a broader, combined score built from multiple signals, not just trailing return alone
   - Alpha rotation ignores price entirely
   - Alpha rotation can only be used with individual stocks, not ETFs
   > While momentum rotation ranks sectors purely by trailing return, alpha rotation blends momentum with other signals — valuation, volatility, macro sensitivity, and so on — into one composite score.

2. What is a limitation of relying on trailing return (pure momentum) alone, that motivates alpha rotation?
   - Trailing return is always a perfect, noise-free predictor
   - [x] Trailing return only reflects what has already happened and can be noisy and reactive, without explaining why a sector is moving
   - Trailing return cannot be computed for sector ETFs
   - Momentum has no relationship to future sector performance
   > Pure trailing-return momentum is backward-looking and doesn't distinguish between genuine forward-looking strength and noise, which is part of the motivation for blending in additional signals.

3. How is alpha rotation's combined score typically constructed?
   - By using only the single highest-scoring signal for each sector
   - [x] By standardizing each individual signal, weighting them by reliability and independence, and combining them into one composite ranking
   - By ignoring all signals except trading volume
   - By randomly assigning scores to each sector
   > This mirrors the standard approach used for any multifactor or alpha-combo construction — standardize, weight by quality and independence, then combine into a single ranking.

4. What is a potential downside of including additional signals beyond trailing return in alpha rotation?
   - Additional signals always improve the strategy with no risk
   - [x] A poorly-chosen or stale additional signal can drag down the combined score rather than improve it
   - Additional signals make the strategy impossible to compute
   - There is no downside to adding more signals
   > Just as with any alpha combo, the quality of each included signal matters — a weak or outdated signal can hurt the composite score's predictive power rather than help it.

5. What is the potential benefit of alpha rotation's richer information set compared to pure price momentum?
   - It guarantees the strategy will never underperform
   - [x] It can, in principle, react to shifts in sector leadership earlier or more accurately than pure price momentum alone
   - It eliminates the need for any rebalancing
   - It only works during market holidays
   > By drawing on more than just trailing return, alpha rotation aims to anticipate or confirm sector leadership shifts using information that raw price momentum alone wouldn't capture.

6. {#calc1} [calc] A sector scores +1.5 on momentum (weight 50%), −0.5 on valuation (weight 30%) and +0.4 on low volatility (weight 20%). What is its composite alpha score?
   - +1.40
   - +0.47
   - +0.20
   - [x] +0.68
   > 0.5 × 1.5 + 0.3 × (−0.5) + 0.2 × 0.4 = 0.75 − 0.15 + 0.08 = +0.68.
