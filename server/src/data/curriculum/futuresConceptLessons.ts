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
      { type: "heading", text: "What a Futures Hedge Is" },
      { type: "paragraph", text: "A futures contract is a standardized, exchange-traded agreement to buy or sell an asset at a set price on a future date. Hedging with futures means taking the opposite position to whatever exposure you already have, so that a loss on one side is offset by a gain on the other." },
      { type: "heading", text: "The Short Hedge" },
      { type: "paragraph", text: "Take a wheat farmer who will harvest and sell wheat in six months and is worried prices will fall by then. They sell (go short) wheat futures now, locking in today's price. If the cash price falls, the loss on the physical crop is offset by a gain on the short futures position. This is a short hedge — used by anyone who is effectively long the underlying and worried about a price drop." },
      { type: "heading", text: "The Long Hedge" },
      { type: "paragraph", text: "The mirror image is a long hedge: a cereal manufacturer who will need to buy wheat in three months and is worried prices will rise buys (goes long) wheat futures now. If the cash price rises, the higher cost of the physical wheat is offset by a gain on the long futures position." },
      { type: "heading", text: "Basis Risk and Tradeoffs" },
      { type: "paragraph", text: "Hedging with futures doesn't eliminate risk — it trades price risk for basis risk, the risk that the futures price and the cash price don't move in perfect lockstep. A hedger also gives up the benefit of a favorable price move in exchange for protection against an unfavorable one; certainty has a cost." },
      { type: "heading", text: "A Worked Example" },
      { type: "paragraph", text: "A farmer expects to harvest 50,000 bushels of wheat in six months and sells wheat futures today at $6.00 per bushel, locking in $300,000 of notional value. At harvest, the cash price has fallen to $5.50 per bushel. Selling the physical wheat now brings in only 50,000 × $5.50 = $275,000, but the short futures position has gained ($6.00 − $5.50) × 50,000 = $25,000, since the trader locked in the higher price and can buy back the futures cheaper than they sold it. Adding the two together, $275,000 + $25,000 = $300,000, the farmer nets almost exactly the $300,000 they locked in — the futures gain offset the cash-market loss, aside from any small basis gap between the futures and cash markets." },
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
      {
        id: "q6",
        prompt:
          "A farmer sells 50,000 bushels of wheat futures at $6.00/bushel. At harvest, the cash price is $5.50/bushel. What's the total from selling the physical wheat plus the futures gain?",
        choices: [
          "$275,000, since the futures position had no effect",
          "$300,000 — the $25,000 futures gain offsets the lower cash-market proceeds",
          "$325,000, an unexpected extra profit",
          "$250,000, a loss on both legs",
        ],
        correctIndex: 1,
        explanation:
          "Cash proceeds of $275,000 (50,000 × $5.50) plus a $25,000 futures gain (50,000 × $0.50) add up to $300,000 — close to the price the farmer originally locked in by hedging.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "futures-trend-following",
    title: "Trend following (momentum)",
    summary: "A systematic strategy that buys assets going up and sells assets going down, betting trends persist.",
    body: [
      { type: "heading", text: "What Trend Following Is" },
      { type: "paragraph", text: "Trend following is a systematic, rules-based strategy: instead of predicting where a market is headed, it reacts to where the market has already been headed — buying instruments in an established uptrend and shorting (or avoiding) those in a downtrend. Futures are the natural tool for this because they make it cheap and capital-efficient to go long or short across many different asset classes from one account." },
      { type: "heading", text: "A Simple Trend Rule" },
      { type: "paragraph", text: "A simple example rule: go long when price crosses above its 200-day moving average, go short (or exit) when it crosses back below. The strategy never tries to call the top or the bottom — it accepts being late getting into every trend and late getting out, in exchange for capturing the middle of a sustained move." },
      { type: "heading", text: "Win Rate vs. Expectancy" },
      { type: "paragraph", text: "Trend following is defined by a low win rate paired with positive expectancy. Most individual trades are small losses — the trend didn't continue, or the market chopped sideways — but the few trades that do catch a real, sustained trend are large enough winners to more than make up for the many losers. Because of this, disciplined risk management (small, consistent position sizing and cutting losers quickly) matters more to this strategy's success than being right often." },
      { type: "heading", text: "Trading Many Markets at Once" },
      { type: "paragraph", text: "Trend-following programs typically trade across many uncorrelated futures markets at once — grains, energy, metals, currencies, interest rates, equity indexes — rather than concentrating on one. Since nobody knows in advance which market will trend next, spreading the strategy across many markets is what lets a handful of big winners offset the frequent small losses elsewhere." },
      { type: "heading", text: "A Worked Example" },
      { type: "paragraph", text: "A trader with a $500,000 account risks 1% of capital, $5,000, on each new trend trade. Crude oil crosses above its 200-day moving average at $75 per barrel, triggering a long entry, with a stop-loss set at $73 — a $2-per-barrel risk. Since one contract covers 1,000 barrels, that's $2,000 of risk per contract, so the trader buys $5,000 ÷ $2,000 ≈ 2 contracts. The trend continues and crude eventually reaches $85: the position gains $10 per barrel × 1,000 barrels × 2 contracts = $20,000 — four times the $5,000 originally risked, from a single trade that worked." },
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
      {
        id: "q6",
        prompt:
          "A trader risks $5,000 on a trade with a $2,000-per-contract stop-loss distance. How many contracts do they buy?",
        choices: ["1 contract", "About 2 contracts ($5,000 ÷ $2,000)", "10 contracts", "50 contracts"],
        correctIndex: 1,
        explanation:
          "Dividing the dollar amount the trader is willing to risk by the dollar risk per contract gives the position size — $5,000 ÷ $2,000 per contract ≈ 2 contracts.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "futures-calendar-spread",
    title: "Calendar spread",
    summary: "Trading the price relationship between two futures contracts on the same underlying that expire at different times.",
    body: [
      { type: "heading", text: "What a Calendar Spread Is" },
      { type: "paragraph", text: "A futures calendar spread (also called a time spread) means simultaneously buying one futures contract and selling another on the same underlying asset, but with different expiration months — for example, buying December crude oil futures and selling November crude oil futures. Rather than betting on which direction the underlying commodity moves, the trader is betting on how the price difference between the two expirations changes." },
      { type: "heading", text: "Contango and Backwardation" },
      { type: "paragraph", text: "That difference reflects the market's expectations about supply and storage costs between now and each delivery date. It can sit in contango, where later-dated contracts are priced higher than near-dated ones — common when storage costs are significant, as with crude oil or grains — or in backwardation, where later-dated contracts are priced lower, often a sign that near-term supply is unusually tight and buyers are paying up for more immediate availability." },
      {
        type: "image",
        diagramId: "futures-curve",
        caption: "Contango: further-dated contracts cost more. Backwardation: further-dated contracts cost less.",
      },
      { type: "heading", text: "Isolating the Curve, Not the Price" },
      { type: "paragraph", text: "Because both legs of the spread move together with the overall commodity price most of the time, a calendar spread is far less exposed to day-to-day price noise than an outright long or short futures position. The trader is isolating a narrower bet on the shape of the futures curve — the supply, demand, and storage dynamics between two dates — rather than on the commodity's absolute price level." },
      { type: "heading", text: "A Classic Use Case" },
      { type: "paragraph", text: "A classic use case: heading into a season where a supply crunch is expected, such as a natural gas contract approaching a cold winter with low storage, a trader might buy the near-month contract and sell a further-out month, expecting the near-term squeeze to push the front contract's price up relative to the back one. That profits from the change in the spread, largely independent of whether natural gas prices broadly rise or fall." },
      { type: "heading", text: "A Worked Example" },
      { type: "paragraph", text: "December crude oil trades at $78 and November crude trades at $76 — a $2 contango spread. A trader expecting the near-term squeeze to tighten buys November and sells December. Over the following weeks, November rises to $77.50 (a $1.50 gain on the long leg) while December stays flat at $78.00 (no gain or loss on the short leg), narrowing the spread from $2.00 down to $0.50. The trade nets $1.50 per barrel — $1,500 on a single 1,000-barrel contract — purely from the spread narrowing, regardless of what crude's outright price did in the meantime." },
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
      {
        id: "q6",
        prompt:
          "A trader buys November crude at $76 and sells December crude at $78. November later rises to $77.50 while December stays at $78.00. What's the profit per barrel?",
        choices: ["$0.50", "$1.50", "$2.00", "There is no profit"],
        correctIndex: 1,
        explanation:
          "The long November leg gained $1.50 ($77.50 − $76.00) and the short December leg was flat, so the spread's narrowing from $2.00 to $0.50 nets $1.50 per barrel.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "futures-cross-hedging",
    title: "Cross-hedging",
    summary:
      "Hedging with futures on a different but closely related asset, when no futures contract exists on the exact one you hold.",
    body: [
      { type: "heading", text: "What Cross-Hedging Is" },
      { type: "paragraph", text: "A direct hedge uses a futures contract on the exact asset you're exposed to. Cross-hedging is what you do when no such contract exists, or it's too illiquid to use — you hedge with futures on a different but closely correlated asset instead. A regional jet-fuel buyer can't easily trade jet-fuel futures, since the market is thin, so they hedge using heating oil or crude oil futures, since jet fuel prices tend to move closely with those more liquid contracts." },
      { type: "heading", text: "The Correlation Requirement" },
      { type: "paragraph", text: "The key requirement for a cross-hedge to work is a strong, stable historical correlation between the price of the asset you're exposed to and the price of the futures contract you're using to hedge it. The stronger and more stable that relationship, the more effective the hedge." },
      { type: "heading", text: "An Extra Layer of Basis Risk" },
      { type: "paragraph", text: "Cross-hedging introduces an additional layer of basis risk beyond a normal direct hedge. Not only can the futures price diverge from the spot price of its own underlying — ordinary basis risk — but the price of the asset you actually hold can also diverge from the price of the futures' underlying asset. Jet fuel and heating oil don't always move in perfect lockstep, even though they're closely related refined products." },
      { type: "heading", text: "Sizing With a Hedge Ratio" },
      { type: "paragraph", text: "To size a cross-hedge, traders often compute a hedge ratio, commonly estimated by regressing the exposed asset's price changes against the hedging instrument's price changes. That regression's slope — sometimes called the minimum-variance hedge ratio — tells them how many futures contracts to use per unit of exposure, rather than assuming a naive one-for-one match." },
      { type: "heading", text: "A Worked Example" },
      { type: "paragraph", text: "A regional jet-fuel buyer needs to hedge 100,000 gallons of future purchases. Regressing historical jet-fuel price changes against heating oil futures price changes gives a hedge ratio of 0.85 — jet fuel has typically moved about 85 cents for every dollar move in heating oil. The buyer needs 0.85 × 100,000 = 85,000 gallon-equivalents of heating oil futures exposure. If one heating oil futures contract covers 42,000 gallons, that works out to 85,000 ÷ 42,000 ≈ 2 contracts, rather than a naive 100,000 ÷ 42,000 ≈ 2.4 contracts a one-to-one hedge would suggest." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What is cross-hedging?",
        choices: [
          "Hedging using a futures contract on the exact same asset you hold",
          "Hedging using a futures contract on a different but closely correlated asset, when no direct contract is available",
          "Simultaneously hedging with both a call and a put option",
          "A hedge that automatically adjusts itself daily",
        ],
        correctIndex: 1,
        explanation:
          "Cross-hedging is used when there's no liquid futures market on the exact asset you're exposed to, so you substitute a closely correlated instrument instead.",
      },
      {
        id: "q2",
        prompt: "What determines how effective a cross-hedge will be?",
        choices: [
          "The number of exchanges the futures contract trades on",
          "The strength and stability of the historical price correlation between the held asset and the hedging instrument",
          "The futures contract's expiration date, regardless of the underlying",
          "Whether the trader uses a broker or trades directly",
        ],
        correctIndex: 1,
        explanation:
          "The stronger and more stable the correlation between the two assets' prices, the more effective the cross-hedge will be at offsetting risk.",
      },
      {
        id: "q3",
        prompt: "Compared to a direct hedge, a cross-hedge carries:",
        choices: [
          "Less basis risk, since it uses a more liquid contract",
          "An additional layer of basis risk, from the price gap between the held asset and the futures' own underlying",
          "No risk at all, since the correlation is always perfect",
          "The exact same risk profile as holding no hedge",
        ],
        correctIndex: 1,
        explanation:
          "A cross-hedge adds a second source of basis risk on top of ordinary futures basis risk — the exposed asset and the futures' underlying aren't the same thing, so their prices can diverge.",
      },
      {
        id: "q4",
        prompt: "What is a \"hedge ratio\" used for in cross-hedging?",
        choices: [
          "The interest rate charged on a margin account",
          "Determining how many futures contracts to use per unit of the exposure, often estimated via regression",
          "The ratio of long to short traders in the market",
          "A fixed 1:1 rule that never changes",
        ],
        correctIndex: 1,
        explanation:
          "A hedge ratio — often the slope of a regression of the exposed asset's returns against the futures' returns — tells the hedger the right sizing, rather than assuming a naive one-to-one match.",
      },
      {
        id: "q5",
        prompt: "A regional jet-fuel buyer who can't easily trade jet-fuel futures might cross-hedge using:",
        choices: ["Wheat futures", "Heating oil or crude oil futures", "Equity index futures", "They cannot hedge at all"],
        correctIndex: 1,
        explanation:
          "Jet fuel prices tend to move closely with other refined petroleum products like heating oil and crude oil, making them a workable, if imperfect, cross-hedge.",
      },
      {
        id: "q6",
        prompt:
          "A regression gives a hedge ratio of 0.85 for a 100,000-gallon jet-fuel exposure hedged with heating oil futures. How many gallon-equivalents of heating oil futures exposure should be used?",
        choices: [
          "100,000 gallons, a full one-to-one hedge",
          "85,000 gallons (0.85 × 100,000)",
          "15,000 gallons",
          "185,000 gallons",
        ],
        correctIndex: 1,
        explanation:
          "The hedge ratio scales the notional hedge size: 0.85 × 100,000 gallons = 85,000 gallon-equivalents of heating oil futures, not a naive one-to-one match.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "futures-interest-rate-risk-hedging",
    title: "Interest rate risk hedging",
    summary: "Using interest rate futures to protect a bond portfolio, loan, or borrowing plan against unfavorable rate moves.",
    body: [
      { type: "heading", text: "Hedging a Bond Portfolio" },
      { type: "paragraph", text: "Interest rate futures — Treasury note or bond futures, SOFR futures — let market participants hedge against the risk that interest rates move against them. Bond prices move inversely to interest rates: when rates rise, existing bond prices fall. A bond portfolio manager worried about rising rates can sell (short) interest rate futures — if rates rise and their bond portfolio loses value, the short futures position gains, offsetting the loss." },
      { type: "heading", text: "Hedging a Future Borrowing Cost" },
      { type: "paragraph", text: "The mirror case: a company planning to borrow money in three months is worried rates will rise before they lock in a loan, raising their future borrowing cost. They can hedge with a short position in interest rate futures, so that if rates do rise, a gain on the futures position offsets the higher interest expense they'll pay on the loan." },
      { type: "heading", text: "Accounting for Duration" },
      { type: "paragraph", text: "Because bonds of different maturities respond differently to a given change in rates — longer-maturity bonds are more sensitive — hedgers commonly account for duration, a measure of interest-rate sensitivity, when sizing a rate hedge, using more or fewer futures contracts depending on how sensitive their actual portfolio is compared to the futures contract's own underlying instrument." },
      { type: "heading", text: "Where the Hedge Falls Short" },
      { type: "paragraph", text: "As with other futures hedges, an interest-rate hedge isn't perfect: the specific bonds a portfolio holds may not move in perfect lockstep with the futures contract's benchmark instrument, and getting the duration-matched sizing wrong can leave the hedge over- or under-protecting the actual position." },
      { type: "heading", text: "A Worked Example" },
      { type: "paragraph", text: "A manager holds a $10 million bond portfolio with a duration of 7 years and wants to hedge it with Treasury futures, where the futures contract's underlying has a duration of 9 years and each contract has a notional value of $100,000. A duration-matched hedge shorts (portfolio value × portfolio duration) ÷ (futures notional × futures duration) contracts: ($10,000,000 × 7) ÷ ($100,000 × 9) = $70,000,000 ÷ $900,000 ≈ 78 contracts. Shorting roughly 78 contracts, rather than a round number picked without the duration adjustment, is what actually matches the futures position's rate sensitivity to the portfolio's own." },
    ],
    quiz: [
      {
        id: "q1",
        prompt:
          "A bond portfolio manager worried that interest rates will rise, pushing bond prices down, should typically:",
        choices: [
          "Buy more bonds immediately",
          "Sell (short) interest rate futures",
          "Buy interest rate futures",
          "Interest rate futures cannot hedge bond portfolios",
        ],
        correctIndex: 1,
        explanation:
          "Since bond prices fall when rates rise, a manager hedges that risk by shorting interest rate futures — a rate rise then produces a gain on the futures position that offsets the portfolio's loss.",
      },
      {
        id: "q2",
        prompt:
          "A company planning to borrow money in three months, worried rates will rise before then, would hedge by:",
        choices: [
          "Going long interest rate futures",
          "Going short interest rate futures (or a similar rate-locking instrument)",
          "Waiting and hoping rates fall",
          "Buying more physical assets",
        ],
        correctIndex: 1,
        explanation:
          "A short futures position gains if rates rise, offsetting the higher interest cost the company will face when it actually borrows.",
      },
      {
        id: "q3",
        prompt: "Why does a fixed-rate bond's price move inversely to interest rates?",
        choices: [
          "It doesn't — bond prices and rates move in the same direction",
          "As rates rise, the bond's fixed coupon becomes less attractive relative to new bonds paying higher rates, so its price falls",
          "Bond prices are set randomly and unrelated to rates",
          "Only floating-rate bonds are affected by interest rates",
        ],
        correctIndex: 1,
        explanation:
          "A fixed-rate bond's value falls when new bonds offer higher yields, since investors won't pay full price for a lower fixed payment stream — that's the inverse price/rate relationship.",
      },
      {
        id: "q4",
        prompt: "What does \"duration\" measure, in the context of sizing an interest rate hedge?",
        choices: [
          "How many days until the futures contract expires",
          "A bond's sensitivity to a given change in interest rates",
          "The length of the futures contract's trading day",
          "The number of coupon payments remaining",
        ],
        correctIndex: 1,
        explanation:
          "Duration measures how much a bond's price is expected to move for a given change in rates — longer-duration bonds are more rate-sensitive, so hedgers size their futures position with duration in mind.",
      },
      {
        id: "q5",
        prompt: "Why might an interest rate futures hedge be imperfect even when correctly sized?",
        choices: [
          "Futures contracts settle instantly, leaving no room for error",
          "The specific bonds held may not move in perfect lockstep with the futures contract's benchmark instrument — basis risk",
          "Interest rate futures don't actually exist",
          "Hedging always doubles the original risk",
        ],
        correctIndex: 1,
        explanation:
          "As with any futures hedge, the hedged position and the futures' own underlying benchmark aren't identical, so their prices can diverge — a source of basis risk that keeps even a well-sized hedge from being perfect.",
      },
      {
        id: "q6",
        prompt:
          "A $10 million portfolio with 7-year duration is hedged with Treasury futures (9-year duration, $100,000 notional each). About how many contracts should be shorted?",
        choices: ["9 contracts", "70 contracts", "About 78 contracts", "900 contracts"],
        correctIndex: 2,
        explanation:
          "($10,000,000 × 7) ÷ ($100,000 × 9) = $70,000,000 ÷ $900,000 ≈ 78 contracts — the duration-weighted hedge size, not a round or unadjusted number.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "futures-contrarian-trading-mean-reversion",
    title: "Contrarian trading (mean-reversion)",
    summary:
      "A strategy that bets prices which have moved unusually far from their typical range will snap back toward it — the opposite premise of trend following.",
    body: [
      { type: "heading", text: "The Contrarian Premise" },
      { type: "paragraph", text: "Mean-reversion, or contrarian, trading is built on the opposite premise from trend following: rather than betting that a move will continue, it bets that a price which has moved unusually far from some reference level — a moving average, a historical range, a statistical band — will tend to snap back toward that level. The trader buys after a sharp, seemingly overdone decline, and sells or shorts after a sharp, seemingly overdone rally." },
      { type: "heading", text: "A Simple Mean-Reversion Rule" },
      { type: "paragraph", text: "A simple example rule: when a price falls more than two standard deviations below its 20-day average, buy, expecting a bounce back toward the average; when it rises more than two standard deviations above, sell or short, expecting a pullback. The trader is essentially betting against the crowd at moments of apparent extremes." },
      { type: "heading", text: "A High Win Rate, Rare Big Losses" },
      { type: "paragraph", text: "Mean-reversion strategies tend to have a high win rate with small, frequent gains, punctuated by occasional large losses — almost the mirror image of trend following's profile. Most short-term overshoots do snap back as expected, but the rare times a market keeps moving strongly in one direction — a genuine new trend, not a temporary overshoot — can produce an outsized loss for a contrarian position that keeps fighting the move." },
      { type: "heading", text: "Why Risk Controls Matter" },
      { type: "paragraph", text: "Because of that loss profile, disciplined risk controls — a hard stop-loss, or limiting how much a position is added to as price keeps moving against the entry — are essential to mean-reversion trading. Without them, the strategy is exposed to the specific risk of being run over by a real, sustained trend that never reverts." },
      { type: "heading", text: "A Worked Example" },
      { type: "paragraph", text: "Gold's 20-day average price is $1,950 per ounce with a standard deviation of $15, putting the two-standard-deviation lower band at $1,950 − (2 × $15) = $1,920. Gold drops to $1,915, more than two standard deviations below average, triggering a buy signal. A trader buys 10 contracts (100 ounces each, so 1,000 ounces total). Over the following week, gold reverts to $1,945, and the position gains $30 per ounce × 1,000 ounces = $30,000 — the snapback the mean-reversion rule was betting on." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What is the core premise behind mean-reversion (contrarian) trading?",
        choices: [
          "A price that has moved far from a reference level will keep moving in that same direction",
          "A price that has moved unusually far from a reference level will tend to snap back toward it",
          "Prices move in a perfectly random walk with no exploitable pattern",
          "You should always buy the most expensive asset available",
        ],
        correctIndex: 1,
        explanation:
          "Mean-reversion bets on a snapback toward a typical range or average — the opposite premise from trend following's bet on persistence.",
      },
      {
        id: "q2",
        prompt: "A simple mean-reversion rule might be to buy when price falls:",
        choices: [
          "Above its long-term average",
          "More than a set number of standard deviations below its short-term average, expecting a bounce back",
          "To exactly zero",
          "In line with its historical average, with no deviation",
        ],
        correctIndex: 1,
        explanation:
          "Buying after an unusually large drop below a short-term average, and expecting reversion toward that average, is a textbook mean-reversion entry signal.",
      },
      {
        id: "q3",
        prompt: "Compared to trend following, mean-reversion strategies typically show:",
        choices: [
          "A low win rate with a few very large winners",
          "A high win rate with small, frequent gains, punctuated by occasional large losses",
          "An identical risk and reward profile",
          "Guaranteed profitability with no downside",
        ],
        correctIndex: 1,
        explanation:
          "Most short-term overshoots do revert as expected, producing frequent small wins, but the rare case of a genuine sustained trend can produce an outsized loss for a contrarian position — roughly the mirror image of trend following's profile.",
      },
      {
        id: "q4",
        prompt: "Why is disciplined risk management, like a hard stop-loss, especially important for mean-reversion trading?",
        choices: [
          "It isn't — mean-reversion trades never lose money",
          "A real, sustained trend that never reverts can produce an outsized loss if the position isn't cut",
          "Stop-losses are required by exchange rules for all futures trades",
          "It only matters for trend-following strategies, not contrarian ones",
        ],
        correctIndex: 1,
        explanation:
          "Because a contrarian position bets against the current move, the rare case where that move is a genuine new trend, not an overshoot, can run against the position for a long time without risk controls in place.",
      },
      {
        id: "q5",
        prompt: "A contrarian trader who sells (shorts) after a sharp, unusually large rally is betting that:",
        choices: [
          "The rally will continue indefinitely",
          "The price is likely to pull back toward a more typical level",
          "The asset will be delisted from trading",
          "Interest rates will rise",
        ],
        correctIndex: 1,
        explanation:
          "The core contrarian bet is that an extreme, fast move is more likely to partially reverse than to keep extending in the same direction.",
      },
      {
        id: "q6",
        prompt:
          "Gold's 20-day average is $1,950 with a $15 standard deviation. What's the two-standard-deviation lower band that would trigger a mean-reversion buy signal?",
        choices: ["$1,935", "$1,920", "$1,905", "$1,950"],
        correctIndex: 1,
        explanation:
          "$1,950 − (2 × $15) = $1,920 — the price level two standard deviations below the 20-day average.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "futures-contrarian-trading-market-activity",
    title: "Contrarian trading – market activity",
    summary:
      "A contrarian approach that reads trading volume and open interest, not just price, to spot when a move may be running out of participants to sustain it.",
    body: [
      { type: "heading", text: "Reading Volume and Open Interest" },
      { type: "paragraph", text: "This is a variant of contrarian trading that looks beyond price alone and incorporates market activity data — trading volume and open interest, the number of outstanding futures contracts that haven't been closed out — to judge whether a price move is likely to continue or is running out of steam." },
      { type: "heading", text: "What Rising and Falling Activity Signal" },
      { type: "paragraph", text: "The logic: a price move backed by strong, rising volume and rising open interest suggests genuine new money and conviction are flowing into the move, making it more likely to persist, at least for now. A price move that continues on thinning volume and falling open interest suggests the move is increasingly running on fumes — fewer participants are willing to keep pushing it further, and existing positions are being closed out rather than added to, which a contrarian trader reads as a warning sign the move could reverse." },
      { type: "heading", text: "A Classic Warning Pattern" },
      { type: "paragraph", text: "A classic pattern: a strong price rally accompanied by declining volume and declining open interest is viewed skeptically by activity-based contrarian traders. It suggests the rally is being sustained by a shrinking pool of participants — often short-covering, where traders who bet against the move are forced to buy back their positions — rather than fresh buying interest, making it a candidate for a reversal once that short-covering is exhausted." },
      { type: "heading", text: "Used Alongside Price, Not Alone" },
      { type: "paragraph", text: "This approach requires more data than a pure price-based contrarian rule, since volume and open interest for futures are typically published daily by the exchange with a delay, and is usually combined with price-based signals rather than used entirely on its own. Activity data adds context about who is driving a move and how sustainable the current participation looks, rather than replacing a price signal outright." },
      { type: "heading", text: "A Worked Example" },
      { type: "paragraph", text: "Natural gas rallies from $2.50 to $3.00 over two weeks. But during that same stretch, daily volume falls from 200,000 contracts to 90,000, and open interest falls from 850,000 contracts to 720,000 — a rally on thinning participation, consistent with short-covering rather than fresh buying. A contrarian trader shorts one contract (10,000 MMBtu) at $3.00. Gas subsequently falls back to $2.70 as the short-covering runs out, and the position gains $0.30 per MMBtu × 10,000 = $3,000." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "In addition to price, what two pieces of market activity data does this contrarian approach rely on?",
        choices: [
          "Interest rates and inflation reports",
          "Trading volume and open interest",
          "The exchange's daily trading hours",
          "The number of exchanges listing the contract",
        ],
        correctIndex: 1,
        explanation:
          "This variant of contrarian trading specifically incorporates volume (how many contracts traded) and open interest (how many contracts remain outstanding) alongside price.",
      },
      {
        id: "q2",
        prompt: "What does open interest measure?",
        choices: [
          "The total dollar value traded in a single day",
          "The number of outstanding futures contracts that haven't yet been closed out",
          "The interest rate charged on margin loans",
          "How many traders are interested in a market but haven't traded yet",
        ],
        correctIndex: 1,
        explanation:
          "Open interest counts the number of futures contracts currently open (not yet offset or delivered) — a measure of how much money is committed to the market, distinct from volume.",
      },
      {
        id: "q3",
        prompt: "A price rally accompanied by rising volume and rising open interest generally suggests:",
        choices: [
          "The move is likely running out of participants and about to reverse",
          "Genuine new money and conviction are flowing into the move",
          "The exchange has made an error in its reporting",
          "The contract is about to expire",
        ],
        correctIndex: 1,
        explanation: "Rising volume and rising open interest alongside a price move typically signal fresh participation and conviction behind that move.",
      },
      {
        id: "q4",
        prompt:
          "A rally that continues on declining volume and declining open interest is often read by contrarian traders as a sign that:",
        choices: [
          "The rally is unusually strong and likely to continue for a long time",
          "The move may be increasingly sustained by short-covering rather than fresh buying, and could be running out of steam",
          "Open interest data is irrelevant to price direction",
          "The contract has become more liquid than before",
        ],
        correctIndex: 1,
        explanation:
          "A rally on thinning volume and falling open interest suggests fewer participants are willing to keep pushing the move — often a sign it's being propped up by short-covering rather than genuine new demand, a classic setup contrarian traders watch for.",
      },
      {
        id: "q5",
        prompt: "How is market-activity-based contrarian analysis usually applied in practice?",
        choices: [
          "Entirely on its own, ignoring price",
          "Combined with price-based signals, since activity data adds context about who is driving a move rather than replacing price analysis",
          "Only during the final hour of trading",
          "It cannot be applied to futures markets, only stocks",
        ],
        correctIndex: 1,
        explanation:
          "Volume and open interest add context about the sustainability and conviction behind a move, but are typically used alongside price signals rather than as a standalone trading rule.",
      },
      {
        id: "q6",
        prompt:
          "Natural gas rallies on falling volume and falling open interest, then a contrarian trader shorts at $3.00 and covers at $2.70. What's the gain on 10,000 MMBtu?",
        choices: ["$300", "$3,000", "$30,000", "There is no gain"],
        correctIndex: 1,
        explanation:
          "The $0.30 decline per MMBtu times the 10,000 MMBtu contract size gives a $3,000 gain on the short position.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "futures-what-are-financial-contracts",
    title: "What are Financial Contracts?",
    summary: "A forward contract is a private agreement to buy or sell an asset at a set price on a future date — the foundation every futures contract builds on.",
    body: [
      { type: "heading", text: "Buying and Selling" },
      {
        type: "paragraph",
        text: "A forward contract is a private, customized agreement between two parties to buy and sell a specific asset at a specific price on a specific future date. The party agreeing to buy the asset at that future date holds the \"long\" side of the contract, while the party agreeing to sell it holds the \"short\" side — no money changes hands when the contract is signed, in the plain, unfunded version; the exchange of the asset for the agreed price happens entirely at the future settlement date. This is the fundamental building block that futures contracts are built from: a futures contract is essentially a standardized, exchange-traded version of the same basic long/short forward commitment.",
      },
      { type: "heading", text: "Notional Value of a Forward Contract" },
      {
        type: "paragraph",
        text: "The notional value of a forward contract is the total value of the underlying asset the contract controls — calculated as the agreed forward price multiplied by the quantity of the asset being bought or sold. This number, not the, typically zero, amount of cash exchanged upfront, is what determines the actual economic exposure both parties are taking on: a forward on 10,000 bushels of wheat at $6 per bushel has a notional value of $60,000, meaning both the long and short party are exposed to $60,000 worth of price risk, even though neither side put up anything close to that amount at the outset.",
      },
      { type: "heading", text: "Settlement Procedures" },
      {
        type: "paragraph",
        text: "At the contract's maturity date, a forward is settled in one of two ways: physical settlement, where the seller actually delivers the underlying asset and the buyer pays the agreed forward price, or cash settlement, where instead of exchanging the physical asset, the two parties simply exchange the difference between the agreed forward price and the asset's actual market price at maturity. Which settlement method applies is specified in the contract terms at the outset — physical settlement is more common for commodities where the underlying asset genuinely changes hands, while cash settlement is common when physical delivery is impractical, for a financial index, for example, where there's no single physical asset to deliver.",
      },
      { type: "heading", text: "Market Integrity" },
      {
        type: "paragraph",
        text: "Because a forward contract is a private, over-the-counter agreement between two specific parties rather than a contract cleared through an exchange, it carries counterparty risk — the risk that the other side simply fails to honor the agreement at maturity, whether from an inability or unwillingness to pay. This is the central structural weakness forwards have relative to futures: an exchange-traded futures contract is guaranteed by a clearinghouse and backed by daily margin requirements that limit how much loss can accumulate before it's collected, while a forward's integrity depends entirely on the creditworthiness and good faith of the specific counterparty on the other side of the deal.",
      },
      { type: "heading", text: "A Worked Example" },
      {
        type: "paragraph",
        text: "A flour mill agrees to buy 10,000 bushels of wheat in six months from a grain merchant at a forward price of $6.50 per bushel, giving the contract a notional value of 10,000 × $6.50 = $65,000. At maturity, the actual market price of wheat is $7.00 per bushel. If the contract is cash-settled, the merchant simply pays the mill the difference: ($7.00 − $6.50) × 10,000 = $5,000, since the mill locked in a price $0.50 below where wheat ended up trading. If instead it's physically settled, the merchant delivers 10,000 bushels and the mill pays the agreed $65,000 — either way, the mill's economic outcome is the same: wheat at an effective $6.50 per bushel, regardless of where the market price actually landed.",
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What is a forward contract?",
        choices: [
          "A contract that can only be traded on a public exchange",
          "A private agreement between two parties to buy and sell a specific asset at a specific price on a specific future date",
          "A type of stock option",
          "A contract that requires immediate payment of the full purchase price",
        ],
        correctIndex: 1,
        explanation:
          "A forward contract is a private, customized agreement fixing the price and date for a future exchange of an asset between two specific parties.",
      },
      {
        id: "q2",
        prompt: "How is a forward contract's notional value calculated?",
        choices: [
          "The amount of cash exchanged when the contract is signed",
          "The agreed forward price multiplied by the quantity of the underlying asset",
          "The total profit the long party expects to earn",
          "A fixed fee charged by the exchange",
        ],
        correctIndex: 1,
        explanation:
          "Notional value represents the total economic exposure of the contract — the forward price times the quantity of the asset — even though little or no cash typically changes hands upfront.",
      },
      {
        id: "q3",
        prompt: "What are the two ways a forward contract can be settled at maturity?",
        choices: [
          "Physical settlement (delivering the actual asset) or cash settlement (exchanging the price difference)",
          "Early settlement or late settlement, with no other options",
          "Settlement can only ever happen through physical delivery",
          "Settlement always happens automatically without any agreement",
        ],
        correctIndex: 0,
        explanation:
          "A forward can be settled either through actual physical delivery of the underlying asset against payment, or through a cash payment reflecting the difference between the agreed and actual market price.",
      },
      {
        id: "q4",
        prompt: "Why does a forward contract carry counterparty risk?",
        choices: [
          "Because forwards are always guaranteed by a central clearinghouse",
          "Because it's a private, over-the-counter agreement, so its fulfillment depends entirely on the other party's willingness and ability to honor it",
          "Because forward contracts cannot legally be enforced",
          "Counterparty risk does not apply to forward contracts",
        ],
        correctIndex: 1,
        explanation:
          "Unlike an exchange-cleared contract, a forward's integrity rests entirely on the specific counterparty actually following through at maturity, with no clearinghouse guarantee behind it.",
      },
      {
        id: "q5",
        prompt: "How does a futures contract's structure address the counterparty risk inherent in forwards?",
        choices: [
          "Futures contracts have the exact same counterparty risk as forwards, with no differences",
          "Futures are guaranteed by a clearinghouse and backed by daily margin requirements that limit how much loss can accumulate",
          "Futures contracts eliminate the need for any settlement at maturity",
          "Futures contracts are always settled a year in advance",
        ],
        correctIndex: 1,
        explanation:
          "A futures contract's clearinghouse guarantee and daily margining process is specifically what protects against the kind of counterparty default risk that a private forward agreement is exposed to.",
      },
      {
        id: "q6",
        prompt:
          "A forward on 10,000 bushels of wheat at $6.50/bushel is cash-settled when the market price is $7.00/bushel. What does the merchant pay the mill?",
        choices: ["$65,000", "$70,000", "$5,000", "Nothing — cash settlement means no payment is made"],
        correctIndex: 2,
        explanation:
          "Cash settlement pays only the difference between the agreed and market price: ($7.00 − $6.50) × 10,000 = $5,000, which gives the mill the same $6.50-per-bushel economic outcome as physical delivery would.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "futures-forward-pricing",
    title: "Forward Pricing",
    summary: "How a forward's fair price is derived from today's spot price plus the cost of carrying the asset to the future delivery date — and how that cost of carry differs across commodities, stocks, and bonds.",
    body: [
      {
        type: "paragraph",
        text: "The theoretical, \"fair\" price of a forward contract is derived from a simple no-arbitrage principle: it should equal the asset's current spot price plus the cost of carrying that asset from today until the contract's delivery date. This \"cost of carry\" typically includes the financing cost of holding the asset, the interest that could otherwise have been earned on the cash tied up in buying it today, and, depending on the asset, storage costs, insurance, or other costs of physically holding it, minus any income the asset generates while being held, such as dividends or interest. The exact ingredients that make up the cost of carry differ meaningfully across asset classes, which is why forward pricing looks somewhat different for a physical commodity than for a stock or a bond.",
      },
      { type: "heading", text: "Physical Commodities (Grains, Energy Products, Precious Metals, etc.)" },
      {
        type: "paragraph",
        text: "For a physical commodity like grains, energy products, or precious metals, the cost of carry includes not just financing costs but real, tangible costs of physically storing the commodity until delivery — warehousing, insurance, and for some commodities spoilage risk — all of which push the forward price above the spot price, all else equal. Working in the opposite direction is any convenience yield: the benefit a holder gets from having physical access to the commodity right now rather than a promise of future delivery, which is especially valuable when current supply is tight, and which can pull the forward price back down, sometimes even below spot, producing the backwardation curve shapes discussed elsewhere in this course.",
      },
      { type: "heading", text: "Stock" },
      {
        type: "paragraph",
        text: "For a stock, the cost of carry is simpler: financing costs, the interest foregone on the cash used to buy the stock today, minus any dividends the stock is expected to pay before the forward's delivery date, since a forward buyer doesn't receive those dividends the way an actual shareholder would. This is why a forward price on a dividend-paying stock is typically only modestly above the spot price, financing cost net of the dividend yield, rather than reflecting the full financing cost outright, and why higher expected dividends between now and delivery pull the fair forward price down.",
      },
      { type: "heading", text: "Bonds and Notes" },
      {
        type: "paragraph",
        text: "For a bond or note, forward pricing follows the same basic logic but nets out the bond's own coupon income instead of dividends: the cost of carry is the financing cost of holding the bond minus the coupon interest earned while holding it, and the forward price must also account for how the bond's own price is expected to change simply from the passage of time as it moves closer to maturity, a bond's price converges toward its face value as maturity approaches, all else equal. Because bonds pay relatively predictable, scheduled coupons and their price behavior near maturity is well understood, bond forward pricing tends to be one of the more mechanically precise applications of the cost-of-carry framework, though it still depends on an accurate financing rate assumption, just like every other asset class.",
      },
      { type: "heading", text: "Foreign Currencies" },
      {
        type: "paragraph",
        text: "A foreign currency fits the same cost-of-carry framework by treating the foreign risk-free interest rate as if it were a continuous dividend yield: holding a foreign currency lets you earn interest in that currency in the meantime, just as holding a stock earns dividends. This relationship is known as covered interest rate parity, and it means the forward exchange rate depends on the gap between the domestic and foreign interest rates — if domestic rates are higher than foreign rates, the foreign currency trades at a forward premium; if foreign rates are higher, it trades at a forward discount, so that borrowing in one currency and lending in the other, hedged with a forward, can never produce a riskless profit.",
      },
      { type: "heading", text: "Stock and Futures Options" },
      {
        type: "paragraph",
        text: "The forward price is more than just a fair-value benchmark for the forward contract itself — it's also a direct input for pricing options on stocks and futures. Because the forward price already embeds the cost of carry and any expected dividend income, models like the Black model for pricing options on futures substitute the forward or futures price for the spot price, letting an option on a futures contract be priced with a formula nearly identical to a standard stock option, just swapping in forward price for spot. The same substitution is why European put-call parity is often expressed directly in terms of the forward price rather than tracking spot price and financing cost as two separate pieces.",
      },
      { type: "heading", text: "Arbitrage" },
      {
        type: "paragraph",
        text: "The cost-of-carry price isn't just a theoretical prediction — it's enforced in real markets by arbitrageurs. If the market's forward price trades above its fair value, a trader can run a cash-and-carry arbitrage: borrow cash, buy the asset today, simultaneously sell it forward at the richer market price, then deliver the asset at maturity and repay the loan, locking in a riskless profit from the mispricing. If the forward instead trades below fair value, the mirror-image reverse cash-and-carry arbitrage applies: short the asset today, invest the proceeds at the risk-free rate, and buy it forward, again locking in a riskless profit as the position unwinds at delivery. This buying and selling pressure from arbitrageurs is exactly what keeps real-world forward prices anchored close to the cost-of-carry formula.",
      },
      { type: "heading", text: "Dividends" },
      {
        type: "paragraph",
        text: "Forward pricing models a stock's dividends in one of two ways, depending on what's more realistic for the asset. For a single stock with a known, scheduled dividend, the dividend is treated as a specific dollar amount: its present value is subtracted from today's spot price before compounding the rest forward at the risk-free rate. For a broad stock index, where dozens or hundreds of underlying stocks pay dividends on staggered schedules throughout the year, it's more natural to treat the combined effect as a continuous dividend yield — a steady percentage rate that simply lowers the effective rate used to compound the forward price, rather than tracking every individual payment.",
      },
      { type: "heading", text: "Short Sales" },
      {
        type: "paragraph",
        text: "Short selling means borrowing an asset from a current holder, through a broker, selling it in the market, and later buying it back to return to the lender — a trade used either as a standalone bet that the asset's price will fall, or, as seen above, as the tool that makes reverse cash-and-carry arbitrage possible when a forward is underpriced. Not every asset can be shorted easily: many physical commodities are difficult or impractical to borrow and short because of the logistics of storage and delivery, which weakens the arbitrage force that would normally correct an underpriced forward and is part of why convenience yield plays such an outsized role in commodity forward pricing specifically.",
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What is the general no-arbitrage principle behind a forward contract's theoretical fair price?",
        choices: [
          "The forward price should always equal exactly zero",
          "It should equal the asset's current spot price plus the cost of carrying that asset until the delivery date",
          "The forward price is set entirely by government regulation",
          "The forward price has no relationship to the spot price",
        ],
        correctIndex: 1,
        explanation:
          "The cost-of-carry framework says a forward's fair price reflects today's spot price adjusted for the costs (and any income) of holding that asset until delivery.",
      },
      {
        id: "q2",
        prompt: "What additional cost does forward pricing for a physical commodity typically include, beyond financing?",
        choices: [
          "No additional costs — physical commodities are priced exactly like stocks",
          "Real, tangible storage costs — warehousing, insurance, and sometimes spoilage risk",
          "A mandatory government tax unique to commodities",
          "The cost of shipping the commodity to a different country",
        ],
        correctIndex: 1,
        explanation:
          "Unlike financial assets, physical commodities involve genuine storage-related costs that must be included in the cost-of-carry calculation.",
      },
      {
        id: "q3",
        prompt: "What is \"convenience yield,\" and how does it affect a commodity's forward price?",
        choices: [
          "It has no effect on forward pricing whatsoever",
          "It's the benefit of holding the physical commodity now rather than a future promise of delivery, which can pull the forward price down, sometimes below spot",
          "It's a fee charged for storing a commodity",
          "It only applies to stocks, never to commodities",
        ],
        correctIndex: 1,
        explanation:
          "Convenience yield reflects the value of having immediate physical access to a commodity, which offsets storage and financing costs and can even push the forward price below the current spot price.",
      },
      {
        id: "q4",
        prompt: "How does a stock's forward price account for expected dividends?",
        choices: [
          "Dividends have no effect on a stock's forward price",
          "Expected dividends are subtracted from the financing cost, since a forward buyer doesn't receive dividends paid before delivery the way an actual shareholder would",
          "Dividends are added on top of the full financing cost",
          "A stock's forward price is always identical to its spot price regardless of dividends",
        ],
        correctIndex: 1,
        explanation:
          "Since the forward buyer doesn't own the stock (and doesn't collect dividends) until delivery, expected dividend payments reduce the fair forward price relative to what pure financing cost alone would suggest.",
      },
      {
        id: "q5",
        prompt: "What does bond forward pricing net out from the financing cost, in place of dividends?",
        choices: [
          "Nothing is netted out — bond forward pricing ignores all income",
          "The bond's coupon interest earned while holding it, along with accounting for the bond's price converging toward face value as it nears maturity",
          "The bond's credit rating",
          "The stock market's overall performance",
        ],
        correctIndex: 1,
        explanation:
          "Like dividends for a stock, a bond's coupon payments are income the forward buyer misses out on until delivery, so they're subtracted from the financing cost, and the pricing must also reflect the bond's natural price convergence toward face value over time.",
      },
      {
        id: "q6",
        prompt: "What determines whether a currency's forward exchange rate trades at a premium or discount to spot, under covered interest rate parity?",
        choices: [
          "The difference between the domestic and foreign risk-free interest rates",
          "The stock market's overall performance that day",
          "A fixed rate set once a year by central banks",
          "The trade balance between the two countries alone",
        ],
        correctIndex: 0,
        explanation:
          "Covered interest rate parity ties the forward FX rate directly to the interest rate differential between the two currencies — the currency with the higher rate trades at a forward discount, and the one with the lower rate at a forward premium.",
      },
      {
        id: "q7",
        prompt: "Why do many option pricing models substitute the forward price for the spot price when pricing an option on a futures contract?",
        choices: [
          "Because the forward price already embeds the cost of carry and any dividend adjustments, so it captures everything needed without separately tracking financing costs",
          "Because the forward price is always identical to the option's strike price",
          "Because spot prices cannot legally be used in option pricing",
          "Because futures options never actually expire",
        ],
        correctIndex: 0,
        explanation:
          "Since the forward or futures price already reflects financing costs and expected income, models like the Black model can price the option directly off that single number instead of the spot price plus a separate cost-of-carry adjustment.",
      },
      {
        id: "q8",
        prompt: "In a cash-and-carry arbitrage, what does the arbitrageur do when the forward price is trading above its theoretical fair value?",
        choices: [
          "Borrow money, buy the asset now, and sell it forward at the higher market price, locking in a riskless profit at delivery",
          "Do nothing, since forward prices can never be mispriced",
          "Short the asset and buy it back immediately",
          "Only trade options, never the underlying asset",
        ],
        correctIndex: 0,
        explanation:
          "Cash-and-carry arbitrage exploits an overpriced forward by buying the asset today, financed with borrowed cash, and locking in the sale at the richer forward price — this buying and selling pressure is what pulls the market's forward price back toward fair value.",
      },
      {
        id: "q9",
        prompt: "What's the difference between modeling dividends as a known dollar amount versus as a continuous dividend yield in forward pricing?",
        choices: [
          "A known dollar amount is subtracted as a present value from spot before compounding, while a continuous yield lowers the effective compounding rate itself — the latter is more natural for a broad index paying dividends continuously",
          "There is no difference — both methods always produce the exact same forward price",
          "Dividend yield only applies to bonds, never to stocks",
          "A known dollar amount can only be used for foreign currencies",
        ],
        correctIndex: 0,
        explanation:
          "A single stock's specific, scheduled dividend is usually modeled as a discrete cash amount netted from spot, while a broad index's many staggered dividends are better approximated as a smooth percentage yield that lowers the effective compounding rate.",
      },
      {
        id: "q10",
        prompt: "Why does the difficulty of short-selling certain physical commodities matter for forward pricing?",
        choices: [
          "It weakens the arbitrage force that would normally correct an underpriced forward, since reverse cash-and-carry arbitrage requires being able to short the underlying asset",
          "It has no effect on forward pricing at all",
          "It only matters for pricing stock forwards, never commodities",
          "It makes commodity forwards impossible to trade",
        ],
        correctIndex: 0,
        explanation:
          "Reverse cash-and-carry arbitrage — the correction for an underpriced forward — depends on being able to short the physical asset; when that's impractical, as it often is for commodities, forward prices can drift further from the pure cost-of-carry value, which is part of why convenience yield matters so much for commodities specifically.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "futures-margin-and-mark-to-market",
    title: "Margin and Daily Settlement",
    summary:
      "How futures contracts stay solvent day to day — initial margin, maintenance margin, and the daily mark-to-market process that settles gains and losses in cash every single day.",
    body: [
      { type: "heading", text: "Initial Margin" },
      { type: "paragraph", text: "Unlike a forward, which typically requires no cash upfront, opening a futures position requires posting collateral with the broker and clearinghouse called initial margin — a fraction of the contract's notional value, not the full amount, which is what gives futures their capital efficiency and leverage. The exchange sets initial margin based on the contract's historical volatility, and it's required from both the long and short side of every trade, unlike an option, where only the seller posts margin." },
      { type: "heading", text: "Maintenance Margin and Margin Calls" },
      { type: "paragraph", text: "Maintenance margin is a lower threshold, below the initial margin level, that an account's balance is never allowed to fall under. If a run of daily losses pushes the account below that threshold, the broker issues a margin call, requiring the trader to deposit additional cash — variation margin — back up to the initial margin level, typically within one business day, or have the position liquidated to cap further losses." },
      { type: "heading", text: "Daily Mark-to-Market" },
      { type: "paragraph", text: "Every trading day, the exchange marks every open futures position to that day's settlement price and credits or debits the resulting gain or loss in cash to each account. This is the core structural difference from a forward, which settles its entire profit or loss in a single lump sum at maturity: a futures trader's gains and losses are realized incrementally, in cash, day by day, rather than accumulating unrealized until expiration." },
      { type: "heading", text: "Leverage Cuts Both Ways" },
      { type: "paragraph", text: "Because initial margin is only a small fraction of a contract's notional value, a modest move in the underlying's price translates into a much larger percentage gain or loss on the margin capital actually posted. That same leverage that makes futures capital-efficient for hedgers and speculators also means a string of adverse daily marks can trigger a margin call, or a full liquidation, far faster than an equivalent-sized position in the cash market ever would." },
      { type: "heading", text: "A Worked Example" },
      { type: "paragraph", text: "A trader buys one crude oil futures contract (1,000 barrels) at $80 per barrel, a notional value of $80,000, posting $6,000 of initial margin (7.5% of notional) against a $5,000 maintenance margin threshold. The next day, crude falls to $78, a $2-per-barrel loss, marked to market as a $2,000 debit: 1,000 × $2 = $2,000. The account balance drops from $6,000 to $4,000 — below the $5,000 maintenance threshold — triggering a margin call for $2,000 in variation margin to bring the balance back up to the $6,000 initial margin level." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What is initial margin?",
        choices: [
          "The full notional value of the futures contract, paid upfront",
          "Collateral posted by both the long and short side, set as a fraction of notional value, required to open a futures position",
          "A fee paid only by the seller of the contract",
          "The profit a trader expects to earn from the position",
        ],
        correctIndex: 1,
        explanation:
          "Initial margin is a fraction of the contract's notional value, posted by both sides of the trade — it's what makes futures capital-efficient and leveraged compared to owning the underlying outright.",
      },
      {
        id: "q2",
        prompt: "What happens if losses push an account below maintenance margin?",
        choices: [
          "Nothing — maintenance margin is only a suggestion",
          "The broker issues a margin call, requiring a deposit back up to the initial margin level or the position is liquidated",
          "The contract is automatically extended to a later expiration",
          "The exchange refunds the trader's initial margin",
        ],
        correctIndex: 1,
        explanation:
          "Falling below maintenance margin triggers a margin call: the trader must post variation margin to restore the account to the initial margin level, or the position gets liquidated.",
      },
      {
        id: "q3",
        prompt: "How does daily mark-to-market differ from how a forward contract settles?",
        choices: [
          "They are identical — both settle only once, at maturity",
          "A futures position settles gains and losses in cash every day, while a forward settles its entire profit or loss in one lump sum at maturity",
          "Futures never settle at all",
          "A forward settles daily, while futures settle only once",
        ],
        correctIndex: 1,
        explanation:
          "Daily mark-to-market realizes a futures position's gains and losses incrementally in cash each day, unlike a forward's single lump-sum settlement at expiration.",
      },
      {
        id: "q4",
        prompt: "Why does the daily mark-to-market process eliminate the counterparty risk that forwards carry?",
        choices: [
          "It doesn't — futures carry the exact same counterparty risk as forwards",
          "Because losses are collected in cash each day rather than allowed to accumulate unpaid over the life of the contract, no single party can build up a large unhonored loss",
          "Because futures contracts are never allowed to lose value",
          "Because futures are always held to physical delivery",
        ],
        correctIndex: 1,
        explanation:
          "Collecting losses daily, in cash, is precisely what prevents the kind of large, unpaid, end-of-contract loss that makes a private forward agreement risky.",
      },
      {
        id: "q5",
        prompt: "Why does posting only a fraction of notional value as margin create risk for a futures trader?",
        choices: [
          "It doesn't create any additional risk",
          "A modest move in the underlying translates into a much larger percentage gain or loss on the margin capital actually posted, which can trigger a margin call quickly",
          "Because margin requirements are set randomly by each broker",
          "Because leverage only ever increases a trader's profits, never their losses",
        ],
        correctIndex: 1,
        explanation:
          "Since margin is a small fraction of notional value, the same dollar move in the underlying is a much larger percentage move on the margin posted — leverage that cuts both ways.",
      },
      {
        id: "q6",
        prompt:
          "A trader posts $6,000 initial margin on a crude oil contract (1,000 barrels). Crude falls $2/barrel, a $2,000 loss. If maintenance margin is $5,000, what happens?",
        choices: [
          "Nothing — the account still has a positive balance",
          "A margin call, since $6,000 − $2,000 = $4,000 is below the $5,000 maintenance threshold",
          "The position automatically doubles in size",
          "The exchange refunds the loss",
        ],
        correctIndex: 1,
        explanation:
          "The account balance falls to $4,000, below the $5,000 maintenance margin, so the broker issues a margin call requiring a deposit back up to the $6,000 initial margin level.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "futures-contract-specifications",
    title: "Contract Specifications",
    summary:
      "The standardized terms — size, tick, expiration, and quality — that make a futures contract fungible on an exchange, and why that standardization is what a forward trades away for flexibility.",
    body: [
      { type: "heading", text: "What Standardization Means" },
      { type: "paragraph", text: "Where a forward's terms are fully custom, negotiated privately between two specific parties, a futures contract's terms are standardized by the exchange: a fixed contract size (say, 5,000 bushels of corn, or 1,000 barrels of crude oil), a fixed tick size — the minimum allowed price increment — and its corresponding tick value, and a fixed calendar of expiration and delivery months set well in advance." },
      { type: "heading", text: "Why Standardization Enables Liquidity" },
      { type: "paragraph", text: "Because every trader in a given contract is trading the exact same terms, one trader's long position is perfectly interchangeable, or fungible, with any other trader's short position in that same contract. That fungibility is what allows a deep, liquid, anonymous market to exist on an exchange — any buyer can be matched with any seller instantly, with no need to negotiate custom terms the way two parties to a private forward would have to." },
      { type: "heading", text: "Grade and Quality Specifications" },
      { type: "paragraph", text: "For contracts on physical commodities, the specification also pins down an exact grade or quality of the deliverable asset — a specific crude oil grade, or a minimum wheat protein content, for example — along with a list of approved delivery locations. Sellers are sometimes permitted to deliver a different, but contractually allowed, grade at a specified price adjustment, and this precision is exactly what prevents disputes over whether the asset actually delivered was the asset the contract promised." },
      { type: "heading", text: "Expiration Cycles and the Front Month" },
      { type: "paragraph", text: "Each futures contract trades under a ticker combined with an expiration month code, and several expirations — say, March, June, September, and December — trade simultaneously at any given time. The nearest-to-expire contract with the highest trading volume is called the front month, and it's typically the most liquid one; as it approaches its own expiration, active traders roll their exposure forward into the next expiration rather than let the contract run into its delivery process." },
      { type: "heading", text: "A Worked Example" },
      { type: "paragraph", text: "The E-mini S&P 500 futures contract has a multiplier of $50 per index point and a minimum tick size of 0.25 points, so each tick is worth 0.25 × $50 = $12.50. If the contract moves from 4,500.00 to 4,502.50, that's a 2.50-point move, or exactly 10 ticks. The dollar gain on one contract is 2.50 × $50 = $125 — the same answer as counting 10 ticks × $12.50 per tick, which is exactly why the standardized tick size and its dollar value matter: they let every trader compute a position's gain or loss the same, unambiguous way." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "How does a futures contract's terms differ from a forward's?",
        choices: [
          "They are identical — both are fully custom-negotiated",
          "A futures contract's size, tick, and expiration terms are standardized by the exchange, while a forward's terms are privately negotiated between two parties",
          "Futures contracts have no fixed contract size",
          "Forwards are always standardized, while futures are custom",
        ],
        correctIndex: 1,
        explanation:
          "Exchange standardization — fixed size, tick, and expiration terms — is what distinguishes a futures contract from a forward's fully bespoke, privately negotiated terms.",
      },
      {
        id: "q2",
        prompt: "Why does standardization enable a liquid futures market?",
        choices: [
          "It doesn't — standardization actually reduces liquidity",
          "Because every trader's position in a given contract is fungible with every other trader's, allowing any buyer to be matched with any seller without negotiation",
          "Because standardization eliminates the need for a clearinghouse",
          "Because it guarantees the contract will always be profitable",
        ],
        correctIndex: 1,
        explanation:
          "Fungibility — every contract being identical in terms — is what lets buyers and sellers transact anonymously and instantly, creating deep, liquid markets.",
      },
      {
        id: "q3",
        prompt: "Why do futures contracts on physical commodities specify an exact grade or quality?",
        choices: [
          "Grade specifications are not used in futures contracts",
          "To prevent disputes over whether the asset actually delivered matches what the contract promised",
          "Because every unit of a commodity is always identical, so specification is a formality",
          "Purely to increase the contract's price",
        ],
        correctIndex: 1,
        explanation:
          "Pinning down an exact grade and approved delivery locations removes ambiguity about what's actually owed at delivery, preventing disputes between the long and short.",
      },
      {
        id: "q4",
        prompt: "What is the \"front month\" contract?",
        choices: [
          "The contract furthest from expiration",
          "The nearest-to-expire contract with the highest trading volume, typically the most liquid one",
          "A contract that never expires",
          "The contract with the lowest price",
        ],
        correctIndex: 1,
        explanation:
          "The front month is the nearest expiration with the most trading activity — it's where most of the liquidity concentrates at any given time.",
      },
      {
        id: "q5",
        prompt: "Why do active traders roll their positions forward as the front month approaches expiration?",
        choices: [
          "To lock in a worse price on purpose",
          "To maintain their exposure in a new, more distant contract rather than let the position run into the delivery process",
          "Rolling is required by exchange rules for every trader",
          "To avoid paying any margin at all",
        ],
        correctIndex: 1,
        explanation:
          "Rolling lets a trader keep continuous exposure to the underlying without going through delivery, by closing the expiring contract and opening an equivalent position further out.",
      },
      {
        id: "q6",
        prompt:
          "The E-mini S&P 500 has a $50 multiplier and a 0.25-point tick. If the price moves from 4,500.00 to 4,502.50, what's the dollar gain on one contract?",
        choices: ["$12.50", "$50", "$125", "$250"],
        correctIndex: 2,
        explanation:
          "A 2.50-point move is 10 ticks; 10 ticks × $12.50 per tick = $125, the same result as multiplying the 2.50-point move directly by the $50 multiplier.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "futures-delivery-and-close-out",
    title: "Delivery and Closing Out a Position",
    summary:
      "Why the overwhelming majority of futures contracts never reach physical delivery — and what actually happens as a contract's expiration approaches.",
    body: [
      { type: "heading", text: "Two Ways a Futures Contract Ends" },
      { type: "paragraph", text: "A futures position ends in one of two ways: it runs to expiration and settles, either through physical delivery of the underlying asset or, for contracts like stock index futures or VIX futures that have no single physical asset to hand over, through cash settlement — or the trader closes out the position early with an offsetting trade, buying back a short or selling out a long, before expiration ever arrives. The vast majority of speculative traders exit this second way." },
      { type: "heading", text: "Physical Delivery in Practice" },
      { type: "paragraph", text: "For a physically-settled contract, only accounts still holding an open position once the exchange's delivery process begins risk being matched for actual delivery, and the exchange runs a formal notice process pairing the remaining longs and shorts. Because that process is operationally demanding — arranging storage, transport, and quality inspection — most speculative and retail accounts close out well before this window opens, leaving physical delivery mainly to the commercial participants, grain elevators, refiners, and the like, who actually want or already hold the underlying commodity." },
      { type: "heading", text: "Cash-Settled Contracts" },
      { type: "paragraph", text: "Many modern futures contracts, especially financial futures, are cash-settled by design and have no physical delivery mechanism at all: at expiration, the contract simply settles against an agreed reference price or index level, and the difference is paid in cash. This removes the operational complexity of delivery entirely, at the cost of the contract being a purely financial instrument rather than a claim on a physical asset." },
      { type: "heading", text: "Rolling a Position Forward" },
      { type: "paragraph", text: "A trader who wants continuous exposure without ever taking delivery closes out the expiring contract and simultaneously opens an equivalent position in a later-dated contract — a roll. The price difference between the two contracts, driven largely by the same cost-of-carry logic behind forward pricing, becomes a return or a cost of maintaining that exposure over time, which is exactly the dynamic behind both calendar-spread trading and roll yield in commodity futures." },
      { type: "heading", text: "A Worked Example" },
      { type: "paragraph", text: "A trader is long one September crude oil futures contract (1,000 barrels) entered at $75, and expiration is approaching. They close it out by selling at $76, banking a $1-per-barrel gain, or $1,000. To maintain continuous exposure, they simultaneously buy one December contract at $77 — $1 higher than the September price they just sold at, since the market is in contango. That $1-per-barrel gap costs $1,000 in the new position, a separate roll cost embedded in the switch to a further-dated, more expensive contract, on top of whatever September's realized gain was. Rolled repeatedly through a persistent contango market, this cost is exactly what erodes the return of holding continuous futures exposure over time, independent of what crude's outright spot price does." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What are the two ways a futures position can end?",
        choices: [
          "It must always run to physical delivery, with no other option",
          "It runs to expiration and settles (physically or in cash), or the trader closes it out early with an offsetting trade",
          "It can only be cancelled by the exchange",
          "It automatically converts into a forward contract",
        ],
        correctIndex: 1,
        explanation:
          "A futures position either settles at expiration — physically or in cash — or, far more commonly for speculative traders, is closed out early with an offsetting trade.",
      },
      {
        id: "q2",
        prompt: "Who mainly ends up taking physical delivery on a futures contract?",
        choices: [
          "Every trader who ever holds the contract, without exception",
          "Mainly commercial participants who actually want or hold the underlying commodity, since most speculative accounts close out before the delivery window",
          "No one — physical delivery never actually happens",
          "Only the exchange itself",
        ],
        correctIndex: 1,
        explanation:
          "Because physical delivery is operationally demanding, most speculative traders close out beforehand, leaving delivery mainly to commercial hedgers who actually want the physical asset.",
      },
      {
        id: "q3",
        prompt: "What is a cash-settled futures contract?",
        choices: [
          "A contract that requires the underlying asset to be physically delivered",
          "A contract that settles at expiration against a reference price or index, paying the difference in cash, with no physical delivery mechanism",
          "A contract that can only be traded with cash, never on margin",
          "A contract that never expires",
        ],
        correctIndex: 1,
        explanation:
          "Cash settlement pays the difference between the contract price and a reference price in cash at expiration, avoiding physical delivery entirely — common for financial futures.",
      },
      {
        id: "q4",
        prompt: "What does it mean to \"roll\" a futures position?",
        choices: [
          "Letting the position run into physical delivery",
          "Closing out the expiring contract and simultaneously opening an equivalent position in a later-dated contract, to maintain continuous exposure",
          "Doubling the size of a position right before expiration",
          "Cancelling the position with no replacement",
        ],
        correctIndex: 1,
        explanation:
          "Rolling swaps an expiring contract for a later-dated one in a single move, letting a trader maintain exposure indefinitely without ever taking delivery.",
      },
      {
        id: "q5",
        prompt: "What determines the price difference between the contract being rolled out of and the one being rolled into?",
        choices: [
          "The difference is always zero",
          "Largely the same cost-of-carry logic behind forward pricing, which is also the dynamic behind calendar spreads and commodity roll yield",
          "It is set arbitrarily by the trader",
          "It depends only on the trader's broker fees",
        ],
        correctIndex: 1,
        explanation:
          "The roll's price difference reflects cost-of-carry between the two expirations — the same underlying dynamic that drives calendar-spread trading and roll yield in commodities.",
      },
      {
        id: "q6",
        prompt:
          "A trader closes September crude at $76 and buys December at $77 to roll the position forward. What does the $1-per-barrel gap represent?",
        choices: [
          "A trading error that should never happen",
          "A roll cost from contango — the new position starts $1,000 more expensive on 1,000 barrels",
          "A guaranteed $1,000 profit",
          "The exchange's transaction fee",
        ],
        correctIndex: 1,
        explanation:
          "Buying the further-dated December contract at a $1 premium to the September contract just sold is a contango-driven roll cost — $1,000 on a 1,000-barrel contract, separate from whatever gain or loss was realized on September itself.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "futures-forward-rate-agreements",
    title: "Forward Rate Agreements (FRAs)",
    summary:
      "A forward contract on an interest rate itself — locking in a borrowing or lending rate for a future period without any principal actually changing hands.",
    body: [
      { type: "heading", text: "What an FRA Is" },
      { type: "paragraph", text: "A forward rate agreement (FRA) is a forward contract where two parties agree today on an interest rate that will apply to a notional principal amount over a specified future period — for example, a 3-month rate starting 6 months from now. Unlike an actual loan, the notional amount is never exchanged; it exists purely to calculate the settlement payment." },
      { type: "heading", text: "How Settlement Works" },
      { type: "paragraph", text: "At the FRA's settlement date, the difference between the agreed fixed rate and the actual reference rate observed at that time, such as SOFR, is calculated on the notional amount, and one party pays the other that difference in cash. If the realized rate ends up higher than the agreed rate, the party who locked in the fixed rate profits, since they avoided paying the higher rate that materialized." },
      { type: "heading", text: "Hedging a Future Borrowing or Lending Rate" },
      { type: "paragraph", text: "A company that knows it will need to borrow money in six months, for a three-month term, can use an FRA to lock in today's rate for that future period, protecting against the risk that rates rise before the loan is actually taken out. The FRA settlement payment offsets the difference between the rate they locked in and the rate they'd actually pay on the loan when it's drawn." },
      { type: "heading", text: "FRAs vs. Interest Rate Futures" },
      { type: "paragraph", text: "FRAs serve a similar purpose to the exchange-traded interest rate futures covered elsewhere in this course, but FRAs are private, over-the-counter contracts, custom-tailored between two parties in size and dates, carrying the same counterparty-risk tradeoff as any other forward. An interest rate future is the standardized, exchange-cleared, daily-margined version of essentially the same underlying idea." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does an FRA let two parties do?",
        choices: [
          "Exchange a notional principal amount immediately",
          "Agree today on an interest rate that will apply to a notional amount over a specified future period, without exchanging the notional itself",
          "Guarantee that interest rates will never change",
          "Buy and sell a physical commodity",
        ],
        correctIndex: 1,
        explanation:
          "An FRA locks in a future interest rate on a notional amount used only to calculate settlement — the notional itself is never actually loaned or exchanged.",
      },
      {
        id: "q2",
        prompt: "How is an FRA settled?",
        choices: [
          "The difference between the agreed fixed rate and the actual reference rate is calculated on the notional amount, and paid in cash by one party to the other",
          "The full notional amount is physically delivered",
          "Both parties simply walk away with no payment",
          "Settlement only happens if interest rates stay exactly the same",
        ],
        correctIndex: 0,
        explanation:
          "FRA settlement is a cash payment based on the gap between the locked-in rate and the realized reference rate, applied to the notional — not a physical exchange of principal.",
      },
      {
        id: "q3",
        prompt: "How would a company use an FRA to hedge a future borrowing need?",
        choices: [
          "By locking in today's rate for the future borrowing period, so a settlement payment offsets a higher realized rate when the loan is actually taken out",
          "FRAs cannot be used to hedge borrowing costs",
          "By borrowing the money immediately instead of waiting",
          "By canceling the planned loan entirely",
        ],
        correctIndex: 0,
        explanation:
          "Locking in a rate today via an FRA means that if rates rise before the loan is drawn, the FRA settlement payment offsets the higher cost — the same hedging logic used elsewhere in this course.",
      },
      {
        id: "q4",
        prompt: "How does an FRA differ from an exchange-traded interest rate future?",
        choices: [
          "An FRA is a private, over-the-counter, custom-tailored contract carrying counterparty risk, while a future is standardized, exchange-cleared, and daily-margined",
          "They are identical in every respect",
          "FRAs are always exchange-traded, never private",
          "Interest rate futures cannot be used to hedge borrowing costs",
        ],
        correctIndex: 0,
        explanation:
          "FRAs and interest rate futures serve a similar hedging purpose, but an FRA is a bespoke bilateral forward while a future is the standardized, clearinghouse-guaranteed version of the same idea.",
      },
      {
        id: "q5",
        prompt: "Why is the notional amount in an FRA never actually exchanged?",
        choices: [
          "Because it exists only to calculate the cash settlement payment, not as a real loan",
          "Because FRAs are illegal in most jurisdictions",
          "Because the notional amount is always zero",
          "Because FRAs always involve physical delivery of a commodity instead",
        ],
        correctIndex: 0,
        explanation:
          "The notional is purely a reference amount for calculating the interest-rate-difference settlement — no actual loan or deposit of that principal ever takes place between the two parties.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "futures-valuing-an-existing-forward",
    title: "Valuing an Existing Forward Contract",
    summary:
      "Once a forward is in place, its market value changes as time passes and the spot price moves — a different question from forward pricing, which only sets the fair price at inception.",
    body: [
      { type: "heading", text: "Pricing at Inception vs. Valuing Mid-Life" },
      { type: "paragraph", text: "Forward pricing, covered earlier in this module, answers the question \"what delivery price should this contract be struck at today, so that it has zero value to either side at signing?\" Valuing an existing forward answers a different question: once that contract is signed and time has passed, what is it actually worth now to whoever holds it?" },
      { type: "heading", text: "Why the Value Isn't Zero Anymore" },
      { type: "paragraph", text: "A forward is struck at a delivery price, fixed for the life of the contract, but the underlying's spot price and the cost of carry keep changing after that. As the asset's current forward price, recalculated using today's spot and financing cost, drifts away from the original delivery price, the contract accumulates real economic value — positive to one side, and equally negative to the other." },
      { type: "heading", text: "The Valuation Formula's Intuition" },
      { type: "paragraph", text: "The value of a long forward position, at any point before maturity, is approximately the present value of the difference between today's forward price for a brand-new contract of the same remaining maturity, and the original delivery price locked in at inception. If the market's current forward price is now higher than the original delivery price, the long position is in the money and worth something positive." },
      { type: "heading", text: "Why This Matters in Practice" },
      { type: "paragraph", text: "This mid-life valuation is what a company needs to mark a forward position on its own books, what a bank needs to calculate before agreeing to unwind or assign an existing forward early, and conceptually underlies the daily variation-margin logic used in a futures contract's mark-to-market process — even though a forward itself, unlike a future, doesn't settle any of that accumulated value until the very end." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What question does \"valuing an existing forward\" answer, as distinct from forward pricing?",
        choices: [
          "What the contract's delivery price should be set at, for it to have zero value at signing",
          "What the contract is actually worth now to whoever holds it, after time has passed since signing",
          "Whether the contract should be cancelled",
          "How much collateral the exchange requires",
        ],
        correctIndex: 1,
        explanation:
          "Forward pricing sets the fair delivery price at inception; valuing an existing forward asks what that already-signed contract is worth partway through its life.",
      },
      {
        id: "q2",
        prompt: "Why does an existing forward's value drift away from zero over time?",
        choices: [
          "Because the underlying's spot price and cost of carry keep changing after the delivery price was fixed at inception",
          "Forward contracts always keep a value of exactly zero throughout their life",
          "Because the contract's delivery price changes automatically every day",
          "Because forwards are marked to market daily like futures",
        ],
        correctIndex: 0,
        explanation:
          "The delivery price is locked in at signing, but the market's own forward price for a new, equivalent contract keeps moving with spot and financing costs, creating a gap that gives the existing contract real value.",
      },
      {
        id: "q3",
        prompt: "What does it mean if a long forward position's current value is positive?",
        choices: [
          "Today's forward price for a new, equivalent contract is now higher than the original delivery price locked in at inception",
          "The contract has already been physically settled",
          "The holder must immediately pay additional margin",
          "The underlying asset has been delisted",
        ],
        correctIndex: 0,
        explanation:
          "A long forward gains value when the market's current forward price rises above the original delivery price — the holder is now locked into buying below today's equivalent market rate.",
      },
      {
        id: "q4",
        prompt: "Why would a bank need to value an existing forward contract mid-life?",
        choices: [
          "To agree on a fair price before unwinding or assigning the contract early, or to mark the position on its books",
          "Forwards never need to be valued once they're signed",
          "Only to determine the original delivery price",
          "To calculate the underlying commodity's storage cost",
        ],
        correctIndex: 0,
        explanation:
          "Marking a position on the books, or agreeing a fair unwind price before maturity, both require knowing the contract's current value, not just its original delivery price.",
      },
      {
        id: "q5",
        prompt: "How does a forward's value accumulation compare to a future's daily mark-to-market?",
        choices: [
          "A forward's value accumulates but isn't settled until maturity, while a future settles that same kind of value in cash every day",
          "They are identical — forwards also settle in cash daily",
          "A forward never accumulates any value at all",
          "A future never accumulates value between settlements",
        ],
        correctIndex: 0,
        explanation:
          "The same underlying idea — value building up as the market forward price moves away from the locked-in price — is what a future actually pays out daily via mark-to-market, whereas a forward simply accumulates it unrealized until the end.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "futures-clearinghouses-and-novation",
    title: "Clearinghouses and Novation",
    summary:
      "How a clearinghouse steps into the middle of every futures trade, becoming the buyer to every seller and the seller to every buyer — the mechanism behind the guarantee referenced earlier in this course.",
    body: [
      { type: "heading", text: "What a Clearinghouse Does" },
      { type: "paragraph", text: "A clearinghouse sits between every buyer and seller in the futures market, becoming the legal counterparty to both sides of every trade through a process called novation. The moment a trade is matched, the original bilateral contract between the two traders is replaced by two new contracts: one between the buyer and the clearinghouse, and one between the clearinghouse and the seller." },
      { type: "heading", text: "Why Novation Matters" },
      { type: "paragraph", text: "Because every trader's counterparty is now the clearinghouse itself, rather than the specific, possibly unknown trader on the other side of the original trade, no individual trader needs to assess or worry about the creditworthiness of whoever they happened to be matched with — a critical difference from a forward's direct, bilateral counterparty exposure." },
      { type: "heading", text: "How the Clearinghouse Stays Solvent" },
      { type: "paragraph", text: "The clearinghouse funds this guarantee through the margin system already covered in this module: every member posts initial margin, is marked to market daily, and faces margin calls, which means the clearinghouse is rarely exposed to more than a single day's adverse move on any position before that loss is collected in cash." },
      { type: "heading", text: "The Guarantee Fund, as a Backstop" },
      { type: "paragraph", text: "Beyond individual members' margin, clearinghouses maintain a mutualized guarantee, or default, fund, contributed to by all clearing members, that absorbs losses in the rare event a member defaults and its own posted margin isn't enough to cover the loss — a final layer of protection standing behind the daily margining process." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does novation mean in the context of a futures clearinghouse?",
        choices: [
          "The original bilateral trade between buyer and seller is replaced by two new contracts, each with the clearinghouse as counterparty",
          "The trade is simply cancelled after being matched",
          "The buyer and seller must renegotiate the price directly",
          "Novation only applies to forward contracts, never futures",
        ],
        correctIndex: 0,
        explanation:
          "Novation is the legal substitution that inserts the clearinghouse as the counterparty to both sides, replacing the original buyer-seller contract with two new ones.",
      },
      {
        id: "q2",
        prompt: "Why doesn't a futures trader need to assess the creditworthiness of the trader on the other side of their trade?",
        choices: [
          "Because the clearinghouse becomes the counterparty to both sides through novation, not the original trader",
          "Because all futures traders are required to be the same size",
          "Because futures trades are never actually matched with anyone",
          "Because creditworthiness is irrelevant to any financial contract",
        ],
        correctIndex: 0,
        explanation:
          "Since novation makes the clearinghouse the counterparty to every trade, a trader's actual exposure is to the clearinghouse itself, not to whichever specific trader happened to take the other side.",
      },
      {
        id: "q3",
        prompt: "How does the clearinghouse limit its own exposure to any single position?",
        choices: [
          "Through the same daily margining system covered earlier — initial margin, mark-to-market, and margin calls",
          "By refusing to guarantee any trades at all",
          "By requiring physical delivery on every contract the same day it's opened",
          "The clearinghouse has no mechanism to limit its exposure",
        ],
        correctIndex: 0,
        explanation:
          "Daily mark-to-market and margin calls mean losses are collected in cash each day, so the clearinghouse is rarely exposed to more than a single day's adverse move on any position.",
      },
      {
        id: "q4",
        prompt: "What is a clearinghouse's guarantee (or default) fund for?",
        choices: [
          "To absorb losses if a member defaults and its own posted margin isn't enough to cover the loss",
          "To pay dividends to clearing members",
          "To replace the need for any margin requirements at all",
          "To fund the exchange's marketing budget",
        ],
        correctIndex: 0,
        explanation:
          "The mutualized guarantee fund is a backstop beyond individual margin — a final layer of protection for the rare case where a defaulting member's own margin falls short.",
      },
      {
        id: "q5",
        prompt: "How does novation change a trader's counterparty risk compared to a private forward contract?",
        choices: [
          "It replaces exposure to one specific, possibly unknown counterparty with exposure to a well-capitalized, guarantee-fund-backed clearinghouse",
          "It has no effect on counterparty risk at all",
          "It increases counterparty risk compared to a forward",
          "It eliminates the need for a clearinghouse entirely",
        ],
        correctIndex: 0,
        explanation:
          "Novation is precisely what converts the bilateral counterparty risk of a forward into exposure to a single, well-margined, guarantee-fund-backed clearinghouse instead.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "futures-price-limits-and-trading-halts",
    title: "Price Limits and Trading Halts",
    summary:
      "The rules exchanges use to slow down or pause trading when a futures price moves an unusually large amount in a single session.",
    body: [
      { type: "heading", text: "What a Daily Price Limit Is" },
      { type: "paragraph", text: "Many futures contracts have an exchange-set daily price limit, a maximum amount the price is allowed to move, up or down, from the prior day's settlement price within a single trading session. Once the price hits that limit, further trades beyond it simply aren't permitted for the rest of the session, or until the limit is expanded." },
      { type: "heading", text: "Limit Up and Limit Down" },
      { type: "paragraph", text: "When a price rises all the way to its upper limit, the market is said to be \"limit up\"; when it falls to its lower limit, it's \"limit down.\" A market stuck there, with buyers or sellers unable to trade beyond the limit despite plenty of demand to do so, is described as \"locked limit\" — trading technically continues, but no one can transact outside the barrier." },
      { type: "heading", text: "Why Exchanges Use Price Limits" },
      { type: "paragraph", text: "Price limits are meant to give the market a pause during an unusually sharp, fast move — slowing panic selling or buying, giving participants time to assess new information, and capping how large a single day's mark-to-market loss can be for anyone holding a position, before the clearinghouse's margin system has to absorb it." },
      { type: "heading", text: "Circuit Breakers and Trading Halts" },
      { type: "paragraph", text: "Related but distinct from a price limit, a circuit breaker triggers a temporary trading halt, rather than merely capping the price, once a market moves by some threshold percentage very quickly. Used especially in broad equity index futures, a circuit breaker gives markets a brief cooling-off period before trading resumes, rather than locking the price at a hard ceiling or floor for the rest of the session." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What is a daily price limit?",
        choices: [
          "A maximum amount a futures price is allowed to move, up or down, from the prior settlement price within one session",
          "A limit on how many contracts one trader can buy in a lifetime",
          "The minimum price increment a contract can move by",
          "A rule that only applies to options, never futures",
        ],
        correctIndex: 0,
        explanation:
          "A daily price limit caps how far a contract's price can move in a single session relative to the prior day's settlement — once hit, trades beyond that level aren't permitted.",
      },
      {
        id: "q2",
        prompt: "What does it mean for a market to be \"locked limit\"?",
        choices: [
          "The price is stuck at its daily limit, with participants unable to trade beyond it despite demand to do so",
          "The exchange has permanently closed the contract",
          "Trading volume has dropped to zero for the entire day",
          "The clearinghouse has stopped guaranteeing trades",
        ],
        correctIndex: 0,
        explanation:
          "\"Locked limit\" describes a market pinned at its price limit, where buyers or sellers who want to transact beyond that level simply cannot, even though trading in general hasn't stopped.",
      },
      {
        id: "q3",
        prompt: "Why do exchanges impose daily price limits?",
        choices: [
          "To slow down an unusually sharp move, give participants time to assess new information, and cap the size of a single day's mark-to-market loss",
          "To guarantee that prices never change at all",
          "To increase volatility intentionally",
          "Price limits serve no real purpose",
        ],
        correctIndex: 0,
        explanation:
          "Price limits act as a circuit-breaker-like pause during extreme moves, giving the market time to digest information and bounding how large a single day's loss can be before margin has to absorb it.",
      },
      {
        id: "q4",
        prompt: "How does a circuit breaker differ from a simple price limit?",
        choices: [
          "A circuit breaker triggers a temporary trading halt once a threshold move happens quickly, rather than just capping the price at a hard ceiling or floor",
          "They are exactly the same mechanism with different names",
          "A circuit breaker only applies to interest rate futures",
          "A circuit breaker permanently closes a contract",
        ],
        correctIndex: 0,
        explanation:
          "A circuit breaker pauses trading entirely for a cooling-off period, rather than continuing to allow trading up to (and pinned at) a fixed price ceiling or floor the way a daily price limit does.",
      },
      {
        id: "q5",
        prompt: "Which futures markets commonly use circuit breakers as described in this lesson?",
        choices: [
          "Broad equity index futures",
          "Only single-stock options",
          "Only physically-settled agricultural futures",
          "Circuit breakers are never used in any futures market",
        ],
        correctIndex: 0,
        explanation:
          "Circuit breakers are especially associated with broad equity index futures, where a fast, large move can trigger a brief, market-wide trading halt rather than a simple price cap.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "futures-what-is-a-forward-contract",
    title: "What Is a Forward?",
    summary:
      "The simplest possible definition of a forward contract — two parties agreeing today on a price for something that changes hands later — and why that agreement is worth making at all.",
    body: [
      { type: "heading", text: "A Simple Definition" },
      { type: "paragraph", text: "At its core, a forward contract is nothing more than an agreement between two parties to buy and sell something at an agreed price, on an agreed future date. Nothing changes hands today except the promise itself; the actual exchange of the asset for the price happens entirely later, at the date both sides agreed to upfront." },
      { type: "heading", text: "Long and Short" },
      { type: "paragraph", text: "The party who agrees to buy the asset later is said to be \"long\" the forward; the party who agrees to sell it is \"short.\" These are the same long and short terms used throughout trading more generally, and a forward is really just the simplest possible way to express a long or short view on something's future price, locked in today rather than left to chance." },
      { type: "heading", text: "A Real-World Motivation" },
      { type: "paragraph", text: "Picture a coffee roaster who knows they'll need a large shipment of coffee beans in three months, and worries the price might rise before then. By agreeing today with a coffee grower on a fixed price for that future delivery, the roaster removes the uncertainty entirely — whatever the market price does between now and then, their cost is already locked in." },
      { type: "heading", text: "Why Go to the Trouble" },
      { type: "paragraph", text: "The whole point of a forward is trading away uncertainty for certainty. Neither side knows for sure whether they'll end up ahead compared to simply waiting and transacting at whatever the market price happens to be later — but both sides get something they value more than that uncertainty: a known, fixed number to plan around." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "In the simplest terms, what is a forward contract?",
        choices: [
          "An agreement between two parties to buy and sell something at an agreed price on an agreed future date",
          "A loan that must be repaid immediately",
          "A guarantee that an asset's price will never change",
          "A contract that can only be used for stocks",
        ],
        correctIndex: 0,
        explanation:
          "A forward is fundamentally just a promise: a fixed price and a fixed future date, agreed by two parties today, with the actual exchange happening later.",
      },
      {
        id: "q2",
        prompt: "What does it mean to be \"long\" a forward contract?",
        choices: [
          "You've agreed to sell the asset later",
          "You've agreed to buy the asset later",
          "You've cancelled the contract",
          "You have no position in the contract at all",
        ],
        correctIndex: 1,
        explanation:
          "The long side of a forward is the party who has agreed to buy the underlying asset at the agreed future date — the short side is whoever agreed to sell it.",
      },
      {
        id: "q3",
        prompt: "In the coffee roaster example, why does the roaster enter into a forward with a coffee grower?",
        choices: [
          "To remove the uncertainty of not knowing what coffee will cost in three months, by locking in a fixed price today",
          "To immediately receive the coffee beans today",
          "To guarantee a lower price than the grower's cost",
          "Forwards cannot be used for physical commodities like coffee",
        ],
        correctIndex: 0,
        explanation:
          "The roaster's motivation is certainty: locking in today's agreed price removes the risk that coffee prices might rise before the shipment is actually needed.",
      },
      {
        id: "q4",
        prompt: "What is the fundamental tradeoff both sides of a forward contract accept?",
        choices: [
          "Both sides guarantee themselves a profit no matter what happens",
          "Both sides give up the chance of a better outcome from waiting, in exchange for a known, fixed number to plan around",
          "Only one side takes on any risk at all",
          "Forwards eliminate risk for the entire market, not just the two parties involved",
        ],
        correctIndex: 1,
        explanation:
          "Neither side knows in advance whether the locked-in price will end up better or worse than the eventual market price — the value of a forward is the certainty itself, not a guaranteed favorable outcome.",
      },
      {
        id: "q5",
        prompt: "What actually changes hands when a forward contract is first agreed?",
        choices: [
          "The full purchase price, paid immediately",
          "The underlying asset itself, delivered immediately",
          "Nothing but the promise — the actual exchange of asset for price happens later, at the agreed future date",
          "A cash deposit equal to half the contract's value",
        ],
        correctIndex: 2,
        explanation:
          "A forward is just an agreement at signing — no cash or asset actually changes hands until the agreed future date arrives.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "futures-what-is-futures",
    title: "What Is Futures?",
    summary:
      "The simplest possible definition of a futures contract — the same basic long/short agreement as a forward, but standardized and traded on an exchange.",
    body: [
      { type: "heading", text: "A Simple Definition" },
      { type: "paragraph", text: "A futures contract is an agreement to buy or sell an asset at an agreed price on an agreed future date — the exact same basic idea as the forward contract covered in the previous module. What makes it a \"future\" rather than a plain forward is entirely about how that agreement is made and enforced, not what it fundamentally promises." },
      { type: "heading", text: "Same Long and Short, Different Venue" },
      { type: "paragraph", text: "Just like a forward, the buyer of a futures contract is long and the seller is short. But rather than being negotiated privately between two specific parties, a futures contract is bought and sold on an organized exchange, where any trader can take the long or short side without ever needing to know, or trust, who's on the other side of the trade." },
      { type: "heading", text: "A Real-World Example" },
      { type: "paragraph", text: "A trader who believes oil prices will rise over the next few months can go long a crude oil futures contract on an exchange, agreeing to buy oil at today's price for delivery down the road — without ever needing to find a specific seller willing to make that exact private deal, the way a forward would require." },
      { type: "heading", text: "Building on What You Already Know" },
      { type: "paragraph", text: "Everything covered in the Forward Basics module — long and short positions, agreeing on a price today for a transaction later — carries over directly to futures. The rest of this module covers what's specifically different about a futures contract: the margin and daily settlement, the standardized contract terms, and the clearinghouse that stands behind every trade, none of which a plain forward has." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "In the simplest terms, what is a futures contract?",
        choices: [
          "An agreement to buy or sell an asset at an agreed price on an agreed future date, the same basic idea as a forward",
          "A contract that guarantees a fixed profit",
          "A type of loan with no fixed repayment date",
          "An agreement that only applies to stocks, never commodities",
        ],
        correctIndex: 0,
        explanation:
          "A futures contract promises exactly the same basic thing a forward does — buy or sell at an agreed price on an agreed future date.",
      },
      {
        id: "q2",
        prompt: "What fundamentally distinguishes a futures contract from a forward contract?",
        choices: [
          "Futures promise something completely different from what a forward promises",
          "How the agreement is made and enforced — traded on an organized exchange rather than negotiated privately between two parties",
          "Only futures contracts involve a long and a short side",
          "Forwards can never be used for commodities like oil",
        ],
        correctIndex: 1,
        explanation:
          "The underlying promise is identical to a forward's — what changes is that a futures contract is exchange-traded and standardized, rather than a private, bilateral agreement.",
      },
      {
        id: "q3",
        prompt: "Why can a trader go long a crude oil futures contract without finding a specific seller willing to make a private deal?",
        choices: [
          "Because the futures contract is bought and sold on an organized exchange, where any trader can take either side of the trade",
          "Because futures contracts don't actually require a counterparty at all",
          "Because oil futures are the only type of futures contract that exists",
          "Because the trader is required to physically own oil first",
        ],
        correctIndex: 0,
        explanation:
          "The exchange, not a specific counterparty, is what makes it possible to go long or short a futures contract instantly, without negotiating a private deal the way a forward would require.",
      },
      {
        id: "q4",
        prompt: "Which concepts from the Forward Basics module carry over directly to futures?",
        choices: [
          "Nothing carries over — futures and forwards are entirely unrelated",
          "Long and short positions, and the idea of agreeing on a price today for a transaction later",
          "Only the idea of daily margin calls",
          "Only the concept of a clearinghouse",
        ],
        correctIndex: 1,
        explanation:
          "The core long/short, price-agreed-today-for-later logic is shared between forwards and futures — what the rest of this module covers is what's specifically different about futures.",
      },
      {
        id: "q5",
        prompt: "What does the rest of the Futures Basics module go on to cover, building on this lesson?",
        choices: [
          "What's specifically different about futures — margin and daily settlement, standardized contract terms, and the clearinghouse",
          "A repeat of exactly the same forward-contract content already covered",
          "Only how to physically deliver a commodity",
          "Nothing further — this lesson covers everything about futures",
        ],
        correctIndex: 0,
        explanation:
          "Having established what a futures contract fundamentally is, the module moves on to the mechanics that actually distinguish it from a forward — margin, standardization, and the clearinghouse guarantee.",
      },
    ],
  },
];
