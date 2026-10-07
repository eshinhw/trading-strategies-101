---
slug: stocks-market-making
title: Market-Making
summary: Continuously quoting both a buy and a sell price for a stock, earning the spread between them while managing the inventory risk that comes with it.
---

## Earning the Bid-Ask Spread

A market maker continuously posts both a bid — a price at which they're willing to buy — and an ask — a price at which they're willing to sell — for a stock, profiting from the difference between the two, the bid-ask spread, by buying from sellers and selling to buyers throughout the day, rather than making a directional bet on where the stock is headed.

![bid-ask-spread](The market maker earns the spread between bid and ask, and skews both quotes lower as unwanted long inventory builds up.)

## Accumulating Inventory

Because a market maker is constantly trading with whoever shows up, they inevitably accumulate inventory — if more people sell to them than buy from them over some stretch, their inventory of the stock grows; if more people buy than sell, it shrinks, or goes negative, meaning they end up short. Managing that inventory, rather than picking direction, is the central skill of market-making.

## Managing Inventory by Repricing

Market makers actively adjust their quoted prices to manage inventory risk: if they've accumulated more of a stock than they want to hold, they'll lower both their bid and ask slightly to encourage buyers and discourage further sellers, nudging their inventory back toward a comfortable level, and do the reverse if they've built up an unwanted short position. This constant, small repricing is a defining feature of the strategy, distinct from a directional trader who holds a fixed view.

## The Risk of Adverse Selection

The central risk in market-making is adverse selection: on average, the people most eager to trade with you right now are often the ones who know something you don't — informed traders who trade aggressively just before news moves the price. A market maker who can't tell informed order flow from routine liquidity-driven trading risks systematically buying right before a stock falls and selling right before it rises, which is why market makers widen their spreads when uncertainty or the risk of informed trading is elevated.

# Quiz

1. What is the primary source of profit for a market maker?
   - Correctly predicting whether a stock will rise or fall
   - [x] The bid-ask spread — the difference between the price they buy at and the price they sell at
   - Collecting dividends on stocks they hold long-term
   - Charging a fixed monthly subscription fee to traders
   > A market maker profits from continuously buying at the bid and selling at the ask, earning the spread between the two on a large volume of trades, rather than betting on price direction.

2. What happens to a market maker's inventory if more traders sell to them than buy from them over some period?
   - Their inventory of the stock automatically resets to zero
   - [x] Their inventory of the stock grows
   - They are required to stop trading immediately
   - Nothing — market makers don't hold inventory
   > Since a market maker is on the other side of whichever trades come to them, one-sided order flow causes their inventory to build up, or on the other side go short — managing that buildup is central to the job.

3. How does a market maker typically respond to having accumulated more inventory of a stock than they want?
   - They stop quoting prices entirely
   - [x] They slightly lower both their bid and ask to encourage buyers and discourage further sellers
   - They raise both their bid and ask to attract more sellers
   - Inventory levels have no effect on their quoted prices
   > Skewing quotes lower nudges the market maker's inventory back toward a comfortable level by making it more attractive for others to buy from them and less attractive to sell to them.

4. What is "adverse selection" risk in market-making?
   - The risk that exchange fees rise unexpectedly
   - [x] The risk of systematically trading against informed traders who know something the market maker doesn't, just before news moves the price
   - The risk that a stock gets delisted
   - A rule that prevents market makers from trading with retail investors
   > Adverse selection is the risk that the counterparties most eager to trade right now are disproportionately informed ones, so the market maker ends up buying right before bad news or selling right before good news.

5. Why do market makers widen their bid-ask spreads when uncertainty is elevated?
   - Wider spreads are required by exchange regulations at all times
   - [x] A wider spread compensates for the increased risk of trading against informed order flow during uncertain periods
   - Widening spreads has no relationship to risk
   - To guarantee a fixed daily profit regardless of market conditions
   > Charging more for the service of continuously being available to trade helps offset the higher risk of adverse selection when the chance of trading against better-informed counterparties increases.

6. {#calc1} [calc] A market maker quotes $20.00 bid and $20.06 ask. In an hour it buys 3,000 shares and sells 2,500. How much spread does it earn on the matched shares, and what is its inventory?
   - $180, and it is long 500 shares
   - $150, and it is short 500 shares
   - [x] $150, and it is long 500 shares
   - $30, and it is flat
   > The matched 2,500 shares each earn the $0.06 spread: 2,500 × $0.06 = $150. It bought 500 more than it sold, so it is long 500 shares and will lower its quotes to sell them.
