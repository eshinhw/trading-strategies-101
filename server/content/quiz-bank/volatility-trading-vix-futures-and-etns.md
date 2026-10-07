---
slug: volatility-trading-vix-futures-and-etns
---

# Quiz

1. {#q1} What do VIX futures let a trader do?
   - [x] Go long or short expected future volatility directly, using the same long/short mechanics as any other futures contract
   - Buy the VIX index directly, the same way you'd buy a stock
   - Guarantee a fixed return regardless of market volatility
   - Trade only on the last day of every month
   > VIX futures apply standard futures long/short mechanics to expected volatility, since the VIX index itself can't be directly bought or sold.

2. {#q2} Why do VIX futures typically trade in contango?
   - [x] The VIX tends to spike temporarily and settle back toward its long-run average, so longer-dated contracts price in a return toward that average level
   - Contango only happens in physical commodity markets, never in VIX futures
   - VIX futures always trade at the exact same price regardless of expiration
   - Contango means the VIX is expected to keep rising forever
   > Since VIX spikes are typically temporary, longer-dated futures tend to price toward the VIX's long-run average, which is usually above the current, possibly-depressed near-term level — producing contango.

3. {#q3} What is a key structural difference between an ETN and an ETF?
   - [x] An ETN is an unsecured debt obligation of the issuing bank, carrying issuer credit risk that an ETF does not have
   - ETNs cannot be traded on an exchange at all
   - ETFs and ETNs are functionally identical in every respect
   - ETNs always guarantee a fixed return
   > Unlike an ETF, which holds actual underlying assets, an ETN is a debt note from its issuer, adding issuer credit risk on top of the underlying exposure.

4. {#q4} Why do VIX futures-based products tend to decay in value over time?
   - [x] Continuously rolling from a cheaper near-term contract into a pricier longer-dated one (contango) creates a structural drag, even if the VIX itself doesn't trend
   - These products are required by regulation to lose a fixed percentage each year
   - The VIX always falls to zero eventually
   - Decay only happens if the VIX rises, never when it's flat
   > The same roll-cost dynamic covered for commodity futures applies here — rolling forward through a contango curve erodes value over time, independent of whether the VIX itself trends up or down.

5. {#q5} Why are VIX futures-based ETNs generally viewed as short-term trading tools rather than long-term holdings?
   - [x] Their structural roll-cost decay from contango tends to erode value the longer they're held
   - They are legally prohibited from being held for more than a day
   - They always deliver higher returns the longer they're held
   - There is no reason to avoid holding them long-term
   > Contango-driven roll decay compounds over time, which is why these products are typically used for short-term tactical trades rather than buy-and-hold positions.

6. {#calc1} [calc] A VIX ETN position of $50,000 loses 7% a month to roll cost with VIX unchanged. About how much is it worth after 4 months?
   - [x] About $37,400
   - About $36,000
   - About $50,000
   - About $14,000
   > $50,000 × 0.93^4 ≈ $37,400.

7. {#calc2} [calc] Spot VIX is 18 and the next VIX future is 19.5. If spot stays the same, about what percentage does a long future lose by expiration?
   - About 8.3%
   - About 1.5%
   - [x] About 7.7%
   - About 15%
   > The future converges to spot, falling 1.5 points on 19.5, which is about 7.7%.

8. {#bk1} [calc] A trader buys 5 VIX futures (multiplier $1,000 per VIX point) at 18.20. They settle at 19.45. What is the profit?
   - [x] $6,250
   - $1,250
   - $625
   - $62,500
   > The move is 19.45 − 18.20 = 1.25 points. Profit = 1.25 × $1,000 × 5 = $6,250.

9. {#bk2} [calc] The front VIX future trades at 20 and the second month at 21 (contango). If the curve stays unchanged and a VIX-futures ETN rolls from the front to the second month, what is the approximate monthly roll cost?
   - 1%
   - 20%
   - [x] 5%
   - 0.5%
   > Selling the front month at 20 and buying the second at 21 costs (21 − 20) / 20 = 5% a month, a drag on the ETN if the curve doesn't move.

10. {#bk3} [calc] A VIX ETN holder has $10,000 and the curve sits in a steady 4% monthly contango with spot unchanged, so the ETN loses value by a factor of about 1/1.04 each month. About how much is lost to roll cost over three months?
   - [x] $1,110
   - $1,200
   - $400
   - $3,333
   > After three months $10,000 / 1.04³ = $8,890, a loss of about $1,110, or roughly 11%.
