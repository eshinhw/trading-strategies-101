import type { ConceptLesson } from "./types.js";

// Concept-lesson format, same reasoning as the other non-options courses —
// these are commodity-futures-curve, factor, and fundamentals-modeling
// concepts, not option-payoff structures, so prose + a knowledge-check quiz
// fits better than the options-specific engine.
export const commoditiesConceptLessons: ConceptLesson[] = [
  {
    kind: "concept",
    slug: "commodities-roll-yields",
    title: "Roll yields",
    summary: "Earning (or losing) a return from rolling a commodity futures position forward, depending on whether the futures curve is in backwardation or contango.",
    body: [
      { type: "heading", text: "What Roll Yield Is" },
      { type: "paragraph", text: "Commodity futures contracts expire, so an investor who wants continuous exposure to a commodity must periodically \"roll\" the position — closing out the expiring contract and opening a new position in a further-dated one. The return earned or lost purely from this rolling process, separate from any change in the commodity's spot price, is called the roll yield." },
      { type: "heading", text: "Backwardation vs. Contango" },
      { type: "paragraph", text: "When the futures curve is in backwardation, further-dated contracts priced lower than near-dated ones, rolling a long position means selling the expiring, higher-priced, contract and buying the further-dated, cheaper, one, which produces a positive roll yield as the futures price naturally rises toward the higher spot price over time. When the curve is in contango, further-dated contracts priced higher, the same roll produces a negative roll yield, since the position is repeatedly selling cheap and buying expensive." },
      { type: "heading", text: "Positioning by Curve Shape" },
      { type: "paragraph", text: "A roll-yield strategy explicitly targets this component of return rather than just passively holding whatever curve shape happens to prevail — for example, ranking commodities by the steepness of their backwardation or contango and tilting a portfolio toward those in backwardation, expecting positive roll yield, while avoiding or shorting those in steep contango, expecting a roll-yield drag." },
      { type: "heading", text: "A Bet on Physical Market Conditions" },
      { type: "paragraph", text: "Historically, backwardation has often been linked to genuine physical scarcity or strong near-term demand for a commodity, sometimes described through the lens of \"hedging pressure,\" where producers wanting to hedge future production push down further-dated prices relative to near-dated ones, while contango often reflects ample supply or high storage costs — so a roll-yield strategy is, at some level, also a bet on the underlying physical market conditions that produce a given curve shape, not merely a mechanical harvesting of a number on a chart." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What is \"roll yield\"?",
        choices: [
          "The total return from a commodity's spot price changing",
          "The return earned or lost purely from rolling a futures position from an expiring contract into a further-dated one",
          "The dividend paid by a commodity ETF",
          "A fee charged by exchanges for holding futures contracts",
        ],
        correctIndex: 1,
        explanation:
          "Roll yield isolates the return component that comes specifically from the mechanics of rolling a futures position forward, separate from any change in the commodity's spot price.",
      },
      {
        id: "q2",
        prompt: "What happens to roll yield for a long position when the futures curve is in backwardation?",
        choices: [
          "The roll yield is negative",
          "The roll yield is positive, since the position sells the higher-priced expiring contract and buys the cheaper further-dated one",
          "Backwardation has no effect on roll yield",
          "The position cannot be rolled at all during backwardation",
        ],
        correctIndex: 1,
        explanation:
          "In backwardation, further-dated contracts are cheaper, so rolling forward (selling high, buying low) produces a positive roll yield as the futures price rises toward spot over time.",
      },
      {
        id: "q3",
        prompt: "What happens to roll yield for a long position when the curve is in contango?",
        choices: [
          "The roll yield is positive",
          "The roll yield is negative, since the position repeatedly sells cheap (the expiring contract) and buys expensive (the further-dated contract)",
          "Contango guarantees a profit regardless of roll yield",
          "Contango has no relationship to roll yield",
        ],
        correctIndex: 1,
        explanation:
          "In contango, further-dated contracts are more expensive, so rolling forward involves selling the cheaper expiring contract and buying the pricier further-dated one — a drag on returns.",
      },
      {
        id: "q4",
        prompt: "How does a roll-yield strategy typically position itself across commodities?",
        choices: [
          "It holds every commodity equally regardless of curve shape",
          "It tilts toward commodities in backwardation (expecting positive roll yield) and avoids or shorts those in steep contango (expecting a roll-yield drag)",
          "It only trades commodities with a perfectly flat futures curve",
          "It ignores the shape of the futures curve entirely",
        ],
        correctIndex: 1,
        explanation:
          "The strategy explicitly targets the roll-yield component of return by ranking and positioning based on each commodity's curve shape.",
      },
      {
        id: "q5",
        prompt: "What has backwardation historically been linked to?",
        choices: [
          "Excess supply and low demand for a commodity",
          "Genuine physical scarcity or strong near-term demand, sometimes explained through the lens of \"hedging pressure\"",
          "Backwardation has no relationship to real-world physical market conditions",
          "A commodity being permanently out of production",
        ],
        correctIndex: 1,
        explanation:
          "Backwardation often reflects real supply/demand tightness or hedging pressure from producers, meaning a roll-yield strategy is partly a bet on underlying physical market conditions, not just a mechanical harvesting of curve shape.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "commodities-hedging-pressure",
    title: "Trading based on hedging pressure",
    summary: "Trading commodity futures based on the theory that producers' need to hedge future production systematically pushes down futures prices relative to expected future spot prices.",
    body: [
      { type: "heading", text: "The Hedging Pressure Hypothesis" },
      { type: "paragraph", text: "The hedging pressure hypothesis holds that commodity producers — farmers, miners, oil drillers — have a natural incentive to hedge their future production by selling futures contracts, locking in a price today for output they'll deliver later. This chronic selling pressure from producers, the theory goes, pushes futures prices somewhat below the level the market actually expects the spot price to be at expiration, creating a structural discount that a buyer of futures, someone willing to take the other side of the producers' hedging, can systematically capture." },
      { type: "heading", text: "How It Relates to Roll Yield" },
      { type: "paragraph", text: "This is closely related to, but conceptually distinct from, the roll-yield/backwardation-contango framework: while roll yield describes the return that results from a given curve shape, hedging pressure offers an economic explanation for why that curve shape exists in the first place — in commodities where producers dominate the hedging activity, systematic selling pressure from those producers is theorized to bias the futures curve toward backwardation, rewarding those willing to be the counterparty." },
      { type: "heading", text: "Where the Strategy Looks" },
      { type: "paragraph", text: "A trading strategy built on this idea looks for commodities where the hedging pressure story is strongest, often where a small number of producers are the dominant hedgers and speculators, like the futures buyers on the other side, are relatively scarce, and takes long futures positions in those markets, essentially acting as the counterparty that absorbs producers' hedging demand in exchange for the theorized structural premium." },
      { type: "heading", text: "When the Imbalance Reverses" },
      { type: "paragraph", text: "The main risk is that this producer-driven imbalance can shift or reverse — if consumers of a commodity, rather than producers, become the dominant hedgers in a particular market, locking in future purchase prices rather than sale prices, the hedging pressure can flip toward pushing futures prices up rather than down, and a strategy built on the assumption of persistent producer-driven backwardation can find itself systematically wrong-footed if that underlying market structure changes." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does the hedging pressure hypothesis claim about commodity producers?",
        choices: [
          "Producers have no incentive to use futures markets at all",
          "Producers have a natural incentive to sell futures contracts to hedge their future production, creating chronic selling pressure",
          "Producers always buy futures contracts rather than selling them",
          "Producers are legally required to avoid futures markets",
        ],
        correctIndex: 1,
        explanation:
          "The theory holds that producers hedge future output by selling futures, and this systematic selling pressure is theorized to push futures prices below expected future spot prices.",
      },
      {
        id: "q2",
        prompt: "How does hedging pressure relate to the roll-yield/backwardation-contango framework?",
        choices: [
          "The two concepts are completely unrelated",
          "Hedging pressure offers an economic explanation for why a given curve shape (like backwardation) exists in the first place, while roll yield describes the return that results from that shape",
          "Hedging pressure and roll yield are exactly the same concept",
          "Hedging pressure only applies to stock markets, not commodities",
        ],
        correctIndex: 1,
        explanation:
          "Roll yield is a mechanical description of the return from a curve shape, while hedging pressure is a proposed economic driver behind why that curve shape (often backwardation) tends to occur.",
      },
      {
        id: "q3",
        prompt: "In which commodities does the hedging pressure trading strategy look for the strongest opportunity?",
        choices: [
          "Commodities where producers and speculators are perfectly balanced",
          "Commodities where a small number of producers dominate hedging activity and speculators are relatively scarce",
          "Commodities with no futures market at all",
          "Only commodities that have never experienced any price volatility",
        ],
        correctIndex: 1,
        explanation:
          "The strategy targets markets where producer-driven selling pressure is likely strongest relative to the speculative capital available to absorb it, theorizing a larger structural premium in those cases.",
      },
      {
        id: "q4",
        prompt: "What position does a hedging-pressure strategy typically take in the identified markets?",
        choices: [
          "Short futures positions, betting prices will fall further",
          "Long futures positions, acting as the counterparty that absorbs producers' hedging demand",
          "No position at all — the strategy only observes hedging activity",
          "A position in the commodity's underlying equity, not its futures",
        ],
        correctIndex: 1,
        explanation:
          "The strategy goes long futures to be the counterparty for producers' hedging-driven selling, aiming to capture the theorized structural discount.",
      },
      {
        id: "q5",
        prompt: "What is the main risk to a hedging-pressure strategy?",
        choices: [
          "There is no risk once the strategy is implemented",
          "The producer-driven imbalance can shift or reverse if consumers become the dominant hedgers instead, flipping the pressure in the opposite direction",
          "Hedging pressure is fixed permanently and can never change for any commodity",
          "The strategy requires taking on unlimited physical delivery risk",
        ],
        correctIndex: 1,
        explanation:
          "If the underlying market structure changes — for example, consumers rather than producers becoming the dominant hedgers — the theorized bias in futures pricing can reverse, working against a strategy built on the original assumption.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "commodities-portfolio-diversification",
    title: "Portfolio diversification with commodities",
    summary: "Adding commodities to a traditional stock-and-bond portfolio for their historically low correlation to those asset classes, aiming to improve overall portfolio risk-adjusted return.",
    body: [
      { type: "heading", text: "Why Commodities Diversify a Portfolio" },
      { type: "paragraph", text: "Commodities as an asset class have historically shown relatively low correlation to traditional stocks and bonds — their prices are driven by different underlying factors, supply and demand for physical goods, weather, geopolitical events affecting production, than what drives equity or fixed-income returns. This low correlation is the core rationale for including commodities in a broader portfolio: even if commodities themselves don't have a spectacular standalone return, their diversification benefit can improve the overall portfolio's risk-adjusted return by smoothing out periods when stocks and bonds are both struggling." },
      { type: "heading", text: "Implementing a Broad Allocation" },
      { type: "paragraph", text: "A commodities allocation is often implemented via a broad, diversified index or basket spanning multiple commodity sectors — energy, metals, agriculture, livestock — rather than concentrating in just one or two commodities, since a diversified commodities basket itself captures a more stable, \"asset class\" level exposure rather than being dominated by the idiosyncratic behavior of any single commodity." },
      { type: "heading", text: "A Hedge Against Inflation" },
      { type: "paragraph", text: "One historically notable property of commodities is their tendency to perform relatively well during periods of unexpected inflation, when stocks and bonds have often both struggled — commodity prices, being tied to the physical cost of goods, can rise alongside broad price increases in the economy in a way that fixed-coupon bonds and equities, whose cash flows aren't automatically inflation-linked, generally do not, making commodities a potential inflation hedge as part of a diversified portfolio." },
      { type: "heading", text: "The Roll-Yield Tradeoff" },
      { type: "paragraph", text: "The tradeoffs include that commodities futures-based exposure carries the same roll-yield dynamics discussed elsewhere in this course — a diversified commodities allocation held via futures can suffer a persistent contango drag over long periods, which has sometimes made commodities' standalone long-run returns disappointing even when their diversification benefit during specific stress periods has been real, meaning the case for commodities in a portfolio rests more on their correlation properties than on a strong expectation of high standalone returns." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What is the core rationale for including commodities in a broader stock-and-bond portfolio?",
        choices: [
          "Commodities have historically had the highest standalone returns of any asset class",
          "Commodities have historically shown relatively low correlation to stocks and bonds, offering a diversification benefit",
          "Commodities are always risk-free investments",
          "Commodities guarantee a fixed annual return",
        ],
        correctIndex: 1,
        explanation:
          "The main case for commodities in a portfolio is their low correlation to traditional asset classes, which can improve overall risk-adjusted return by smoothing out periods when stocks and bonds both struggle.",
      },
      {
        id: "q2",
        prompt: "How is a commodities allocation typically implemented for diversification purposes?",
        choices: [
          "By concentrating entirely in a single commodity, like gold",
          "Via a broad, diversified index or basket spanning multiple commodity sectors like energy, metals, and agriculture",
          "By avoiding commodities futures entirely",
          "By only holding physical commodities directly in storage",
        ],
        correctIndex: 1,
        explanation:
          "A diversified basket across multiple sectors captures more stable, asset-class-level exposure rather than being dominated by any single commodity's idiosyncratic behavior.",
      },
      {
        id: "q3",
        prompt: "During what kind of economic environment have commodities historically tended to perform relatively well?",
        choices: [
          "Periods of deflation",
          "Periods of unexpected inflation, when stocks and bonds have often both struggled",
          "Commodities have no relationship to inflation whatsoever",
          "Only during periods of zero economic growth",
        ],
        correctIndex: 1,
        explanation:
          "Because commodity prices are tied to the physical cost of goods, they can rise alongside broad inflation in a way that fixed-coupon bonds and equities generally don't, making commodities a potential inflation hedge.",
      },
      {
        id: "q4",
        prompt: "What dynamic can create a drag on returns for a futures-based commodities allocation?",
        choices: [
          "Commodities futures never experience any roll-related effects",
          "A persistent contango environment, which produces a roll-yield drag over long periods",
          "Diversification itself directly reduces returns",
          "Commodities futures cannot be held for more than one day",
        ],
        correctIndex: 1,
        explanation:
          "Since commodities exposure via futures involves rolling contracts, a persistently contango curve can create an ongoing drag on returns, separate from the commodity's own price direction.",
      },
      {
        id: "q5",
        prompt: "What does the case for commodities in a portfolio primarily rest on?",
        choices: [
          "A strong expectation of high standalone returns",
          "Their correlation properties and diversification benefit, more than an expectation of high standalone returns",
          "Commodities being completely risk-free",
          "Commodities always outperforming stocks and bonds in any given year",
        ],
        correctIndex: 1,
        explanation:
          "Given the potential roll-yield drag and historically disappointing long-run standalone returns for some periods, the strongest argument for commodities in a portfolio is their low correlation and diversification value, not necessarily strong returns on their own.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "commodities-value",
    title: "Value",
    summary: "Buying commodities that are cheap relative to their own long-run historical price level, on the premise that commodity prices tend to mean-revert over long horizons.",
    body: [
      { type: "heading", text: "Comparing Price to Its Own History" },
      { type: "paragraph", text: "Applied to commodities, a value strategy compares a commodity's current price to some measure of its own long-run historical average or fundamental level — commonly a moving average computed over a long window, like five years — and favors commodities trading cheap relative to that long-run reference point, on the premise that commodity prices exhibit some tendency to mean-revert toward their historical norms over long horizons, even though they can deviate substantially in the short and medium term." },
      { type: "heading", text: "Different From Equity Value" },
      { type: "paragraph", text: "This differs from the equity value factor, which typically compares price to a fundamental accounting measure like earnings or book value — commodities don't have earnings or book value in the same sense, so a commodity value signal instead usually relies on the commodity's own price history as the reference point, essentially asking \"is this commodity cheap relative to where it has typically traded,\" rather than \"is this commodity cheap relative to some external fundamental measure.\"" },
      { type: "heading", text: "Anchored by Production Costs" },
      { type: "paragraph", text: "The economic rationale is that commodity prices are ultimately anchored by the cost of production and long-run supply-and-demand balance — if a commodity's price falls persistently below what it costs to produce, some producers will eventually cut back supply, pushing the price back up over time, and if price rises persistently far above production costs, new supply tends to eventually enter the market and push it back down, giving commodity prices a long-run gravitational pull toward levels related to production economics." },
      { type: "heading", text: "When \"Cheap\" Doesn't Revert" },
      { type: "paragraph", text: "As with any mean-reversion approach, the central risk is that a \"cheap\" commodity doesn't always revert — a sustained shift in a commodity's underlying supply-and-demand fundamentals, a permanent decline in demand due to a technology or substitution shift, for example, can mean a commodity that looks statistically cheap relative to its own history stays cheap indefinitely, or even gets cheaper, because the old \"normal\" price level no longer reflects the new underlying reality." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does a commodities value strategy typically compare a commodity's current price to?",
        choices: [
          "A completely unrelated commodity's price",
          "A measure of the commodity's own long-run historical average or fundamental level, such as a multi-year moving average",
          "The commodity's price exactly one day ago",
          "The price of gold specifically, regardless of the commodity being analyzed",
        ],
        correctIndex: 1,
        explanation:
          "Since commodities lack earnings or book value, value strategies typically compare current price to the commodity's own historical price level, often via a long-window moving average.",
      },
      {
        id: "q2",
        prompt: "How does a commodities value signal differ from the equity value factor?",
        choices: [
          "They are identical in every respect",
          "Equity value typically compares price to a fundamental accounting measure like earnings or book value, while commodity value relies on the commodity's own price history since it lacks those metrics",
          "Commodities value strategies never use any historical data",
          "Equity value strategies never use accounting measures",
        ],
        correctIndex: 1,
        explanation:
          "Commodities don't have earnings or book value, so a value signal for them is built differently — around the commodity's own historical price level rather than an external fundamental measure.",
      },
      {
        id: "q3",
        prompt: "What is the economic rationale for commodity price mean-reversion?",
        choices: [
          "Commodity prices are set entirely by government regulation",
          "Prices are anchored by production costs and supply-and-demand balance — persistently low prices can cut supply and push prices back up, while persistently high prices attract new supply that pushes prices back down",
          "Commodity prices never change once set",
          "There is no economic rationale for commodity mean-reversion",
        ],
        correctIndex: 1,
        explanation:
          "The idea is that production economics create a long-run gravitational pull on commodity prices — when prices deviate too far from what production costs would suggest, supply responses tend to eventually correct the deviation.",
      },
      {
        id: "q4",
        prompt: "What is the central risk of a commodities value (mean-reversion) strategy?",
        choices: [
          "There is no risk once a commodity is identified as cheap",
          "A sustained shift in underlying supply-and-demand fundamentals can mean a \"cheap\" commodity stays cheap indefinitely, or gets cheaper, rather than reverting",
          "Commodity prices are guaranteed to always revert within one year",
          "The strategy only works for precious metals",
        ],
        correctIndex: 1,
        explanation:
          "If a commodity's underlying fundamentals genuinely shift — such as a permanent decline in demand — the old historical \"normal\" price may no longer be relevant, and the commodity may not revert as the strategy assumes.",
      },
      {
        id: "q5",
        prompt: "What can happen if demand for a commodity permanently declines due to a technology or substitution shift?",
        choices: [
          "The commodity's price is guaranteed to revert to its old historical average",
          "A commodity that looks statistically cheap relative to its old history can stay cheap indefinitely, since the old \"normal\" no longer reflects the new reality",
          "The commodity immediately becomes more expensive",
          "Technology shifts have no effect on commodity prices",
        ],
        correctIndex: 1,
        explanation:
          "A structural change in demand undermines the assumption that historical price levels remain a meaningful reference point, which is exactly the scenario that breaks a naive mean-reversion value signal.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "commodities-skewness-premium",
    title: "Skewness premium",
    summary: "Selling commodities (or commodity options) with a history of positively skewed returns — occasional large spikes — to collect the premium investors pay for lottery-like upside exposure.",
    body: [
      { type: "heading", text: "What Positive Skew Looks Like" },
      { type: "paragraph", text: "Some commodities have historically exhibited positively skewed return distributions — most of the time, prices move in relatively small, unremarkable increments, but occasionally a commodity experiences a sharp, large price spike, often driven by a sudden supply disruption, extreme weather, or a geopolitical shock, producing a return distribution with a long right tail of infrequent but large gains. This pattern is common in commodities exposed to acute supply-shock risk, such as natural gas around extreme weather events, or agricultural commodities around harvest failures." },
      { type: "heading", text: "The Lottery-Ticket Premise" },
      { type: "paragraph", text: "The skewness premium strategy is built on the idea that investors have a behavioral preference for holding assets with this \"lottery-like\" positive skew, similar to how people are often willing to overpay for a lottery ticket with a small chance of a large payoff, which can lead to these commodities' futures, or their options, trading at prices that overstate their true expected value, since buyers are willing to pay up for the small chance of catching a big spike." },
      { type: "heading", text: "Harvesting the Premium" },
      { type: "paragraph", text: "A strategy harvesting this premium typically takes the other side, selling futures or options in commodities with a strong history of positive skew, collecting a premium from investors seeking that lottery-like exposure, betting that most of the time, the \"normal\" scenario without a spike, the position profits from the premium collected, even though it will occasionally suffer a large loss when the rare spike scenario actually occurs." },
      { type: "heading", text: "Why Diversification Matters Here" },
      { type: "paragraph", text: "This risk profile, collecting a steady premium most of the time in exchange for occasional sharp losses when the rare, large event materializes, is structurally similar to other insurance-like, premium-selling strategies covered elsewhere in this course, and the same discipline applies: position sizing and diversification across multiple, ideally uncorrelated, skewed commodities matters, since the strategy's edge depends on surviving the inevitable spike events rather than being wiped out by concentrating too much risk in any single one." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does a positively skewed return distribution mean for a commodity?",
        choices: [
          "Prices move by the exact same amount every single day",
          "Most price moves are small and unremarkable, but occasionally there's a sharp, large price spike, producing a long right tail of infrequent large gains",
          "The commodity's price only ever falls, never rises",
          "The commodity has no price volatility whatsoever",
        ],
        correctIndex: 1,
        explanation:
          "Positive skew describes a distribution where typical moves are modest but there's an occasional large upside spike, often driven by supply shocks or extreme events.",
      },
      {
        id: "q2",
        prompt: "What behavioral tendency does the skewness premium strategy rely on?",
        choices: [
          "Investors always prefer assets with guaranteed, steady returns",
          "Investors have a preference for holding \"lottery-like\" assets with positive skew, similar to overpaying for a lottery ticket with a small chance of a large payoff",
          "Investors never pay attention to a commodity's historical return distribution",
          "Investors always avoid any commodity with any volatility",
        ],
        correctIndex: 1,
        explanation:
          "The strategy is premised on the idea that investors are willing to pay a premium for the small chance of a large positive spike, similar to lottery-ticket-buying behavior.",
      },
      {
        id: "q3",
        prompt: "How does a strategy harvest the skewness premium?",
        choices: [
          "By buying futures or options in commodities with a strong history of positive skew",
          "By selling futures or options in commodities with a strong history of positive skew, collecting a premium from investors seeking that exposure",
          "By avoiding all commodities with any historical skew",
          "By holding only commodities with perfectly symmetric return distributions",
        ],
        correctIndex: 1,
        explanation:
          "The strategy takes the other side of the lottery-like demand, selling exposure to collect the premium buyers are willing to pay for the chance of a large spike.",
      },
      {
        id: "q4",
        prompt: "What is the risk profile of a skewness-premium-selling strategy?",
        choices: [
          "Guaranteed steady returns with no possibility of loss",
          "Collecting a steady premium most of the time, with occasional sharp losses when the rare, large spike event actually occurs",
          "Large losses every single trading day",
          "The strategy has no relationship to the commodity's actual price behavior",
        ],
        correctIndex: 1,
        explanation:
          "Like other premium-selling strategies, this one profits steadily in the \"normal\" scenario but suffers when the rare, large event the premium was compensating for actually materializes.",
      },
      {
        id: "q5",
        prompt: "Why does diversification across multiple uncorrelated skewed commodities matter for this strategy?",
        choices: [
          "Diversification has no effect on the strategy's risk",
          "Because the strategy's long-run edge depends on surviving the inevitable spike events rather than being wiped out by concentrating too much risk in any single commodity",
          "Diversification guarantees the strategy will never experience a loss",
          "Diversification eliminates the skewness premium entirely",
        ],
        correctIndex: 1,
        explanation:
          "Since any single commodity can experience its rare spike event at any time, spreading exposure across several uncorrelated skewed commodities reduces the risk of a single event wiping out the accumulated premium.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "commodities-trading-with-pricing-models",
    title: "Trading with pricing models",
    summary: "Using a fundamentals-based model of a commodity's supply, demand, and cost structure to estimate fair value, trading when the market price deviates meaningfully from that model's output.",
    body: [
      { type: "heading", text: "Building a Fundamentals Model" },
      { type: "paragraph", text: "Rather than relying purely on price patterns, curve shape, or statistical relationships, a pricing-model-based commodities strategy builds an explicit model of the fundamental drivers behind a commodity's price — factors like production costs, inventory levels, supply and demand balances, weather patterns for agricultural commodities, and other structural inputs — to estimate what the commodity's \"fair value\" should be, and compares that model output to the actual market price." },
      { type: "heading", text: "Trading the Deviation" },
      { type: "paragraph", text: "When the market price deviates meaningfully from the model's fair-value estimate, the strategy takes a position betting the gap will close — buying when the market price sits well below the model's estimate, selling or shorting when it sits well above — on the premise that persistent, large deviations from fundamentally-justified levels tend to correct over time as the market eventually reflects the underlying supply-and-demand reality the model is capturing." },
      { type: "heading", text: "Why It's Commodity-Specific" },
      { type: "paragraph", text: "Building and maintaining a good pricing model requires deep domain expertise in the specific commodity being modeled — the relevant fundamental drivers, and how they map to price, differ substantially across commodity types, an oil model depends heavily on OPEC production decisions and global demand trends, while an agricultural model depends heavily on planting decisions, weather, and harvest yields, which means this approach tends to be commodity-specific and research-intensive rather than a single generic framework applied uniformly across many different commodities." },
      { type: "heading", text: "The Risk of a Wrong Model" },
      { type: "paragraph", text: "The central risk is model risk itself: a fundamentals-based pricing model is only as good as the data and assumptions that go into it, and a model that's missing an important driver, or one built on outdated assumptions about the commodity's supply-and-demand structure, can produce a fair-value estimate that's simply wrong — leading the strategy to bet against a price move that actually reflects a real, fundamentally-justified shift the model failed to capture, rather than a genuine market mispricing." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does a pricing-model-based commodities strategy build to estimate fair value?",
        choices: [
          "A purely statistical model based only on past price patterns",
          "An explicit model of fundamental drivers like production costs, inventory levels, supply and demand balances, and other structural inputs",
          "A model based entirely on unrelated stock market data",
          "No model at all — the strategy trades randomly",
        ],
        correctIndex: 1,
        explanation:
          "This approach is built on modeling the actual fundamental drivers behind a commodity's price, rather than relying purely on price patterns or curve shape.",
      },
      {
        id: "q2",
        prompt: "What does the strategy do when the market price sits well below the model's fair-value estimate?",
        choices: [
          "Sell or short the commodity",
          "Buy the commodity, betting the price will converge up toward the model's estimate",
          "Take no action regardless of the deviation",
          "Immediately liquidate all related positions",
        ],
        correctIndex: 1,
        explanation:
          "A market price well below the modeled fair value is treated as a buying opportunity, betting the gap will close as the market eventually reflects the underlying fundamentals.",
      },
      {
        id: "q3",
        prompt: "Why does building a good pricing model typically require deep, commodity-specific domain expertise?",
        choices: [
          "Because all commodities share an identical set of fundamental price drivers",
          "Because the relevant fundamental drivers differ substantially across commodity types — for example, oil depends on OPEC decisions while agricultural commodities depend on weather and harvest yields",
          "Because pricing models never actually require any domain knowledge",
          "Because commodities have no fundamental drivers at all",
        ],
        correctIndex: 1,
        explanation:
          "Since different commodities are driven by very different fundamental factors, a good pricing model tends to be commodity-specific and research-intensive rather than a single generic framework.",
      },
      {
        id: "q4",
        prompt: "What is the central risk of a pricing-model-based trading strategy?",
        choices: [
          "There is no risk once a model is built",
          "Model risk — the model may be missing an important driver or built on outdated assumptions, producing a fair-value estimate that's simply wrong",
          "The strategy can only ever be profitable, never unprofitable",
          "Pricing models eliminate the need for any commodity-specific knowledge",
        ],
        correctIndex: 1,
        explanation:
          "A flawed or outdated model can produce an incorrect fair-value estimate, leading the strategy to bet against a price move that actually reflects a real fundamental shift the model failed to capture.",
      },
      {
        id: "q5",
        prompt: "What could happen if a model fails to capture an important driver behind a real fundamental shift in a commodity's price?",
        choices: [
          "The strategy would automatically recognize the mistake and avoid trading",
          "The strategy could bet against a price move that actually reflects a real, fundamentally-justified change, rather than a genuine market mispricing",
          "The model would immediately correct itself without any changes needed",
          "This scenario has no effect on the strategy's performance",
        ],
        correctIndex: 1,
        explanation:
          "If the model is missing a real driver, it can produce a fair-value estimate that no longer reflects reality, causing the strategy to trade against a legitimate price move rather than a true mispricing.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "commodities-what-is-a-commodity",
    title: "What Is a Commodity?",
    summary:
      "A raw, standardized economic good — interchangeable unit for unit — that's why a bushel of wheat from one farm can trade against a bushel from another as if they were identical.",
    body: [
      { type: "heading", text: "A Raw, Basic Economic Good" },
      { type: "paragraph", text: "A commodity is a raw or primary economic good — something extracted, grown, or minimally processed, rather than a finished, branded product. Crude oil, wheat, copper, and gold are all commodities; a car or a smartphone, built from many processed inputs and sold on brand and features, is not." },
      { type: "heading", text: "Fungibility: The Defining Property" },
      { type: "paragraph", text: "What makes something tradable as a commodity is fungibility: one unit has to be functionally interchangeable with another unit of the same grade, regardless of who produced it. A barrel of a given crude oil grade from one producer is treated as identical to a barrel of the same grade from another — unlike, say, two different companies' stocks, which are never interchangeable with each other." },
      { type: "heading", text: "Major Commodity Categories" },
      { type: "paragraph", text: "Commodities are typically grouped into a few broad categories: energy (crude oil, natural gas), metals (gold, silver, copper), and agriculture (wheat, corn, soybeans, livestock) — each category driven by a different mix of supply, demand, and seasonal factors, even though they share the same basic fungibility property that makes standardized trading possible." },
      { type: "heading", text: "Why Standardization Matters" },
      { type: "paragraph", text: "Because commodities are fungible, an exchange can define one standardized contract, specifying exact grade, quantity, and delivery terms, as already covered in this course's Futures Basics module, and have that single contract represent countless individual producers' output. That standardization is precisely what allows deep, liquid commodity futures markets to exist in the first place." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What is a commodity?",
        choices: [
          "A raw or primary economic good, extracted, grown, or minimally processed, rather than a finished branded product",
          "Any manufactured product sold under a specific brand name",
          "A type of company stock",
          "A government-issued bond",
        ],
        correctIndex: 0,
        explanation:
          "Commodities are basic, raw goods like oil, wheat, or copper — in contrast to finished, differentiated products like a car or a smartphone.",
      },
      {
        id: "q2",
        prompt: "What does fungibility mean in the context of a commodity?",
        choices: [
          "One unit of a given grade is functionally interchangeable with another unit of the same grade, regardless of producer",
          "Every commodity is completely unique and cannot be compared to another unit",
          "Fungibility only applies to precious metals",
          "Fungibility means a commodity can never be traded on an exchange",
        ],
        correctIndex: 0,
        explanation:
          "Fungibility is the defining property that lets standardized units of a commodity trade interchangeably, unlike differentiated goods or individual company stocks.",
      },
      {
        id: "q3",
        prompt: "What are the three broad commodity categories mentioned in this lesson?",
        choices: [
          "Energy, metals, and agriculture",
          "Stocks, bonds, and cash",
          "Technology, healthcare, and financials",
          "Domestic, international, and emerging markets",
        ],
        correctIndex: 0,
        explanation:
          "Energy (like crude oil), metals (like gold), and agriculture (like wheat) are the standard broad groupings used to organize commodities.",
      },
      {
        id: "q4",
        prompt: "Why does fungibility matter for how commodities are traded?",
        choices: [
          "It's what allows an exchange to define one standardized contract representing countless individual producers' output",
          "Fungibility has no relationship to how commodities are traded",
          "Fungibility only matters for over-the-counter trades, never exchange trading",
          "Fungibility means every commodity trades at exactly the same price",
        ],
        correctIndex: 0,
        explanation:
          "Because units are interchangeable, a single standardized contract can represent any producer's output of that grade, which is what enables deep, liquid futures markets.",
      },
      {
        id: "q5",
        prompt: "How does a smartphone differ from a commodity like crude oil?",
        choices: [
          "A smartphone is a finished, differentiated product built from many processed inputs, not a raw, fungible good",
          "A smartphone is actually a commodity, just like crude oil",
          "There is no meaningful difference between the two",
          "Smartphones are fungible in the exact same way crude oil is",
        ],
        correctIndex: 0,
        explanation:
          "A smartphone is sold on brand, features, and differentiation, the opposite of a fungible, interchangeable raw good like crude oil.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "commodities-how-commodities-are-traded",
    title: "How Commodities Are Traded",
    summary:
      "Why most commodity exposure runs through standardized futures contracts rather than owning barrels of oil or bushels of wheat directly.",
    body: [
      { type: "heading", text: "The Spot Market" },
      { type: "paragraph", text: "The spot market is where a commodity is bought or sold for immediate (or near-immediate) delivery, at today's price — the market that producers, refiners, and end users transact in when they actually need the physical commodity itself, right now." },
      { type: "heading", text: "Why Futures, Not Physical Ownership" },
      { type: "paragraph", text: "For an investor or trader without any actual use for physical barrels of oil or bushels of wheat, taking on the storage, insurance, and transport that come with owning the physical commodity is entirely impractical. Futures contracts, covered in depth in this course's Futures Basics module, let a trader gain price exposure to a commodity without ever touching the physical good itself." },
      { type: "heading", text: "Closing Out Before Delivery" },
      { type: "paragraph", text: "As covered in Futures Basics, the overwhelming majority of commodity futures positions are closed out with an offsetting trade well before the contract's delivery window, specifically so a speculative trader never actually has to deal with taking or making physical delivery — only commercial participants who actually want the physical commodity typically carry a contract through to delivery." },
      { type: "heading", text: "Other Ways to Get Commodity Exposure" },
      { type: "paragraph", text: "Beyond trading futures directly, investors can get commodity exposure through commodity-linked ETFs (which themselves typically hold futures rather than physical barrels or bushels, aside from a few exceptions like certain gold funds), or through the stocks of companies whose businesses are tied to a commodity's price, such as an oil producer or a mining company — an indirect, imperfect substitute that also carries that company's own business risk." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What is the spot market?",
        choices: [
          "Where a commodity is bought or sold for immediate delivery at today's price",
          "A market that only trades commodities scheduled for delivery a year from now",
          "A market exclusively for commodity futures contracts",
          "A market where only governments can transact",
        ],
        correctIndex: 0,
        explanation:
          "The spot market handles immediate, physical transactions — where producers, refiners, and end users actually exchange the commodity itself for current delivery.",
      },
      {
        id: "q2",
        prompt: "Why do most investors and traders use futures rather than owning the physical commodity directly?",
        choices: [
          "Storage, insurance, and transport of a physical commodity are impractical for someone without an actual use for it",
          "Futures contracts are illegal to trade for anyone other than producers",
          "Physical ownership is always cheaper than futures",
          "There is no difference between owning physical commodities and trading futures",
        ],
        correctIndex: 0,
        explanation:
          "The practical burdens of storing and transporting a physical commodity make futures the natural way for most traders to gain price exposure without that operational hassle.",
      },
      {
        id: "q3",
        prompt: "What happens to most commodity futures positions before the delivery window arrives?",
        choices: [
          "They're closed out with an offsetting trade, avoiding physical delivery entirely",
          "Every position is automatically converted into a physical delivery",
          "Positions are frozen and cannot be traded at all",
          "All positions are cancelled by the exchange",
        ],
        correctIndex: 0,
        explanation:
          "As covered in Futures Basics, speculative positions are overwhelmingly closed out before delivery, leaving physical delivery mainly to commercial participants who actually want the commodity.",
      },
      {
        id: "q4",
        prompt: "How do most commodity-linked ETFs typically gain their exposure?",
        choices: [
          "By holding futures contracts, rather than the physical commodity itself, aside from a few exceptions",
          "By storing physical barrels of oil in a warehouse for every fund",
          "Commodity ETFs never actually track commodity prices",
          "By directly owning mining and drilling operations",
        ],
        correctIndex: 0,
        explanation:
          "Most commodity ETFs replicate exposure through futures contracts rather than physical storage, with a handful of exceptions like certain physically-backed gold funds.",
      },
      {
        id: "q5",
        prompt: "What extra risk comes with getting commodity exposure through a company's stock, like an oil producer, instead of futures?",
        choices: [
          "That company's own business-specific risk, on top of the underlying commodity's price risk",
          "Stocks provide a purer, more direct commodity exposure than futures",
          "There is no additional risk from using a company's stock",
          "Stock-based commodity exposure eliminates all price risk",
        ],
        correctIndex: 0,
        explanation:
          "A commodity producer's stock is an indirect, imperfect substitute — its price reflects the company's overall business risk, not just the commodity's price alone.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "commodities-contango-and-backwardation",
    title: "Contango and Backwardation",
    summary:
      "Why commodity futures curves so often slope in one particular direction — and the storage-cost and convenience-yield forces that explain why.",
    body: [
      { type: "heading", text: "Two Curve Shapes" },
      { type: "paragraph", text: "As introduced elsewhere in this course, a commodity's futures curve can sit in contango, where further-dated contracts are priced higher than near-dated ones, or in backwardation, where further-dated contracts are priced lower — this lesson focuses specifically on why commodities, more than other asset classes, tend to show one or the other so persistently." },
      { type: "heading", text: "Storage Costs Push Toward Contango" },
      { type: "paragraph", text: "Physically storing a commodity until a later delivery date costs real money — warehousing, insurance, and for some commodities, spoilage risk. Those costs get built directly into the futures price for later-dated contracts, pushing the curve toward contango, all else equal, since a later contract has to compensate for a longer stretch of storage costs." },
      { type: "heading", text: "Convenience Yield Pushes Toward Backwardation" },
      { type: "paragraph", text: "Working in the opposite direction is convenience yield: the real benefit of holding the physical commodity right now rather than a promise of future delivery, which becomes especially valuable when current supply is tight and a business genuinely needs the commodity on hand to keep operating. A high convenience yield can outweigh storage costs entirely, pulling the curve into backwardation." },
      { type: "heading", text: "Why This Differs From Financial Futures" },
      { type: "paragraph", text: "This tug-of-war between storage cost and convenience yield is specific to physical commodities — a financial futures contract, like one on a stock index, has no storage cost and no convenience yield, since there's nothing physical to store or find useful to have on hand, which is exactly why commodity curves behave so differently, and are so much more variable, than financial futures curves." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does it mean for a commodity futures curve to be in contango?",
        choices: [
          "Further-dated contracts are priced higher than near-dated ones",
          "Further-dated contracts are priced lower than near-dated ones",
          "All contracts are priced identically regardless of maturity",
          "The commodity cannot be traded via futures at all",
        ],
        correctIndex: 0,
        explanation:
          "Contango describes a curve where later-dated contracts cost more than near-dated ones, in contrast to backwardation, where the opposite holds.",
      },
      {
        id: "q2",
        prompt: "How do storage costs push a commodity's futures curve toward contango?",
        choices: [
          "The cost of storing the commodity until a later date gets built into later contracts' prices, pushing them higher",
          "Storage costs have no effect on futures pricing",
          "Storage costs only affect the spot price, never futures prices",
          "Storage costs always push the curve into backwardation instead",
        ],
        correctIndex: 0,
        explanation:
          "Physically holding a commodity until a later delivery date costs money, and that cost is reflected in a higher price for later-dated contracts — the classic driver of contango.",
      },
      {
        id: "q3",
        prompt: "What is convenience yield, and how does it affect the futures curve?",
        choices: [
          "The benefit of holding the physical commodity right now, which can pull the curve into backwardation when it's high",
          "A fee charged for storing a commodity",
          "It only applies to financial futures, never physical commodities",
          "Convenience yield always pushes the curve toward contango",
        ],
        correctIndex: 0,
        explanation:
          "When having the physical commodity on hand right now is especially valuable, that convenience yield can outweigh storage costs and pull the curve into backwardation.",
      },
      {
        id: "q4",
        prompt: "Why don't financial futures, like stock index futures, experience the same contango/backwardation dynamics from storage and convenience yield?",
        choices: [
          "There's no physical asset to store and no convenience benefit to holding it right now, since it's not a physical good",
          "Financial futures always trade in backwardation for unrelated reasons",
          "Financial futures curves behave in exactly the same way as commodity curves",
          "Stock index futures have higher storage costs than physical commodities",
        ],
        correctIndex: 0,
        explanation:
          "The storage-cost and convenience-yield forces are specific to physical goods — a financial futures contract has neither, which is why its curve behaves differently.",
      },
      {
        id: "q5",
        prompt: "What happens when convenience yield outweighs storage costs?",
        choices: [
          "The curve can be pulled into backwardation",
          "The curve is always pushed further into contango",
          "The futures contract stops trading entirely",
          "Storage costs and convenience yield can never offset each other",
        ],
        correctIndex: 0,
        explanation:
          "When the benefit of holding the physical commodity now outweighs the cost of storing it for later delivery, the curve tends toward backwardation rather than contango.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "commodities-supply-demand-and-prices",
    title: "Supply, Demand, and Commodity Prices",
    summary:
      "The fundamental forces — production, weather, geopolitics, and inventories — that drive commodity prices, and why they hit commodities differently than other asset classes.",
    body: [
      { type: "heading", text: "Production and Supply Shocks" },
      { type: "paragraph", text: "A commodity's supply depends on how much is actually being produced — pumped, mined, or harvested — at any given time, and that supply can be disrupted suddenly by events like a mine closure, a pipeline outage, or a major producing country's political instability, often causing sharp, fast price moves that a slower-moving stock or bond market wouldn't experience from a comparable event." },
      { type: "heading", text: "Weather and Seasonality" },
      { type: "paragraph", text: "Agricultural commodities in particular are exposed to weather directly — a drought, flood, or early frost can meaningfully cut a harvest's size, and energy commodities like natural gas see strong seasonal demand swings tied to heating and cooling needs across the year, giving many commodities a recurring, seasonal pattern that few other asset classes share." },
      { type: "heading", text: "Geopolitical Risk" },
      { type: "paragraph", text: "Because commodity production is often concentrated in a relatively small number of countries or regions, geopolitical events — sanctions, conflict, export restrictions — can have an outsized effect on global supply and price, a channel that's especially pronounced in energy and certain metals markets." },
      { type: "heading", text: "Inventory Levels" },
      { type: "paragraph", text: "Reported inventory levels — how much of a commodity is currently sitting in storage — are closely watched as a real-time signal of the balance between supply and demand: unusually low inventories tend to signal tight supply and support higher prices (and often backwardation), while unusually high inventories tend to signal oversupply and pressure prices lower (and often contango)." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Why can commodity supply shocks cause sharper, faster price moves than comparable events in other markets?",
        choices: [
          "Sudden disruptions like a mine closure or pipeline outage can immediately cut available supply in a way slower-moving markets don't experience",
          "Commodity markets are immune to any kind of price shock",
          "Supply shocks only ever affect the stock market, never commodities",
          "Commodity prices never actually respond to supply changes",
        ],
        correctIndex: 0,
        explanation:
          "Because commodity supply can be disrupted suddenly and directly, price reactions can be sharper and faster than in markets less tied to physical production events.",
      },
      {
        id: "q2",
        prompt: "How does weather specifically affect agricultural commodities?",
        choices: [
          "Events like droughts, floods, or early frosts can meaningfully cut a harvest's size",
          "Weather has no effect on agricultural commodity prices",
          "Weather only affects energy commodities, never agriculture",
          "Weather effects are identical across every commodity category",
        ],
        correctIndex: 0,
        explanation:
          "Agricultural commodities are directly exposed to growing-season weather, which can significantly reduce supply through a poor harvest.",
      },
      {
        id: "q3",
        prompt: "Why does geopolitical risk have an outsized effect on some commodity markets?",
        choices: [
          "Commodity production is often concentrated in a relatively small number of countries or regions",
          "Geopolitical events have no relationship to commodity prices",
          "Commodities are the only asset class immune to geopolitical risk",
          "Geopolitical risk only affects agricultural commodities",
        ],
        correctIndex: 0,
        explanation:
          "Because production is often geographically concentrated, disruptions from sanctions, conflict, or export restrictions in those regions can meaningfully affect global supply and price.",
      },
      {
        id: "q4",
        prompt: "What do unusually low commodity inventory levels tend to signal?",
        choices: [
          "Tight supply, often supporting higher prices and backwardation",
          "Oversupply and falling prices",
          "Inventory levels have no relationship to prices or curve shape",
          "A guaranteed price crash",
        ],
        correctIndex: 0,
        explanation:
          "Low inventories typically signal a tight supply-demand balance, which tends to support prices and can push the futures curve toward backwardation.",
      },
      {
        id: "q5",
        prompt: "Why do energy commodities like natural gas show strong seasonal demand patterns?",
        choices: [
          "Demand swings with heating and cooling needs across the year",
          "Energy commodities have no seasonal demand pattern at all",
          "Seasonal patterns only apply to agricultural commodities",
          "Natural gas demand is constant year-round with no variation",
        ],
        correctIndex: 0,
        explanation:
          "Heating and cooling needs create recurring, predictable seasonal swings in energy demand that show up as a repeating pattern few other asset classes share.",
      },
    ],
  },
];
