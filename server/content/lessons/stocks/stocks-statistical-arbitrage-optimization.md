---
slug: stocks-statistical-arbitrage-optimization
title: Statistical Arbitrage: Optimization
summary: Building a large statistical-arbitrage portfolio as a formal optimization problem, balancing expected return, risk, and trading costs across many simultaneous positions.
---

## From Forecasts to Positions

A large statistical arbitrage, or "stat arb," operation typically generates hundreds or thousands of individual return forecasts across a broad universe of stocks — one per name, updated frequently, often blending several of the signals covered elsewhere in this course, such as momentum, mean-reversion, and factor scores. The question of exactly how much of each stock to actually hold, given all those simultaneous forecasts plus real-world constraints, is itself treated as a formal optimization problem rather than decided name-by-name.

## The Optimization's Objective

The optimization typically maximizes expected portfolio return, built from the individual stock forecasts, minus a penalty for risk, usually estimated portfolio variance from a factor-based risk model, minus a penalty for transaction costs, since trading hundreds of names, especially quickly, isn't free — subject to a set of constraints: dollar-neutrality, roughly equal long and short exposure, sector or factor neutrality, not accidentally making a big bet on one industry or common factor, and position-size limits per stock.

## Penalizing Turnover

Because the forecasts, the risk model, and the cost model can all disagree with each other, and because a portfolio that's optimal for today's forecasts can require large trades away from yesterday's portfolio, in practice the optimizer typically also penalizes turnover, trading too much too fast, to keep transaction costs manageable, which means the resulting portfolio is a genuine compromise, not simply "the highest-conviction bets, sized as large as possible."

## A Discipline of Its Own

This portfolio-construction-as-optimization approach is what elevates statistical arbitrage from a collection of individual trading signals into a coherent, risk-managed system — the same underlying signals could produce very different real portfolios, and very different risk and return profiles, depending on how the optimization is set up, which is why the optimization step is treated as its own discipline within a stat-arb operation, separate from generating the underlying forecasts themselves.

# Quiz

1. In a large statistical arbitrage operation, how is the exact size of each individual stock position typically decided?
   - By trading a fixed dollar amount in every stock regardless of forecast
   - [x] As a formal optimization problem that weighs all simultaneous forecasts and constraints together, rather than name-by-name
   - Purely at random
   - Only for the single stock with the highest forecast, ignoring all others
   > With hundreds or thousands of simultaneous return forecasts, position sizing is treated as a portfolio-level optimization problem rather than a series of independent, individual decisions.

2. What does a typical stat-arb portfolio optimization try to maximize or minimize?
   - Only the number of stocks traded, with no other consideration
   - [x] Expected return minus a penalty for estimated risk minus a penalty for transaction costs
   - Only the portfolio's total dollar size
   - The number of sectors represented in the portfolio
   > The optimization balances the portfolio's expected return (from the forecasts) against the risk it's taking on and the cost of trading into that portfolio.

3. What is "dollar-neutrality," as a constraint in stat-arb portfolio construction?
   - Holding only long positions, never short
   - [x] Keeping roughly equal long and short dollar exposure in the portfolio
   - Never trading in dollar-denominated stocks
   - Holding exactly one dollar of every stock
   > Dollar-neutrality is a common constraint that keeps the portfolio's overall long exposure roughly balanced against its short exposure, reducing unintended directional market exposure.

4. Why does a stat-arb optimizer typically penalize turnover (trading too much, too fast)?
   - Turnover has no cost or downside in a real portfolio
   - [x] Because trading hundreds of names, especially quickly, incurs real transaction costs that erode returns if left unchecked
   - Regulations forbid any turnover in a stat-arb portfolio
   - Turnover always improves the portfolio's risk profile with no cost
   > Moving quickly toward an "optimal" portfolio based on today's forecasts can require large trades, which are costly at scale — penalizing turnover keeps the resulting trading manageable and cost-effective.

5. Why is portfolio-construction optimization treated as its own discipline, separate from generating the underlying return forecasts?
   - Because forecasts and portfolio construction are always exactly the same thing
   - [x] Because the same underlying forecasts can produce very different real portfolios, with very different risk and return profiles, depending on how the optimization is set up
   - Because optimization has no effect on the resulting portfolio
   - Because only one possible portfolio can ever be built from a given set of forecasts
   > How forecasts, risk, and costs are weighed and constrained in the optimization meaningfully shapes the resulting portfolio, which is why it's treated as a distinct step and discipline from generating the forecasts themselves.
