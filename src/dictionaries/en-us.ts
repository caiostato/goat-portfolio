import type { Dictionary } from "./types";

const dictionary: Dictionary = {
  meta: {
    title: "Caio Stato — Frontend Engineer | React & Next.js",
    description:
      "Caio Stato's portfolio, a Frontend Engineer with 4+ years of experience building high-performance applications with React and Next.js for fintech platforms and digital products.",
  },
  nav: {
    ariaLabel: "Main navigation",
    items: [
      { label: "Experience", href: "#experience" },
      { label: "Capabilities", href: "#capabilities" },
      { label: "Stack", href: "#stack" },
      { label: "Info", href: "#philosophy" },
    ],
    contact: "Contact",
  },
  hero: {
    badge: "Available for new projects",
    heading: "High-performance React & Next.js architecture",
    subtitle:
      "Frontend Engineer with 4+ years building scalable fintech platforms and digital products, focused on performance, clean architecture, and design systems.",
    ctaPrimary: "View my experience",
    ctaSecondary: "Get in touch",
    heroAlt:
      "Abstract 3D rendering representing software engineering and product design",
  },
  experience: {
    heading: "Professional Experience",
    index: "02",
    items: [
      {
        company: "Cerasos",
        period: "Dec 2025 — Present",
        role: "Fullstack Engineer",
        highlights: [
          "Spearheaded the development of an automated pharmacy sales platform by integrating WhatsApp (via Uazapi), enabling automated customer interactions, real-time responses, and instant order creation.",
          "Architected an end-to-end payment processing engine with Next.js, TypeScript, and the Getnet API, implementing secure tokenization, custom checkout flows, and real-time webhook listeners for status updates.",
          "Engineered an administrative dashboard for sales and customer feedback, centralizing order tracking, sales analytics, and customer rating metrics to streamline pharmacy operations.",
          "Maintained full-stack infrastructure and deployment pipelines, managing server hosting, database synchronization, API orchestration, and comprehensive testing suites to ensure 99.9% system reliability.",
        ],
        stack: ["Next.js", "TypeScript", "Getnet", "Uazapi"],
      },
      {
        company: "Ziion Tech",
        period: "Feb 2025 — Present",
        role: "Frontend Engineer",
        highlights: [
          "Engineered a scalable property showcase web application using Next.js and Tailwind CSS, optimizing Core Web Vitals and significantly reducing initial page load times.",
          "Built a modular, reusable internal UI component library, accelerating future feature deployment velocity by an estimated 20%.",
          "Developed a centralized administrative dashboard for employee management, streamlining operations and internal data visualization.",
          "Implemented automated unit testing workflows using Jest, raising core code coverage and ensuring interface stability.",
        ],
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Jest"],
      },
      {
        company: "eAcademy",
        period: "Jun 2024 — Nov 2024",
        role: "Frontend Engineer",
        highlights: [
          "Developed user-centered web applications for time scheduling and interactive calendar views using Next.js and Shadcn UI.",
          "Built dynamic data dashboards utilizing Redux and Framer Motion, collaborating with backend engineers to map robust API contracts.",
          "Automated frontend testing blocks within CI/CD pipelines, reducing manual verification efforts and securing stable software releases.",
          "Enforced high code quality standards through detailed code reviews, comprehensive documentation, and clean architecture practices.",
        ],
        stack: ["Next.js", "Redux", "Shadcn UI", "Framer Motion"],
      },
      {
        company: "AR3 Capital",
        period: "Oct 2022 — Feb 2024",
        role: "Frontend Engineer",
        highlights: [
          "Spearheaded core client-side development to centralize internal financial services, maximizing platform stability and workflow speed.",
          "Streamlined complex database lookups and internal reporting engines, driving a documented 30% increase in operational efficiency.",
          "Designed and published an enterprise-wide UI library via Storybook, ensuring strong brand and design consistency across 100% of views.",
          "Maintained complete frontend project ownership in high-responsibility scenarios while aligning directly with cross-functional product squads.",
        ],
        stack: ["React", "Storybook", "TypeScript", "REST APIs"],
      },
      {
        company: "RN3",
        period: "Apr 2023 — Oct 2023",
        role: "Software Engineer (Full Stack)",
        highlights: [
          "Successfully migrated legacy data modules from Angular to a modern, responsive stack powered by Next.js and Node.js.",
          "Engineered secure full-stack features integrating commercial payment systems via Stripe and interactive business analytics tools.",
          "Optimized complex PostgreSQL database queries, achieving a documented 25% performance improvement across data retrieval pipelines.",
          "Integrated dynamic Power BI visualization dashboards, reducing data processing overhead and aligning features with UX goals.",
        ],
        stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      },
      {
        company: "Hybank",
        period: "Sep 2021 — Sep 2022",
        role: "Mobile Developer",
        highlights: [
          "Developed cross-platform mobile fintech applications using React Native, delivering a seamless experience across iOS and Android.",
          "Designed a custom mobile design system to scale new UI properties efficiently while cutting future layout development time.",
          "Managed complex application state trees using Redux, connecting client views to transaction-heavy banking REST APIs.",
          "Conducted thorough device usability and performance testing, reducing production errors and improving app store stability.",
        ],
        stack: ["React Native", "Redux", "REST APIs"],
      },
    ],
  },
  capabilities: {
    heading: "Core Capabilities",
    index: "03",
    items: [
      {
        title: "Frontend Engineering",
        description:
          "Building robust, scalable React and Next.js applications, focused on client-side performance optimization, Core Web Vitals, and accessibility.",
      },
      {
        title: "Payments & Fintech",
        description:
          "Payment gateway integration (Stripe, Getnet) from sandbox to production, including tokenization, webhooks, and PCI-compliant checkout flows.",
      },
      {
        title: "Design Systems & Architecture",
        description:
          "Designing reusable component libraries and UI systems with Storybook, applying Clean Architecture and Domain-Driven Design.",
      },
    ],
  },
  stack: {
    heading: "Tech Stack",
    index: "04",
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
    label: "Philosophy",
    quote:
      "I believe in modular, well-thought-out software architecture — Clean Architecture and DDD aren't academic, they're what lets a team ship fast without piling up technical debt. Performance and accessibility are the consequence of well-structured code, not rework at the end.",
  },
  connect: {
    heading: "Let's talk",
    body: "Currently open to new opportunities. If you have a question or just want to say hi, I'll do my best to respond.",
    emailCta: "Send an email",
    copyCta: "Copy email",
    copiedCta: "Email copied!",
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
      { label: "Info", href: "#philosophy", external: false },
    ],
    copyright: "© 2026 Caio Stato",
  },
};

export default dictionary;
