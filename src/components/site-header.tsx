"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";

import { MobileNav } from "@/components/mobile-nav";
import { locales, localeLabels, localePath, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/dictionaries/types";

/** How far the page scrolls before the desktop bar detaches into a floating capsule. */
const DETACH_DISTANCE_PX = 36;

const MORPH = "400ms var(--ease-in-out)";

export function SiteHeader({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary["nav"];
}) {
  const [floating, setFloating] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [connectInView, setConnectInView] = useState(false);
  const [settled, setSettled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFloating(!entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(sentinel);
    const settle = requestAnimationFrame(() => setSettled(true));

    return () => {
      observer.disconnect();
      cancelAnimationFrame(settle);
    };
  }, []);

  useEffect(() => {
    const heroEl = document.getElementById("top");
    const connectEl = document.getElementById("connect");
    if (typeof IntersectionObserver === "undefined") return;

    const heroObserver = heroEl
      ? new IntersectionObserver(
          ([entry]) => setShowStickyCta(!entry.isIntersecting),
          { threshold: 0.1 },
        )
      : null;

    const connectObserver = connectEl
      ? new IntersectionObserver(
          ([entry]) => setConnectInView(entry.isIntersecting),
          { threshold: 0.15 },
        )
      : null;

    if (heroEl && heroObserver) heroObserver.observe(heroEl);
    if (connectEl && connectObserver) connectObserver.observe(connectEl);

    return () => {
      heroObserver?.disconnect();
      connectObserver?.disconnect();
    };
  }, []);

  const mobileBottomCtaVisible = showStickyCta && !connectInView;

  return (
    <>
      <div
        ref={sentinelRef}
        aria-hidden="true"
        className="pointer-events-none"
        style={{
          height: `${DETACH_DISTANCE_PX}px`,
          marginBottom: `-${DETACH_DISTANCE_PX}px`,
        }}
      />

      {/* Mobile Header: Clean, edge-to-edge glass bar (no capsule morph jitter) */}
      <div className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md backdrop-saturate-150 md:hidden">
        <header className="mx-auto flex h-14 items-center justify-between gap-2 px-4">
          <a
            href="#top"
            className="group flex shrink-0 items-center gap-2 text-foreground transition-colors hover:text-brand"
          >
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 bg-brand"
            />
            <span className="type-label text-xs font-bold tracking-[0.16em]">
              CAIO STATO
            </span>
          </a>

          <div className="flex shrink-0 items-center gap-2">
            <LocaleSwitcher lang={lang} />

            <a
              href="#connect"
              className="inline-flex h-8 items-center gap-1.5 rounded-full bg-brand px-3 font-mono text-[10px] font-bold tracking-wider whitespace-nowrap text-brand-foreground uppercase transition-colors hover:bg-brand-strong"
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-brand-foreground"
              />
              {dict.contact}
            </a>

            <MobileNav dict={dict} lang={lang} />
          </div>
        </header>
      </div>

      {/* Desktop Header: Morphing capsule bar */}
      <div
        className="sticky top-0 z-50 hidden box-border md:block"
        style={{
          padding: floating ? "12px clamp(16px, 4vw, 32px)" : "0px",
          transition: settled ? `padding ${MORPH}` : "none",
        }}
      >
        <header
          className="mx-auto flex items-center justify-between gap-6 backdrop-blur-md backdrop-saturate-150"
          style={{
            padding: floating
              ? "10px 12px 10px 20px"
              : "14px clamp(20px, 4vw, 48px)",
            borderRadius: floating ? "999px" : "0px",
            maxWidth: floating ? "1020px" : "100%",
            background: floating
              ? "color-mix(in oklab, var(--card-elevated) 86%, transparent)"
              : "color-mix(in oklab, var(--background) 90%, transparent)",
            border: `1px solid ${floating ? "var(--border-strong)" : "transparent"}`,
            boxShadow: floating
              ? "0 16px 44px oklch(0 0 0 / 0.55)"
              : "0 1px 0 var(--border)",
            transition: settled
              ? `padding ${MORPH}, border-radius ${MORPH}, max-width ${MORPH}, background 260ms ease, border-color 260ms ease, box-shadow ${MORPH}`
              : "none",
          }}
        >
          <a
            href="#top"
            className="group flex shrink-0 items-center gap-2.5 text-foreground transition-colors hover:text-brand"
          >
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 bg-brand transition-transform duration-200 group-hover:scale-125"
            />
            <span className="type-label text-xs font-bold tracking-[0.18em]">
              CAIO STATO
            </span>
          </a>

          <nav
            aria-label={dict.ariaLabel}
            className="flex items-center gap-6 lg:gap-8"
          >
            {dict.items.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                className="group flex items-center gap-1.5 text-sm whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="type-mono text-[10px] text-brand/75 transition-colors group-hover:text-brand">
                  0{idx + 1}
                </span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-4">
            <LocaleSwitcher lang={lang} />

            <a
              href="#connect"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-xs font-semibold tracking-wider whitespace-nowrap text-brand-foreground uppercase transition-[background-color,transform] duration-150 ease-out hover:bg-brand-strong active:scale-[0.97] motion-reduce:transform-none"
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-brand-foreground"
              />
              {dict.contact}
            </a>
          </div>
        </header>
      </div>

      {/* Mobile Floating Sticky Bottom CTA Bar (appears after scrolling past hero, hides at #connect) */}
      <div
        aria-hidden={!mobileBottomCtaVisible}
        className={cn(
          "pointer-events-none fixed inset-x-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 transition-all duration-300 md:hidden",
          mobileBottomCtaVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-6 opacity-0",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-sm items-center justify-between gap-2 rounded-full border border-border-strong bg-card/95 p-1.5 pl-4 shadow-[0_16px_40px_oklch(0_0_0/0.65)] backdrop-blur-md",
            mobileBottomCtaVisible ? "pointer-events-auto" : "pointer-events-none",
          )}
        >
          <div className="flex min-w-0 items-center gap-2">
            <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            <span className="truncate font-mono text-[11px] font-medium text-foreground">
              {lang === "pt-br" ? "Disponível para projetos" : "Available for work"}
            </span>
          </div>

          <div className="flex shrink-0 items-center gap-1.5">
            <a
              href="mailto:caiobnstato@gmail.com"
              aria-label="Email caiobnstato@gmail.com"
              tabIndex={mobileBottomCtaVisible ? 0 : -1}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/80 text-foreground transition-colors hover:border-brand-border hover:text-brand"
            >
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            </a>

            <a
              href="#connect"
              tabIndex={mobileBottomCtaVisible ? 0 : -1}
              className="inline-flex h-9 items-center gap-1.5 rounded-full bg-brand px-4 font-mono text-xs font-bold tracking-wider text-brand-foreground uppercase transition-colors hover:bg-brand-strong"
            >
              <span>{dict.contact}</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function LocaleSwitcher({ lang }: { lang: Locale }) {
  return (
    <nav
      aria-label={lang === "pt-br" ? "Seleção de idioma" : "Language switcher"}
      className="type-label flex h-8 items-center rounded-full border border-border bg-card/60 px-2 text-[10px] text-muted-foreground"
    >
      {locales.map((locale, index) => (
        <span key={locale} className="flex items-center">
          {index > 0 && (
            <span aria-hidden="true" className="mx-0.5 text-border-strong">
              /
            </span>
          )}
          <a
            href={localePath(locale)}
            aria-current={locale === lang ? "page" : undefined}
            aria-label={
              locale === "pt-br"
                ? "PT - Português (Brasil)"
                : "EN - English (US)"
            }
            className={cn(
              "rounded px-1.5 py-0.5 transition-colors",
              locale === lang
                ? "font-bold text-brand"
                : "hover:text-foreground",
            )}
          >
            {localeLabels[locale]}
          </a>
        </span>
      ))}
    </nav>
  );
}
