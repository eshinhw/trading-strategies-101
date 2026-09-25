import type { ConceptLesson } from "./types.js";

// Concept-lesson format, same reasoning as the other non-options courses —
// these are hybrid-security valuation and issuance concepts, not
// option-payoff structures built from the standard Strategy params/payoff
// engine, so prose + a knowledge-check quiz fits better here.
export const convertiblesConceptLessons: ConceptLesson[] = [
  {
    kind: "concept",
    slug: "convertibles-what-is-a-convertible-bond",
    title: "The convertible bond",
    summary:
      "A hybrid security — a bond that gives its holder the right to convert it into a fixed number of the issuer's shares, blending fixed-income and equity characteristics in one instrument.",
    body: [
      { type: "heading", text: "A Bond With an Embedded Option" },
      { type: "paragraph", text: "A convertible bond starts as an ordinary corporate bond, paying a fixed coupon and returning face value at maturity, but with one added feature: the holder has the right, though not the obligation, to convert it into a fixed number of the issuer's common shares at any point before maturity. That conversion right is economically a call option on the issuer's stock, bundled directly into the bond." },
      { type: "heading", text: "Two Ways to Realize Value" },
      { type: "paragraph", text: "A convertible holder can simply hold the bond to maturity like an ordinary bond, collecting coupons and getting face value back, or, if the stock has risen enough to make conversion attractive, exercise the conversion right and receive shares instead — the holder chooses whichever path is worth more at the time." },
      { type: "heading", text: "Where Convertibles Sit Between Stocks and Bonds" },
      { type: "paragraph", text: "Building on what a bond and a stock each are, covered in this curriculum's Fixed Income and Stocks Basics, a convertible sits in between: it behaves like a bond when the stock price is low, since conversion isn't attractive and the fixed coupon and principal dominate its value, and increasingly like the underlying stock as the stock price rises and conversion becomes the better choice." },
      { type: "heading", text: "A Common Financing Tool" },
      { type: "paragraph", text: "Convertible bonds are widely issued by companies, particularly growth companies that want to raise debt financing at a lower coupon than a plain bond would require, in exchange for offering investors the upside potential of eventual conversion into equity — a tradeoff explored in more depth later in this module." },
      { type: "heading", text: "In Practice" },
      { type: "paragraph", text: "A young biotech or software company that isn't yet generating steady cash flow often struggles to issue a plain bond at an affordable rate, since lenders see real default risk and price it in, and issuing more stock outright dilutes existing shareholders immediately at what the company may see as a depressed price. Issuing a convertible bond splits the difference: the company locks in a lower coupon than a straight bond would cost, and investors accept that lower coupon because they're also buying the chance to convert into equity later if the stock takes off." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What right does a convertible bond give its holder?",
        choices: [
          "The right, but not the obligation, to convert the bond into a fixed number of the issuer's shares before maturity",
          "The obligation to convert the bond into shares on a fixed schedule",
          "The right to demand early repayment at any time for any reason",
          "No rights beyond those of an ordinary bond",
        ],
        correctIndex: 0,
        explanation:
          "A convertible bond's defining feature is the holder's option, not obligation, to convert into a fixed number of shares — economically a call option bundled into the bond.",
      },
      {
        id: "q2",
        prompt: "What are the two ways a convertible bondholder can realize value?",
        choices: [
          "Hold to maturity for coupons and face value, or convert into shares if that's worth more",
          "Only ever hold to maturity, with no other option",
          "Only ever convert immediately upon purchase",
          "Sell the bond back to the issuer at a fixed premium",
        ],
        correctIndex: 0,
        explanation:
          "A convertible holder chooses whichever path — holding for the bond's fixed payments or converting into stock — is worth more at the time, which is the essence of the embedded option.",
      },
      {
        id: "q3",
        prompt: "How does a convertible's behavior change as the underlying stock price rises?",
        choices: [
          "It behaves more like a bond when the stock is low and increasingly like the stock itself as the price rises and conversion becomes attractive",
          "It always behaves exactly like a plain bond, regardless of the stock price",
          "It always behaves exactly like the stock, regardless of price",
          "Stock price has no effect on a convertible's behavior",
        ],
        correctIndex: 0,
        explanation:
          "A convertible sits between bond-like and stock-like behavior, shifting toward the stock's behavior as a higher price makes conversion the more attractive choice.",
      },
      {
        id: "q4",
        prompt: "Why do companies commonly issue convertible bonds?",
        choices: [
          "To raise debt financing at a lower coupon than a plain bond, in exchange for offering investors potential equity upside",
          "Convertibles always carry a higher coupon than plain bonds",
          "Convertibles can only be issued by government entities",
          "Issuing convertibles has no financing benefit at all",
        ],
        correctIndex: 0,
        explanation:
          "Investors accept a lower coupon in exchange for the conversion option's upside potential, which is exactly why convertibles can lower a company's financing cost.",
      },
      {
        id: "q5",
        prompt: "What kind of option is economically bundled into a convertible bond?",
        choices: [
          "A call option on the issuer's own stock",
          "A put option on a competitor's stock",
          "An option on interest rates alone",
          "No option is bundled into a convertible bond",
        ],
        correctIndex: 0,
        explanation:
          "The right to convert into shares at a fixed ratio is economically equivalent to holding a call option on the issuer's stock, embedded directly in the bond.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "convertibles-conversion-ratio-and-price",
    title: "Conversion ratio and conversion price",
    summary:
      "The two numbers that define exactly how many shares a convertible bond can become, and the breakeven stock price where conversion starts to make sense.",
    body: [
      { type: "heading", text: "Conversion Ratio" },
      { type: "paragraph", text: "The conversion ratio is the fixed number of common shares a single convertible bond can be exchanged for, set at issuance and stated directly in the bond's terms. A convertible with a conversion ratio of 20, for example, can be converted into exactly 20 shares of the issuer's stock, regardless of what the stock's price does afterward." },
      { type: "heading", text: "Conversion Price" },
      { type: "paragraph", text: "The conversion price is the effective price per share an investor pays for stock by converting, calculated as the bond's face value, typically $1,000, divided by the conversion ratio. A $1,000 bond with a conversion ratio of 20 has a conversion price of $50 per share." },
      { type: "heading", text: "Conversion Value (Parity)" },
      { type: "paragraph", text: "At any point, the conversion value, also called parity, is what the bond would be worth if converted right now: the conversion ratio multiplied by the stock's current price. If the stock trades at $60 and the conversion ratio is 20, the conversion value is $1,200 — more than the bond's $1,000 face value, meaning conversion is already worth considering." },
      { type: "heading", text: "Why These Numbers Matter" },
      { type: "paragraph", text: "Conversion ratio and conversion price are fixed at issuance, but the conversion value moves every day with the stock price, which is exactly what creates the tension between a convertible's bond-like and stock-like behavior covered in the next lesson — the higher the stock climbs above the conversion price, the more the bond starts trading like the stock underneath it." },
      { type: "heading", text: "In Practice" },
      { type: "paragraph", text: "Suppose an investor buys a $1,000 convertible bond with a conversion ratio of 25, giving it a conversion price of $40 a share. If the company's stock is trading at $30, converting would only be worth $750, so the bond trades mainly on its bond-like merits; but if the stock later climbs to $55, those same 25 shares are worth $1,375, well above face value, and the investor now has a real reason to convert instead of just collecting coupons. That single ratio, fixed on day one, is what ties the bond's ultimate value to wherever the stock ends up." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What is a convertible bond's conversion ratio?",
        choices: [
          "The fixed number of shares a single bond can be exchanged for, set at issuance",
          "The bond's coupon rate expressed as a ratio",
          "The ratio of bondholders to shareholders in the company",
          "A number that changes daily with the stock price",
        ],
        correctIndex: 0,
        explanation:
          "The conversion ratio is fixed at issuance and states exactly how many shares one bond converts into, regardless of later stock price moves.",
      },
      {
        id: "q2",
        prompt: "How is the conversion price calculated?",
        choices: [
          "The bond's face value divided by the conversion ratio",
          "The current stock price multiplied by the conversion ratio",
          "The bond's coupon rate divided by its face value",
          "It is set randomly by the issuer each year",
        ],
        correctIndex: 0,
        explanation:
          "Conversion price is face value divided by conversion ratio — for a $1,000 bond with a conversion ratio of 20, that's $50 per share.",
      },
      {
        id: "q3",
        prompt: "A convertible has a conversion ratio of 20 and the stock trades at $60. What is the conversion value?",
        choices: ["$1,200", "$1,000", "$60", "$20"],
        correctIndex: 0,
        explanation:
          "Conversion value (parity) is conversion ratio times current stock price: 20 × $60 = $1,200.",
      },
      {
        id: "q4",
        prompt: "Which of a convertible's key figures changes daily, and which stays fixed?",
        choices: [
          "Conversion ratio and conversion price are fixed at issuance; conversion value moves daily with the stock price",
          "All three figures change daily",
          "All three figures are fixed permanently at issuance",
          "Conversion price changes daily while conversion ratio and value stay fixed",
        ],
        correctIndex: 0,
        explanation:
          "The ratio and price are locked in at issuance, but conversion value is recalculated continuously as the stock price moves, which is what drives the bond's changing behavior.",
      },
      {
        id: "q5",
        prompt: "Why does the gap between the stock price and the conversion price matter?",
        choices: [
          "The higher the stock climbs above the conversion price, the more the convertible starts trading like the stock itself",
          "It has no effect on how the convertible behaves",
          "It only affects the bond's credit rating",
          "It determines the bond's maturity date",
        ],
        correctIndex: 0,
        explanation:
          "As the stock rises further above the conversion price, conversion becomes increasingly attractive, pulling the convertible's behavior toward the stock's own.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "convertibles-how-price-behaves",
    title: "How a convertible's price behaves",
    summary:
      "Why a convertible bond's price traces out a curve between a bond floor at low stock prices and the stock's own value at high stock prices.",
    body: [
      { type: "heading", text: "The Bond Floor" },
      { type: "paragraph", text: "When the issuer's stock price is low, conversion is worth little or nothing, so the convertible trades mainly on its value as a straight bond — its coupon and the certainty of getting face value back at maturity, credit risk aside. This floor, sometimes called the bond floor or investment value, is what limits how far a convertible's price can fall even if the stock keeps dropping." },
      { type: "heading", text: "Trading Like Stock at High Prices" },
      { type: "paragraph", text: "When the stock price rises well above the conversion price, the conversion value dominates the bond's worth, and the convertible starts trading almost in lockstep with the underlying stock, since converting is clearly the better choice and the bond-like floor becomes largely irrelevant." },
      { type: "heading", text: "The Convertible Premium" },
      { type: "paragraph", text: "In between those two extremes, a convertible typically trades above both its bond floor and its conversion value, a gap called the convertible premium — compensation for holding an instrument that offers the better of two outcomes, bond-like safety or stock-like upside, without having to commit to either one in advance." },
      { type: "heading", text: "A Curved, Not Straight, Relationship" },
      { type: "paragraph", text: "Plotting a convertible's price against the underlying stock's price traces out a curve: flat and bond-like at low stock prices, rising and increasingly stock-like at high stock prices, with the premium most pronounced in between. That shape is what gives convertible investors participation in a rising stock while cushioning a falling one — the central appeal covered in the next lesson." },
      { type: "heading", text: "In Practice" },
      { type: "paragraph", text: "Think of a convertible desk tracking the same bond over a year in which the underlying stock first drops 30% and then rallies 80%. During the drop, the convertible's price barely moves, since it's anchored to its bond floor and investors are still confident in the coupon and principal; during the rally, once the stock pushes well past the conversion price, the convertible's price starts moving almost dollar-for-dollar with the stock. Somewhere in between, when the stock is hovering near the conversion price, the desk sees the convertible command its richest premium, since neither the bond floor nor the stock value alone fully explains what buyers are willing to pay for keeping both outcomes open." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What is the \"bond floor\"?",
        choices: [
          "The value a convertible trades at based on its coupon and principal repayment, which limits how far its price can fall even if the stock drops",
          "The maximum price a convertible can ever reach",
          "The stock price at which conversion becomes mandatory",
          "A fee charged when converting a bond into shares",
        ],
        correctIndex: 0,
        explanation:
          "The bond floor reflects the convertible's value as a straight bond, setting a limit on how far its price falls even during a stock decline.",
      },
      {
        id: "q2",
        prompt: "What happens to a convertible's price behavior when the stock rises well above the conversion price?",
        choices: [
          "It starts trading almost in lockstep with the underlying stock",
          "It becomes completely disconnected from the stock price",
          "Its price is capped and cannot rise further",
          "It converts automatically into a plain bond",
        ],
        correctIndex: 0,
        explanation:
          "Once conversion is clearly the better choice, the convertible's value tracks the stock closely, since the bond floor is no longer the binding constraint.",
      },
      {
        id: "q3",
        prompt: "What is the convertible premium?",
        choices: [
          "The amount by which a convertible typically trades above both its bond floor and its conversion value",
          "A fee paid to the issuer when purchasing a convertible",
          "The difference between two different bonds' coupon rates",
          "A penalty for holding a convertible past its maturity date",
        ],
        correctIndex: 0,
        explanation:
          "The premium compensates for the flexibility of holding an instrument that captures the better of bond-like safety or stock-like upside without pre-committing to either.",
      },
      {
        id: "q4",
        prompt: "How does a convertible's price relate to the stock price across the full range of stock prices?",
        choices: [
          "It traces a curve — flat and bond-like at low prices, increasingly stock-like at high prices, with the premium most visible in between",
          "It's always a straight, one-to-one line matching the stock price exactly",
          "It's completely flat and unrelated to the stock price at every level",
          "It moves in the opposite direction of the stock price at every level",
        ],
        correctIndex: 0,
        explanation:
          "The relationship is curved, not linear, reflecting the shift from bond-dominated to stock-dominated value as the stock price rises.",
      },
      {
        id: "q5",
        prompt: "What does this curved price behavior give a convertible investor?",
        choices: [
          "Participation in a rising stock while cushioning a falling one",
          "Guaranteed profit regardless of what the stock does",
          "Exposure only to downside risk, with no upside potential",
          "The exact same risk profile as owning the stock outright",
        ],
        correctIndex: 0,
        explanation:
          "The combination of a bond floor on the downside and stock-like upside participation is the defining appeal of holding a convertible.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "convertibles-why-issue-and-buy",
    title: "Why companies issue, and investors buy, convertibles",
    summary:
      "The tradeoff at the heart of a convertible bond — cheaper financing and delayed dilution for the issuer, in exchange for downside protection plus upside participation for the investor.",
    body: [
      { type: "heading", text: "Cheaper Financing for the Issuer" },
      { type: "paragraph", text: "Because investors are willing to accept a lower coupon in exchange for the conversion option's upside potential, a company can typically issue convertible debt at a meaningfully lower interest rate than a comparable plain bond, reducing its financing cost." },
      { type: "heading", text: "Delayed, Contingent Dilution" },
      { type: "paragraph", text: "Issuing a convertible doesn't dilute existing shareholders immediately, the way issuing new stock outright would. Dilution only happens later, and only if the stock rises enough for bondholders to actually choose conversion — a company effectively defers and conditions its equity issuance on its own stock doing well." },
      { type: "heading", text: "Downside Protection for the Investor" },
      { type: "paragraph", text: "In exchange, an investor gives up some coupon income compared to a plain bond, but gains the bond floor described in the previous lesson: if the stock falls or stagnates, the convertible still behaves like a bond, protecting much of the investor's principal in a way an outright stock purchase never would." },
      { type: "heading", text: "Upside Participation for the Investor" },
      { type: "paragraph", text: "If the stock instead rises substantially, the investor isn't stuck earning only a fixed coupon — the conversion option lets them participate in that stock's gains. This combination of downside protection and upside participation is the fundamental reason convertibles appeal to a certain kind of investor, and is also exactly what convertible arbitrage strategies, covered later in this course, are built to exploit." },
      { type: "heading", text: "In Practice" },
      { type: "paragraph", text: "A retirement-focused investor who wants some exposure to a fast-growing company's stock, but can't stomach the idea of a 50% drawdown, might choose that company's convertible bond over its common stock: if the stock craters, the bond floor cushions the loss and coupons keep arriving, and if the stock instead doubles, the investor still participates through conversion. The company on the other side of that trade likes the arrangement too — it raises capital more cheaply than a plain bond, and if the stock does well enough to trigger conversion, the debt disappears from its balance sheet at the same moment its equity story is working out." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Why can companies typically issue convertible debt at a lower coupon than a plain bond?",
        choices: [
          "Investors accept a lower coupon in exchange for the conversion option's upside potential",
          "Convertible bonds are required by law to pay minimal interest",
          "Convertible bonds never actually pay any coupon at all",
          "Investors always demand a higher coupon for convertibles",
        ],
        correctIndex: 0,
        explanation:
          "The conversion option itself has value to investors, who accept less coupon income in exchange for that embedded upside potential.",
      },
      {
        id: "q2",
        prompt: "How does issuing a convertible affect dilution compared to issuing new stock outright?",
        choices: [
          "Dilution is delayed and only happens later, contingent on the stock rising enough for bondholders to choose conversion",
          "Dilution happens immediately, exactly as it would with a new stock issuance",
          "Convertibles never cause any dilution under any circumstances",
          "Dilution happens automatically regardless of the stock's performance",
        ],
        correctIndex: 0,
        explanation:
          "A convertible defers potential dilution, making it contingent on the stock actually rising enough to make conversion the bondholder's better choice.",
      },
      {
        id: "q3",
        prompt: "What does an investor give up, and gain, by choosing a convertible over a plain bond?",
        choices: [
          "Gives up some coupon income, gains the bond floor's downside protection plus potential upside participation",
          "Gives up all downside protection in exchange for a higher coupon",
          "Gains a higher coupon with no other tradeoffs",
          "There is no tradeoff involved in choosing a convertible",
        ],
        correctIndex: 0,
        explanation:
          "The convertible investor accepts lower coupon income in exchange for the bond floor's protection and the option to participate in the stock's upside.",
      },
      {
        id: "q4",
        prompt: "What protects a convertible investor's principal if the stock price falls or stagnates?",
        choices: [
          "The bond floor, since the convertible still behaves like a straight bond in that scenario",
          "A government guarantee on all convertible bonds",
          "Convertibles have no protection at all if the stock falls",
          "The company is required to buy back the bond at a premium",
        ],
        correctIndex: 0,
        explanation:
          "When the stock is weak, the convertible's bond-like floor is what protects the investor's principal, unlike an outright stock investment.",
      },
      {
        id: "q5",
        prompt: "What is the fundamental tradeoff that makes convertibles appealing, and that convertible arbitrage strategies are built around?",
        choices: [
          "Downside protection combined with upside participation, versus giving up some coupon income and (for the issuer) accepting contingent dilution",
          "Guaranteed profit with absolutely no risk on either side",
          "Convertibles offer no benefit to either issuers or investors",
          "Convertibles are identical to plain bonds in every respect",
        ],
        correctIndex: 0,
        explanation:
          "The combination of bond-like protection and stock-like upside, traded off against coupon income and contingent dilution, is the core convertible bargain — and exactly what later strategies in this course exploit.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "convertible-arbitrage",
    title: "Convertible arbitrage",
    summary:
      "Buying a convertible bond and shorting a hedge ratio of the underlying stock, aiming to profit from the bond's own income and convexity while staying largely neutral to the stock's direction.",
    body: [
      { type: "heading", text: "The Basic Trade" },
      { type: "paragraph", text: "A convertible arbitrage position buys the convertible bond and simultaneously sells short a calculated number of shares of the underlying stock, sized to offset the bond's own sensitivity to the stock price — its delta. The two legs together are designed to be far less exposed to the stock's outright direction than either leg would be alone." },
      { type: "heading", text: "Why Hedge With a Short Stock Position" },
      { type: "paragraph", text: "Because the convertible's embedded conversion option makes its price sensitive to the stock, shorting stock in proportion to that sensitivity neutralizes the position's directional exposure — the trade isn't a bet on whether the stock rises or falls, but on something else entirely." },
      { type: "heading", text: "Where the Profit Comes From" },
      { type: "paragraph", text: "Profit comes from several sources layered together: the convertible's own coupon income, interest earned on the cash proceeds from the short sale, and gains from convexity, since the bond's delta itself changes as the stock moves — rising as the stock climbs, falling as it drops — in a way that resembles being long an option's gamma." },
      { type: "heading", text: "Dynamic Hedging and Its Costs" },
      { type: "paragraph", text: "As the stock price moves, the convertible's delta changes, so the position's hedge has to be periodically rebalanced — adding to or trimming the short as needed to stay neutral. That ongoing rebalancing is exactly what captures the convexity profit, but it isn't free: transaction costs, the cost of borrowing stock to short, and the issuer's own credit risk all cut into what the strategy actually nets." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What are the two legs of a convertible arbitrage position?",
        choices: [
          "Buying the convertible bond and simultaneously shorting a calculated number of shares of the underlying stock",
          "Buying the convertible bond and buying more of the underlying stock",
          "Shorting the convertible bond with no stock position at all",
          "Only ever holding the convertible bond with no hedge",
        ],
        correctIndex: 0,
        explanation:
          "Convertible arbitrage pairs a long convertible position with a short stock position sized to the bond's delta, rather than holding either leg alone.",
      },
      {
        id: "q2",
        prompt: "Why does shorting stock neutralize the position's directional exposure?",
        choices: [
          "The short stock offsets the convertible's own price sensitivity to the stock, which comes from its embedded conversion option",
          "Shorting stock has no effect on the position's directional exposure",
          "The convertible bond has no sensitivity to the stock price at all",
          "Shorting stock only works if the stock price never changes",
        ],
        correctIndex: 0,
        explanation:
          "Since the convertible's value moves with the stock through its embedded option, an offsetting short stock position cancels out that directional sensitivity.",
      },
      {
        id: "q3",
        prompt: "What are the layered sources of profit in convertible arbitrage?",
        choices: [
          "The convertible's coupon income, interest on short-sale proceeds, and convexity gains as the bond's delta changes with the stock",
          "Only the convertible's coupon income, with no other source",
          "Profit comes exclusively from the stock's price direction",
          "There is no realistic source of profit in this strategy",
        ],
        correctIndex: 0,
        explanation:
          "Convertible arbitrage combines coupon income, short-rebate interest, and gamma-like convexity gains from rebalancing the hedge as the stock moves.",
      },
      {
        id: "q4",
        prompt: "Why does the position's hedge need to be rebalanced over time?",
        choices: [
          "The convertible's delta changes as the stock price moves, so the short position needs to be adjusted to stay properly hedged",
          "The hedge never needs to be adjusted once it's set",
          "Rebalancing is only needed if the bond's coupon changes",
          "The stock's price has no effect on the required hedge size",
        ],
        correctIndex: 0,
        explanation:
          "As the convertible's delta shifts with the stock price, the short stock position must be adjusted to keep the overall position properly hedged — and that rebalancing is what captures convexity profit.",
      },
      {
        id: "q5",
        prompt: "What costs can erode a convertible arbitrage position's profitability?",
        choices: [
          "Transaction costs from rebalancing, the cost of borrowing stock to short, and the issuer's credit risk",
          "There are no real costs associated with this strategy",
          "Only the convertible's own coupon payment is a cost",
          "The strategy has zero exposure to the issuer's creditworthiness",
        ],
        correctIndex: 0,
        explanation:
          "Rebalancing costs, stock borrow costs, and issuer credit risk are all real frictions that reduce the strategy's net profitability despite its largely market-neutral design.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "convertible-option-adjusted-spread",
    title: "Convertible option-adjusted spread",
    summary:
      "Using option-adjusted spread to strip the embedded conversion option out of a convertible's price, isolating the credit-and-liquidity compensation it actually offers for relative-value comparison.",
    body: [
      { type: "heading", text: "Isolating the Bond's True Compensation" },
      { type: "paragraph", text: "Just as with mortgage-backed securities covered elsewhere in this curriculum, a convertible bond's price reflects both a bond component and an embedded option value, so comparing convertibles on price or yield alone is misleading. Option-adjusted spread (OAS) strips out the value of the conversion option to isolate the spread genuinely compensating for the issuer's credit and liquidity risk." },
      { type: "heading", text: "How OAS Is Calculated" },
      { type: "paragraph", text: "Using an option-pricing model that accounts for the stock's volatility, the issuer's credit spread, and the bond's specific conversion terms, a trader solves for the discount spread over the risk-free curve that makes the model's theoretical price match the convertible's actual market price — that solved-for spread is the OAS." },
      { type: "heading", text: "Spotting Relative Value" },
      { type: "paragraph", text: "A convertible trading with a wider OAS than similar-credit-quality, similar-duration convertibles, or wider than what the issuer's own straight-bond credit spread implies is fair, looks cheap on a relative-value basis. One trading with a noticeably tighter OAS looks rich by the same comparison." },
      { type: "heading", text: "Trading the Signal" },
      { type: "paragraph", text: "A trader buys convertibles that look cheap on an OAS basis and can short similar convertibles, or the issuer's other outstanding debt, that look rich, aiming to profit as the spreads converge toward fair value. Like convertible arbitrage, this relative-value approach is often paired with a stock hedge, isolating the credit and spread view from the embedded option's own sensitivity to the stock price." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Why is comparing convertible bonds on price or yield alone misleading?",
        choices: [
          "A convertible's price reflects both a bond component and an embedded option value, which raw price or yield doesn't separate out",
          "Convertible bonds never actually have a market price",
          "Yield is completely irrelevant to any bond's valuation",
          "Convertibles and plain bonds are priced using identical methods with no adjustment needed",
        ],
        correctIndex: 0,
        explanation:
          "Because part of a convertible's price comes from its embedded conversion option, comparing convertibles on price or yield alone conflates option value with genuine credit compensation.",
      },
      {
        id: "q2",
        prompt: "What does option-adjusted spread (OAS) do for a convertible bond?",
        choices: [
          "Strips out the value of the conversion option to isolate the spread compensating for credit and liquidity risk",
          "Measures only the bond's stated coupon rate",
          "Ignores the issuer's credit risk entirely",
          "Only applies to government bonds, never convertibles",
        ],
        correctIndex: 0,
        explanation:
          "OAS removes the embedded option's value from the price, leaving the spread that genuinely reflects the issuer's credit and liquidity risk — the same logic used for MBS.",
      },
      {
        id: "q3",
        prompt: "How is a convertible's OAS actually calculated?",
        choices: [
          "By solving, with an option-pricing model, for the discount spread that makes the model's theoretical price match the bond's actual market price",
          "By simply subtracting the coupon rate from the face value",
          "By looking up a fixed number published by the issuer",
          "OAS cannot be calculated for convertible bonds",
        ],
        correctIndex: 0,
        explanation:
          "OAS is solved for using an option-pricing model that accounts for volatility, credit spread, and conversion terms, finding the spread that reconciles theoretical and market prices.",
      },
      {
        id: "q4",
        prompt: "What does a wider-than-peers OAS suggest about a convertible?",
        choices: [
          "It looks cheap on a relative-value basis",
          "It looks rich on a relative-value basis",
          "OAS has no relationship to relative value",
          "The bond is guaranteed to default",
        ],
        correctIndex: 0,
        explanation:
          "A wider OAS than similar convertibles (or than the issuer's straight-bond credit spread implies) suggests the market is offering more compensation than comparable bonds — a sign it may be cheap.",
      },
      {
        id: "q5",
        prompt: "How is this OAS-based relative-value view typically traded?",
        choices: [
          "Buying convertibles that look cheap on OAS and shorting ones that look rich, often paired with a stock hedge to isolate the credit view",
          "Only ever buying convertibles, regardless of their relative OAS",
          "The strategy never involves any hedge of any kind",
          "By buying the issuer's stock alone, with no bond position",
        ],
        correctIndex: 0,
        explanation:
          "The strategy pairs long cheap-OAS convertibles against short rich-OAS ones, frequently combined with a stock hedge so the trade isolates the spread view rather than the embedded option's stock sensitivity.",
      },
    ],
  },
];
