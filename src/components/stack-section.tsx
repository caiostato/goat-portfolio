import { Section, SectionHeader } from "@/components/ui/section";
import type { Dictionary } from "@/dictionaries/types";

export function StackSection({ dict }: { dict: Dictionary["stack"] }) {
  return (
    <Section id="stack" rhythm="quiet" surface="hairline">
      <SectionHeader heading={dict.heading} />

      <ul className="reveal flex flex-wrap gap-2.5">
        {dict.items.map((tech) => (
          <li
            key={tech}
            className="type-mono rounded-lg border border-border bg-card px-3.5 py-2 text-foreground-subtle transition-colors duration-200 hover:border-brand-border hover:text-brand"
          >
            {tech}
          </li>
        ))}
      </ul>
    </Section>
  );
}
