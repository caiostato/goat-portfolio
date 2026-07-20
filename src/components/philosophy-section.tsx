import type { Dictionary } from "@/dictionaries/types";

export function PhilosophySection({ dict }: { dict: Dictionary["philosophy"] }) {
  return (
    <section id="philosophy" className="border-b border-border bg-card/40">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <span className="font-mono text-sm text-accent">{dict.label}</span>
        <blockquote className="mt-6 text-balance font-display text-2xl font-medium leading-snug text-foreground sm:text-3xl">
          &ldquo;{dict.quote}&rdquo;
        </blockquote>
      </div>
    </section>
  );
}
