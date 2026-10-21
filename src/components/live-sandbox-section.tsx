"use client";

import { useState } from "react";
import {
  CheckCircle2,
  CreditCard,
  MessageSquare,
  Play,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Webhook,
} from "lucide-react";

import { Section, SectionHeader } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n/config";

type ScenarioId = "whatsapp" | "checkout" | "erp";

interface StepLog {
  step: string;
  actor: string;
  action: string;
  latency: string;
  payload: string;
}

const SCENARIOS: Record<
  Locale,
  {
    eyebrow: string;
    heading: string;
    description: string;
    runLabel: string;
    resetLabel: string;
    statusReady: string;
    statusComplete: string;
    tabs: {
      id: ScenarioId;
      label: string;
      project: string;
      url: string;
      icon: typeof MessageSquare;
      summary: string;
      metrics: { label: string; value: string }[];
      steps: StepLog[];
    }[];
  }
> = {
  "en-us": {
    eyebrow: "INTERACTIVE SANDBOX",
    heading: "Test the production architecture in real time",
    description:
      "Step through the actual event pipelines powering Cerasos and Arkea Labs—from WhatsApp order parsing and Getnet PCI tokenization to bidirectional ERP synchronization.",
    runLabel: "Simulate pipeline",
    resetLabel: "Reset",
    statusReady: "Pipeline ready",
    statusComplete: "Transaction verified (200 OK)",
    tabs: [
      {
        id: "whatsapp",
        label: "WhatsApp → Order Engine",
        project: "Cerasos Platform",
        url: "https://cerasos.com.br/",
        icon: MessageSquare,
        summary:
          "Incoming customer message via Uazapi is parsed into a structured pharmacy cart and synchronized with the Next.js order state.",
        metrics: [
          { label: "Webhook Latency", value: "42ms" },
          { label: "Manual Input", value: "0%" },
        ],
        steps: [
          {
            step: "01",
            actor: "Uazapi Webhook",
            action: "POST /api/webhooks/uazapi — Customer message received",
            latency: "14ms",
            payload: '{ "from": "+551599...", "items": ["SKU-402", "SKU-118"] }',
          },
          {
            step: "02",
            actor: "Next.js Order Engine",
            action: "Inventory verified & cart session created in PostgreSQL",
            latency: "18ms",
            payload: '{ "orderId": "ORD-9482", "status": "AWAITING_PAYMENT" }',
          },
          {
            step: "03",
            actor: "Checkout Dispatcher",
            action: "Instant payment link returned to customer WhatsApp thread",
            latency: "10ms",
            payload: '{ "checkoutUrl": "cerasos.com.br/pay/ORD-9482" }',
          },
        ],
      },
      {
        id: "checkout",
        label: "Getnet PCI Tokenization",
        project: "Cerasos Checkout",
        url: "https://cerasos.com.br/",
        icon: CreditCard,
        summary:
          "Zero-card-data server flow: card PAN is tokenized on the client, authorized via Getnet API, and confirmed via idempotent webhook.",
        metrics: [
          { label: "PCI Compliance", value: "100%" },
          { label: "Uptime SLA", value: "99.9%" },
        ],
        steps: [
          {
            step: "01",
            actor: "Client Tokenizer",
            action: "Card Vault exchange → single-use number_token generated",
            latency: "64ms",
            payload: '{ "number_token": "tok_getnet_8f92a1c4...", "cvv": "***" }',
          },
          {
            step: "02",
            actor: "Getnet Gateway",
            action: "POST /v1/payments/credit — Authorization approved",
            latency: "180ms",
            payload: '{ "payment_id": "pay_3019", "status": "APPROVED" }',
          },
          {
            step: "03",
            actor: "Webhook Listener",
            action: "Order ORD-9482 marked PAID & admin dashboard updated live",
            latency: "11ms",
            payload: '{ "event": "payment.succeeded", "synced": true }',
          },
        ],
      },
      {
        id: "erp",
        label: "Bidirectional ERP Sync",
        project: "Arkea Labs",
        url: "https://arkealabs.com/",
        icon: Webhook,
        summary:
          "High-concurrency connector bridging storefront orders with SAP/Totvs/Bling ERPs using Redis queues and fault-tolerant retries.",
        metrics: [
          { label: "Core Web Vitals", value: "99+" },
          { label: "Queue Sync", value: "Real-time" },
        ],
        steps: [
          {
            step: "01",
            actor: "Edge Storefront",
            action: "B2B order committed & pushed to Redis stream",
            latency: "8ms",
            payload: '{ "stream": "erp:outbound", "tenant": "arkea_prod" }',
          },
          {
            step: "02",
            actor: "ERP Connector",
            action: "Normalized payload dispatched to ERP invoice & stock API",
            latency: "95ms",
            payload: '{ "erp": "SAP_B1", "invoice": "NFE-88210", "stockDelta": -12 }',
          },
          {
            step: "03",
            actor: "State Reconciler",
            action: "Bidirectional ACK persisted & edge cache invalidated",
            latency: "9ms",
            payload: '{ "reconciled": true, "cacheTag": "inventory:v4" }',
          },
        ],
      },
    ],
  },
  "pt-br": {
    eyebrow: "SANDBOX INTERATIVO",
    heading: "Teste a arquitetura de produção em tempo real",
    description:
      "Simule os fluxos reais que rodam na Cerasos e na Arkea Labs — da criação automática de pedidos via WhatsApp e tokenização PCI na Getnet até a sincronização bidirecional de ERPs.",
    runLabel: "Simular execução",
    resetLabel: "Reiniciar",
    statusReady: "Pipeline pronto",
    statusComplete: "Transação verificada (200 OK)",
    tabs: [
      {
        id: "whatsapp",
        label: "WhatsApp → Motor de Pedidos",
        project: "Plataforma Cerasos",
        url: "https://cerasos.com.br/",
        icon: MessageSquare,
        summary:
          "A mensagem do cliente via Uazapi é convertida em um carrinho estruturado e sincronizada com o estado do pedido em Next.js.",
        metrics: [
          { label: "Latência Webhook", value: "42ms" },
          { label: "Digitação Manual", value: "0%" },
        ],
        steps: [
          {
            step: "01",
            actor: "Uazapi Webhook",
            action: "POST /api/webhooks/uazapi — Mensagem recebida do cliente",
            latency: "14ms",
            payload: '{ "from": "+551599...", "items": ["SKU-402", "SKU-118"] }',
          },
          {
            step: "02",
            actor: "Motor Next.js",
            action: "Estoque validado e sessão de pedido criada no PostgreSQL",
            latency: "18ms",
            payload: '{ "orderId": "ORD-9482", "status": "AWAITING_PAYMENT" }',
          },
          {
            step: "03",
            actor: "Dispatcher",
            action: "Link de checkout enviado instantaneamente no WhatsApp",
            latency: "10ms",
            payload: '{ "checkoutUrl": "cerasos.com.br/pay/ORD-9482" }',
          },
        ],
      },
      {
        id: "checkout",
        label: "Tokenização PCI Getnet",
        project: "Checkout Cerasos",
        url: "https://cerasos.com.br/",
        icon: CreditCard,
        summary:
          "Fluxo sem tráfego de dados brutos de cartão: tokenização no cliente, autorização via API Getnet e confirmação por webhook idempotente.",
        metrics: [
          { label: "Conformidade PCI", value: "100%" },
          { label: "Confiabilidade", value: "99,9%" },
        ],
        steps: [
          {
            step: "01",
            actor: "Client Tokenizer",
            action: "Troca no cofre Getnet → number_token de uso único gerado",
            latency: "64ms",
            payload: '{ "number_token": "tok_getnet_8f92a1c4...", "cvv": "***" }',
          },
          {
            step: "02",
            actor: "Getnet Gateway",
            action: "POST /v1/payments/credit — Autorização aprovada",
            latency: "180ms",
            payload: '{ "payment_id": "pay_3019", "status": "APPROVED" }',
          },
          {
            step: "03",
            actor: "Webhook Listener",
            action: "Pedido ORD-9482 atualizado para PAGO no dashboard",
            latency: "11ms",
            payload: '{ "event": "payment.succeeded", "synced": true }',
          },
        ],
      },
      {
        id: "erp",
        label: "Sync Bidirecional de ERP",
        project: "Arkea Labs",
        url: "https://arkealabs.com/",
        icon: Webhook,
        summary:
          "Conector de alta concorrência integrando pedidos web com ERPs (SAP, Totvs, Bling) via filas Redis e retentativas resilientes.",
        metrics: [
          { label: "Core Web Vitals", value: "99+" },
          { label: "Fila de Sync", value: "Tempo real" },
        ],
        steps: [
          {
            step: "01",
            actor: "Edge Storefront",
            action: "Pedido B2B confirmado e publicado em stream Redis",
            latency: "8ms",
            payload: '{ "stream": "erp:outbound", "tenant": "arkea_prod" }',
          },
          {
            step: "02",
            actor: "ERP Connector",
            action: "Payload normalizado enviado para API de nota e estoque",
            latency: "95ms",
            payload: '{ "erp": "SAP_B1", "invoice": "NFE-88210", "stockDelta": -12 }',
          },
          {
            step: "03",
            actor: "State Reconciler",
            action: "ACK bidirecional salvo e cache na borda revalidado",
            latency: "9ms",
            payload: '{ "reconciled": true, "cacheTag": "inventory:v4" }',
          },
        ],
      },
    ],
  },
};

export function LiveSandboxSection({ lang }: { lang: Locale }) {
  const copy = SCENARIOS[lang];
  const [activeId, setActiveId] = useState<ScenarioId>("whatsapp");
  const [activeStep, setActiveStep] = useState<number>(3);
  const [running, setRunning] = useState(false);

  const scenario =
    copy.tabs.find((t) => t.id === activeId) ?? copy.tabs[0];

  function handleSelectTab(id: ScenarioId) {
    setActiveId(id);
    setActiveStep(3);
    setRunning(false);
  }

  function handleTabKeyDown(e: React.KeyboardEvent, index: number) {
    const tabCount = copy.tabs.length;
    let nextIndex = -1;

    if (e.key === "ArrowRight") {
      nextIndex = (index + 1) % tabCount;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (index - 1 + tabCount) % tabCount;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = tabCount - 1;
    }

    if (nextIndex !== -1) {
      e.preventDefault();
      const nextTab = copy.tabs[nextIndex];
      handleSelectTab(nextTab.id);
      const nextTabElement = document.getElementById(`tab-${nextTab.id}`);
      nextTabElement?.focus();
    }
  }

  function handleSimulate() {
    if (running) return;
    setRunning(true);
    setActiveStep(0);

    setTimeout(() => setActiveStep(1), 220);
    setTimeout(() => setActiveStep(2), 540);
    setTimeout(() => {
      setActiveStep(3);
      setRunning(false);
    }, 880);
  }

  return (
    <Section rhythm="standard" surface="hairline">
      <SectionHeader
        index="02"
        code={copy.eyebrow}
        heading={copy.heading}
        description={copy.description}
      />

      <div className="reveal overflow-hidden rounded-2xl border border-highlight/30 bg-card/55">
        {/* Top Scenario Selector Bar */}
        <div className="flex flex-col gap-3 border-b border-border/80 bg-card/80 px-4 py-3.5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4 sm:px-5 md:px-6">
          <div
            role="tablist"
            aria-label={copy.eyebrow}
            aria-orientation="horizontal"
            className="flex flex-wrap items-center gap-2"
          >
            {copy.tabs.map((tab, idx) => {
              const Icon = tab.icon;
              const isSelected = tab.id === activeId;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-controls={`tabpanel-${tab.id}`}
                  aria-selected={isSelected}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => handleSelectTab(tab.id)}
                  onKeyDown={(e) => handleTabKeyDown(e, idx)}
                  className={cn(
                    "inline-flex cursor-pointer items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium transition-colors sm:px-4",
                    isSelected
                      ? "bg-brand text-brand-foreground font-semibold"
                      : "border border-highlight/30 bg-highlight/8 text-highlight/90 hover:border-highlight/60 hover:bg-highlight/15",
                  )}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex w-full items-center gap-2.5 sm:w-auto">
            <button
              type="button"
              onClick={handleSimulate}
              disabled={running}
              aria-label={
                running
                  ? lang === "pt-br"
                    ? "Simulação em andamento"
                    : "Simulation running"
                  : copy.runLabel
              }
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-brand-border bg-brand-subtle px-4 py-2 font-mono text-xs font-semibold text-brand transition-colors hover:bg-brand hover:text-brand-foreground disabled:opacity-50 sm:w-auto sm:py-1.5"
            >
              {running ? (
                <RotateCcw className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
              ) : (
                <Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
              )}
              <span>{copy.runLabel}</span>
            </button>
          </div>
        </div>

        {/* Main Interactive Workbench */}
        <div
          role="tabpanel"
          id={`tabpanel-${activeId}`}
          aria-labelledby={`tab-${activeId}`}
          tabIndex={0}
          className="grid grid-cols-1 gap-6 p-4 sm:gap-8 sm:p-6 md:p-8 lg:grid-cols-12 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          {/* Left Context Column (4 cols) */}
          <div className="flex min-w-0 flex-col justify-between gap-6 lg:col-span-4">
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="type-label text-brand">
                  {scenario.project}
                </span>
                <a
                  href={scenario.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${scenario.project} (${scenario.url}) - ${lang === "pt-br" ? "abre em nova aba" : "opens in new tab"}`}
                  className="type-mono text-xs text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-brand"
                >
                  {scenario.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                </a>
              </div>

              <p className="type-body text-pretty text-muted-foreground">
                {scenario.summary}
              </p>
            </div>

            <div className="flex flex-col gap-4 border-t border-border/70 pt-5">
              <div className="grid grid-cols-2 gap-4">
                {scenario.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-mono text-xl font-bold text-highlight">
                      {m.value}
                    </div>
                    <div className="type-label mt-1 text-muted-foreground">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <div
                role="status"
                aria-live="polite"
                className="flex items-center gap-2 rounded-lg border border-border/70 bg-background/60 px-3 py-2"
              >
                {activeStep >= 3 ? (
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                ) : (
                  <Sparkles className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                )}
                <span className="type-mono text-xs text-foreground-subtle">
                  {activeStep >= 3 ? copy.statusComplete : copy.statusReady}
                </span>
              </div>
            </div>
          </div>

          {/* Right Live Execution Steps (8 cols) */}
          <div className="flex min-w-0 flex-col gap-3 lg:col-span-8">
            {scenario.steps.map((s, idx) => {
              const isVisible = idx < activeStep;
              return (
                <div
                  key={s.step}
                  className={cn(
                    "min-w-0 rounded-xl border p-3.5 transition-all duration-300 sm:p-4",
                    isVisible
                      ? "border-border bg-background/85 opacity-100 translate-y-0"
                      : "border-border/40 bg-background/30 opacity-40 translate-y-1",
                  )}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="type-mono rounded bg-brand-subtle px-2 py-0.5 text-xs font-bold text-brand">
                        {s.step}
                      </span>
                      <span className="text-sm font-semibold text-foreground">
                        {s.actor}
                      </span>
                    </div>
                    <span className="type-mono flex items-center gap-1.5 text-xs text-highlight">
                      <ShieldCheck className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                      {s.latency}
                    </span>
                  </div>

                  <p className="mt-1.5 text-xs text-muted-foreground">
                    {s.action}
                  </p>

                  <pre className="type-mono mt-2.5 max-w-full overflow-x-auto rounded-lg border border-highlight/35 bg-highlight/10 px-3 py-2 text-xs text-highlight">
                    <code>{s.payload}</code>
                  </pre>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
