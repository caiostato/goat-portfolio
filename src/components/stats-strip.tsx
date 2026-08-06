import { Section } from "@/components/ui/section";
import type { Dictionary } from "@/dictionaries/types";

/*
 * These numbers used to sit inside the hero, which pushed it past the one
 * message it should carry. They read better as their own quiet band directly
 * under it.
 */
export function StatsStrip({ dict }: { dict: Dictionary["hero"]["stats"] }) {
  if (dict.length === 0) return null;

  return (
    <Section rhythm="quiet" surface="hairline" aria-label="Key figures">
      <dl className="reveal-stagger grid gap-8 sm:grid-cols-3">
        {dict.map((stat) => (
          <div key={stat.label} className="reveal flex flex-col-reverse gap-2">
            <dt className="type-label text-muted-foreground">{stat.label}</dt>
            <dd className="type-metric text-foreground">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
