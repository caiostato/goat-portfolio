"use client";

import { useEffect, useRef, useState } from "react";

import { MobileNav } from "@/components/mobile-nav";
import { locales, localeLabels, localePath, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/dictionaries/types";

/** How far the page scrolls before the bar detaches into a floating capsule. */
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

      <div
        className="sticky top-0 z-50 box-border"
        style={{
          padding: floating ? "10px clamp(12px, 3.5vw, 32px)" : "0px",
          transition: settled ? `padding ${MORPH}` : "none",
        }}
      >
        <header
          className="mx-auto flex items-center justify-between gap-3 backdrop-blur-md backdrop-saturate-150 sm:gap-4 md:gap-6"
          style={{
            padding: floating
              ? "8px 10px 8px 16px"
              : "12px clamp(16px, 4vw, 48px)",
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
            className="hidden items-center gap-6 lg:gap-8 md:flex"
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

          <div className="flex shrink-0 items-center gap-3 md:gap-4">
            <LocaleSwitcher lang={lang} />

            <a
              href="#connect"
              className="hidden items-center gap-2 rounded-full bg-brand px-4 py-2 text-xs font-semibold tracking-wider whitespace-nowrap text-brand-foreground uppercase transition-[background-color,transform] duration-150 ease-out hover:bg-brand-strong active:scale-[0.97] motion-reduce:transform-none md:inline-flex"
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
    </>
  );
}

function LocaleSwitcher({ lang }: { lang: Locale }) {
  return (
    <nav
      aria-label={lang === "pt-br" ? "Seleção de idioma" : "Language switcher"}
      className="type-label flex items-center rounded-full border border-border bg-card/60 px-2 py-1 text-[10px] text-muted-foreground"
    >
      {locales.map((locale, index) => (
        <span key={locale} className="flex items-center">
          {index > 0 && (
            <span aria-hidden="true" className="mx-1 text-border-strong">
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
