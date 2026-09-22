import type { ConceptLesson } from "./types.js";

// Concept-lesson format, not the interactive payoff-diagram format used for
// options — most futures strategies (hedging, trend following, spreading)
// aren't option-like payoff structures, they're trading processes, so prose
// + a knowledge-check quiz fits better than forcing them through the
// options-specific params/payoff engine.
export const futuresConceptLessons: ConceptLesson[] = [
  {
    kind: "concept",
    slug: "futures-hedging-with-futures",
    title: "Hedging risk with futures",
    summary: "Using a futures contract to offset the price risk of a position you already hold, or will hold.",
    body: [
      "A futures contract is a standardized, exchange-traded agreement to buy or sell an asset at a set price on a future date. Hedging with futures means taking the opposite position to whatever exposure you already have, so that a loss on one side is offset by a gain on the other.",
      "Take a wheat farmer who will harvest and sell wheat in six months and is worried prices will fall by then. They sell (go short) wheat futures now, locking in today's price. If the cash price falls, the loss on the physical crop is offset by a gain on the short futures position. This is a short hedge — used by anyone who is effectively long the underlying and worried about a price drop.",
      "The mirror image is a long hedge: a cereal manufacturer who will need to buy wheat in three months and is worried prices will rise buys (goes long) wheat futures now. If the cash price rises, the higher cost of the physical wheat is offset by a gain on the long futures position.",
      "Hedging with futures doesn't eliminate risk — it trades price risk for basis risk, the risk that the futures price and the cash price don't move in perfect lockstep. A hedger also gives up the benefit of a favorable price move in exchange for protection against an unfavorable one; certainty has a cost.",
    ],
    quiz: [
      {
        id: "q1",
        prompt: "A farmer who will sell wheat in six months and wants to hedge against falling prices should:",
        choices: [
          "Buy wheat futures (a long hedge)",
          "Sell wheat futures (a short hedge)",
          "Buy wheat call options only",
          "Do nothing — futures can't hedge production risk",
        ],
        correctIndex: 1,
        explanation:
          "The farmer is effectively already long the wheat they'll produce, so they hedge by going short futures — a gain on the futures position offsets a drop in the cash price.",
      },
      {
        id: "q2",
        prompt: "A cereal manufacturer who will need to buy wheat in three months and fears rising prices should:",
        choices: [
          "Sell wheat futures",
          "Buy wheat futures (a long hedge)",
          "Sell their existing wheat inventory",
          "Wait until the price drops",
        ],
        correctIndex: 1,
        explanation:
          "The manufacturer is effectively short the wheat they'll need to buy, so they hedge with a long futures position — a rise in futures offsets the higher price they'll pay later.",
      },
      {
        id: "q3",
        prompt: "What does it mean that a futures hedge trades price risk for \"basis risk\"?",
        choices: [
          "The hedge eliminates all risk entirely",
          "The futures price and the spot price may not move in perfect lockstep, so the hedge can be imperfect",
          "Futures contracts carry no risk at all",
          "Basis risk only affects long hedges, never short hedges",
        ],
        correctIndex: 1,
        explanation:
          "Basis is the difference between the spot price and the futures price. Because that difference can change, a futures hedge reduces but rarely fully eliminates price risk.",
      },
      {
        id: "q4",
        prompt: "What's a key tradeoff a hedger accepts when using futures to lock in a price?",
        choices: [
          "They give up potential gains if the price moves in their favor instead of against them",
          "They lose ownership of the underlying asset immediately",
          "They must physically deliver the commodity the next day",
          "They can never close the position before expiration",
        ],
        correctIndex: 0,
        explanation:
          "Locking in a price protects against an adverse move, but also gives up the benefit of a favorable one — that's the cost of the certainty a hedge provides.",
      },
      {
        id: "q5",
        prompt: "Futures contracts are described as being \"marked to market daily.\" What does that mean?",
        choices: [
          "Gains and losses on the position are settled in cash at the end of each trading day",
          "The contract's price is only updated once, at expiration",
          "Futures can only be traded once per day",
          "The exchange sets a new strike price every day",
        ],
        correctIndex: 0,
        explanation:
          "Exchange-traded futures are marked to market daily — the account is credited or debited each day for gains and losses, unlike a simple one-time-settlement forward agreement.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "futures-trend-following",
    title: "Trend following (momentum)",
    summary: "A systematic strategy that buys assets going up and sells assets going down, betting trends persist.",
    body: [
      "Trend following is a systematic, rules-based strategy: instead of predicting where a market is headed, it reacts to where the market has already been headed — buying instruments in an established uptrend and shorting (or avoiding) those in a downtrend. Futures are the natural tool for this because they make it cheap and capital-efficient to go long or short across many different asset classes from one account.",
      "A simple example rule: go long when price crosses above its 200-day moving average, go short (or exit) when it crosses back below. The strategy never tries to call the top or the bottom — it accepts being late getting into every trend and late getting out, in exchange for capturing the middle of a sustained move.",
      "Trend following is defined by a low win rate paired with positive expectancy. Most individual trades are small losses — the trend didn't continue, or the market chopped sideways — but the few trades that do catch a real, sustained trend are large enough winners to more than make up for the many losers. Because of this, disciplined risk management (small, consistent position sizing and cutting losers quickly) matters more to this strategy's success than being right often.",
      "Trend-following programs typically trade across many uncorrelated futures markets at once — grains, energy, metals, currencies, interest rates, equity indexes — rather than concentrating on one. Since nobody knows in advance which market will trend next, spreading the strategy across many markets is what lets a handful of big winners offset the frequent small losses elsewhere.",
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What is the core premise behind trend following?",
        choices: [
          "Prices always revert back to their historical average",
          "Once a trend is established, it tends to persist long enough to be profitably traded",
          "Markets are perfectly random and impossible to trade systematically",
          "You should always buy whichever asset is cheapest",
        ],
        correctIndex: 1,
        explanation:
          "Trend following bets on persistence, not reversal — it buys strength and sells weakness on the premise that an established trend is more likely to continue than reverse.",
      },
      {
        id: "q2",
        prompt:
          "A rule like \"go long when price crosses above its 200-day moving average\" is best described as:",
        choices: [
          "A prediction of exactly where the market will turn",
          "A reactive, rules-based signal that follows price rather than forecasting it",
          "A guarantee of profit on every trade",
          "A rule that only works in commodity markets",
        ],
        correctIndex: 1,
        explanation:
          "Trend-following signals react to price action that has already happened — they never try to predict a turning point in advance.",
      },
      {
        id: "q3",
        prompt: "Trend-following strategies are typically characterized by:",
        choices: [
          "A high win rate with small, consistent gains on every trade",
          "A low win rate, with a few large winning trades funding many small losses",
          "Guaranteed profit whenever markets move sideways",
          "No need for risk management, since trends always continue",
        ],
        correctIndex: 1,
        explanation:
          "Most individual trend-following trades lose small amounts on false starts or choppy markets; profitability depends on a minority of trades capturing large, sustained trends.",
      },
      {
        id: "q4",
        prompt:
          "Why do trend-following strategies typically trade many different futures markets at once rather than concentrating on one?",
        choices: [
          "To increase leverage on a single best idea",
          "Diversification across uncorrelated markets lets big winners in a few offset frequent small losses in others",
          "Regulations require trading at least ten markets",
          "It has no real effect on performance either way",
        ],
        correctIndex: 1,
        explanation:
          "Since nobody knows in advance which market will trend next, spreading the strategy across many uncorrelated futures markets increases the odds of catching at least a few large, profitable trends.",
      },
      {
        id: "q5",
        prompt: "Why are futures a natural fit for trend-following strategies, compared to trading individual stocks?",
        choices: [
          "Futures cannot be sold short",
          "Futures make it capital-efficient to go long or short across many asset classes from one account",
          "Futures never expire, unlike stocks",
          "Futures have no daily price limits",
        ],
        correctIndex: 1,
        explanation:
          "Standardized, liquid futures contracts let a trend follower take long or short exposure to dozens of markets — commodities, currencies, rates, indexes — with relatively modest capital, which is much harder to do with individual stocks.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "futures-calendar-spread",
    title: "Calendar spread",
    summary: "Trading the price relationship between two futures contracts on the same underlying that expire at different times.",
    body: [
      "A futures calendar spread (also called a time spread) means simultaneously buying one futures contract and selling another on the same underlying asset, but with different expiration months — for example, buying December crude oil futures and selling November crude oil futures. Rather than betting on which direction the underlying commodity moves, the trader is betting on how the price difference between the two expirations changes.",
      "That difference reflects the market's expectations about supply and storage costs between now and each delivery date. It can sit in contango, where later-dated contracts are priced higher than near-dated ones — common when storage costs are significant, as with crude oil or grains — or in backwardation, where later-dated contracts are priced lower, often a sign that near-term supply is unusually tight and buyers are paying up for more immediate availability.",
      "Because both legs of the spread move together with the overall commodity price most of the time, a calendar spread is far less exposed to day-to-day price noise than an outright long or short futures position. The trader is isolating a narrower bet on the shape of the futures curve — the supply, demand, and storage dynamics between two dates — rather than on the commodity's absolute price level.",
      "A classic use case: heading into a season where a supply crunch is expected, such as a natural gas contract approaching a cold winter with low storage, a trader might buy the near-month contract and sell a further-out month, expecting the near-term squeeze to push the front contract's price up relative to the back one. That profits from the change in the spread, largely independent of whether natural gas prices broadly rise or fall.",
    ],
    quiz: [
      {
        id: "q1",
        prompt: "A futures calendar spread involves:",
        choices: [
          "Buying and selling futures on two different underlying commodities",
          "Buying one futures contract and selling another on the same underlying but a different expiration month",
          "Buying a futures contract and an option with the same expiration",
          "Holding a single futures contract until expiration",
        ],
        correctIndex: 1,
        explanation:
          "A calendar spread trades the price relationship between two expirations of the same underlying, not two different commodities.",
      },
      {
        id: "q2",
        prompt: "What is a trader in a calendar spread primarily betting on?",
        choices: [
          "The absolute direction of the underlying commodity's price",
          "How the price difference between the two expiration months will change",
          "Which exchange offers the lowest trading fees",
          "That the commodity's price will double",
        ],
        correctIndex: 1,
        explanation:
          "Because both legs move together with the broad commodity price most of the time, the trader is isolating a bet on the relative price difference between the two dates, not the outright price level.",
      },
      {
        id: "q3",
        prompt: "When later-dated futures contracts are priced higher than near-dated ones, the market is said to be in:",
        choices: ["Backwardation", "Contango", "Equilibrium", "Arbitrage"],
        correctIndex: 1,
        explanation:
          "Contango — later contracts priced higher — is common when storage and carry costs are significant between now and the later delivery date.",
      },
      {
        id: "q4",
        prompt: "Backwardation (near-dated futures priced higher than later-dated ones) is often a signal of:",
        choices: [
          "Excess supply with no storage costs",
          "An immediate, tight near-term supply, with buyers paying up for nearer availability",
          "A guaranteed rise in the overall commodity price",
          "A data error on the exchange",
        ],
        correctIndex: 1,
        explanation:
          "Backwardation typically shows up when near-term supply is unusually tight — buyers who need the commodity soon pay a premium over the price for later delivery.",
      },
      {
        id: "q5",
        prompt: "Compared to holding an outright long or short futures position, a calendar spread is generally:",
        choices: [
          "Exposed to exactly the same risk as an outright position",
          "Less exposed to day-to-day noise in the overall commodity price, since both legs move together with it",
          "Impossible to lose money on",
          "Only available on stock index futures",
        ],
        correctIndex: 1,
        explanation:
          "Since both legs are on the same underlying and tend to move together with the broad commodity price, much of that outright price risk cancels out, leaving a narrower bet on the shape of the futures curve.",
      },
    ],
  },
];
