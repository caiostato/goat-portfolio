import { ArrowUpRight, GitBranch, Lock } from "lucide-react";

import { Section, SectionHeader } from "@/components/ui/section";
import { SitePreview } from "@/components/site-preview";
import { cn } from "@/lib/utils";
import type { Dictionary, Project } from "@/dictionaries/types";

type ProjectsDict = Dictionary["projects"];

export function ProjectsSection({ dict }: { dict: ProjectsDict }) {
  return (
    <Section id="work" rhythm="standard" surface="raised">
      <SectionHeader
        index="01"
        code="WORK & LIVE DEMOS"
        heading={dict.heading}
        description={dict.description}
      />

      {dict.items.length > 0 ? (
        <ol className="flex flex-col gap-16 sm:gap-24 md:gap-32">
          {dict.items.map((project, index) => (
            <li key={project.href ?? `${project.title}-${index}`}>
              <ProjectRow
                project={project}
                index={index}
                dict={dict}
                priority={false}
                flipped={index % 2 === 1}
              />
            </li>
          ))}
        </ol>
      ) : (
        <p className="type-body text-muted-foreground">{dict.empty}</p>
      )}
    </Section>
  );
}

function ProjectRow({
  project,
  index,
  dict,
  priority,
  flipped,
}: {
  project: Project;
  index: number;
  dict: ProjectsDict;
  priority: boolean;
  flipped: boolean;
}) {
  const isLive = Boolean(project.href);

  return (
    <article className="reveal grid items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-16">
      <div
        className={cn(
          "group flex justify-center lg:col-span-5",
          flipped && "lg:order-2",
        )}
      >
        <SitePreview
          key={project.href ?? `${project.title}-${index}`}
          project={project}
          index={index}
          priority={priority}
          livePreviewLabel={dict.interactivePreviewLabel}
          architectureLabel={dict.architecturePreviewLabel}
          sizes="(min-width: 1024px) 420px, 100vw"
        />
      </div>

      <div
        className={cn(
          "flex flex-col items-start gap-4 sm:gap-5 lg:col-span-7",
          flipped && "lg:order-1",
        )}
      >
        <Meta project={project} isLive={isLive} dict={dict} />

        <h3 className="type-h2 text-balance text-foreground">
          {project.title}
        </h3>

        <p className="type-body max-w-prose text-pretty text-muted-foreground">
          {project.description}
        </p>

        <Metrics project={project} />
        <Tags project={project} />
        <Actions project={project} dict={dict} />
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */

function Meta({
  project,
  isLive,
  dict,
}: {
  project: Project;
  isLive: boolean;
  dict: ProjectsDict;
}) {
  const parts = [project.role, project.period].filter(Boolean);

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
      {parts.length > 0 ? (
        <p className="type-label text-muted-foreground">{parts.join(" · ")}</p>
      ) : null}

      {isLive ? (
        <span className="type-label inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-subtle px-3 py-1 text-brand">
          <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75 motion-reduce:hidden" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
          </span>
          {dict.liveLabel}
        </span>
      ) : (
        <span className="type-label inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-muted-foreground">
          <Lock className="h-3 w-3" aria-hidden="true" />
          {dict.privateLabel}
        </span>
      )}
    </div>
  );
}

function Metrics({ project }: { project: Project }) {
  if (project.metrics.length === 0) return null;

  return (
    <>
      {/* Mobile: lightweight inline metric pills so stats don't feel heavy */}
      <dl className="flex flex-wrap items-center gap-2 pt-1 md:hidden">
        {project.metrics.map((metric) => (
          <div
            key={metric.label}
            className="inline-flex items-center gap-2 rounded-lg border border-border/80 bg-card/70 px-3 py-1.5"
          >
            <dd className="font-mono text-xs font-bold text-brand">
              {metric.value}
            </dd>
            <dt className="text-xs text-muted-foreground">{metric.label}</dt>
          </div>
        ))}
      </dl>

      {/* Desktop: large display metrics */}
      <dl className="hidden flex-wrap gap-x-12 gap-y-4 border-t border-border/70 pt-5 md:flex">
        {project.metrics.map((metric) => (
          <div key={metric.label} className="flex flex-col-reverse gap-1.5">
            <dt className="type-label text-muted-foreground">{metric.label}</dt>
            <dd className="type-metric text-brand">{metric.value}</dd>
          </div>
        ))}
      </dl>
    </>
  );
}

function Tags({ project }: { project: Project }) {
  if (project.tags.length === 0) return null;

  return (
    <ul className="flex flex-wrap gap-2">
      {project.tags.map((tag) => (
        <li
          key={tag}
          className="type-mono rounded-md border border-border/80 bg-card/50 px-2.5 py-1 text-xs text-muted-foreground"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

function Actions({ project, dict }: { project: Project; dict: ProjectsDict }) {
  if (!project.href && !project.repo) return null;

  return (
    <div className="flex w-full flex-col items-stretch gap-3 pt-2 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
      {project.href ? (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group/cta inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold whitespace-nowrap text-brand-foreground transition-[background-color,transform] duration-150 ease-out hover:bg-brand-strong active:translate-y-px sm:w-auto sm:py-2.5 motion-reduce:transform-none"
        >
          {dict.viewLive}
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-200 ease-out group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 motion-reduce:transform-none"
            aria-hidden="true"
          />
          <span className="sr-only">: {project.title}</span>
        </a>
      ) : null}

      {project.repo ? (
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border-strong px-5 py-3 text-sm font-medium whitespace-nowrap text-foreground transition-colors duration-150 hover:border-brand-border hover:text-brand sm:w-auto sm:py-2.5"
        >
          <GitBranch className="h-4 w-4" aria-hidden="true" />
          {dict.viewRepo}
          <span className="sr-only">: {project.title}</span>
        </a>
      ) : null}
    </div>
  );
}
