---
slug: structured-assets-mbs-trading
title: Mortgage-Backed Security (MBS) Trading
summary: Trading MBS based on views about prepayment speed and relative value against Treasuries, rather than simply holding for yield.
---

## Trading a View on Prepayment Speed

Since MBS cash flows depend heavily on how fast the underlying mortgages prepay, traders take active positions based on their own view of future prepayment speed diverging from what's priced into the market. Buying a discount, below-par, pass-through when expecting faster-than-priced prepayment is a classic example, since faster prepayment returns principal sooner at a below-par price, boosting the effective yield realized.

## Premium and Discount Pass-Throughs

A premium pass-through — priced above par, typically higher-coupon — loses value from faster-than-expected prepayment, since principal is returned at par sooner than expected on a security bought above par. A discount pass-through benefits from faster prepayment for the opposite reason. This asymmetry is central to how traders position around a prepayment view.

## Option-Adjusted Spread as a Relative Value Tool

Because an MBS's effective cash flows depend on a borrower's prepayment option, comparing MBS to Treasuries on yield alone is misleading. Traders instead use option-adjusted spread (OAS), which strips out the value of the prepayment option to compare an MBS's compensation for genuine credit and liquidity risk against similar-duration Treasuries on a like-for-like basis.

## TBA Trading

Much MBS trading happens not in specific, identified pools but in the TBA (to-be-announced) market, where the specific pool of mortgages backing the trade isn't specified until just before settlement. That standardization makes the broader MBS market far more liquid, similar in spirit to how standardized futures contracts enable a liquidity a private forward agreement can't match.

## Example

A pass-through backed by 4%-coupon mortgages trades at a discount.

- Price: 98 (98 cents on the dollar), so $1 million face costs $980,000
- Market's assumed prepayment speed: 8% CPR, an average life of about 6.5 years
- The trader's view: prepayments will run at 12% CPR, an average life of about 5.0 years

**Where the discount comes from**

$$
\$1{,}000{,}000 - \$980{,}000 = \$20{,}000 \text{ of discount}
$$

Every dollar of principal that returns is paid at 100, so the $20,000 is earned as principal comes back.

**Approximate yield (coupon yield plus discount spread over the average life)**

$$
\text{Coupon yield: } \frac{4.00}{98} = 4.08\%
$$

$$
\text{At 8\% CPR: } 4.08\% + \frac{2/98}{6.5} = 4.08\% + 0.31\% = 4.39\%
$$

$$
\text{At 12\% CPR: } 4.08\% + \frac{2/98}{5.0} = 4.08\% + 0.41\% = \boxed{4.49\%}
$$

If the trader is right, the yield is about 10 basis points higher than the market priced in.

Principal bought at a discount and returned sooner at full face value boosts the realized yield. The same view would hurt a bond bought at a premium, because faster prepayments would shorten the life of income already paid for.

# Quiz

1. Why would a trader buy a discount pass-through when expecting faster-than-priced prepayment?
   - [x] Faster prepayment returns principal sooner at a below-par price, boosting the effective yield realized
   - Discount pass-throughs have no relationship to prepayment speed
   - Faster prepayment always hurts a discount pass-through's return
   - Prepayment speed has no effect on any MBS's value
   > Buying below par means faster prepayment accelerates the return of principal at that discounted price, which improves the realized yield relative to a slower-prepaying scenario.

2. How does a premium pass-through respond to faster-than-expected prepayment?
   - [x] It loses value, since principal purchased above par is returned at par sooner than expected
   - It always gains value from faster prepayment
   - Premium pass-throughs are entirely unaffected by prepayment speed
   - It automatically converts into a discount pass-through
   > A premium pass-through was bought above par, so getting principal back early, at par, sooner than anticipated, erodes the return relative to what was expected when the higher price was paid.

3. What does option-adjusted spread (OAS) do?
   - [x] Strips out the value of the prepayment option, allowing a like-for-like comparison of an MBS's compensation for credit and liquidity risk against Treasuries
   - Measures only a bond's stated coupon rate
   - Ignores prepayment entirely and just compares raw yields
   - Only applies to government bonds, never MBS
   > OAS adjusts for the value embedded in the borrower's prepayment option, letting investors compare an MBS's genuine credit/liquidity compensation to similar-duration Treasuries on a fairer basis than raw yield.

4. What is the TBA market?
   - [x] A market where MBS trade without the specific underlying pool being identified until just before settlement, increasing liquidity
   - A market exclusively for identified, named mortgage pools
   - A market that only trades government Treasury bonds
   - A market with no standardization at all
   > TBA (to-be-announced) trading standardizes MBS trading by deferring the specific pool identification until near settlement, which is what makes the broader MBS market so liquid.

5. Why is comparing MBS to Treasuries on raw yield alone considered misleading?
   - [x] Because an MBS's effective cash flows depend on the borrower's prepayment option, which raw yield doesn't account for
   - Because Treasuries and MBS always have identical cash flow structures
   - Because MBS never actually pay any yield
   - Because Treasuries have no yield at all
   > Raw yield ignores the prepayment option embedded in an MBS, which materially affects its actual cash flow timing — OAS exists specifically to correct for that.

6. A trader buys a discount pass-through priced with an 8% CPR assumption, expecting a 12% CPR instead. Why does that view, if correct, boost the trader's realized yield?
   - [x] Because the security was bought below par, faster-than-expected prepayment returns principal at full face value sooner than priced in
   - Faster prepayment always reduces a discount pass-through's yield
   - The trader's prepayment view has no effect on realized yield
   - CPR assumptions only matter for premium pass-throughs, never discount ones
   > Since the pass-through was purchased below par, principal returned faster than the market priced in effectively converts that discount into extra realized yield — the core mechanic behind trading a prepayment view.

7. {#calc1} [calc] A trader buys $2 million face of a pass-through at 97. If all of the principal comes back at par, how much discount does the trader earn?
   - $6,000
   - $600,000
   - [x] $60,000
   - $2,000,000
   > The purchase price is $2,000,000 × 0.97 = $1,940,000, and getting $2,000,000 back is a gain of $60,000.
