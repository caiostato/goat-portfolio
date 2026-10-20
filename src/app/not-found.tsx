import type { Metadata } from "next";
import { Space_Grotesk, Geist, JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";
import { NotFoundView } from "@/components/not-found-view";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "404 // ROUTE_NOT_FOUND | Caio Stato",
  description: "Page not found / Coordenada não encontrada",
};

export default function RootNotFound() {
  return (
    <html
      lang="pt-BR"
      className={`dark bg-background font-sans ${geist.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased min-h-dvh bg-background text-foreground flex items-center justify-center">
        <main id="main-content" tabIndex={-1} className="relative flex min-h-dvh w-full items-center justify-center outline-none">
          <NotFoundView />
        </main>
      </body>
    </html>
  );
}
