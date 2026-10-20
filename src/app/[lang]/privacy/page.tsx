import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  Shield,
  Lock,
  CheckCircle2,
} from "lucide-react";
import { isLocale, locales, localePath, localeLabels } from "@/i18n/config";
import { getDictionary } from "../dictionaries";
import { SiteFooter } from "@/components/site-footer";
import { ManageCookiesButton } from "@/components/manage-cookies-button";
import { cn } from "@/lib/utils";

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
    title: dict.privacy.metaTitle,
    description: dict.privacy.metaDescription,
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const homeHref = localePath(lang);

  return (
    <div className="min-h-dvh bg-background text-foreground">
      {/* Header Navigation */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link
            href={homeHref}
            className="group flex items-center gap-2.5 text-foreground transition-colors hover:text-brand"
          >
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 bg-brand transition-transform duration-200 group-hover:scale-125"
            />
            <span className="type-label text-xs font-bold tracking-[0.18em]">
              CAIO STATO
            </span>
          </Link>

          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href={homeHref}
              className="inline-flex items-center gap-1.5 type-label text-xs text-muted-foreground transition-colors hover:text-brand"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{dict.privacy.backToHome}</span>
            </Link>

            {/* Locale switch between /privacy and /en-us/privacy */}
            <div className="type-label flex items-center rounded-full border border-border bg-card/60 px-2 py-1 text-[10px] text-muted-foreground">
              {locales.map((locale, index) => {
                const targetHref = locale === "en-us" ? "/en-us/privacy" : "/privacy";
                const isActive = locale === lang;

                return (
                  <span key={locale} className="flex items-center">
                    {index > 0 && (
                      <span aria-hidden="true" className="mx-1 text-border-strong">
                        /
                      </span>
                    )}
                    <Link
                      href={targetHref}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "rounded px-1.5 py-0.5 transition-colors",
                        isActive
                          ? "font-bold text-brand"
                          : "hover:text-foreground"
                      )}
                    >
                      {localeLabels[locale]}
                    </Link>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto max-w-4xl px-6 py-12 sm:py-16 md:py-20 outline-none"
      >
        {/* Badge & Title */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3 py-1 font-mono text-xs font-semibold text-brand">
            <Shield className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{dict.privacy.badge}</span>
          </div>

          <h1 className="type-display mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {dict.privacy.title}
          </h1>

          <p className="type-mono mt-2 text-xs text-muted-foreground">
            {dict.privacy.lastUpdated}
          </p>

          <div className="mt-6 rounded-xl border border-border/80 bg-card/40 p-5 backdrop-blur-sm sm:p-6">
            <div className="flex items-start gap-3">
              <Lock className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              <p className="type-lead text-sm sm:text-base text-foreground-subtle leading-relaxed">
                {dict.privacy.intro}
              </p>
            </div>
          </div>
        </div>

        {/* Structured Sections */}
        <div className="space-y-8">
          {dict.privacy.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="rounded-2xl border border-border/80 bg-card/60 p-6 sm:p-8 backdrop-blur-sm transition-colors hover:border-border-strong"
            >
              <h2 className="type-h3 text-lg font-bold text-foreground sm:text-xl flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-brand"
                />
                {section.title}
              </h2>

              <div className="mt-4 space-y-3.5">
                {section.paragraphs.map((paragraph, pIdx) => (
                  <p
                    key={pIdx}
                    className="type-body text-sm sm:text-[15px] text-muted-foreground leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.bulletPoints && section.bulletPoints.length > 0 && (
                  <ul className="mt-3.5 space-y-2 border-l border-border pl-4 sm:pl-5">
                    {section.bulletPoints.map((point, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground-subtle"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>

        {/* Interactive Consent Control Card */}
        <div className="my-10 rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/5 via-card to-card p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <span className="type-label text-xs font-semibold text-brand">
                [SETTINGS_CONTROL]
              </span>
              <h3 className="type-h3 text-base sm:text-lg font-bold text-foreground">
                {lang === "en-us" ? "Telemetry Controls" : "Controle de Telemetria"}
              </h3>
              <p className="type-body text-xs sm:text-sm text-muted-foreground">
                {lang === "en-us"
                  ? "Adjust or revoke your analytics consent settings at any time."
                  : "Altere ou revogue a qualquer momento o seu consentimento de métricas anônimas."}
              </p>
            </div>

            <ManageCookiesButton
              label={dict.privacy.manageCookiesCta}
              className="shrink-0"
            />
          </div>
        </div>

        {/* Contact Information Card */}
        <section className="rounded-2xl border border-border/80 bg-card/60 p-6 sm:p-8 backdrop-blur-sm">
          <h2 className="type-h3 text-lg font-bold text-foreground sm:text-xl flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-brand"
            />
            {dict.privacy.contact.title}
          </h2>

          <p className="type-body mt-3 text-sm sm:text-[15px] text-muted-foreground leading-relaxed">
            {dict.privacy.contact.text}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${dict.privacy.contact.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2 type-label text-xs font-bold text-brand-foreground transition-[background-color,transform] hover:bg-brand-strong active:scale-[0.98]"
            >
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{dict.privacy.contact.buttonLabel}</span>
            </a>

            <span className="type-mono rounded-lg border border-border bg-background/60 px-3.5 py-2 text-xs text-foreground-subtle select-all">
              {dict.privacy.contact.email}
            </span>
          </div>
        </section>

        {/* Bottom Home CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href={homeHref}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/80 px-6 py-2.5 type-label text-xs font-semibold text-foreground transition-colors hover:border-brand hover:text-brand"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>{dict.privacy.backToHome}</span>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <SiteFooter dict={dict.footer} lang={lang} />
    </div>
  );
}
