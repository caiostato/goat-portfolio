"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export function NotFoundView() {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith("/en-us");

  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-16">
      <span
        aria-hidden="true"
        className="font-mono text-7xl sm:text-8xl md:text-9xl font-black tracking-tight text-foreground/20 select-none"
      >
        404
      </span>

      <h1 className="type-display -mt-3 sm:-mt-5 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground">
        {isEn ? "Page not found" : "Página não encontrada"}
      </h1>

      <p className="type-body mt-2.5 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-sm text-balance">
        {isEn
          ? "The page you are looking for doesn't exist or has been moved."
          : "A página que você procura não existe ou foi movida."}
      </p>

      <div className="mt-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-xs font-semibold tracking-wide text-brand-foreground shadow-sm transition-[background-color,transform] duration-150 ease-out hover:bg-brand-strong active:scale-[0.98]"
        >
          <ArrowLeft
            className="h-3.5 w-3.5 transition-transform duration-150 group-hover:-translate-x-0.5"
            aria-hidden="true"
          />
          <span>{isEn ? "Back to home" : "Voltar ao início"}</span>
        </Link>
      </div>
    </div>
  );
}
