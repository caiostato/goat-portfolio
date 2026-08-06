import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Space_Grotesk, Geist, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { htmlLangMap, isLocale, locales } from "@/i18n/config";
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

  return {
    title: dict.meta.title,
    description: dict.meta.description,
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
  themeColor: "#0b0b0d",
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
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
