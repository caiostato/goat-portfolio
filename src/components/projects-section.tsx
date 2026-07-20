import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Plataforma de Vendas Cerasos",
    description:
      "Plataforma automatizada de vendas para farmácias com atendimento via WhatsApp (Uazapi), motor de pagamentos ponta a ponta com Getnet e dashboard administrativo de vendas e feedback de clientes.",
    image: "/projects/fintech-dashboard.png",
    metrics: [
      { value: "99,9%", label: "confiabilidade do sistema" },
      { value: "100%", label: "pedidos automatizados" },
    ],
    tags: ["Next.js", "Getnet", "Uazapi"],
  },
  {
    title: "Plataforma Financeira AR3",
    description:
      "Centralização de serviços financeiros internos com biblioteca de UI corporativa publicada via Storybook, unificando relatórios e buscas em banco de dados.",
    image: "/projects/aura-wellness.png",
    metrics: [
      { value: "+30%", label: "eficiência operacional" },
      { value: "100%", label: "consistência de UI" },
    ],
    tags: ["React", "Storybook", "REST APIs"],
  },
];

export function ProjectsSection() {
  return (
    <section id="work" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <header className="mb-12 flex items-end justify-between">
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Projetos selecionados
          </h2>
          <span className="font-mono text-sm text-muted-foreground">03</span>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-accent/50"
            >
              <div className="aspect-16/10 overflow-hidden border-b border-border">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={`Prévia do projeto ${project.title}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={640}
                  height={400}
                />
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-accent"
                    aria-hidden="true"
                  />
                </div>

                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-auto flex gap-8 border-t border-border pt-4">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="font-mono text-xl font-bold text-accent">
                        {metric.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border px-2 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
