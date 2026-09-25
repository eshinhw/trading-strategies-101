import type { ConceptLesson } from "./types.js";

// Concept-lesson format, same reasoning as the other non-options courses.
export const distressedAssetsConceptLessons: ConceptLesson[] = [
  {
    kind: "concept",
    slug: "distressed-what-is-distressed-debt",
    title: "Distressed Debt",
    summary:
      "Debt trading at a steep discount to face value because the market sees a real risk of default or bankruptcy — and why that discount is where the entire opportunity in this course comes from.",
    body: [
      { type: "heading", text: "What Makes Debt \"Distressed\"" },
      {
        type: "paragraph",
        text: "A bond or loan becomes distressed when the market prices in a meaningful probability that the issuer won't pay in full, whether or not a default has technically occurred yet. That risk is reflected directly in price: distressed debt commonly trades at a steep discount to its face value, sometimes 50 cents on the dollar or far less." },
      { type: "heading", text: "How Debt Becomes Distressed" },
      {
        type: "paragraph",
        text: "A company's debt can become distressed for company-specific reasons, like a failed product launch or a broken business model, or for broader reasons, like a whole industry falling out of favor or a general credit-cycle downturn making refinancing suddenly much harder for every weakly capitalized borrower at once." },
      { type: "heading", text: "Where the Return Comes From" },
      {
        type: "paragraph",
        text: "The core opportunity in distressed debt investing is the gap between the price paid today and the value ultimately recovered, whether through the company avoiding default entirely, being reorganized, or being liquidated. A distressed-debt investor is, in effect, buying a claim on however much of that face value actually gets paid back." },
      { type: "heading", text: "Why This Isn't Just \"Buying Cheap Bonds\"" },
      {
        type: "paragraph",
        text: "Unlike an ordinary discount bond bought simply because it's cheap, distressed debt requires real analysis of what happens if the company doesn't simply recover on its own — understanding the bankruptcy and reorganization process covered in the next lesson is central to estimating what a distressed claim is actually likely to be worth." },
      { type: "heading", text: "In Practice" },
      {
        type: "paragraph",
        text: "A company's bonds might trade at 90 cents on the dollar when investors see only modest risk, but fall to 30 cents once a poor earnings report and a looming debt maturity raise real doubt about repayment. A distressed-debt investor evaluating that bond isn't just asking \"is 30 cents cheap?\" — they're asking what the bond is actually likely to recover if the company defaults, which could be well above or well below that price." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What makes a bond or loan \"distressed\"?",
        choices: [
          "The market prices in a meaningful probability of default or bankruptcy, reflected in a steep price discount",
          "The bond has simply matured on schedule with no issues",
          "The issuer has paid off the debt completely",
          "Distressed debt always trades above its face value",
        ],
        correctIndex: 0,
        explanation:
          "A meaningful, market-priced risk of non-payment — not necessarily an actual default yet — is what defines distressed debt, and it shows up directly as a steep price discount.",
      },
      {
        id: "q2",
        prompt: "What are two broad categories of reasons debt can become distressed?",
        choices: [
          "Company-specific problems and broader industry or credit-cycle downturns",
          "Distressed debt only ever results from a company-specific accounting error",
          "Debt can only become distressed due to a change in interest rates",
          "There is no real cause behind debt becoming distressed",
        ],
        correctIndex: 0,
        explanation:
          "Both idiosyncratic, company-level problems and broader macro or industry-wide stress can push a company's debt into distress.",
      },
      {
        id: "q3",
        prompt: "Where does the core return in distressed debt investing come from?",
        choices: [
          "The gap between the price paid today and the value ultimately recovered",
          "A fixed coupon that never changes regardless of the company's outcome",
          "Distressed debt investing has no connection to eventual recovery value",
          "Government guarantees on all distressed corporate debt",
        ],
        correctIndex: 0,
        explanation:
          "The investor is effectively buying a claim on whatever recovery value materializes, and the spread between purchase price and that recovery is the source of return.",
      },
      {
        id: "q4",
        prompt: "Why is distressed debt investing more than just buying a cheap bond?",
        choices: [
          "It requires analyzing what happens if the company doesn't recover on its own, including the bankruptcy and reorganization process",
          "Distressed debt investing requires no analysis beyond the current price",
          "Cheap bonds and distressed bonds are identical in every respect",
          "Distressed debt investors never need to consider default scenarios",
        ],
        correctIndex: 0,
        explanation:
          "Estimating a realistic recovery value requires understanding the reorganization process, not just observing that the price looks low.",
      },
      {
        id: "q5",
        prompt: "In the example, why doesn't the investor simply treat the bond's 30-cent price as automatically cheap?",
        choices: [
          "They need to estimate what the bond is actually likely to recover, which could be above or below that price",
          "Because 30 cents is always overpriced for any distressed bond",
          "Because the price of a distressed bond never reflects any real information",
          "There is no reason to evaluate the bond further once its price drops",
        ],
        correctIndex: 0,
        explanation:
          "The price alone doesn't tell you what the claim is worth — that requires a genuine estimate of eventual recovery, which is the actual analytical work of distressed investing.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "distressed-bankruptcy-and-reorganization",
    title: "Bankruptcy and Reorganization",
    summary:
      "How a company facing insolvency reorganizes its debts under court protection instead of shutting down entirely, and the general shape that process takes.",
    body: [
      { type: "heading", text: "Reorganization vs. Liquidation" },
      {
        type: "paragraph",
        text: "A company facing insolvency broadly has two paths: reorganize, restructuring its debts and continuing to operate as a going concern (in the U.S., a Chapter 11 filing is the common example), or liquidate, selling off its assets and ceasing to exist as an operating business (a Chapter 7 filing, in the same example). Reorganization is generally used when the underlying business is still viable; liquidation when it isn't." },
      { type: "heading", text: "The Automatic Stay" },
      {
        type: "paragraph",
        text: "Filing for bankruptcy protection typically triggers an automatic stay, an immediate halt on creditors' individual collection efforts and lawsuits against the company. That stay gives the company breathing room to negotiate a coordinated restructuring instead of being dismantled piecemeal by whichever creditor moves fastest." },
      { type: "heading", text: "The Plan of Reorganization" },
      {
        type: "paragraph",
        text: "The company, often alongside its major creditors, develops a plan of reorganization describing how existing claims will be treated — which debts get reduced, converted into equity in the reorganized company, or paid in some other form. Creditors vote on the plan, organized into classes based on the type and seniority of their claim, and a court ultimately confirms it." },
      { type: "heading", text: "Emergence From Bankruptcy" },
      {
        type: "paragraph",
        text: "Once a plan is confirmed and implemented, the company emerges from bankruptcy, typically with a lighter debt load and a new or adjusted ownership structure. Former creditors frequently end up holding equity in the reorganized company, which is exactly the mechanism the strategies later in this module are built around." },
      { type: "heading", text: "In Practice" },
      {
        type: "paragraph",
        text: "A company with a viable core business but too much debt might file for reorganization, use the automatic stay to pause creditor lawsuits while it negotiates, and ultimately emerge with half its previous debt load converted into equity now held by its former bondholders — the same company, operating the same business, but with a fundamentally different capital structure." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What is the key difference between reorganization and liquidation?",
        choices: [
          "Reorganization restructures debt and continues operating as a going concern; liquidation sells off assets and ends the business",
          "The two terms describe the exact same process",
          "Liquidation always results in a larger payout to creditors than reorganization",
          "Reorganization is only available to companies with no debt at all",
        ],
        correctIndex: 0,
        explanation:
          "Reorganization preserves the business as an operating entity, while liquidation winds it down — the choice generally depends on whether the underlying business is still viable.",
      },
      {
        id: "q2",
        prompt: "What does the automatic stay do when a company files for bankruptcy protection?",
        choices: [
          "It immediately halts individual creditors' collection efforts and lawsuits against the company",
          "It immediately liquidates all of the company's assets",
          "It has no practical effect on creditors at all",
          "It automatically cancels every one of the company's debts",
        ],
        correctIndex: 0,
        explanation:
          "The stay is what gives the company room to negotiate a coordinated restructuring instead of being dismantled by the fastest-moving creditor.",
      },
      {
        id: "q3",
        prompt: "What does a plan of reorganization describe?",
        choices: [
          "How existing claims will be treated — reduced, converted to equity, or paid in some other form",
          "Only the company's future marketing strategy",
          "A plan of reorganization has no relationship to creditor claims",
          "The exact daily stock price the company must maintain",
        ],
        correctIndex: 0,
        explanation:
          "The plan is the core document determining how each class of creditor's claim is ultimately treated as the company restructures.",
      },
      {
        id: "q4",
        prompt: "What frequently happens to former creditors once a company emerges from bankruptcy?",
        choices: [
          "They often end up holding equity in the reorganized company",
          "They are always paid the full original face value of their debt in cash",
          "They automatically lose all rights to any recovery",
          "Former creditors have no possible role in the reorganized company",
        ],
        correctIndex: 0,
        explanation:
          "Debt-to-equity conversion is a common feature of reorganization plans, turning former lenders into the new owners — a mechanism central to several strategies covered later in this module.",
      },
      {
        id: "q5",
        prompt: "In the example, what changes about the company after it emerges from bankruptcy?",
        choices: [
          "Its capital structure — a lighter debt load, with some former bondholders now holding equity — while the underlying business is unchanged",
          "The company ceases to exist entirely",
          "Nothing changes at all about the company",
          "The company's operations are sold off to a competitor",
        ],
        correctIndex: 0,
        explanation:
          "Reorganization is fundamentally a restructuring of who owns and is owed what, not necessarily a change in what the business actually does.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "distressed-capital-structure-and-priority",
    title: "Capital Structure and Priority of Claims",
    summary:
      "Why where a claim sits in a company's capital structure — secured debt, unsecured debt, subordinated debt, equity — determines how much it actually recovers in a distress scenario.",
    body: [
      { type: "heading", text: "The Capital Structure Stack" },
      {
        type: "paragraph",
        text: "A company's capital structure is typically layered: secured debt sits at the top, backed by specific collateral; unsecured debt sits below that, with only a general claim on the company; subordinated debt sits below unsecured debt by contractual agreement; and common equity sits at the very bottom, with no fixed claim at all." },
      { type: "heading", text: "The Absolute Priority Rule" },
      {
        type: "paragraph",
        text: "In a well-functioning reorganization, the absolute priority rule holds that a more senior class of claims must be paid in full before any value flows to a more junior class. In practice, negotiated outcomes sometimes deviate from strict priority, but the ranking still drives most of the negotiating leverage each class holds." },
      { type: "heading", text: "Why Seniority Determines Recovery" },
      {
        type: "paragraph",
        text: "When a company's total value isn't enough to repay every claim in full, that ranking is what decides who actually gets paid and how much: senior secured creditors often recover close to their full claim, while unsecured and subordinated creditors, and especially equity holders, can see recovery drop sharply or to essentially zero." },
      { type: "heading", text: "Why Distressed Investors Care Exactly Where They Sit" },
      {
        type: "paragraph",
        text: "Because recovery is so sensitive to seniority, a distressed-debt investor needs to know precisely which layer of the capital structure a given security sits in before estimating what it's likely to recover — two bonds from the same company can have wildly different outcomes depending on this ranking alone." },
      { type: "heading", text: "In Practice" },
      {
        type: "paragraph",
        text: "If a distressed company's total value covers its secured debt in full but only half of its unsecured debt, secured bondholders might recover 100 cents on the dollar while unsecured bondholders recover roughly 50 cents — and equity holders, sitting below both, recover nothing at all, despite technically still owning the company on paper until the reorganization is finalized." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "How is a typical corporate capital structure layered, from most to least senior?",
        choices: [
          "Secured debt, unsecured debt, subordinated debt, then common equity",
          "Common equity, then subordinated debt, then secured debt",
          "All claims in a capital structure rank exactly equally",
          "Unsecured debt always ranks above secured debt",
        ],
        correctIndex: 0,
        explanation:
          "Secured debt's collateral backing places it at the top, with unsecured, then subordinated debt below it, and equity holding the most junior claim.",
      },
      {
        id: "q2",
        prompt: "What does the absolute priority rule generally require?",
        choices: [
          "A more senior class of claims must be paid in full before any value flows to a more junior class",
          "All classes of claims must be paid an identical amount regardless of seniority",
          "Equity holders must always be paid before any creditors",
          "The absolute priority rule has no bearing on reorganization outcomes",
        ],
        correctIndex: 0,
        explanation:
          "Strict seniority ordering is the baseline principle, even though negotiated outcomes sometimes deviate from it in practice.",
      },
      {
        id: "q3",
        prompt: "Why might unsecured creditors recover less than secured creditors in the same bankruptcy?",
        choices: [
          "Their claim ranks below secured debt in the capital structure, so they're paid only after senior claims are satisfied",
          "Unsecured creditors always recover more than secured creditors",
          "Recovery has no relationship to seniority in a capital structure",
          "Unsecured and secured creditors are always paid identical amounts",
        ],
        correctIndex: 0,
        explanation:
          "The capital structure's ranking directly determines the order — and often the amount — of recovery each class receives.",
      },
      {
        id: "q4",
        prompt: "Why does a distressed-debt investor need to know exactly where a security sits in the capital structure?",
        choices: [
          "Recovery is highly sensitive to seniority, so two bonds from the same company can have very different outcomes based on ranking alone",
          "Capital structure position has no effect on a distressed security's expected recovery",
          "All securities from the same company always recover an identical amount",
          "Seniority only matters for companies that never actually go bankrupt",
        ],
        correctIndex: 0,
        explanation:
          "Because seniority drives recovery so directly, understanding exactly where a claim ranks is essential to estimating its likely value.",
      },
      {
        id: "q5",
        prompt: "In the example, why do equity holders recover nothing even though they technically still own the company?",
        choices: [
          "Equity sits below all debt in the capital structure, so it's only paid after every more senior claim, including unsecured debt, is satisfied",
          "Equity holders are always paid first in any bankruptcy",
          "Equity and secured debt rank identically in a capital structure",
          "There is no realistic scenario where equity holders recover nothing",
        ],
        correctIndex: 0,
        explanation:
          "With the company's value covering only secured debt in full and unsecured debt partially, there's nothing left for equity, which sits at the very bottom of the stack.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "distressed-investing-approaches",
    title: "Distressed Debt Investing Approaches",
    summary:
      "The spectrum from passively holding distressed debt through to actively shaping the reorganization itself — the basic split this module's strategies are built around.",
    body: [
      { type: "heading", text: "Passive: Buy and Hold Through the Process" },
      {
        type: "paragraph",
        text: "A passive approach buys distressed debt at a discount and simply holds it through the bankruptcy or restructuring process, taking whatever recovery the process ultimately delivers without trying to influence the outcome. The investor's edge here is purely in the initial analysis: correctly estimating recovery value better than the market's current price implies." },
      { type: "heading", text: "Active: Influencing the Outcome" },
      {
        type: "paragraph",
        text: "An active approach goes further, using a large or strategically placed position to actually shape the reorganization — joining a creditors' committee, negotiating directly with the company, or pushing for a specific plan structure. The investor's edge here comes not just from picking the right claim, but from improving the outcome itself." },
      { type: "heading", text: "Why Position Size and Class Matter" },
      {
        type: "paragraph",
        text: "Active influence generally requires holding a meaningful share of a specific class of claims — a small, scattered position has little negotiating leverage, while a large position, especially one capable of blocking or approving a plan vote, can meaningfully shape the terms other creditors ultimately receive too." },
      { type: "heading", text: "A Spectrum, Not a Binary Choice" },
      {
        type: "paragraph",
        text: "In practice, distressed investors sit along a spectrum between fully passive and fully active, and the same investor might take a passive approach in one situation and an active one in another, depending on position size, the specific opportunity, and how confident they are in shaping a better outcome than simply waiting it out." },
      { type: "heading", text: "In Practice" },
      {
        type: "paragraph",
        text: "A fund that buys a small position in dozens of different distressed issuers is almost certainly taking a passive approach with each one — diversifying across many recovery bets rather than trying to influence any single company's outcome. A fund that instead concentrates a large position in one issuer's senior debt, then joins its creditors' committee, is taking a distinctly active approach to that specific situation." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What defines a passive distressed-debt investing approach?",
        choices: [
          "Buying distressed debt and holding it through the process without trying to influence the outcome",
          "Actively negotiating the terms of a company's reorganization plan",
          "Passive investing means never buying any distressed debt at all",
          "Joining a creditors' committee to shape the restructuring",
        ],
        correctIndex: 0,
        explanation:
          "A passive investor's edge comes purely from analysis at the point of purchase, not from shaping what happens afterward.",
      },
      {
        id: "q2",
        prompt: "What distinguishes an active distressed-debt approach from a passive one?",
        choices: [
          "The active investor uses a position to actually shape the reorganization outcome, not just estimate recovery value",
          "There is no meaningful distinction between active and passive approaches",
          "Active investors never hold any distressed securities at all",
          "Passive investors always achieve higher returns than active ones",
        ],
        correctIndex: 0,
        explanation:
          "The active approach adds a second source of edge — influencing the process itself — on top of the initial recovery analysis.",
      },
      {
        id: "q3",
        prompt: "Why does position size matter for an investor trying to take an active role?",
        choices: [
          "A large position, especially one able to block or approve a plan vote, carries real negotiating leverage that a small position lacks",
          "Position size has no effect on an investor's ability to influence a reorganization",
          "Smaller positions always carry more negotiating leverage than larger ones",
          "Only equity positions, never debt positions, can carry negotiating leverage",
        ],
        correctIndex: 0,
        explanation:
          "Meaningful influence over a reorganization generally requires enough size in a specific claim class to matter in negotiations and voting.",
      },
      {
        id: "q4",
        prompt: "Is the choice between active and passive investing a strict either/or decision for a given fund?",
        choices: [
          "No — the same investor might be passive in one situation and active in another, depending on position size and confidence in improving the outcome",
          "Yes, every distressed investor must commit permanently to only one approach",
          "Active and passive approaches can never be used by the same fund",
          "The distinction between active and passive has no practical relevance",
        ],
        correctIndex: 0,
        explanation:
          "The two approaches sit on a spectrum, and a fund's choice in any given situation depends on the specific circumstances rather than a fixed rule.",
      },
      {
        id: "q5",
        prompt: "In the example, why is the fund holding many small, diversified positions considered passive?",
        choices: [
          "Diversifying across many small recovery bets, rather than concentrating enough size to influence any single outcome, is a passive approach",
          "Diversification is actually the defining feature of an active approach",
          "The fund is committing fraud by holding many small positions",
          "There is no difference between this fund's approach and the concentrated, committee-joining fund's approach",
        ],
        correctIndex: 0,
        explanation:
          "Spreading small positions across many issuers is inherently passive, since no single position carries enough weight to meaningfully shape an outcome.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "distressed-buying-and-holding-distressed-debt",
    title: "Buying and Holding Distressed Debt",
    summary:
      "The purely passive strategy: buy defaulted or near-default debt at a discount to its likely recovery value, and hold through the restructuring process to realize that recovery.",
    body: [
      { type: "heading", text: "The Core Trade" },
      {
        type: "paragraph",
        text: "This strategy buys distressed debt trading at a discount to face value and simply holds the position through default, restructuring, and eventual emergence, collecting whatever recovery — cash, new debt, equity in the reorganized company, or some mix — the process ultimately delivers." },
      { type: "heading", text: "Where the Edge Comes From" },
      {
        type: "paragraph",
        text: "Because the investor takes no active role in shaping the outcome, the entire edge has to come from analysis at the point of purchase: estimating a more accurate recovery value than what the current market price implies, and buying only when that estimate offers a meaningful margin of safety." },
      { type: "heading", text: "Diversification as Risk Management" },
      {
        type: "paragraph",
        text: "Because any single distressed situation carries real uncertainty about how the reorganization ultimately plays out, this strategy is typically run across a diversified basket of distressed issuers rather than concentrated in just one or two, so that recovery estimates that turn out wrong in either direction don't dominate the portfolio's overall return." },
      { type: "heading", text: "The Time Horizon Problem" },
      {
        type: "paragraph",
        text: "Bankruptcy and reorganization processes can take anywhere from months to several years to resolve, and the investor generally can't control that timeline. That illiquidity and uncertain holding period is a real cost of the strategy, distinct from the credit risk of the recovery estimate itself." },
      { type: "heading", text: "In Practice" },
      {
        type: "paragraph",
        text: "A fund buys the bonds of a retailer that just filed for reorganization, at 35 cents on the dollar, based on an estimate that the eventual recovery — mostly in the form of equity in the reorganized company — will be worth closer to 55 cents. The fund takes no role in the case itself, simply holding the position for the roughly 18 months the process takes to conclude." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does this strategy do after buying distressed debt at a discount?",
        choices: [
          "Holds the position through the restructuring process to collect whatever recovery it ultimately delivers",
          "Immediately resells the debt at the same discounted price",
          "Actively negotiates the terms of the company's reorganization",
          "Converts the debt into a secured position before default occurs",
        ],
        correctIndex: 0,
        explanation:
          "The defining feature of this strategy is holding passively through the process rather than trying to shape its outcome.",
      },
      {
        id: "q2",
        prompt: "Where does this strategy's edge come from, since the investor takes no active role?",
        choices: [
          "Estimating a more accurate recovery value than the current market price implies, at the point of purchase",
          "Directly controlling the outcome of the bankruptcy process",
          "This strategy has no real source of edge at all",
          "Guaranteed government compensation for distressed bondholders",
        ],
        correctIndex: 0,
        explanation:
          "Since the strategy is purely passive, the entire source of potential return is getting the recovery estimate right relative to the purchase price.",
      },
      {
        id: "q3",
        prompt: "Why does this strategy typically diversify across many distressed issuers?",
        choices: [
          "So that recovery estimates that turn out wrong for any single issuer don't dominate the portfolio's overall return",
          "Diversification has no risk-management benefit for this strategy",
          "Regulations require distressed debt to be held in large, single positions",
          "Diversifying makes the holding period shorter",
        ],
        correctIndex: 0,
        explanation:
          "Given the real uncertainty in any single restructuring outcome, spreading risk across many situations is a core risk-management tool for a passive approach.",
      },
      {
        id: "q4",
        prompt: "What is the \"time horizon problem\" this strategy faces?",
        choices: [
          "Restructuring processes can take months to years, and the investor generally can't control that uncertain timeline",
          "The strategy always resolves within exactly 24 hours",
          "Time horizon has no relevance to a buy-and-hold distressed strategy",
          "The investor can always force an immediate resolution of the case",
        ],
        correctIndex: 0,
        explanation:
          "The illiquidity and unpredictable duration of a bankruptcy process is a real cost distinct from the credit risk of the recovery estimate itself.",
      },
      {
        id: "q5",
        prompt: "In the example, what form does the fund expect its eventual recovery to take?",
        choices: [
          "Mostly equity in the reorganized company",
          "A guaranteed cash refund of the full face value",
          "Immediate resale at the original purchase price",
          "The example describes no expected form of recovery",
        ],
        correctIndex: 0,
        explanation:
          "The fund's recovery estimate is built around receiving equity in the reorganized company, consistent with how debt-for-equity conversions commonly work in reorganization.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "distressed-active-distressed-investing",
    title: "Active Distressed Investing",
    summary:
      "Using a position's size and standing to actually shape a company's restructuring outcome, rather than simply waiting for the process to resolve on its own.",
    body: [
      { type: "heading", text: "Beyond Passive Analysis" },
      {
        type: "paragraph",
        text: "Where the previous strategy's edge comes entirely from correctly estimating recovery value, active distressed investing adds a second source of edge: using influence over the restructuring process itself to push toward an outcome better than what would happen if the investor simply stayed passive." },
      { type: "heading", text: "Joining the Creditors' Committee" },
      {
        type: "paragraph",
        text: "A common vehicle for influence is an official creditors' committee, formed to represent a class of claims in negotiations with the company. A seat on that committee gives an investor direct visibility into the company's financial position and a formal voice in shaping the reorganization plan, well beyond what a passive bondholder receives." },
      { type: "heading", text: "Negotiating Leverage From Position Size" },
      {
        type: "paragraph",
        text: "Because a reorganization plan typically needs approval from a threshold share of each voting class, an investor holding a large enough position in one class can effectively block a plan it dislikes, which is real leverage to negotiate better terms even outside a formal committee seat." },
      { type: "heading", text: "The Added Cost and Risk of Being Active" },
      {
        type: "paragraph",
        text: "Active involvement isn't free: it requires legal and advisory resources, time, and often restricts the investor's ability to trade the position freely while material non-public information from active involvement is held. The strategy is worth pursuing only when the expected improvement in outcome outweighs those real costs." },
      { type: "heading", text: "In Practice" },
      {
        type: "paragraph",
        text: "An investor accumulates a large position in a distressed company's unsecured bonds, then joins the official creditors' committee. Through that seat, they push back on a proposed plan that would have paid unsecured creditors mostly in low-value warrants, negotiating instead for a larger equity stake — an outcome a purely passive bondholder in the same class would have simply had to accept." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What additional source of edge does active distressed investing add beyond recovery-value analysis?",
        choices: [
          "Using influence over the restructuring process itself to push toward a better outcome",
          "Active investing removes the need for any recovery-value analysis at all",
          "There is no additional source of edge in an active approach",
          "Active investing relies entirely on random chance",
        ],
        correctIndex: 0,
        explanation:
          "Active distressed investing layers process influence on top of the same underlying recovery-value analysis a passive investor relies on.",
      },
      {
        id: "q2",
        prompt: "What does a seat on a creditors' committee provide?",
        choices: [
          "Direct visibility into the company's financial position and a formal voice in shaping the reorganization plan",
          "Automatic full repayment of the investor's entire claim",
          "No practical benefit over a purely passive position",
          "Ownership of the company's physical assets immediately",
        ],
        correctIndex: 0,
        explanation:
          "A committee seat is a formal mechanism for influence, well beyond the limited visibility a passive bondholder has into the process.",
      },
      {
        id: "q3",
        prompt: "How can a large position size create negotiating leverage in a reorganization?",
        choices: [
          "It can effectively block a plan vote in that class, since plans typically need a threshold share of approval",
          "Position size has no bearing on negotiating leverage",
          "Large positions automatically forfeit all voting rights",
          "Only equity holders, never debtholders, have any voting leverage",
        ],
        correctIndex: 0,
        explanation:
          "The voting-threshold structure of plan approval is exactly what turns a large enough position into real negotiating power.",
      },
      {
        id: "q4",
        prompt: "What is a real cost of pursuing an active distressed-investing approach?",
        choices: [
          "Legal and advisory resources, time, and trading restrictions tied to holding material non-public information",
          "Active investing has no costs of any kind compared to a passive approach",
          "Active investors are legally guaranteed a full recovery regardless of outcome",
          "Active involvement always shortens the restructuring timeline to zero",
        ],
        correctIndex: 0,
        explanation:
          "The added influence of an active approach comes with real resource costs and constraints that a passive strategy doesn't face.",
      },
      {
        id: "q5",
        prompt: "In the example, what did the investor achieve by joining the creditors' committee that a passive bondholder wouldn't have?",
        choices: [
          "Negotiating a larger equity stake instead of accepting a plan paying mostly low-value warrants",
          "An automatic doubling of their original investment with no negotiation required",
          "Immediate liquidation of the entire company",
          "The example shows no difference in outcome between active and passive investors",
        ],
        correctIndex: 0,
        explanation:
          "The committee seat gave the investor real influence to negotiate a materially better outcome than simply accepting whatever plan was initially proposed.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "distressed-planning-a-reorganization",
    title: "Planning a Reorganization",
    summary:
      "Taking an active role in actually drafting and structuring the terms of a company's reorganization plan — debt-for-equity swaps, asset sales, new financing — rather than just reacting to a proposal from the company.",
    body: [
      { type: "heading", text: "From Reacting to Proposing" },
      {
        type: "paragraph",
        text: "This strategy goes a step beyond negotiating over a plan the company or another creditor group proposes: an investor with a large, well-positioned claim, often alongside legal and financial advisors, actively helps draft the plan's actual structure — which debts convert to equity, which assets get sold, and how new financing is arranged." },
      { type: "heading", text: "Structuring the Debt-for-Equity Conversion" },
      {
        type: "paragraph",
        text: "A central design choice in most reorganization plans is exactly how much of each debt class converts into equity in the reorganized company, and at what implied valuation. An investor shaping the plan has real influence over both the size of the equity stake different creditor classes receive and the terms attached to it." },
      { type: "heading", text: "Arranging Exit Financing" },
      {
        type: "paragraph",
        text: "A company emerging from bankruptcy often needs new financing to operate going forward, sometimes called exit financing. An investor willing to provide that financing, or to arrange it, gains additional influence over the plan's terms and often extracts favorable pricing for taking on that role." },
      { type: "heading", text: "Competing Plans" },
      {
        type: "paragraph",
        text: "More than one creditor group can sometimes propose a competing plan of reorganization if they believe it delivers a better outcome than the company's own proposal, and the court and voting creditors ultimately decide between them — which is exactly the scenario a plan-shaping investor is positioning to win." },
      { type: "heading", text: "In Practice" },
      {
        type: "paragraph",
        text: "A distressed investor holding a large position across several classes of a company's debt works with restructuring advisors to draft an alternative reorganization plan, offering better recovery terms to junior creditors than the company's own initial proposal while also committing to provide the company's exit financing — a package designed to win the necessary creditor votes over the competing, less favorable plan." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "How does this strategy go beyond simply negotiating over an existing plan proposal?",
        choices: [
          "The investor actively helps draft the plan's actual structure, rather than just reacting to a proposal",
          "This strategy involves no participation in the reorganization at all",
          "It is identical to the purely passive buy-and-hold strategy",
          "It only ever involves rejecting every proposed plan with no alternative",
        ],
        correctIndex: 0,
        explanation:
          "Plan-shaping investors move from reacting to a proposal to actively authoring the terms of the restructuring itself.",
      },
      {
        id: "q2",
        prompt: "What is a central design choice in most reorganization plans, according to this lesson?",
        choices: [
          "How much of each debt class converts into equity, and at what implied valuation",
          "The company's future advertising budget",
          "Reorganization plans never involve any debt-to-equity decisions",
          "The color scheme of the company's new logo",
        ],
        correctIndex: 0,
        explanation:
          "The debt-for-equity conversion terms are one of the most consequential decisions in shaping how value is ultimately distributed among creditor classes.",
      },
      {
        id: "q3",
        prompt: "What is \"exit financing\"?",
        choices: [
          "New financing a company needs to operate going forward as it emerges from bankruptcy",
          "A fee charged to creditors for leaving a creditors' committee",
          "A type of tax owed only by companies that avoid bankruptcy entirely",
          "Exit financing has no relevance to a reorganization plan",
        ],
        correctIndex: 0,
        explanation:
          "Exit financing funds the reorganized company's ongoing operations, and providing or arranging it is itself a source of investor influence over the plan.",
      },
      {
        id: "q4",
        prompt: "What happens when more than one creditor group proposes a competing plan of reorganization?",
        choices: [
          "The court and voting creditors ultimately decide between the competing plans",
          "Competing plans are automatically illegal and immediately rejected",
          "Only the company itself is ever allowed to propose a plan",
          "Competing plans are combined into one plan automatically with no vote",
        ],
        correctIndex: 0,
        explanation:
          "The formal voting and court-confirmation process is what resolves competing plan proposals, giving a well-structured alternative plan a real chance of winning.",
      },
      {
        id: "q5",
        prompt: "In the example, what two things does the investor's alternative plan combine to try to win creditor votes?",
        choices: [
          "Better recovery terms for junior creditors and a commitment to provide the company's exit financing",
          "A guarantee of zero recovery for all creditors",
          "An immediate liquidation of the entire company",
          "The example describes no specific elements of the alternative plan",
        ],
        correctIndex: 0,
        explanation:
          "Combining improved terms with a financing commitment is exactly the kind of package a plan-shaping investor uses to make their proposal more attractive than the alternative.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "distressed-buying-outstanding-debt",
    title: "Buying Outstanding Debt",
    summary:
      "Systematically accumulating distressed debt securities across the secondary market, spread across multiple issuers and capital-structure levels, as a diversified sourcing approach rather than a single concentrated bet.",
    body: [
      { type: "heading", text: "Sourcing From the Secondary Market" },
      {
        type: "paragraph",
        text: "Most distressed debt isn't bought directly from the issuing company — it's bought from existing holders in the secondary market, often original lenders or bondholders who want out of the position regardless of price, whether for portfolio, regulatory, or risk-tolerance reasons of their own." },
      { type: "heading", text: "Why Forced or Motivated Sellers Matter" },
      {
        type: "paragraph",
        text: "A meaningful share of distressed-debt sellers aren't making a considered credit judgment at all — a mutual fund that can't hold defaulted debt under its own mandate, or a bank managing regulatory capital charges, may sell simply because it has to, not because it disagrees with the price. That structural, non-economic selling pressure is a real source of opportunity for a buyer without those constraints." },
      { type: "heading", text: "Building a Diversified Book" },
      {
        type: "paragraph",
        text: "Rather than concentrating in one issuer, this strategy builds a broad book of positions across many distressed names and across different levels of each company's capital structure, treating distressed-debt sourcing itself as a repeatable, portfolio-level process rather than a series of one-off, high-conviction bets." },
      { type: "heading", text: "Distinguishing From a Loan-to-Own Position" },
      {
        type: "paragraph",
        text: "This differs from the loan-to-own approach covered next, which deliberately concentrates in a specific class of one company's debt with the explicit goal of ending up as the controlling equity owner. Buying outstanding debt broadly is closer to portfolio construction than to pursuing control of any single company." },
      { type: "heading", text: "In Practice" },
      {
        type: "paragraph",
        text: "A fund maintains standing relationships with banks, mutual funds, and insurers that periodically need to offload distressed positions for reasons unrelated to the credit itself, buying small-to-moderate stakes across dozens of issuers whenever a motivated seller needs liquidity — building recovery-value exposure at scale rather than making any single concentrated bet." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Where is most distressed debt actually purchased from?",
        choices: [
          "The secondary market, often from existing holders who want out of the position",
          "Directly from the issuing company at face value",
          "Distressed debt cannot legally be bought or sold at all",
          "Only from government auctions",
        ],
        correctIndex: 0,
        explanation:
          "Secondary-market purchases from existing holders, not direct issuance, are the typical way distressed debt changes hands.",
      },
      {
        id: "q2",
        prompt: "Why do some sellers of distressed debt sell regardless of price?",
        choices: [
          "Mandate, regulatory, or risk-tolerance constraints can force a sale that isn't based on a considered credit judgment",
          "All sellers of distressed debt are making a fully considered economic decision",
          "There is no such thing as a forced or motivated seller in distressed markets",
          "Sellers always hold their position until the company fully recovers",
        ],
        correctIndex: 0,
        explanation:
          "Structural constraints unrelated to the credit itself create real, exploitable selling pressure for a buyer without those same constraints.",
      },
      {
        id: "q3",
        prompt: "What does this strategy do instead of concentrating in one issuer?",
        choices: [
          "Builds a broad, diversified book of positions across many issuers and capital-structure levels",
          "Concentrates all capital in a single company's most junior debt",
          "Avoids holding any distressed debt securities whatsoever",
          "Buys only equity, never debt, in distressed companies",
        ],
        correctIndex: 0,
        explanation:
          "Treating distressed-debt sourcing as a repeatable, diversified, portfolio-level process is the defining feature of this strategy.",
      },
      {
        id: "q4",
        prompt: "How does this strategy differ from a loan-to-own approach?",
        choices: [
          "Loan-to-own deliberately concentrates in one company's debt to pursue control, while this strategy is closer to broad portfolio construction",
          "The two strategies are functionally identical",
          "Loan-to-own never involves purchasing any actual debt securities",
          "This strategy always seeks controlling equity ownership, exactly like loan-to-own",
        ],
        correctIndex: 0,
        explanation:
          "The two strategies differ in concentration and intent — one is a diversified sourcing approach, the other a concentrated bid for control.",
      },
      {
        id: "q5",
        prompt: "In the example, why does the fund maintain standing relationships with banks and insurers?",
        choices: [
          "Those institutions periodically need to offload distressed positions for reasons unrelated to the credit itself, creating a repeatable sourcing channel",
          "The relationships are purely social and have no connection to sourcing debt",
          "Banks and insurers are legally required to sell only to this specific fund",
          "The fund uses these relationships exclusively to sell its own holdings",
        ],
        correctIndex: 0,
        explanation:
          "Cultivating relationships with structurally motivated sellers is exactly what lets the fund source distressed debt on a repeatable, diversified basis.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "distressed-loan-to-own",
    title: "Loan-to-Own",
    summary:
      "Deliberately buying a company's senior debt with the explicit goal of converting that claim into a controlling equity stake once the company reorganizes.",
    body: [
      { type: "heading", text: "The Core Idea" },
      {
        type: "paragraph",
        text: "Loan-to-own means buying debt, typically senior or secured debt, not primarily for its coupon or even its recovery value as debt, but specifically because that class is likely to receive the bulk of the reorganized company's new equity — effectively using debt purchases as a route to acquiring control of the business." },
      { type: "heading", text: "Why Senior Debt Is the Typical Entry Point" },
      {
        type: "paragraph",
        text: "Because more senior debt classes are first in line for recovery, they're also the class most likely to receive a meaningful equity stake, rather than being wiped out entirely, when a company's total value isn't enough to cover every layer of the capital structure. Buying at the senior level increases the odds of actually ending up with a controlling position." },
      { type: "heading", text: "Building a Blocking or Controlling Position" },
      {
        type: "paragraph",
        text: "This strategy typically requires accumulating a large enough share of the target debt class, both to ensure the ultimate equity conversion delivers real control and to have influence, similar to the active strategies covered earlier, over how favorable the conversion terms actually turn out to be." },
      { type: "heading", text: "The Underlying Business Thesis" },
      {
        type: "paragraph",
        text: "Because the endpoint is owning and controlling the actual operating company, loan-to-own investors need a genuine view on the business itself, not just the debt's recovery value — they're ultimately underwriting the company's future as its next owner, closer to a private-equity buyout thesis than a pure credit trade." },
      { type: "heading", text: "In Practice" },
      {
        type: "paragraph",
        text: "A fund buys a controlling share of a struggling manufacturer's senior secured debt at a steep discount, specifically because it believes the underlying manufacturing business is fundamentally sound and only over-leveraged. As the company reorganizes, that debt converts into a majority equity stake, and the fund exits its debt position having effectively bought control of a viable business at a distressed-debt price rather than a full acquisition price." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What is the core idea behind a loan-to-own strategy?",
        choices: [
          "Buying debt specifically because that class is likely to receive the bulk of the reorganized company's equity, effectively acquiring control",
          "Buying debt purely for its coupon income with no interest in equity",
          "Loan-to-own means buying only publicly traded equity, never debt",
          "The strategy requires avoiding any position that could lead to equity ownership",
        ],
        correctIndex: 0,
        explanation:
          "Loan-to-own investors use debt purchases as a deliberate route to eventual equity control, not simply as a credit investment.",
      },
      {
        id: "q2",
        prompt: "Why is senior debt the typical entry point for this strategy?",
        choices: [
          "More senior classes are more likely to receive a meaningful equity stake rather than being wiped out entirely",
          "Senior debt is always the cheapest class available in a bankruptcy",
          "Junior debt always receives more equity than senior debt",
          "Seniority has no bearing on which class receives equity in a reorganization",
        ],
        correctIndex: 0,
        explanation:
          "Because senior claims rank higher for recovery, they're more likely to end up holding a real equity stake when the company's value doesn't cover the whole capital structure.",
      },
      {
        id: "q3",
        prompt: "Why does this strategy typically require accumulating a large position in the target debt class?",
        choices: [
          "To ensure the equity conversion delivers real control and to have influence over the conversion terms",
          "Position size has no bearing on the outcome of a loan-to-own strategy",
          "A single bond is always sufficient to guarantee full control",
          "Large positions are required purely for regulatory reporting purposes",
        ],
        correctIndex: 0,
        explanation:
          "Meaningful control and favorable conversion terms both depend on holding enough of the target class, similar to the leverage active investors rely on more broadly.",
      },
      {
        id: "q4",
        prompt: "How is a loan-to-own thesis different from a pure credit-recovery thesis?",
        choices: [
          "It requires a genuine view on the operating business itself, closer to a private-equity buyout thesis than a pure credit trade",
          "It requires no analysis of the underlying business at all",
          "Loan-to-own and passive buy-and-hold rely on an identical thesis",
          "Loan-to-own investors never care about the company's future operations",
        ],
        correctIndex: 0,
        explanation:
          "Because the endpoint is actual ownership, the investor needs to believe in the business itself, not just estimate a debt recovery value.",
      },
      {
        id: "q5",
        prompt: "In the example, what does the fund ultimately end up with after the reorganization?",
        choices: [
          "A majority equity stake in the manufacturer, effectively bought at a distressed-debt price rather than a full acquisition price",
          "No position at all, having sold the debt before the reorganization concluded",
          "A guaranteed cash payment with no equity involved",
          "Immediate liquidation of the manufacturer's assets",
        ],
        correctIndex: 0,
        explanation:
          "The debt-to-equity conversion is what completes the loan-to-own thesis, turning a discounted debt purchase into effective control of the business.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "distressed-distress-risk-puzzle",
    title: "Distress Risk Puzzle",
    summary:
      "The well-documented finding that stocks and bonds of financially distressed companies have historically delivered lower, not higher, returns despite their obviously elevated risk — a genuine anomaly relative to standard risk-return logic.",
    body: [
      { type: "heading", text: "What the Puzzle Actually Says" },
      {
        type: "paragraph",
        text: "Standard finance theory holds that bearing more risk should be compensated with higher expected return. Distressed companies are, almost by definition, riskier than healthy ones — yet a substantial body of academic research has found that portfolios of financially distressed stocks have historically underperformed, not outperformed, safer stocks, on average. That mismatch is the \"distress risk puzzle.\"" },
      { type: "heading", text: "Candidate Explanations: Mispricing" },
      {
        type: "paragraph",
        text: "One explanation is behavioral: distressed companies may be systematically overpriced because some investors overreact to a small chance of a dramatic turnaround (a lottery-ticket-like payoff), or because complex, hard-to-analyze distressed situations simply aren't priced as efficiently as more heavily followed, healthier companies." },
      { type: "heading", text: "Candidate Explanations: Institutional Constraints" },
      {
        type: "paragraph",
        text: "Another explanation is structural: many large institutional investors are restricted, by mandate or regulation, from holding heavily distressed or defaulted securities at all, reducing the pool of buyers willing to bid distressed prices up toward fair value, regardless of what the underlying risk-return math would otherwise suggest." },
      { type: "heading", text: "Candidate Explanations: Risk Mismeasurement" },
      {
        type: "paragraph",
        text: "A third explanation is more technical: standard risk measures like beta or historical volatility may simply fail to capture the true risk profile of a distressed security well, meaning the \"puzzle\" partly reflects that distressed risk isn't being measured accurately in the first place, rather than a genuine violation of risk-return logic." },
      { type: "heading", text: "In Practice" },
      {
        type: "paragraph",
        text: "A researcher studying decades of returns on portfolios sorted by a distress-risk score consistently finds that the most distressed group underperforms the least distressed group on average, even after adjusting for standard risk factors — a result robust enough across markets and time periods that it's treated as a genuine, well-established empirical puzzle rather than a fluke of one particular dataset." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does the distress risk puzzle describe?",
        choices: [
          "Distressed companies' stocks and bonds have historically delivered lower, not higher, returns despite their elevated risk",
          "Distressed companies always deliver higher returns than the overall market",
          "There is no observed relationship between distress and historical returns",
          "The puzzle refers to distressed companies always going bankrupt within one year",
        ],
        correctIndex: 0,
        explanation:
          "The puzzle is specifically the mismatch between distressed companies' obviously elevated risk and their historically underwhelming average returns.",
      },
      {
        id: "q2",
        prompt: "What is one behavioral explanation offered for the puzzle?",
        choices: [
          "Investors may overreact to a small chance of a dramatic turnaround, systematically overpricing distressed names",
          "Investors are legally required to overpay for distressed securities",
          "Behavioral explanations play no role in any proposed explanation",
          "Distressed companies always trade at a price below their true risk-adjusted value",
        ],
        correctIndex: 0,
        explanation:
          "A lottery-ticket-like overreaction to turnaround potential is one behavioral mechanism proposed to explain distressed securities' historically weak returns.",
      },
      {
        id: "q3",
        prompt: "How might institutional constraints contribute to the puzzle?",
        choices: [
          "Many institutions are restricted from holding distressed securities, reducing the pool of buyers who would otherwise bid prices toward fair value",
          "Institutional investors are required by law to hold only distressed securities",
          "Institutional constraints have no bearing on distressed security pricing",
          "All institutional investors freely hold unlimited amounts of distressed debt",
        ],
        correctIndex: 0,
        explanation:
          "A reduced buyer pool due to mandate or regulatory restrictions is a structural explanation distinct from any behavioral mispricing story.",
      },
      {
        id: "q4",
        prompt: "What does the \"risk mismeasurement\" explanation suggest?",
        choices: [
          "Standard risk measures may fail to capture a distressed security's true risk profile accurately, partly explaining the apparent puzzle",
          "Risk can never be measured for any type of security",
          "Distressed securities have zero actual risk once properly measured",
          "Risk mismeasurement has nothing to do with the distress risk puzzle",
        ],
        correctIndex: 0,
        explanation:
          "If standard measures understate or overstate a distressed security's true risk, that alone could account for part of the observed anomaly.",
      },
      {
        id: "q5",
        prompt: "Why is the distress risk puzzle treated as a genuine, well-established finding rather than a fluke?",
        choices: [
          "The underperformance shows up robustly across markets and time periods, even after adjusting for standard risk factors",
          "It has only ever been observed in a single dataset from one specific year",
          "The finding has never been replicated by any other researcher",
          "The puzzle was based entirely on a single company's outcome",
        ],
        correctIndex: 0,
        explanation:
          "Robustness across different markets, time periods, and risk adjustments is exactly what elevates this from a one-off observation to a recognized empirical puzzle.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "distressed-distress-risk-puzzle-risk-management",
    title: "Distress Risk Puzzle – Risk Management",
    summary:
      "Given that distress risk has historically been poorly compensated on average, how a distressed-investing strategy manages exposure to avoid simply harvesting that badly rewarded risk factor across the board.",
    body: [
      { type: "heading", text: "The Practical Implication of the Puzzle" },
      {
        type: "paragraph",
        text: "If distress risk, taken broadly and indiscriminately, has historically been poorly compensated, a distressed-investing strategy needs a specific reason to believe a given situation is an exception — a genuine mispricing, an identifiable catalyst, or a real information or structuring edge — rather than simply harvesting generic distress exposure and hoping the historical pattern doesn't hold." },
      { type: "heading", text: "Selectivity Over Broad Exposure" },
      {
        type: "paragraph",
        text: "One practical response is selectivity: rather than buying distressed securities broadly across the market, a manager focuses on situations with a clear, identifiable catalyst, a well-understood recovery path, or a specific structural edge (like the active influence strategies covered earlier in this module) that a purely passive, market-wide distress exposure wouldn't have." },
      { type: "heading", text: "Position Sizing Around Uncertainty" },
      {
        type: "paragraph",
        text: "Because individual distressed outcomes carry real dispersion, sizing positions so no single situation's disappointing outcome can dominate the portfolio matters more here than in a typical strategy, precisely because the average, unselected distress bet has historically been a poor one." },
      { type: "heading", text: "Separating Skill From the Distress Factor" },
      {
        type: "paragraph",
        text: "A manager evaluating their own performance needs to separate genuine skill in selecting or shaping distressed situations from simply having been exposed to a period when distress happened to do well — attributing an above-average return to skill, when it may partly reflect a factor that's historically been a headwind rather than a tailwind, risks overconfidence in situations without those same tailwinds." },
      { type: "heading", text: "In Practice" },
      {
        type: "paragraph",
        text: "A distressed fund manager who knows the distress risk puzzle well won't simply buy every cheap distressed bond available; instead, they specifically look for situations with a catalyst — an identifiable path to a favorable reorganization, or a position large enough to actively shape one — treating generic, unselected distress exposure as something to avoid rather than something to harvest passively." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What practical implication does the distress risk puzzle have for a distressed-investing strategy?",
        choices: [
          "The strategy needs a specific reason to believe a given situation is an exception, rather than harvesting generic distress exposure",
          "The puzzle implies distressed investing should be abandoned entirely",
          "The puzzle has no practical implication for how a strategy is run",
          "The puzzle means every distressed security should be bought regardless of analysis",
        ],
        correctIndex: 0,
        explanation:
          "Given historically poor average compensation for distress risk, a strategy needs a genuine edge in specific situations rather than broad, unselective exposure.",
      },
      {
        id: "q2",
        prompt: "What does \"selectivity\" mean in this context?",
        choices: [
          "Focusing on situations with a clear catalyst, recovery path, or structural edge, rather than buying distressed securities broadly",
          "Buying every distressed security available in the market without exception",
          "Avoiding all distressed securities under any circumstances",
          "Selectivity refers only to the choice of which bank to use for financing",
        ],
        correctIndex: 0,
        explanation:
          "Selectivity is the practical response to the puzzle — seeking specific edges rather than passively harvesting a historically weak factor.",
      },
      {
        id: "q3",
        prompt: "Why does careful position sizing matter more in distressed investing than in a typical strategy, per this lesson?",
        choices: [
          "Individual outcomes carry real dispersion, and the average unselected distress bet has historically performed poorly",
          "Position sizing is actually less important in distressed investing than elsewhere",
          "All distressed situations resolve with an identical, predictable outcome",
          "Position sizing has no connection to the distress risk puzzle",
        ],
        correctIndex: 0,
        explanation:
          "Given both real outcome dispersion and a historically weak average factor, disciplined sizing helps prevent any single disappointing situation from dominating results.",
      },
      {
        id: "q4",
        prompt: "Why is it important for a manager to separate genuine skill from simply benefiting from a period when distress performed well?",
        choices: [
          "Attributing strong results to skill when they partly reflect a temporary tailwind risks overconfidence going forward",
          "Skill and factor exposure are always identical and don't need to be separated",
          "There is no way to distinguish skill from factor performance",
          "This distinction has no bearing on managing a distressed portfolio",
        ],
        correctIndex: 0,
        explanation:
          "Confusing temporary factor tailwinds with genuine skill can lead to misplaced confidence in situations that lack the same tailwind.",
      },
      {
        id: "q5",
        prompt: "In the example, what does the manager specifically avoid doing?",
        choices: [
          "Simply buying every cheap distressed bond available without a specific catalyst or edge",
          "Analyzing any distressed security before purchasing it",
          "Ever purchasing distressed debt under any circumstances",
          "Using active strategies to influence a reorganization",
        ],
        correctIndex: 0,
        explanation:
          "The manager's discipline is exactly about avoiding generic, unselected distress exposure in favor of situations with a genuine catalyst or edge.",
      },
    ],
  },
];
