import type { Dictionary } from "./types";

const dictionary: Dictionary = {
  meta: {
    title: "Caio Stato | Frontend Engineer, React & Next.js",
    description:
      "Portfolio of Caio Stato, a frontend engineer with 4+ years building React and Next.js applications for fintech platforms and digital products.",
  },
  nav: {
    ariaLabel: "Main navigation",
    items: [
      { label: "Work", href: "#work" },
      { label: "Experience", href: "#experience" },
      { label: "Capabilities", href: "#capabilities" },
      { label: "Stack", href: "#stack" },
    ],
    contact: "Contact",
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },
  hero: {
    badge: "Available for new projects",
    heading: "React and Next.js architecture that holds up under load",
    subtitle:
      "Four years on fintech platforms and digital products, spent on render cost, bundle size, and code that survives the next engineer.",
    ctaPrimary: "See live work",
    role: "Frontend Engineer",
    stats: [
      { value: "4+", label: "Years shipping frontend" },
      { value: "30%", label: "Operational efficiency gain" },
      { value: "99.9%", label: "System reliability" },
    ],
  },
  projects: {
    heading: "Selected projects & live deployments",
    description:
      "Production systems and web platforms running live in the wild, paired with measurable architecture outcomes.",
    items: [
      {
        title: "Cerasos sales platform",
        description:
          "Pharmacy sales platform that runs on WhatsApp. Customers message, the Uazapi integration answers and creates the order, and Getnet handles payment from tokenization through the webhook that confirms it. An admin dashboard sits on top for order tracking, sales figures, and customer ratings.",
        role: "Fullstack Engineer",
        period: "2025",
        href: "https://cerasos.com.br/",
        metrics: [
          { value: "99.9%", label: "System reliability" },
          { value: "100%", label: "Orders automated" },
        ],
        tags: ["Next.js", "TypeScript", "Getnet", "Uazapi"],
      },
      {
        title: "Arkea Labs digital infrastructure",
        description:
          "Software engineering and B2B/B2C digital infrastructure platform. Built with high-performance web architecture, real-time bidirectional ERP connectors (SAP, Totvs, Omie, Bling), payment gateway orchestration, and fault-tolerant edge delivery.",
        role: "Software Engineer",
        period: "2025 - 2026",
        href: "https://arkealabs.com/",
        metrics: [
          { value: "99+", label: "Core Web Vitals" },
          { value: "24/7", label: "Real-time ERP sync" },
        ],
        tags: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
      },
      {
        title: "AR3 Capital financial platform",
        description:
          "Internal financial services pulled into one client. Database lookups and reporting were the slow part, so those came first. The UI library shipped through Storybook so every view drew from the same components.",
        role: "Frontend Engineer",
        period: "2022 - 2024",
        metrics: [
          { value: "+30%", label: "Operational efficiency" },
          { value: "100%", label: "Views on the UI library" },
        ],
        tags: ["React", "Storybook", "TypeScript", "REST APIs"],
      },
    ],
    viewLive: "Open live site",
    viewRepo: "Source",
    liveLabel: "Live demo",
    privateLabel: "Private system",
    interactivePreviewLabel: "Live preview",
    architecturePreviewLabel: "Architecture",
    empty: "Projects are being written up. Check back shortly.",
  },
  experience: {
    heading: "Experience",
    items: [
      {
        company: "Cerasos",
        period: "Dec 2025 - Present",
        role: "Fullstack Engineer",
        highlights: [
          "Built a pharmacy sales platform on top of WhatsApp through Uazapi, so a customer message turns into a real order without anyone typing it in.",
          "Wrote the payment engine in Next.js and TypeScript against the Getnet API: tokenization, a custom checkout, and webhook listeners that keep order status in sync.",
          "Built the admin dashboard for orders, sales figures, and customer ratings, which replaced the spreadsheets the pharmacy was using.",
          "Own the infrastructure too, including hosting, database sync, API orchestration, and the test suite that keeps reliability at 99.9%.",
        ],
        stack: ["Next.js", "TypeScript", "Getnet", "Uazapi"],
      },
      {
        company: "Ziion Tech",
        period: "Feb 2025 - Present",
        role: "Frontend Engineer",
        highlights: [
          "Built a property showcase app in Next.js and Tailwind CSS, with Core Web Vitals as the thing we optimized against rather than a report we read afterwards.",
          "Put together the internal UI component library, which cut roughly 20% off the time it takes to ship a new feature.",
          "Built the admin dashboard for employee management and the internal data views that go with it.",
          "Set up the Jest workflows so unit tests run without anyone remembering to run them.",
        ],
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Jest"],
      },
      {
        company: "eAcademy",
        period: "Jun 2024 - Nov 2024",
        role: "Frontend Engineer",
        highlights: [
          "Built the scheduling and calendar views in Next.js and Shadcn UI.",
          "Built the data dashboards with Redux and Framer Motion, working with the backend team to pin down the API contracts first.",
          "Moved the frontend test suite into the CI/CD pipeline, which took manual verification out of the release path.",
          "Reviewed code and wrote the documentation that kept the architecture decisions from getting lost.",
        ],
        stack: ["Next.js", "Redux", "Shadcn UI", "Framer Motion"],
      },
      {
        company: "AR3 Capital",
        period: "Oct 2022 - Feb 2024",
        role: "Frontend Engineer",
        highlights: [
          "Led the client-side work to bring internal financial services into one platform.",
          "Rewrote the database lookups and reporting engines, which moved operational efficiency up 30%.",
          "Built and published the company UI library through Storybook, and every view ended up on it.",
          "Owned the frontend end to end and worked directly with the product squads.",
        ],
        stack: ["React", "Storybook", "TypeScript", "REST APIs"],
      },
      {
        company: "RN3",
        period: "Apr 2023 - Oct 2023",
        role: "Software Engineer (Full Stack)",
        highlights: [
          "Migrated the legacy data modules off Angular onto Next.js and Node.js.",
          "Built the Stripe payment integration and the business analytics features around it.",
          "Rewrote the slow PostgreSQL queries, which got data retrieval 25% faster.",
          "Embedded Power BI dashboards so the reporting stopped going through a separate processing step.",
        ],
        stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      },
      {
        company: "Hybank",
        period: "Sep 2021 - Sep 2022",
        role: "Mobile Developer",
        highlights: [
          "Built cross-platform fintech apps in React Native for iOS and Android.",
          "Designed the mobile design system, which cut the layout work on every screen after it.",
          "Managed the Redux state tree connecting the app to transaction-heavy banking REST APIs.",
          "Ran device usability and performance testing, which brought production errors down and app store stability up.",
        ],
        stack: ["React Native", "Redux", "REST APIs"],
      },
    ],
  },
  capabilities: {
    heading: "What I do",
    items: [
      {
        title: "Frontend engineering",
        description:
          "React and Next.js applications built to stay fast as they grow. Core Web Vitals and accessibility get measured, not assumed.",
      },
      {
        title: "Payments and fintech",
        description:
          "Stripe and Getnet integrations from sandbox through production, including tokenization, webhooks, and PCI-compliant checkout.",
      },
      {
        title: "Design systems and architecture",
        description:
          "Component libraries in Storybook, with Clean Architecture and DDD applied where the domain is complex enough to need them.",
      },
    ],
  },
  stack: {
    heading: "Stack",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "React Native",
      "Redux Toolkit",
      "Zustand",
      "Tailwind CSS",
      "Shadcn UI",
      "Node.js",
      "PostgreSQL",
      "GraphQL",
      "Stripe",
      "Getnet",
      "Uazapi",
      "Storybook",
      "Jest",
      "Playwright",
      "Docker",
      "Vercel",
    ],
  },
  philosophy: {
    label: "How I work",
    quote:
      "Clean Architecture and DDD are not academic exercises. They are what lets a team keep shipping without the codebase turning against them. Performance and accessibility follow from structure. You do not bolt them on at the end.",
  },
  connect: {
    heading: "Connect with me",
    body: "Open to new opportunities. Send a question, or just say hi, and I will get back to you.",
    emailCta: "Send an email",
    copyCta: "Copy email",
    copiedCta: "Email copied",
  },
  footer: {
    ariaLabel: "Footer links",
    links: [
      { label: "GitHub", href: "https://github.com/caiostato", external: true },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/caiostato",
        external: true,
      },
      { label: "How I work", href: "#philosophy", external: false },
    ],
    privacy: "Privacy Policy",
    cookieSettings: "Cookie Settings",
    copyright: "© 2026 Caio Stato",
  },
  cookieBanner: {
    badge: "PRIVACY // TELEMETRY",
    title: "Telemetry & Cookie Preferences",
    message:
      "This portfolio uses privacy-friendly anonymous telemetry (Vercel Analytics) to measure performance, load times, and Core Web Vitals. No personally identifiable information, persistent IP addresses, or cross-site advertising trackers are used.",
    accept: "Accept",
    decline: "Decline",
    learnMore: "Privacy Policy",
  },
  privacy: {
    metaTitle: "Privacy Policy | Caio Stato",
    metaDescription:
      "Full transparency on telemetry, cookies, and data practices across Caio Stato's portfolio. Compliant with LGPD and GDPR standards.",
    badge: "COMPLIANCE // LGPD & GDPR",
    title: "Privacy Policy",
    lastUpdated: "Last updated: March 2026",
    intro:
      "Privacy and transparency are core foundations of sound software engineering. This document details how this site collects, processes, and protects data during your visit, adhering strictly to the Brazilian General Data Protection Law (LGPD - Law 13.709/2018) and the European General Data Protection Regulation (GDPR - Regulation EU 2016/679).",
    backToHome: "Return to Home",
    manageCookiesCta: "Reconfigure cookie preferences",
    sections: [
      {
        id: "data-collection",
        title: "1. Data Collection & Telemetry",
        paragraphs: [
          "This portfolio practices strict data minimization (Privacy by Design). We do not require account creation, logins, or submission of sensitive personal data.",
          "Only when you explicitly provide consent, we utilize Vercel Analytics to monitor purely technical application performance metrics, including:",
        ],
        bulletPoints: [
          "Performance metrics and Core Web Vitals (LCP, FID/INP, CLS);",
          "Visited routes and pages within the domain;",
          "Device category, approximate viewport resolution, and browser version;",
          "Country of origin (derived without retaining your raw IP address).",
        ],
      },
      {
        id: "purpose-legal-basis",
        title: "2. Purpose & Legal Basis (LGPD / GDPR)",
        paragraphs: [
          "The processing of technical data serves solely to evaluate operational stability, responsiveness, and performance across diverse environments.",
          "Under LGPD (Art. 7, I) and GDPR (Art. 6(1)(a)), telemetry metric collection relies entirely on your explicit, freely given consent. For strictly essential functionality (such as persisting your consent and locale preference), we rely on legitimate interest under LGPD (Art. 7, IX).",
        ],
      },
      {
        id: "cookies-storage",
        title: "3. Local Storage & Cookies",
        paragraphs: [
          "This site does not use third-party tracking cookies, social media pixels, or behavioral advertising trackers.",
          "We exclusively leverage the browser's local storage (localStorage) for client-side state preferences:",
        ],
        bulletPoints: [
          "caio_consent_analytics: persists your preference ('granted' or 'denied') for the telemetry banner;",
          "Locale preference: represented cleanly in the canonical URL path (/ or /en-us).",
        ],
      },
      {
        id: "user-rights",
        title: "4. User Rights",
        paragraphs: [
          "In full compliance with LGPD Article 18 and GDPR Articles 15 through 22, you retain complete authority over your preferences and data:",
        ],
        bulletPoints: [
          "Revoke previously granted consent at any time via the cookie settings button in the footer;",
          "Clear saved preferences directly in your browser by clearing cache and localStorage in developer tools;",
          "Request verification or additional clarification regarding infrastructure architecture.",
        ],
      },
      {
        id: "security",
        title: "5. Security & Data Retention",
        paragraphs: [
          "All connections are secured using end-to-end HTTPS/TLS 1.3 encryption with strict Content Security policies. Aggregated statistical data contains no persistent user identifiers and is processed across Vercel's global edge infrastructure.",
        ],
      },
    ],
    contact: {
      title: "6. Data Controller & Contact Information",
      text: "For questions, feedback, or inquiries regarding privacy and technical governance of this project, reach out directly to the engineer:",
      email: "caiobnstato@gmail.com",
      buttonLabel: "Send email",
    },
  },
};

export default dictionary;
