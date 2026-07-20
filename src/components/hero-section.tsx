import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/dictionaries/types";

export function HeroSection({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <section id="top" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28 lg:py-32">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
            <span
              className="h-2 w-2 rounded-full bg-emerald-400"
              aria-hidden="true"
            />
            {dict.badge}
          </span>

          <h1 className="text-balance font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {dict.heading}
          </h1>

          <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            {dict.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              {dict.ctaPrimary}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#connect"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {dict.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src="/hero-visual.png"
              alt={dict.heroAlt}
              className="h-full w-full object-cover"
              width={640}
              height={480}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
