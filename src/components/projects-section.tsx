import { ArrowUpRight, GitBranch, Lock } from "lucide-react";

import { Section, SectionHeader } from "@/components/ui/section";
import { SitePreview } from "@/components/site-preview";
import { cn } from "@/lib/utils";
import type { Dictionary, Project } from "@/dictionaries/types";

type ProjectsDict = Dictionary["projects"];

export function ProjectsSection({ dict }: { dict: ProjectsDict }) {
  return (
    <Section id="work" rhythm="loud" surface="hairline">
      <SectionHeader heading={dict.heading} description={dict.description} />

      {dict.items.length > 0 ? (
        <ol className="flex flex-col gap-20 md:gap-28">
          {dict.items.map((project, index) => (
            <li key={project.title}>
              <ProjectRow
                project={project}
                dict={dict}
                priority={index === 0}
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
  dict,
  priority,
  flipped,
}: {
  project: Project;
  dict: ProjectsDict;
  priority: boolean;
  flipped: boolean;
}) {
  const isLive = Boolean(project.href);

  return (
    <article className="reveal grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
      {/*
        When there is a live site the whole frame is clickable, but it is
        hidden from assistive tech and skipped by the keyboard: the button
        below points at the same URL, so exposing both would just make screen
        reader and tab users visit the same destination twice.
      */}
      <div className={cn("group", flipped && "lg:order-2")}>
        {isLive ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={-1}
            aria-hidden="true"
            className="block"
          >
            <SitePreview
              project={project}
              priority={priority}
              sizes="(min-width: 1024px) 55vw, 100vw"
            />
          </a>
        ) : (
          <SitePreview
            project={project}
            priority={priority}
            sizes="(min-width: 1024px) 55vw, 100vw"
          />
        )}
      </div>

      <div
        className={cn("flex flex-col items-start gap-5", flipped && "lg:order-1")}
      >
        <Meta project={project} isLive={isLive} dict={dict} />

        <h3 className="type-h2 text-balance text-foreground">{project.title}</h3>

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

      {/* Says up front whether there is anywhere to go, before the eye hunts. */}
      {isLive ? (
        <span className="type-label inline-flex items-center gap-1.5 rounded-full border border-brand-border bg-brand-subtle px-2.5 py-1 text-brand">
          {dict.liveLabel}
        </span>
      ) : (
        <span className="type-label inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-muted-foreground">
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
    <dl className="flex flex-wrap gap-x-12 gap-y-4 border-t border-border pt-5">
      {project.metrics.map((metric) => (
        /* Reversed column keeps the value on top while the DOM keeps the
           dt/dd order a definition list requires. */
        <div key={metric.label} className="flex flex-col-reverse gap-1.5">
          <dt className="type-label text-muted-foreground">{metric.label}</dt>
          <dd className="type-metric text-brand">{metric.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function Tags({ project }: { project: Project }) {
  if (project.tags.length === 0) return null;

  return (
    <ul className="flex flex-wrap gap-2">
      {project.tags.map((tag) => (
        <li
          key={tag}
          className="type-mono rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground"
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
    <div className="flex flex-wrap items-center gap-3 pt-1">
      {project.href ? (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group/cta inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-brand-foreground transition-[background-color,transform] duration-200 ease-out hover:bg-brand-strong active:translate-y-px motion-reduce:transform-none"
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
          className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium whitespace-nowrap text-foreground transition-colors duration-200 hover:border-brand-border hover:text-brand"
        >
          <GitBranch className="h-4 w-4" aria-hidden="true" />
          {dict.viewRepo}
          <span className="sr-only">: {project.title}</span>
        </a>
      ) : null}
    </div>
  );
}
