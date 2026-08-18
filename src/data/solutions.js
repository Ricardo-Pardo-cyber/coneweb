export const LANDING_PAGES_PLANS = [
  {
    id: "express",
    title: "Landing Page Express",
    price: "R$ 390",
    badge: null,
    icon: "🚀",
    demoUrl: "https://deliciasdamaria.pages.dev/",
    demoLabel: "Ver Modelo Online (Delícias da Maria)",
    description: "Página profissional para empresas que querem começar rapidamente sua presença digital.",
    features: [
      "Logo e identidade visual",
      "Informações da empresa",
      "Botão de contato do WhatsApp",
      "Design 100% responsivo (Celular/Tablet/PC)",
      "Certificado de segurança HTTPS",
      "Modelo de exemplo online disponível (Delícias da Maria)"
    ],
    idealFor: "Empresas que querem divulgar seus serviços e receber clientes diretamente pelo WhatsApp.",
    whatsappMessage: "Olá! Tenho interesse na Landing Page Express da Conexão Web no valor de R$ 390 (modelo Delícias da Maria: https://deliciasdamaria.pages.dev/)."
  },
  {
    id: "basica",
    title: "Landing Page Básica",
    price: "R$ 790",
    badge: null,
    icon: "🏢",
    demoUrl: "https://equilibrioealma.pages.dev/",
    demoLabel: "Ver Modelo Online (Equilíbrio e Alma)",
    description: "Tudo que sua empresa precisa para ter uma presença digital mais completa.",
    features: [
      "Tudo da Express",
      "Galeria de fotos e portfólio",
      "Localização com Google Maps",
      "Links para Instagram, Facebook, TikTok e YouTube",
      "Exibição de horário de funcionamento",
      "Otimização SEO básico para buscas",
      "Modelo de exemplo online disponível (Equilíbrio e Alma)"
    ],
    idealFor: "Empresas que desejam um site institucional mais completo e transmitir maior credibilidade aos clientes.",
    whatsappMessage: "Olá! Tenho interesse na Landing Page Básica da Conexão Web no valor de R$ 790 (modelo Equilíbrio e Alma: https://equilibrioealma.pages.dev/)."
  },
  {
    id: "profissional",
    title: "Landing Page Profissional",
    price: "R$ 1.490",
    badge: "MAIS VENDIDA",
    isPopular: true,
    icon: "⭐",
    demoUrl: "https://conex-opet.conexweb.workers.dev/",
    demoLabel: "Ver Modelo Online (Conexão Pet)",
    description: "Ideal para capturar leads e contatos de orçamento organizados sem complicações.",
    features: [
      "Tudo da Básica",
      "Formulário de contato interativo",
      "Envio de mensagens direto para e-mail ou WhatsApp",
      "Organização e validação dos contatos recebidos",
      "Sem necessidade de banco de dados e sem mensalidades",
      "Modelo de exemplo online disponível (Conexão Pet)"
    ],
    idealFor: "Empresas que desejam receber pedidos de orçamento ou contatos organizados sem precisar armazenar os dados.",
    whatsappMessage: "Olá! Tenho interesse na Landing Page Profissional da Conexão Web no valor de R$ 1.490 (modelo Conexão Pet: https://conex-opet.conexweb.workers.dev/)."
  },
  {
    id: "premium",
    title: "Landing Page Premium",
    price: "R$ 2.490",
    badge: "COMPLETA",
    icon: "👑",
    description: "Página completa integrada a banco de dados e painel para gestão total de contatos.",
    features: [
      "Tudo da Profissional",
      "Integração com Supabase (Banco de Dados)",
      "Banco de dados em nuvem de alta velocidade",
      "Armazenamento ilimitado de cadastros e leads",
      "Painel administrativo para consultar clientes",
      "Exportação de informações para Excel e CSV"
    ],
    idealFor: "Empresas que desejam criar uma base de clientes, acompanhar solicitações e gerenciar os cadastros pela internet.",
    whatsappMessage: "Olá! Tenho interesse na Landing Page Premium da Conexão Web no valor de R$ 2.490."
  }
];

export const MANUTENCAO_OPCIONAL = {
  title: "Planos de Manutenção & Suporte Técnico",
  subtitle: "Mantenha seu site ou sistema sempre atualizado, seguro e no ar com nossa equipe técnica.",
  disclaimer: "OBSERVAÇÃO: A contratação da manutenção mensal é 100% OPCIONAL. Você adquire o projeto com investimento único e só contrata a manutenção se desejar suporte contínuo e atualizações periódicas feitas por nós, sem fidelidade.",
  plans: [
    {
      id: "manutencao-essencial",
      name: "Manutenção Essencial",
      price: "R$ 99",
      period: "/mês",
      badge: "100% OPCIONAL",
      isPopular: true,
      description: "Ideal para sites e landing pages que necessitam de estabilidade, segurança e pequenas atualizações periódicas.",
      features: [
        "Monitoramento de segurança e uptime 24/7",
        "Suporte técnico direto pelo WhatsApp",
        "Até 2 alterações mensais de conteúdo (textos, fotos, contatos ou preços)",
        "Renovação de certificado SSL / HTTPS",
        "Ajustes rápidos e correções pontuais",
        "Sem fidelidade: cancele a qualquer momento"
      ],
      whatsappMessage: "Olá! Gostaria de saber mais sobre o plano de Manutenção Essencial (Opcional - R$ 99/mês) da Conexão Web."
    },
    {
      id: "manutencao-pro",
      name: "Manutenção & Suporte Pro",
      price: "R$ 180",
      period: "/mês",
      badge: "100% OPCIONAL",
      isPopular: false,
      description: "Recomendado para sistemas, cadastros e dashboards com banco de dados que exigem rotina contínua de suporte.",
      features: [
        "Tudo do plano Essencial",
        "Até 5 alterações mensais de telas e relatórios",
        "Rotina de backup periódico dos dados em nuvem",
        "Otimização contínua de performance e velocidade",
        "Suporte prioritário via WhatsApp",
        "Assistência na exportação de relatórios e dados",
        "Sem fidelidade: cancele quando quiser"
      ],
      whatsappMessage: "Olá! Gostaria de saber mais sobre o plano de Manutenção Pro (Opcional - R$ 180/mês) da Conexão Web."
    }
  ]
};

export const SISTEMAS_CADASTRO = [
  {
    id: "sistema-local",
    title: "SISTEMA SEM BANCO DE DADOS",
    price: "R$ 990",
    badge: "PRÁTICO & RÁPIDO",
    isPopular: false,
    icon: "💻",
    demoUrl: "https://sistemasb.conexweb.workers.dev/",
    demoLabel: "Ver Modelo Online (Sistema Sem Banco)",
    description: "Indicado para pequenos negócios que utilizam o sistema em apenas um computador e não precisam compartilhar informações.",
    features: [
      "Cadastro completo de dados",
      "Pesquisa rápida e filtros",
      "Edição e atualização de registros",
      "Exclusão segura de dados",
      "Dados armazenados no próprio navegador",
      "Tecnologia Local Storage",
      "Sem necessidade de login ou senhas",
      "Modelo de exemplo online disponível (Sistema SB)"
    ],
    whatsappMessage: "Olá! Tenho interesse no Sistema sem Banco de Dados da Conexão Web no valor de R$ 990 (modelo online: https://sistemasb.conexweb.workers.dev/)."
  },
  {
    id: "sistema-cloud",
    title: "SISTEMA COM BANCO DE DADOS",
    price: "R$ 2.990",
    badge: "RECOMENDADO",
    isPopular: true,
    icon: "☁️",
    demoUrl: "https://controledemateriais.conexweb.workers.dev/",
    demoLabel: "Ver Modelo Online (Controle de Materiais)",
    description: "Empresas que precisam acessar os dados de qualquer lugar e permitir que vários usuários utilizem o sistema.",
    features: [
      "Login seguro de usuários e controle de acesso",
      "Banco de dados em nuvem Supabase",
      "Cadastro, pesquisa, edição e exclusão completa",
      "Upload de imagens e documentos",
      "Armazenamento seguro em nuvem com backup",
      "Acesso de qualquer lugar (Celular, Tablet e PC)",
      "Possibilidade de múltiplos usuários simultâneos",
      "Modelo de exemplo online disponível (Controle de Materiais)"
    ],
    whatsappMessage: "Olá! Tenho interesse no Sistema com Banco de Dados da Conexão Web no valor de R$ 2.990 (modelo online: https://controledemateriais.conexweb.workers.dev/)."
  }
];

export const SISTEMAS_COMPARISON = [
  { feature: "Cadastro, Pesquisa, Edição e Exclusão", local: true, cloud: true },
  { feature: "Armazenamento no Navegador (Local)", local: true, cloud: false },
  { feature: "Armazenamento Seguro na Nuvem", local: false, cloud: true },
  { feature: "Sem necessidade de Login", local: true, cloud: false },
  { feature: "Autenticação e Login de Usuários", local: false, cloud: true },
  { feature: "Acesso de Múltiplos Dispositivos", local: false, cloud: true },
  { feature: "Upload de Imagens e Arquivos", local: false, cloud: true },
  { feature: "Múltiplos Usuários Simultâneos", local: false, cloud: true },
];

export const DASHBOARDS = [
  {
    id: "dash-excel",
    title: "DASHBOARD SEM BANCO DE DADOS",
    price: "R$ 1.290",
    badge: "RÁPIDO & PRÁTICO",
    isPopular: false,
    icon: "📈",
    demoUrl: "https://dashweb.conexweb.workers.dev/",
    demoLabel: "Ver Modelo Online (DashWeb)",
    description: "Empresas que utilizam planilhas Excel e desejam visualizar seus dados de forma profissional e intuitiva.",
    features: [
      "Importação direta de arquivos Excel (.xlsx)",
      "Importação de arquivos CSV",
      "Gráficos interativos (Pizza, Barras, Linhas)",
      "Indicadores de desempenho (KPIs)",
      "Filtros inteligentes por data e categoria",
      "Geração de relatórios em PDF",
      "Funcionamento 100% local sem banco de dados",
      "Modelo de exemplo online disponível (DashWeb)"
    ],
    whatsappMessage: "Olá! Tenho interesse no Dashboard sem Banco de Dados da Conexão Web no valor de R$ 1.290 (modelo DashWeb: https://dashweb.conexweb.workers.dev/)."
  },
  {
    id: "dash-cloud",
    title: "DASHBOARD COM BANCO DE DADOS",
    price: "R$ 3.490",
    badge: "RECOMENDADO",
    isPopular: true,
    icon: "📊",
    description: "Empresas que desejam acompanhar indicadores automaticamente, sem depender de planilhas.",
    features: [
      "Login de usuários com permissões",
      "Banco de dados em nuvem Supabase",
      "Gráficos interativos em tempo real",
      "Indicadores automatizados e métricas",
      "Atualização de dados em tempo real",
      "Filtros avançados e comparações de períodos",
      "Relatórios exportáveis",
      "Armazenamento em nuvem com histórico seguro"
    ],
    whatsappMessage: "Olá! Tenho interesse no Dashboard com Banco de Dados da Conexão Web no valor de R$ 3.490."
  }
];

export const MUSIC_SERVICES = [
  {
    id: "musica-personalizada",
    title: "MÚSICA PERSONALIZADA",
    price: "R$ 250 a R$ 800",
    icon: "🎼",
    badge: "IA & PRODUÇÃO DIGITAL",
    description: "Música exclusiva criada com Inteligência Artificial e produção profissional, incluindo letra, melodia e áudio final em alta definição.",
    idealFor: [
      "Presentes especiais",
      "Homenagens emocionantes",
      "Aniversários e bodas",
      "Casamentos e momentos marcantes",
      "Projetos pessoais e artísticos"
    ],
    whatsappMessage: "Olá! Tenho interesse em uma Música Personalizada."
  },
  {
    id: "jingle-comercial",
    title: "JINGLE COMERCIAL",
    price: "R$ 600 a R$ 1.500",
    icon: "📢",
    badge: "MKT & VENDAS",
    description: "Música exclusiva e chiclete para divulgação marcante da sua empresa, produto ou serviço na internet e mídias.",
    idealFor: [
      "Empresas e comércios locais",
      "Lançamento de produtos",
      "Campanhas promocionais",
      "Vídeos de vendas e Reels",
      "Anúncios para redes sociais",
      "Publicidade em Rádio e Carro de Som"
    ],
    whatsappMessage: "Olá! Tenho interesse em um Jingle Comercial."
  }
];
