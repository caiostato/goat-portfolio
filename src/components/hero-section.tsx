import { ArrowRight, ArrowUpRight, Mail, MapPin } from "lucide-react";

import { HeroInteractiveBg } from "@/components/hero-interactive-bg";
import type { Dictionary } from "@/dictionaries/types";

/**
 * Clean, open Hero Section with live interactive kinetic grid canvas.
 *
 * - No right-side panel: the interactive background canvas has room to breathe
 *   and respond to the cursor across the entire stage.
 * - Primary CTA (#work) + direct developer connection actions (email, LinkedIn, GitHub).
 */
export function HeroSection({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border px-5 sm:px-6 md:px-8"
    >
      <HeroInteractiveBg />

      <div className="relative z-10 mx-auto flex min-h-[78svh] w-full max-w-6xl flex-col justify-between gap-8 pt-7 pb-12 sm:gap-14 sm:pt-10 sm:pb-20 md:min-h-[84svh] md:pt-16 md:pb-24">
        {/* Top Meta & Status Row: single minimal eyebrow on mobile, quiet dual pills on sm+ */}
        <div
          style={{ "--enter-delay": "0ms" } as React.CSSProperties}
          className="enter"
        >
          {/* Mobile: single crisp status + role line */}
          <div className="flex items-center gap-2.5 sm:hidden">
            <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            <span className="type-mono text-xs font-medium text-foreground-subtle">
              {dict.role} <span className="text-brand">·</span> São Paulo, BR
            </span>
          </div>

          {/* Tablet / Desktop: quiet architectural status pills */}
          <div className="hidden flex-wrap items-center justify-between gap-4 sm:flex">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/60 px-3.5 py-1.5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              <span className="type-label text-[11px] text-foreground-subtle">
                {dict.badge}
              </span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-foreground-subtle backdrop-blur-sm">
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
        <div className="flex flex-col items-start gap-5 py-2 sm:gap-7 sm:py-4">
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
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-brand-foreground shadow-[0_8px_24px_-4px_oklch(0.686_0.206_34.8/0.4)] transition-[background-color,transform,box-shadow] duration-150 ease-out hover:bg-brand-strong hover:shadow-[0_12px_28px_-4px_oklch(0.686_0.206_34.8/0.5)] active:translate-y-px sm:w-auto motion-reduce:transform-none"
            >
              <span>{dict.ctaPrimary}</span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transform-none"
                aria-hidden="true"
              />
            </a>

            <a
              href="mailto:caiobnstato@gmail.com"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-border-strong bg-card/85 px-6 py-3.5 text-sm font-medium text-foreground shadow-[0_4px_16px_oklch(0_0_0/0.25)] backdrop-blur-sm transition-[color,background-color,border-color,transform] duration-150 ease-out hover:border-brand-border hover:bg-card-elevated active:translate-y-px sm:w-auto motion-reduce:transform-none"
            >
              <Mail
                className="h-4 w-4 text-brand transition-transform duration-150 group-hover:scale-105"
                aria-hidden="true"
              />
              <span>caiobnstato@gmail.com</span>
            </a>

            <div className="flex items-center justify-center gap-2 pt-1 sm:pt-0 sm:pl-2">
              <a
                href="https://linkedin.com/in/caiostato"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 rounded-full border border-transparent px-3 py-2 font-mono text-xs font-medium text-muted-foreground transition-colors hover:border-border hover:bg-card/60 hover:text-foreground"
              >
                <span>LinkedIn</span>
                <ArrowUpRight
                  className="h-3.5 w-3.5 text-brand/80 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand"
                  aria-hidden="true"
                />
              </a>
              <span aria-hidden="true" className="text-border-strong">
                ·
              </span>
              <a
                href="https://github.com/caiostato"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 rounded-full border border-transparent px-3 py-2 font-mono text-xs font-medium text-muted-foreground transition-colors hover:border-border hover:bg-card/60 hover:text-foreground"
              >
                <span>GitHub</span>
                <ArrowUpRight
                  className="h-3.5 w-3.5 text-brand/80 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Row — single horizontal 3-column row on both mobile and desktop */}
        {dict.stats.length > 0 ? (
          <dl
            aria-label="Key figures"
            style={{ "--enter-delay": "240ms" } as React.CSSProperties}
            className="enter grid grid-cols-3 gap-2 border-t border-border pt-6 sm:gap-8 sm:pt-8"
          >
            {dict.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex min-w-0 flex-col-reverse justify-end gap-1 py-1 sm:gap-1.5"
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
