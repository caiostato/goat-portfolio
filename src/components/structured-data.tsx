import type { Locale } from "@/i18n/config";

interface StructuredDataProps {
  lang: Locale;
}

export function StructuredData({ lang }: StructuredDataProps) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Caio Stato",
      url: "https://caiostato.dev",
      jobTitle: "Frontend Engineer & UI Architect",
      email: "mailto:caiobnstato@gmail.com",
      sameAs: [
        "https://github.com/caiostato",
        "https://linkedin.com/in/caiostato",
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Web Performance",
        "UI Architecture",
        "Design Systems",
        "Fintech Frontend",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Caio Stato | Portfolio",
      url: "https://caiostato.dev",
      inLanguage: lang === "pt-br" ? "pt-BR" : "en-US",
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
