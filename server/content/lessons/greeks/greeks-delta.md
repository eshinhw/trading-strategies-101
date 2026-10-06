---
slug: greeks-delta
title: Delta
summary: Delta measures how much an option's price changes for a 1 dollar move in the stock, and it also tells you how many shares the option behaves like.
---

## What Delta Measures

Delta is the change in an option's price for a 1 dollar change in the stock price. A call's delta ranges from 0 to 1, because a call gains value when the stock rises, and a put's delta ranges from −1 to 0, because a put gains when the stock falls. A call with a delta of 0.60 should gain about 0.60 per share if the stock rises by 1 dollar.

## Delta and Moneyness

Delta depends on how far in or out of the money an option is. An at-the-money call has a delta of about 0.50, and a deep in-the-money call has a delta close to 1, because it moves almost one-for-one with the stock. A far out-of-the-money option has a delta near 0, since the stock is unlikely to reach the strike. For the same strike and expiration, a put's delta equals the call's delta minus 1:

$$
\Delta_{\text{put}} = \Delta_{\text{call}} - 1
$$

## Delta as a Rough Probability

Delta is often used as a rough guide to the chance that an option finishes in the money, so a call with a delta of 0.30 is sometimes described as having about a 30% chance. This is only a rule of thumb, and it is not an exact probability, but it gives a quick feel for how likely the market thinks it is that the option pays off.

## Delta as Share Equivalent

Because one contract covers 100 shares, a position's delta in shares is the option delta times 100 times the number of contracts:

$$
\text{position delta} = \Delta \times 100 \times \text{contracts}
$$

Owning one call with a delta of 0.60 behaves like owning 60 shares for small moves. A trader can combine options and stock to offset each other, and a position whose total delta is close to zero is called delta-neutral, meaning it is not exposed to small moves in either direction.

## Delta of a Strategy

Position delta adds across legs. A covered call combines 100 shares, which have a delta of 100, with a short call at a delta of 0.40, which contributes −0.40 × 100 = −40, for a net delta of 60. That tells you the position behaves like 60 shares: it still gains if the stock rises, but less than owning the stock outright.

## In Practice

A trader holds 5 call contracts, each with a delta of 0.50. The position delta is 0.50 × 100 × 5 = 250, so it behaves like 250 shares. If the stock rises by 1 dollar, the position should gain roughly 250 dollars, and if the stock falls by 1 dollar, it should lose about the same. To neutralize that exposure the trader could sell 250 shares of the stock.

# Quiz

1. What is the range of a call option's delta?
   - −1 to 0
   - [x] 0 to 1
   - 0 to 100
   - −100 to 100
   > A call gains when the stock rises, so its delta is between 0 and 1.

2. About what delta does an at-the-money call have?
   - 0
   - 1
   - [x] About 0.50
   - −0.50
   > An at-the-money call has roughly even odds of finishing in the money, and a delta near 0.50.

3. A call has a delta of 0.60. About how much should it gain if the stock rises 1 dollar?
   - 0.06
   - [x] About 0.60 per share
   - 6.00 per share
   - Nothing
   > Delta is the change in the option's price for a 1 dollar change in the stock.

4. How many shares does one call contract with a delta of 0.40 behave like?
   - 4 shares
   - [x] About 40 shares
   - 400 shares
   - 100 shares
   > Position delta is 0.40 × 100 = 40 shares.

5. A covered call combines 100 shares and a short call with a delta of 0.40. What is the net delta?
   - 140
   - 100
   - [x] 60
   - 40
   > The stock contributes +100 and the short call contributes −40, for a net delta of 60.
