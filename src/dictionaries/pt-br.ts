import type { Dictionary } from "./types";

const dictionary: Dictionary = {
  meta: {
    title: "Caio Stato | Frontend Engineer, React & Next.js",
    description:
      "Portfólio de Caio Stato, frontend engineer com 4+ anos construindo aplicações React e Next.js para plataformas fintech e produtos digitais.",
  },
  nav: {
    ariaLabel: "Navegação principal",
    items: [
      { label: "Projetos", href: "#work" },
      { label: "Experiência", href: "#experience" },
      { label: "O que faço", href: "#capabilities" },
      { label: "Stack", href: "#stack" },
    ],
    contact: "Contato",
    menuOpen: "Abrir menu",
    menuClose: "Fechar menu",
  },
  hero: {
    badge: "Disponível para novos projetos",
    heading: "Arquitetura React e Next.js que aguenta o tranco",
    subtitle:
      "Quatro anos em plataformas fintech e produtos digitais, gastos em custo de render, tamanho de bundle e código que sobrevive ao próximo engenheiro.",
    ctaPrimary: "Ver os projetos",
    role: "Frontend Engineer",
    stats: [
      { value: "4+", label: "Anos em frontend" },
      { value: "30%", label: "Ganho de eficiência operacional" },
      { value: "99,9%", label: "Confiabilidade do sistema" },
    ],
  },
  projects: {
    heading: "Projetos selecionados",
    description:
      "Dois projetos em que o trabalho de frontend veio com número junto.",
    items: [
      {
        title: "Plataforma de vendas Cerasos",
        description:
          "Plataforma de vendas para farmácias que roda no WhatsApp. O cliente manda mensagem, a integração via Uazapi responde e cria o pedido, e a Getnet cuida do pagamento da tokenização até o webhook que confirma. Por cima disso, um dashboard administrativo com rastreamento de pedidos, números de vendas e avaliações.",
        role: "Fullstack Engineer",
        period: "2025",
        metrics: [
          { value: "99,9%", label: "Confiabilidade do sistema" },
          { value: "100%", label: "Pedidos automatizados" },
        ],
        tags: ["Next.js", "TypeScript", "Getnet", "Uazapi"],
      },
      {
        title: "Plataforma financeira AR3 Capital",
        description:
          "Serviços financeiros internos reunidos em um cliente só. As buscas em banco e os relatórios eram a parte lenta, então vieram primeiro. A biblioteca de UI saiu via Storybook, e toda view passou a puxar dos mesmos componentes.",
        role: "Frontend Engineer",
        period: "2022 - 2024",
        metrics: [
          { value: "+30%", label: "Eficiência operacional" },
          { value: "100%", label: "Views na biblioteca de UI" },
        ],
        tags: ["React", "Storybook", "TypeScript", "REST APIs"],
      },
    ],
    viewLive: "Acessar site",
    viewRepo: "Código",
    liveLabel: "No ar",
    privateLabel: "Projeto fechado",
    empty: "Projetos em preparação. Volte em breve.",
  },
  experience: {
    heading: "Experiência",
    items: [
      {
        company: "Cerasos",
        period: "Dez 2025 - Presente",
        role: "Fullstack Engineer",
        highlights: [
          "Construí uma plataforma de vendas para farmácias em cima do WhatsApp, via Uazapi, de forma que a mensagem do cliente vira pedido sem ninguém digitar nada.",
          "Escrevi o motor de pagamentos em Next.js e TypeScript contra a API da Getnet: tokenização, checkout customizado e listeners de webhook que mantêm o status do pedido em dia.",
          "Construí o dashboard administrativo de pedidos, números de vendas e avaliações, que substituiu as planilhas que a farmácia usava.",
          "Cuido também da infraestrutura: hospedagem, sincronização de banco, orquestração de APIs e a suíte de testes que mantém a confiabilidade em 99,9%.",
        ],
        stack: ["Next.js", "TypeScript", "Getnet", "Uazapi"],
      },
      {
        company: "Ziion Tech",
        period: "Fev 2025 - Presente",
        role: "Frontend Engineer",
        highlights: [
          "Construí uma aplicação de vitrine de imóveis em Next.js e Tailwind CSS, com Core Web Vitals como alvo da otimização e não como relatório lido depois.",
          "Montei a biblioteca interna de componentes de UI, que cortou cerca de 20% do tempo de entrega de uma feature nova.",
          "Construí o dashboard administrativo de gestão de funcionários e as visualizações de dados internas.",
          "Configurei os fluxos de Jest para os testes unitários rodarem sem ninguém precisar lembrar.",
        ],
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Jest"],
      },
      {
        company: "eAcademy",
        period: "Jun 2024 - Nov 2024",
        role: "Frontend Engineer",
        highlights: [
          "Construí as telas de agendamento e as visualizações de calendário em Next.js e Shadcn UI.",
          "Construí os dashboards de dados com Redux e Framer Motion, fechando os contratos de API com o time de backend antes de começar.",
          "Levei a suíte de testes de frontend para o pipeline de CI/CD, o que tirou a verificação manual do caminho de release.",
          "Revisei código e escrevi a documentação que evitou que as decisões de arquitetura se perdessem.",
        ],
        stack: ["Next.js", "Redux", "Shadcn UI", "Framer Motion"],
      },
      {
        company: "AR3 Capital",
        period: "Out 2022 - Fev 2024",
        role: "Frontend Engineer",
        highlights: [
          "Liderei o trabalho de client-side para reunir os serviços financeiros internos em uma plataforma só.",
          "Reescrevi as buscas em banco e os motores de relatório, o que subiu a eficiência operacional em 30%.",
          "Construí e publiquei a biblioteca de UI da empresa via Storybook, e toda view acabou nela.",
          "Fui dono do frontend de ponta a ponta, trabalhando direto com as squads de produto.",
        ],
        stack: ["React", "Storybook", "TypeScript", "REST APIs"],
      },
      {
        company: "RN3",
        period: "Abr 2023 - Out 2023",
        role: "Software Engineer (Full Stack)",
        highlights: [
          "Migrei os módulos de dados legados do Angular para Next.js e Node.js.",
          "Construí a integração de pagamentos com Stripe e as features de analytics de negócio em volta dela.",
          "Reescrevi as queries lentas de PostgreSQL, o que deixou a recuperação de dados 25% mais rápida.",
          "Embuti dashboards do Power BI, o que tirou o processamento separado do caminho do relatório.",
        ],
        stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      },
      {
        company: "Hybank",
        period: "Set 2021 - Set 2022",
        role: "Mobile Developer",
        highlights: [
          "Construí aplicativos fintech cross-platform em React Native para iOS e Android.",
          "Desenhei o design system mobile, que reduziu o trabalho de layout em toda tela criada depois dele.",
          "Cuidei da árvore de estado em Redux que conecta o app às REST APIs bancárias, pesadas em transação.",
          "Rodei testes de usabilidade e performance em dispositivo, o que baixou os erros em produção e subiu a estabilidade nas lojas.",
        ],
        stack: ["React Native", "Redux", "REST APIs"],
      },
    ],
  },
  capabilities: {
    heading: "O que faço",
    items: [
      {
        title: "Engenharia de frontend",
        description:
          "Aplicações React e Next.js construídas para continuar rápidas conforme crescem. Core Web Vitals e acessibilidade são medidos, não presumidos.",
      },
      {
        title: "Pagamentos e fintech",
        description:
          "Integrações com Stripe e Getnet do sandbox à produção, incluindo tokenização, webhooks e checkout em conformidade com PCI.",
      },
      {
        title: "Design systems e arquitetura",
        description:
          "Bibliotecas de componentes em Storybook, com Clean Architecture e DDD aplicados onde o domínio é complexo o bastante para justificar.",
      },
    ],
  },
  stack: {
    heading: "Stack",
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
    label: "Como eu trabalho",
    quote:
      "Clean Architecture e DDD não são exercício acadêmico. São o que permite um time continuar entregando sem a base de código virar contra ele. Performance e acessibilidade vêm da estrutura. Não dá para parafusar no final.",
  },
  connect: {
    heading: "Vamos conversar",
    body: "Aberto a novas oportunidades. Manda uma pergunta, ou só um oi, que eu respondo.",
    emailCta: "Enviar e-mail",
    copyCta: "Copiar e-mail",
    copiedCta: "E-mail copiado",
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
      { label: "Como eu trabalho", href: "#philosophy", external: false },
    ],
    copyright: "© 2026 Caio Stato",
  },
};

export default dictionary;
