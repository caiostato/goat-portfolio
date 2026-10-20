import { Section, SectionHeader } from "@/components/ui/section";
import type { Dictionary } from "@/dictionaries/types";

export function ExperienceSection({ dict }: { dict: Dictionary["experience"] }) {
  return (
    <Section id="experience" rhythm="standard" surface="raised">
      <SectionHeader index="03" code="EXPERIENCE" heading={dict.heading} />

      <ol className="flex flex-col">
        {dict.items.map((exp) => {
          const isCurrent =
            exp.period.toLowerCase().includes("present") ||
            exp.period.toLowerCase().includes("presente");

          return (
            <li
              key={`${exp.company}-${exp.period}`}
              className="reveal group grid gap-6 border-t border-border/70 py-10 first:border-t-0 first:pt-0 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-14"
            >
              {/* Left sticky company meta */}
              <div className="flex flex-col gap-2 md:sticky md:top-24 md:self-start">
                <div className="flex items-center gap-2.5">
                  <h3 className="type-h3 text-foreground">
                    {exp.company}
                    {isCurrent ? (
                      <span className="sr-only">
                        {" "}
                        ({exp.period.toLowerCase().includes("presente")
                          ? "Cargo atual"
                          : "Current position"})
                      </span>
                    ) : null}
                  </h3>
                  {isCurrent ? (
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 rounded-full bg-brand"
                    />
                  ) : null}
                </div>
                <p className="text-sm font-medium text-brand">{exp.role}</p>
                <p className="type-label text-muted-foreground">{exp.period}</p>
              </div>

              {/* Right highlights & stack */}
              <div className="flex flex-col gap-6">
                <ul className="flex flex-col gap-3.5">
                  {exp.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="type-body flex gap-3.5 text-pretty text-muted-foreground"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <ul className="flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <li
                      key={tech}
                      className="type-mono rounded-md border border-border/80 bg-card/40 px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
