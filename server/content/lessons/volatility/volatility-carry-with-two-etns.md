---
slug: volatility-carry-with-two-etns
title: Volatility Carry with Two ETNs
summary: Collecting the roll yield embedded in VIX futures contango by trading exchange-traded notes that hold long and short volatility exposure.
---

## How VIX ETNs Roll

Several exchange-traded notes (ETNs) are built to track VIX futures — some go long volatility, rising in value when VIX futures rise, while others go short, rising in value when VIX futures fall. Because these ETNs hold VIX futures contracts that must be periodically rolled forward as they approach expiration, their returns are affected not just by whether volatility itself rises or falls, but by the shape of the VIX futures curve at each roll — specifically, whether the curve is in contango or backwardation.

## The Contango Drag, and the Flip Side

When the curve is in contango, which is the more common state, a long-volatility ETN loses value from the roll itself: it's continuously selling expiring futures at a lower price and buying further-dated futures at a higher price, a structural drag independent of whether volatility ends up rising or falling. A short-volatility ETN benefits from the same effect in reverse, collecting that roll yield as a form of carry for as long as contango persists.

## Collecting the Roll as Carry

Volatility carry trading with two ETNs typically means taking a short-volatility position, or a position designed to benefit from contango, to collect this roll yield over time, since contango is the more frequent state of the VIX futures curve — this can look like a steady income strategy during calm markets, similar in spirit to any other carry trade collecting a persistent structural premium.

## The Tail Risk

The risk is the same one that applies to any short-volatility position: when markets turn stressful and the curve flips to backwardation, a short-volatility ETN can lose value very quickly, sometimes losing most or all of its value in a single sharp volatility spike — a well-known real-world example is a short-VIX ETN that lost roughly 90% of its value in a single day during a sudden 2018 volatility spike, illustrating how a strategy that looks like steady income most of the time can carry severe tail risk.

# Quiz

1. What do VIX futures-tracking ETNs need to do periodically as their held contracts approach expiration?
   - Nothing — VIX futures contracts never expire
   - [x] Roll their positions forward into new, further-dated futures contracts
   - Convert entirely into cash and stop tracking VIX futures
   - Merge with a different ETN provider
   > Since the ETNs hold futures contracts that eventually expire, they must periodically sell expiring contracts and buy further-dated ones to maintain continuous exposure.

2. What happens to a long-volatility ETN when the VIX futures curve is in contango?
   - It automatically gains extra value from the roll
   - [x] It loses value from the roll itself — selling expiring futures at a lower price and buying further-dated ones at a higher price
   - Contango has no effect on long-volatility ETNs
   - It converts into a short-volatility ETN
   > In contango, rolling from a cheaper near-dated contract into a more expensive further-dated one is a structural drag on a long-volatility position, independent of whether volatility itself moves.

3. How does a short-volatility ETN benefit from contango?
   - It also loses value from the roll, just like a long-volatility ETN
   - [x] It collects the roll yield as a form of carry, benefiting from the same contango effect in reverse
   - Contango has no relationship to short-volatility ETNs
   - It requires volatility to rise to collect any yield
   > A short-volatility position benefits from the same roll dynamic that hurts a long-volatility one, collecting a form of yield as long as the futures curve stays in contango.

4. Why is contango-collecting short-volatility carry sometimes compared to other carry trades?
   - Because it requires no capital to implement
   - [x] Because it collects a persistent structural premium over time, similar in spirit to other strategies that earn steady income from a recurring market structure
   - Because it has no relationship to market structure at all
   - Because it is entirely risk-free
   > Collecting roll yield during the more common contango state resembles other carry strategies that earn a steady premium as long as underlying conditions persist.

5. What real-world event illustrates the tail risk of short-volatility ETN carry trades?
   - A short-VIX ETN gained 90% of its value in a single day
   - [x] A short-VIX ETN lost roughly 90% of its value in a single day during a sudden 2018 volatility spike
   - VIX futures were permanently discontinued in 2018
   - There has never been a significant loss event in short-volatility ETNs
   > The 2018 volatility spike event demonstrated how a short-volatility carry strategy that looks like steady income most of the time can suffer severe, rapid losses when volatility spikes sharply and the curve flips to backwardation.

6. {#calc1} [calc] A trader shorts $80,000 of a long-volatility ETN that loses 5% a month to contango roll cost, with VIX unchanged. How much does the short earn in a month?
   - [x] $4,000
   - $400
   - $1,600
   - $40,000
   > 5% × $80,000 = $4,000. The risk is a volatility spike, which would reverse the gain quickly.
