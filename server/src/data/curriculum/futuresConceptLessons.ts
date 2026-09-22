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
  {
    kind: "concept",
    slug: "futures-cross-hedging",
    title: "Cross-hedging",
    summary:
      "Hedging with futures on a different but closely related asset, when no futures contract exists on the exact one you hold.",
    body: [
      "A direct hedge uses a futures contract on the exact asset you're exposed to. Cross-hedging is what you do when no such contract exists, or it's too illiquid to use — you hedge with futures on a different but closely correlated asset instead. A regional jet-fuel buyer can't easily trade jet-fuel futures, since the market is thin, so they hedge using heating oil or crude oil futures, since jet fuel prices tend to move closely with those more liquid contracts.",
      "The key requirement for a cross-hedge to work is a strong, stable historical correlation between the price of the asset you're exposed to and the price of the futures contract you're using to hedge it. The stronger and more stable that relationship, the more effective the hedge.",
      "Cross-hedging introduces an additional layer of basis risk beyond a normal direct hedge. Not only can the futures price diverge from the spot price of its own underlying — ordinary basis risk — but the price of the asset you actually hold can also diverge from the price of the futures' underlying asset. Jet fuel and heating oil don't always move in perfect lockstep, even though they're closely related refined products.",
      "To size a cross-hedge, traders often compute a hedge ratio, commonly estimated by regressing the exposed asset's price changes against the hedging instrument's price changes. That regression's slope — sometimes called the minimum-variance hedge ratio — tells them how many futures contracts to use per unit of exposure, rather than assuming a naive one-for-one match.",
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
      "Interest rate futures — Treasury note or bond futures, SOFR futures — let market participants hedge against the risk that interest rates move against them. Bond prices move inversely to interest rates: when rates rise, existing bond prices fall. A bond portfolio manager worried about rising rates can sell (short) interest rate futures — if rates rise and their bond portfolio loses value, the short futures position gains, offsetting the loss.",
      "The mirror case: a company planning to borrow money in three months is worried rates will rise before they lock in a loan, raising their future borrowing cost. They can hedge with a short position in interest rate futures, so that if rates do rise, a gain on the futures position offsets the higher interest expense they'll pay on the loan.",
      "Because bonds of different maturities respond differently to a given change in rates — longer-maturity bonds are more sensitive — hedgers commonly account for duration, a measure of interest-rate sensitivity, when sizing a rate hedge, using more or fewer futures contracts depending on how sensitive their actual portfolio is compared to the futures contract's own underlying instrument.",
      "As with other futures hedges, an interest-rate hedge isn't perfect: the specific bonds a portfolio holds may not move in perfect lockstep with the futures contract's benchmark instrument, and getting the duration-matched sizing wrong can leave the hedge over- or under-protecting the actual position.",
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
      "Mean-reversion, or contrarian, trading is built on the opposite premise from trend following: rather than betting that a move will continue, it bets that a price which has moved unusually far from some reference level — a moving average, a historical range, a statistical band — will tend to snap back toward that level. The trader buys after a sharp, seemingly overdone decline, and sells or shorts after a sharp, seemingly overdone rally.",
      "A simple example rule: when a price falls more than two standard deviations below its 20-day average, buy, expecting a bounce back toward the average; when it rises more than two standard deviations above, sell or short, expecting a pullback. The trader is essentially betting against the crowd at moments of apparent extremes.",
      "Mean-reversion strategies tend to have a high win rate with small, frequent gains, punctuated by occasional large losses — almost the mirror image of trend following's profile. Most short-term overshoots do snap back as expected, but the rare times a market keeps moving strongly in one direction — a genuine new trend, not a temporary overshoot — can produce an outsized loss for a contrarian position that keeps fighting the move.",
      "Because of that loss profile, disciplined risk controls — a hard stop-loss, or limiting how much a position is added to as price keeps moving against the entry — are essential to mean-reversion trading. Without them, the strategy is exposed to the specific risk of being run over by a real, sustained trend that never reverts.",
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
      "This is a variant of contrarian trading that looks beyond price alone and incorporates market activity data — trading volume and open interest, the number of outstanding futures contracts that haven't been closed out — to judge whether a price move is likely to continue or is running out of steam.",
      "The logic: a price move backed by strong, rising volume and rising open interest suggests genuine new money and conviction are flowing into the move, making it more likely to persist, at least for now. A price move that continues on thinning volume and falling open interest suggests the move is increasingly running on fumes — fewer participants are willing to keep pushing it further, and existing positions are being closed out rather than added to, which a contrarian trader reads as a warning sign the move could reverse.",
      "A classic pattern: a strong price rally accompanied by declining volume and declining open interest is viewed skeptically by activity-based contrarian traders. It suggests the rally is being sustained by a shrinking pool of participants — often short-covering, where traders who bet against the move are forced to buy back their positions — rather than fresh buying interest, making it a candidate for a reversal once that short-covering is exhausted.",
      "This approach requires more data than a pure price-based contrarian rule, since volume and open interest for futures are typically published daily by the exchange with a delay, and is usually combined with price-based signals rather than used entirely on its own. Activity data adds context about who is driving a move and how sustainable the current participation looks, rather than replacing a price signal outright.",
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
];
