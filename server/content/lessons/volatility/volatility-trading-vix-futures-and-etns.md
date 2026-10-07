---
slug: volatility-trading-vix-futures-and-etns
title: Trading Volatility: VIX Futures and ETNs
summary: Since the VIX itself can't be bought or sold, these are the actual instruments traders use to get exposure to volatility — and the curve dynamics that come with them.
---

## VIX Futures

VIX futures are exchange-traded contracts on the future value of the VIX index, letting a trader go long or short expected volatility directly, the same basic long/short mechanics covered in the Futures course, just applied to an index of expected volatility instead of a physical commodity or a stock index.

## The VIX Futures Curve

Like any futures market, VIX futures of different expirations trade at different prices, forming a curve. Because the VIX tends to spike temporarily and then settle back toward its long-run average, VIX futures typically sit in contango, with longer-dated contracts priced higher than the near-term VIX level — the same contango and backwardation concepts already covered for commodity futures, here reflecting expectations about volatility rather than storage costs.

## Exchange-Traded Notes (ETNs)

Rather than trading VIX futures directly, many investors get volatility exposure through exchange-traded notes (ETNs) built on top of a basket of VIX futures, tradable on an exchange just like a stock or ETF. Unlike an ETF, an ETN is technically an unsecured debt obligation of the issuing bank, carrying issuer credit risk on top of whatever the underlying VIX futures do.

## Why These Products Decay Over Time

Because the VIX futures curve typically sits in contango, a fund that continuously rolls its futures forward, always selling a cheaper near-term contract and buying a pricier longer-dated one, tends to erode in value over time even if the VIX itself doesn't trend in either direction — the same structural roll-cost drag covered for commodity futures, which is why these products are generally viewed as short-term trading tools rather than long-term holdings.

## Example

A trader buys $100,000 of a VIX-linked ETN to hedge a rocky week around a data release (illustrative).

- Spot VIX: 15
- Next-month VIX future: 17 (the curve is in contango)

**The roll cost of the contango**

The ETN holds futures that converge toward spot as they near expiry. If spot VIX stays at 15:

$$
\frac{17 - 15}{17} = 11.8\% \text{ lost over the month}
$$

Assume the ETN loses about 8% a month in a calm market.

**Held for 3 days, with a VIX spike on the data release (futures +10%)**

$$
\$100{,}000 \times 10\% = +\$10{,}000 \quad\Rightarrow\quad \text{less about } \$800 \text{ of decay for 3 days}
$$

**Held for 6 months in calm markets (VIX unchanged)**

$$
\$100{,}000 \times (1 - 0.08)^6 = \boxed{\$60{,}636}
$$

$$
-\$39{,}364 \text{ with nothing having gone wrong}
$$

The decay helps the trader who is short during the same period and hurts the one who is long. These products are designed for days of holding, not months or years.

# Quiz

1. What do VIX futures let a trader do?
   - [x] Go long or short expected future volatility directly, using the same long/short mechanics as any other futures contract
   - Buy the VIX index directly, the same way you'd buy a stock
   - Guarantee a fixed return regardless of market volatility
   - Trade only on the last day of every month
   > VIX futures apply standard futures long/short mechanics to expected volatility, since the VIX index itself can't be directly bought or sold.

2. Why do VIX futures typically trade in contango?
   - [x] The VIX tends to spike temporarily and settle back toward its long-run average, so longer-dated contracts price in a return toward that average level
   - Contango only happens in physical commodity markets, never in VIX futures
   - VIX futures always trade at the exact same price regardless of expiration
   - Contango means the VIX is expected to keep rising forever
   > Since VIX spikes are typically temporary, longer-dated futures tend to price toward the VIX's long-run average, which is usually above the current, possibly-depressed near-term level — producing contango.

3. What is a key structural difference between an ETN and an ETF?
   - [x] An ETN is an unsecured debt obligation of the issuing bank, carrying issuer credit risk that an ETF does not have
   - ETNs cannot be traded on an exchange at all
   - ETFs and ETNs are functionally identical in every respect
   - ETNs always guarantee a fixed return
   > Unlike an ETF, which holds actual underlying assets, an ETN is a debt note from its issuer, adding issuer credit risk on top of the underlying exposure.

4. Why do VIX futures-based products tend to decay in value over time?
   - [x] Continuously rolling from a cheaper near-term contract into a pricier longer-dated one (contango) creates a structural drag, even if the VIX itself doesn't trend
   - These products are required by regulation to lose a fixed percentage each year
   - The VIX always falls to zero eventually
   - Decay only happens if the VIX rises, never when it's flat
   > The same roll-cost dynamic covered for commodity futures applies here — rolling forward through a contango curve erodes value over time, independent of whether the VIX itself trends up or down.

5. Why are VIX futures-based ETNs generally viewed as short-term trading tools rather than long-term holdings?
   - [x] Their structural roll-cost decay from contango tends to erode value the longer they're held
   - They are legally prohibited from being held for more than a day
   - They always deliver higher returns the longer they're held
   - There is no reason to avoid holding them long-term
   > The contango-driven decay described above compounds over time, which is why these products are typically used for short-term tactical trades rather than buy-and-hold positions.

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
