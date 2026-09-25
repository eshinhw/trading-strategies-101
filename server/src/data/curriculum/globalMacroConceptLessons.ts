import type { ConceptLesson } from "./types.js";

// Concept-lesson format, same reasoning as the other non-options courses —
// global macro is inherently a cross-asset, top-down discipline, so the
// Basics module builds up from "what is a macro view" through the
// indicators and policy levers that drive one, to how a single view gets
// expressed across asset classes, before the Strategies module's four
// specific approaches.
export const globalMacroConceptLessons: ConceptLesson[] = [
  {
    kind: "concept",
    slug: "macro-what-is-global-macro",
    title: "Global Macro Investing",
    summary:
      "A top-down approach that starts from a view on the macroeconomy — growth, inflation, policy — and only then picks whichever asset class or instrument best expresses that view.",
    body: [
      { type: "heading", text: "Top-Down, Not Bottom-Up" },
      {
        type: "paragraph",
        text: "Most of this curriculum's other courses start from a specific security or a narrow relationship between two securities. Global macro inverts that: it starts with a view on broad economic forces — growth, inflation, interest rates, currency trends — and only then decides which instrument, and which asset class, best expresses that view." },
      { type: "heading", text: "Cross-Asset by Design" },
      {
        type: "paragraph",
        text: "Because the starting point is an economic thesis rather than a single security, a macro trader routinely moves across equities, government bonds, currencies, and commodities within a single portfolio, picking whichever instrument offers the cleanest, most liquid, or most leveraged way to express a given view." },
      { type: "heading", text: "Forming a Macro View" },
      {
        type: "paragraph",
        text: "A macro view is built from a mix of economic data, central bank policy signals, geopolitical developments, and structural trends, synthesized into a thesis like \"growth is slowing while inflation stays elevated\" — the next two lessons cover the data and policy tools that actually go into building a view like that." },
      { type: "heading", text: "Discretionary and Systematic Approaches" },
      {
        type: "paragraph",
        text: "Some macro investors form views through discretionary judgment, weighing data and events qualitatively; others build systematic, rules-based processes that translate observable data directly into positions, an approach explored further in this module's strategies. Both share the same top-down starting point, even though they arrive at a position differently." },
      { type: "heading", text: "In Practice" },
      {
        type: "paragraph",
        text: "A macro investor who believes a country's central bank is about to raise interest rates faster than the market expects doesn't have just one way to express that view: they could short that country's government bonds, go long its currency, or short its rate-sensitive equity sectors — the view comes first, and the instrument is chosen afterward based on which offers the best risk/reward." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "How does global macro investing's starting point differ from a bottom-up strategy?",
        choices: [
          "It starts from a view on broad economic forces and only then picks the instrument to express that view",
          "It starts from a single company's financial statements, exactly like bottom-up stock picking",
          "There is no meaningful difference between the two approaches",
          "Global macro never considers any individual security",
        ],
        correctIndex: 0,
        explanation:
          "The top-down starting point — an economic thesis rather than a specific security — is what defines global macro's approach.",
      },
      {
        id: "q2",
        prompt: "Why is global macro described as \"cross-asset\"?",
        choices: [
          "A macro trader routinely moves across equities, bonds, currencies, and commodities to express a single view",
          "Macro traders are legally restricted to trading only one asset class",
          "Cross-asset refers to a specific type of bond, not a trading approach",
          "Global macro never involves currencies or commodities",
        ],
        correctIndex: 0,
        explanation:
          "Because the starting point is an economic thesis rather than a single security, the same view can be expressed through whichever asset class fits best.",
      },
      {
        id: "q3",
        prompt: "What goes into forming a macro view, according to this lesson?",
        choices: [
          "Economic data, central bank policy signals, geopolitical developments, and structural trends",
          "Only a single company's quarterly earnings report",
          "A macro view requires no underlying data or analysis",
          "Only the price history of one specific stock",
        ],
        correctIndex: 0,
        explanation:
          "A macro view is synthesized from a broad mix of inputs, not derived from any single narrow data point.",
      },
      {
        id: "q4",
        prompt: "What is the difference between a discretionary and a systematic macro approach?",
        choices: [
          "Discretionary investors weigh data qualitatively; systematic investors use rules-based processes that translate data directly into positions",
          "Discretionary and systematic approaches are identical in every respect",
          "Only discretionary macro investing actually exists",
          "Systematic approaches never use any economic data at all",
        ],
        correctIndex: 0,
        explanation:
          "Both start from the same top-down premise but differ in how they translate a macro view into an actual position — judgment versus rules.",
      },
      {
        id: "q5",
        prompt: "In the example, why might an investor choose to short a country's currency rather than its bonds to express a rate-hike view?",
        choices: [
          "Because the instrument is chosen based on which offers the best risk/reward for the same underlying view",
          "Currencies and bonds always move in identical ways, so the choice is arbitrary",
          "Shorting currencies is the only legal way to express a macro view",
          "Bonds cannot be used to express an interest-rate view",
        ],
        correctIndex: 0,
        explanation:
          "Macro investing separates the view from the instrument — the same thesis can be expressed multiple ways, and the choice comes down to which vehicle offers the cleanest expression.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "macro-key-economic-indicators",
    title: "Key Macroeconomic Indicators",
    summary:
      "The handful of regularly released data points — GDP, inflation, employment, and purchasing manager surveys — that macro investors watch closely because markets react to them immediately.",
    body: [
      { type: "heading", text: "GDP: The Broadest Growth Measure" },
      {
        type: "paragraph",
        text: "Gross domestic product (GDP) measures the total value of goods and services produced in an economy over a period, and its growth rate is the broadest single gauge of economic expansion or contraction. It's released with a lag and often revised, so markets also lean on faster, more frequent indicators to gauge growth in real time." },
      { type: "heading", text: "Inflation Measures" },
      {
        type: "paragraph",
        text: "The Consumer Price Index (CPI) tracks the price change of a representative basket of goods and services over time, making it the most closely watched inflation gauge. Because inflation directly drives central bank policy decisions, a CPI release that surprises relative to expectations can move interest-rate, currency, and equity markets within seconds of its release." },
      { type: "heading", text: "Employment Data" },
      {
        type: "paragraph",
        text: "Labor-market data, like the unemployment rate and monthly job-creation figures, signals both the underlying strength of the economy and, since a tight labor market tends to push wages and prices higher, feeds directly into the inflation outlook central banks are watching." },
      { type: "heading", text: "Purchasing Managers' Indices (PMI)" },
      {
        type: "paragraph",
        text: "A PMI survey asks purchasing managers at businesses whether conditions (new orders, output, employment) are expanding or contracting, producing a timely, forward-looking gauge of economic momentum well before slower official data like GDP is even published." },
      { type: "heading", text: "In Practice" },
      {
        type: "paragraph",
        text: "A macro desk positioning ahead of a closely watched inflation report will often reduce position sizes beforehand, since a surprise reading, in either direction, can move rate, currency, and equity markets sharply within seconds of release — exactly the kind of event covered directly in this module's strategy on trading economic announcements." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does GDP measure?",
        choices: [
          "The total value of goods and services produced in an economy over a period",
          "The unemployment rate alone",
          "A single company's stock price",
          "The exchange rate between two currencies",
        ],
        correctIndex: 0,
        explanation:
          "GDP is the broadest standard measure of an economy's overall output and growth.",
      },
      {
        id: "q2",
        prompt: "Why does a CPI release have the potential to move markets quickly?",
        choices: [
          "Inflation data directly drives central bank policy decisions, so a surprise can shift rate, currency, and equity markets fast",
          "CPI has no relationship to central bank policy",
          "CPI is released only once per decade, so it's ignored by markets",
          "Markets never react to inflation data of any kind",
        ],
        correctIndex: 0,
        explanation:
          "Because inflation is a core input to monetary policy, an unexpected CPI print can trigger a rapid repricing across multiple asset classes.",
      },
      {
        id: "q3",
        prompt: "Why does labor-market data matter to a macro investor beyond just measuring employment?",
        choices: [
          "A tight labor market tends to push wages and prices higher, feeding directly into the inflation outlook",
          "Employment data has no connection to inflation whatsoever",
          "Labor-market data is used only to set the stock market's opening price",
          "Central banks never consider employment data in policy decisions",
        ],
        correctIndex: 0,
        explanation:
          "Employment strength and inflation are linked through wage pressure, which is exactly why labor data feeds into the same policy picture as CPI.",
      },
      {
        id: "q4",
        prompt: "What makes a PMI survey useful compared to GDP?",
        choices: [
          "It offers a timely, forward-looking gauge of economic momentum well before slower official GDP data is published",
          "PMI is released only once every ten years",
          "PMI measures the exact same thing as GDP with no added timeliness",
          "PMI has no relationship to economic momentum",
        ],
        correctIndex: 0,
        explanation:
          "PMI surveys are released quickly and reflect current business conditions, giving markets an earlier read than GDP's slower, lagged release.",
      },
      {
        id: "q5",
        prompt: "Why might a macro desk reduce position sizes ahead of a major inflation report?",
        choices: [
          "A surprise reading in either direction can move markets sharply within seconds of release",
          "Inflation reports never actually affect market prices",
          "Reducing position size before data releases is legally required",
          "Position sizing has no connection to scheduled data releases",
        ],
        correctIndex: 0,
        explanation:
          "The risk of a sharp, fast move around a major data surprise is exactly why desks often manage exposure more conservatively heading into it.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "macro-central-banks-and-monetary-policy",
    title: "Central Banks and Monetary Policy",
    summary:
      "How a central bank's interest-rate and balance-sheet decisions ripple through currencies, bonds, and equities — the policy lever that sits behind most macro theses.",
    body: [
      { type: "heading", text: "The Policy Rate" },
      {
        type: "paragraph",
        text: "A central bank's benchmark policy rate is the interest rate it sets or targets for short-term lending in the banking system, and it ripples outward from there — influencing everything from mortgage rates to corporate borrowing costs to what a savings account pays. Raising the rate generally cools growth and inflation; cutting it generally stimulates both." },
      { type: "heading", text: "Quantitative Easing and Tightening" },
      {
        type: "paragraph",
        text: "Beyond the policy rate, a central bank can directly buy or sell longer-term securities, expanding its balance sheet (quantitative easing, adding liquidity and pushing down longer-term yields) or shrinking it (quantitative tightening, doing the reverse) — tools used especially when the policy rate alone has limited room left to move." },
      { type: "heading", text: "How Policy Ripples Across Assets" },
      {
        type: "paragraph",
        text: "A rate move doesn't just affect bonds directly: higher rates tend to pressure equity valuations (future cash flows are worth less discounted at a higher rate) and typically strengthen a currency (higher yields attract foreign capital seeking that return), while lower rates tend to work in the opposite direction across all three." },
      { type: "heading", text: "Forward Guidance" },
      {
        type: "paragraph",
        text: "Central banks also move markets simply by signaling their likely future path through public statements, known as forward guidance, without changing any rate at all — markets reprice immediately on the signal itself, well ahead of any actual policy action." },
      { type: "heading", text: "In Practice" },
      {
        type: "paragraph",
        text: "When a central bank signals it will likely cut rates sooner than markets had priced in, government bond yields typically fall immediately, the currency often weakens, and equities frequently rally — all three markets repricing off the same single piece of forward guidance, before a single rate has actually changed." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What is a central bank's policy rate?",
        choices: [
          "The interest rate it sets or targets for short-term lending in the banking system, which ripples outward to other rates",
          "A tax rate applied only to corporations",
          "The exchange rate between two currencies",
          "A fixed rate that never changes once set",
        ],
        correctIndex: 0,
        explanation:
          "The policy rate is the central lever a central bank uses, and its influence extends outward to mortgage rates, borrowing costs, and savings yields.",
      },
      {
        id: "q2",
        prompt: "What is quantitative easing?",
        choices: [
          "A central bank buying longer-term securities to expand its balance sheet, adding liquidity and pushing down longer-term yields",
          "A central bank permanently shutting down all bond markets",
          "A tax cut enacted by a country's legislature",
          "A synonym for raising the policy rate",
        ],
        correctIndex: 0,
        explanation:
          "QE is a balance-sheet tool distinct from the policy rate, used to add liquidity and influence longer-term yields directly.",
      },
      {
        id: "q3",
        prompt: "How do higher interest rates typically affect equity valuations?",
        choices: [
          "They tend to pressure valuations, since future cash flows are worth less when discounted at a higher rate",
          "Higher rates always cause equity valuations to rise sharply",
          "Interest rates have no relationship to equity valuations",
          "Higher rates only affect bond markets, never equities",
        ],
        correctIndex: 0,
        explanation:
          "Discounting future cash flows at a higher rate reduces their present value, which is the core channel linking rates to equity valuations.",
      },
      {
        id: "q4",
        prompt: "What is \"forward guidance\"?",
        choices: [
          "A central bank signaling its likely future policy path through public statements, moving markets without an actual rate change",
          "A mandatory rate change announced every quarter",
          "A type of bond issued exclusively by corporations",
          "Forward guidance has no effect on market pricing",
        ],
        correctIndex: 0,
        explanation:
          "Markets can reprice purely off a signaled future path, well before any policy action is actually taken — that's the power of forward guidance.",
      },
      {
        id: "q5",
        prompt: "In the example, what happens across bonds, currency, and equities when a central bank signals an earlier-than-expected rate cut?",
        choices: [
          "Bond yields typically fall, the currency often weakens, and equities frequently rally — all off the same signal",
          "All three markets remain completely unaffected until the rate actually changes",
          "Only the bond market reacts; currencies and equities are unaffected",
          "Equities always fall in this scenario, with no effect on bonds or currency",
        ],
        correctIndex: 0,
        explanation:
          "The example illustrates exactly how policy signals ripple across asset classes simultaneously, even before any actual rate change occurs.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "macro-translating-a-view-into-a-trade",
    title: "Translating a Macro View into a Trade",
    summary:
      "How a single macroeconomic thesis gets expressed through the specific instrument, asset class, and structure that best captures it, rather than through a single, fixed playbook.",
    body: [
      { type: "heading", text: "Separating the View From the Instrument" },
      {
        type: "paragraph",
        text: "Once a macro investor has formed a thesis, from the indicators and policy dynamics covered in the previous two lessons, a separate decision remains: which specific instrument actually expresses that view best. The same economic belief can often be traded several different ways, each with its own cost, liquidity, and risk profile." },
      { type: "heading", text: "Choosing the Cleanest Expression" },
      {
        type: "paragraph",
        text: "A macro trader generally favors whichever instrument is most directly and cleanly exposed to the specific variable in the thesis, with the fewest unrelated risks attached — a view on a country's interest-rate path is expressed more cleanly through its government bonds or rate futures than through its equity market, which carries plenty of company-specific noise on top of the rate view." },
      { type: "heading", text: "Sizing and Structuring the Trade" },
      {
        type: "paragraph",
        text: "Beyond picking the instrument, a macro trader decides how to structure the position: outright directional exposure, a relative-value trade between two related instruments, or an options-based structure that caps risk while preserving upside — the same underlying view can be expressed with very different risk profiles." },
      { type: "heading", text: "Time Horizon Matters" },
      {
        type: "paragraph",
        text: "A macro thesis can play out over very different time frames — some macro trends unfold over months or years as economic data confirms a slow-moving story, while others are meant to capture a single scheduled event. That time horizon is itself part of choosing the trade, and it's exactly the distinction between this module's momentum-style strategy and its event-driven one." },
      { type: "heading", text: "In Practice" },
      {
        type: "paragraph",
        text: "An investor who believes persistent inflation will erode fixed-income returns could short government bonds outright, buy inflation-linked bonds instead of nominal ones, or buy commodities that historically track inflation — three different instruments, three different risk profiles, all expressing the same underlying view." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What decision comes after a macro investor has formed a thesis?",
        choices: [
          "Which specific instrument actually expresses that view best",
          "Whether to form a thesis at all, which comes after instrument selection",
          "No further decision is needed once a thesis is formed",
          "The instrument is always chosen before the thesis is formed",
        ],
        correctIndex: 0,
        explanation:
          "Forming the view and choosing how to express it are two distinct steps — the same thesis can be expressed through several different instruments.",
      },
      {
        id: "q2",
        prompt: "Why might a trader prefer government bonds over equities to express a pure interest-rate view?",
        choices: [
          "Bonds are more directly and cleanly exposed to the rate view, with fewer unrelated risks like company-specific noise",
          "Equities are always the cleanest way to express any interest-rate view",
          "Bonds and equities are equally clean expressions of any macro view",
          "There is never a reason to choose one instrument over another",
        ],
        correctIndex: 0,
        explanation:
          "Government bonds isolate the interest-rate variable more directly than equities, which carry additional company-specific factors unrelated to the rate thesis.",
      },
      {
        id: "q3",
        prompt: "Besides choosing an instrument, what else does a macro trader decide when structuring a trade?",
        choices: [
          "Whether to use outright directional exposure, a relative-value structure, or an options-based structure",
          "Structuring decisions are irrelevant once an instrument is chosen",
          "Only the exact calendar date of the trade matters, nothing else",
          "All macro trades must use the exact same structure",
        ],
        correctIndex: 0,
        explanation:
          "Structure is a separate lever from instrument choice, letting the same view be expressed with very different risk profiles.",
      },
      {
        id: "q4",
        prompt: "Why does time horizon matter when translating a macro view into a trade?",
        choices: [
          "Some macro trends unfold slowly over months or years, while others are built to capture a single scheduled event",
          "All macro trades resolve within exactly one trading day",
          "Time horizon has no bearing on how a macro trade is structured",
          "Macro theses can never be tied to a specific event",
        ],
        correctIndex: 0,
        explanation:
          "The intended time horizon shapes the trade itself, distinguishing a slower-moving momentum approach from a fast, event-driven one.",
      },
      {
        id: "q5",
        prompt: "In the inflation example, how many different instruments are described as expressing the same underlying view?",
        choices: [
          "Three — shorting nominal bonds, buying inflation-linked bonds, and buying commodities",
          "Only one single instrument is ever appropriate",
          "The example describes no specific instruments at all",
          "Exactly five instruments are described",
        ],
        correctIndex: 0,
        explanation:
          "The example deliberately shows three distinct instruments, each capturing the same inflation thesis with a different risk profile.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "macro-fundamental-macro-momentum",
    title: "Fundamental Macro Momentum",
    summary:
      "Applying momentum logic to macro-driven trends themselves — betting that a macro theme already underway, confirmed by fundamentals, tends to keep going rather than reverse.",
    body: [
      { type: "heading", text: "Momentum, at the Macro Level" },
      {
        type: "paragraph",
        text: "This strategy applies the same core momentum idea covered elsewhere in this curriculum — that a trend already underway tends to persist — to macro-driven trends across countries and asset classes, rather than to a single stock's price history alone." },
      { type: "heading", text: "Why Fundamental Confirmation Matters" },
      {
        type: "paragraph",
        text: "Rather than trading on price momentum alone, this approach requires the trend to be confirmed by underlying macro fundamentals — improving growth data, a consistent policy direction, or a sustained shift in trade or capital flows — filtering out price moves that aren't backed by the economic story actually driving them." },
      { type: "heading", text: "Why Macro Trends Persist" },
      {
        type: "paragraph",
        text: "Macro trends tend to persist for reasons distinct from single-stock momentum: economic data is released with a lag and gets revised gradually, policy changes take time to fully work through an economy, and large institutional flows into or out of a country's assets can take months to fully play out rather than happening all at once." },
      { type: "heading", text: "Building the Portfolio" },
      {
        type: "paragraph",
        text: "A systematic version of this strategy typically ranks countries or asset classes by the strength and consistency of their macro trend, then takes positions favoring the strongest, most fundamentally confirmed trends while avoiding or fading the weakest — a cross-country, cross-asset version of the momentum ranking used elsewhere in this curriculum." },
      { type: "heading", text: "In Practice" },
      {
        type: "paragraph",
        text: "A fundamental macro momentum strategy might notice that a country's growth data has been beating expectations for several consecutive quarters while its central bank has been consistently signaling tighter policy — two independent, fundamentally grounded confirmations of the same strengthening trend — and take a position favoring that country's currency and equities over a peer economy showing the opposite pattern." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What core idea does fundamental macro momentum apply at the macro level?",
        choices: [
          "That a trend already underway tends to persist, applied to macro-driven trends across countries and asset classes",
          "That all macro trends reverse immediately once identified",
          "That momentum only ever applies to individual stocks, never to macro trends",
          "That macro trends have no relationship to persistence at all",
        ],
        correctIndex: 0,
        explanation:
          "This strategy extends the same momentum logic used elsewhere in the curriculum to trends driven by macroeconomic forces rather than a single security's own price history.",
      },
      {
        id: "q2",
        prompt: "Why does this strategy require fundamental confirmation rather than trading on price alone?",
        choices: [
          "To filter out price moves that aren't backed by the actual economic story driving them",
          "Fundamental confirmation is never used in this strategy",
          "Price data is completely irrelevant to this approach",
          "Fundamentals and price momentum always move in opposite directions",
        ],
        correctIndex: 0,
        explanation:
          "Requiring fundamental confirmation helps distinguish a genuine, economically grounded trend from noise in the price data alone.",
      },
      {
        id: "q3",
        prompt: "Why do macro trends tend to persist, according to this lesson?",
        choices: [
          "Lagged and revised data, slow-moving policy effects, and gradual institutional flows all unfold over time rather than all at once",
          "Macro trends persist purely by random chance with no underlying explanation",
          "Macro data is always released and fully understood instantaneously",
          "Institutional flows into a country's assets always complete within a single day",
        ],
        correctIndex: 0,
        explanation:
          "Several structural factors specific to macro data and flows explain why these trends tend to persist rather than reverse quickly.",
      },
      {
        id: "q4",
        prompt: "How does a systematic version of this strategy typically build its portfolio?",
        choices: [
          "By ranking countries or asset classes by the strength and consistency of their macro trend, favoring the strongest confirmed trends",
          "By randomly selecting countries with no ranking process at all",
          "By investing equally in every country regardless of trend strength",
          "By avoiding any country with a strong economic trend",
        ],
        correctIndex: 0,
        explanation:
          "The ranking approach mirrors momentum strategies used elsewhere in the curriculum, applied here across countries and asset classes instead of individual securities.",
      },
      {
        id: "q5",
        prompt: "In the example, what two signals together confirm the strengthening trend the strategy trades on?",
        choices: [
          "Growth data beating expectations for several quarters and a central bank consistently signaling tighter policy",
          "A single day's stock price move, with no other data considered",
          "A rumor with no supporting economic data",
          "The example describes no specific confirming signals",
        ],
        correctIndex: 0,
        explanation:
          "The two independent, fundamentally grounded signals — growth data and policy direction — are exactly what this strategy requires before trading a trend.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "macro-global-macro-inflation-hedge",
    title: "Global Macro Inflation Hedge",
    summary:
      "Positioning a portfolio to protect against, or profit from, rising inflation using instruments whose returns are directly or historically linked to it.",
    body: [
      { type: "heading", text: "Why Ordinary Portfolios Are Vulnerable to Inflation" },
      {
        type: "paragraph",
        text: "Unexpected inflation erodes the real value of fixed cash flows — a bond's fixed coupon buys less in an inflationary environment, and even equity returns can lag inflation over shorter periods, particularly for companies unable to pass rising costs on to customers. A portfolio built without any inflation-aware positioning is exposed to this risk by default." },
      { type: "heading", text: "Inflation-Linked Bonds" },
      {
        type: "paragraph",
        text: "Inflation-linked government bonds, like U.S. Treasury Inflation-Protected Securities (TIPS), adjust their principal directly with a published inflation index, so both the inflation-adjusted principal and the coupon payments calculated on it rise with realized inflation — a direct, contractually built-in hedge rather than an indirect, historical relationship." },
      { type: "heading", text: "Commodities as an Inflation Hedge" },
      {
        type: "paragraph",
        text: "Commodities, particularly energy and industrial materials, have historically tended to rise in price during inflationary periods, since rising input costs are themselves a driver of measured inflation — making a long commodities position a common, if less precise, inflation hedge relative to inflation-linked bonds." },
      { type: "heading", text: "Inflation Swaps" },
      {
        type: "paragraph",
        text: "An inflation swap lets one party pay a fixed rate in exchange for receiving a floating payment tied to realized inflation, letting an investor hedge inflation exposure directly without needing to buy and hold an actual inflation-linked bond — useful for isolating the inflation view from other risks embedded in a bond, like interest-rate duration." },
      { type: "heading", text: "In Practice" },
      {
        type: "paragraph",
        text: "A pension fund worried that persistent inflation will erode the real value of its future payout obligations might allocate part of its portfolio to TIPS for a direct hedge, add a smaller commodities position for additional inflation sensitivity, and use inflation swaps to fine-tune the overall inflation exposure without having to rebuild its entire bond portfolio from scratch." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Why does unexpected inflation hurt a bond's fixed coupon payments?",
        choices: [
          "Inflation erodes the real purchasing power of a fixed cash flow, so the same coupon buys less over time",
          "Inflation always increases a bond's fixed coupon automatically",
          "Fixed coupons have no relationship to inflation at all",
          "Bonds are entirely immune to inflation by design",
        ],
        correctIndex: 0,
        explanation:
          "A fixed coupon doesn't adjust for inflation, so rising prices directly erode what that fixed payment is actually worth in real terms.",
      },
      {
        id: "q2",
        prompt: "How do inflation-linked bonds like TIPS hedge inflation?",
        choices: [
          "Their principal adjusts directly with a published inflation index, so both principal and coupon payments rise with realized inflation",
          "They pay a fixed coupon that never adjusts, just like an ordinary bond",
          "TIPS have no relationship to inflation whatsoever",
          "TIPS hedge inflation only indirectly, through historical correlation alone",
        ],
        correctIndex: 0,
        explanation:
          "Unlike commodities' indirect, historical relationship with inflation, TIPS are contractually and directly linked to a published inflation index.",
      },
      {
        id: "q3",
        prompt: "Why have commodities historically served as an inflation hedge?",
        choices: [
          "Rising input costs, like energy and materials, are themselves a driver of measured inflation",
          "Commodities are legally required to track inflation exactly",
          "Commodities have no historical relationship with inflation",
          "Commodity prices always move opposite to inflation",
        ],
        correctIndex: 0,
        explanation:
          "Because commodity price increases feed directly into inflation measures, a long commodities position has historically tended to track inflationary periods.",
      },
      {
        id: "q4",
        prompt: "What does an inflation swap let an investor do?",
        choices: [
          "Hedge inflation exposure directly, without needing to buy and hold an inflation-linked bond, isolating the inflation view from other risks",
          "Eliminate all forms of investment risk entirely",
          "Convert cash directly into commodities with no contract involved",
          "Inflation swaps have no practical use in a portfolio",
        ],
        correctIndex: 0,
        explanation:
          "A swap isolates the inflation exposure itself, letting an investor hedge it without taking on the other risks, like interest-rate duration, embedded in an actual bond.",
      },
      {
        id: "q5",
        prompt: "In the example, why does the pension fund use three different instruments rather than just one?",
        choices: [
          "Each instrument offers a different way to hedge or fine-tune inflation exposure — direct, historical, and precisely adjustable",
          "Using multiple instruments is purely a legal requirement with no strategic purpose",
          "The three instruments described are functionally identical",
          "Pension funds are prohibited from using more than one inflation hedge",
        ],
        correctIndex: 0,
        explanation:
          "TIPS provide a direct hedge, commodities add historical inflation sensitivity, and swaps allow precise fine-tuning — three complementary tools rather than redundant ones.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "macro-global-fixed-income-strategy",
    title: "Global Fixed-Income Strategy",
    summary:
      "Trading government bond markets across countries based on macro views — relative interest-rate differentials, cross-country yield-curve positioning, and the currency-hedging decision that comes with investing abroad.",
    body: [
      { type: "heading", text: "Trading Rate Differentials Across Countries" },
      {
        type: "paragraph",
        text: "Different countries' central banks move through their own policy cycles at different paces, creating gaps between their government bond yields. A global fixed-income strategy can position for those gaps to widen or narrow — for example, being long the bonds of a country expected to cut rates and short the bonds of one expected to hold or hike." },
      { type: "heading", text: "Cross-Country Curve Positioning" },
      {
        type: "paragraph",
        text: "Beyond comparing two countries' overall yield levels, a trader can compare the shape of their yield curves — steep versus flat, or how the curve of one country is expected to shift relative to another's as their respective economic cycles diverge." },
      { type: "heading", text: "The Currency-Hedging Decision" },
      {
        type: "paragraph",
        text: "Investing in a foreign government bond means taking on currency exposure alongside the bond's own interest-rate exposure, unless that currency risk is explicitly hedged. A trader has to decide whether the currency move is itself part of the intended macro view, worth keeping unhedged, or an unwanted side effect of the bond trade, worth hedging away." },
      { type: "heading", text: "Credit Quality Across Sovereigns" },
      {
        type: "paragraph",
        text: "Unlike a single country's own Treasury market, comparing government bonds across countries also means comparing different credit qualities and levels of political risk — a wider yield in one country's bonds isn't automatically attractive if a meaningful part of that extra yield simply compensates for materially higher default or political risk." },
      { type: "heading", text: "In Practice" },
      {
        type: "paragraph",
        text: "A trader who expects one country's central bank to cut rates well before another's might go long that country's government bonds and short the other's, deliberately choosing to leave the resulting currency exposure unhedged because the same rate-differential view that's driving the bond trade would also be expected to move the currency pair in a complementary direction." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What creates the opportunity to trade interest-rate differentials across countries?",
        choices: [
          "Different central banks move through their own policy cycles at different paces, creating gaps between bond yields",
          "All countries' central banks always move in perfect lockstep",
          "Interest-rate differentials never actually exist between countries",
          "Government bond yields are identical across every country",
        ],
        correctIndex: 0,
        explanation:
          "Diverging policy cycles across countries are exactly what create the yield gaps this strategy positions around.",
      },
      {
        id: "q2",
        prompt: "What does cross-country curve positioning compare, beyond a simple yield-level difference?",
        choices: [
          "The shape of each country's yield curve and how those curves are expected to shift relative to each other",
          "Only the current stock market index level of each country",
          "The physical size of each country's central bank building",
          "Cross-country curve positioning ignores yield curves entirely",
        ],
        correctIndex: 0,
        explanation:
          "Comparing curve shape, not just overall yield level, adds a further dimension to how diverging economic cycles can be traded.",
      },
      {
        id: "q3",
        prompt: "Why does investing in a foreign government bond introduce currency exposure?",
        choices: [
          "The bond is denominated in a foreign currency, so its value in the investor's home currency depends on the exchange rate unless hedged",
          "Foreign bonds are always automatically hedged with no decision required",
          "Currency exposure only applies to equities, never to bonds",
          "Foreign government bonds carry no currency risk of any kind",
        ],
        correctIndex: 0,
        explanation:
          "Unless the currency risk is explicitly hedged, a foreign bond's value to a domestic investor moves with both the bond's own price and the exchange rate.",
      },
      {
        id: "q4",
        prompt: "Why isn't a wider yield in one country's government bonds automatically attractive?",
        choices: [
          "Part of that extra yield may simply compensate for higher default or political risk rather than being a genuine opportunity",
          "Wider yields are always risk-free extra return with no offsetting risk",
          "Yield differences between countries never reflect any credit risk",
          "All sovereign bonds carry identical credit quality by definition",
        ],
        correctIndex: 0,
        explanation:
          "Comparing sovereign bonds means accounting for credit and political risk differences, not just chasing the highest posted yield.",
      },
      {
        id: "q5",
        prompt: "In the example, why does the trader leave the currency exposure unhedged?",
        choices: [
          "The same rate-differential view driving the bond trade would also be expected to move the currency in a complementary direction",
          "Hedging currency exposure is always illegal in fixed-income trading",
          "The trader has no view on the currency at all",
          "Currency exposure has no relationship to the underlying rate view",
        ],
        correctIndex: 0,
        explanation:
          "When the currency move is expected to reinforce rather than contradict the underlying macro thesis, leaving it unhedged can be a deliberate part of the trade rather than an oversight.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "macro-trading-on-economic-announcements",
    title: "Trading on Economic Announcements",
    summary:
      "Positioning around the market's immediate reaction to a scheduled macro data release, trading the surprise relative to expectations rather than a slower-building fundamental trend.",
    body: [
      { type: "heading", text: "Trading the Surprise, Not the Number" },
      {
        type: "paragraph",
        text: "Markets price in a consensus expectation for a scheduled release — GDP, CPI, a jobs report, a central bank decision — well before it happens. What actually moves prices at the moment of release is the surprise, the gap between the actual figure and that pre-existing consensus, not the absolute level of the number itself." },
      { type: "heading", text: "Why This Differs From Momentum-Style Macro" },
      {
        type: "paragraph",
        text: "Unlike the fundamental macro momentum strategy covered earlier in this module, which trades a slower-building trend confirmed over weeks or months, this approach is built around a single scheduled event and a compressed reaction window immediately following it — a fundamentally different time horizon and risk profile." },
      { type: "heading", text: "Positioning Ahead of a Release" },
      {
        type: "paragraph",
        text: "A trader can position ahead of a release based on a view of which direction the surprise is likely to go, though that carries outright event risk if the view is wrong. Alternatively, a trader can wait for the release itself and react to the actual surprise, trading the immediate, sharp repricing that follows rather than trying to predict it in advance." },
      { type: "heading", text: "Liquidity and Slippage Around Releases" },
      {
        type: "paragraph",
        text: "Liquidity in the affected markets often thins out in the seconds just before and during a major scheduled release, as participants pull orders rather than risk being caught on the wrong side of a sudden move — which means execution costs and slippage around these events can be considerably higher than under normal trading conditions." },
      { type: "heading", text: "In Practice" },
      {
        type: "paragraph",
        text: "Ahead of a closely watched jobs report, a trader might reduce position size to limit event risk, then, once the number is released well outside the range economists had expected, quickly take a position in interest-rate futures and currency markets to capture the sharp repricing that follows — a trade built entirely around the surprise itself, closed out again within minutes to hours rather than held as a longer-term position." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What actually moves prices at the moment of a scheduled data release?",
        choices: [
          "The surprise — the gap between the actual figure and the pre-existing consensus expectation",
          "The absolute level of the number, regardless of what was expected",
          "Scheduled releases never actually move market prices",
          "Only the exact time of day the data is released",
        ],
        correctIndex: 0,
        explanation:
          "Markets have already priced in the consensus expectation beforehand, so it's the deviation from that expectation that triggers the immediate repricing.",
      },
      {
        id: "q2",
        prompt: "How does this strategy's time horizon differ from fundamental macro momentum?",
        choices: [
          "It's built around a single scheduled event and a compressed reaction window, rather than a slower-building trend confirmed over weeks or months",
          "Both strategies use the exact same time horizon with no meaningful difference",
          "This strategy always holds positions for several years",
          "Fundamental macro momentum only ever trades single-day events",
        ],
        correctIndex: 0,
        explanation:
          "The two approaches sit at opposite ends of the macro time-horizon spectrum — one built for immediate event reaction, the other for slower, confirmed trends.",
      },
      {
        id: "q3",
        prompt: "What is the risk of positioning ahead of a scheduled release, before it happens?",
        choices: [
          "Outright event risk if the anticipated direction of the surprise turns out to be wrong",
          "There is no risk at all to positioning ahead of a release",
          "Positioning ahead of a release guarantees a profitable outcome",
          "Pre-release positioning eliminates all exposure to the event",
        ],
        correctIndex: 0,
        explanation:
          "Taking a position before the actual number is known means being exposed to the full risk of a surprise moving against the anticipated direction.",
      },
      {
        id: "q4",
        prompt: "Why can execution costs and slippage be higher around a major scheduled release?",
        choices: [
          "Liquidity often thins out just before and during the release, as participants pull orders to avoid being caught on the wrong side of a sudden move",
          "Markets are always more liquid immediately around scheduled releases",
          "Slippage has no relationship to market liquidity",
          "Trading is legally halted during every scheduled economic release",
        ],
        correctIndex: 0,
        explanation:
          "Thinner liquidity around high-impact releases is exactly what drives higher execution costs during that narrow window.",
      },
      {
        id: "q5",
        prompt: "In the example, how long does the trader typically hold the position taken after the jobs report surprise?",
        choices: [
          "Minutes to hours, rather than as a longer-term position",
          "Several years, as a permanent core holding",
          "Exactly one calendar quarter",
          "The position is never closed once opened",
        ],
        correctIndex: 0,
        explanation:
          "The strategy is built around capturing the sharp, immediate repricing following a surprise, not around holding a longer-term thesis.",
      },
    ],
  },
];
