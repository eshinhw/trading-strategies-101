import type { ConceptLesson } from "./types.js";

// Concept-lesson format, same reasoning as the other non-options courses —
// this course covers cash management, short-term funding markets, and (per
// the book's own "for historical and educational completeness" framing) a
// couple of illegal cash-based practices included for regulatory context,
// not operational instruction. See cash-money-laundering and
// cash-loan-sharking below: both are written strictly as
// what-it-is/why-it's-illegal/how-it's-detected-and-regulated content, never
// as how-to guidance.
export const cashConceptLessons: ConceptLesson[] = [
  {
    kind: "concept",
    slug: "cash-what-is-cash",
    title: "Cash as an Asset Class",
    summary:
      "Why holding cash is a real investment choice, not merely the absence of one, and the safety-liquidity-yield tradeoff that governs how much of it to hold.",
    body: [
      { type: "heading", text: "Cash Is a Position, Not a Default" },
      {
        type: "paragraph",
        text: "In portfolio terms, \"cash\" means bank deposits, Treasury bills, and money market funds — holdings so safe and liquid they're treated as risk-free and instantly spendable. Holding cash is an active decision to prioritize safety and flexibility over return, not simply the absence of having invested in something else.",
      },
      { type: "heading", text: "The Opportunity Cost of Holding Cash" },
      {
        type: "paragraph",
        text: "Cash typically earns the lowest return of any asset class over long periods. Holding it means forgoing the higher expected returns available from stocks, bonds, or real estate — that forgone return is the real, ongoing cost of holding cash, paid in exchange for its safety and optionality.",
      },
      { type: "heading", text: "Why Investors and Companies Hold It Anyway" },
      {
        type: "paragraph",
        text: "Cash covers near-term obligations without forcing a sale of other assets at a bad time, cushions a portfolio against volatility, and serves as dry powder ready to deploy the moment a better opportunity appears — none of which a fully invested portfolio can offer on short notice.",
      },
      { type: "heading", text: "The Safety-Liquidity-Yield Tradeoff" },
      {
        type: "paragraph",
        text: "Even within \"cash and cash equivalents\" there's a spectrum: a checking account is safest and most liquid but pays almost nothing, while a 90-day Treasury bill or CD ties up money briefly in exchange for a bit more yield. The rest of this module looks at the actual instruments and techniques used to manage that spectrum in practice.",
      },
      { type: "heading", text: "In Practice" },
      {
        type: "paragraph",
        text: "A company sitting on a large cash reserve during a strong economy is often criticized for \"wasting\" capital that could be earning a higher return elsewhere — until a downturn hits, revenue drops, and that same reserve is what lets it keep paying employees and suppliers while competitors with less cash are forced into distressed asset sales or bankruptcy.",
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does holding cash actually represent in portfolio terms?",
        choices: [
          "An active decision to prioritize safety and liquidity over higher expected return",
          "The complete absence of any investment decision",
          "A guaranteed way to maximize long-term returns",
          "An asset class with no opportunity cost at all",
        ],
        correctIndex: 0,
        explanation:
          "Choosing to hold cash is itself an investment decision, trading away the higher expected returns of other assets for safety and flexibility.",
      },
      {
        id: "q2",
        prompt: "What is the \"opportunity cost\" of holding cash?",
        choices: [
          "The higher expected returns forgone by not holding stocks, bonds, or other assets instead",
          "A fee banks charge for holding a cash balance",
          "The interest rate printed on a dollar bill",
          "Cash has no opportunity cost since it never loses value",
        ],
        correctIndex: 0,
        explanation:
          "Because cash typically earns the least of any asset class, the return it fails to earn relative to other assets is the real, ongoing cost of holding it.",
      },
      {
        id: "q3",
        prompt: "Why might an investor or company hold cash despite its low return?",
        choices: [
          "To cover near-term obligations, cushion volatility, and have capital ready to deploy on short notice",
          "Because cash always outperforms every other asset class",
          "There is no legitimate reason to ever hold cash",
          "Cash is required by law to make up half of every portfolio",
        ],
        correctIndex: 0,
        explanation:
          "Cash's value comes from what it enables — meeting obligations without a forced sale, absorbing shocks, and funding opportunities quickly — not from its own return.",
      },
      {
        id: "q4",
        prompt: "What does the \"safety-liquidity-yield tradeoff\" describe?",
        choices: [
          "That even within cash and cash equivalents, more yield generally requires giving up some safety or immediate liquidity",
          "That cash instruments all have identical risk, liquidity, and yield",
          "That yield and liquidity always move in the same direction",
          "That safety has no relationship to yield for any instrument",
        ],
        correctIndex: 0,
        explanation:
          "A checking account sits at one end (safest, most liquid, lowest yield) and short-term instruments like T-bills or CDs sit a bit further along, trading a little liquidity for a little more yield.",
      },
      {
        id: "q5",
        prompt: "According to this lesson, why did a large cash reserve prove valuable to a company during a downturn?",
        choices: [
          "It let the company keep paying employees and suppliers without being forced into distressed asset sales",
          "Cash reserves automatically grow faster during downturns",
          "It guaranteed the company's stock price would rise",
          "Downturns have no effect on companies holding cash",
        ],
        correctIndex: 0,
        explanation:
          "The reserve that looked like a wasted opportunity in good times became exactly what let the company avoid being forced into bad decisions when revenue fell.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "cash-money-market-instruments",
    title: "Money Market Instruments",
    summary:
      "The actual instruments — Treasury bills, commercial paper, CDs, and money market funds — that let cash earn a modest return while staying safe and liquid.",
    body: [
      { type: "heading", text: "Treasury Bills" },
      {
        type: "paragraph",
        text: "Treasury bills (T-bills) are short-term government debt, maturing anywhere from a few days to a year, sold at a discount to face value rather than paying a stated coupon — the return is simply the gap between what an investor pays and the face value received at maturity. Backed by the government, they're treated as essentially risk-free.",
      },
      { type: "heading", text: "Commercial Paper" },
      {
        type: "paragraph",
        text: "Commercial paper is short-term, unsecured debt issued directly by corporations to fund near-term needs like payroll or inventory, typically maturing in under 270 days. Because it relies on the issuing company's own creditworthiness rather than a government guarantee, it pays a higher yield than T-bills to compensate for that added risk.",
      },
      { type: "heading", text: "Certificates of Deposit" },
      {
        type: "paragraph",
        text: "A certificate of deposit (CD) is a time deposit at a bank: the depositor agrees to leave funds in place for a fixed term in exchange for a fixed interest rate, typically higher than a regular savings account, with a penalty for withdrawing early. In the U.S., CDs are FDIC-insured up to statutory limits, adding a further layer of safety.",
      },
      { type: "heading", text: "Money Market Funds" },
      {
        type: "paragraph",
        text: "A money market fund pools investor cash into a diversified basket of instruments like these, aiming to offer same-day liquidity and a stable share price (conventionally $1) while paying a modest yield. That stability isn't a guarantee, though — money market funds have occasionally \"broken the buck,\" falling below their target price during periods of severe market stress, a real risk worth knowing even though it's rare.",
      },
      { type: "heading", text: "In Practice" },
      {
        type: "paragraph",
        text: "A corporate treasurer managing several months of operating cash rarely leaves it all in a checking account or puts it all in a single instrument. Instead, they typically ladder it across T-bills and CDs with staggered maturities, so something is always coming due to meet upcoming obligations, while the rest keeps earning a bit more yield than sitting idle.",
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "How does a Treasury bill generate its return for an investor?",
        choices: [
          "It's sold at a discount to face value, and the return is the gap between the purchase price and face value at maturity",
          "It pays a large coupon every month",
          "Its price is guaranteed to double at maturity",
          "It pays no return of any kind",
        ],
        correctIndex: 0,
        explanation:
          "T-bills don't pay a stated coupon — the discount-to-face-value structure is itself how the return is earned.",
      },
      {
        id: "q2",
        prompt: "Why does commercial paper typically yield more than a Treasury bill of similar maturity?",
        choices: [
          "It relies on the issuing corporation's own credit rather than a government guarantee, so it carries more risk",
          "Commercial paper always matures in over 10 years",
          "Commercial paper is risk-free, just like a T-bill",
          "Yield has nothing to do with credit risk for short-term instruments",
        ],
        correctIndex: 0,
        explanation:
          "Since commercial paper is unsecured corporate debt rather than a government obligation, investors demand extra yield to compensate for that added credit risk.",
      },
      {
        id: "q3",
        prompt: "What happens if a CD holder withdraws their funds before the term ends?",
        choices: [
          "They typically face an early-withdrawal penalty",
          "There is never any penalty for early withdrawal",
          "The bank is required to double their interest rate",
          "CDs cannot be opened with a fixed term",
        ],
        correctIndex: 0,
        explanation:
          "A CD's higher rate is offered in exchange for committing funds for the stated term — withdrawing early typically triggers a penalty that claws back some of that benefit.",
      },
      {
        id: "q4",
        prompt: "What does it mean for a money market fund to \"break the buck\"?",
        choices: [
          "Its share price falls below its conventional $1 target during a period of severe market stress",
          "It pays out more than $1 per share to every investor",
          "It converts entirely into Treasury bills",
          "It is a routine, daily event for every money market fund",
        ],
        correctIndex: 0,
        explanation:
          "Money market funds aim for share-price stability, but that stability isn't guaranteed — a fund's value can occasionally slip below its target during severe stress.",
      },
      {
        id: "q5",
        prompt: "Why might a corporate treasurer ladder T-bills and CDs across staggered maturities rather than pick one instrument?",
        choices: [
          "So something is always maturing to meet upcoming obligations while the rest keeps earning yield",
          "Laddering is required by law for all corporate cash",
          "It guarantees a higher return than any single instrument",
          "There is no benefit to staggering maturities",
        ],
        correctIndex: 0,
        explanation:
          "Laddering balances liquidity and yield: near-term needs are covered as instruments mature on schedule, while the rest of the cash isn't sitting completely idle.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "cash-collateralized-lending",
    title: "Collateralized Borrowing and Lending",
    summary:
      "Why lenders often demand collateral for short-term loans, and how posting it lets a borrower access cash more cheaply than an unsecured loan would allow.",
    body: [
      { type: "heading", text: "Why Collateral Changes the Deal" },
      {
        type: "paragraph",
        text: "An unsecured loan relies entirely on the lender's trust that the borrower will repay. Collateral changes that calculus: it gives the lender a specific asset to claim if the borrower defaults, which lowers the lender's risk and, in turn, the interest rate a borrower has to pay for that same loan.",
      },
      { type: "heading", text: "Haircuts and Margin" },
      {
        type: "paragraph",
        text: "A lender typically advances less cash than the collateral's current market value — the gap is called a haircut. That buffer protects the lender if the collateral's value falls before it can be sold following a default, so the sale proceeds still cover what's owed.",
      },
      { type: "heading", text: "Common Forms of Collateral" },
      {
        type: "paragraph",
        text: "Collateral takes many forms depending on the loan: real estate secures a mortgage, securities secure a repo or a margin loan, and inventory or receivables secure asset-based business lending. In each case, the lender's fallback claim is on that specific, identifiable asset rather than the borrower's general promise to pay.",
      },
      { type: "heading", text: "Short-Term Collateralized Lending in Practice" },
      {
        type: "paragraph",
        text: "This same pattern — cash lent against securities as collateral, at a low rate because the loan is fully secured — underlies the repurchase agreement (repo) market covered later in this module: a way for holders of safe securities to borrow cash cheaply overnight, and for cash-rich lenders to earn a safe return the whole time backed by that collateral.",
      },
      { type: "heading", text: "In Practice" },
      {
        type: "paragraph",
        text: "Compare a pawn loan secured by a piece of jewelry against an unsecured personal loan of the same size: the pawn loan can be issued in minutes with no credit check at all, because the lender's risk is capped by the jewelry's resale value rather than the borrower's promise to repay — collateral is doing all the work that a credit check would otherwise have to do.",
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "How does posting collateral typically affect the interest rate on a loan?",
        choices: [
          "It generally lowers the rate, since the lender's risk is reduced by having a specific asset to claim on default",
          "It always raises the rate",
          "Collateral has no effect on the interest rate charged",
          "Collateral eliminates the need for any interest at all",
        ],
        correctIndex: 0,
        explanation:
          "Because the lender has a fallback claim on the collateral, their risk (and the rate they need to charge to compensate for it) is lower than on an equivalent unsecured loan.",
      },
      {
        id: "q2",
        prompt: "What is a \"haircut\" in the context of collateralized lending?",
        choices: [
          "Lending less cash than the collateral's current market value, as a buffer against its price falling",
          "A fee charged only on unsecured loans",
          "The interest rate charged on the loan",
          "A penalty for repaying a loan early",
        ],
        correctIndex: 0,
        explanation:
          "The haircut protects the lender: if the collateral has to be sold after a default, the gap between what was lent and the collateral's value gives room for its price to have fallen.",
      },
      {
        id: "q3",
        prompt: "Which of these is an example of collateral securing a loan?",
        choices: [
          "Real estate securing a mortgage",
          "A borrower's verbal promise with no underlying asset",
          "The lender's own unrelated assets",
          "Collateral is never used to secure any type of loan",
        ],
        correctIndex: 0,
        explanation:
          "A mortgage is a classic collateralized loan — the property itself is the lender's fallback claim if the borrower fails to repay.",
      },
      {
        id: "q4",
        prompt: "What short-term market does this lesson say the collateralized-lending pattern underlies?",
        choices: [
          "The repurchase agreement (repo) market",
          "The stock market generally",
          "The market for uninsured deposits only",
          "Collateralized lending has no connection to any other market",
        ],
        correctIndex: 0,
        explanation:
          "Repo is essentially short-term, collateralized cash lending against securities — the same underlying logic covered in this lesson, applied at large scale.",
      },
      {
        id: "q5",
        prompt: "Why can a pawn loan be issued without a credit check, according to this lesson's example?",
        choices: [
          "The lender's risk is capped by the collateral's resale value rather than the borrower's promise to repay",
          "Pawn loans are always government-guaranteed",
          "Pawnbrokers are legally forbidden from checking credit",
          "Credit checks are unnecessary for every type of loan",
        ],
        correctIndex: 0,
        explanation:
          "Because the item itself secures the loan, the pawnbroker doesn't need to evaluate the borrower's creditworthiness the way an unsecured lender would.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "cash-financial-regulation",
    title: "Cash Businesses and Financial Regulation",
    summary:
      "Why cash-intensive businesses and cash-based lending attract outsized regulatory scrutiny, and the core rules — anti-money-laundering law and usury caps — built to police them.",
    body: [
      { type: "heading", text: "Why Cash Is Hard to Track" },
      {
        type: "paragraph",
        text: "Unlike a bank transfer or card payment, cash changing hands leaves no automatic digital record. That's exactly what makes it useful for entirely legitimate reasons — privacy, no processing fees, no dependence on a bank account — and also what makes it attractive for concealing illicit activity.",
      },
      { type: "heading", text: "Anti-Money-Laundering Rules" },
      {
        type: "paragraph",
        text: "Banks and cash-intensive businesses operate under legal obligations to verify who their customers actually are (know-your-customer, or KYC) and to report large or suspicious cash activity to regulators. In the U.S., for example, the Bank Secrecy Act requires reporting cash transactions over $10,000 and filing a Suspicious Activity Report when a pattern looks designed to evade that threshold or otherwise conceal the money's origin.",
      },
      { type: "heading", text: "Usury Laws" },
      {
        type: "paragraph",
        text: "Usury laws cap the interest rate a lender may legally charge, meant to protect borrowers from exploitative lending terms. A loan priced above the legal cap is usurious, and depending on the jurisdiction, can expose the lender to civil penalties or criminal charges rather than just an unenforceable contract.",
      },
      { type: "heading", text: "Why This Sets Up the Rest of This Module" },
      {
        type: "paragraph",
        text: "The Strategies module ahead covers several real cash-based practices drawn directly from this course's source material — some entirely legitimate and heavily regulated (repo, liquidity management, pawnbroking) and some illegal precisely because they violate the rules covered here (money laundering, loan sharking). Understanding this regulatory backdrop first is what makes the difference between them clear.",
      },
      { type: "heading", text: "In Practice" },
      {
        type: "paragraph",
        text: "A small, legitimately cash-heavy business like a laundromat or car wash has to keep meticulous records and file currency transaction reports for large cash deposits, not because the owner is suspected of anything, but because that same cash-intensive profile is exactly what a money launderer would look for to blend illicit funds in with real revenue — the compliance burden exists to make that blending harder to pull off undetected.",
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Why is cash particularly attractive for concealing illicit financial activity?",
        choices: [
          "It leaves no automatic digital record when it changes hands, unlike a bank transfer or card payment",
          "Cash transactions are always illegal",
          "Banks refuse to accept any cash deposits",
          "Cash cannot be used for any legitimate purpose",
        ],
        correctIndex: 0,
        explanation:
          "The same lack of an automatic paper trail that makes cash convenient and private for legitimate uses is what also makes it useful for concealing where money actually came from.",
      },
      {
        id: "q2",
        prompt: "What does \"know-your-customer\" (KYC) require of banks and cash-intensive businesses?",
        choices: [
          "Verifying who their customers actually are as part of anti-money-laundering compliance",
          "Refusing to serve any customer who pays in cash",
          "Publishing every customer's transaction history publicly",
          "KYC applies only to businesses outside the United States",
        ],
        correctIndex: 0,
        explanation:
          "KYC is a core anti-money-laundering obligation: institutions must verify customer identity, which makes it harder to move illicit funds through the system anonymously.",
      },
      {
        id: "q3",
        prompt: "What is a usury law designed to prevent?",
        choices: [
          "Lenders charging interest rates above a legal cap, protecting borrowers from exploitative terms",
          "Any lender from ever charging interest",
          "Borrowers from ever repaying a loan early",
          "Banks from accepting cash deposits",
        ],
        correctIndex: 0,
        explanation:
          "Usury caps set a legal ceiling on interest rates specifically to prevent predatory lending terms that take advantage of borrowers.",
      },
      {
        id: "q4",
        prompt: "Per this lesson, how do the Cash Strategies module's five topics relate to the rules covered here?",
        choices: [
          "Some are legitimate, regulated practices, while others are illegal precisely because they violate these rules",
          "All five topics are equally illegal",
          "These rules have no connection to any of the module's strategies",
          "All five topics are entirely unregulated activities",
        ],
        correctIndex: 0,
        explanation:
          "Repo, liquidity management, and pawnbroking operate within this regulatory framework; money laundering and loan sharking are illegal specifically because they violate it.",
      },
      {
        id: "q5",
        prompt: "Why does a legitimately cash-heavy small business have to file currency transaction reports?",
        choices: [
          "Because its cash-intensive profile is exactly the kind a money launderer would try to exploit, so the reporting requirement makes that harder to do undetected",
          "Because all small businesses are assumed to be committing a crime",
          "Reporting requirements only apply to businesses that accept no cash",
          "There is no legitimate reason for this requirement",
        ],
        correctIndex: 0,
        explanation:
          "The compliance burden isn't a presumption of guilt — it exists because a genuine cash business looks identical, on the surface, to one being used to launder money, so the reporting requirement applies broadly.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "cash-money-laundering",
    title: "Money Laundering – the Dark Side of Cash",
    summary:
      "How illicit cash gets disguised as legitimate income through placement, layering, and integration — and the regulatory system built to detect it. Covered here strictly as background on how it's identified and prosecuted, not as guidance on how to do it.",
    body: [
      { type: "heading", text: "The Three-Stage Model" },
      {
        type: "paragraph",
        text: "Money laundering is classically described in three stages. Placement introduces illicit cash into the financial system — for example, depositing it or mixing it into a cash-heavy business's reported revenue. Layering moves those funds through multiple transactions, accounts, or jurisdictions to obscure where they originally came from. Integration is the final step, where the now clean-looking funds re-enter the economy as if they were legitimately earned all along.",
      },
      { type: "heading", text: "Why Cash-Intensive Businesses Are a Target" },
      {
        type: "paragraph",
        text: "Businesses that legitimately handle large cash volumes — restaurants, car washes, casinos — can be used during placement to disguise illicit cash as ordinary revenue, since a cash business's true daily takings are inherently hard to independently verify. That vulnerability is exactly why regulators apply extra scrutiny to cash-intensive businesses, as covered in the previous lesson.",
      },
      { type: "heading", text: "Detection: What Regulators and Banks Look For" },
      {
        type: "paragraph",
        text: "Common red flags include structuring — deliberately breaking a large sum into smaller deposits to stay under a reporting threshold — along with transaction patterns inconsistent with a customer's stated business, unexplained transfers through multiple accounts, and sudden, unexplained changes in cash-handling behavior. Financial institutions are legally required to monitor for exactly these patterns and file a Suspicious Activity Report when they appear.",
      },
      { type: "heading", text: "The Legal and Financial Consequences" },
      {
        type: "paragraph",
        text: "Money laundering is a serious felony in most jurisdictions, carrying substantial fines and imprisonment for individuals. Financial institutions that fail to detect and report it face their own severe consequences — regulatory fines that have run into the billions of dollars for major banks found to have inadequate anti-money-laundering controls.",
      },
      { type: "heading", text: "In Practice" },
      {
        type: "paragraph",
        text: "A bank's anti-money-laundering compliance team uses automated monitoring software to flag accounts showing structuring-like patterns — say, repeated cash deposits just under the $10,000 reporting threshold — and then has an investigator review the account's overall activity before deciding whether it rises to the level of a Suspicious Activity Report. This detection process, not any operational description of laundering itself, is the actual focus of anti-money-laundering work.",
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What are the three classic stages of money laundering?",
        choices: [
          "Placement, layering, and integration",
          "Deposit, withdrawal, and transfer",
          "Borrowing, lending, and repayment",
          "Money laundering has no defined stages",
        ],
        correctIndex: 0,
        explanation:
          "Placement introduces illicit funds into the system, layering obscures their origin through multiple transactions, and integration reintroduces them as apparently legitimate.",
      },
      {
        id: "q2",
        prompt: "Why are cash-intensive businesses particularly vulnerable to being used for placement?",
        choices: [
          "Their true cash revenue is inherently hard to independently verify, making it easier to mix in illicit funds",
          "Cash-intensive businesses are exempt from all financial regulation",
          "They are legally required to accept unverified cash",
          "Placement only ever happens through bank wire transfers, never cash businesses",
        ],
        correctIndex: 0,
        explanation:
          "Because outside observers can't easily verify a cash business's actual daily revenue, illicit cash can be blended in with legitimate takings during the placement stage.",
      },
      {
        id: "q3",
        prompt: "What is \"structuring,\" as a red flag institutions monitor for?",
        choices: [
          "Deliberately breaking a large sum into smaller deposits to stay under a reporting threshold",
          "A bank's standard process for opening a new account",
          "A legal requirement for reporting all cash transactions",
          "A synonym for layering that means the same thing",
        ],
        correctIndex: 0,
        explanation:
          "Structuring is a specific evasion tactic — splitting deposits to avoid triggering the reporting requirement covered in the previous lesson — and is itself a red flag institutions are required to watch for.",
      },
      {
        id: "q4",
        prompt: "What must a financial institution do when it detects a pattern like structuring?",
        choices: [
          "File a Suspicious Activity Report as required by anti-money-laundering law",
          "Ignore it unless the customer confesses",
          "Immediately close every account at the institution",
          "There is no reporting obligation once a red flag is detected",
        ],
        correctIndex: 0,
        explanation:
          "Institutions are legally obligated to report suspicious patterns like structuring, which is the actual mechanism that connects detection to law enforcement action.",
      },
      {
        id: "q5",
        prompt: "What consequences can financial institutions face for inadequate anti-money-laundering controls?",
        choices: [
          "Severe regulatory fines, which have reached billions of dollars for major banks",
          "No consequences, since only individuals can be penalized",
          "A small administrative fee with no further penalty",
          "Automatic dissolution of the institution in every case",
        ],
        correctIndex: 0,
        explanation:
          "Regulators have levied enormous fines against banks found to have systemically inadequate controls, reflecting how seriously anti-money-laundering compliance is enforced.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "cash-liquidity-management",
    title: "Liquidity Management",
    summary:
      "How companies and portfolios decide how much cash to hold and where, balancing the certainty of meeting near-term obligations against the cost of holding low-yielding cash.",
    body: [
      { type: "heading", text: "The Core Liquidity Problem" },
      {
        type: "paragraph",
        text: "A company or portfolio needs enough readily available cash on hand to meet near-term obligations — payroll, debt payments, fund redemptions — without being forced to sell other assets at a bad price just because the timing happened to be inconvenient." },
      { type: "heading", text: "Cash Forecasting" },
      {
        type: "paragraph",
        text: "Good liquidity management starts with forecasting: projecting expected cash inflows and outflows over a coming horizon, often week by week, to estimate the minimum cash buffer actually needed rather than guessing at a round number." },
      { type: "heading", text: "Laddering and Sweep Accounts" },
      {
        type: "paragraph",
        text: "Two common techniques keep idle cash working without sacrificing access to it: laddering staggers the maturities of short-term instruments (like the T-bills and CDs covered earlier in this module) so something is always coming due, while a sweep account automatically moves cash above a set threshold into an interest-bearing instrument overnight and sweeps it back the next morning." },
      { type: "heading", text: "The Cost of Getting It Wrong" },
      {
        type: "paragraph",
        text: "Too little liquidity risks a forced, poorly timed asset sale or an outright default on an obligation during a period of stress; too much liquidity is a steady drag on returns, since idle cash earns little relative to almost anything else. Effective liquidity management is about optimizing that tradeoff, not eliminating cash holdings altogether." },
      { type: "heading", text: "In Practice" },
      {
        type: "paragraph",
        text: "A company's treasury team builds a rolling 13-week cash-flow forecast, updated weekly, to see exactly how much cash is truly needed to cover the next quarter's obligations. Whatever sits comfortably above that forecasted need gets swept into short-term instruments overnight or laddered into slightly longer maturities — cash that would otherwise have earned nothing sitting in an operating account." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What is the core problem liquidity management addresses?",
        choices: [
          "Holding enough readily available cash to meet near-term obligations without a forced, poorly timed sale of other assets",
          "Maximizing the total return of a portfolio regardless of cash needs",
          "Eliminating all cash holdings from a portfolio",
          "Liquidity management has no connection to meeting obligations",
        ],
        correctIndex: 0,
        explanation:
          "The core tension is having cash available exactly when it's needed, so obligations don't force an untimely sale of other assets.",
      },
      {
        id: "q2",
        prompt: "What does cash forecasting help a company determine?",
        choices: [
          "The minimum cash buffer actually needed, based on projected inflows and outflows over a coming horizon",
          "The company's stock price over the next year",
          "A fixed cash target that never needs to be updated",
          "Cash forecasting is unrelated to liquidity management",
        ],
        correctIndex: 0,
        explanation:
          "Forecasting expected cash flows lets a company estimate a real, needs-based buffer instead of guessing at an arbitrary cash target.",
      },
      {
        id: "q3",
        prompt: "What does a sweep account do?",
        choices: [
          "Automatically moves cash above a threshold into an interest-bearing instrument overnight and back the next morning",
          "Permanently locks cash away for five years",
          "Converts all cash holdings into stock",
          "Sweep accounts eliminate the need for any cash forecasting",
        ],
        correctIndex: 0,
        explanation:
          "A sweep account puts idle cash to work overnight without sacrificing next-day access, capturing yield that would otherwise be lost.",
      },
      {
        id: "q4",
        prompt: "What is the risk of holding too little liquidity?",
        choices: [
          "Being forced into a poorly timed asset sale, or an outright default, during a period of stress",
          "Earning too much interest income",
          "There is no risk to holding too little liquidity",
          "Being unable to ever spend any cash at all",
        ],
        correctIndex: 0,
        explanation:
          "Insufficient liquidity is exactly what forces bad timing decisions — selling assets or missing payments — when obligations come due unexpectedly.",
      },
      {
        id: "q5",
        prompt: "According to this lesson, what is effective liquidity management actually optimizing?",
        choices: [
          "The tradeoff between the cost of holding too much idle cash and the risk of holding too little",
          "Eliminating cash holdings entirely to maximize returns",
          "Holding the maximum possible amount of cash at all times",
          "There is no tradeoff involved in liquidity management",
        ],
        correctIndex: 0,
        explanation:
          "Neither extreme is efficient — the goal is a right-sized cash buffer that covers real needs without unnecessarily sacrificing return.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "cash-repo",
    title: "Repurchase Agreement (REPO)",
    summary:
      "A short-term, collateralized loan structured as a sale-and-repurchase of securities — the plumbing that lets cash-rich lenders and security-rich borrowers each get exactly what they need overnight.",
    body: [
      { type: "heading", text: "The Basic Structure" },
      {
        type: "paragraph",
        text: "In a repurchase agreement (repo), one party sells securities, often Treasuries, to another party for cash, with a simultaneous agreement to buy those same securities back at a slightly higher price on a set future date, often the very next day. Economically it's a collateralized loan; legally it's structured as two separate sales." },
      { type: "heading", text: "Who's on Each Side" },
      {
        type: "paragraph",
        text: "The party selling securities and receiving cash needs short-term funding — that side of the trade is doing a \"repo,\" borrowing. The party buying securities and providing cash is investing cash safely overnight in exchange for the repo rate — that side is doing a \"reverse repo,\" lending." },
      { type: "heading", text: "The Repo Rate and Haircuts" },
      {
        type: "paragraph",
        text: "The implicit interest rate on a repo, the repo rate, is generally very low, since the loan is fully collateralized by high-quality securities. As with the collateralized lending covered earlier in this module, a haircut is also typically applied — the cash advanced is a bit less than the collateral's market value, adding a further buffer for the lender." },
      { type: "heading", text: "Why the Repo Market Matters" },
      {
        type: "paragraph",
        text: "Repo is one of the largest, most important short-term funding markets in the financial system: securities dealers routinely finance their inventory this way rather than tying up their own capital, and central banks, including the Federal Reserve, use repo and reverse repo operations as a direct tool to manage short-term interest rates and liquidity in the broader financial system." },
      { type: "heading", text: "In Practice" },
      {
        type: "paragraph",
        text: "A bond dealer holding a large Treasury inventory overnight doesn't want that capital tied up, so it repos the securities out for cash to fund its position, agreeing to buy them back the next morning at a marginally higher price. On the other side, a money market fund with idle cash parks it in a reverse repo overnight, earning a safe, near-riskless return backed by the same Treasuries — each side getting exactly what it needed for one night." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "How is a repurchase agreement structured?",
        choices: [
          "One party sells securities for cash with a simultaneous agreement to repurchase them later at a slightly higher price",
          "It's an unsecured loan with no underlying securities involved",
          "It's a permanent sale of securities with no repurchase agreement",
          "It's a type of stock option contract",
        ],
        correctIndex: 0,
        explanation:
          "A repo is economically a collateralized loan, structured legally as a sale of securities paired with a commitment to buy them back at a set future price and date.",
      },
      {
        id: "q2",
        prompt: "What is the difference between a \"repo\" and a \"reverse repo\"?",
        choices: [
          "Repo is the borrowing side (selling securities for cash); reverse repo is the lending side (buying securities, providing cash)",
          "They are two unrelated, entirely different transactions",
          "Reverse repo always involves stocks instead of securities",
          "There is no meaningful difference between the two terms",
        ],
        correctIndex: 0,
        explanation:
          "The same transaction looks like a repo from the cash-borrower's side and a reverse repo from the cash-lender's side — it's a matter of perspective on one trade.",
      },
      {
        id: "q3",
        prompt: "Why is the repo rate generally very low?",
        choices: [
          "Because the loan is fully collateralized by high-quality securities, minimizing the lender's risk",
          "Because repo transactions are guaranteed to lose money",
          "Because repo loans have no collateral backing them at all",
          "Repo rates are always higher than unsecured lending rates",
        ],
        correctIndex: 0,
        explanation:
          "Full collateralization by high-quality securities like Treasuries is exactly what keeps repo's implicit interest rate so low compared to unsecured borrowing.",
      },
      {
        id: "q4",
        prompt: "How do central banks use the repo market, according to this lesson?",
        choices: [
          "As a direct tool to manage short-term interest rates and liquidity in the financial system",
          "Central banks are legally forbidden from participating in repo",
          "Only to fund their own long-term securities purchases",
          "Repo has no connection to monetary policy",
        ],
        correctIndex: 0,
        explanation:
          "Central banks, including the Federal Reserve, actively use repo and reverse repo operations as a lever for managing short-term rates and system-wide liquidity.",
      },
      {
        id: "q5",
        prompt: "In the example, why does a bond dealer repo out its Treasury inventory overnight?",
        choices: [
          "To fund its position with borrowed cash instead of tying up its own capital",
          "Because it is required by law to sell its entire inventory nightly",
          "To permanently exit its Treasury position",
          "Repo has no funding benefit for a securities dealer",
        ],
        correctIndex: 0,
        explanation:
          "Repo lets the dealer keep the securities economically (via the repurchase agreement) while freeing up cash, rather than funding the position entirely out of its own capital.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "cash-pawnbroking",
    title: "Pawnbroking",
    summary:
      "The oldest form of collateralized lending — a small, short-term loan secured by a personal item the borrower hands over until it's repaid, with no credit check required.",
    body: [
      { type: "heading", text: "How a Pawn Loan Works" },
      {
        type: "paragraph",
        text: "A borrower brings a valuable item, jewelry, electronics, or tools, into a pawnshop. The pawnbroker appraises it and offers a loan for a fraction of its estimated resale value, holding the item as collateral until the loan, plus interest and fees, is repaid within an agreed redemption period." },
      { type: "heading", text: "No Credit Check, No Recourse" },
      {
        type: "paragraph",
        text: "Because the loan is fully secured by the item itself, the pawnbroker doesn't need to evaluate the borrower's income or credit history at all. If the borrower doesn't repay, the pawnbroker simply keeps and resells the item — there's no debt collection process and no impact on the borrower's credit score either way." },
      { type: "heading", text: "Why the Interest Rate Is High" },
      {
        type: "paragraph",
        text: "Pawn loan rates, typically regulated and expressed as a monthly rate under state-specific pawn laws in the U.S., run considerably higher than a bank loan. That reflects the small loan size, short duration, appraisal and storage costs, and the risk that a forfeited item's eventual resale value won't fully cover the loan." },
      { type: "heading", text: "Who Uses Pawn Loans, and Why" },
      {
        type: "paragraph",
        text: "Pawnbroking mainly serves borrowers without easy access to traditional credit — no bank account, thin or damaged credit history — who need a small amount of cash quickly. It's a legitimate, closely licensed lending channel that fills a real gap left by mainstream banking, distinct from the illegal lending covered next." },
      { type: "heading", text: "In Practice" },
      {
        type: "paragraph",
        text: "A borrower brings in a watch appraised at $500 and receives a $150 loan, roughly a 30% loan-to-value ratio typical of pawn lending, with 90 days to repay plus interest and reclaim the watch. If they don't return within that window, the pawnbroker keeps the watch and resells it — the transaction is fully settled either way, with no further claim on the borrower." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What secures a pawn loan?",
        choices: [
          "A personal item the borrower hands over, held by the pawnbroker until the loan is repaid",
          "The borrower's credit score",
          "A co-signer's guarantee",
          "Pawn loans require no collateral of any kind",
        ],
        correctIndex: 0,
        explanation:
          "The item itself is the collateral — held by the pawnbroker for the redemption period and forfeited if the loan isn't repaid.",
      },
      {
        id: "q2",
        prompt: "Why doesn't a pawnbroker need to check a borrower's credit history?",
        choices: [
          "The loan is fully secured by the item itself, capping the pawnbroker's risk regardless of the borrower's creditworthiness",
          "Pawnbrokers are legally forbidden from checking credit",
          "All pawnshop customers are pre-screened by banks",
          "Pawn loans are always government-guaranteed",
        ],
        correctIndex: 0,
        explanation:
          "Since the collateral itself covers the pawnbroker's downside, there's no need to evaluate the borrower's ability or willingness to repay the way an unsecured lender would.",
      },
      {
        id: "q3",
        prompt: "What happens if a pawn loan isn't repaid within the redemption period?",
        choices: [
          "The pawnbroker keeps and resells the item, and the matter is fully settled",
          "The borrower is sent to debt collection",
          "The borrower's credit score is permanently damaged",
          "The loan automatically renews forever at no cost",
        ],
        correctIndex: 0,
        explanation:
          "Forfeiture of the collateral is the pawnbroker's full recourse — there's no further debt collection process or credit consequence for the borrower.",
      },
      {
        id: "q4",
        prompt: "Why do pawn loan interest rates run higher than a typical bank loan?",
        choices: [
          "Small loan size, short duration, appraisal and storage costs, and the risk resale value won't fully cover the loan",
          "Pawnshops are required to charge the maximum rate allowed nationwide",
          "Pawn loans always have lower rates than bank loans",
          "There is no cost basis for the higher rate — it's arbitrary",
        ],
        correctIndex: 0,
        explanation:
          "The higher rate reflects real costs and risks specific to small, short-term, appraisal-dependent lending, not an arbitrary markup.",
      },
      {
        id: "q5",
        prompt: "Who primarily uses pawn loans, according to this lesson?",
        choices: [
          "Borrowers without easy access to traditional credit who need a small amount of cash quickly",
          "Only borrowers with excellent credit scores",
          "Large corporations financing inventory purchases",
          "Pawn loans are exclusively used by licensed banks",
        ],
        correctIndex: 0,
        explanation:
          "Pawnbroking fills a gap for borrowers underserved by mainstream banking, offering fast, no-credit-check access to small amounts of cash.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "cash-loan-sharking",
    title: "Loan Sharking",
    summary:
      "Illegal, unlicensed lending at extortionate interest rates, enforced outside the legal system. Covered here for the credit gap that gave rise to it, why it's illegal everywhere, and the regulated alternatives that exist in its place — not as any kind of guidance.",
    body: [
      { type: "heading", text: "What Makes a Loan \"Shark\" Lending" },
      {
        type: "paragraph",
        text: "Loan sharking means lending money at interest rates far above the legal usury cap covered earlier in this module, from an unlicensed lender operating entirely outside the regulated financial system — historically often associated with organized crime." },
      { type: "heading", text: "Why It Exists: The Credit Gap" },
      {
        type: "paragraph",
        text: "Loan sharks fill demand from borrowers who can't access credit through legal channels: no bank account, poor or no credit history, an urgent need for cash, or participation in a cash economy outside formal banking. It's the same underserved-borrower gap that legitimate channels like pawnbroking, covered in the previous lesson, or microfinance try to fill through legal means." },
      { type: "heading", text: "Enforcement Outside the Law" },
      {
        type: "paragraph",
        text: "Because a usurious loan-shark debt isn't legally enforceable — courts won't uphold a contract that violates usury law — collection historically relies on intimidation or violence rather than the legal process an ordinary lender would use. That reliance on extralegal enforcement is precisely what makes the practice dangerous to borrowers and a priority for law enforcement." },
      { type: "heading", text: "Why Usury Laws Exist, and Legal Alternatives" },
      {
        type: "paragraph",
        text: "Usury caps exist specifically to prevent this kind of exploitative lending. Regulated alternatives — credit unions, community development financial institutions, and closely supervised small-dollar and payday-lending rules — exist to serve the same underserved borrowers through legal, enforceable, and comparatively far less predatory terms." },
      { type: "heading", text: "In Practice" },
      {
        type: "paragraph",
        text: "Consider two borrowers who each need $500 quickly. One gets a small-dollar loan from a credit union, with a capped annual rate, clear disclosed terms, and legal recourse if either side breaches the agreement. The other borrows the same amount from an unlicensed lender at a rate that compounds far beyond any legal cap, with no written contract and no protection if the terms are changed unilaterally — the entire purpose of usury law and its regulated alternatives is making the first path available so the second is never the only option." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What defines loan sharking, as opposed to a regulated high-rate loan?",
        choices: [
          "Lending at rates far above the legal usury cap by an unlicensed lender outside the regulated financial system",
          "Any loan with an interest rate above 5%",
          "Any loan made in cash rather than by bank transfer",
          "Loan sharking is simply another term for pawnbroking",
        ],
        correctIndex: 0,
        explanation:
          "The defining features are the illegal rate and the unlicensed, unregulated status of the lender — not merely that a loan happens to carry a high rate.",
      },
      {
        id: "q2",
        prompt: "What gap in the credit market does loan sharking historically exploit?",
        choices: [
          "Demand from borrowers who can't access credit through legal channels, due to no bank account, poor credit, or urgent cash needs",
          "Demand from borrowers with excellent access to bank credit",
          "There is no real credit gap involved in loan sharking",
          "Loan sharking exclusively serves large corporations",
        ],
        correctIndex: 0,
        explanation:
          "Loan sharks target the same underserved borrowers that legal alternatives like pawnbroking and microfinance also try to serve, just without any legal protections.",
      },
      {
        id: "q3",
        prompt: "Why does loan-shark debt collection historically rely on intimidation rather than legal process?",
        choices: [
          "A usurious loan isn't legally enforceable, so courts won't uphold the contract",
          "Courts always side with loan sharks in disputes",
          "Legal process is faster than intimidation, so lenders prefer intimidation anyway",
          "Loan-shark loans are treated identically to bank loans by the legal system",
        ],
        correctIndex: 0,
        explanation:
          "Because the underlying contract violates usury law, the lender has no court-enforceable claim, which is exactly why illegal enforcement methods historically took its place.",
      },
      {
        id: "q4",
        prompt: "What is the purpose of usury laws, per this lesson?",
        choices: [
          "To prevent exploitative lending by capping the interest rate a lender may legally charge",
          "To guarantee lenders a minimum profit on every loan",
          "To eliminate all forms of lending entirely",
          "Usury laws exist only to regulate stock markets",
        ],
        correctIndex: 0,
        explanation:
          "Usury caps exist specifically to protect borrowers from the kind of extortionate terms that define loan sharking.",
      },
      {
        id: "q5",
        prompt: "What regulated alternatives does this lesson point to as legal substitutes for loan-shark lending?",
        choices: [
          "Credit unions, community development financial institutions, and regulated small-dollar lending",
          "There are no legal alternatives to loan sharking",
          "Only large commercial banks with no small-loan options",
          "Pawnbroking is illegal and therefore not a real alternative",
        ],
        correctIndex: 0,
        explanation:
          "These regulated channels exist precisely to serve the same underserved borrowers loan sharks target, through legal, enforceable, and far less predatory terms.",
      },
    ],
  },
];
