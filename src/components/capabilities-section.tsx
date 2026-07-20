import { Code2, CreditCard, LayoutTemplate } from "lucide-react";
import type { Dictionary } from "@/dictionaries/types";

const icons = [Code2, CreditCard, LayoutTemplate];

export function CapabilitiesSection({
  dict,
}: {
  dict: Dictionary["capabilities"];
}) {
  return (
    <section id="capabilities" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <header className="mb-12 flex items-end justify-between">
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {dict.heading}
          </h2>
          <span className="font-mono text-sm text-muted-foreground">
            {dict.index}
          </span>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          {dict.items.map((capability, index) => {
            const Icon = icons[index];
            return (
              <div key={capability.title} className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card text-accent">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {capability.title}
                </h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  {capability.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
