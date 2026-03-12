/*-----------------------------------*\
  #DATA.JS - Contenu du Portfolio
\*-----------------------------------*/

export const profileData = {
  name: "Tariq LAABOUDI",
  role: "Étudiant SIO",
  avatar: "./assets/images/avatar-light.webp",
  avatarLight: "./assets/images/avatar-dark.webp",
  email: "tariq.laaboudi@fbi.one",
  socials: [
    { icon: "logo-github", link: "https://github.com/Trq-Builds" },
    { icon: "globe-outline", link: "https://drift.rip/K4ta" }
  ]
};

export const aboutData = {
  text: `<p>Étudiant SIO-SISR en 2ᵉ année, spécialisé en réseaux et passionné de hardware. Organisé, méthodique et toujours prêt à bricoler, j'aime comprendre, optimiser et résoudre les problèmes.</p>
         <p>Auteur du projet Optimize Alot et de multiples documentations techniques, je construis des solutions simples, efficaces et reproductibles. Expérience pratique en Windows, dépannage et maintenance.</p>`,
};

export const resumeData = {
  education: [
    {
      school: "BTS SIO - SISR (Lycée Marie Curie)",
      date: "2023 — 2025",
      desc: "Option Solutions d'infrastructure, systèmes et réseaux."
    },
    {
      school: "Bac Pro SN (Lycée Saint-Pierre)",
      date: "2021 — 2024",
      desc: "Systèmes Numériques."
    }
  ],
  experience: [
    {
      title: "Stage Eursocan",
      date: "2025",
      desc: "Accueil client, dépannage PC (hardware/software) et gestion logistique."
    },
    {
      title: "Stage RPM MULTIMEDIA",
      date: "2023",
      desc: "Maintenance et réparation PC, électronique de base et support client."
    }
  ],
  skills: [
    { name: "Documentation Technique", percent: 80 },
    { name: "Hardware & Dépannage", percent: 90 },
    { name: "Admin Sys & Réseaux", percent: 60 },
    { name: "Gestion Infrastructure", percent: 50 }
  ]
};


// ========== OUTILS ==========
export const outilsData = [
  {
    title: "Intelligence Artificielle",
    icon: "sparkles-outline",
    items: [
      {
        name: "Claude 3.7 Sonnet",
        description: "Assistant IA pour la rédaction, le code et l'analyse technique.",
        link: "https://claude.ai/"
      },
      {
        name: "ChatGPT-5.1",
        description: "IA conversationnelle pour recherche et brainstorming.",
        link: "https://chatgpt.com/"
      },
      {
        name: "Gemini 3.0 PRO",
        description: "IA de Google pour analyse de documents et recherche.",
        link: "https://gemini.google.com/app"
      },
      {
        name: "LmArena.AI",
        description: "Comparaison et test de différents modèles IA.",
        link: "https://lmarena.ai/"
      }
    ]
  },
  {
    title: "Développement & Outils",
    icon: "code-slash-outline",
    items: [
      {
        name: "Visual Studio Code",
        description: "Éditeur de code principal pour tous mes projets.",
        link: "https://code.visualstudio.com/"
      },
      {
        name: "GitHub",
        description: "Gestion de version et hébergement de mes projets.",
        link: "https://github.com/Trq-Builds"
      },
      {
        name: "Netlify",
        description: "Déploiement et hébergement de sites web statiques.",
        link: "https://app.netlify.com/"
      },
      {
        name: "RepoTreeGenerator",
        description: "Générateur d'arborescence ASCII pour documentation.",
        link: "https://ascii-repotree.vercel.app/generator"
      }
    ]
  },
  {
    title: "Documentation & Organisation",
    icon: "document-text-outline",
    items: [
      {
        name: "Notion",
        description: "Organisation de mes notes et planning de projets.",
        link: "https://notion.so"
      },
      {
        name: "Markdown",
        description: "Format de documentation pour tous mes README et guides.",
        link: ""
      },
      {
        name: "Draw.io",
        description: "Création de schémas réseau et diagrammes techniques.",
        link: "https://app.diagrams.net/"
      }
    ]
  }
];


// ========== CERTIFICATIONS ==========
export const certificationsData = [
  {
    title: "Certifications obtenues",
    icon: "ribbon-outline",
    items: [
      {
        name: "Exemple — Certification 1",
        issuer: "Organisme",
        date: "2024",
        description: "Description courte de la certification.",
        link: ""
      }
    ]
  },
  {
    title: "En cours / Préparées",
    icon: "time-outline",
    items: [
      {
        name: "Exemple — Certification en cours",
        issuer: "Organisme",
        date: "2025",
        description: "Certification en cours de préparation.",
        link: ""
      }
    ]
  }
];


// ========== MATÉRIEL ==========
export const materielData = [
  {
    title: "Poste de travail",
    icon: "desktop-outline",
    items: [
      {
        name: "Exemple — CPU",
        description: "Processeur principal de la machine.",
        link: ""
      },
      {
        name: "Exemple — GPU",
        description: "Carte graphique utilisée.",
        link: ""
      },
      {
        name: "Exemple — RAM",
        description: "Mémoire vive installée.",
        link: ""
      }
    ]
  },
  {
    title: "Périphériques",
    icon: "hardware-chip-outline",
    items: [
      {
        name: "Exemple — Écran",
        description: "Moniteur principal.",
        link: ""
      },
      {
        name: "Exemple — Clavier",
        description: "Clavier mécanique utilisé.",
        link: ""
      }
    ]
  },
  {
    title: "Réseau & Serveurs",
    icon: "server-outline",
    items: [
      {
        name: "Exemple — Switch",
        description: "Switch réseau de lab.",
        link: ""
      },
      {
        name: "Exemple — NAS / Serveur",
        description: "Serveur de stockage ou de test.",
        link: ""
      }
    ]
  }
];


// ========== PORTFOLIO ==========
export const portfolioData = [
  {
    title: "Documentation AD",
    category: "Windows",
    image: "https://images-ext-1.discordapp.net/external/u96J1Oq9Qwr2EEZIkAHagvYs4hzi8udT8zKocSctOkA/https/opengraph.githubassets.com/6c6dc15705e48558420ca1f66c1dc3a5b50b56ddd8f50d5fe4d27045266be97b/Trq-Builds/Doc-Technique-Administrer-Un-Controleur-De-Domaine?format=webp&width=1650&height=825",
    link: "https://github.com/Trq-Builds/Doc-Technique-Administrer-Un-Controleur-De-Domaine"
  },
  {
    title: "Documentation FOG",
    category: "Linux",
    image: "https://images-ext-1.discordapp.net/external/Kdnuz-wYoqoQ-Ms7hloWkDBNu1woedcq3yAOe_ZlrJI/https/opengraph.githubassets.com/4af882787510cec0398c8afa198ae99cdc9cd5b14e325e1f899a6e4af7057b89/Trq-Builds/Doc-Technique-Service-de-deploiement-FOG?format=webp&width=1650&height=825",
    link: "https://github.com/Trq-Builds/Doc-Technique-Service-de-deploiement-FOG"
  },
  {
    title: "Repos Portfolio",
    category: "Autre",
    image: "https://images-ext-1.discordapp.net/external/BdIp7W1i0SBh5fZTPzrB9fnyzEWPTaf_vQFMwUyuKBA/https/opengraph.githubassets.com/17cefd3511913f4e2f4f733da87b007b8f4ef2b19dab60530cf4d8eaefcb150e/Trq-Builds/Portfolio-V1.8?format=webp&width=1650&height=825",
    link: "https://github.com/Trq-Builds/2025-Portfolio-V1.8"
  },
];