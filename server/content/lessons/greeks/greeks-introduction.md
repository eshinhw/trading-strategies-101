---
slug: greeks-introduction
title: The Greeks: An Introduction
summary: The Greeks measure how an option's price changes when one input changes, with each Greek isolating a single source of risk: delta for the stock price, gamma for how delta itself changes, theta for time, vega for volatility, and rho for interest rates.
---

## Why We Need the Greeks

An option's price depends on several things at once, and they all move at the same time. A trader holding an option wants to know which of them matters most right now, and how much money is at stake if one of them changes. The Greeks answer that by taking each input in turn and measuring the price's sensitivity to it, which turns a single complicated price into a set of simple risk numbers.

## The Five Main Greeks

Each Greek is named after a Greek letter, apart from vega, and each measures the change in the option's price for a small change in one input, holding everything else constant:

$$
\begin{aligned}
\Delta &= \frac{\partial V}{\partial S} \quad \text{(stock price)} \\
\Gamma &= \frac{\partial^2 V}{\partial S^2} \quad \text{(how delta changes)} \\
\Theta &= \frac{\partial V}{\partial t} \quad \text{(passage of time)} \\
\text{Vega} &= \frac{\partial V}{\partial \sigma} \quad \text{(volatility)} \\
\rho &= \frac{\partial V}{\partial r} \quad \text{(interest rate)}
\end{aligned}
$$

where V is the option's value. The next lessons look at each one in turn.

## Quoting Conventions

Greeks are normally quoted per share, so to find the effect on one contract of 100 shares, multiply by 100. Delta is the change for a 1 dollar move in the stock, theta is usually the change per day, vega is the change for a 1 percentage point change in implied volatility, and rho is the change for a 1 percentage point change in interest rates. Knowing the convention matters, because the same Greek can look very different if it is quoted per year, per day, or per contract.

## Position Greeks Add Up

The Greeks of a position are simply the sum of the Greeks of each leg, adjusted for whether each leg is long or short and for how many contracts it involves. A long call has positive delta, while a short call has negative delta of the same size, and combining them cancels out. This is why complicated strategies can be understood by adding up simple pieces, and why Greeks are the standard way professionals describe the risk of a position.

## Greeks Are Local

The Greeks describe how the price responds to small changes, based on today's conditions. For large moves, or as time passes, the Greeks themselves change, which is exactly what gamma measures for delta. Treat them as a snapshot that must be refreshed, not as fixed numbers.

## Example

A risk report shows a position with these Greeks.

- Delta: 50
- Theta: −30 (dollars a day)
- Vega: 120 (dollars per 1 point of implied volatility)

**Reading each number**

- Delta of 50: the position behaves like 50 shares.
- Theta of −30: it loses about $30 a day from time decay.
- Vega of 120: it gains about $120 if implied volatility rises one point.

**What each scenario does to the position**

$$
\text{Stock rises } \$2: \quad 50 \times \$2 = +\$100
$$

$$
\text{A quiet week (7 days): } 7 \times (-\$30) = -\$210
$$

$$
\text{Implied volatility jumps 3 points: } 3 \times \$120 = +\$360
$$

With just those three numbers, the trader knows how the position responds to a move up, a quiet week, or a jump in volatility. Each Greek isolates one source of risk.

# Quiz

1. What does a Greek measure?
   - The color of an option
   - [x] How much an option's price changes when one input changes, holding the others constant
   - The number of contracts held
   - The date of expiration
   > Each Greek isolates the sensitivity of the price to one input.

2. Which Greek measures sensitivity to the passage of time?
   - Delta
   - Vega
   - [x] Theta
   - Rho
   > Theta measures time decay, the change in price as time passes.

3. A Greek is quoted per share. How do you find the effect on one standard contract?
   - Divide by 100
   - [x] Multiply by 100, since a contract covers 100 shares
   - Add 100
   - Nothing, it is already per contract
   > One contract covers 100 shares, so per-share Greeks are multiplied by 100.

4. How are the Greeks of a multi-leg position found?
   - They are unrelated to the legs
   - [x] By adding the Greeks of each leg, adjusted for long or short and the number of contracts
   - By taking the largest leg only
   - By averaging the strikes
   > Greeks add across legs, so a position can be understood from its pieces.

5. A position has a theta of −30. What does this mean, in dollars?
   - It gains 30 dollars a day from time
   - [x] It loses about 30 dollars a day from time decay, all else equal
   - It loses 30 dollars a year
   - It is unaffected by time
   > A negative theta means the position loses value as time passes.

6. {#calc1} [calc] A position has a delta of 80, theta of −45 a day and vega of 150 per volatility point. The stock rises $3, four quiet days pass and volatility rises 2 points. What is the total change?
   - +$600
   - [x] +$360
   - +$240
   - −$180
   > Delta adds 80 × $3 = $240, theta costs 4 × $45 = $180, and vega adds 2 × $150 = $300. The total is $240 − $180 + $300 = +$360.
