---
slug: concept-moneyness
title: Moneyness: ITM, ATM, OTM
summary: A quick way to describe where a strike sits relative to the stock price.
---

## What Moneyness Means

Moneyness describes the relationship between an option's strike price and the stock's current price. It comes up constantly in this course's strategy descriptions, so it's worth being fluent in it before moving on.

## Moneyness for Calls

For a call option: if the stock price is above the strike, the call is in-the-money (ITM) — exercising it right now would be profitable. If the stock is below the strike, it's out-of-the-money (OTM). If they're equal, it's at-the-money (ATM).

## Moneyness for Puts

For a put option, it's flipped: the put is ITM when the stock is below the strike, and OTM when the stock is above the strike.

## Why It Affects Price

As a rule of thumb, ITM options are more expensive (they have real, immediate value) and OTM options are cheaper (they're 'betting' on a move that hasn't happened yet). You'll see this pattern show up in almost every strategy: buying OTM options to keep cost down, selling OTM options to collect a safer premium.

## Example

Traders shorthand this constantly on a trading desk: a market maker scanning an options chain on an earnings day will describe strikes as 'deep ITM,' 'ATM,' or 'way OTM' without doing any math — moneyness is the mental sorting tool that lets them instantly tell which of dozens of strikes are worth quoting tightly and which are near-worthless lottery tickets.

# Quiz

1. A stock trades at $100. Is a $95-strike call in-the-money or out-of-the-money?
   - [x] In-the-money
   - Out-of-the-money
   - At-the-money
   - Moneyness doesn't apply to calls
   > The stock ($100) is above the call's strike ($95), so the call is in-the-money.

2. A stock trades at $100. Is a $95-strike put in-the-money or out-of-the-money?
   - In-the-money
   - [x] Out-of-the-money
   - At-the-money
   - Moneyness doesn't apply to puts
   > For a put, ITM means the stock is below the strike. $100 is above $95, so this put is OTM.

3. All else equal, which option is typically cheaper?
   - An in-the-money option
   - [x] An out-of-the-money option
   - They always cost the same
   - Cost has nothing to do with moneyness
   > OTM options have no intrinsic value yet — they're purely a bet on a future move — so they're generally cheaper than ITM options.

4. A stock trades at exactly $100. What is the moneyness of a $100-strike call?
   - In-the-money
   - Out-of-the-money
   - [x] At-the-money
   - Undefined — moneyness requires the strike and stock price to differ
   > When the strike equals the current stock price, the option is at-the-money (ATM).

5. Per this lesson's rule of thumb, why do so many strategies buy OTM options to keep cost down and sell OTM options for a 'safer' premium?
   - [x] OTM options have no intrinsic value yet, so they're cheaper to buy and less likely to be exercised against a seller
   - OTM options are always more expensive than ITM options
   - OTM options guarantee a profit for the buyer
   - Moneyness has no real effect on an option's price
   > OTM options are cheaper to buy (no intrinsic value yet) and, for a seller, less likely to move in-the-money and get exercised — which is why they show up on both sides of so many strategies.
