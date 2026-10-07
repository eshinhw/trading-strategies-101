---
slug: fixed-income-value-factor
title: Value Factor
summary: Buying bonds that are cheap relative to a fundamental measure of credit risk, on the premise the market has temporarily mispriced them.
---

## Finding Cheap Credit Spreads

The fixed-income value factor identifies bonds that trade cheaply relative to some measure of their fundamental credit risk — for example, a bond whose credit spread, the extra yield it pays over a comparable risk-free bond, is wider than what its issuer's underlying fundamentals, like leverage, profitability, or credit rating, would seem to justify. The strategy buys these apparently underpriced bonds, betting the market will eventually recognize the mispricing and the spread will narrow.

## Ranking Bonds Against Fair Value

A systematic implementation typically models a bond's "fair" credit spread based on issuer fundamentals and market-wide credit conditions, compares that fair-value estimate to the bond's actual traded spread, and ranks bonds by the gap between the two, buying the bonds trading at the widest positive gap, cheapest relative to fair value, and potentially avoiding or shorting the bonds trading tightest relative to their fundamentals.

## The Fixed-Income Value Trap

As with the equity value factor, part of the challenge is distinguishing a genuine, temporary mispricing from a spread that's wide for a good reason: a bond can trade cheap because the market is pricing in a real, elevated risk of default or downgrade that a backward-looking fundamentals model hasn't yet fully captured, which is the fixed-income analog of the equity "value trap."

## When the Factor Wins and Loses

The value factor in credit has historically shown periods of both strong performance and extended underperformance, similar to equity value — it tends to do well when previously depressed credits recover, but can suffer during periods of sustained credit deterioration or a "flight to quality," when investors broadly move away from cheaper, riskier credits regardless of their fundamentals.

# Quiz

1. What does the fixed-income value factor look for?
   - Bonds with the highest possible credit rating only
   - [x] Bonds trading cheaply relative to a fundamental measure of their credit risk, such as a wider-than-justified credit spread
   - Bonds issued by the largest companies only
   - Bonds with no coupon payments
   > The value factor identifies bonds whose market-priced credit spread is wider than what the issuer's underlying fundamentals would seem to justify, betting on that mispricing correcting.

2. How does a systematic value strategy typically rank bonds?
   - By ranking issuers alphabetically
   - [x] By comparing a bond's actual traded credit spread to a modeled "fair value" spread based on issuer fundamentals, and ranking by the gap between the two
   - By ignoring credit spreads entirely
   - By ranking bonds solely on their coupon rate
   > The strategy models what a bond's spread "should" be based on fundamentals, then buys bonds where the actual spread is unusually wide relative to that estimate.

3. What is the fixed-income analog of the equity "value trap"?
   - A bond that always reverts to fair value quickly
   - [x] A bond trading cheap because the market is pricing in a real, elevated default or downgrade risk that a fundamentals model hasn't yet captured
   - A bond with no credit risk whatsoever
   - A bond that has never traded below par
   > Just as a cheap stock can be a value trap if it's cheap for a real reason, a wide-spread bond can be genuinely risky rather than temporarily mispriced, and a backward-looking model may not catch that in time.

4. When does the credit value factor tend to perform well?
   - Only during periods when all credit spreads are identical
   - [x] When previously depressed credits recover
   - Only during a flight to quality
   - The value factor has no relationship to credit-market conditions
   > Like equity value, the credit value factor benefits when the market's pessimism about specific cheap bonds proves overdone and those bonds recover.

5. When might the credit value factor underperform?
   - [x] During periods of sustained credit deterioration or a "flight to quality," when investors broadly move away from cheaper, riskier credits
   - It never underperforms under any market conditions
   - Only when interest rates are exactly zero
   - Only on the last trading day of the year
   > During periods when credit conditions are worsening broadly or investors are fleeing to safety, cheap, riskier credits can continue underperforming regardless of their fundamentals, hurting the value factor.

6. {#calc1} [calc] A bond's fair credit spread is 160 basis points but it trades at 210, and its duration is 5. If the spread converges to fair value, what is the approximate price gain?
   - About 0.5%
   - About 10.5%
   - [x] About 2.5%
   - About 8%
   > The spread would tighten 50 basis points, and 5 × 0.50% = 2.5% gain.
