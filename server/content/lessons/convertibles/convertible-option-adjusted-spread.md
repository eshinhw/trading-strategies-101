---
slug: convertible-option-adjusted-spread
title: Convertible Option-Adjusted Spread
summary: Using option-adjusted spread to strip the embedded conversion option out of a convertible's price, isolating the credit-and-liquidity compensation it actually offers for relative-value comparison.
---

## Isolating the Bond's True Compensation

Just as with mortgage-backed securities covered elsewhere in this curriculum, a convertible bond's price reflects both a bond component and an embedded option value, so comparing convertibles on price or yield alone is misleading. Option-adjusted spread (OAS) strips out the value of the conversion option to isolate the spread genuinely compensating for the issuer's credit and liquidity risk.

## How OAS Is Calculated

Using an option-pricing model that accounts for the stock's volatility, the issuer's credit spread, and the bond's specific conversion terms, a trader solves for the discount spread over the risk-free curve that makes the model's theoretical price match the convertible's actual market price — that solved-for spread is the OAS.

## Spotting Relative Value

A convertible trading with a wider OAS than similar-credit-quality, similar-duration convertibles, or wider than what the issuer's own straight-bond credit spread implies is fair, looks cheap on a relative-value basis. One trading with a noticeably tighter OAS looks rich by the same comparison.

## Trading the Signal

A trader buys convertibles that look cheap on an OAS basis and can short similar convertibles, or the issuer's other outstanding debt, that look rich, aiming to profit as the spreads converge toward fair value. Like convertible arbitrage, this relative-value approach is often paired with a stock hedge, isolating the credit and spread view from the embedded option's own sensitivity to the stock price.

# Quiz

1. Why is comparing convertible bonds on price or yield alone misleading?
   - [x] A convertible's price reflects both a bond component and an embedded option value, which raw price or yield doesn't separate out
   - Convertible bonds never actually have a market price
   - Yield is completely irrelevant to any bond's valuation
   - Convertibles and plain bonds are priced using identical methods with no adjustment needed
   > Because part of a convertible's price comes from its embedded conversion option, comparing convertibles on price or yield alone conflates option value with genuine credit compensation.

2. What does option-adjusted spread (OAS) do for a convertible bond?
   - [x] Strips out the value of the conversion option to isolate the spread compensating for credit and liquidity risk
   - Measures only the bond's stated coupon rate
   - Ignores the issuer's credit risk entirely
   - Only applies to government bonds, never convertibles
   > OAS removes the embedded option's value from the price, leaving the spread that genuinely reflects the issuer's credit and liquidity risk — the same logic used for MBS.

3. How is a convertible's OAS actually calculated?
   - [x] By solving, with an option-pricing model, for the discount spread that makes the model's theoretical price match the bond's actual market price
   - By simply subtracting the coupon rate from the face value
   - By looking up a fixed number published by the issuer
   - OAS cannot be calculated for convertible bonds
   > OAS is solved for using an option-pricing model that accounts for volatility, credit spread, and conversion terms, finding the spread that reconciles theoretical and market prices.

4. What does a wider-than-peers OAS suggest about a convertible?
   - [x] It looks cheap on a relative-value basis
   - It looks rich on a relative-value basis
   - OAS has no relationship to relative value
   - The bond is guaranteed to default
   > A wider OAS than similar convertibles (or than the issuer's straight-bond credit spread implies) suggests the market is offering more compensation than comparable bonds — a sign it may be cheap.

5. How is this OAS-based relative-value view typically traded?
   - [x] Buying convertibles that look cheap on OAS and shorting ones that look rich, often paired with a stock hedge to isolate the credit view
   - Only ever buying convertibles, regardless of their relative OAS
   - The strategy never involves any hedge of any kind
   - By buying the issuer's stock alone, with no bond position
   > The strategy pairs long cheap-OAS convertibles against short rich-OAS ones, frequently combined with a stock hedge so the trade isolates the spread view rather than the embedded option's stock sensitivity.

6. {#calc1} [calc] A convertible yields 320 basis points over Treasuries, and the embedded conversion option is worth 140 basis points of spread. What is the option-adjusted spread?
   - 460 basis points
   - 140 basis points
   - [x] 180 basis points
   - 320 basis points
   > Strip out the option: 320 − 140 = 180 basis points of spread for credit and liquidity.

7. {#calc2} [calc] A convertible has an option-adjusted spread of 180 basis points against 250 for similar bonds, and its spread sensitivity is $3,000 per basis point. What is the gain if it reprices to 250?
   - [x] $210,000
   - $540,000
   - $750,000
   - $70,000
   > The gap is 70 basis points, and 70 × $3,000 = $210,000.
