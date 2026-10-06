---
slug: futures-forward-pricing
title: Forward Pricing
summary: How a forward's fair price is derived from today's spot price plus the cost of carrying the asset to the future delivery date — and how that cost of carry differs across commodities, stocks, and bonds.
---

The theoretical, "fair" price of a forward contract is derived from a simple no-arbitrage principle: it should equal the asset's current spot price plus the cost of carrying that asset from today until the contract's delivery date. This "cost of carry" typically includes the financing cost of holding the asset, the interest that could otherwise have been earned on the cash tied up in buying it today, and, depending on the asset, storage costs, insurance, or other costs of physically holding it, minus any income the asset generates while being held, such as dividends or interest. The exact ingredients that make up the cost of carry differ meaningfully across asset classes, which is why forward pricing looks somewhat different for a physical commodity than for a stock or a bond.

## Physical Commodities (Grains, Energy Products, Precious Metals, etc.)

For a physical commodity like grains, energy products, or precious metals, the cost of carry includes not just financing costs but real, tangible costs of physically storing the commodity until delivery — warehousing, insurance, and for some commodities spoilage risk — all of which push the forward price above the spot price, all else equal. Working in the opposite direction is any convenience yield: the benefit a holder gets from having physical access to the commodity right now rather than a promise of future delivery, which is especially valuable when current supply is tight, and which can pull the forward price back down, sometimes even below spot, producing the backwardation curve shapes discussed elsewhere in this course.

## Stock

For a stock, the cost of carry is simpler: financing costs, the interest foregone on the cash used to buy the stock today, minus any dividends the stock is expected to pay before the forward's delivery date, since a forward buyer doesn't receive those dividends the way an actual shareholder would. This is why a forward price on a dividend-paying stock is typically only modestly above the spot price, financing cost net of the dividend yield, rather than reflecting the full financing cost outright, and why higher expected dividends between now and delivery pull the fair forward price down.

## Bonds and Notes

For a bond or note, forward pricing follows the same basic logic but nets out the bond's own coupon income instead of dividends: the cost of carry is the financing cost of holding the bond minus the coupon interest earned while holding it, and the forward price must also account for how the bond's own price is expected to change simply from the passage of time as it moves closer to maturity, a bond's price converges toward its face value as maturity approaches, all else equal. Because bonds pay relatively predictable, scheduled coupons and their price behavior near maturity is well understood, bond forward pricing tends to be one of the more mechanically precise applications of the cost-of-carry framework, though it still depends on an accurate financing rate assumption, just like every other asset class.

## Foreign Currencies

A foreign currency fits the same cost-of-carry framework by treating the foreign risk-free interest rate as if it were a continuous dividend yield: holding a foreign currency lets you earn interest in that currency in the meantime, just as holding a stock earns dividends. This relationship is known as covered interest rate parity, and it means the forward exchange rate depends on the gap between the domestic and foreign interest rates — if domestic rates are higher than foreign rates, the foreign currency trades at a forward premium; if foreign rates are higher, it trades at a forward discount, so that borrowing in one currency and lending in the other, hedged with a forward, can never produce a riskless profit.

## Stock and Futures Options

The forward price is more than just a fair-value benchmark for the forward contract itself — it's also a direct input for pricing options on stocks and futures. Because the forward price already embeds the cost of carry and any expected dividend income, models like the Black model for pricing options on futures substitute the forward or futures price for the spot price, letting an option on a futures contract be priced with a formula nearly identical to a standard stock option, just swapping in forward price for spot. The same substitution is why European put-call parity is often expressed directly in terms of the forward price rather than tracking spot price and financing cost as two separate pieces.

## Arbitrage

The cost-of-carry price isn't just a theoretical prediction — it's enforced in real markets by arbitrageurs. If the market's forward price trades above its fair value, a trader can run a cash-and-carry arbitrage: borrow cash, buy the asset today, simultaneously sell it forward at the richer market price, then deliver the asset at maturity and repay the loan, locking in a riskless profit from the mispricing. If the forward instead trades below fair value, the mirror-image reverse cash-and-carry arbitrage applies: short the asset today, invest the proceeds at the risk-free rate, and buy it forward, again locking in a riskless profit as the position unwinds at delivery. This buying and selling pressure from arbitrageurs is exactly what keeps real-world forward prices anchored close to the cost-of-carry formula.

## Dividends

Forward pricing models a stock's dividends in one of two ways, depending on what's more realistic for the asset. For a single stock with a known, scheduled dividend, the dividend is treated as a specific dollar amount: its present value is subtracted from today's spot price before compounding the rest forward at the risk-free rate. For a broad stock index, where dozens or hundreds of underlying stocks pay dividends on staggered schedules throughout the year, it's more natural to treat the combined effect as a continuous dividend yield — a steady percentage rate that simply lowers the effective rate used to compound the forward price, rather than tracking every individual payment.

## Short Sales

Short selling means borrowing an asset from a current holder, through a broker, selling it in the market, and later buying it back to return to the lender — a trade used either as a standalone bet that the asset's price will fall, or, as seen above, as the tool that makes reverse cash-and-carry arbitrage possible when a forward is underpriced. Not every asset can be shorted easily: many physical commodities are difficult or impractical to borrow and short because of the logistics of storage and delivery, which weakens the arbitrage force that would normally correct an underpriced forward and is part of why convenience yield plays such an outsized role in commodity forward pricing specifically.

## Example

A jewelry manufacturer wants to lock in the price of gold it will need in six months. With gold's spot price at $2,000 an ounce, and the cost of financing and securely storing that gold for six months working out to roughly $30 an ounce, the bank quotes a forward price of about $2,030. If the bank ever quoted something noticeably richer than that — say $2,080 — a trading desk could buy gold today at $2,000, pay the $30 to finance and store it, and sell it forward at $2,080, locking in a riskless $50-an-ounce cash-and-carry profit. That arbitrage pressure is exactly what keeps real-world forward quotes anchored close to the cost-of-carry formula instead of drifting away from it.

# Quiz

1. What is the general no-arbitrage principle behind a forward contract's theoretical fair price?
   - The forward price should always equal exactly zero
   - [x] It should equal the asset's current spot price plus the cost of carrying that asset until the delivery date
   - The forward price is set entirely by government regulation
   - The forward price has no relationship to the spot price
   > The cost-of-carry framework says a forward's fair price reflects today's spot price adjusted for the costs (and any income) of holding that asset until delivery.

2. What additional cost does forward pricing for a physical commodity typically include, beyond financing?
   - No additional costs — physical commodities are priced exactly like stocks
   - [x] Real, tangible storage costs — warehousing, insurance, and sometimes spoilage risk
   - A mandatory government tax unique to commodities
   - The cost of shipping the commodity to a different country
   > Unlike financial assets, physical commodities involve genuine storage-related costs that must be included in the cost-of-carry calculation.

3. What is "convenience yield," and how does it affect a commodity's forward price?
   - It has no effect on forward pricing whatsoever
   - [x] It's the benefit of holding the physical commodity now rather than a future promise of delivery, which can pull the forward price down, sometimes below spot
   - It's a fee charged for storing a commodity
   - It only applies to stocks, never to commodities
   > Convenience yield reflects the value of having immediate physical access to a commodity, which offsets storage and financing costs and can even push the forward price below the current spot price.

4. How does a stock's forward price account for expected dividends?
   - Dividends have no effect on a stock's forward price
   - [x] Expected dividends are subtracted from the financing cost, since a forward buyer doesn't receive dividends paid before delivery the way an actual shareholder would
   - Dividends are added on top of the full financing cost
   - A stock's forward price is always identical to its spot price regardless of dividends
   > Since the forward buyer doesn't own the stock (and doesn't collect dividends) until delivery, expected dividend payments reduce the fair forward price relative to what pure financing cost alone would suggest.

5. What does bond forward pricing net out from the financing cost, in place of dividends?
   - Nothing is netted out — bond forward pricing ignores all income
   - [x] The bond's coupon interest earned while holding it, along with accounting for the bond's price converging toward face value as it nears maturity
   - The bond's credit rating
   - The stock market's overall performance
   > Like dividends for a stock, a bond's coupon payments are income the forward buyer misses out on until delivery, so they're subtracted from the financing cost, and the pricing must also reflect the bond's natural price convergence toward face value over time.

6. What determines whether a currency's forward exchange rate trades at a premium or discount to spot, under covered interest rate parity?
   - [x] The difference between the domestic and foreign risk-free interest rates
   - The stock market's overall performance that day
   - A fixed rate set once a year by central banks
   - The trade balance between the two countries alone
   > Covered interest rate parity ties the forward FX rate directly to the interest rate differential between the two currencies — the currency with the higher rate trades at a forward discount, and the one with the lower rate at a forward premium.

7. Why do many option pricing models substitute the forward price for the spot price when pricing an option on a futures contract?
   - [x] Because the forward price already embeds the cost of carry and any dividend adjustments, so it captures everything needed without separately tracking financing costs
   - Because the forward price is always identical to the option's strike price
   - Because spot prices cannot legally be used in option pricing
   - Because futures options never actually expire
   > Since the forward or futures price already reflects financing costs and expected income, models like the Black model can price the option directly off that single number instead of the spot price plus a separate cost-of-carry adjustment.

8. In a cash-and-carry arbitrage, what does the arbitrageur do when the forward price is trading above its theoretical fair value?
   - [x] Borrow money, buy the asset now, and sell it forward at the higher market price, locking in a riskless profit at delivery
   - Do nothing, since forward prices can never be mispriced
   - Short the asset and buy it back immediately
   - Only trade options, never the underlying asset
   > Cash-and-carry arbitrage exploits an overpriced forward by buying the asset today, financed with borrowed cash, and locking in the sale at the richer forward price — this buying and selling pressure is what pulls the market's forward price back toward fair value.

9. What's the difference between modeling dividends as a known dollar amount versus as a continuous dividend yield in forward pricing?
   - [x] A known dollar amount is subtracted as a present value from spot before compounding, while a continuous yield lowers the effective compounding rate itself — the latter is more natural for a broad index paying dividends continuously
   - There is no difference — both methods always produce the exact same forward price
   - Dividend yield only applies to bonds, never to stocks
   - A known dollar amount can only be used for foreign currencies
   > A single stock's specific, scheduled dividend is usually modeled as a discrete cash amount netted from spot, while a broad index's many staggered dividends are better approximated as a smooth percentage yield that lowers the effective compounding rate.

10. Why does the difficulty of short-selling certain physical commodities matter for forward pricing?
   - [x] It weakens the arbitrage force that would normally correct an underpriced forward, since reverse cash-and-carry arbitrage requires being able to short the underlying asset
   - It has no effect on forward pricing at all
   - It only matters for pricing stock forwards, never commodities
   - It makes commodity forwards impossible to trade
   > Reverse cash-and-carry arbitrage — the correction for an underpriced forward — depends on being able to short the physical asset; when that's impractical, as it often is for commodities, forward prices can drift further from the pure cost-of-carry value, which is part of why convenience yield matters so much for commodities specifically.
