import type { ConceptLesson } from "./types.js";

// Concept-lesson format, same reasoning as the other non-options courses —
// structured credit is portfolio-construction and relative-value reasoning
// about tranches, indices, and prepayment, not option-payoff structures, so
// prose + a knowledge-check quiz fits better than the options-specific
// params/payoff engine.
export const structuredAssetsConceptLessons: ConceptLesson[] = [
  {
    kind: "concept",
    slug: "structured-assets-what-is-a-structured-asset",
    title: "What Is a Structured Asset?",
    summary:
      "How securitization pools many individual loans or debts into a single structure, and repackages their combined cash flows into new securities.",
    body: [
      { type: "heading", text: "Pooling Many Assets Into One" },
      { type: "paragraph", text: "Securitization takes a large pool of individual loans or debts — mortgages, auto loans, corporate loans, credit card receivables — each too small or illiquid to trade on its own, and bundles them into a single legal entity, a special-purpose vehicle, that holds the pool and issues new securities backed by its combined cash flows." },
      { type: "heading", text: "From Loans to Tradable Securities" },
      { type: "paragraph", text: "That special-purpose vehicle issues securities whose payments come from the pool's aggregate interest and principal payments, converting a large number of illiquid, hard-to-analyze individual loans into standardized, tradable securities that investors can buy and sell much like ordinary bonds." },
      { type: "heading", text: "Why Structure the Cash Flows At All" },
      { type: "paragraph", text: "Rather than issuing one type of security representing an equal slice of the pool, most structured deals split the pool's cash flows into several different securities, each with its own risk-and-return profile. That splitting, not just the pooling itself, is the defining feature of a genuinely \"structured\" asset — in contrast to a plain pass-through, where every investor's claim on the pool is identical." },
      { type: "heading", text: "A Family of Structures" },
      { type: "paragraph", text: "Mortgage-backed securities, collateralized loan obligations, collateralized debt obligations, and other asset-backed securities all share this same basic pooling-and-repackaging idea. They mainly differ in what type of underlying debt gets pooled, and how elaborately the resulting cash flows are split among the securities issued against it." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does securitization fundamentally do?",
        choices: [
          "Pools many individual loans or debts into a legal entity that issues new securities backed by their combined cash flows",
          "Guarantees that no loan in the pool will ever default",
          "Converts a security back into a single individual loan",
          "Only applies to residential mortgages",
        ],
        correctIndex: 0,
        explanation:
          "Securitization bundles many individual, often illiquid loans into a pool held by a special-purpose vehicle, which then issues tradable securities backed by that pool's cash flows.",
      },
      {
        id: "q2",
        prompt: "What is a special-purpose vehicle's role in securitization?",
        choices: [
          "It holds the pooled loans and issues new securities backed by their cash flows",
          "It originates the individual loans directly to borrowers",
          "It sets national interest rate policy",
          "It has no role in the structure",
        ],
        correctIndex: 0,
        explanation:
          "The special-purpose vehicle is the legal entity that actually holds the pool and issues the securities investors buy — the mechanism that turns individual loans into tradable instruments.",
      },
      {
        id: "q3",
        prompt: "What makes a security genuinely \"structured,\" as opposed to a plain pass-through?",
        choices: [
          "A structured deal splits the pool's cash flows into multiple securities with different risk-and-return profiles, rather than giving every investor an identical claim",
          "A structured deal always pays a fixed, unchanging coupon",
          "A structured deal never involves any pooling of assets",
          "There is no meaningful difference between the two",
        ],
        correctIndex: 0,
        explanation:
          "A plain pass-through gives every investor an equal, identical slice of the pool; a structured deal instead divides the cash flows into differentiated securities — that splitting is the defining feature.",
      },
      {
        id: "q4",
        prompt: "What do MBS, CLOs, CDOs, and other ABS have in common?",
        choices: [
          "They share the same basic pooling-and-repackaging idea, differing mainly in the type of underlying debt and how the cash flows are split",
          "They are all backed exclusively by residential mortgages",
          "They are all issued directly by national governments",
          "They share nothing in common structurally",
        ],
        correctIndex: 0,
        explanation:
          "All of these structures pool debt and repackage its cash flows into new securities — they differ in what's pooled (mortgages, loans, receivables) and how the resulting cash flows are divided.",
      },
      {
        id: "q5",
        prompt: "Why are individual loans typically pooled rather than sold to investors one at a time?",
        choices: [
          "Individual loans are usually too small and illiquid to trade efficiently on their own, so pooling creates a more standardized, tradable security",
          "Regulations require every loan to be pooled with at least a thousand others",
          "Pooling eliminates all risk from the underlying loans",
          "Individual loans cannot legally be sold at all",
        ],
        correctIndex: 0,
        explanation:
          "A single mortgage or auto loan is too small and idiosyncratic to trade efficiently — pooling many of them together, and standardizing the resulting securities, is what makes them tradable at scale.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "structured-assets-tranches-and-the-waterfall",
    title: "Tranches and the Waterfall",
    summary:
      "How a structured deal splits pooled cash flows into tranches of different risk and seniority, and the payment order — the waterfall — that decides who gets paid first.",
    body: [
      { type: "heading", text: "What a Tranche Is" },
      { type: "paragraph", text: "A tranche is one slice of a structured deal's overall capital structure, ranked against the other tranches by seniority. Every tranche is paid from the same underlying pool of cash flows, but each has a different level of exposure to losses if the pool's borrowers default." },
      { type: "heading", text: "The Payment Waterfall" },
      { type: "paragraph", text: "Incoming cash from the pool is distributed to tranches in a strict order of priority, called the waterfall. The most senior tranche is paid its interest, then principal, in full before anything trickles down to the next tranche in line — a junior tranche only receives its payment for a given period after every more senior tranche has already been paid in full." },
      { type: "heading", text: "Subordination: How Losses Are Absorbed" },
      { type: "paragraph", text: "That same waterfall runs in reverse when the pool suffers losses. The most junior tranche — often called the equity or first-loss tranche — absorbs the pool's first losses before any loss touches a more senior tranche. Each senior tranche is protected by a subordination cushion equal to the combined size of every junior tranche sitting beneath it." },
      { type: "heading", text: "Risk and Return Across the Stack" },
      { type: "paragraph", text: "Because the equity tranche is first in line to absorb losses, it demands, and receives, a much higher coupon than the senior tranche, which is designed to stay nearly untouched unless losses far exceed the cushion beneath it. Mezzanine tranches sit in between on both dimensions — more risk and more yield than senior, less than equity." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What is a tranche?",
        choices: [
          "A separate pool of loans with no connection to other tranches",
          "One slice of a structured deal's capital structure, ranked by seniority, sharing the same underlying pool as other tranches",
          "A type of individual mortgage loan",
          "A government guarantee attached to a security",
        ],
        correctIndex: 1,
        explanation:
          "All tranches in a deal are paid from the same pool of underlying cash flows — what differs between them is their seniority ranking and resulting exposure to losses.",
      },
      {
        id: "q2",
        prompt: "How does the payment waterfall work?",
        choices: [
          "All tranches are paid simultaneously and equally, regardless of seniority",
          "The most senior tranche is paid in full before any payment trickles down to a more junior tranche",
          "Junior tranches are always paid before senior tranches",
          "Payment order is chosen randomly each period",
        ],
        correctIndex: 1,
        explanation:
          "The waterfall pays tranches in strict seniority order — a junior tranche receives its payment for a period only after every more senior tranche has been paid in full.",
      },
      {
        id: "q3",
        prompt: "Which tranche absorbs a structured deal's first losses?",
        choices: [
          "The most senior tranche",
          "The most junior tranche, often called the equity or first-loss tranche",
          "All tranches absorb losses equally and simultaneously",
          "Losses are absorbed by the special-purpose vehicle's sponsor, never the tranches",
        ],
        correctIndex: 1,
        explanation:
          "The equity or first-loss tranche sits at the bottom of the structure and absorbs losses first, protecting every tranche senior to it.",
      },
      {
        id: "q4",
        prompt: "What does \"subordination\" mean for a senior tranche?",
        choices: [
          "The senior tranche has no protection from losses at all",
          "The senior tranche is protected by a cushion equal to the combined size of all junior tranches beneath it, which must be wiped out first",
          "Subordination means the senior tranche is paid last",
          "Subordination only applies to equity tranches",
        ],
        correctIndex: 1,
        explanation:
          "A senior tranche's subordination cushion is the total size of everything junior to it — losses have to burn through that entire cushion before the senior tranche is touched.",
      },
      {
        id: "q5",
        prompt: "Why does the equity tranche pay a much higher coupon than the senior tranche?",
        choices: [
          "It doesn't — all tranches pay identical coupons",
          "It bears the first losses from the pool, so it's compensated with a higher coupon for that greater risk",
          "The equity tranche is guaranteed by the government",
          "Coupon size has no relationship to a tranche's risk",
        ],
        correctIndex: 1,
        explanation:
          "Since the equity tranche is first to absorb losses and can be wiped out well before senior tranches are touched, it's compensated with a materially higher coupon to reflect that greater risk.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "structured-assets-credit-default-swaps-and-indices",
    title: "Credit Default Swaps and Credit Indices",
    summary:
      "How a CDS transfers credit risk without transferring the underlying bond or loan, and how a credit index bundles many single-name CDS into one tradable basket.",
    body: [
      { type: "heading", text: "What a Credit Default Swap Is" },
      { type: "paragraph", text: "A credit default swap (CDS) is a contract where the protection buyer pays a periodic premium, called a spread, to the protection seller, and in exchange the seller pays the buyer if a specified reference entity defaults or has some other defined credit event. It's economically similar to buying insurance against an issuer's default, without needing to own the underlying bond at all." },
      { type: "heading", text: "Buying and Selling Protection" },
      { type: "paragraph", text: "Buying CDS protection profits if the reference entity's credit worsens, meaning spreads widen, or it actually defaults. Selling protection is the opposite bet — collecting premium income in exchange for taking on default risk, similar in spirit to selling an option or writing an insurance policy." },
      { type: "heading", text: "What a Credit Index Is" },
      { type: "paragraph", text: "A credit index like CDX, for North American names, or iTraxx, for European names, is a standardized basket of single-name CDS on a fixed list of reference entities, often 125 companies. It lets a trader buy or sell protection on the whole basket in a single trade, instead of executing well over a hundred separate single-name CDS trades." },
      { type: "heading", text: "Index Tranches" },
      { type: "paragraph", text: "Beyond the plain index, tranches can also be written on the index itself — for example, a 0-3% equity tranche or a 3-7% mezzanine tranche of the index — absorbing losses only once the index's cumulative default losses fall within that specific tranche's range. This is directly analogous to CDO tranching, but built on a standardized index rather than a bespoke pool of loans." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does a credit default swap let its buyer do?",
        choices: [
          "Transfer credit risk on a reference entity without owning its underlying bond, in exchange for a periodic premium",
          "Directly lend money to the reference entity",
          "Guarantee that the reference entity will never default",
          "Automatically convert into an equity stake if the reference entity defaults",
        ],
        correctIndex: 0,
        explanation:
          "A CDS transfers credit exposure via a contract, not a bond purchase — the protection buyer pays a spread and is compensated if the reference entity defaults or has a credit event.",
      },
      {
        id: "q2",
        prompt: "What does selling CDS protection resemble economically?",
        choices: [
          "Buying insurance against default",
          "Writing an insurance policy or selling an option — collecting premium income in exchange for taking on default risk",
          "Guaranteeing a government bond",
          "Lending money at a fixed interest rate with no default risk",
        ],
        correctIndex: 1,
        explanation:
          "The protection seller collects a periodic premium and, in exchange, takes on the risk of paying out if a credit event occurs — the same risk/reward shape as writing insurance or selling an option.",
      },
      {
        id: "q3",
        prompt: "What is a credit index like CDX or iTraxx?",
        choices: [
          "A single company's stock price index",
          "A standardized basket of single-name CDS on a fixed list of reference entities, tradable in one transaction",
          "A government bond yield curve",
          "A measure of a single bond's credit rating",
        ],
        correctIndex: 1,
        explanation:
          "CDX and iTraxx bundle CDS on a fixed list of reference entities into one standardized, tradable basket, avoiding the need to trade each single-name CDS separately.",
      },
      {
        id: "q4",
        prompt: "What is an index tranche?",
        choices: [
          "A tranche written on a credit index itself, absorbing losses only within a specific range of the index's cumulative defaults",
          "A single-name CDS on one company",
          "A type of government bond",
          "The same thing as the plain, untranched index",
        ],
        correctIndex: 0,
        explanation:
          "An index tranche, like a 0-3% equity tranche of CDX, absorbs losses only once the index's cumulative default losses fall within that specific attachment-to-detachment range — structurally similar to a CDO tranche.",
      },
      {
        id: "q5",
        prompt: "Why might a trader use a credit index rather than trading many single-name CDS individually?",
        choices: [
          "A credit index provides diversified exposure to many reference entities in a single, standardized, more liquid trade",
          "Credit indices are always cheaper than every single-name CDS combined",
          "Single-name CDS cannot legally be traded",
          "Credit indices only exist for government bonds",
        ],
        correctIndex: 0,
        explanation:
          "Trading the index in one transaction is far more efficient than assembling the same basket of exposure through many separate, less liquid single-name CDS trades.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "structured-assets-mortgage-backed-securities",
    title: "Mortgage-Backed Securities and Prepayment Risk",
    summary:
      "How a pool of mortgages becomes a tradable security, and the unique risk that comes from homeowners being free to repay their mortgage early.",
    body: [
      { type: "heading", text: "What an MBS Is" },
      { type: "paragraph", text: "A mortgage-backed security (MBS) is backed by a pool of residential or commercial mortgages, where investors receive a pass-through share of the pool's combined interest and principal payments as homeowners make their monthly mortgage payments." },
      { type: "heading", text: "Pass-Throughs vs. Structured MBS" },
      { type: "paragraph", text: "The simplest MBS is a plain pass-through, where every investor receives a pro-rata share of the pool's cash flows. More complex, structured MBS split the pool's cash flows into multiple tranches, similar to a CDO, that prioritize principal or interest differently, or absorb prepayment risk differently across the structure." },
      { type: "heading", text: "Prepayment Risk" },
      { type: "paragraph", text: "Unlike a corporate bond, a mortgage borrower can pay off their loan early at any time, whether by refinancing, selling the home, or simply paying down the balance ahead of schedule. This option to prepay is the defining risk of MBS investing, since it returns an investor's principal early — often right when interest rates have fallen and reinvestment options have gotten worse." },
      { type: "heading", text: "What Drives Prepayment Speed" },
      { type: "paragraph", text: "The biggest driver of prepayment speed is the gap between a pool's existing mortgage rates and current market mortgage rates. When rates fall well below what homeowners in the pool are paying, refinancing accelerates and prepayments speed up; when rates rise, homeowners are less likely to move or refinance, and prepayments slow down." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What backs a mortgage-backed security?",
        choices: [
          "A single homeowner's mortgage",
          "A pool of residential or commercial mortgages, whose combined payments flow through to investors",
          "A government guarantee with no underlying mortgages",
          "A pool of unrelated corporate bonds",
        ],
        correctIndex: 1,
        explanation:
          "An MBS is backed by a pool of many mortgages, and investors receive a share of that pool's combined interest and principal payments.",
      },
      {
        id: "q2",
        prompt: "What distinguishes a plain pass-through MBS from a structured MBS?",
        choices: [
          "A pass-through gives every investor a pro-rata share of the pool's cash flows, while a structured MBS splits cash flows into multiple differentiated tranches",
          "A pass-through has no underlying mortgages at all",
          "A structured MBS always has a lower coupon than a pass-through",
          "There is no meaningful difference between the two",
        ],
        correctIndex: 0,
        explanation:
          "A pass-through's investors all get an identical, proportional slice of the pool, while a structured MBS tranches those same cash flows into securities with different priorities and risk profiles.",
      },
      {
        id: "q3",
        prompt: "What is prepayment risk?",
        choices: [
          "The risk that a homeowner never makes any mortgage payment",
          "The risk that a borrower pays off their mortgage early, returning principal to investors sooner than expected, often when reinvestment options are worse",
          "The risk that mortgage rates never change",
          "The risk that an MBS cannot legally be sold",
        ],
        correctIndex: 1,
        explanation:
          "Because mortgage borrowers can prepay at any time, an MBS investor's principal can be returned earlier than expected — commonly right when rates have fallen and reinvesting that cash is less attractive.",
      },
      {
        id: "q4",
        prompt: "What typically happens to prepayment speed when market mortgage rates fall well below a pool's existing rates?",
        choices: [
          "Prepayments slow down significantly",
          "Prepayments speed up, as more homeowners refinance into the lower available rate",
          "Prepayment speed is completely unaffected by rate changes",
          "All homeowners in the pool default simultaneously",
        ],
        correctIndex: 1,
        explanation:
          "A large gap between a pool's existing mortgage rates and lower current market rates gives homeowners a strong incentive to refinance, accelerating prepayment speed.",
      },
      {
        id: "q5",
        prompt: "Why is an MBS investor's principal return considered riskier to time than a plain corporate bond's?",
        choices: [
          "Because a mortgage borrower has the option to prepay at any time, unlike a corporate bond issuer who generally cannot repay early without penalty",
          "Because MBS never pay any interest at all",
          "Because corporate bonds also allow unlimited early prepayment",
          "Because MBS principal is never actually repaid",
        ],
        correctIndex: 0,
        explanation:
          "The borrower's prepayment option is what makes MBS cash flow timing uncertain in a way a typical corporate bond, without an equivalent early-repayment option, is not.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "structured-assets-carry-equity-tranche-index-hedging",
    title: "Carry, equity tranche – index hedging",
    summary:
      "Collecting the high coupon of a credit index's equity tranche while hedging away the index's broad market and spread risk.",
    body: [
      { type: "heading", text: "The Equity Tranche's High Carry" },
      { type: "paragraph", text: "The equity tranche of a credit index — for example, the 0-3% tranche of CDX — absorbs the first losses from the underlying basket, so it pays a much higher running coupon than the plain index or its senior tranches. A trader who sells protection on, effectively going long, the equity tranche collects that premium every period as long as cumulative losses stay below the tranche's threshold." },
      { type: "heading", text: "The Risk Being Compensated" },
      { type: "paragraph", text: "That outsized coupon compensates for genuine risk: if defaults or credit deterioration among the underlying names push cumulative losses into the tranche's loss range, the tranche can be wiped out entirely, well before the same event would ever touch a senior tranche." },
      { type: "heading", text: "Hedging With the Broad Index" },
      { type: "paragraph", text: "Much of the equity tranche's day-to-day price movement comes from the same broad credit-spread-widening or narrowing moves that push the whole index around, not from tranche-specific developments. A trader hedges out that broad, systematic exposure by taking an offsetting position in the plain index CDS." },
      { type: "heading", text: "What's Left After the Hedge" },
      { type: "paragraph", text: "Once the broad index exposure is hedged away, what remains is a more isolated bet: collecting the tranche's rich carry in exchange for bearing correlation risk — the pool's tendency toward clustered, correlated defaults rather than broad, market-wide spread moves — a subtler and harder-to-hedge risk than simple market direction." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Why does the equity tranche of a credit index pay a much higher coupon than the plain index?",
        choices: [
          "It absorbs the first losses from the underlying basket, so it's compensated with richer carry for that greater risk",
          "Equity tranches are guaranteed by a government agency",
          "The equity tranche has no exposure to any losses at all",
          "Coupon size is unrelated to a tranche's position in the capital structure",
        ],
        correctIndex: 0,
        explanation:
          "As the first-loss piece, the equity tranche is compensated with a much richer running coupon for bearing the risk of being wiped out before any senior tranche is touched.",
      },
      {
        id: "q2",
        prompt: "What risk does the equity tranche's high coupon compensate for?",
        choices: [
          "The risk that the tranche can be wiped out entirely if losses push into its range, well before a senior tranche would be affected",
          "The risk that interest rates will never change",
          "The risk that the index will stop trading",
          "There is no real risk being compensated — it's simply excess profit",
        ],
        correctIndex: 0,
        explanation:
          "The equity tranche's high carry directly compensates for its first-loss position — it can be wiped out by losses that would leave senior tranches completely untouched.",
      },
      {
        id: "q3",
        prompt: "Why does this strategy hedge the equity tranche position with the broad index?",
        choices: [
          "To strip out the broad, systematic spread-widening or narrowing risk that drives much of the tranche's day-to-day price movement",
          "To increase the position's exposure to market direction",
          "Index hedging has no effect on the position's risk",
          "To guarantee a fixed, unchanging profit regardless of any market conditions",
        ],
        correctIndex: 0,
        explanation:
          "Hedging with the plain index offsets the broad, systematic component of the tranche's price movement, isolating the tranche-specific risk and carry from the market's overall direction.",
      },
      {
        id: "q4",
        prompt: "What risk remains after the equity tranche position is hedged with the index?",
        choices: [
          "No risk remains at all",
          "Correlation risk — the pool's tendency toward clustered, correlated defaults rather than broad market-wide spread moves",
          "Only interest rate risk",
          "Only the risk of the index ceasing to trade",
        ],
        correctIndex: 1,
        explanation:
          "After stripping out broad market direction, what's left is a bet on correlation — whether defaults cluster together in a way that would burn through the equity tranche.",
      },
      {
        id: "q5",
        prompt: "What does \"selling protection\" on the equity tranche mean in this strategy?",
        choices: [
          "Buying insurance against the tranche's own default",
          "Taking on the equity tranche's first-loss risk in exchange for collecting its rich running coupon",
          "Refusing to trade the tranche at all",
          "Guaranteeing the entire credit index against all losses",
        ],
        correctIndex: 1,
        explanation:
          "Selling protection on the tranche means taking on its default risk — the first-loss exposure — in exchange for the coupon income that compensates for that risk.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "structured-assets-carry-senior-mezzanine-index-hedging",
    title: "Carry, senior/mezzanine – index hedging",
    summary:
      "The same index-hedged carry idea as the equity tranche trade, applied further up the capital structure, where the coupon is thinner but the loss protection is deeper.",
    body: [
      { type: "heading", text: "A Thinner, More Protected Coupon" },
      { type: "paragraph", text: "Senior and mezzanine tranches sit higher in the capital structure than the equity tranche, protected by the subordination of everything beneath them. That extra protection means a much lower running coupon than the equity tranche pays, but still a genuine spread over risk-free financing for bearing the residual risk of losses reaching that high into the structure." },
      { type: "heading", text: "When Senior/Mezzanine Carry Becomes Attractive" },
      { type: "paragraph", text: "Senior and mezzanine tranche spreads widen and narrow with the market's overall assessment of default risk and correlation, and can, at times, offer carry that looks rich relative to the tranche's actual loss probability — particularly during periods of elevated market fear, when senior tranche spreads can overshoot the risk they're genuinely compensating for." },
      { type: "heading", text: "Hedging With the Index" },
      { type: "paragraph", text: "As with the equity tranche trade, the position is hedged against the broad index to strip out systematic spread-widening risk, isolating the tranche-specific compensation from the market's overall direction." },
      { type: "heading", text: "A Different Correlation Bet" },
      { type: "paragraph", text: "Because senior and mezzanine tranches are only touched by losses once more junior tranches are wiped out, being long one of these tranches, after the index hedge, is a bet that defaults will be relatively idiosyncratic and spread out, rather than a correlated wave that burns through the entire capital structure at once — the opposite correlation exposure from the equity tranche trade." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Why do senior and mezzanine tranches pay a lower coupon than the equity tranche?",
        choices: [
          "They are protected by the subordination of the tranches beneath them, so they carry less risk",
          "They have no protection from losses at all",
          "Coupon size is set randomly, unrelated to seniority",
          "Senior tranches are always more risky than equity tranches",
        ],
        correctIndex: 0,
        explanation:
          "The subordination cushion beneath senior and mezzanine tranches means losses have to burn through everything junior first, which is why they command a lower coupon than the first-loss equity tranche.",
      },
      {
        id: "q2",
        prompt: "When can senior/mezzanine tranche carry become especially attractive?",
        choices: [
          "During periods of elevated market fear, when spreads can overshoot the risk they're genuinely compensating for",
          "Only when there is no risk in the market at all",
          "Senior tranche carry is always constant and never changes",
          "Only during periods when the credit index doesn't exist",
        ],
        correctIndex: 0,
        explanation:
          "Market-wide fear can push senior and mezzanine spreads wider than the tranche's actual loss probability justifies, creating an attractive carry opportunity for a trader willing to hold the position.",
      },
      {
        id: "q3",
        prompt: "Why is this position also hedged with the broad index?",
        choices: [
          "To strip out systematic, broad spread-widening risk, isolating the tranche-specific compensation",
          "To increase the position's directional market exposure",
          "Hedging has no purpose in this strategy",
          "To eliminate the tranche's coupon entirely",
        ],
        correctIndex: 0,
        explanation:
          "Just as with the equity tranche version, hedging with the index removes the broad, systematic component of price movement, leaving a more isolated bet on the tranche itself.",
      },
      {
        id: "q4",
        prompt: "What correlation bet does a long senior/mezzanine tranche position (after the index hedge) represent?",
        choices: [
          "A bet that defaults will be relatively idiosyncratic and spread out, rather than a correlated wave burning through the whole structure",
          "The exact same correlation bet as the equity tranche trade",
          "A bet that interest rates will rise",
          "A bet that the index will stop existing",
        ],
        correctIndex: 0,
        explanation:
          "Because senior/mezzanine tranches are only hit once junior tranches are wiped out, being long them is a bet against a highly correlated default wave — the opposite exposure from the equity tranche trade.",
      },
      {
        id: "q5",
        prompt: "How does the risk profile of a senior/mezzanine carry trade differ from an equity tranche carry trade?",
        choices: [
          "Senior/mezzanine offers thinner carry with deeper loss protection and a bet against correlated defaults, while equity offers richer carry with thin protection and a bet tied to correlated defaults",
          "They are identical in every respect",
          "Senior/mezzanine tranches carry more risk than equity tranches",
          "Neither trade involves any correlation exposure",
        ],
        correctIndex: 0,
        explanation:
          "The two trades sit at opposite ends of the capital structure — different coupon size, different loss protection, and opposite exposure to correlated versus idiosyncratic default risk.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "structured-assets-carry-tranche-hedging",
    title: "Carry – tranche hedging",
    summary:
      "Hedging a tranche's carry position with a different tranche from the same capital structure, instead of the broad index, for a more precisely targeted hedge.",
    body: [
      { type: "heading", text: "A More Targeted Hedge" },
      { type: "paragraph", text: "Rather than hedging a tranche position with the broad, plain index, this variant hedges one tranche against another tranche of the same underlying structure — for example, hedging a mezzanine tranche's spread risk with a position in an adjacent tranche, whether more junior or more senior." },
      { type: "heading", text: "Why Use Another Tranche Instead of the Index" },
      { type: "paragraph", text: "Two tranches from the same capital structure share direct exposure to the exact same specific pool of underlying names, so a tranche-versus-tranche hedge can offset structure-specific risk, not just broad market direction, that a generic index hedge would miss entirely." },
      { type: "heading", text: "Isolating Compensation for Subordination" },
      { type: "paragraph", text: "After hedging with a nearby tranche, what's left is a more precise bet on the compensation for that specific tranche's position in the capital structure — its exact attachment and detachment points — rather than a broader bet muddied by exposure to the whole index's composition." },
      { type: "heading", text: "The Cost of Precision" },
      { type: "paragraph", text: "A tranche-versus-tranche hedge is harder to execute than an index hedge, since specific tranches of a given structure are less liquid than the plain index, and the hedge ratio between two tranches of the same structure requires a more detailed model of how losses propagate through the capital structure than a simple index hedge does." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does tranche hedging use to hedge a tranche position, instead of the broad index?",
        choices: [
          "Another tranche from the same underlying capital structure",
          "A completely unrelated credit index",
          "A government bond with no connection to the structure",
          "Nothing — tranche hedging uses no hedge at all",
        ],
        correctIndex: 0,
        explanation:
          "Tranche hedging offsets risk using a different tranche of the same structure, rather than the broad, generic index.",
      },
      {
        id: "q2",
        prompt: "Why can a tranche-versus-tranche hedge offset risk that an index hedge would miss?",
        choices: [
          "Because both tranches share direct exposure to the exact same specific pool of underlying names",
          "Because tranches from the same structure have no shared exposure at all",
          "Because index hedges are always more precise than tranche hedges",
          "Because tranches never share any underlying exposure with each other",
        ],
        correctIndex: 0,
        explanation:
          "Since both tranches are drawn from the same pool, a tranche-versus-tranche hedge can offset structure-specific risk that a generic, broad index hedge simply can't reach.",
      },
      {
        id: "q3",
        prompt: "What does a trader isolate by hedging with a nearby tranche rather than the index?",
        choices: [
          "A more precise bet on the compensation for that specific tranche's exact position in the capital structure",
          "A bet on the overall direction of interest rates",
          "Complete elimination of all risk in the position",
          "A bet unrelated to the underlying pool entirely",
        ],
        correctIndex: 0,
        explanation:
          "The more targeted hedge strips out structure-specific noise, isolating compensation for the specific tranche's attachment and detachment points rather than a broader, index-level bet.",
      },
      {
        id: "q4",
        prompt: "What is the main drawback of a tranche-versus-tranche hedge compared to an index hedge?",
        choices: [
          "Specific tranches are less liquid than the plain index, and the hedge ratio requires a more detailed loss-propagation model",
          "Tranche hedges are always cheaper and easier to execute than index hedges",
          "There is no drawback whatsoever",
          "Tranche hedges eliminate the need for any modeling at all",
        ],
        correctIndex: 0,
        explanation:
          "Individual tranches trade less liquidly than the standardized index, and correctly sizing the hedge requires modeling how losses flow through the capital structure — more complex than a simple index hedge.",
      },
      {
        id: "q5",
        prompt: "Why might a trader accept the extra complexity of a tranche-versus-tranche hedge?",
        choices: [
          "For a more precisely targeted hedge against structure-specific risk that a broad index hedge can't offset",
          "Because it's always cheaper than an index hedge",
          "Because tranche hedges require no ongoing management",
          "Because regulators require it for all trades",
        ],
        correctIndex: 0,
        explanation:
          "The tradeoff is precision: a tranche-versus-tranche hedge targets structure-specific risk more accurately, at the cost of liquidity and modeling complexity.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "structured-assets-carry-cds-hedging",
    title: "Carry – CDS hedging",
    summary:
      "Hedging a tranche position's carry using single-name CDS on the underlying reference entities, weighted by each name's contribution to the tranche's risk.",
    body: [
      { type: "heading", text: "Hedging With the Underlying Names Directly" },
      { type: "paragraph", text: "Instead of hedging a tranche position with the index or another tranche, this approach hedges directly with single-name CDS on the individual reference entities that make up the underlying pool." },
      { type: "heading", text: "Tranche Delta and Single-Name Sensitivity" },
      { type: "paragraph", text: "Each name in the pool contributes differently to a given tranche's expected loss, depending on that name's own credit spread and its correlation with the rest of the pool. A tranche's \"delta\" to any one name captures how much the tranche's value moves for a small change in that name's spread, and single-name CDS positions are sized according to those deltas." },
      { type: "heading", text: "Isolating Correlation Risk" },
      { type: "paragraph", text: "Hedging away single-name spread risk this way leaves a position that's now primarily exposed to correlation — how likely defaults are to cluster together rather than happen independently — since both the broad, market-wide risk and the name-specific spread risk have been stripped out, leaving a purer bet on the shape of the loss distribution itself." },
      { type: "heading", text: "A Dynamic, Rebalancing Hedge" },
      { type: "paragraph", text: "Because each name's delta to the tranche changes as spreads move and as the pool ages, a CDS-hedged tranche position requires continuous rebalancing to stay properly hedged, unlike a simpler, more static index or tranche hedge — making this the most operationally intensive of the carry-hedging variants." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What does CDS hedging use to hedge a tranche position?",
        choices: [
          "Single-name CDS on the individual reference entities that make up the underlying pool",
          "A broad, unrelated credit index",
          "Government bonds with no connection to the pool",
          "Another tranche of a completely different structure",
        ],
        correctIndex: 0,
        explanation:
          "CDS hedging goes directly to the source, hedging with single-name CDS on the specific reference entities inside the underlying pool.",
      },
      {
        id: "q2",
        prompt: "What does a tranche's \"delta\" to a given name measure?",
        choices: [
          "How much the tranche's value moves for a small change in that specific name's credit spread",
          "The total number of names in the underlying pool",
          "The tranche's coupon rate",
          "The index's overall trading volume",
        ],
        correctIndex: 0,
        explanation:
          "Delta measures sensitivity — how much a tranche's value changes for a small move in one particular reference entity's spread — and is used to size the single-name CDS hedge for that name.",
      },
      {
        id: "q3",
        prompt: "What risk remains after single-name spread risk is hedged away in this strategy?",
        choices: [
          "Correlation risk — the tendency of defaults to cluster together rather than happen independently",
          "No risk remains at all",
          "Only interest rate risk",
          "Only currency risk",
        ],
        correctIndex: 0,
        explanation:
          "With both broad market risk and name-specific spread risk stripped out, what's left is a purer bet on correlation — how likely defaults are to happen together rather than independently.",
      },
      {
        id: "q4",
        prompt: "Why does a CDS-hedged tranche position require continuous rebalancing?",
        choices: [
          "Because each name's delta to the tranche changes as spreads move and the pool ages",
          "Because CDS contracts expire every single day",
          "Rebalancing is never actually required for this strategy",
          "Because the underlying index changes its composition daily",
        ],
        correctIndex: 0,
        explanation:
          "As spreads move and the pool's composition ages, each name's sensitivity to the tranche shifts, requiring the hedge to be adjusted to stay properly sized.",
      },
      {
        id: "q5",
        prompt: "How does CDS hedging's operational intensity compare to index or tranche hedging?",
        choices: [
          "It's the most operationally intensive, since it requires tracking and rebalancing many individual name-level deltas rather than one or two broader positions",
          "It's the least operationally intensive of the three",
          "All three hedging approaches require identical effort",
          "CDS hedging requires no monitoring once it's set up",
        ],
        correctIndex: 0,
        explanation:
          "Managing single-name deltas across every name in the pool, and rebalancing as those deltas shift, makes CDS hedging considerably more hands-on than a single index or tranche hedge.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "structured-assets-cdos-curve-trades",
    title: "CDOs – curve trades",
    summary:
      "Betting on how the credit curve across different tranche maturities steepens or flattens, rather than on the outright level of spreads.",
    body: [
      { type: "heading", text: "A Credit Curve, Not Just a Spread Level" },
      { type: "paragraph", text: "Just as bonds of different maturities trace out a yield curve, CDO and credit-index tranches of different maturities — say, 5-year and 10-year — trace out a credit curve: a term structure of spreads reflecting how default risk is expected to build up over different time horizons." },
      { type: "heading", text: "Steepening and Flattening Views" },
      { type: "paragraph", text: "A curve trade takes a position on the curve's shape rather than its overall level. A steepener bets the gap between longer- and shorter-dated tranche spreads will widen, while a flattener bets that gap will narrow, regardless of which direction spreads move overall." },
      { type: "heading", text: "Constructing the Trade" },
      { type: "paragraph", text: "A typical curve trade goes long protection on one maturity and sells protection on another, in a ratio sized so the position's sensitivity to a parallel shift in the whole curve roughly cancels out, leaving a position that mainly profits or loses based on the curve's shape changing — similar in spirit to the yield-curve spread trades used in fixed income." },
      { type: "heading", text: "What Moves the Credit Curve" },
      { type: "paragraph", text: "A credit curve's shape often reflects the market's view of near-term versus longer-term default risk. An unusually steep curve can signal near-term stability with longer-run concerns, while an inverted or flat curve can signal acute near-term stress that's expected to either resolve, or is already priced in across every maturity." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "What is a \"credit curve\"?",
        choices: [
          "The term structure of spreads across CDO or credit-index tranches of different maturities",
          "A single spread level with no relationship to maturity",
          "A curve showing a company's stock price over time",
          "A measure of how many names are in an underlying pool",
        ],
        correctIndex: 0,
        explanation:
          "Just like a bond yield curve plots yields against maturity, a credit curve plots credit spreads against tranche maturity, reflecting expectations about default risk over different time horizons.",
      },
      {
        id: "q2",
        prompt: "What does a \"steepener\" curve trade bet on?",
        choices: [
          "That the gap between longer- and shorter-dated tranche spreads will widen",
          "That all spreads will move to exactly zero",
          "That the gap between longer- and shorter-dated spreads will narrow",
          "That the credit index will stop trading entirely",
        ],
        correctIndex: 0,
        explanation:
          "A steepener specifically bets on the spread between two maturities widening — a bet on the curve's shape, not its overall level.",
      },
      {
        id: "q3",
        prompt: "How is a typical credit curve trade constructed?",
        choices: [
          "Long protection on one maturity and sold protection on another, sized so sensitivity to a parallel shift in the whole curve largely cancels out",
          "A single outright long position with no offsetting leg",
          "Always buying protection on every available maturity equally",
          "It cannot be constructed using protection at all",
        ],
        correctIndex: 0,
        explanation:
          "By taking offsetting positions across two maturities, sized to cancel out a parallel shift, the trade isolates a bet on the curve's shape rather than its overall level.",
      },
      {
        id: "q4",
        prompt: "What can an unusually steep credit curve signal?",
        choices: [
          "Near-term stability paired with longer-run default concerns",
          "That the reference entities are guaranteed never to default",
          "That the underlying pool has been completely eliminated",
          "Nothing meaningful about default risk expectations",
        ],
        correctIndex: 0,
        explanation:
          "A steep curve reflects a market view where near-term risk looks contained, but longer-dated maturities price in greater concern about default risk further out.",
      },
      {
        id: "q5",
        prompt: "How is a credit curve trade similar to a fixed-income yield-curve spread trade?",
        choices: [
          "Both bet on the shape of a term structure changing, rather than on the outright level of rates or spreads",
          "Both require physical delivery of a bond",
          "Both are only available to government issuers",
          "They share no similarities at all",
        ],
        correctIndex: 0,
        explanation:
          "Both trade types isolate a bet on how a term structure's shape changes — steepening or flattening — independent of the market's overall level of rates or spreads.",
      },
    ],
  },
  {
    kind: "concept",
    slug: "structured-assets-mbs-trading",
    title: "Mortgage-backed security (MBS) trading",
    summary:
      "Trading MBS based on views about prepayment speed and relative value against Treasuries, rather than simply holding for yield.",
    body: [
      { type: "heading", text: "Trading a View on Prepayment Speed" },
      { type: "paragraph", text: "Since MBS cash flows depend heavily on how fast the underlying mortgages prepay, traders take active positions based on their own view of future prepayment speed diverging from what's priced into the market. Buying a discount, below-par, pass-through when expecting faster-than-priced prepayment is a classic example, since faster prepayment returns principal sooner at a below-par price, boosting the effective yield realized." },
      { type: "heading", text: "Premium and Discount Pass-Throughs" },
      { type: "paragraph", text: "A premium pass-through — priced above par, typically higher-coupon — loses value from faster-than-expected prepayment, since principal is returned at par sooner than expected on a security bought above par. A discount pass-through benefits from faster prepayment for the opposite reason. This asymmetry is central to how traders position around a prepayment view." },
      { type: "heading", text: "Option-Adjusted Spread as a Relative Value Tool" },
      { type: "paragraph", text: "Because an MBS's effective cash flows depend on a borrower's prepayment option, comparing MBS to Treasuries on yield alone is misleading. Traders instead use option-adjusted spread (OAS), which strips out the value of the prepayment option to compare an MBS's compensation for genuine credit and liquidity risk against similar-duration Treasuries on a like-for-like basis." },
      { type: "heading", text: "TBA Trading" },
      { type: "paragraph", text: "Much MBS trading happens not in specific, identified pools but in the TBA (to-be-announced) market, where the specific pool of mortgages backing the trade isn't specified until just before settlement. That standardization makes the broader MBS market far more liquid, similar in spirit to how standardized futures contracts enable a liquidity a private forward agreement can't match." },
    ],
    quiz: [
      {
        id: "q1",
        prompt: "Why would a trader buy a discount pass-through when expecting faster-than-priced prepayment?",
        choices: [
          "Faster prepayment returns principal sooner at a below-par price, boosting the effective yield realized",
          "Discount pass-throughs have no relationship to prepayment speed",
          "Faster prepayment always hurts a discount pass-through's return",
          "Prepayment speed has no effect on any MBS's value",
        ],
        correctIndex: 0,
        explanation:
          "Buying below par means faster prepayment accelerates the return of principal at that discounted price, which improves the realized yield relative to a slower-prepaying scenario.",
      },
      {
        id: "q2",
        prompt: "How does a premium pass-through respond to faster-than-expected prepayment?",
        choices: [
          "It loses value, since principal purchased above par is returned at par sooner than expected",
          "It always gains value from faster prepayment",
          "Premium pass-throughs are entirely unaffected by prepayment speed",
          "It automatically converts into a discount pass-through",
        ],
        correctIndex: 0,
        explanation:
          "A premium pass-through was bought above par, so getting principal back early, at par, sooner than anticipated, erodes the return relative to what was expected when the higher price was paid.",
      },
      {
        id: "q3",
        prompt: "What does option-adjusted spread (OAS) do?",
        choices: [
          "Strips out the value of the prepayment option, allowing a like-for-like comparison of an MBS's compensation for credit and liquidity risk against Treasuries",
          "Measures only a bond's stated coupon rate",
          "Ignores prepayment entirely and just compares raw yields",
          "Only applies to government bonds, never MBS",
        ],
        correctIndex: 0,
        explanation:
          "OAS adjusts for the value embedded in the borrower's prepayment option, letting investors compare an MBS's genuine credit/liquidity compensation to similar-duration Treasuries on a fairer basis than raw yield.",
      },
      {
        id: "q4",
        prompt: "What is the TBA market?",
        choices: [
          "A market where MBS trade without the specific underlying pool being identified until just before settlement, increasing liquidity",
          "A market exclusively for identified, named mortgage pools",
          "A market that only trades government Treasury bonds",
          "A market with no standardization at all",
        ],
        correctIndex: 0,
        explanation:
          "TBA (to-be-announced) trading standardizes MBS trading by deferring the specific pool identification until near settlement, which is what makes the broader MBS market so liquid.",
      },
      {
        id: "q5",
        prompt: "Why is comparing MBS to Treasuries on raw yield alone considered misleading?",
        choices: [
          "Because an MBS's effective cash flows depend on the borrower's prepayment option, which raw yield doesn't account for",
          "Because Treasuries and MBS always have identical cash flow structures",
          "Because MBS never actually pay any yield",
          "Because Treasuries have no yield at all",
        ],
        correctIndex: 0,
        explanation:
          "Raw yield ignores the prepayment option embedded in an MBS, which materially affects its actual cash flow timing — OAS exists specifically to correct for that.",
      },
    ],
  },
];
