import { Code2, CreditCard, LayoutTemplate } from "lucide-react";

import { Section, SectionHeader } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/dictionaries/types";

const icons = [Code2, CreditCard, LayoutTemplate];

export function CapabilitiesSection({
  dict,
}: {
  dict: Dictionary["capabilities"];
}) {
  return (
    <Section id="capabilities" rhythm="standard" surface="hairline">
      <SectionHeader heading={dict.heading} />

      {/*
        A 1 + 2 split rather than three identical columns: the lead capability
        gets the width it deserves and the row stops reading as a template.
      */}
      <ul className="reveal-stagger grid gap-4 md:grid-cols-2 md:gap-6">
        {dict.items.map((capability, index) => {
          const Icon = icons[index % icons.length];
          const isLead = index === 0;

          return (
            <li
              key={capability.title}
              className={cn(
                "reveal flex flex-col gap-5 rounded-2xl border border-border p-6 transition-colors duration-200 hover:border-brand-border md:p-8",
                isLead
                  ? "bg-card-elevated md:col-span-2 md:flex-row md:items-start md:gap-8"
                  : "bg-card",
              )}
            >
              <span
                className={cn(
                  "flex shrink-0 items-center justify-center rounded-xl border border-brand-border bg-brand-subtle text-brand",
                  isLead ? "h-14 w-14" : "h-11 w-11",
                )}
              >
                <Icon
                  className={cn(isLead ? "h-6 w-6" : "h-5 w-5")}
                  aria-hidden="true"
                />
              </span>

              <div className="flex flex-col gap-3">
                <h3
                  className={cn(
                    "text-foreground",
                    isLead ? "type-h2" : "type-h3",
                  )}
                >
                  {capability.title}
                </h3>

                <p
                  className={cn(
                    "text-pretty text-muted-foreground",
                    isLead ? "type-lead max-w-xl" : "type-body",
                  )}
                >
                  {capability.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
