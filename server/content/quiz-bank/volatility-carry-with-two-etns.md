---
slug: volatility-carry-with-two-etns
---

# Quiz

1. {#q1} What do VIX futures-tracking ETNs need to do periodically as their held contracts approach expiration?
   - Nothing — VIX futures contracts never expire
   - [x] Roll their positions forward into new, further-dated futures contracts
   - Convert entirely into cash and stop tracking VIX futures
   - Merge with a different ETN provider
   > Since the ETNs hold futures contracts that eventually expire, they must periodically sell expiring contracts and buy further-dated ones to maintain continuous exposure.

2. {#q2} What happens to a long-volatility ETN when the VIX futures curve is in contango?
   - It automatically gains extra value from the roll
   - [x] It loses value from the roll itself — selling expiring futures at a lower price and buying further-dated ones at a higher price
   - Contango has no effect on long-volatility ETNs
   - It converts into a short-volatility ETN
   > In contango, rolling from a cheaper near-dated contract into a more expensive further-dated one is a structural drag on a long-volatility position, independent of whether volatility itself moves.

3. {#q3} How does a short-volatility ETN benefit from contango?
   - It also loses value from the roll, just like a long-volatility ETN
   - [x] It collects the roll yield as a form of carry, benefiting from the same contango effect in reverse
   - Contango has no relationship to short-volatility ETNs
   - It requires volatility to rise to collect any yield
   > A short-volatility position benefits from the same roll dynamic that hurts a long-volatility one, collecting a form of yield as long as the futures curve stays in contango.

4. {#q4} Why is contango-collecting short-volatility carry sometimes compared to other carry trades?
   - Because it requires no capital to implement
   - [x] Because it collects a persistent structural premium over time, similar in spirit to other strategies that earn steady income from a recurring market structure
   - Because it has no relationship to market structure at all
   - Because it is entirely risk-free
   > Collecting roll yield during the more common contango state resembles other carry strategies that earn a steady premium as long as underlying conditions persist.

5. {#q5} What real-world event illustrates the tail risk of short-volatility ETN carry trades?
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

7. {#bk1} [calc] A carry trade shorts $100,000 of a short-term VIX ETN and buys a mid-term ETN that moves 0.4 times as much per VIX point. What mid-term ETN amount balances the volatility exposure?
   - $40,000
   - $100,000
   - [x] $250,000
   - $400,000
   > The mid-term ETN moves 0.4 as much, so it takes 1 / 0.4 = 2.5 times the dollars: $100,000 × 2.5 = $250,000.

8. {#bk2} [calc] A short-term ETN loses 6% a month to roll cost and a mid-term ETN loses 2.4% a month. A trader shorts $100,000 of the short-term ETN and holds $200,000 of the mid-term ETN. What is the monthly carry (no price move)?
   - [x] +$1,200
   - +$6,000
   - −$4,800
   - +$10,800
   > The short earns 6% × $100,000 = $6,000. The long loses 2.4% × $200,000 = $4,800. Net = +$1,200.

9. {#bk3} [calc] In a two-ETN carry trade, the short leg gains $6,000 a month from decay and the long leg loses $4,800. A volatility spike costs the pair $9,000 in a month. What is that month's net result?
   - −$9,000
   - +$1,200
   - [x] −$7,800
   - −$10,200
   > Carry is +$1,200. The spike loss is −$9,000. Net = $1,200 − $9,000 = −$7,800.
