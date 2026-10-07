---
slug: fixed-income-yield-and-price
title: Yield, Price, and the Inverse Relationship
summary: Why a bond's price and its yield move in opposite directions — the single most important relationship in fixed income.
---

## What Yield Means

A bond's yield is the annualized return an investor earns by holding it, accounting for both its coupon payments and any difference between the price paid and the face value received back at maturity. Yield to maturity, the most commonly quoted figure, captures the total return an investor would earn holding the bond all the way to maturity, reinvesting coupons along the way.

## Why Price and Yield Move Oppositely

A bond's coupon is fixed at issuance, so when market interest rates rise, newly issued bonds offer higher coupons, making existing, lower-coupon bonds less attractive at their original price — their price must fall for their fixed coupon to translate into a competitive yield. The reverse happens when rates fall: existing higher-coupon bonds become more attractive, and their price rises.

## A Concrete Illustration

A bond issued at par with a 4% coupon pays $40 a year on a $1,000 face value, regardless of what happens to rates afterward. If market rates rise to 5%, a new buyer of that same bond wouldn't pay $1,000 for only a 4% return when 5% is available elsewhere — the bond's price has to drop below $1,000 until its fixed $40 coupon, plus the price discount, works out to a competitive 5% yield.

## Current Yield vs. Yield to Maturity

Current yield is a simpler, cruder measure: just the annual coupon divided by the bond's current market price, ignoring any gain or loss from the price converging to face value at maturity. Yield to maturity is the more complete measure, since it accounts for that convergence too, which is why the two figures diverge whenever a bond trades away from par.

## Example

A year after issue, market rates for similar companies have risen from 5% to 6%.

- Face value: $1,000
- Coupon: $25 every six months
- Time left: 9 years, which is 18 coupon periods
- Required yield: 6%, which is 3% every six months

**Price of one bond**

$$
P = \sum_{t=1}^{18} \frac{\$25}{1.03^t} + \frac{\$1{,}000}{1.03^{18}} = \$343.84 + \$587.39 = \boxed{\$931.23}
$$

**Price change**

$$
\$931.23 - \$1{,}000 = -\$68.77
$$

**Two yield measures**

$$
\text{Current yield} = \frac{\$50}{\$931.23} = 5.37\%
$$

- Yield to maturity: 6.00%
- The gap is the $68.77 a buyer collects as the price climbs back to $1,000.

**Effect on an investor holding 100 bonds ($100,000 face value)**

$$
100 \times \$931.23 = \$93{,}123 \quad\Rightarrow\quad -\$6{,}877
$$

The coupon and the company's ability to pay are unchanged. Only the market rate moved.

# Quiz

1. What does a bond's yield to maturity capture?
   - [x] The total annualized return from holding the bond to maturity, including coupons and the difference between purchase price and face value
   - Only the bond's coupon rate, with nothing else considered
   - The issuer's credit rating
   - The bond's original face value alone
   > Yield to maturity is the more complete return measure, folding in both the coupon income and any price gain or loss as the bond converges to face value.

2. Why does a bond's price fall when market interest rates rise?
   - [x] Its fixed coupon becomes less attractive relative to newly issued bonds offering higher coupons, so its price must drop to remain competitive
   - Rising rates have no effect on existing bond prices
   - The issuer is required to lower the bond's face value
   - Bond prices only change when the issuer's credit rating changes
   > Since a bond's coupon is fixed, a rise in prevailing rates makes its existing coupon relatively less attractive, and the price has to fall for its yield to stay competitive.

3. A 4%-coupon bond was issued at $1,000 par. If market rates rise to 5%, what happens to the bond's price?
   - [x] It falls below $1,000, so the fixed $40 coupon plus the price discount produces a competitive 5% yield
   - It rises above $1,000
   - It stays exactly at $1,000 regardless of rate changes
   - The bond's coupon automatically increases to 5%
   > With a fixed $40 coupon, the only way the bond can offer a competitive 5% yield after rates rise is for its price to fall below the original $1,000.

4. What does current yield measure, and how does it differ from yield to maturity?
   - [x] Current yield is just annual coupon divided by current price, ignoring the price's eventual convergence to face value that yield to maturity accounts for
   - Current yield and yield to maturity always produce identical numbers
   - Current yield accounts for reinvestment risk, while yield to maturity does not
   - Current yield only applies to bonds trading exactly at par
   > Current yield is a simpler, cruder snapshot that ignores the price/face-value convergence over time, which is exactly what yield to maturity captures.

5. What happens to existing bond prices when market interest rates fall?
   - [x] Existing, higher-coupon bonds become more attractive and their prices rise
   - Existing bond prices fall
   - Bond prices are unaffected by falling rates
   - All existing bonds are recalled by their issuers
   > When new bonds offer lower coupons, existing bonds with higher, fixed coupons become relatively more attractive, pushing their prices up — the mirror image of the rate-rise case.

6. [calc] The manufacturer's 5% bond has 9 years left, and market yields rise to 6%. Which price is closest to what the bond is worth?
   - $1,068.77
   - $1,000.00
   - [x] $931.23
   - $850.00
   > A buyer wants a 6% yield, so the price must fall below face value until the fixed $25 coupons plus the pull back to $1,000 give 6%. $931.23 is the discounted value of those payments.

7. [calc] At that $931.23 price, what is the bond's current yield (annual coupon divided by price)?
   - 5.00%
   - [x] 5.37%
   - 6.00%
   - 6.37%
   > The annual coupon is $50, and $50 / $931.23 is 5.37%. It is lower than the 6.00% yield to maturity because current yield ignores the gain as the price converges to $1,000.
