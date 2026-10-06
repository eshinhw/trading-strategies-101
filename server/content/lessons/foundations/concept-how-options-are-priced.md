---
slug: concept-how-options-are-priced
title: How Options Are Priced
summary: An option's price, called its premium, is its intrinsic value plus its time value, and it depends on the stock price, the strike, the time to expiration, volatility, and interest rates.
---

## Intrinsic Value and Time Value

An option's premium has two parts: what it would be worth if exercised right now, called intrinsic value, and an extra amount for the chance it becomes more valuable before expiration, called time value.

$$
\text{premium} = \text{intrinsic value} + \text{time value}
$$

Intrinsic value for a call is how far the stock is above the strike, and for a put it is how far the stock is below the strike, and neither can be negative:

$$
\text{call: } \max(S - K,\ 0) \qquad \text{put: } \max(K - S,\ 0)
$$

An out-of-the-money option has no intrinsic value, so its whole premium is time value.

## What Drives Time Value

Time value is larger when there is more time left, because the stock has longer to move in the option's favor, and when the stock is more volatile, because bigger swings make a profitable outcome more likely. As expiration approaches, time value shrinks toward zero, which is why an option's price slowly erodes if the stock doesn't move. This steady erosion is called time decay.

## The Five Main Inputs

Five main inputs set an option's price: the stock price, the strike price, the time to expiration, the volatility of the stock, and the interest rate, with expected dividends also playing a role. A higher stock price raises call prices and lowers put prices, and a higher strike does the reverse. More time and higher volatility generally raise both calls and puts, while higher interest rates slightly raise calls and lower puts.

## Pricing Models and Implied Volatility

A pricing model such as Black-Scholes turns those inputs into a theoretical option price. The stock price, strike, time, and rate are known, but future volatility is not, so traders usually run the model in reverse: they take the market price of the option and work out the volatility that would produce it, called implied volatility. Implied volatility is therefore the market's expectation of how much the stock will move, and it is the main way options are compared with one another.

## Example

A stock trades at 105 and a call with a strike of 100 is priced at 7.50. The intrinsic value is 105 − 100 = 5, so the remaining 2.50 is time value. If the stock stays at 105 until expiration, the time value will fade to zero and the call will be worth only 5, so the buyer loses 2.50 even though the stock hasn't moved. This is why buying options means paying for time, and why the Greeks in the next module break down how each input affects the price.

# Quiz

1. What are the two parts of an option's premium?
   - Strike and expiration
   - [x] Intrinsic value and time value
   - Delta and gamma
   - Bid and ask
   > Premium equals what the option would be worth if exercised now plus extra value for the chance of further gains.

2. A stock is at 60. What is the intrinsic value of a put with a strike of 55?
   - 5
   - [x] 0
   - 55
   - 60
   > A put's intrinsic value is max(55 − 60, 0) = 0, since the put is out of the money.

3. Why does an out-of-the-money option have a premium?
   - It doesn't have any premium
   - [x] The chance of becoming profitable gives it time value, even with no intrinsic value
   - It is required by the exchange
   - Because of dividends only
   > All of an out-of-the-money option's premium is time value.

4. What generally happens to a call's price if volatility rises?
   - It falls
   - [x] It rises, because bigger swings make a profitable outcome more likely
   - It stays the same
   - It becomes zero
   > Higher volatility raises time value for both calls and puts.

5. In the example, a call with strike 100 is priced at 7.50 with the stock at 105. How much is time value?
   - 5.00
   - 7.50
   - [x] 2.50
   - 0
   > Time value is the premium minus intrinsic value: 7.50 − 5 = 2.50.
