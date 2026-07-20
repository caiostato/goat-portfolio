import type { Dictionary } from "@/dictionaries/types";

export function StackSection({ dict }: { dict: Dictionary["stack"] }) {
  return (
    <section id="stack" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <header className="mb-12 flex items-end justify-between">
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {dict.heading}
          </h2>
          <span className="font-mono text-sm text-muted-foreground">
            {dict.index}
          </span>
        </header>

        <ul className="flex flex-wrap gap-3">
          {dict.items.map((tech) => (
            <li
              key={tech}
              className="rounded-lg border border-border bg-card px-4 py-2 font-mono text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
