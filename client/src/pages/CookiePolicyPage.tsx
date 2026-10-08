import { ContactEmail, H3, LegalPage, P, Table, TextLink, type LegalSection } from "../components/LegalPage";

// The tables list every cookie (server/src/lib/auth.ts, server/src/lib/google.ts) and every browser-storage key the
// client writes. Add a row here whenever a new one is introduced.

const SECTIONS: LegalSection[] = [
  {
    id: "what-cookies-are",
    title: "What cookies are",
    body: (
      <P>
        Cookies are small text files a website stores in your browser so it can remember something between pages or
        visits, such as the fact that you're signed in. Websites can also keep information in your browser's local storage
        and session storage, which work similarly but are never sent to the server automatically. This policy covers all
        three.
      </P>
    ),
  },
  {
    id: "cookies-we-use",
    title: "Cookies we use",
    body: (
      <>
        <P>
          We use only two cookies, both first-party and strictly necessary for features you ask for. Neither is used to
          track you or to show you ads.
        </P>
        <Table
          head={["Cookie", "Purpose", "Duration"]}
          rows={[
            [
              "trading_strategies_101_session",
              "Keeps you signed in to your account. Set when you sign in or sign up, and removed when you sign out.",
              "7 days",
            ],
            [
              "trading_strategies_101_google_state",
              'Protects "Continue with Google" against forged sign-in requests. Set only when you start a Google sign-in, and removed as soon as it finishes.',
              "Up to 10 minutes",
            ],
          ]}
        />
        <P>
          Both cookies are marked HttpOnly, so scripts on the page can't read them, and are sent only over HTTPS on the live
          site.
        </P>
      </>
    ),
  },
  {
    id: "what-we-dont-use",
    title: "What we don't use",
    body: (
      <>
        <P>
          We don't use analytics, advertising, social media or other third-party cookies, and we don't load third-party
          tracking scripts.
        </P>
        <P>
          If you choose "Continue with Google", you briefly visit Google's own sign-in page, where Google may set its own
          cookies under Google's cookie and privacy policies. Those cookies belong to Google, not to us.
        </P>
      </>
    ),
  },
  {
    id: "browser-storage",
    title: "Information kept in your browser",
    body: (
      <>
        <P>
          These features save preferences and practice history in your browser so they work without an account. This
          information stays on your device and is never sent to us.
        </P>
        <H3>Local storage (kept until you clear it)</H3>
        <Table
          head={["Key", "What it remembers"]}
          rows={[
            ["quizbank:stats", "Your Quiz Bank tally: questions answered, accuracy and best streak."],
            ["quizbank:missed", "Quiz Bank questions you missed, so you can retry them."],
            ["quizbank:kind", "Whether you last practised concept checks, calculations or both."],
            ["greeks:challenges", "Which Greeks Explorer challenges you've completed."],
            ["books:saved", "Books you've saved for later."],
            ["papers:saved", "Papers you've saved for later."],
            ["lesson:textSize", "Your preferred lesson text size."],
          ]}
        />
        <H3>Session storage (cleared when you close the tab)</H3>
        <Table
          head={["Key", "What it remembers"]}
          rows={[["final_quiz:<course>", "Your answers to a course final quiz in progress, so a page refresh doesn't lose them."]]}
        />
      </>
    ),
  },
  {
    id: "consent",
    title: "Your consent",
    body: (
      <P>
        Because every cookie and storage item we use is necessary for something you've asked the site to do, we don't show
        a cookie banner. If we ever add cookies that aren't strictly necessary, such as analytics, we will ask for your
        consent first and update this policy.
      </P>
    ),
  },
  {
    id: "managing",
    title: "Managing cookies and storage",
    body: (
      <P>
        You can view, block or delete cookies and site data in your browser's settings. If you block our session cookie,
        you won't be able to stay signed in, though you can still read the lessons and use the practice tools. Clearing site
        data resets your Quiz Bank stats, saved items and preferences on that device; progress saved to your account is not
        affected. For more about how we handle personal information, see the{" "}
        <TextLink to="/privacy">Privacy Policy</TextLink>.
      </P>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <P>
        Questions about this policy: <ContactEmail />.
      </P>
    ),
  },
];

export function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      intro="The cookies and browser storage this site uses, and why. We use only what's needed to sign you in and remember your practice. No analytics, no ads, no third-party trackers."
      sections={SECTIONS}
    />
  );
}
