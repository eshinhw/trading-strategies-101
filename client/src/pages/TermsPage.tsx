import { ContactEmail, H3, LegalPage, List, P, TextLink, type LegalSection } from "../components/LegalPage";

const SECTIONS: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    body: (
      <P>
        These Terms of Service ("Terms") govern your use of Trading Strategies 101 (the "Service"), a free educational
        website about trading strategies. By using the Service or creating an account, you agree to these Terms and to our{" "}
        <TextLink to="/privacy">Privacy Policy</TextLink>. If you don't agree, please don't use the Service.
      </P>
    ),
  },
  {
    id: "not-advice",
    title: "Educational content only, not financial advice",
    body: (
      <>
        <P>
          Everything on the Service, including lessons, examples, quizzes, simulators and calculators, is general
          educational material. It is not investment, financial, legal, tax or accounting advice, and it is not a
          recommendation or offer to buy or sell any security, derivative or other financial product.
        </P>
        <List
          items={[
            "We are not a registered investment adviser, dealer or broker, and nothing on the Service takes account of your personal circumstances.",
            "Trading and investing involve risk, including the loss of more than your initial investment with leveraged products such as options, futures and margin. Past performance does not guarantee future results.",
            "Examples and simulations use simplified, hypothetical numbers. Real markets involve costs, slippage, taxes and other factors that can change outcomes significantly.",
            "You are solely responsible for your own trading and investment decisions. Consider speaking with a qualified, licensed professional before acting on anything you learn here.",
          ]}
        />
      </>
    ),
  },
  {
    id: "eligibility",
    title: "Eligibility",
    body: (
      <P>
        You must be at least 13 years old to create an account. If you are under the age of majority where you live, you
        may use the Service only with the involvement and consent of a parent or guardian, who agrees to these Terms on
        your behalf.
      </P>
    ),
  },
  {
    id: "accounts",
    title: "Your account",
    body: (
      <List
        items={[
          "You can create an account with an email address and password, or with Google. Provide accurate information and keep it up to date.",
          "Keep your password secure, and tell us promptly if you believe someone else has accessed your account. You are responsible for activity under your account.",
          "One account per person. Accounts may not be shared, sold or transferred.",
          <>
            You can ask us to delete your account at any time by emailing <ContactEmail />.
          </>,
        ]}
      />
    ),
  },
  {
    id: "free-service",
    title: "A free service",
    body: (
      <P>
        The Service is currently free. If we introduce paid features in the future, we will explain their terms clearly
        before you can buy them, and nothing will be charged without your explicit agreement.
      </P>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    body: (
      <>
        <H3>Our content</H3>
        <P>
          The Service, including its original lessons, questions, explanations, diagrams, software and design, is owned by
          Trading Strategies 101 or its licensors and is protected by copyright and other laws. Strategy mechanics and
          classifications draw on Kakushadze, Z. and Serur, J.A., <em>151 Trading Strategies</em> (2018), which is credited
          accordingly.
        </P>
        <H3>Your licence to use it</H3>
        <P>
          We grant you a personal, non-exclusive, non-transferable, revocable licence to access and use the Service for your
          own non-commercial learning. You may not copy, republish, sell, or create commercial products from our content,
          or scrape it in bulk, without our written permission. Short quotations with attribution are fine.
        </P>
        <H3>Third-party material</H3>
        <P>
          The Books and Papers pages describe and link to works by other authors and publishers. Those works belong to their
          respective owners, and links to other websites are provided for convenience. We don't control and aren't
          responsible for third-party sites or their content.
        </P>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    body: (
      <>
        <P>When using the Service, you agree not to:</P>
        <List
          items={[
            "Break any law, or use the Service to mislead or harm others.",
            "Try to gain unauthorized access to the Service, other accounts or our systems, or probe, scan or test their vulnerabilities without permission.",
            "Disrupt or overload the Service, including through automated scraping, bots or excessive requests.",
            "Reverse engineer the Service, except where the law expressly allows it.",
            "Misrepresent the Service's content as personalized advice, or present it as your own.",
          ]}
        />
      </>
    ),
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    body: (
      <P>
        We work to keep the content accurate, but the Service is provided "as is" and "as available", without warranties of
        any kind, whether express or implied, including warranties of accuracy, completeness, fitness for a particular
        purpose and non-infringement. We don't guarantee that the content is error-free or current, that the Service will be
        uninterrupted or secure, or that using it will lead to any particular result. Some jurisdictions don't allow certain
        warranty exclusions, so some of these may not apply to you.
      </P>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <P>
        To the fullest extent permitted by law, Trading Strategies 101 will not be liable for any indirect, incidental,
        special, consequential or punitive damages, or for any loss of profits, trading or investment losses, or loss of
        data, arising from or related to your use of the Service or reliance on its content. Because the Service is free,
        our total liability for any claim relating to the Service is limited to CAD $100. Nothing in these Terms limits any
        liability that cannot be limited under applicable law.
      </P>
    ),
  },
  {
    id: "indemnity",
    title: "Indemnity",
    body: (
      <P>
        You agree to indemnify and hold harmless Trading Strategies 101 from any claims, losses or expenses (including
        reasonable legal fees) arising from your breach of these Terms or your misuse of the Service.
      </P>
    ),
  },
  {
    id: "termination",
    title: "Suspension and termination",
    body: (
      <P>
        You can stop using the Service and ask us to delete your account at any time. We may suspend or close an account
        that breaches these Terms or puts the Service or other users at risk. Sections that by their nature should survive
        termination, including the educational-content notice, intellectual property, disclaimers, limitation of liability
        and indemnity, continue to apply.
      </P>
    ),
  },
  {
    id: "changes-to-service",
    title: "Changes to the Service",
    body: (
      <P>
        We may add, change or remove content and features, or pause or discontinue the Service, at any time. We'll try to
        give reasonable notice of significant changes where we can.
      </P>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law",
    body: (
      <P>
        These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada that apply there,
        without regard to conflict-of-law rules. Any dispute will be resolved in the courts of Ontario, unless the
        consumer-protection laws of the place you live give you the right to bring proceedings there.
      </P>
    ),
  },
  {
    id: "changes-to-terms",
    title: "Changes to these Terms",
    body: (
      <P>
        We may update these Terms from time to time. We will post the new version here with a new "last updated" date, and
        make material changes clear on the site before they take effect. If you keep using the Service after changes take
        effect, you accept the updated Terms.
      </P>
    ),
  },
  {
    id: "general",
    title: "General",
    body: (
      <P>
        If any part of these Terms is found unenforceable, the rest remains in effect. Our not enforcing a provision is not
        a waiver of it. These Terms, together with the <TextLink to="/privacy">Privacy Policy</TextLink> and{" "}
        <TextLink to="/cookies">Cookie Policy</TextLink>, are the entire agreement between you and us about the Service.
      </P>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <P>
        Questions about these Terms: <ContactEmail />.
      </P>
    ),
  },
];

export function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="The rules for using Trading Strategies 101. The most important point: everything here is education, not financial advice."
      sections={SECTIONS}
    />
  );
}
