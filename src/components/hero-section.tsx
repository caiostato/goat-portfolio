import { ArrowRight, MapPin } from "lucide-react";

import { HeroInteractiveBg } from "@/components/hero-interactive-bg";
import type { Dictionary } from "@/dictionaries/types";

/**
 * Clean, open Hero Section with live interactive kinetic grid canvas.
 *
 * - No right-side panel: the interactive background canvas has room to breathe
 *   and respond to the cursor across the entire stage.
 * - Primary CTA + direct email (`caiobnstato@gmail.com`).
 */
export function HeroSection({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/70 px-5 sm:px-6 md:px-8"
    >
      <HeroInteractiveBg />

      <div className="relative z-10 mx-auto flex min-h-[78svh] w-full max-w-6xl flex-col justify-between gap-8 pt-7 pb-12 sm:gap-14 sm:pt-10 sm:pb-20 md:min-h-[84svh] md:pt-16 md:pb-24">
        {/* Top Meta & Status Row: single minimal eyebrow on mobile, dual pills on sm+ */}
        <div
          style={{ "--enter-delay": "0ms" } as React.CSSProperties}
          className="enter"
        >
          {/* Mobile: single crisp status + role line (no stacked double badges) */}
          <div className="flex items-center gap-2.5 sm:hidden">
            <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            <span className="type-mono text-xs font-medium text-foreground-subtle">
              {dict.role} <span className="text-brand">·</span> São Paulo, BR
            </span>
          </div>

          {/* Tablet / Desktop: dual floating pills */}
          <div className="hidden flex-wrap items-center justify-between gap-4 sm:flex">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-card/85 px-3.5 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              <span className="type-label text-[11px] text-foreground">
                {dict.badge}
              </span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-3.5 py-1.5 text-muted-foreground backdrop-blur-md">
              <MapPin
                className="h-3.5 w-3.5 shrink-0 text-brand"
                aria-hidden="true"
              />
              <span className="type-mono text-xs">
                {dict.role} · São Paulo, BR
              </span>
            </div>
          </div>
        </div>

        {/* Main Typographic Stage */}
        <div className="flex flex-col items-start gap-5 py-2 sm:gap-8 sm:py-4">
          <h1
            style={{ "--enter-delay": "0ms" } as React.CSSProperties}
            className="enter type-hero max-w-[16ch] text-balance text-foreground"
          >
            {dict.heading}
          </h1>

          <p
            style={{ "--enter-delay": "120ms" } as React.CSSProperties}
            className="enter type-lead max-w-2xl text-pretty text-muted-foreground"
          >
            {dict.subtitle}
          </p>

          <div
            style={{ "--enter-delay": "180ms" } as React.CSSProperties}
            className="enter flex w-full flex-col items-stretch gap-3 pt-1 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-3.5 sm:pt-2"
          >
            <a
              href="#work"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground transition-[background-color,transform] duration-150 ease-out hover:bg-brand-strong active:translate-y-px sm:w-auto motion-reduce:transform-none"
            >
              <span>{dict.ctaPrimary}</span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transform-none"
                aria-hidden="true"
              />
            </a>

            <a
              href="mailto:caiobnstato@gmail.com"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border-strong bg-card/80 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur-md transition-colors duration-150 hover:border-brand-border hover:text-brand sm:w-auto"
            >
              <span>caiobnstato@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Bottom Metrics Row — single horizontal 3-column row on both mobile and desktop */}
        {dict.stats.length > 0 ? (
          <dl
            aria-label="Key figures"
            style={{ "--enter-delay": "240ms" } as React.CSSProperties}
            className="enter grid grid-cols-3 gap-2 border-t border-border/80 pt-6 sm:gap-6 sm:pt-10"
          >
            {dict.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex min-w-0 flex-col-reverse justify-end gap-1 rounded-xl border border-transparent py-1 transition-colors sm:gap-1.5 sm:p-2 sm:hover:border-border/60 sm:hover:bg-card/40"
              >
                <dt className="text-[11px] leading-snug text-muted-foreground sm:font-mono sm:text-[11px] sm:tracking-[0.14em] sm:uppercase">
                  {stat.label}
                </dt>
                <dd className="font-mono text-2xl font-bold tracking-tight text-foreground tabular-nums sm:text-[clamp(1.75rem,1.35rem+1.4vw,2.5rem)]">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </section>
  );
}
