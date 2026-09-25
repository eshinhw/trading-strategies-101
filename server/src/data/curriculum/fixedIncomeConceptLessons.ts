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
      { type: "heading", text: "What a Bullet Portfolio Is" },
      { type: "paragraph", text: "A bullet portfolio concentrates its holdings in bonds clustered around a single target maturity date — for example, a five-year bullet portfolio holds bonds that all mature at or near the five-year mark, rather than spreading holdings evenly across short, medium, and long maturities. The name comes from how the portfolio's maturity distribution looks on a chart: a single sharp spike, like a bullet, rather than a spread-out distribution." },
      { type: "heading", text: "Precise, Stable Duration" },
      { type: "paragraph", text: "The main appeal of a bullet strategy is precision: because every bond in the portfolio matures around the same date, the portfolio's duration — its sensitivity to interest-rate changes — is easy to target and stays relatively stable over time, without needing much active rebalancing to correct for bonds at different maturities aging at different rates." },
      { type: "heading", text: "Matching a Known Liability" },
      { type: "paragraph", text: "Bullets are a natural fit when an investor has a specific future liability or cash need at a known date — a pension fund with a payout due in five years, for example, can build a five-year bullet portfolio so the bonds mature right when the cash is needed, minimizing the risk of having to sell bonds early at an unfavorable price." },
      { type: "heading", text: "The Cost of Concentration" },
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
      { type: "heading", text: "What a Barbell Portfolio Is" },
      { type: "paragraph", text: "A barbell portfolio holds bonds concentrated at two extremes — very short-maturity bonds on one end and very long-maturity bonds on the other — with little or nothing in the middle. Plotted on a chart, the maturity distribution looks like a barbell: weight concentrated at both ends, empty in the middle, which is where the strategy gets its name." },
      { type: "heading", text: "Matching Duration Differently" },
      { type: "paragraph", text: "This structure can be built to match the same overall average duration as a bullet portfolio concentrated at the midpoint, but the barbell achieves that target duration very differently: by averaging a lot of interest-rate sensitivity from the long end with very little from the short end, rather than getting a moderate, uniform sensitivity from bonds all clustered near that midpoint." },
      { type: "heading", text: "The Short End's Advantage" },
      { type: "paragraph", text: "The short end of a barbell provides liquidity and reinvestment flexibility — those bonds mature quickly and can be rolled into new short-term bonds as rates change — while the long end captures higher yields typically available on longer-maturity debt. This gives the portfolio manager more room to actively respond to changing market conditions than a bullet portfolio's fixed, single-maturity target does." },
      { type: "heading", text: "Convexity, at a Cost" },
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
      { type: "heading", text: "What a Laddered Portfolio Is" },
      { type: "paragraph", text: "A laddered bond portfolio spreads its holdings evenly across a range of maturities — for example, one bond maturing each year for the next ten years — rather than concentrating at one point (a bullet) or at two extremes (a barbell). Each \"rung\" of the ladder is a bond maturing in a different year, giving the portfolio a smooth, staggered maturity structure." },
      { type: "heading", text: "A Steady Stream of Maturities" },
      { type: "paragraph", text: "The defining benefit of a ladder is a steady, predictable stream of maturing bonds: every year, one rung matures and returns principal, which the investor can either spend or reinvest in a new long-dated bond at the far end of the ladder, keeping the ladder's structure intact over time." },
      { type: "heading", text: "Averaging Reinvestment Risk" },
      { type: "paragraph", text: "This staggered reinvestment naturally averages the investor's exposure to interest-rate changes over time — rather than committing all capital to reinvestment at whatever rate happens to prevail on a single date, a ladder reinvests a portion of the portfolio at whatever the current rate is each year, smoothing out the effect of any one year's rate environment being unusually high or low." },
      { type: "heading", text: "Why Income Investors Like It" },
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
      { type: "heading", text: "What Immunization Protects Against" },
      { type: "paragraph", text: "Bond immunization is a strategy for protecting a portfolio's value against interest-rate risk over a specific, known investment horizon — such as a future liability due in exactly seven years — by matching the portfolio's duration to that horizon. When duration is matched this way, a rate change affects the portfolio's value in two offsetting ways: the price of existing bonds moves one direction, while the rate at which coupon payments can be reinvested moves the opposite way, and matching duration to the horizon makes these two effects approximately cancel out." },
      { type: "heading", text: "Two Offsetting Effects" },
      { type: "paragraph", text: "Specifically, if rates rise, existing bond prices fall, but the coupons being received can now be reinvested at the new, higher rate; if rates fall, existing bond prices rise, but reinvestment happens at the new, lower rate. An immunized portfolio is structured so that, at the target horizon date, these two effects offset closely enough that the portfolio's value is nearly unaffected by which direction rates moved." },
      { type: "heading", text: "Why Rebalancing Is Still Needed" },
      { type: "paragraph", text: "Because duration itself changes as time passes and as rates move, a bond's duration naturally shortens as it approaches maturity, and duration can shift with rate-level changes too, an immunized portfolio isn't a \"set it and forget it\" structure — it requires periodic rebalancing to keep the portfolio's duration matched to the shrinking remaining time to the target horizon as that date approaches." },
      { type: "heading", text: "Who Uses Immunization" },
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
      { type: "heading", text: "Three Points on the Curve" },
      { type: "paragraph", text: "A dollar-duration-neutral butterfly is a trade built from three points on the yield curve — a short maturity and a long maturity (the \"wings\") and an intermediate maturity in between (the \"body\") — combined so that the position's total dollar duration nets to zero. That means if interest rates move up or down by the same amount across the whole curve, a parallel shift, the position's value is largely unaffected either way." },
      { type: "heading", text: "How the Trade Is Built" },
      { type: "paragraph", text: "The trade is constructed by taking opposite positions in the wings versus the body — for example, short the body and long both wings, sized so the dollar duration of the two wing positions combined exactly offsets the dollar duration of the body position. Because the position is neutral to a parallel shift, its return instead depends on how the curve's curvature changes: specifically, whether the body's yield moves up or down relative to the average of the two wings." },
      { type: "heading", text: "Isolating a Bet on Curvature" },
      { type: "paragraph", text: "This isolates a bet purely on the shape of the yield curve at that middle point, rather than on the overall level of interest rates. If the curve becomes more \"bowed,\" the body's yield falls relative to the wings, a position short the body and long the wings profits; if the curve flattens out at that point instead, the position loses." },
      { type: "heading", text: "Getting the Sizing Right" },
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
      { type: "heading", text: "What \"Rolling Down\" Means" },
      { type: "paragraph", text: "When the yield curve is upward-sloping, longer maturities carry higher yields than shorter ones, the normal shape, a bond bought today at, say, a 10-year maturity will, one year from now, have only nine years left until maturity. If the yield curve's shape stays roughly the same over that year, the bond's yield \"rolls down\" from the 10-year point on the curve to the 9-year point, which sits at a lower yield since the curve slopes upward." },
      { type: "heading", text: "Why It Produces a Price Gain" },
      { type: "paragraph", text: "Because bond prices move inversely to yields, that decline in yield as the bond ages produces a price gain, on top of whatever coupon income the bond paid during the holding period. Rolling down the curve strategy exploits this directly: buy a bond somewhere out on the curve, hold it for a period, then sell it before maturity, capturing both the coupon and this yield-decline-driven price appreciation, rather than holding to maturity." },
      { type: "heading", text: "Where the Strategy Works Best" },
      { type: "paragraph", text: "The strategy works best where the yield curve is steepest, since a steeper slope means a bigger yield decline, and therefore a bigger price gain, for each year the bond \"rolls\" down the curve; a very flat curve offers little or no roll-down benefit, since the yield barely changes as maturity shortens." },
      { type: "heading", text: "The Risk of a Curve That Shifts" },
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
  {
    kind: "concept",
    slug: "fixed-income-fifty-fifty-butterfly",
    title: "Fifty-fifty butterfly",
    summary: "A simplified butterfly construction that splits the body's duration equally, 50/50, between the two wings — an easy-to-build alternative to full dollar-duration matching.",
    body: [
      { type: "heading", text: "A Simpler Butterfly Construction" },
      { type: "paragraph", text: "A fifty-fifty butterfly is a simpler way to construct a butterfly trade than fully solving for dollar-duration neutrality: rather than calculating the precise dollar-duration split needed between the wings based on their individual durations, it simply allocates half of the body's dollar duration to the short wing and half to the long wing, in a fixed 50/50 split, regardless of the wings' actual relative durations." },
      { type: "heading", text: "The Cost of Simplicity" },
      { type: "paragraph", text: "This makes the trade much easier to set up and explain — no need to solve equations weighting each wing by its specific duration and price sensitivity — but it comes at the cost of precision: because a fifty-fifty split doesn't account for the fact that the short and long wings typically have very different durations from each other, the resulting position usually isn't perfectly dollar-duration-neutral to a parallel shift in rates, unlike a fully weighted dollar-duration-neutral butterfly." },
      { type: "heading", text: "Residual Parallel-Shift Exposure" },
      { type: "paragraph", text: "In practice, this means a fifty-fifty butterfly retains some residual exposure to the overall level of interest rates, not just to the curve's shape — a parallel shift in the yield curve can move the position's value by a small amount, whereas a true dollar-duration-neutral construction is designed to cancel that out almost entirely." },
      { type: "heading", text: "Why It Remains Popular" },
      { type: "paragraph", text: "Despite this imprecision, the fifty-fifty approach remains popular for its simplicity and transparency: traders who want a quick, easy-to-communicate butterfly position, and are willing to tolerate a bit of residual parallel-shift exposure in exchange for not having to run a more involved weighting calculation, often default to this construction as a starting point before considering more precisely weighted alternatives." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "How does a fifty-fifty butterfly allocate dollar duration between its two wings?",
        choices: [
          "It calculates a precise weighting based on each wing's individual duration",
          "It simply splits the body's dollar duration equally, 50/50, between the two wings regardless of their individual durations",
          "It allocates 100% of the duration to only one wing",
          "It ignores duration entirely",
        ],
        correctIndex: 1,
        explanation:
          "The fifty-fifty construction is a simplified approach that fixes the split at 50/50 rather than solving for each wing's precise, duration-based weighting.",
      },
      {
        id: "q2",
        prompt: "What is the main appeal of a fifty-fifty butterfly compared to a fully dollar-duration-neutral butterfly?",
        choices: [
          "It is always more profitable",
          "It's simpler and easier to set up, since it avoids solving for each wing's precise duration-based weighting",
          "It eliminates all interest-rate risk completely",
          "It requires no capital to implement",
        ],
        correctIndex: 1,
        explanation:
          "The fifty-fifty split trades off precision for simplicity — no need to calculate exact dollar-duration weightings for each wing.",
      },
      {
        id: "q3",
        prompt: "What is the main drawback of the fifty-fifty approach compared to a fully weighted dollar-duration-neutral butterfly?",
        choices: [
          "It has no drawback — the two approaches are identical",
          "It usually isn't perfectly neutral to a parallel shift in rates, since it doesn't account for the wings' differing individual durations",
          "It requires significantly more capital to implement",
          "It can only be used with government bonds",
        ],
        correctIndex: 1,
        explanation:
          "Because the wings typically have different durations from each other, a fixed 50/50 split doesn't precisely offset the body's dollar duration, leaving some residual parallel-shift exposure.",
      },
      {
        id: "q4",
        prompt: "What kind of exposure does a fifty-fifty butterfly typically retain that a true dollar-duration-neutral butterfly is designed to cancel out?",
        choices: [
          "Credit risk",
          "Some exposure to the overall level of interest rates from a parallel shift in the curve",
          "Exposure to equity market movements",
          "Currency exposure",
        ],
        correctIndex: 1,
        explanation:
          "Since the 50/50 split doesn't perfectly offset dollar duration, the position retains a small amount of sensitivity to a parallel move in rates, not just to the curve's shape.",
      },
      {
        id: "q5",
        prompt: "Why might a trader choose a fifty-fifty butterfly despite its imprecision?",
        choices: [
          "It is required by regulation for all butterfly trades",
          "Its simplicity and transparency make it an easy starting point, even at the cost of some residual parallel-shift exposure",
          "It always produces better returns than a precisely weighted butterfly",
          "It cannot be constructed using real bonds",
        ],
        correctIndex: 1,
        explanation:
          "Traders who want a quick, easy-to-communicate position often accept the small imprecision of a fixed 50/50 split rather than running a more involved weighting calculation.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "fixed-income-regression-weighted-butterfly",
    title: "Regression-weighted butterfly",
    summary: "Weighting a butterfly's wings using a statistical regression of how each maturity has historically moved relative to the body, rather than a simple duration calculation.",
    body: [
      { type: "heading", text: "Weighting by Historical Data" },
      { type: "paragraph", text: "A regression-weighted butterfly improves on simpler weighting methods by using historical data: instead of weighting the wings purely by dollar duration, which only captures a bond's theoretical price sensitivity, or splitting 50/50, which ignores the wings' relative behavior entirely, it runs a statistical regression of how each wing's yield has actually moved historically relative to the body's yield, and uses those regression coefficients, the \"betas\" of each wing to the body, to set the weights." },
      { type: "heading", text: "Why Duration Alone Isn't Enough" },
      { type: "paragraph", text: "This matters because, in practice, different points on the yield curve don't always move in the simple, proportional way that a pure duration calculation assumes — the short end of the curve might be more sensitive to central bank policy changes, for example, while the long end responds more to inflation expectations, so their actual historical co-movement with the body can differ from what a dollar-duration calculation alone would predict." },
      { type: "heading", text: "A More Robust Neutrality" },
      { type: "paragraph", text: "By weighting the wings according to their empirically observed sensitivity to the body, rather than their theoretical duration-based sensitivity, a regression-weighted butterfly aims to be neutral to the kinds of rate moves that have actually occurred historically, which can make it more robust to real-world curve behavior than a purely theoretical dollar-duration-neutral construction." },
      { type: "heading", text: "The Limits of a Historical Fit" },
      { type: "paragraph", text: "The tradeoff is that regression-based weights depend on the historical period used to estimate them, and historical relationships between yield-curve points aren't guaranteed to hold going forward — a regression fit over a very different rate environment, say, a period of aggressive central-bank tightening, may not describe how the curve behaves in the future, so the weights need to be periodically re-estimated and used with the understanding that they're describing the past, not guaranteeing the future." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "How does a regression-weighted butterfly determine its wing weights?",
        choices: [
          "By splitting the weight 50/50 between the wings regardless of history",
          "By running a statistical regression of how each wing's yield has historically moved relative to the body's yield, and using those coefficients to set the weights",
          "By ignoring the body entirely and weighting only the wings against each other",
          "By using a fixed weight that never changes across any butterfly trade",
        ],
        correctIndex: 1,
        explanation:
          "This construction uses empirical, historically observed relationships between the wings and the body, rather than a purely theoretical duration calculation or a fixed split.",
      },
      {
        id: "q2",
        prompt: "Why might a regression-based weighting differ from a pure dollar-duration weighting?",
        choices: [
          "They are always mathematically identical",
          "Different points on the curve don't always move in the simple, proportional way a duration calculation assumes — actual historical co-movement can differ from theoretical sensitivity",
          "Regression weighting ignores yield curve data entirely",
          "Dollar duration cannot be calculated for any bond",
        ],
        correctIndex: 1,
        explanation:
          "The short and long ends of the curve can respond differently to different drivers (like policy changes versus inflation expectations), so their real historical relationship to the body may not match what a duration calculation alone predicts.",
      },
      {
        id: "q3",
        prompt: "What is the potential benefit of weighting wings by their empirically observed sensitivity rather than theoretical duration?",
        choices: [
          "It guarantees a risk-free trade",
          "It aims to be neutral to the kinds of rate moves that have actually occurred historically, potentially making it more robust to real-world curve behavior",
          "It eliminates the need to hold any bonds at all",
          "It has no potential benefit over other weighting methods",
        ],
        correctIndex: 1,
        explanation:
          "By using historically observed co-movement rather than a purely theoretical calculation, the trade is designed to match actual observed curve behavior more closely.",
      },
      {
        id: "q4",
        prompt: "What is a key limitation of regression-based weights?",
        choices: [
          "They are always identical to a fifty-fifty split",
          "They depend on the historical period used to estimate them, and historical relationships aren't guaranteed to hold going forward",
          "Regression weights cannot be recalculated once set",
          "They require no historical data whatsoever",
        ],
        correctIndex: 1,
        explanation:
          "A regression fit over one rate environment may not accurately describe curve behavior in a different future environment, so the weights need periodic re-estimation.",
      },
      {
        id: "q5",
        prompt: "Why might weights estimated during a period of aggressive central-bank tightening be a poor guide for future trades?",
        choices: [
          "Central bank policy has no effect on the yield curve",
          "Historical relationships between yield-curve points estimated in one environment aren't guaranteed to describe how the curve behaves in a different future environment",
          "Regression weights are always accurate regardless of the period used",
          "Tightening periods make regression analysis impossible to run",
        ],
        correctIndex: 1,
        explanation:
          "The regression describes the past relationship observed during a specific period — if future conditions differ meaningfully, that historical relationship may no longer hold.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "fixed-income-maturity-weighted-butterfly",
    title: "Maturity-weighted butterfly",
    summary: "Weighting a butterfly's wings by their maturity distance from the body, a simple rule-of-thumb alternative to duration- or regression-based weighting.",
    body: [
      { type: "heading", text: "Weighting by Maturity Distance" },
      { type: "paragraph", text: "A maturity-weighted butterfly sets its wing weights based on each wing's maturity distance from the body, rather than on dollar duration or a historical regression — for example, weighting the short wing and long wing inversely to how far their maturities sit from the body's maturity, so a wing closer to the body in maturity terms gets a larger weight than one further away." },
      { type: "heading", text: "A Simple, Mechanical Rule" },
      { type: "paragraph", text: "This is a simpler, more mechanical rule of thumb than either the dollar-duration-neutral or regression-weighted approaches: it doesn't require calculating each bond's precise duration or running a statistical regression on historical yield relationships, just measuring the maturity gap between each wing and the body, which makes it fast and easy to apply consistently across many different butterfly trades." },
      { type: "heading", text: "Only a Rough Proxy" },
      { type: "paragraph", text: "The tradeoff is that maturity distance is only a rough proxy for a bond's actual interest-rate sensitivity — two bonds the same distance in years from the body don't necessarily have the same dollar duration or the same historical co-movement with the body, especially since duration doesn't scale in a perfectly linear way with maturity, a bond's duration grows more slowly than its maturity, especially at longer maturities, because of the effect of coupon payments arriving along the way." },
      { type: "heading", text: "A Starting Point, Not a Final Answer" },
      { type: "paragraph", text: "In practice, a maturity-weighted butterfly is often used as a quick, intuitive starting point for structuring a butterfly trade — especially when a trader wants a fast, rule-of-thumb construction — before potentially refining the position with a more precise dollar-duration or regression-based weighting if the trade is going to be held for a meaningful period or sized significantly." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does a maturity-weighted butterfly use to set its wing weights?",
        choices: [
          "A statistical regression of historical yield movements",
          "Each wing's maturity distance from the body",
          "The credit rating of each bond",
          "A fixed 50/50 split regardless of maturity",
        ],
        correctIndex: 1,
        explanation:
          "This construction weights the wings based on how far their maturities sit from the body's maturity, rather than on duration calculations or historical regression.",
      },
      {
        id: "q2",
        prompt: "What is the main appeal of the maturity-weighted approach?",
        choices: [
          "It is the most mathematically precise weighting method available",
          "It's simple and mechanical — no need to calculate precise duration or run a statistical regression, just measure the maturity gap",
          "It guarantees perfect dollar-duration neutrality",
          "It requires the most extensive historical data of any method",
        ],
        correctIndex: 1,
        explanation:
          "Maturity-weighting is valued for being fast and easy to apply consistently, since it only requires measuring maturity distances rather than more involved calculations.",
      },
      {
        id: "q3",
        prompt: "Why is maturity distance only a rough proxy for a bond's actual interest-rate sensitivity?",
        choices: [
          "Maturity distance perfectly predicts interest-rate sensitivity in all cases",
          "Duration doesn't scale in a perfectly linear way with maturity — it grows more slowly than maturity, especially at longer maturities, due to coupon payments arriving along the way",
          "Interest-rate sensitivity is unrelated to a bond's maturity",
          "All bonds have identical duration regardless of maturity",
        ],
        correctIndex: 1,
        explanation:
          "Two bonds the same distance in years from the body don't necessarily have matching dollar duration, since duration grows more slowly than maturity because of intervening coupon payments.",
      },
      {
        id: "q4",
        prompt: "How does maturity-weighting compare in complexity to dollar-duration-neutral or regression-weighted construction?",
        choices: [
          "It is more complex than both alternatives",
          "It is simpler than both, since it skips precise duration calculations and historical regression entirely",
          "It is identical in complexity to a regression-weighted butterfly",
          "Complexity cannot be compared across these methods",
        ],
        correctIndex: 1,
        explanation:
          "Maturity-weighting is the most mechanical and simplest of the three approaches, trading precision for ease of use.",
      },
      {
        id: "q5",
        prompt: "When is a maturity-weighted butterfly often used in practice?",
        choices: [
          "Only for trades held for multiple decades",
          "As a quick, intuitive starting point, potentially refined later with a more precise weighting method for larger or longer-held positions",
          "Only when regression data is completely unavailable",
          "It is never used in practice",
        ],
        correctIndex: 1,
        explanation:
          "Its simplicity makes it a practical first-pass construction, which a trader might later refine with dollar-duration or regression-based weighting for a more significant or longer-held trade.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "fixed-income-yield-curve-spread",
    title: "Yield curve spread (flatteners & steepeners)",
    summary: "Trading the difference in yield between two points on the curve, betting on the curve steepening or flattening rather than on the overall level of rates.",
    body: [
      { type: "heading", text: "Betting on the Spread, Not the Level" },
      { type: "paragraph", text: "A yield curve spread trade bets on the difference between yields at two points on the curve — commonly a short maturity and a long maturity, such as the 2-year and 10-year — rather than on the overall direction of interest rates. The trader goes long one maturity and short the other, so the position's return depends on how that yield spread changes, not on whether rates broadly rise or fall." },
      { type: "heading", text: "The Steepener" },
      { type: "paragraph", text: "A \"steepener\" bets that the spread between the long and short yields will widen, the curve becoming steeper, typically constructed by being short the long-maturity bond, or receiving fixed on a long-dated swap, and long the short-maturity bond, profiting if long yields rise relative to short yields, or short yields fall relative to long yields." },
      { type: "heading", text: "The Flattener" },
      { type: "paragraph", text: "A \"flattener\" bets the opposite: that the spread will narrow, the curve flattening, or even inverting, where short yields exceed long yields, typically constructed with the reverse positioning, long the long-maturity bond and short the short-maturity bond, profiting as the gap between them shrinks." },
      { type: "heading", text: "A View on Monetary Policy" },
      { type: "paragraph", text: "These trades are often motivated by a view on monetary policy and the economic cycle: central bank rate hikes tend to push up short-term yields more than long-term ones, flattening the curve, while expectations of future rate cuts or economic weakness can pull short yields down faster than long ones, steepening the curve — so curve-spread trades let a trader express a view on the path and shape of policy without taking a pure directional bet on where rates end up overall." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does a yield curve spread trade bet on?",
        choices: [
          "The overall direction interest rates move",
          "The difference in yield between two points on the curve — how that spread changes, not the overall rate level",
          "The credit rating of a single bond",
          "The total number of bonds outstanding in the market",
        ],
        correctIndex: 1,
        explanation:
          "A curve spread trade is long one maturity and short another, so its return depends on the relationship between the two yields, not on where rates broadly end up.",
      },
      {
        id: "q2",
        prompt: "What does a \"steepener\" trade bet on?",
        choices: [
          "That the spread between long and short yields will widen — the curve becoming steeper",
          "That the spread between long and short yields will narrow",
          "That interest rates will stay perfectly flat forever",
          "That the bond market will close entirely",
        ],
        correctIndex: 0,
        explanation:
          "A steepener profits when long yields rise relative to short yields, or short yields fall relative to long yields, widening the spread between them.",
      },
      {
        id: "q3",
        prompt: "What does a \"flattener\" trade bet on?",
        choices: [
          "That the yield curve will become steeper",
          "That the spread between long and short yields will narrow, the curve flattening or even inverting",
          "That short-term yields will always exceed long-term yields permanently",
          "That the trade has no relationship to yield spreads at all",
        ],
        correctIndex: 1,
        explanation:
          "A flattener is positioned the opposite way from a steepener, profiting as the gap between long and short yields shrinks.",
      },
      {
        id: "q4",
        prompt: "How is a steepener typically constructed?",
        choices: [
          "Long the long-maturity bond and short the short-maturity bond",
          "Short the long-maturity bond (or receiving fixed on a long-dated swap) and long the short-maturity bond",
          "Long both the long- and short-maturity bonds in equal amounts",
          "Short both the long- and short-maturity bonds in equal amounts",
        ],
        correctIndex: 1,
        explanation:
          "A steepener is short the long end and long the short end, profiting as the spread between them widens.",
      },
      {
        id: "q5",
        prompt: "Why might central bank policy motivate a curve-spread trade?",
        choices: [
          "Central bank policy has no effect on any part of the yield curve",
          "Rate hikes tend to push up short-term yields more than long-term ones (flattening), while expectations of cuts or economic weakness can pull short yields down faster (steepening), letting a trader express a view on policy path and curve shape",
          "Central banks directly set both the 2-year and 10-year yields to be identical at all times",
          "Curve-spread trades are unrelated to monetary policy",
        ],
        correctIndex: 1,
        explanation:
          "Because short-term yields are more directly influenced by near-term policy expectations, shifts in the expected policy path tend to move the short end more than the long end, which curve-spread trades are designed to capture.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "fixed-income-low-risk-factor",
    title: "Low-risk factor",
    summary: "The fixed-income analog of the equity low-volatility anomaly — lower-risk bonds have historically delivered comparable or better risk-adjusted returns than higher-risk ones.",
    body: [
      { type: "heading", text: "The Fixed-Income Low-Volatility Parallel" },
      { type: "paragraph", text: "The low-risk factor in fixed income mirrors the low-volatility anomaly seen in equities: bonds with lower risk, measured by some combination of lower duration, higher credit quality, or lower historical price volatility, have historically delivered risk-adjusted returns comparable to, or better than, higher-risk bonds, even though standard theory suggests investors should be compensated with higher returns for taking on more risk." },
      { type: "heading", text: "Building a Low-Risk Portfolio" },
      { type: "paragraph", text: "A systematic low-risk factor strategy ranks bonds in a universe by a risk measure such as duration, credit spread, or historical volatility, and tilts the portfolio toward the lower-risk end of that ranking, often while still targeting a competitive overall yield by selecting the least risky bonds within each maturity or credit-quality bucket rather than simply buying the shortest, safest bonds available." },
      { type: "heading", text: "Why the Factor Persists" },
      { type: "paragraph", text: "One proposed explanation for why this factor persists is similar to the equity version: many fixed-income investors are constrained by mandates that push them toward higher-yielding, higher-risk bonds to hit a target return, or are drawn to riskier bonds for their higher headline yield without fully pricing in the additional risk, which can leave lower-risk bonds comparatively underpriced relative to the risk they actually carry." },
      { type: "heading", text: "A Defensive Tilt" },
      { type: "paragraph", text: "Because it favors bonds that hold up better in stressed markets, lower duration and higher credit quality both tend to cushion a portfolio during a selloff, a low-risk factor tilt is often used to improve a fixed-income portfolio's resilience during downturns, similar to how the equity low-volatility factor is used, rather than as a strategy for chasing the single highest raw yield." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does the fixed-income low-risk factor draw a parallel to in equities?",
        choices: ["The value factor", "The low-volatility anomaly", "The momentum factor", "The size factor"],
        correctIndex: 1,
        explanation:
          "Just as low-volatility stocks have historically shown comparable or better risk-adjusted returns than high-volatility stocks, lower-risk bonds have shown a similar pattern relative to higher-risk bonds.",
      },
      {
        id: "q2",
        prompt: "How is \"risk\" typically measured for ranking bonds in a low-risk factor strategy?",
        choices: [
          "Only by the bond's coupon rate",
          "Some combination of lower duration, higher credit quality, or lower historical price volatility",
          "Only by the number of bonds a company has issued",
          "Risk cannot be measured for bonds",
        ],
        correctIndex: 1,
        explanation:
          "A low-risk factor strategy typically ranks bonds using one or more risk measures like duration, credit quality, and historical volatility, then tilts toward the lower-risk end.",
      },
      {
        id: "q3",
        prompt: "What is one proposed explanation for why the low-risk factor persists in fixed income?",
        choices: [
          "Regulations require all investors to buy only the riskiest bonds",
          "Some investors are drawn to higher-yielding, riskier bonds without fully pricing in the additional risk, leaving lower-risk bonds comparatively underpriced",
          "Lower-risk bonds are illegal to purchase in most markets",
          "The low-risk factor has never actually been observed",
        ],
        correctIndex: 1,
        explanation:
          "Investor demand skewed toward higher-yielding, riskier bonds, sometimes driven by mandates targeting a return level, can leave safer bonds relatively undervalued given the risk they carry.",
      },
      {
        id: "q4",
        prompt: "Why might a low-risk factor tilt improve a fixed-income portfolio's behavior during a market downturn?",
        choices: [
          "Lower duration and higher credit quality both tend to cushion a portfolio during a selloff",
          "Low-risk bonds always lose more value than high-risk bonds during downturns",
          "Downturns have no effect on bond portfolios of any risk level",
          "A low-risk tilt eliminates the need to hold any bonds during a downturn",
        ],
        correctIndex: 0,
        explanation:
          "Bonds with lower duration and stronger credit quality tend to be more resilient during market stress, which is why the low-risk factor is often used to improve portfolio resilience.",
      },
      {
        id: "q5",
        prompt: "How does a systematic low-risk factor strategy typically construct its bond selection?",
        choices: [
          "It buys only the single shortest-maturity bond available regardless of yield",
          "It ranks bonds by a risk measure and tilts toward lower risk, often selecting the least risky bonds within each maturity or credit bucket to maintain a competitive yield",
          "It selects bonds entirely at random",
          "It only ever holds bonds issued by a single company",
        ],
        correctIndex: 1,
        explanation:
          "Rather than simply buying the shortest, safest bonds, the strategy tilts toward lower risk while still trying to maintain a reasonable yield by selecting carefully within maturity/credit buckets.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "fixed-income-value-factor",
    title: "Value factor",
    summary: "Buying bonds that are cheap relative to a fundamental measure of credit risk, on the premise the market has temporarily mispriced them.",
    body: [
      { type: "heading", text: "Finding Cheap Credit Spreads" },
      { type: "paragraph", text: "The fixed-income value factor identifies bonds that trade cheaply relative to some measure of their fundamental credit risk — for example, a bond whose credit spread, the extra yield it pays over a comparable risk-free bond, is wider than what its issuer's underlying fundamentals, like leverage, profitability, or credit rating, would seem to justify. The strategy buys these apparently underpriced bonds, betting the market will eventually recognize the mispricing and the spread will narrow." },
      { type: "heading", text: "Ranking Bonds Against Fair Value" },
      { type: "paragraph", text: "A systematic implementation typically models a bond's \"fair\" credit spread based on issuer fundamentals and market-wide credit conditions, compares that fair-value estimate to the bond's actual traded spread, and ranks bonds by the gap between the two, buying the bonds trading at the widest positive gap, cheapest relative to fair value, and potentially avoiding or shorting the bonds trading tightest relative to their fundamentals." },
      { type: "heading", text: "The Fixed-Income Value Trap" },
      { type: "paragraph", text: "As with the equity value factor, part of the challenge is distinguishing a genuine, temporary mispricing from a spread that's wide for a good reason: a bond can trade cheap because the market is pricing in a real, elevated risk of default or downgrade that a backward-looking fundamentals model hasn't yet fully captured, which is the fixed-income analog of the equity \"value trap.\"" },
      { type: "heading", text: "When the Factor Wins and Loses" },
      { type: "paragraph", text: "The value factor in credit has historically shown periods of both strong performance and extended underperformance, similar to equity value — it tends to do well when previously depressed credits recover, but can suffer during periods of sustained credit deterioration or a \"flight to quality,\" when investors broadly move away from cheaper, riskier credits regardless of their fundamentals." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does the fixed-income value factor look for?",
        choices: [
          "Bonds with the highest possible credit rating only",
          "Bonds trading cheaply relative to a fundamental measure of their credit risk, such as a wider-than-justified credit spread",
          "Bonds issued by the largest companies only",
          "Bonds with no coupon payments",
        ],
        correctIndex: 1,
        explanation:
          "The value factor identifies bonds whose market-priced credit spread is wider than what the issuer's underlying fundamentals would seem to justify, betting on that mispricing correcting.",
      },
      {
        id: "q2",
        prompt: "How does a systematic value strategy typically rank bonds?",
        choices: [
          "By ranking issuers alphabetically",
          "By comparing a bond's actual traded credit spread to a modeled \"fair value\" spread based on issuer fundamentals, and ranking by the gap between the two",
          "By ignoring credit spreads entirely",
          "By ranking bonds solely on their coupon rate",
        ],
        correctIndex: 1,
        explanation:
          "The strategy models what a bond's spread \"should\" be based on fundamentals, then buys bonds where the actual spread is unusually wide relative to that estimate.",
      },
      {
        id: "q3",
        prompt: "What is the fixed-income analog of the equity \"value trap\"?",
        choices: [
          "A bond that always reverts to fair value quickly",
          "A bond trading cheap because the market is pricing in a real, elevated default or downgrade risk that a fundamentals model hasn't yet captured",
          "A bond with no credit risk whatsoever",
          "A bond that has never traded below par",
        ],
        correctIndex: 1,
        explanation:
          "Just as a cheap stock can be a value trap if it's cheap for a real reason, a wide-spread bond can be genuinely risky rather than temporarily mispriced, and a backward-looking model may not catch that in time.",
      },
      {
        id: "q4",
        prompt: "When does the credit value factor tend to perform well?",
        choices: [
          "Only during periods when all credit spreads are identical",
          "When previously depressed credits recover",
          "Only during a flight to quality",
          "The value factor has no relationship to credit-market conditions",
        ],
        correctIndex: 1,
        explanation:
          "Like equity value, the credit value factor benefits when the market's pessimism about specific cheap bonds proves overdone and those bonds recover.",
      },
      {
        id: "q5",
        prompt: "When might the credit value factor underperform?",
        choices: [
          "During periods of sustained credit deterioration or a \"flight to quality,\" when investors broadly move away from cheaper, riskier credits",
          "It never underperforms under any market conditions",
          "Only when interest rates are exactly zero",
          "Only on the last trading day of the year",
        ],
        correctIndex: 0,
        explanation:
          "During periods when credit conditions are worsening broadly or investors are fleeing to safety, cheap, riskier credits can continue underperforming regardless of their fundamentals, hurting the value factor.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "fixed-income-carry-factor",
    title: "Carry factor",
    summary: "Favoring bonds with the highest yield relative to their risk, on the premise that, absent a change in rates or spreads, higher carry translates directly into higher realized return.",
    body: [
      { type: "heading", text: "What Carry Means in Fixed Income" },
      { type: "paragraph", text: "Carry, in fixed income, refers to the return an investor earns simply from holding a bond over time if nothing else changes — market rates stay the same, credit spreads stay the same, and the yield curve's shape stays the same. The carry factor strategy tilts a portfolio toward bonds offering the most carry relative to their risk, on the premise that this income comes directly through to realized return unless something moves against the position." },
      { type: "heading", text: "Sources of Carry" },
      { type: "paragraph", text: "Carry can come from multiple sources: a bond's yield relative to the risk-free rate, credit carry, a longer-maturity bond's higher yield relative to a shorter one on an upward-sloping curve, term carry, closely related to rolling down the yield curve, or the funding-rate difference in a leveraged position. A systematic carry strategy typically ranks available bonds by carry-per-unit-of-risk and tilts toward the highest-ranked ones." },
      { type: "heading", text: "The Central Assumption — and Risk" },
      { type: "paragraph", text: "The strategy's central assumption, that today's yields and spreads are a reasonable guide to future realized returns, is also its central risk: carry strategies tend to earn steady, positive returns most of the time, but can suffer sharp losses when the conditions the carry was compensating for actually occur, such as a sudden widening of credit spreads or a sharp rise in rates, which erodes bond prices faster than the accumulated carry can offset." },
      { type: "heading", text: "A Pattern Like Selling Insurance" },
      { type: "paragraph", text: "This risk profile, small, steady gains most of the time, occasional larger losses when the underlying risk materializes, is a recurring pattern across carry strategies in many asset classes, it shows up in currency carry trades and futures roll-yield strategies too, and is often described as resembling an insurance-selling business: collecting a steady premium in exchange for bearing the risk of an occasional larger payout." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does \"carry\" refer to in fixed income?",
        choices: [
          "The physical transportation of bonds between markets",
          "The return an investor earns simply from holding a bond over time if market rates, spreads, and the curve's shape stay unchanged",
          "A bond's credit rating",
          "The fee charged by a broker to trade a bond",
        ],
        correctIndex: 1,
        explanation:
          "Carry is the return that accrues to a bondholder purely from holding the position, assuming no adverse change in the underlying market conditions.",
      },
      {
        id: "q2",
        prompt: "What are two sources of carry mentioned for a bond position?",
        choices: [
          "Credit carry (yield relative to the risk-free rate) and term carry (a longer-maturity bond's higher yield on an upward-sloping curve)",
          "Only the bond's face value",
          "Only changes in a company's stock price",
          "The number of coupon payments per year alone",
        ],
        correctIndex: 0,
        explanation:
          "Carry can come from a bond's credit spread over the risk-free rate, or from the additional yield a longer maturity offers on an upward-sloping curve, closely related to rolling down the curve.",
      },
      {
        id: "q3",
        prompt: "How does a systematic carry strategy typically select bonds?",
        choices: [
          "By avoiding all bonds with any yield whatsoever",
          "By ranking available bonds by carry-per-unit-of-risk and tilting the portfolio toward the highest-ranked ones",
          "By selecting bonds at random regardless of yield",
          "By only holding bonds with zero carry",
        ],
        correctIndex: 1,
        explanation:
          "The strategy explicitly ranks and favors bonds offering the most carry relative to their risk, rather than an unweighted selection.",
      },
      {
        id: "q4",
        prompt: "What is the central risk of a carry strategy?",
        choices: [
          "Carry strategies have no risk once implemented",
          "It can suffer sharp losses when the conditions the carry was compensating for actually occur, such as a sudden spread widening or sharp rate rise",
          "Carry strategies only work if interest rates are exactly zero",
          "The risk that bond issuers stop paying coupons entirely",
        ],
        correctIndex: 1,
        explanation:
          "Carry assumes today's yields are a reasonable guide to the future; when the risks embedded in that yield materialize, like a spread blowout, losses can occur faster than accumulated carry can offset.",
      },
      {
        id: "q5",
        prompt: "What business is a carry strategy's return profile often compared to?",
        choices: [
          "A bank's checking account services",
          "An insurance-selling business — collecting steady premiums in exchange for bearing the risk of an occasional larger payout",
          "A charity with no revenue model",
          "A business with no exposure to any form of risk",
        ],
        correctIndex: 1,
        explanation:
          "Carry strategies typically earn small, steady gains most of the time, punctuated by occasional larger losses when the underlying risk materializes — a pattern that resembles selling insurance.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "fixed-income-cds-basis-arbitrage",
    title: "CDS basis arbitrage",
    summary: "Trading the gap between a company's bond credit spread and the cost of insuring against its default with a credit default swap, betting the two converge.",
    body: [
      { type: "heading", text: "What a Credit Default Swap Is" },
      { type: "paragraph", text: "A credit default swap (CDS) is a contract that functions like insurance against a bond issuer defaulting: the buyer pays a periodic premium, the CDS spread, and receives a payout if the issuer defaults, while the seller collects the premium and bears the default risk. In principle, the CDS spread on a company's debt and the credit spread on its actual bonds should be closely linked, since both are compensation for the same underlying default risk, but in practice, the two can and do diverge, and that gap is called the CDS basis." },
      { type: "heading", text: "The Negative Basis Trade" },
      { type: "paragraph", text: "The basis is defined as the CDS spread minus the bond's credit spread. A \"negative basis\" trade, buying the bond and buying CDS protection on the same issuer, profits if the bond's credit spread is unusually wide relative to the CDS spread and the two converge, since the trader earns the bond's wide credit spread while paying the relatively cheaper CDS premium for protection, largely hedging out the underlying default risk in the process." },
      { type: "heading", text: "Why It's Close to Risk-Neutral" },
      { type: "paragraph", text: "Because the position is long the bond and long protection against that same bond defaulting, the trade is close to credit-risk-neutral in theory — if the issuer actually defaults, the CDS payout is designed to offset the loss on the bond — which means the trade's expected profit comes mainly from the basis converging, not from taking a view on whether the company will actually default." },
      { type: "heading", text: "Frictions That Keep the Basis Wide" },
      { type: "paragraph", text: "In practice, the basis doesn't always converge cleanly, and several frictions can keep it persistently wide or even cause it to move further apart: differences in the cheapest-to-deliver bond eligible for CDS settlement, funding costs and balance-sheet constraints for financing the bond position, counterparty risk on the CDS itself, and technical supply-and-demand imbalances between the bond and CDS markets — all of which mean a negative-basis trade, despite being theoretically low-risk, still carries real execution and financing risk." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does a credit default swap (CDS) function like?",
        choices: [
          "A stock option on the issuer's equity",
          "Insurance against a bond issuer defaulting — the buyer pays a premium and receives a payout if the issuer defaults",
          "A guaranteed fixed-rate savings account",
          "A type of government bond",
        ],
        correctIndex: 1,
        explanation:
          "A CDS lets the buyer pay a periodic premium in exchange for a payout if the underlying issuer defaults, functioning like default insurance.",
      },
      {
        id: "q2",
        prompt: "What is the \"CDS basis\"?",
        choices: [
          "The face value of the underlying bond",
          "The CDS spread minus the bond's credit spread",
          "The total number of CDS contracts outstanding",
          "The coupon rate on the underlying bond",
        ],
        correctIndex: 1,
        explanation:
          "The basis measures the gap between the cost of CDS protection and the bond's own credit spread, which in principle should be closely linked since both compensate for the same default risk.",
      },
      {
        id: "q3",
        prompt: "How is a \"negative basis\" trade constructed?",
        choices: [
          "Selling the bond and selling CDS protection",
          "Buying the bond and buying CDS protection on the same issuer",
          "Buying the bond and selling CDS protection",
          "Selling the bond and buying CDS protection",
        ],
        correctIndex: 1,
        explanation:
          "A negative basis trade goes long the bond, earning its credit spread, while also buying CDS protection, paying the CDS premium, profiting if the bond's spread is wide relative to the CDS spread and the two converge.",
      },
      {
        id: "q4",
        prompt: "Why is a negative basis trade close to credit-risk-neutral in theory?",
        choices: [
          "Because it has no exposure to the issuer at all",
          "Because the position is long the bond and long protection against that same bond defaulting, so a default's loss on the bond is designed to be offset by the CDS payout",
          "Because CDS contracts eliminate all forms of risk",
          "Because the trade requires no capital",
        ],
        correctIndex: 1,
        explanation:
          "Being simultaneously long the bond and long default protection on it means an actual default largely cancels out — the bond loss is offset by the CDS payout — leaving the basis's convergence as the main driver of profit.",
      },
      {
        id: "q5",
        prompt: "What can keep the CDS basis from converging cleanly in practice?",
        choices: [
          "Nothing — the basis always converges perfectly and immediately",
          "Frictions like cheapest-to-deliver differences, funding costs, counterparty risk, and supply-demand imbalances between the bond and CDS markets",
          "The basis is fixed by regulation and never changes",
          "CDS contracts cannot be traded once issued",
        ],
        correctIndex: 1,
        explanation:
          "Despite being theoretically low-risk, negative basis trades face real-world frictions — financing costs, delivery mechanics, counterparty exposure, and market technicals — that can keep the basis persistently wide.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "fixed-income-swap-spread-arbitrage",
    title: "Swap-spread arbitrage",
    summary: "Trading the gap between a fixed-for-floating interest rate swap's fixed rate and the yield on a government bond of the same maturity, betting the spread reverts to its typical range.",
    body: [
      { type: "heading", text: "What the Swap Spread Is" },
      { type: "paragraph", text: "An interest rate swap exchanges a stream of fixed payments for a stream of floating payments, typically tied to a short-term reference rate, over a set period. The \"swap spread\" is the difference between the fixed rate on a swap and the yield on a government bond of the same maturity — for example, the 10-year swap rate minus the 10-year government bond yield. Because both reflect the market's view of interest rates over the same horizon, they tend to move together, but the swap spread itself fluctuates within a historical range influenced by factors specific to each market." },
      { type: "heading", text: "Betting on Reversion" },
      { type: "paragraph", text: "Swap-spread arbitrage bets that a swap spread which has moved unusually wide or narrow relative to its historical range will revert back toward that typical level — a trader might, for example, receive fixed on the swap and simultaneously short the government bond, or the reverse, constructing a position that profits as the swap spread moves back toward its normal range, largely independent of which direction interest rates broadly move." },
      { type: "heading", text: "What Drives the Spread" },
      { type: "paragraph", text: "Swap spreads are driven by factors distinct from the general level of rates: the perceived credit risk of the bank counterparties in the swap market versus the near-risk-free status of government debt, the relative supply of new government bond issuance versus swap market demand, and, especially since the 2008 financial crisis, regulatory and balance-sheet constraints on banks' capacity to intermediate swap trades, all of which can push the spread away from its historical norm for reasons unrelated to the direction of interest rates." },
      { type: "heading", text: "Not Risk-Free" },
      { type: "paragraph", text: "Like other spread-arbitrage trades, the position is not risk-free: dealer balance-sheet constraints and shifts in bond supply can cause swap spreads to move further away from historical norms, and can stay unusually wide or narrow for extended periods rather than reverting quickly — a well-known example is when swap spreads turned negative for long-maturity swaps after 2008, a level that would have looked anomalous, and unprofitable to bet against, under pre-crisis assumptions about the swap market's structure." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What is the \"swap spread\"?",
        choices: [
          "The difference between two different companies' stock prices",
          "The difference between the fixed rate on an interest rate swap and the yield on a government bond of the same maturity",
          "The coupon rate on a single government bond",
          "The spread between a CDS contract and its underlying bond",
        ],
        correctIndex: 1,
        explanation:
          "The swap spread compares the fixed leg of an interest rate swap to a government bond yield of matching maturity — both reflect rate expectations over the same horizon.",
      },
      {
        id: "q2",
        prompt: "What does swap-spread arbitrage bet on?",
        choices: [
          "The overall direction interest rates will move",
          "That a swap spread which has moved unusually wide or narrow relative to its historical range will revert back toward that typical level",
          "That government bonds will default",
          "That interest rate swaps will be banned by regulators",
        ],
        correctIndex: 1,
        explanation:
          "The trade is constructed to profit from the swap spread's mean-reversion toward its normal historical range, largely independent of the broad direction of rates.",
      },
      {
        id: "q3",
        prompt: "What factors can drive swap spreads independently of the general level of interest rates?",
        choices: [
          "Nothing — swap spreads move in lockstep with rate levels at all times",
          "The perceived credit risk of swap-market bank counterparties, relative government bond supply versus swap demand, and regulatory/balance-sheet constraints on banks",
          "Only the color of the currency used",
          "Swap spreads cannot be influenced by any external factor",
        ],
        correctIndex: 1,
        explanation:
          "Swap spreads reflect factors specific to the swap and government bond markets separately — counterparty credit perception, issuance supply, and post-crisis regulatory constraints — not just the general rate level.",
      },
      {
        id: "q4",
        prompt: "What happened to swap spreads for long-maturity swaps after the 2008 financial crisis?",
        choices: [
          "They stayed exactly the same as before the crisis",
          "They turned negative, a level that would have looked anomalous under pre-crisis assumptions about the swap market",
          "They were permanently eliminated by regulators",
          "They became identical to CDS spreads",
        ],
        correctIndex: 1,
        explanation:
          "Post-2008, long-maturity swap spreads turned negative, illustrating how swap spreads can move to levels that pre-crisis models wouldn't have anticipated, and can persist rather than quickly reverting.",
      },
      {
        id: "q5",
        prompt: "Why is swap-spread arbitrage not considered risk-free, despite betting on reversion to a historical norm?",
        choices: [
          "Because government bonds carry no interest-rate risk",
          "Because dealer balance-sheet constraints and shifts in bond supply can cause spreads to move further from historical norms and stay unusually wide or narrow for extended periods rather than reverting quickly",
          "Because swaps cannot be traded by any market participant",
          "There is no risk in this trade once it is constructed",
        ],
        correctIndex: 1,
        explanation:
          "Structural factors like balance-sheet constraints can keep spreads away from their historical range for a long time, meaning the anticipated reversion may be delayed or not happen as expected, exposing the trade to real losses in the meantime.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "fixed-income-what-is-a-bond",
    title: "What Is a Bond?",
    summary:
      "A loan in security form — the issuer borrows money and promises fixed payments back, in contrast to a stock's ownership stake with no promised repayment.",
    body: [
      { type: "heading", text: "A Loan, Packaged as a Security" },
      { type: "paragraph", text: "A bond is a loan in tradable form: the issuer, a government, a municipality, or a corporation, borrows a sum of money, called the face value or par value, from investors and promises to repay it, plus interest, according to a fixed schedule. Buying a bond means becoming that issuer's lender, not its owner." },
      { type: "heading", text: "Coupons and Maturity" },
      { type: "paragraph", text: "Most bonds pay a fixed interest payment, called a coupon, at regular intervals, commonly every six months, until the bond's maturity date, when the issuer repays the full face value. A bond's coupon rate is normally set once, at issuance, and doesn't change over the bond's life even as market interest rates move around it." },
      { type: "heading", text: "A Fixed Claim, Not an Ownership Stake" },
      { type: "paragraph", text: "This is the core contrast with a stock: a bondholder is owed a specific, contractually fixed stream of payments regardless of how well or poorly the issuer's business performs, while a shareholder's payoff is entirely open-ended, tied to the company's actual profits and residual value. In exchange for that fixed, more predictable claim, a bondholder also ranks ahead of shareholders in a bankruptcy or liquidation." },
      { type: "heading", text: "Why Investors Hold Bonds" },
      { type: "paragraph", text: "Bonds are held for the combination of predictable income and, relative to stocks, lower volatility — useful for an investor who needs cash flow on a known schedule, or who wants to offset the swings of a stock-heavy portfolio with a steadier asset. That predictability comes at the cost of giving up the unlimited upside a shareholder retains if the underlying business does extremely well." },
      { type: "heading", text: "In Practice" },
      { type: "paragraph", text: "When a corporate treasurer needs to fund a new factory, they weigh two paths: sell shares in the company, diluting existing owners and giving up a claim on future profits forever, or issue bonds, borrowing a fixed sum from investors under a known schedule of interest and principal payments. Most established companies lean on bonds for routine financing needs precisely because that fixed, contractual obligation is typically cheaper than what equity investors would demand in return for taking on open-ended risk." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What is a bond, fundamentally?",
        choices: [
          "A loan in tradable form — the issuer borrows money and promises to repay it, plus interest, on a fixed schedule",
          "An ownership stake in the issuing company",
          "A guarantee of unlimited upside tied to the issuer's profits",
          "A type of insurance policy",
        ],
        correctIndex: 0,
        explanation:
          "A bond is debt: the buyer lends money to the issuer, who promises fixed repayment terms, in contrast to equity ownership.",
      },
      {
        id: "q2",
        prompt: "What is a bond's coupon?",
        choices: [
          "A discount applied at the time of purchase",
          "The fixed interest payment made at regular intervals until maturity",
          "The bond's final repayment of face value",
          "A fee charged by the bond's issuer",
        ],
        correctIndex: 1,
        explanation:
          "The coupon is the periodic interest payment a bondholder receives, set at issuance and typically unchanged for the bond's life.",
      },
      {
        id: "q3",
        prompt: "How does a bondholder's claim differ from a shareholder's?",
        choices: [
          "A bondholder is owed a fixed, contractual stream of payments, while a shareholder's payoff is open-ended and tied to company performance",
          "A bondholder owns a proportional stake in the company, exactly like a shareholder",
          "A shareholder is guaranteed a fixed repayment schedule",
          "There is no meaningful difference between the two claims",
        ],
        correctIndex: 0,
        explanation:
          "A bond promises fixed payments regardless of how the business performs, while a stock's payoff depends entirely on the company's actual results — a core distinction between debt and equity.",
      },
      {
        id: "q4",
        prompt: "In a bankruptcy or liquidation, how do bondholders rank relative to shareholders?",
        choices: [
          "Bondholders rank ahead of shareholders and are paid first",
          "Shareholders are always paid before bondholders",
          "Both are paid simultaneously in equal amounts",
          "Neither bondholders nor shareholders have any claim in a liquidation",
        ],
        correctIndex: 0,
        explanation:
          "Bondholders, as creditors, have a senior claim to shareholders, who only receive whatever residual value remains after all debt has been repaid.",
      },
      {
        id: "q5",
        prompt: "Why might an investor hold bonds instead of, or alongside, stocks?",
        choices: [
          "For predictable income and typically lower volatility, even though that means giving up a stock's unlimited upside",
          "Because bonds always outperform stocks in every market environment",
          "Because bonds carry no risk whatsoever",
          "Because bonds are legally required to be held by all investors",
        ],
        correctIndex: 0,
        explanation:
          "Bonds trade unlimited upside for a steadier, more predictable payment stream — a useful complement to the more volatile, open-ended payoff of stocks.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "fixed-income-yield-and-price",
    title: "Yield, Price, and the Inverse Relationship",
    summary:
      "Why a bond's price and its yield move in opposite directions — the single most important relationship in fixed income.",
    body: [
      { type: "heading", text: "What Yield Means" },
      { type: "paragraph", text: "A bond's yield is the annualized return an investor earns by holding it, accounting for both its coupon payments and any difference between the price paid and the face value received back at maturity. Yield to maturity, the most commonly quoted figure, captures the total return an investor would earn holding the bond all the way to maturity, reinvesting coupons along the way." },
      { type: "heading", text: "Why Price and Yield Move Oppositely" },
      { type: "paragraph", text: "A bond's coupon is fixed at issuance, so when market interest rates rise, newly issued bonds offer higher coupons, making existing, lower-coupon bonds less attractive at their original price — their price must fall for their fixed coupon to translate into a competitive yield. The reverse happens when rates fall: existing higher-coupon bonds become more attractive, and their price rises." },
      { type: "heading", text: "A Concrete Illustration" },
      { type: "paragraph", text: "A bond issued at par with a 4% coupon pays $40 a year on a $1,000 face value, regardless of what happens to rates afterward. If market rates rise to 5%, a new buyer of that same bond wouldn't pay $1,000 for only a 4% return when 5% is available elsewhere — the bond's price has to drop below $1,000 until its fixed $40 coupon, plus the price discount, works out to a competitive 5% yield." },
      { type: "heading", text: "Current Yield vs. Yield to Maturity" },
      { type: "paragraph", text: "Current yield is a simpler, cruder measure: just the annual coupon divided by the bond's current market price, ignoring any gain or loss from the price converging to face value at maturity. Yield to maturity is the more complete measure, since it accounts for that convergence too, which is why the two figures diverge whenever a bond trades away from par." },
      { type: "heading", text: "In Practice" },
      { type: "paragraph", text: "A bond fund manager holding a portfolio of 10-year government bonds watches its value drop the moment a central bank signals it will raise rates, even though not a single bond in the portfolio has changed hands. The market simply re-prices every existing bond downward so that its fixed coupon, relative to its now-lower price, offers a yield competitive with the higher-coupon bonds being issued at the new, higher rate." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does a bond's yield to maturity capture?",
        choices: [
          "The total annualized return from holding the bond to maturity, including coupons and the difference between purchase price and face value",
          "Only the bond's coupon rate, with nothing else considered",
          "The issuer's credit rating",
          "The bond's original face value alone",
        ],
        correctIndex: 0,
        explanation:
          "Yield to maturity is the more complete return measure, folding in both the coupon income and any price gain or loss as the bond converges to face value.",
      },
      {
        id: "q2",
        prompt: "Why does a bond's price fall when market interest rates rise?",
        choices: [
          "Its fixed coupon becomes less attractive relative to newly issued bonds offering higher coupons, so its price must drop to remain competitive",
          "Rising rates have no effect on existing bond prices",
          "The issuer is required to lower the bond's face value",
          "Bond prices only change when the issuer's credit rating changes",
        ],
        correctIndex: 0,
        explanation:
          "Since a bond's coupon is fixed, a rise in prevailing rates makes its existing coupon relatively less attractive, and the price has to fall for its yield to stay competitive.",
      },
      {
        id: "q3",
        prompt: "A 4%-coupon bond was issued at $1,000 par. If market rates rise to 5%, what happens to the bond's price?",
        choices: [
          "It falls below $1,000, so the fixed $40 coupon plus the price discount produces a competitive 5% yield",
          "It rises above $1,000",
          "It stays exactly at $1,000 regardless of rate changes",
          "The bond's coupon automatically increases to 5%",
        ],
        correctIndex: 0,
        explanation:
          "With a fixed $40 coupon, the only way the bond can offer a competitive 5% yield after rates rise is for its price to fall below the original $1,000.",
      },
      {
        id: "q4",
        prompt: "What does current yield measure, and how does it differ from yield to maturity?",
        choices: [
          "Current yield is just annual coupon divided by current price, ignoring the price's eventual convergence to face value that yield to maturity accounts for",
          "Current yield and yield to maturity always produce identical numbers",
          "Current yield accounts for reinvestment risk, while yield to maturity does not",
          "Current yield only applies to bonds trading exactly at par",
        ],
        correctIndex: 0,
        explanation:
          "Current yield is a simpler, cruder snapshot that ignores the price/face-value convergence over time, which is exactly what yield to maturity captures.",
      },
      {
        id: "q5",
        prompt: "What happens to existing bond prices when market interest rates fall?",
        choices: [
          "Existing, higher-coupon bonds become more attractive and their prices rise",
          "Existing bond prices fall",
          "Bond prices are unaffected by falling rates",
          "All existing bonds are recalled by their issuers",
        ],
        correctIndex: 0,
        explanation:
          "When new bonds offer lower coupons, existing bonds with higher, fixed coupons become relatively more attractive, pushing their prices up — the mirror image of the rate-rise case.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "fixed-income-duration",
    title: "Duration: Measuring Interest Rate Sensitivity",
    summary:
      "A single number that summarizes how much a bond's price is expected to move for a given change in interest rates.",
    body: [
      { type: "heading", text: "What Duration Measures" },
      { type: "paragraph", text: "Duration measures a bond's sensitivity to interest rate changes, expressed in years, but functioning as a percentage-price-change figure: a bond with a duration of 7 is expected to lose roughly 7% of its value for each 1-percentage-point rise in rates, and gain roughly 7% for each 1-point fall, all else equal." },
      { type: "heading", text: "Why Duration Isn't Just Time to Maturity" },
      { type: "paragraph", text: "Duration is related to, but not the same as, a bond's time to maturity — it's more precisely a weighted average of when the bond's cash flows (coupons and final principal) actually arrive, weighted by their present value. A bond that pays a large coupon early on has some of its value returned sooner, which pulls its duration below its raw maturity date." },
      { type: "heading", text: "What Drives a Bond's Duration Higher or Lower" },
      { type: "paragraph", text: "Longer maturity generally means higher duration, since more of the bond's value depends on a cash flow far in the future, which is more sensitive to a change in the discount rate. Lower coupons also raise duration, since more of the bond's total value sits in the single, far-off principal repayment rather than being returned steadily through coupons along the way — a zero-coupon bond has the highest duration of all, for a given maturity." },
      { type: "heading", text: "Why Duration Matters for Portfolio Construction" },
      { type: "paragraph", text: "Duration is the tool that lets a bond portfolio manager size a position, compare bonds of different maturities and coupons on a common basis, or construct a hedge, by matching the dollar duration of a hedging instrument to the dollar duration of the exposure being hedged, rather than relying on maturity alone, which can be a misleading measure of actual rate sensitivity." },
      { type: "heading", text: "In Practice" },
      { type: "paragraph", text: "A pension fund has to pay out a known stream of benefits stretching decades into the future, so its manager builds a bond portfolio whose duration is deliberately matched to the duration of those future payments. If rates move, the value of the bonds held and the present value of the benefits owed shift by roughly the same amount, keeping the fund's ability to meet its obligations largely insulated from swings in interest rates." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does a bond's duration of 7 approximately tell you?",
        choices: [
          "The bond's price is expected to move roughly 7% for each 1-percentage-point change in interest rates",
          "The bond matures in exactly 7 months",
          "The bond pays a 7% coupon",
          "The bond has 7 different coupon payment dates remaining",
        ],
        correctIndex: 0,
        explanation:
          "Duration translates directly into an expected percentage price change per 1-point move in rates — a duration of 7 means roughly a 7% move for a 1-point rate change.",
      },
      {
        id: "q2",
        prompt: "How does duration differ from a bond's simple time to maturity?",
        choices: [
          "Duration is a present-value-weighted average of when all the bond's cash flows arrive, not just the final maturity date",
          "Duration and time to maturity are always exactly identical",
          "Duration only considers the bond's final principal repayment",
          "Duration has no relationship to a bond's cash flow timing",
        ],
        correctIndex: 0,
        explanation:
          "Duration weights every cash flow's timing by its present value, so a bond returning value earlier (larger coupons) has a duration below its raw maturity date.",
      },
      {
        id: "q3",
        prompt: "Why does a zero-coupon bond have the highest duration for a given maturity?",
        choices: [
          "All of its value is returned in a single, far-off principal payment, with no earlier coupons pulling the weighted average down",
          "Zero-coupon bonds are not sensitive to interest rates at all",
          "Zero-coupon bonds always mature faster than coupon bonds",
          "Duration does not apply to zero-coupon bonds",
        ],
        correctIndex: 0,
        explanation:
          "With no coupons returning value along the way, a zero-coupon bond's entire value depends on that one distant principal payment, maximizing its duration relative to a coupon-paying bond of the same maturity.",
      },
      {
        id: "q4",
        prompt: "Why is duration more useful than raw maturity for comparing bonds' rate sensitivity?",
        choices: [
          "Two bonds with the same maturity but different coupons can have meaningfully different rate sensitivity, which duration captures and maturity alone does not",
          "Maturity and duration always produce identical comparisons",
          "Duration ignores coupon size entirely, just like maturity does",
          "Duration is only relevant for bonds trading at a premium",
        ],
        correctIndex: 0,
        explanation:
          "Because duration accounts for coupon size and timing, not just the final maturity date, it gives a more accurate, comparable measure of actual interest-rate sensitivity across different bonds.",
      },
      {
        id: "q5",
        prompt: "How is duration used when constructing a hedge for a bond position?",
        choices: [
          "By matching the dollar duration of the hedging instrument to the dollar duration of the exposure being hedged",
          "By simply matching the maturity dates of the two instruments, ignoring duration",
          "Duration has no practical use in hedging",
          "By matching the coupon rates of the two instruments exactly",
        ],
        correctIndex: 0,
        explanation:
          "Sizing a hedge by dollar duration, not just maturity, is what actually matches the rate sensitivity of the hedge to the position being protected.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "fixed-income-the-yield-curve",
    title: "The Yield Curve",
    summary:
      "Plotting yields across every maturity at once reveals a curve whose shape carries information about what the market expects from the economy.",
    body: [
      { type: "heading", text: "What the Yield Curve Shows" },
      { type: "paragraph", text: "The yield curve plots the yield of otherwise-comparable bonds (typically government bonds of the same issuer) against their time to maturity, from very short-term to very long-term. Reading across the curve at any moment shows the entire term structure of interest rates the market is currently pricing, not just a single rate." },
      { type: "heading", text: "The Normal, Upward-Sloping Curve" },
      { type: "paragraph", text: "Most of the time, the yield curve slopes upward: longer-maturity bonds yield more than shorter-maturity ones, compensating investors for the extra risk and uncertainty of locking up money for longer, and reflecting typical expectations that rates or inflation will run higher over a longer horizon than a shorter one." },
      { type: "heading", text: "Flattening and Inverting" },
      { type: "paragraph", text: "The curve can flatten, when the gap between short- and long-term yields narrows, or even invert, when short-term yields rise above long-term ones — historically a closely watched signal, since an inverted curve has often preceded economic slowdowns, reflecting a market expectation that central banks will eventually need to cut rates in response to weaker growth ahead." },
      { type: "heading", text: "Why the Curve Matters Beyond Prediction" },
      { type: "paragraph", text: "Even setting aside what it might predict about the economy, the yield curve's shape directly drives which fixed income strategies make sense at a given moment — a steep curve favors strategies like rolling down the curve, discussed elsewhere in this course, while a flat or inverted curve changes the relative appeal of different maturities and the curve-trade strategies built around them." },
      { type: "heading", text: "In Practice" },
      { type: "paragraph", text: "A corporate treasurer deciding whether to issue 2-year or 10-year debt checks the shape of the yield curve first: a steep curve means locking in the 10-year rate costs noticeably more than the shorter option, while a flat or inverted curve can make the longer-term borrowing look relatively cheap by comparison. Bond investors read the same curve from the other side, using its shape to judge whether the market is pricing in future rate cuts or a stronger economy ahead." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does the yield curve plot?",
        choices: [
          "The yield of comparable bonds against their time to maturity, all at a single point in time",
          "A single bond's price history over many years",
          "The credit ratings of different issuers",
          "Stock market returns compared to bond returns",
        ],
        correctIndex: 0,
        explanation:
          "The yield curve shows the full term structure of rates at one moment — yields at every maturity, from short-term to long-term, plotted together.",
      },
      {
        id: "q2",
        prompt: "Why does the yield curve normally slope upward?",
        choices: [
          "Longer-maturity bonds compensate investors for the extra risk and uncertainty of locking up money for longer",
          "Longer-maturity bonds are always safer than short-term bonds",
          "Short-term bonds are illegal to issue with a yield",
          "The upward slope has no economic explanation",
        ],
        correctIndex: 0,
        explanation:
          "A normal, upward-sloping curve reflects investors demanding higher compensation for the added risk and uncertainty of tying up money over a longer horizon.",
      },
      {
        id: "q3",
        prompt: "What does it mean for the yield curve to \"invert\"?",
        choices: [
          "Short-term yields rise above long-term yields",
          "All yields across every maturity become identical",
          "Long-term yields rise far above short-term yields",
          "Bond prices stop being quoted entirely",
        ],
        correctIndex: 0,
        explanation:
          "Inversion is specifically when short-term yields exceed long-term yields — the reverse of the normal upward-sloping shape.",
      },
      {
        id: "q4",
        prompt: "Why is an inverted yield curve closely watched by economists and investors?",
        choices: [
          "It has historically often preceded economic slowdowns",
          "It guarantees the stock market will rise",
          "It means bond issuers are no longer able to borrow money",
          "It has no historical significance at all",
        ],
        correctIndex: 0,
        explanation:
          "Yield curve inversion has a track record of showing up before economic slowdowns, reflecting a market expectation that rates will eventually need to fall in response to weaker growth.",
      },
      {
        id: "q5",
        prompt: "Beyond any predictive signal, why does the yield curve's shape matter for fixed income strategy?",
        choices: [
          "It directly affects which maturities and curve-trade strategies are relatively attractive at a given moment",
          "It has no effect on which strategies make sense",
          "Only the overall level of rates matters, never the curve's shape",
          "The curve's shape only matters for corporate bonds, never government bonds",
        ],
        correctIndex: 0,
        explanation:
          "A steep curve favors different strategies (like rolling down the curve) than a flat or inverted one, making the curve's shape directly relevant to strategy selection, not just economic forecasting.",
      },
    ],
  },
];
