import type { ConceptLesson } from "./types.js";

// Concept-lesson format, same reasoning as the other non-options courses —
// these are hybrid-security valuation and issuance concepts, not
// option-payoff structures built from the standard Strategy params/payoff
// engine, so prose + a knowledge-check quiz fits better here.
export const convertiblesConceptLessons: ConceptLesson[] = [
  {
    kind: "concept",
    slug: "convertibles-what-is-a-convertible-bond",
    title: "What Is a Convertible Bond?",
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
    title: "Conversion Ratio and Conversion Price",
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
    title: "How a Convertible's Price Behaves",
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
    title: "Why Companies Issue, and Investors Buy, Convertibles",
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
];
