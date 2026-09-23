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
      { type: "heading", text: "What Trend Following Is" },
      { type: "paragraph", text: "Trend following is a systematic, rules-based strategy: instead of predicting where a market is headed, it reacts to where the market has already been headed — buying instruments in an established uptrend and shorting (or avoiding) those in a downtrend. Futures are the natural tool for this because they make it cheap and capital-efficient to go long or short across many different asset classes from one account." },
      { type: "heading", text: "A Simple Trend Rule" },
      { type: "paragraph", text: "A simple example rule: go long when price crosses above its 200-day moving average, go short (or exit) when it crosses back below. The strategy never tries to call the top or the bottom — it accepts being late getting into every trend and late getting out, in exchange for capturing the middle of a sustained move." },
      { type: "heading", text: "Win Rate vs. Expectancy" },
      { type: "paragraph", text: "Trend following is defined by a low win rate paired with positive expectancy. Most individual trades are small losses — the trend didn't continue, or the market chopped sideways — but the few trades that do catch a real, sustained trend are large enough winners to more than make up for the many losers. Because of this, disciplined risk management (small, consistent position sizing and cutting losers quickly) matters more to this strategy's success than being right often." },
      { type: "heading", text: "Trading Many Markets at Once" },
      { type: "paragraph", text: "Trend-following programs typically trade across many uncorrelated futures markets at once — grains, energy, metals, currencies, interest rates, equity indexes — rather than concentrating on one. Since nobody knows in advance which market will trend next, spreading the strategy across many markets is what lets a handful of big winners offset the frequent small losses elsewhere." },
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
    ],
  },
];
