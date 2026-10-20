import type { Metadata } from "next";
import { NotFoundView } from "@/components/not-found-view";

export const metadata: Metadata = {
  title: "404 // ROUTE_NOT_FOUND | Caio Stato",
  description: "Page not found / Coordenada não encontrada",
};

export default function LangNotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="relative flex min-h-dvh items-center justify-center bg-background text-foreground outline-none">
      <NotFoundView />
    </main>
  );
}
