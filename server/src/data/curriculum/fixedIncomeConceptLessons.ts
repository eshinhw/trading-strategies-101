import type { ConceptLesson } from "./types.js";

// Concept-lesson format, same reasoning as futuresConceptLessons.ts /
// stocksConceptLessons.ts / etfConceptLessons.ts — these are bond-portfolio
// construction and yield-curve concepts, not option-payoff structures, so
// prose + a knowledge-check quiz fits better than the options-specific
// engine.
export const fixedIncomeConceptLessons: ConceptLesson[] = [
  {
    kind: "concept",
    slug: "fixed-income-bullets",
    title: "Bullets",
    summary: "A bond portfolio concentrated in a single maturity, or a narrow band of maturities, rather than spread across the yield curve.",
    body: [
      { type: "paragraph", text: "A bullet portfolio concentrates its holdings in bonds clustered around a single target maturity date — for example, a five-year bullet portfolio holds bonds that all mature at or near the five-year mark, rather than spreading holdings evenly across short, medium, and long maturities. The name comes from how the portfolio's maturity distribution looks on a chart: a single sharp spike, like a bullet, rather than a spread-out distribution." },
      { type: "paragraph", text: "The main appeal of a bullet strategy is precision: because every bond in the portfolio matures around the same date, the portfolio's duration — its sensitivity to interest-rate changes — is easy to target and stays relatively stable over time, without needing much active rebalancing to correct for bonds at different maturities aging at different rates." },
      { type: "paragraph", text: "Bullets are a natural fit when an investor has a specific future liability or cash need at a known date — a pension fund with a payout due in five years, for example, can build a five-year bullet portfolio so the bonds mature right when the cash is needed, minimizing the risk of having to sell bonds early at an unfavorable price." },
      { type: "paragraph", text: "The tradeoff is reduced diversification across the yield curve: because a bullet portfolio's return depends heavily on where interest rates sit at that one point on the curve, it's more exposed to a shift specifically at that maturity, a \"twist\" in the yield curve, than a portfolio spread across many maturities, which averages out its exposure to curve shape changes." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What defines a bullet bond portfolio?",
        choices: [
          "Holdings spread evenly across every available maturity",
          "Holdings concentrated around a single target maturity date",
          "A portfolio containing only zero-coupon bonds",
          "A portfolio that holds no bonds longer than one year",
        ],
        correctIndex: 1,
        explanation:
          "A bullet portfolio clusters its holdings around one specific maturity, producing a sharp spike in the portfolio's maturity distribution rather than a spread.",
      },
      {
        id: "q2",
        prompt: "Why is a bullet portfolio's duration relatively easy to manage?",
        choices: [
          "Duration is irrelevant to bullet portfolios",
          "Because every bond matures around the same date, the portfolio's overall interest-rate sensitivity stays fairly stable without much active rebalancing",
          "Because bullet portfolios never contain more than one bond",
          "Because bullet portfolios are legally required to have zero duration",
        ],
        correctIndex: 1,
        explanation:
          "Clustering maturities around one point keeps the portfolio's aggregate duration predictable and stable, since bonds aren't aging at different rates relative to each other across a wide maturity range.",
      },
      {
        id: "q3",
        prompt: "When is a bullet strategy a natural fit for an investor?",
        choices: [
          "When the investor has no specific future cash need",
          "When the investor has a specific future liability or cash need at a known date",
          "When the investor wants maximum diversification across the yield curve",
          "When the investor wants to avoid holding any fixed income at all",
        ],
        correctIndex: 1,
        explanation:
          "A bullet portfolio's bonds can be timed to mature right when a known future liability comes due, such as a pension payout, minimizing the need to sell early.",
      },
      {
        id: "q4",
        prompt: "What is the main tradeoff of concentrating a portfolio in a single maturity?",
        choices: [
          "Bullet portfolios cannot hold government bonds",
          "Increased exposure to a shift specifically at that point on the yield curve, compared to a portfolio spread across many maturities",
          "Bullet portfolios always underperform every other bond strategy",
          "There is no tradeoff — concentration is strictly better",
        ],
        correctIndex: 1,
        explanation:
          "Because the portfolio's fate depends heavily on rates at one specific maturity, it's more exposed to a \"twist\" or shift at that point on the curve than a diversified, spread-out portfolio would be.",
      },
      {
        id: "q5",
        prompt: "How does a bullet portfolio's maturity distribution look on a chart, and why does it get its name from that shape?",
        choices: [
          "Flat and even across all maturities — like a barbell",
          "A single sharp spike concentrated at one maturity — resembling a bullet",
          "Two separate spikes at the short and long ends",
          "A smooth curve gradually declining to zero",
        ],
        correctIndex: 1,
        explanation:
          "The strategy is named for the shape of its maturity distribution: a tight cluster of holdings around one target date looks like a single spike, or bullet, rather than being spread out.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "fixed-income-barbells",
    title: "Barbells",
    summary: "A bond portfolio split between very short and very long maturities, with little or nothing in between, betting on the yield curve's shape rather than a single point.",
    body: [
      { type: "paragraph", text: "A barbell portfolio holds bonds concentrated at two extremes — very short-maturity bonds on one end and very long-maturity bonds on the other — with little or nothing in the middle. Plotted on a chart, the maturity distribution looks like a barbell: weight concentrated at both ends, empty in the middle, which is where the strategy gets its name." },
      { type: "paragraph", text: "This structure can be built to match the same overall average duration as a bullet portfolio concentrated at the midpoint, but the barbell achieves that target duration very differently: by averaging a lot of interest-rate sensitivity from the long end with very little from the short end, rather than getting a moderate, uniform sensitivity from bonds all clustered near that midpoint." },
      { type: "paragraph", text: "The short end of a barbell provides liquidity and reinvestment flexibility — those bonds mature quickly and can be rolled into new short-term bonds as rates change — while the long end captures higher yields typically available on longer-maturity debt. This gives the portfolio manager more room to actively respond to changing market conditions than a bullet portfolio's fixed, single-maturity target does." },
      { type: "paragraph", text: "A barbell's main advantage over a comparable-duration bullet shows up when the yield curve's shape changes rather than shifting up or down uniformly: because a barbell has convexity advantages from combining very short and very long bonds, it tends to benefit more from large rate swings, in either direction, than a bullet with the same starting duration, though this benefit typically comes at some cost in yield versus a bullet, since the short end tends to earn less than intermediate maturities would." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What defines a barbell bond portfolio?",
        choices: [
          "Bonds spread evenly across every maturity from short to long",
          "Bonds concentrated at very short and very long maturities, with little or nothing in between",
          "Bonds all clustered at a single intermediate maturity",
          "A portfolio that holds only floating-rate bonds",
        ],
        correctIndex: 1,
        explanation:
          "A barbell splits its holdings between two extremes — short and long maturities — leaving the middle of the maturity spectrum empty, which is where the \"barbell\" shape and name come from.",
      },
      {
        id: "q2",
        prompt: "How can a barbell portfolio match the same overall duration as a bullet portfolio concentrated at the midpoint?",
        choices: [
          "It cannot — barbells always have a different duration than bullets",
          "By averaging high interest-rate sensitivity from the long end with low sensitivity from the short end, rather than uniform sensitivity from bonds near the midpoint",
          "By holding zero bonds at all times",
          "By only investing in bonds that mature the same week",
        ],
        correctIndex: 1,
        explanation:
          "A barbell can be constructed to hit the same target average duration as a bullet, but it gets there by blending very different sensitivities from its two extreme maturities rather than uniform exposure from intermediate bonds.",
      },
      {
        id: "q3",
        prompt: "What advantage does the short end of a barbell provide?",
        choices: [
          "The highest possible yield in the portfolio",
          "Liquidity and reinvestment flexibility, since those bonds mature quickly and can be rolled into new short-term bonds",
          "Protection from all forms of interest-rate risk",
          "A guarantee that the portfolio will never lose value",
        ],
        correctIndex: 1,
        explanation:
          "The short-maturity bonds in a barbell mature quickly, giving the manager the flexibility to reinvest as market conditions change, unlike bonds locked into an intermediate or long maturity.",
      },
      {
        id: "q4",
        prompt: "When does a barbell's convexity advantage over a comparable-duration bullet typically show up?",
        choices: [
          "Only when interest rates stay perfectly flat",
          "When the yield curve's shape changes, or rates make large swings, rather than shifting uniformly",
          "Barbells never have any convexity advantage over bullets",
          "Only on the bond's exact maturity date",
        ],
        correctIndex: 1,
        explanation:
          "Combining very short and very long maturities gives a barbell convexity benefits that tend to help more during large rate swings or shape changes in the yield curve, compared to a bullet concentrated at one point.",
      },
      {
        id: "q5",
        prompt: "What cost does a barbell typically pay for this convexity advantage, relative to a bullet?",
        choices: [
          "Barbells always have higher credit risk than bullets",
          "Some yield give-up, since the short end of the barbell tends to earn less than intermediate maturities would",
          "Barbells cannot be constructed using government bonds",
          "There is no cost — barbells are strictly superior to bullets",
        ],
        correctIndex: 1,
        explanation:
          "The short-maturity bonds in a barbell typically yield less than intermediate-maturity bonds would, so the convexity benefit of the barbell structure often comes at some cost in current yield.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "fixed-income-ladders",
    title: "Ladders",
    summary: "A bond portfolio with holdings spread evenly across many maturities, so a portion matures — and can be reinvested — at regular intervals.",
    body: [
      { type: "paragraph", text: "A laddered bond portfolio spreads its holdings evenly across a range of maturities — for example, one bond maturing each year for the next ten years — rather than concentrating at one point (a bullet) or at two extremes (a barbell). Each \"rung\" of the ladder is a bond maturing in a different year, giving the portfolio a smooth, staggered maturity structure." },
      { type: "paragraph", text: "The defining benefit of a ladder is a steady, predictable stream of maturing bonds: every year, one rung matures and returns principal, which the investor can either spend or reinvest in a new long-dated bond at the far end of the ladder, keeping the ladder's structure intact over time." },
      { type: "paragraph", text: "This staggered reinvestment naturally averages the investor's exposure to interest-rate changes over time — rather than committing all capital to reinvestment at whatever rate happens to prevail on a single date, a ladder reinvests a portion of the portfolio at whatever the current rate is each year, smoothing out the effect of any one year's rate environment being unusually high or low." },
      { type: "paragraph", text: "Ladders are popular with income-focused investors who want a predictable, ongoing cash flow without having to actively time the market or make big rebalancing decisions — the structure is largely mechanical, each maturing rung gets replaced at the long end, which makes it simple to maintain compared to strategies that require actively tracking and adjusting portfolio duration in response to market views." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "How are a laddered bond portfolio's holdings structured?",
        choices: [
          "Concentrated entirely at one maturity date",
          "Spread evenly across a range of maturities, with one \"rung\" maturing at regular intervals",
          "Split only between the shortest and longest available maturities",
          "Composed exclusively of bonds with no fixed maturity date",
        ],
        correctIndex: 1,
        explanation:
          "A ladder holds bonds staggered across many maturities — for example, one maturing each year for a decade — rather than concentrating at one point or at two extremes.",
      },
      {
        id: "q2",
        prompt: "What happens when one \"rung\" of a bond ladder matures?",
        choices: [
          "The entire portfolio is liquidated",
          "Principal is returned, which the investor can spend or reinvest in a new long-dated bond to extend the ladder",
          "The bond automatically converts into a stock",
          "Nothing — matured bonds are simply removed with no reinvestment option",
        ],
        correctIndex: 1,
        explanation:
          "Each maturing rung returns principal that can be reinvested at the ladder's long end, keeping the staggered structure intact year after year.",
      },
      {
        id: "q3",
        prompt: "How does a ladder's staggered reinvestment affect exposure to interest-rate changes?",
        choices: [
          "It maximizes exposure to whatever rate prevails on a single date",
          "It averages exposure over time, since only a portion of the portfolio reinvests at the prevailing rate each year rather than all of it at once",
          "It eliminates all interest-rate exposure entirely",
          "It has no effect on interest-rate exposure",
        ],
        correctIndex: 1,
        explanation:
          "Because only one rung reinvests at a time, a ladder smooths out the effect of any single year's interest-rate environment being unusually high or low, compared to reinvesting the whole portfolio at once.",
      },
      {
        id: "q4",
        prompt: "Why are ladders popular with income-focused investors?",
        choices: [
          "They require constant active trading and market timing",
          "They provide a predictable, ongoing cash flow with a largely mechanical structure that's simple to maintain",
          "They guarantee the highest possible yield of any bond strategy",
          "They eliminate the need to ever hold bonds",
        ],
        correctIndex: 1,
        explanation:
          "The ladder's structure — replace each maturing rung with a new long-dated bond — requires little active decision-making, making it a low-maintenance way to generate steady income.",
      },
      {
        id: "q5",
        prompt: "How does a ladder's maturity structure differ from both a bullet and a barbell?",
        choices: [
          "It is identical to a bullet portfolio",
          "It spreads holdings evenly across many maturities, rather than concentrating at one point (bullet) or two extremes (barbell)",
          "It is identical to a barbell portfolio",
          "It holds no bonds with a maturity beyond one year",
        ],
        correctIndex: 1,
        explanation:
          "Where a bullet concentrates at a single maturity and a barbell splits between two extremes, a ladder is spread evenly across the full range, with holdings maturing at regular intervals.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "fixed-income-bond-immunization",
    title: "Bond immunization",
    summary: "Structuring a bond portfolio so its value is protected from interest-rate changes over a specific investment horizon, matching duration to a target date.",
    body: [
      { type: "paragraph", text: "Bond immunization is a strategy for protecting a portfolio's value against interest-rate risk over a specific, known investment horizon — such as a future liability due in exactly seven years — by matching the portfolio's duration to that horizon. When duration is matched this way, a rate change affects the portfolio's value in two offsetting ways: the price of existing bonds moves one direction, while the rate at which coupon payments can be reinvested moves the opposite way, and matching duration to the horizon makes these two effects approximately cancel out." },
      { type: "paragraph", text: "Specifically, if rates rise, existing bond prices fall, but the coupons being received can now be reinvested at the new, higher rate; if rates fall, existing bond prices rise, but reinvestment happens at the new, lower rate. An immunized portfolio is structured so that, at the target horizon date, these two effects offset closely enough that the portfolio's value is nearly unaffected by which direction rates moved." },
      { type: "paragraph", text: "Because duration itself changes as time passes and as rates move, a bond's duration naturally shortens as it approaches maturity, and duration can shift with rate-level changes too, an immunized portfolio isn't a \"set it and forget it\" structure — it requires periodic rebalancing to keep the portfolio's duration matched to the shrinking remaining time to the target horizon as that date approaches." },
      { type: "paragraph", text: "Immunization is especially relevant for institutions like pension funds and insurance companies that have well-defined future liabilities and want to lock in the ability to meet them regardless of which direction interest rates move between now and the payout date, rather than taking a directional bet on rates or trying to actively outperform the market." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What is the core goal of bond immunization?",
        choices: [
          "To maximize a portfolio's return regardless of interest-rate risk",
          "To protect a portfolio's value against interest-rate changes over a specific investment horizon, by matching duration to that horizon",
          "To eliminate all bonds from a portfolio entirely",
          "To bet on the direction interest rates will move",
        ],
        correctIndex: 1,
        explanation:
          "Immunization structures a portfolio so a specific future value target is protected from interest-rate moves, rather than betting on rates or chasing maximum return.",
      },
      {
        id: "q2",
        prompt: "How do the two effects of a rate change offset each other in an immunized portfolio?",
        choices: [
          "They don't offset — immunization ignores reinvestment risk entirely",
          "If rates rise, bond prices fall but reinvestment happens at a higher rate; if rates fall, bond prices rise but reinvestment happens at a lower rate — these effects approximately cancel out when duration matches the horizon",
          "Bond prices and reinvestment rates always move in the same direction",
          "Immunization works only if interest rates never change",
        ],
        correctIndex: 1,
        explanation:
          "Matching duration to the investment horizon causes the price effect and the reinvestment-rate effect of any rate change to approximately offset each other at the target date.",
      },
      {
        id: "q3",
        prompt: "Why does an immunized portfolio require periodic rebalancing?",
        choices: [
          "Because immunized portfolios must be fully liquidated every year",
          "Because duration naturally shortens as bonds approach maturity and can shift with rate-level changes, so it must be kept matched to the shrinking remaining horizon",
          "Because immunization strategies are illegal without frequent trading",
          "Rebalancing is never required once a portfolio is immunized",
        ],
        correctIndex: 1,
        explanation:
          "Since duration changes over time and with rate moves, the portfolio manager must periodically adjust holdings to keep duration matched to the horizon as the target date gets closer.",
      },
      {
        id: "q4",
        prompt: "What kind of institution is bond immunization especially relevant for?",
        choices: [
          "Day traders seeking maximum short-term profit",
          "Institutions like pension funds and insurance companies with well-defined future liabilities",
          "Institutions that have no future cash obligations",
          "Only institutions that exclusively trade stocks",
        ],
        correctIndex: 1,
        explanation:
          "Immunization is designed to protect the ability to meet a known future liability, which makes it especially useful for pension funds and insurers with specific, dated payout obligations.",
      },
      {
        id: "q5",
        prompt: "What happens to a well-immunized portfolio's value at the target horizon if interest rates move, in either direction, after the portfolio is set up?",
        choices: [
          "The portfolio's value swings wildly in the direction rates moved",
          "The portfolio's value is approximately protected, since the price effect and reinvestment-rate effect offset each other",
          "The portfolio automatically converts to cash",
          "The portfolio's value becomes impossible to determine",
        ],
        correctIndex: 1,
        explanation:
          "The point of matching duration to the horizon is that offsetting price and reinvestment effects leave the portfolio's value at the target date largely insulated from which direction rates moved.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "fixed-income-dollar-duration-neutral-butterfly",
    title: "Dollar-duration-neutral butterfly",
    summary: "A three-maturity bond trade — long the wings, short the body, or vice versa — structured so the position has zero net sensitivity to a parallel shift in rates, isolating a bet on the yield curve's curvature.",
    body: [
      { type: "paragraph", text: "A dollar-duration-neutral butterfly is a trade built from three points on the yield curve — a short maturity and a long maturity (the \"wings\") and an intermediate maturity in between (the \"body\") — combined so that the position's total dollar duration nets to zero. That means if interest rates move up or down by the same amount across the whole curve, a parallel shift, the position's value is largely unaffected either way." },
      { type: "paragraph", text: "The trade is constructed by taking opposite positions in the wings versus the body — for example, short the body and long both wings, sized so the dollar duration of the two wing positions combined exactly offsets the dollar duration of the body position. Because the position is neutral to a parallel shift, its return instead depends on how the curve's curvature changes: specifically, whether the body's yield moves up or down relative to the average of the two wings." },
      { type: "paragraph", text: "This isolates a bet purely on the shape of the yield curve at that middle point, rather than on the overall level of interest rates. If the curve becomes more \"bowed,\" the body's yield falls relative to the wings, a position short the body and long the wings profits; if the curve flattens out at that point instead, the position loses." },
      { type: "paragraph", text: "Sizing the wings correctly is the key mechanical challenge: because dollar duration depends on both a bond's price and its duration, the amount invested in each wing has to be carefully calculated, not just an equal dollar amount in each, so that their combined dollar duration truly offsets the body's — get the sizing wrong and the trade retains unwanted exposure to a parallel rate shift instead of being purely a curvature bet." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What three points on the yield curve does a dollar-duration-neutral butterfly trade use?",
        choices: [
          "Only the shortest available maturity, sized three different ways",
          "A short maturity and a long maturity (the \"wings\") and an intermediate maturity (the \"body\")",
          "Three bonds all with the exact same maturity",
          "Only maturities beyond 30 years",
        ],
        correctIndex: 1,
        explanation:
          "The butterfly trade combines a short-maturity wing, a long-maturity wing, and an intermediate-maturity body into one position.",
      },
      {
        id: "q2",
        prompt: "What does it mean for the trade to be \"dollar-duration-neutral\"?",
        choices: [
          "The trade has no interest-rate exposure at any maturity",
          "The position's total dollar duration nets to zero, so a parallel shift in rates across the whole curve leaves its value largely unaffected",
          "The trade requires exactly one dollar of capital",
          "The trade is neutral only to changes in credit risk, not interest rates",
        ],
        correctIndex: 1,
        explanation:
          "Sizing the wing and body positions so their dollar durations offset means the trade doesn't gain or lose value from a uniform, parallel move in interest rates.",
      },
      {
        id: "q3",
        prompt: "What does the trade's return actually depend on, once it's neutral to a parallel shift?",
        choices: [
          "The overall direction interest rates move",
          "How the curve's curvature changes — specifically, whether the body's yield moves relative to the average of the two wings",
          "The trade has no possible source of return once neutralized",
          "Changes in the stock market unrelated to bonds",
        ],
        correctIndex: 1,
        explanation:
          "With parallel-shift risk removed, the trade's profit or loss comes from changes in the curve's shape at that middle point, not from the overall level of rates.",
      },
      {
        id: "q4",
        prompt: "If the body's yield falls relative to the wings (the curve becomes more \"bowed\"), what happens to a position short the body and long the wings?",
        choices: ["It loses money", "It profits", "It has no effect on the position", "The position is automatically closed"],
        correctIndex: 1,
        explanation:
          "A position short the body and long the wings is designed to profit when the curve bows in that direction — the body's relative yield decline benefits the short-body leg.",
      },
      {
        id: "q5",
        prompt: "Why is sizing the wing positions correctly so important to this trade?",
        choices: [
          "Sizing doesn't matter as long as both wings are held",
          "Because dollar duration depends on both price and duration, the wings must be carefully sized so their combined dollar duration truly offsets the body's — otherwise unwanted parallel-shift exposure remains",
          "Incorrect sizing has no effect on the trade's risk profile",
          "The wings must always be sized as exactly equal dollar amounts",
        ],
        correctIndex: 1,
        explanation:
          "Simply putting equal dollar amounts in each wing isn't enough — the dollar-duration calculation, which accounts for both price and duration, must be used to properly offset the body, or the trade retains unintended exposure to a parallel rate move.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "fixed-income-rolling-down-the-yield-curve",
    title: "Rolling down the yield curve",
    summary: "Buying a longer-maturity bond and selling it before maturity, capturing price appreciation as it \"rolls down\" an upward-sloping yield curve toward a lower yield.",
    body: [
      { type: "paragraph", text: "When the yield curve is upward-sloping, longer maturities carry higher yields than shorter ones, the normal shape, a bond bought today at, say, a 10-year maturity will, one year from now, have only nine years left until maturity. If the yield curve's shape stays roughly the same over that year, the bond's yield \"rolls down\" from the 10-year point on the curve to the 9-year point, which sits at a lower yield since the curve slopes upward." },
      { type: "paragraph", text: "Because bond prices move inversely to yields, that decline in yield as the bond ages produces a price gain, on top of whatever coupon income the bond paid during the holding period. Rolling down the curve strategy exploits this directly: buy a bond somewhere out on the curve, hold it for a period, then sell it before maturity, capturing both the coupon and this yield-decline-driven price appreciation, rather than holding to maturity." },
      { type: "paragraph", text: "The strategy works best where the yield curve is steepest, since a steeper slope means a bigger yield decline, and therefore a bigger price gain, for each year the bond \"rolls\" down the curve; a very flat curve offers little or no roll-down benefit, since the yield barely changes as maturity shortens." },
      { type: "paragraph", text: "The central risk is that this strategy assumes the yield curve's shape stays roughly stable over the holding period — if the curve shifts upward or flattens unexpectedly while the bond is held, the anticipated roll-down gain can shrink or disappear entirely, and the position can even lose money if rates rise enough to outweigh the roll-down effect." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does it mean for a bond's yield to \"roll down\" the curve?",
        choices: [
          "The bond's yield rises as it approaches maturity",
          "As the bond ages and its remaining maturity shortens, its yield moves to match the yield at that shorter point on an upward-sloping curve — a lower yield",
          "The bond automatically converts to a shorter-maturity bond",
          "The bond's coupon payments increase over time",
        ],
        correctIndex: 1,
        explanation:
          "On an upward-sloping curve, a bond's remaining maturity gets shorter as time passes, and if the curve's shape holds steady, its yield moves down to match that shorter point on the curve.",
      },
      {
        id: "q2",
        prompt: "Why does rolling down the yield curve produce a price gain?",
        choices: [
          "Bond prices are unrelated to yields",
          "Bond prices move inversely to yields, so a decline in the bond's yield as it ages produces a corresponding price increase",
          "The bond issuer pays a bonus when yields fall",
          "Price gains only occur if the bond is held to maturity",
        ],
        correctIndex: 1,
        explanation:
          "Since bond prices and yields move in opposite directions, the yield decline that comes from rolling down an upward-sloping curve translates directly into a price gain.",
      },
      {
        id: "q3",
        prompt: "In what kind of yield-curve environment does the roll-down strategy work best?",
        choices: [
          "A perfectly flat yield curve",
          "A steep, upward-sloping yield curve, since a steeper slope means a bigger yield decline — and price gain — as maturity shortens",
          "An inverted yield curve only",
          "The strategy's performance has no relationship to the curve's shape",
        ],
        correctIndex: 1,
        explanation:
          "A steeper curve means more yield decline for each year of aging, producing a larger price gain; a flat curve offers little or no roll-down benefit.",
      },
      {
        id: "q4",
        prompt: "What is the central risk of a roll-down-the-curve strategy?",
        choices: [
          "The risk that bond coupons are paid too frequently",
          "The risk that the yield curve's shape shifts or flattens unexpectedly during the holding period, shrinking or eliminating the anticipated gain",
          "There is no risk once a bond is purchased",
          "The risk that the bond's maturity date changes",
        ],
        correctIndex: 1,
        explanation:
          "The strategy assumes the curve's shape stays roughly stable; if the curve shifts upward or flattens while the bond is held, the expected roll-down gain can shrink, disappear, or even turn into a loss.",
      },
      {
        id: "q5",
        prompt: "How does a roll-down strategy typically realize its total return?",
        choices: [
          "By holding the bond until maturity and collecting only the final principal repayment",
          "By selling the bond before maturity, capturing both coupon income and the price appreciation from the yield rolling down the curve",
          "By never collecting any coupon payments",
          "By shorting the bond immediately after purchase",
        ],
        correctIndex: 1,
        explanation:
          "The strategy specifically involves selling before maturity to capture the roll-down price gain in addition to coupon income, rather than holding to maturity where no further roll-down benefit remains.",
      },
    ],
  },
];
