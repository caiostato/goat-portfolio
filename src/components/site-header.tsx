"use client";

import { useEffect, useRef, useState } from "react";

import { MobileNav } from "@/components/mobile-nav";
import { locales, localeLabels, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/dictionaries/types";

/** How far the page scrolls before the bar detaches into a pill. */
const DETACH_DISTANCE_PX = 40;

const MORPH = "420ms var(--ease-in-out)";

export function SiteHeader({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary["nav"];
}) {
  const [floating, setFloating] = useState(false);
  /** A page loaded already scrolled would otherwise play the whole morph on arrival. */
  const [settled, setSettled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    /*
     * A sentinel at the top of the document stands in for a scroll listener:
     * once it leaves the viewport the page has passed DETACH_DISTANCE_PX. Same
     * threshold, but the browser does the watching instead of a handler that
     * runs on every scroll frame.
     */
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

  return (
    <>
      {/* Negative margin cancels the height, so this measures without occupying space. */}
      <div
        ref={sentinelRef}
        aria-hidden="true"
        className="pointer-events-none"
        style={{
          height: `${DETACH_DISTANCE_PX}px`,
          marginBottom: `-${DETACH_DISTANCE_PX}px`,
        }}
      />

      <div
        className="sticky top-0 z-50 box-border"
        style={{
          padding: floating ? "12px clamp(16px, 4vw, 48px)" : "0px",
          transition: settled ? `padding ${MORPH}` : "none",
        }}
      >
        <header
          className="mx-auto flex items-center justify-between gap-4 backdrop-blur-[14px] backdrop-saturate-150 md:gap-6"
          style={{
            padding: floating
              ? "10px 12px 10px 20px"
              : "14px clamp(16px, 4vw, 48px)",
            borderRadius: floating ? "999px" : "0px",
            maxWidth: floating ? "1000px" : "100%",
            background: floating
              ? "color-mix(in oklab, var(--card) 82%, transparent)"
              : "color-mix(in oklab, var(--background) 88%, transparent)",
            border: `1px solid ${floating ? "var(--border)" : "transparent"}`,
            boxShadow: floating
              ? "0 14px 40px oklch(0 0 0 / 0.45)"
              : "0 1px 0 var(--border)",
            transition: settled
              ? `padding ${MORPH}, border-radius ${MORPH}, max-width ${MORPH}, background 300ms ease, border-color 300ms ease, box-shadow ${MORPH}`
              : "none",
          }}
        >
          <a
            href="#top"
            className="type-label shrink-0 text-sm font-bold text-foreground transition-colors hover:text-brand"
          >
            CAIO STATO
          </a>

          <nav
            aria-label={dict.ariaLabel}
            className="hidden items-center gap-7 md:flex"
          >
            {dict.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-3 md:gap-4">
            <LocaleSwitcher lang={lang} />

            <a
              href="#connect"
              className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-brand-foreground transition-[background-color,transform] duration-[160ms] ease-out hover:bg-brand-strong active:scale-[0.97] motion-reduce:transform-none md:inline-block"
            >
              {dict.contact}
            </a>

            <MobileNav dict={dict} lang={lang} />
          </div>
        </header>
      </div>
    </>
  );
}

function LocaleSwitcher({ lang }: { lang: Locale }) {
  return (
    <div className="type-label flex items-center gap-1.5 text-muted-foreground">
      {locales.map((locale, index) => (
        <span key={locale} className="flex items-center gap-1.5">
          {index > 0 && (
            <span aria-hidden="true" className="text-border-strong">
              /
            </span>
          )}
          <a
            href={`/${locale}`}
            aria-current={locale === lang ? "page" : undefined}
            className={cn(
              "transition-colors",
              locale === lang ? "text-foreground" : "hover:text-foreground",
            )}
          >
            {localeLabels[locale]}
          </a>
        </span>
      ))}
    </div>
  );
}
