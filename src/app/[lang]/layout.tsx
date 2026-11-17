import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Space_Grotesk, Geist, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { htmlLangMap, isLocale, locales } from "@/i18n/config";
import { CookieBanner } from "@/components/cookie-banner";
import { StructuredData } from "@/components/structured-data";
import {
  GoogleAnalytics,
  GoogleTagManagerNoscript,
} from "@/components/google-analytics";
import { getDictionary } from "./dictionaries";

// Three families, three jobs: Geist reads body copy, Space Grotesk carries the
// headlines, JetBrains Mono handles the labels and metrics.
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  const canonicalUrl =
    lang === "pt-br" ? "https://caiostato.dev" : "https://caiostato.dev/en-us";

  return {
    metadataBase: new URL("https://caiostato.dev"),
    title: {
      default: dict.meta.title,
      template: "%s | Caio Stato",
    },
    description: dict.meta.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "pt-BR": "https://caiostato.dev",
        "en-US": "https://caiostato.dev/en-us",
        "x-default": "https://caiostato.dev",
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: canonicalUrl,
      siteName: "Caio Stato",
      locale: lang === "pt-br" ? "pt_BR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      creator: "@caiostato",
    },
    authors: [{ name: "Caio Stato", url: "https://caiostato.dev" }],
    creator: "Caio Stato",
    icons: {
      icon: [
        {
          url: "/icon-light-32x32.png",
          media: "(prefers-color-scheme: light)",
        },
        {
          url: "/icon-dark-32x32.png",
          media: "(prefers-color-scheme: dark)",
        },
        {
          url: "/icon.svg",
          type: "image/svg+xml",
        },
      ],
      apple: "/apple-icon.png",
    },
  };
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#351E28",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <html
      lang={htmlLangMap[lang]}
      /*
       * Scroll reveal is armed here, in the server-rendered markup, rather
       * than by a script that mutates <html> before hydration: that mutation
       * is invisible to the server render and React reports it as a
       * hydration mismatch.
       */
      data-reveal="on"
      className={cn(
        "dark",
        "bg-background",
        "font-sans",
        geist.variable,
        spaceGrotesk.variable,
        jetbrainsMono.variable
      )}
    >
      <head>
        {/*
          The reveal styles hide content until JavaScript marks it visible, so
          without scripting they would hide it permanently. This hands those
          visitors the finished state instead.
        */}
        <noscript>
          <style>{`[data-reveal="on"] .reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="antialiased">
        <GoogleTagManagerNoscript gtmId="GTM-KK2357RC" />
        <StructuredData lang={lang} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-brand focus:px-4 focus:py-2.5 focus:font-mono focus:text-xs focus:font-bold focus:tracking-wider focus:text-brand-foreground focus:shadow-2xl focus:outline-2 focus:outline-offset-2 focus:outline-foreground"
        >
          {lang === "pt-br"
            ? "Pular para o conteúdo principal"
            : "Skip to main content"}
        </a>
        {children}
        <CookieBanner lang={lang} dict={dict.cookieBanner}>
          {process.env.NODE_ENV === "production" && <Analytics />}
          <GoogleAnalytics gaId="G-TG4J7QNZJC" gtmId="GTM-KK2357RC" />
        </CookieBanner>
      </body>
    </html>
  );
}
