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
    ctaPrimary: "See the work",
    role: "Frontend Engineer",
    stats: [
      { value: "4+", label: "Years shipping frontend" },
      { value: "30%", label: "Operational efficiency gain" },
      { value: "99.9%", label: "System reliability" },
    ],
  },
  projects: {
    heading: "Selected projects",
    description:
      "Two projects where the frontend work had a number attached to it.",
    items: [
      {
        title: "Cerasos sales platform",
        description:
          "Pharmacy sales platform that runs on WhatsApp. Customers message, the Uazapi integration answers and creates the order, and Getnet handles payment from tokenization through the webhook that confirms it. An admin dashboard sits on top for order tracking, sales figures, and customer ratings.",
        role: "Fullstack Engineer",
        period: "2025",
        metrics: [
          { value: "99.9%", label: "System reliability" },
          { value: "100%", label: "Orders automated" },
        ],
        tags: ["Next.js", "TypeScript", "Getnet", "Uazapi"],
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
    viewLive: "Visit site",
    viewRepo: "Source",
    liveLabel: "Live",
    privateLabel: "Private work",
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
    heading: "Let's talk",
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
    copyright: "© 2026 Caio Stato",
  },
};

export default dictionary;
