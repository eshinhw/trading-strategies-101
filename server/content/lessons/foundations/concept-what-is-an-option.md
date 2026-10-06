---
slug: concept-what-is-an-option
title: The Option Contract
summary: The two basic contracts every strategy in this course is built from.
---

## Calls and Puts

An option is a contract that gives its buyer a right, but not an obligation. A call option gives the buyer the right to buy a stock at a fixed price (the strike price) before or at a set date (expiration). A put option gives the buyer the right to sell a stock at the strike price.

## The Seller's Obligation

The seller (or 'writer') of an option takes the other side of that right: if a call buyer exercises, the call seller must deliver stock at the strike price, whether or not that's a good deal for them. That asymmetry — the buyer can walk away, the seller can't — is why option sellers get paid a premium upfront.

## Four Building Blocks

Every strategy in this course, no matter how many legs it has, is built from just four raw building blocks: long a call, short a call, long a put, short a put — often combined with a stock position. Once you're comfortable reasoning about those four positions individually, every multi-leg strategy is just addition.

## A Habit Worth Building

One habit worth building now: always ask 'who benefits if the stock goes up, and who benefits if it goes down?' for each leg separately, before you look at the combined position. It's the fastest way to understand any strategy, including ones you've never seen before.

## Example

A right without an obligation shows up outside the options market too — when a homebuyer pays a deposit for the exclusive right to buy a house at an agreed price within 60 days, they've effectively bought a call option on that house: if the market moves further in their favor they can still buy at the locked-in price, and if it doesn't, they can walk away and lose only the deposit.

# Quiz

1. If you buy a call option, what have you acquired?
   - The obligation to buy the stock at the strike price
   - [x] The right, but not the obligation, to buy the stock at the strike price
   - The right to sell the stock at the strike price
   - A share of the underlying stock
   > A call buyer has a right, not an obligation — they'll only exercise it if it's profitable to do so.

2. Who is obligated to act if an option is exercised?
   - The buyer
   - [x] The seller (writer)
   - Both equally
   - Neither — options are never binding
   > The seller took on an obligation in exchange for the premium they received upfront — they must perform if the buyer chooses to exercise.

3. Why does an option seller receive a premium?
   - [x] As compensation for taking on an obligation while the buyer only has a right
   - Because options always expire worthless
   - It's a refundable deposit
   - Premiums are only paid on stocks, not options
   > The premium compensates the seller for the asymmetric risk they've taken on — unlimited-ish obligation versus the buyer's limited, optional right.

4. A put option gives its buyer the right to do what?
   - Buy the stock at the strike price
   - [x] Sell the stock at the strike price
   - Buy the stock at any price they choose
   - Receive a fixed premium at expiration
   > A put option gives the buyer the right, but not the obligation, to sell the stock at the strike price.

5. According to this lesson, every strategy in this course is built from how many raw building blocks?
   - Two: buying and selling
   - Three: calls, puts, and stock
   - [x] Four: long call, short call, long put, short put
   - It varies strategy by strategy — there's no fixed set
   > Long a call, short a call, long a put, short a put — often combined with a stock position. Every multi-leg strategy is built from these four.
