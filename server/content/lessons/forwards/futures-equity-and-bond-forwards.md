---
slug: futures-equity-and-bond-forwards
title: Equity and Bond Forwards
summary: Forward contracts on a stock (or index) and on a bond — how each accounts for the income (dividends or coupons) a forward buyer misses out on, and how a bond forward differs from the FRA covered earlier in this module.
---

## Equity Forwards

An equity forward is an agreement to buy or sell a specific stock, or a basket or index of stocks, at a fixed price on a future date — the same basic structure as every other forward in this course, just with a share (or share-equivalent) as the underlying asset instead of a commodity or currency.

## The Effect of Dividends

As covered in the Forward Pricing lesson, an equity forward's fair price has to account for dividends the stock is expected to pay before delivery, since the forward's buyer doesn't actually own the stock (and doesn't collect those dividends) until the forward settles. That's why a stock's forward price sits only modestly above spot — financing cost net of expected dividend income — rather than reflecting the full cost of borrowing to buy the stock outright.

## Bond Forwards

A bond forward is an agreement to buy or sell a specific bond at a fixed price on a future date. Unlike an FRA, a bond forward involves an actual (or, if cash-settled, referenced) bond, whose price on the delivery date depends on prevailing interest rates and the bond's own remaining time to maturity at that point.

## How a Bond Forward Differs from an FRA

An FRA, covered earlier in this module, settles a notional interest-rate difference in cash, with no bond ever changing hands and no bond price ever directly quoted. A bond forward, by contrast, is priced and settled off an actual bond's price — closer in spirit to an equity forward's structure than to an FRA's purely notional interest-rate settlement, even though both instruments ultimately reflect a view on future interest rates.

## Coupon Income and Price Convergence

A bond forward's fair price nets out the bond's coupon income the same way an equity forward nets out dividends, and additionally has to account for the bond's price naturally converging toward face value as it moves closer to maturity — both effects covered in more detail in the Forward Pricing lesson's treatment of bonds and notes.

## Example

A fund wants to buy 10,000 shares in six months through a forward.

- Spot price: $50.00 per share
- Financing rate: 4% a year, continuously compounded
- Expected dividend: $0.50 per share, paid in three months

**Forward price without the dividend**

$$
F_0 = \$50 \times e^{0.04 \times 0.5} = \$51.01
$$

**Forward price with the dividend**

The forward buyer misses the dividend, so its present value comes off the spot price first:

$$
F_0 = (\$50 - \$0.50\,e^{-0.04 \times 0.25})\,e^{0.04 \times 0.5} = \boxed{\$50.505}
$$

**Cost to the fund**

$$
10{,}000 \times \$50.505 = \$505{,}050 \text{ in six months}
$$

The dividend lowers the forward price by about $0.505 per share. An owner of the actual shares would receive 10,000 × $0.50 = $5,000 of dividends, and the lower price compensates the forward buyer for missing them.

# Quiz

1. What is an equity forward?
   - [x] An agreement to buy or sell a stock, basket, or index of stocks at a fixed price on a future date
   - A type of dividend payment
   - An agreement that can only be used on bonds, never stocks
   - A contract that guarantees a stock's price will never fall
   > An equity forward applies the same basic forward structure covered throughout this course, using a stock or index as the underlying asset.

2. Why does an equity forward's price sit below what pure financing cost alone would suggest?
   - [x] Because expected dividends the forward buyer won't collect before delivery are netted out of the forward price
   - Because equity forwards always trade below spot regardless of dividends
   - Because stocks never pay dividends
   - Because the exchange sets a fixed discount on all equity forwards
   > Since the forward buyer doesn't receive dividends paid before delivery, those expected payments are subtracted from the fair forward price relative to pure financing cost.

3. How does a bond forward differ from a forward rate agreement (FRA)?
   - [x] A bond forward is priced and settled off an actual (or referenced) bond's price, while an FRA settles a purely notional interest-rate difference with no bond changing hands
   - They are identical instruments with different names
   - An FRA always involves physical delivery of a bond, while a bond forward never does
   - Bond forwards cannot be used to express a view on interest rates
   > An FRA's settlement is a cash payment based on an interest-rate gap applied to a notional amount, while a bond forward is tied directly to an actual bond's price at a future date.

4. What does a bond forward's fair price net out, similar to how an equity forward nets out dividends?
   - [x] The bond's coupon income earned while holding it, plus the effect of its price converging toward face value as maturity nears
   - Nothing — bond forwards ignore all income entirely
   - The bond's credit rating
   - The equity market's performance
   > Just as dividends are netted from an equity forward's price, a bond's coupon income is netted from a bond forward's price, alongside the bond's natural price convergence toward face value.

5. An investor is long a stock forward, and the stock pays $0.50/share in dividends before delivery. How does this affect the forward price relative to pure financing cost alone?
   - [x] The forward price sits below pure financing cost, roughly by the dividend amount
   - The forward price sits above pure financing cost by the dividend amount
   - Dividends have no effect on the forward price
   - The forward price becomes exactly equal to the dividend amount
   > Because the forward holder misses out on the $0.50 dividend, that expected payment is subtracted from what pure financing cost alone would otherwise imply for the forward price.

6. [calc] A stock trades at $50 and pays a $0.50 dividend in three months. At a 4% financing rate, about what is the six-month forward price?
   - $51.01
   - [x] $50.51
   - $50.00
   - $49.50
   > Growing $50 at 4% for six months gives $51.01, and the dividend the forward holder misses lowers that by about $0.505, to $50.505.

7. Why is the forward price lower than $51.01 when there is a dividend?
   - Forwards are always cheaper than the stock
   - The financing rate is lower for forwards
   - [x] The forward buyer doesn't receive the dividend, so the fair price is reduced by its value
   - Dividends are paid to the seller at delivery
   > Whoever holds the actual shares collects the dividend, so the forward buyer pays less to be compensated for missing it.
