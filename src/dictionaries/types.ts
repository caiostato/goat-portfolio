export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    ariaLabel: string;
    items: { label: string; href: string }[];
    contact: string;
  };
  hero: {
    badge: string;
    heading: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    heroAlt: string;
  };
  experience: {
    heading: string;
    index: string;
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
    index: string;
    items: { title: string; description: string }[];
  };
  stack: {
    heading: string;
    index: string;
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
