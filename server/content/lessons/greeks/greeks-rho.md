---
slug: greeks-rho
title: Rho
summary: Rho measures how much an option's price changes when interest rates change by one percentage point, and it matters most for long-dated options.
---

## What Rho Measures

Rho is the change in an option's price for a 1 percentage point change in interest rates. A call has a positive rho and a put has a negative rho. A call with a rho of 0.08 gains about 0.08 per share, or 8 dollars per contract, if interest rates rise by one point, and loses the same if they fall.

## Why Interest Rates Matter

Interest rates matter because buying a call is an alternative to buying the stock. Instead of paying the full price for the shares, the call buyer pays a smaller premium and keeps the rest of the money in an account earning interest. Higher rates make that alternative more attractive, which raises call prices slightly and lowers put prices slightly, since a put holder is giving up the interest that could have been earned on the stock's sale proceeds.

## Rho Is Usually Small

For most short-dated options, rho is tiny compared with delta, theta, or vega, because there is little time for interest to accumulate, and rates rarely move by much in a few weeks. That is why it is often ignored in everyday trading and only occasionally appears on a risk report.

## When Rho Matters

Rho becomes more important for long-dated options, such as those lasting a year or more, since interest accumulates over a longer period, and in times when interest rates are high or changing quickly. It is also larger for in-the-money options than for out-of-the-money ones. A trader holding long-dated options through a rate-hiking cycle will notice the effect.

## Example

A trader holds a one-year call with a rho of 0.25 (per share, per 1 percentage point change in interest rates).

**A central bank raises rates by 1 percentage point**

$$
0.25 \text{ per share} \times 100 = \boxed{+\$25 \text{ per contract}}
$$

**A one-week option at the same strike**

Rho is roughly proportional to the time left. One week is 1/52 of a year:

$$
0.25 \times \frac{1}{52} \approx 0.005 \text{ per share} \quad\Rightarrow\quad 0.005 \times 100 = \$0.50 \text{ per contract}
$$

- One-year call: +$25 for a 1-point rate rise
- One-week call: about +$0.50 for the same rise

Rho depends mainly on how long the option has left. It matters for long-dated options and can usually be ignored for short-dated ones.

# Quiz

1. What does rho measure?
   - The effect of time decay
   - [x] The change in an option's price for a 1 percentage point change in interest rates
   - The effect of volatility
   - The change in delta
   > Rho is the sensitivity to interest rates.

2. What sign does rho have for a call?
   - Negative
   - [x] Positive
   - Zero
   - It depends on the stock
   > Higher interest rates slightly raise call prices, so a call's rho is positive.

3. Why is rho often ignored for short-dated options?
   - Interest rates do not exist
   - [x] There is little time for interest to accumulate, so the effect is small
   - Rho is always zero
   - Short options are free
   > For short-dated options, rho is tiny compared with the other Greeks.

4. When does rho matter more?
   - For options expiring tomorrow
   - [x] For long-dated options, and when rates are high or changing quickly
   - Only for put options
   - Only for stock splits
   > Interest accumulates over longer periods, so long-dated options are more sensitive to rate changes.

5. A one-year call has a rho of 0.25. Rates rise 1 percentage point. About how much does one contract gain, all else equal?
   - 0.25 dollars
   - 2.50 dollars
   - [x] About 25 dollars
   - 250 dollars
   > A per-share rho of 0.25 is 0.25 × 100 = 25 dollars per contract.
