"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, Terminal, AlertTriangle, Compass } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

interface NotFoundCopy {
  badge: string;
  headline: string;
  description: string;
  returnHome: string;
  diagnosticsTitle: string;
  routeLabel: string;
  statusLabel: string;
  resolutionLabel: string;
  resolutionAction: string;
}

const copy: Record<Locale, NotFoundCopy> = {
  "pt-br": {
    badge: "404 // ERROR: ROUTE_NOT_FOUND",
    headline: "Coordenada não encontrada.",
    description:
      "A rota que você tentou acessar não existe, foi movida ou está temporariamente indisponível.",
    returnHome: "Voltar ao início",
    diagnosticsTitle: "TELEMETRIA_DE_DIAGNÓSTICO",
    routeLabel: "ROTA_SOLICITADA",
    statusLabel: "STATUS_HTTP",
    resolutionLabel: "AÇÃO_RECOMENDADA",
    resolutionAction: "RETORNAR_ÀS_COORDENADAS_BASE",
  },
  "en-us": {
    badge: "404 // ERROR: ROUTE_NOT_FOUND",
    headline: "Lost in the signal?",
    description:
      "The route you attempted to access does not exist, was relocated, or is temporarily unavailable.",
    returnHome: "Return to Home",
    diagnosticsTitle: "DIAGNOSTIC_TELEMETRY",
    routeLabel: "REQUESTED_ROUTE",
    statusLabel: "HTTP_STATUS",
    resolutionLabel: "RECOMMENDED_ACTION",
    resolutionAction: "RETURN_TO_BASE_COORDINATES",
  },
};

export function NotFoundView() {
  const pathname = usePathname() || "";
  const initialLang: Locale = pathname.startsWith("/en-us") ? "en-us" : "pt-br";
  const [lang, setLang] = useState<Locale>(initialLang);

  const t = copy[lang];
  const homeHref = lang === "en-us" ? "/en-us" : "/";

  return (
    <div className="relative flex w-full max-w-2xl flex-col items-center justify-center px-6 py-16 text-center sm:py-24">
      {/* Background radial gradient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
      >
        <div className="h-[360px] w-[360px] rounded-full bg-brand/10 blur-[100px] sm:h-[480px] sm:w-[480px]" />
      </div>

      {/* Watermark 404 behind title */}
      <div
        aria-hidden="true"
        className="select-none font-mono text-8xl font-black tracking-tighter text-foreground/[0.04] sm:text-9xl md:text-[12rem] -mb-10 sm:-mb-16"
      >
        404
      </div>

      {/* Monospace Error Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3.5 py-1.5 font-mono text-xs font-semibold text-brand">
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75 motion-reduce:hidden" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
        </span>
        <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" />
        <span>{t.badge}</span>
      </div>

      {/* Space Grotesk Headline */}
      <h1 className="type-display mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {t.headline}
      </h1>

      <p className="type-lead mt-3 max-w-lg text-sm text-muted-foreground sm:text-base leading-relaxed">
        {t.description}
      </p>

      {/* Telemetry Diagnostics Box */}
      <div className="mt-8 w-full max-w-md overflow-hidden rounded-xl border border-border-strong bg-card/70 p-4 text-left shadow-2xl backdrop-blur-md sm:p-5">
        <div className="flex items-center justify-between border-b border-border/80 pb-3">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-brand" aria-hidden="true" />
            <span className="type-label text-[11px] font-semibold text-foreground-subtle">
              [{t.diagnosticsTitle}]
            </span>
          </div>
          <span className="type-mono text-[10px] text-muted-foreground">
            V16.2.10
          </span>
        </div>

        <div className="mt-3.5 space-y-2 font-mono text-xs">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <span className="text-muted-foreground">$ {t.routeLabel}:</span>
            <span className="font-semibold text-brand truncate max-w-[240px]">
              {pathname || "/"}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <span className="text-muted-foreground">$ {t.statusLabel}:</span>
            <span className="font-semibold text-foreground">
              404 (Not Found)
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <span className="text-muted-foreground">$ {t.resolutionLabel}:</span>
            <span className="text-foreground-subtle">
              {t.resolutionAction}
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Actions */}
      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
        <Link
          href={homeHref}
          className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-2.5 type-label text-xs font-bold text-brand-foreground shadow-md transition-[background-color,transform] hover:bg-brand-strong active:scale-[0.98]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>{t.returnHome}</span>
        </Link>

        {/* Language switch button */}
        <div
          role="group"
          aria-label={lang === "pt-br" ? "Seleção de idioma" : "Language switcher"}
          className="type-label flex items-center rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground"
        >
          <button
            type="button"
            onClick={() => setLang("pt-br")}
            aria-label="Português"
            aria-pressed={lang === "pt-br"}
            className={cn(
              "rounded px-2 py-0.5 transition-colors cursor-pointer",
              lang === "pt-br"
                ? "font-bold text-brand"
                : "hover:text-foreground"
            )}
          >
            PT
          </button>
          <span aria-hidden="true" className="mx-1 text-border-strong">
            /
          </span>
          <button
            type="button"
            onClick={() => setLang("en-us")}
            aria-label="English"
            aria-pressed={lang === "en-us"}
            className={cn(
              "rounded px-2 py-0.5 transition-colors cursor-pointer",
              lang === "en-us"
                ? "font-bold text-brand"
                : "hover:text-foreground"
            )}
          >
            EN
          </button>
        </div>
      </div>

      <div className="mt-12 flex items-center gap-2 text-xs text-muted-foreground/80">
        <Compass className="h-3.5 w-3.5 text-brand/70" aria-hidden="true" />
        <span className="type-mono text-[11px]">
          caio stato // creative engineering & frontend architecture
        </span>
      </div>
    </div>
  );
}
