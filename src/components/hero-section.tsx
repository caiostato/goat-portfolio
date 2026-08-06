import { ArrowRight } from "lucide-react";

import type { Dictionary } from "@/dictionaries/types";

/**
 * A typographic masthead. No image, so the headline has to do the work: it
 * runs near the full width of the container at display scale, with rules and
 * mono labels giving the section its structure the way a printed nameplate
 * would.
 *
 * The three blocks are pushed apart to fill the viewport rather than stacked
 * with fixed gaps, so the type reads as a poster on a laptop and still
 * collapses sensibly on a phone.
 */
export function HeroSection({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <section id="top" className="px-6 md:px-8">
      <div className="mx-auto flex min-h-[86svh] w-full max-w-7xl flex-col justify-between gap-14 pt-10 pb-16 md:pt-14">
        <div
          style={{ "--enter-delay": "0ms" } as React.CSSProperties}
          className="enter flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-b border-border pb-5"
        >
          <span className="type-label text-foreground-subtle">{dict.role}</span>

          {/* Availability stated on the record, not badged with a blinking dot. */}
          <span className="type-label flex items-center gap-3 text-brand">
            <span className="h-px w-8 bg-brand" aria-hidden="true" />
            {dict.badge}
          </span>
        </div>

        <h1
          style={{ "--enter-delay": "80ms" } as React.CSSProperties}
          className="enter type-hero max-w-[14ch] text-balance text-foreground"
        >
          {dict.heading}
        </h1>

        <div className="grid gap-10 border-t border-border pt-8 md:grid-cols-12">
          <p
            style={{ "--enter-delay": "160ms" } as React.CSSProperties}
            className="enter type-lead text-pretty text-muted-foreground md:col-span-6 lg:col-span-5"
          >
            {dict.subtitle}
          </p>

          <div
            style={{ "--enter-delay": "240ms" } as React.CSSProperties}
            className="enter flex md:col-span-5 md:col-start-8 md:justify-end"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-3 border-b-2 border-brand pb-1.5 font-display text-xl font-semibold tracking-tight text-foreground transition-colors duration-200 hover:text-brand md:text-2xl"
            >
              {dict.ctaPrimary}
              <ArrowRight
                className="h-5 w-5 text-brand transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transform-none"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
