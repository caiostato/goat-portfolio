"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Activity,
  ArrowUpRight,
  Component,
  CreditCard,
  Database,
  Globe,
  Layers,
  MessageSquare,
  Server,
  Webhook,
} from "lucide-react";

import { cn } from "@/lib/utils";
import type { Project } from "@/dictionaries/types";

/** Strips protocol and trailing slash so the chrome reads like an address bar. */
function displayUrl(href: string) {
  try {
    const url = new URL(href);
    return `${url.hostname}${url.pathname === "/" ? "" : url.pathname}`;
  } catch {
    return href.replace(/^https?:\/\//, "").replace(/\/$/, "");
  }
}

/**
 * Clean, mobile-proportioned project preview card (`max-w-[390px]`, fixed `h-[540px]` body).
 *
 * - Because the card itself is sized to a true mobile viewport width (`390px`),
 *   live sites inside the `<iframe>` automatically render their mobile layout
 *   without needing a fake phone bezel inside a wide card.
 * - Independent per-card toggle (`Preview ao vivo` / `Arquitetura`) with zero
 *   height shift on switch.
 */
export function SitePreview({
  project,
  index = 0,
  priority = false,
  sizes,
  livePreviewLabel = "Live preview",
  architectureLabel = "Architecture",
  className,
}: {
  project: Project;
  index?: number;
  priority?: boolean;
  sizes: string;
  livePreviewLabel?: string;
  architectureLabel?: string;
  className?: string;
}) {
  const url = project.href ? displayUrl(project.href) : null;
  const [isArchMode, setIsArchMode] = useState<boolean>(!project.href);
  const [isInteractive, setIsInteractive] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(false);
  const [iframeLoaded, setIframeLoaded] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      const raf = requestAnimationFrame(() => setIsInView(true));
      return () => cancelAnimationFrame(raf);
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "250px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "w-full max-w-[390px] overflow-hidden rounded-2xl border border-border-strong bg-card shadow-[0_20px_50px_oklch(0_0_0/0.45)]",
        "transition-colors duration-200 ease-out group-hover:border-brand-border",
        className,
      )}
    >
      {/* Top Bar: Clickable URL + Independent View Switcher */}
      <div className="flex flex-col gap-2 border-b border-border bg-card-elevated px-3 py-2.5 sm:px-3.5 sm:py-3">
        <div className="flex flex-col gap-2 min-[400px]:flex-row min-[400px]:items-center min-[400px]:justify-between">
          {url && project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} (${url})`}
              className="group/url type-mono inline-flex min-w-0 flex-1 items-center justify-between gap-2 truncate rounded-md border border-border bg-background/90 px-2.5 py-1 text-xs text-foreground-subtle transition-colors hover:border-brand-border hover:text-brand"
            >
              <span className="inline-flex items-center gap-1.5 truncate">
                <Globe className="h-3 w-3 shrink-0 text-brand" aria-hidden="true" />
                <span className="truncate">{url}</span>
              </span>
              <ArrowUpRight
                className="h-3.5 w-3.5 shrink-0 opacity-70 transition-transform group-hover/url:translate-x-0.5 group-hover/url:-translate-y-0.5 group-hover/url:opacity-100"
                aria-hidden="true"
              />
            </a>
          ) : (
            <span className="type-mono min-w-0 flex-1 truncate px-1 text-xs text-foreground-subtle">
              {project.title}
            </span>
          )}

          {/* Independent Per-Card Mode Switcher */}
          {project.href ? (
            <div
              role="group"
              aria-label={`${project.title} view mode`}
              className="flex w-full shrink-0 items-center rounded-lg border border-border bg-background/90 p-0.5 min-[400px]:w-auto"
            >
              <button
                type="button"
                aria-pressed={!isArchMode}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsArchMode(false);
                  setIsInView(true);
                }}
                className={cn(
                  "flex-1 cursor-pointer rounded-md px-2 py-1 text-center font-mono text-[10px] font-semibold transition-colors min-[400px]:flex-initial",
                  !isArchMode
                    ? "bg-brand text-brand-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {livePreviewLabel}
              </button>
              <button
                type="button"
                aria-pressed={isArchMode}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsArchMode(true);
                  setIsInteractive(false);
                }}
                className={cn(
                  "flex-1 cursor-pointer rounded-md px-2 py-1 text-center font-mono text-[10px] font-semibold transition-colors min-[400px]:flex-initial",
                  isArchMode
                    ? "bg-brand text-brand-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {architectureLabel}
              </button>
            </div>
          ) : null}
        </div>
      </div>

      {/* Fixed-Height Mobile Viewport Body — Never shifts height on toggle */}
      <div className="relative h-[480px] w-full overflow-hidden bg-background sm:h-[540px]">
        {project.href ? (
          <>
            {/* Live Mobile Site View */}
            <div
              aria-hidden={isArchMode}
              className={cn(
                "absolute inset-0 h-full w-full transition-opacity duration-200",
                isArchMode
                  ? "pointer-events-none opacity-0"
                  : "z-10 opacity-100",
              )}
            >
              {isInView ? (
                <iframe
                  src={project.href}
                  title={`${project.title} — ${livePreviewLabel}`}
                  loading="lazy"
                  onLoad={() => setIframeLoaded(true)}
                  tabIndex={isArchMode ? -1 : 0}
                  aria-hidden={isArchMode}
                  className={cn(
                    "h-full w-full border-0 bg-background transition-opacity duration-300 md:pointer-events-auto",
                    isInteractive ? "pointer-events-auto" : "pointer-events-none",
                    iframeLoaded ? "opacity-100" : "opacity-0",
                  )}
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
              ) : null}

              {/* Lightweight topology placeholder before iframe loads */}
              {!iframeLoaded && !isArchMode && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-card-elevated/40 p-6 text-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-border bg-brand-subtle text-brand">
                    <Globe className="h-5 w-5 animate-pulse" aria-hidden="true" />
                  </div>
                  <div className="space-y-1">
                    <div className="type-label text-xs font-semibold text-foreground">
                      {project.title}
                    </div>
                    {url && (
                      <div className="type-mono text-[10px] text-muted-foreground">
                        {url}
                      </div>
                    )}
                  </div>
                  <div className="mt-1 inline-flex items-center gap-1.5 rounded-full border border-border bg-card/80 px-3 py-1 font-mono text-[10px] text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    <span>{livePreviewLabel}</span>
                  </div>
                </div>
              )}

              {/* Mobile touch-scroll guard so page scrolling isn't hijacked by the iframe */}
              {!isInteractive ? (
                <div className="pointer-events-none absolute inset-x-0 bottom-3 z-20 flex justify-center px-4 md:hidden">
                  <button
                    type="button"
                    tabIndex={isArchMode ? -1 : 0}
                    onClick={() => setIsInteractive(true)}
                    className="pointer-events-auto inline-flex cursor-pointer items-center gap-2 rounded-full border border-brand-border bg-card/90 px-3.5 py-1.5 font-mono text-[10px] font-semibold tracking-wider text-foreground uppercase shadow-lg backdrop-blur-md transition-colors hover:border-brand hover:text-brand"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-brand"
                    />
                    {livePreviewLabel} · Tap
                  </button>
                </div>
              ) : (
                <div className="pointer-events-none absolute top-2.5 right-2.5 z-20 md:hidden">
                  <button
                    type="button"
                    tabIndex={isArchMode ? -1 : 0}
                    onClick={() => setIsInteractive(false)}
                    className="pointer-events-auto inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-border-strong bg-card/90 px-2.5 py-1 font-mono text-[10px] font-semibold text-muted-foreground shadow-md backdrop-blur-md"
                  >
                    Lock scroll
                  </button>
                </div>
              )}
            </div>

            {/* Architecture View — overlays inside the exact same 390x540 frame */}
            <div
              aria-hidden={!isArchMode}
              className={cn(
                "absolute inset-0 h-full w-full transition-opacity duration-200",
                isArchMode
                  ? "z-10 opacity-100"
                  : "pointer-events-none opacity-0",
              )}
            >
              <CleanArchitecturePreview project={project} index={index} />
            </div>
          </>
        ) : project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt ?? `${project.title} — screenshot`}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover object-top"
          />
        ) : (
          <CleanArchitecturePreview project={project} index={index} />
        )}
      </div>
    </div>
  );
}

/**
 * Clean, zero-gradient vertical 3-node architecture schematic fitted to the
 * 390px x 540px portrait card body.
 */
function CleanArchitecturePreview({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const titleLower = project.title.toLowerCase();
  const isCerasos = titleLower.includes("cerasos");
  const isArkea = titleLower.includes("arkea");

  const nodes = isCerasos
    ? [
        {
          icon: MessageSquare,
          step: "01",
          title: "WhatsApp Ingress",
          sub: "Uazapi automated order stream",
        },
        {
          icon: Webhook,
          step: "02",
          title: "Next.js Engine",
          sub: "Order state & API orchestration",
        },
        {
          icon: CreditCard,
          step: "03",
          title: "Getnet Gateway",
          sub: "Tokenization & live webhooks",
        },
      ]
    : isArkea
      ? [
          {
            icon: Layers,
            step: "01",
            title: "Edge Web Platform",
            sub: "Next.js B2B/B2C storefront",
          },
          {
            icon: Server,
            step: "02",
            title: "ERP Connectors",
            sub: "Real-time SAP, Totvs & Bling sync",
          },
          {
            icon: Database,
            step: "03",
            title: "Resilient Data Layer",
            sub: "PostgreSQL & Redis caching",
          },
        ]
      : [
          {
            icon: Database,
            step: "01",
            title: "Query Engine",
            sub: "Indexed financial reporting (+30%)",
          },
          {
            icon: Activity,
            step: "02",
            title: "Unified Client",
            sub: "Consolidated internal operations",
          },
          {
            icon: Component,
            step: "03",
            title: "Storybook UI",
            sub: "Shared system across 100% of views",
          },
        ];

  return (
    <div className="flex h-full w-full flex-col justify-between gap-3 overflow-y-auto bg-card p-4 sm:p-6">
      <div className="flex items-center justify-between gap-2 border-b border-border pb-3">
        <span className="type-label text-brand">
          SYSTEM TOPOLOGY // 0{index + 1}
        </span>
        <span className="type-mono truncate text-xs text-muted-foreground">
          {project.tags.slice(0, 2).join(" · ")}
        </span>
      </div>

      <div className="flex flex-col gap-2.5 sm:gap-3">
        {nodes.map((node) => {
          const Icon = node.icon;
          return (
            <div
              key={node.title}
              className="flex items-start gap-3 rounded-xl border border-border bg-card-elevated/70 p-3 transition-colors hover:border-brand-border sm:gap-3.5 sm:p-4"
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-brand-border bg-brand-subtle text-brand">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-foreground">
                    {node.title}
                  </span>
                  <span className="type-mono text-[11px] font-semibold text-brand">
                    {node.step}
                  </span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {node.sub}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {project.metrics.length > 0 ? (
        <div className="grid grid-cols-2 gap-2.5 border-t border-border pt-3.5 sm:gap-3 sm:pt-4">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-lg border border-border bg-background/60 px-2.5 py-2 sm:px-3 sm:py-2.5"
            >
              <div className="font-mono text-sm font-bold text-brand sm:text-base">
                {m.value}
              </div>
              <div className="mt-0.5 text-[11px] leading-tight text-muted-foreground">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
