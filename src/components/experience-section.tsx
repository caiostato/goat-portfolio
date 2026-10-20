"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { Section, SectionHeader } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/dictionaries/types";

export function ExperienceSection({ dict }: { dict: Dictionary["experience"] }) {
  // On mobile, only the first (most recent) role starts expanded so the section stays compact
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({
    0: true,
  });

  function toggleItem(idx: number) {
    setOpenItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  }

  return (
    <Section id="experience" rhythm="standard" surface="raised">
      <SectionHeader index="03" code="EXPERIENCE" heading={dict.heading} />

      <ol className="flex flex-col">
        {dict.items.map((exp, idx) => {
          const isCurrent =
            exp.period.toLowerCase().includes("present") ||
            exp.period.toLowerCase().includes("presente");
          const isOpen = Boolean(openItems[idx]);

          return (
            <li
              key={`${exp.company}-${exp.period}`}
              className="reveal group border-t border-border/70 py-5 first:border-t-0 first:pt-0 md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-14 md:py-10"
            >
              {/* Mobile collapsible trigger / Desktop sticky company meta */}
              <div className="md:sticky md:top-24 md:self-start">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleItem(idx)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 text-left md:pointer-events-none md:cursor-default"
                >
                  <div className="flex flex-col gap-1.5">
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
                    <p className="type-label text-muted-foreground">
                      {exp.period}
                    </p>
                  </div>

                  {/* Mobile-only expand/collapse indicator */}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-card/80 text-muted-foreground transition-transform duration-200 md:hidden",
                      isOpen && "rotate-180 border-brand-border text-brand",
                    )}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>
              </div>

              {/* Right highlights & stack: collapsible on mobile, always visible on md+ */}
              <div
                className={cn(
                  "flex-col gap-6 pt-5 md:flex md:pt-0",
                  isOpen ? "flex" : "hidden",
                )}
              >
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
