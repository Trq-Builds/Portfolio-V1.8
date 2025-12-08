/*-----------------------------------*\
  #DATA.JS - Contenu du Portfolio
\*-----------------------------------*/

export const profileData = {
  name: "Tariq LAABOUDI",
  role: "Étudiant SIO",
  avatar: "./assets/images/my-avatar.png",
  location: "France",
  email: "tariq.laaboudi.sn@gmail.com",
  socials: [
    { icon: "logo-github", link: "https://github.com/Trq-Builds" }, // Lien Github
    { icon: "globe-outline", link: "https://drift.rip/K4ta" }  // Lien Linktree
]
};

export const aboutData = {
  text: `<p>Étudiant SIO-SISR en 2ᵉ année, spécialisé en réseaux et passionné de hardware. Organisé, méthodique et toujours prêt à bricoler, j'aime comprendre, optimiser et résoudre les problèmes.</p>
         <p>Auteur du projet Optimize Alot et de multiples documentations techniques, je construis des solutions simples, efficaces et reproductibles. Expérience pratique en Windows, dépannage et maintenance.</p>`,

};

export const resumeData = {
  education: [
    {
      school: "BTS SIO - SISR (Lycée Marie Curie)", // J'ai mis le diplôme ICI pour qu'il s'affiche
      date: "2023 — 2025",
      desc: "Option Solutions d'infrastructure, systèmes et réseaux."
    },
    {
      school: "Bac Pro SN (Lycée Saint-Pierre)", // J'ai mis le diplôme ICI pour qu'il s'affiche
      date: "2021 — 2024",
      desc: "Systèmes Numériques."
    }
  ],
  experience: [
    {
      title: "Stage Eursocan", // Titre + Entreprise fusionnés pour l'affichage
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
    { name: "Documentation Technique", percent: 80 }, // Noms raccourcis pour que ça rentre bien
    { name: "Hardware & Dépannage", percent: 90 },
    { name: "Admin Sys & Réseaux", percent: 60 },
    { name: "Gestion Infrastructure", percent: 50 }
  ]
};

export const portfolioData = [
  {
    title: "Documentation AD",
    category: "Windows",
    image: "./assets/images/project-2.svg",
    link: "https://github.com/Trq-Builds/Doc-Technique-Administrer-Un-Controleur-De-Domaine"
  },
  {
    title: "Documentation FOG",
    category: "Linux",
    image: "./assets/images/project-1.svg",
    link: "https://github.com/Trq-Builds/Doc-Technique-Service-de-deploiement-FOG"
  },
  {
    title: "Repos Portfolio",
    category: "Autre",
    image: "./assets/images/project-3.svg", // Attention j'ai remis .svg (si c'est .jpg change le)
    link: "https://github.com/Trq-Builds/2025-Portfolio-V1.8"
  },
];