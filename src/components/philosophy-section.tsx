import { Section } from "@/components/ui/section";
import type { Dictionary } from "@/dictionaries/types";

export function PhilosophySection({ dict }: { dict: Dictionary["philosophy"] }) {
  return (
    <Section
      id="philosophy"
      rhythm="loud"
      surface="raised"
      width="narrow"
      className="border-t border-border/70"
    >
      <figure className="reveal flex flex-col items-center gap-8 text-center">
        <figcaption className="type-label flex items-center gap-2 text-brand">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-brand"
          />
          {dict.label}
        </figcaption>

        <blockquote className="type-h2 text-balance font-medium text-foreground">
          &ldquo;{dict.quote}&rdquo;
        </blockquote>
      </figure>
    </Section>
  );
}
