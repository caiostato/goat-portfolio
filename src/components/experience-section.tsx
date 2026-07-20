import type { Dictionary } from "@/dictionaries/types";

export function ExperienceSection({ dict }: { dict: Dictionary["experience"] }) {
  return (
    <section id="experience" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <header className="mb-12 flex items-end justify-between">
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {dict.heading}
          </h2>
          <span className="font-mono text-sm text-muted-foreground">
            {dict.index}
          </span>
        </header>

        <div className="flex flex-col">
          {dict.items.map((exp) => (
            <article
              key={exp.company}
              className="grid gap-6 border-t border-border py-10 md:grid-cols-[1fr_2fr] md:gap-12"
            >
              <div className="flex flex-col gap-1">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {exp.company}
                </h3>
                <p className="text-sm font-medium text-accent">{exp.role}</p>
                <p className="font-mono text-xs text-muted-foreground">
                  {exp.period}
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <ul className="flex flex-col gap-3">
                  {exp.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-pretty text-sm leading-relaxed text-muted-foreground"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border px-2 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
