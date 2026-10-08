import { ContactEmail, H3, LegalPage, List, P, TextLink, type LegalSection } from "../components/LegalPage";

// Written to match what the app actually does: no analytics or advertising, two essential cookies, account data in a
// database hosted by Railway (US West), and Google only when a learner chooses "Continue with Google". Keep it in step
// with the code when that changes.

const SECTIONS: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <P>
          Trading Strategies 101 ("we", "us") is a free educational website that teaches trading strategies across asset
          classes through lessons, quizzes and practice tools. This policy explains what personal information we collect,
          why, and the choices you have.
        </P>
        <P>
          We aim to handle personal information in line with Canada's Personal Information Protection and Electronic
          Documents Act (PIPEDA). If you have a question that this policy doesn't answer, contact us at <ContactEmail />.
        </P>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    body: (
      <>
        <P>You can read every lesson and use the practice tools without an account. We only collect personal information if you create one.</P>
        <H3>When you create an account with email and password</H3>
        <List
          items={[
            "Your name and email address.",
            "Your password, stored only as a one-way hash (bcrypt). We never see or store the password itself.",
          ]}
        />
        <H3>When you choose "Continue with Google"</H3>
        <List
          items={[
            "The name and verified email address on your Google account, and Google's identifier for your account, which links it to your Trading Strategies 101 account.",
            "We request only the basic sign-in scopes (openid, email, profile). We do not receive your Google password, contacts, files or any other Google data.",
          ]}
        />
        <H3>As you learn</H3>
        <List
          items={[
            "Which lessons you've completed, your knowledge-check scores and number of attempts.",
            "Your course final-quiz results and when you completed them.",
          ]}
        />
        <H3>Technical information</H3>
        <P>
          Like any website, our hosting provider receives standard request information (such as IP address, browser type
          and the pages requested) and may keep it in short-lived server logs used to run and secure the service. We do not
          use analytics, advertising or tracking tools.
        </P>
        <H3>Information that stays on your device</H3>
        <P>
          Some features remember things in your browser only, such as your Quiz Bank stats, missed questions, saved books
          and papers, and lesson text size. This is never sent to us. See the <TextLink to="/cookies">Cookie Policy</TextLink>{" "}
          for the full list.
        </P>
      </>
    ),
  },
  {
    id: "how-we-use-it",
    title: "How we use your information",
    body: (
      <>
        <List
          items={[
            "To create and run your account and sign you in.",
            "To save your progress so you can pick up where you left off, and to show your course completion.",
            "To keep the service secure and working, and to prevent abuse.",
            "To respond when you contact us.",
          ]}
        />
        <P>
          We collect this information with your consent, given when you create an account, and use it only for these
          purposes. We do not sell or rent your personal information, we do not use it for advertising, and we do not send
          marketing emails.
        </P>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Who we share it with",
    body: (
      <>
        <P>We share personal information only with the service providers needed to run the site:</P>
        <List
          items={[
            <>
              <strong className="font-semibold text-[#e6e8ec]">Railway</strong>, which hosts the website and its database.
            </>,
            <>
              <strong className="font-semibold text-[#e6e8ec]">Google</strong>, only if you choose "Continue with Google".
              Google handles that sign-in under its own privacy policy and tells us the account details listed above.
            </>,
          ]}
        />
        <P>
          We may also disclose information if the law requires it, or to protect the rights, safety or security of our users
          or the service.
        </P>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    body: (
      <P>
        We use two strictly necessary cookies: one keeps you signed in, and one protects the Google sign-in process. We use
        no analytics, advertising or third-party cookies. The <TextLink to="/cookies">Cookie Policy</TextLink> has the
        details.
      </P>
    ),
  },
  {
    id: "where-stored",
    title: "Where your information is stored",
    body: (
      <P>
        Your account data is stored on servers operated by our hosting provider in the United States. While it is there, it
        is subject to US law and may be accessible to US authorities under that law. By creating an account you consent to
        this transfer.
      </P>
    ),
  },
  {
    id: "retention",
    title: "How long we keep it",
    body: (
      <P>
        We keep your account information and progress for as long as your account exists. If you ask us to delete your
        account, we delete it and its progress, except where we must keep information to meet a legal obligation. Server
        logs are kept only briefly, under our hosting provider's retention practices.
      </P>
    ),
  },
  {
    id: "security",
    title: "How we protect it",
    body: (
      <P>
        The site is served over HTTPS. Passwords are stored only as salted hashes, and your sign-in session is held in a
        cookie that page scripts cannot read. No system is completely secure, but we take reasonable steps to protect your
        information against loss, misuse and unauthorized access.
      </P>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights and choices",
    body: (
      <>
        <P>You can ask us to:</P>
        <List
          items={[
            "Tell you what personal information we hold about you and give you a copy.",
            "Correct information that is inaccurate.",
            "Delete your account and the information associated with it.",
            "Stop using your information, by withdrawing your consent. Since an account can't work without it, this means closing your account.",
          ]}
        />
        <P>
          To make a request, email <ContactEmail /> from the address on your account. We will respond within 30 days. If
          you're not satisfied with our response, you can contact the{" "}
          <a href="https://www.priv.gc.ca/" target="_blank" rel="noreferrer" className="text-[#a99dff] hover:underline">
            Office of the Privacy Commissioner of Canada
          </a>
          .
        </P>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <P>
        Trading Strategies 101 is not directed at children under 13, and we do not knowingly collect personal information
        from them. If you believe a child under 13 has created an account, contact us and we will delete it.
      </P>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <P>
        We may update this policy as the site changes. We will post the new version here with a new "last updated" date,
        and if a change materially affects how we use your information, we will make it clear on the site before it takes
        effect.
      </P>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <P>
        Questions or requests about your privacy: <ContactEmail />.
      </P>
    ),
  },
];

export function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="What we collect, why we collect it, and the choices you have. In short: we collect only what an account needs, we don't track you, and we never sell your data."
      sections={SECTIONS}
    />
  );
}
