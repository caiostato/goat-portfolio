export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  title: string;
  description: string;
  /** Optional — omit and the card falls back to a typographic layout. */
  image?: string;
  imageAlt?: string;
  role?: string;
  period?: string;
  metrics: ProjectMetric[];
  tags: string[];
  /** Live deployment. When absent the card renders as static content. */
  href?: string;
  repo?: string;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    ariaLabel: string;
    items: { label: string; href: string }[];
    contact: string;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    badge: string;
    heading: string;
    subtitle: string;
    ctaPrimary: string;
    role: string;
    stats: { value: string; label: string }[];
  };
  projects: {
    heading: string;
    description: string;
    items: Project[];
    viewLive: string;
    viewRepo: string;
    liveLabel: string;
    privateLabel: string;
    empty: string;
  };
  experience: {
    heading: string;
    items: {
      company: string;
      period: string;
      role: string;
      highlights: string[];
      stack: string[];
    }[];
  };
  capabilities: {
    heading: string;
    items: { title: string; description: string }[];
  };
  stack: {
    heading: string;
    items: string[];
  };
  philosophy: {
    label: string;
    quote: string;
  };
  connect: {
    heading: string;
    body: string;
    emailCta: string;
    copyCta: string;
    copiedCta: string;
  };
  footer: {
    ariaLabel: string;
    links: { label: string; href: string; external: boolean }[];
    copyright: string;
  };
}
