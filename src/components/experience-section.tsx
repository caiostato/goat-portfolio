import { Section, SectionHeader } from "@/components/ui/section";
import type { Dictionary } from "@/dictionaries/types";

export function ExperienceSection({ dict }: { dict: Dictionary["experience"] }) {
  return (
    <Section id="experience" rhythm="standard" surface="hairline">
      <SectionHeader heading={dict.heading} />

      <ol className="flex flex-col">
        {dict.items.map((exp) => (
          <li
            key={`${exp.company}-${exp.period}`}
            className="reveal group grid gap-6 border-t border-border py-10 first:border-t-0 first:pt-0 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-14"
          >
            {/* Company block stays put while the highlights scroll past it. */}
            <div className="flex flex-col gap-2 md:sticky md:top-24 md:self-start">
              <h3 className="type-h3 text-foreground">{exp.company}</h3>
              <p className="text-sm font-medium text-brand">{exp.role}</p>
              <p className="type-label text-muted-foreground">{exp.period}</p>
            </div>

            <div className="flex flex-col gap-6">
              <ul className="flex flex-col gap-3.5">
                {exp.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="type-body flex gap-3.5 text-pretty text-muted-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-brand"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>

              <ul className="flex flex-wrap gap-2">
                {exp.stack.map((tech) => (
                  <li
                    key={tech}
                    className="type-mono rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
