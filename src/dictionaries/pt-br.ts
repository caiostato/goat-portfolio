import type { Dictionary } from "./types";

const dictionary: Dictionary = {
  meta: {
    title: "Caio Stato — Frontend Engineer | React & Next.js",
    description:
      "Portfólio de Caio Stato, Frontend Engineer com 4+ anos de experiência construindo aplicações de alta performance com React e Next.js para plataformas fintech e produtos digitais.",
  },
  nav: {
    ariaLabel: "Navegação principal",
    items: [
      { label: "Experience", href: "#experience" },
      { label: "Capabilities", href: "#capabilities" },
      { label: "Stack", href: "#stack" },
      { label: "Info", href: "#philosophy" },
    ],
    contact: "Contato",
  },
  hero: {
    badge: "Disponível para novos projetos",
    heading: "Arquitetura React & Next.js de alta performance",
    subtitle:
      "Frontend Engineer com 4+ anos construindo plataformas fintech e produtos digitais escaláveis, com foco em performance, arquitetura limpa e design systems.",
    ctaPrimary: "Ver minha experiência",
    ctaSecondary: "Entrar em contato",
    heroAlt:
      "Renderização 3D abstrata representando engenharia de software e design de produto",
  },
  experience: {
    heading: "Experiência profissional",
    index: "02",
    items: [
      {
        company: "Cerasos",
        period: "Dez 2025 — Presente",
        role: "Fullstack Engineer",
        highlights: [
          "Liderei o desenvolvimento de uma plataforma automatizada de vendas para farmácias integrando WhatsApp (via Uazapi), possibilitando interações automatizadas com clientes, respostas em tempo real e criação instantânea de pedidos.",
          "Arquitetei um motor de processamento de pagamentos ponta a ponta com Next.js, TypeScript e a API da Getnet, implementando tokenização segura, fluxos de checkout customizados e listeners de webhook em tempo real.",
          "Desenvolvi um dashboard administrativo de vendas e feedback de clientes, centralizando rastreamento de pedidos, analytics de vendas e métricas de avaliação para otimizar operações da farmácia.",
          "Mantive a infraestrutura full-stack e pipelines de deploy, gerenciando hospedagem de servidor, sincronização de banco de dados, orquestração de APIs e suítes de teste abrangentes garantindo 99,9% de confiabilidade do sistema.",
        ],
        stack: ["Next.js", "TypeScript", "Getnet", "Uazapi"],
      },
      {
        company: "Ziion Tech",
        period: "Fev 2025 — Presente",
        role: "Frontend Engineer",
        highlights: [
          "Desenvolvi uma aplicação web escalável de vitrine de imóveis com Next.js e Tailwind CSS, otimizando Core Web Vitals e reduzindo significativamente o tempo de carregamento inicial.",
          "Construí uma biblioteca interna de componentes de UI modular e reutilizável, acelerando a velocidade de entrega de novas features em cerca de 20%.",
          "Desenvolvi um dashboard administrativo centralizado para gestão de colaboradores, simplificando operações e visualização interna de dados.",
          "Implementei fluxos de teste unitário automatizados com Jest, elevando a cobertura de código e garantindo estabilidade da interface.",
        ],
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Jest"],
      },
      {
        company: "eAcademy",
        period: "Jun 2024 — Nov 2024",
        role: "Frontend Engineer",
        highlights: [
          "Desenvolvi aplicações web centradas no usuário para agendamento e visualização de calendário interativo com Next.js e Shadcn UI.",
          "Construí dashboards de dados dinâmicos utilizando Redux e Framer Motion, colaborando com engenheiros de backend para mapear contratos de API robustos.",
          "Automatizei blocos de teste de frontend dentro dos pipelines de CI/CD, reduzindo esforços manuais de verificação e garantindo releases estáveis.",
          "Mantive altos padrões de qualidade através de code reviews detalhados, documentação abrangente e práticas de clean architecture.",
        ],
        stack: ["Next.js", "Redux", "Shadcn UI", "Framer Motion"],
      },
      {
        company: "AR3 Capital",
        period: "Out 2022 — Fev 2024",
        role: "Frontend Engineer",
        highlights: [
          "Liderei o desenvolvimento client-side para centralizar serviços financeiros internos, maximizando estabilidade da plataforma e velocidade dos fluxos de trabalho.",
          "Simplifiquei buscas complexas em banco de dados e motores de relatórios internos, gerando um aumento documentado de 30% na eficiência operacional.",
          "Projetei e publiquei uma biblioteca de UI corporativa via Storybook, garantindo consistência de marca e design em 100% das telas.",
          "Mantive ownership completo do frontend em cenários de alta responsabilidade, alinhando diretamente com squads multifuncionais de produto.",
        ],
        stack: ["React", "Storybook", "TypeScript", "REST APIs"],
      },
      {
        company: "RN3",
        period: "Abr 2023 — Out 2023",
        role: "Software Engineer (Full Stack)",
        highlights: [
          "Migrei módulos de dados legados de Angular para uma stack moderna e responsiva com Next.js e Node.js.",
          "Desenvolvi features full-stack seguras integrando sistemas de pagamento comerciais via Stripe e ferramentas interativas de business analytics.",
          "Otimizei queries complexas em PostgreSQL, alcançando uma melhoria documentada de 25% nas pipelines de recuperação de dados.",
          "Integrei dashboards de visualização dinâmica com Power BI, reduzindo o overhead de processamento de dados e alinhando features aos objetivos de UX.",
        ],
        stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      },
      {
        company: "Hybank",
        period: "Set 2021 — Set 2022",
        role: "Mobile Developer",
        highlights: [
          "Desenvolvi aplicações mobile fintech multiplataforma com React Native, entregando uma experiência consistente em iOS e Android.",
          "Projetei um design system mobile customizado para escalar novas propriedades de UI com eficiência, reduzindo o tempo futuro de desenvolvimento de layout.",
          "Gerenciei árvores de estado complexas com Redux, conectando as telas do cliente a APIs bancárias REST de alto volume transacional.",
          "Conduzi testes minuciosos de usabilidade e performance em dispositivos, reduzindo erros em produção e melhorando a estabilidade nas lojas de app.",
        ],
        stack: ["React Native", "Redux", "REST APIs"],
      },
    ],
  },
  capabilities: {
    heading: "Competências principais",
    index: "03",
    items: [
      {
        title: "Frontend Engineering",
        description:
          "Construção de aplicações React e Next.js robustas e escaláveis, com foco em otimização de performance client-side, Core Web Vitals e acessibilidade.",
      },
      {
        title: "Payments & Fintech",
        description:
          "Integração de gateways de pagamento (Stripe, Getnet) do sandbox à produção, incluindo tokenização, webhooks e fluxos de checkout compatíveis com PCI.",
      },
      {
        title: "Design Systems & Arquitetura",
        description:
          "Desenho de bibliotecas de componentes e sistemas de UI reutilizáveis com Storybook, aplicando Clean Architecture e Domain-Driven Design.",
      },
    ],
  },
  stack: {
    heading: "Stack técnica",
    index: "04",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "React Native",
      "Redux Toolkit",
      "Zustand",
      "Tailwind CSS",
      "Shadcn UI",
      "Node.js",
      "PostgreSQL",
      "GraphQL",
      "Stripe",
      "Getnet",
      "Uazapi",
      "Storybook",
      "Jest",
      "Playwright",
      "Docker",
      "Vercel",
    ],
  },
  philosophy: {
    label: "Filosofia",
    quote:
      "Acredito em arquitetura de software modular e bem pensada — Clean Architecture e DDD não são acadêmicos, são o que permite que um time entregue rápido sem acumular dívida técnica. Performance e acessibilidade são consequência de um código bem estruturado, não um retrabalho no final.",
  },
  connect: {
    heading: "Vamos conversar",
    body: "Atualmente aberto a novas oportunidades. Se você tem uma pergunta ou só quer dizer olá, farei o meu melhor para responder.",
    emailCta: "Enviar um e-mail",
    copyCta: "Copiar e-mail",
    copiedCta: "E-mail copiado!",
  },
  footer: {
    ariaLabel: "Links do rodapé",
    links: [
      { label: "GitHub", href: "https://github.com/caiostato", external: true },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/caiostato",
        external: true,
      },
      { label: "Info", href: "#philosophy", external: false },
    ],
    copyright: "© 2026 Caio Stato",
  },
};

export default dictionary;
