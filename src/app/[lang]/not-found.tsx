import type { Metadata } from "next";
import { NotFoundView } from "@/components/not-found-view";

export const metadata: Metadata = {
  title: "404 — Página não encontrada | Caio Stato",
  description: "Página não encontrada / Page not found",
};

export default function LangNotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="relative flex min-h-dvh items-center justify-center bg-background text-foreground p-6 outline-none">
      <NotFoundView />
    </main>
  );
}
