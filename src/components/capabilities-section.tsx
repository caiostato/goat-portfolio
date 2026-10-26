import { Code2, CreditCard, LayoutTemplate } from "lucide-react";

import { Section, SectionHeader } from "@/components/ui/section";
import type { Dictionary } from "@/dictionaries/types";

const icons = [Code2, CreditCard, LayoutTemplate];

interface StackCategory {
  label: string;
  items: string[];
}

function categorizeStack(items: string[]): StackCategory[] {
  const coreSet = new Set([
    "TypeScript",
    "React",
    "Next.js",
    "React Native",
  ]);
  const uiStateSet = new Set([
    "Redux Toolkit",
    "Zustand",
    "Tailwind CSS",
    "Shadcn UI",
    "Storybook",
  ]);
  const backendPaymentsSet = new Set([
    "Node.js",
    "PostgreSQL",
    "GraphQL",
    "Stripe",
    "Getnet",
    "Uazapi",
  ]);

  const core: string[] = [];
  const uiState: string[] = [];
  const backendPayments: string[] = [];
  const testingInfra: string[] = [];

  for (const item of items) {
    if (coreSet.has(item)) core.push(item);
    else if (uiStateSet.has(item)) uiState.push(item);
    else if (backendPaymentsSet.has(item)) backendPayments.push(item);
    else testingInfra.push(item);
  }

  return [
    { label: "Core & Runtimes", items: core },
    { label: "State & UI Systems", items: uiState },
    { label: "Data & Payment Rails", items: backendPayments },
    { label: "Testing & Infra", items: testingInfra },
  ];
}

export function CapabilitiesSection({
  dict,
  stackDict,
}: {
  dict: Dictionary["capabilities"];
  stackDict: Dictionary["stack"];
}) {
  const categories = categorizeStack(stackDict.items);

  return (
    <Section id="capabilities" rhythm="standard" surface="hairline">
      <SectionHeader index="04" code="CAPABILITIES" heading={dict.heading} />

      {/* Clean 3-column Capabilities */}
      <ul className="reveal-stagger grid gap-6 md:grid-cols-3">
        {dict.items.map((capability, index) => {
          const Icon = icons[index % icons.length];

          return (
            <li
              key={capability.title}
              className="reveal flex flex-col gap-5 rounded-2xl border border-border bg-card/50 p-7 transition-colors duration-200 hover:border-border-strong"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-strong bg-background/60 text-brand">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>

              <div className="flex flex-col gap-2.5">
                <h3 className="type-h3 text-foreground">{capability.title}</h3>
                <p className="type-body text-pretty text-muted-foreground">
                  {capability.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Clean Categorized Stack Row */}
      <div
        id="stack"
        className="reveal mt-20 scroll-mt-28 border-t border-border pt-16"
      >
        <div className="mb-10 flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-brand"
          />
          <h3 className="type-label text-muted-foreground">
            05 / {stackDict.heading}
          </h3>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div key={category.label} className="flex flex-col gap-4">
              <span className="type-label text-foreground-subtle">
                {category.label}
              </span>

              <ul className="flex flex-wrap gap-2">
                {category.items.map((tech) => (
                  <li
                    key={tech}
                    className="type-mono rounded-lg border border-border bg-card/55 px-3 py-1.5 text-xs text-foreground-subtle"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
