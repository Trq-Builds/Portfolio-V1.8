# ` 👤 `︲Portfolio-V1.8

---

<p align="center">
  <a href="https://tariq-laab.netlify.app">
    <img src="https://img.shields.io/website?url=https://tariq-laab.netlify.app&label=site&style=for-the-badge" alt="Site Status">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
    <img src="https://img.shields.io/badge/status-active-success?style=for-the-badge" alt="Status">
    <img src="https://img.shields.io/badge/version-1.8-blue?style=for-the-badge" alt="Version">
    <img src="https://img.shields.io/badge/maintained-yes-green?style=for-the-badge" alt="Maintained">
  </a>
</p>

---

- ` 🎈 `︲**Version :** 1.8︲Réalisé dans le cadre du **BTS SIO - Option SISR (`Épreuve E5, Session 2026`)**

- ` 👤 `︲**Auteur :** *`Trq-Builds`*

- ` 🟣 `︲**Source/Fork :** https://github.com/codewithsadee/vcard-personal-portfolio

- ` 🌐 `︲**Lien :** https://tariq-laab.netlify.app

---

## ` 📘 `︲Documentation du projet.

`🌵`︲**Arborescence `ASCII` :**

```markdown
├── assets                     # 📦︲Dossier contenant toutes les ressources du site.
│   │
│   ├── css                    # 🎨︲Dossier des styles visuels.
│   │   └── style.css          # Fichier qui définit les couleurs, polices et mise en page.
│   │
│   ├── images                 # 🖼️︲Dossier des images.
│   │   ├── logo.ico           # Petite icône visible dans l'onglet du navigateur.
│   │   ├── logo.svg           # Logo du site (format haute qualité).
│   │   ├── my-avatar.png      # Ma photo de profil affichée sur le côté.
│   │   ├── project-1.svg      # Image illustrant le projet n°1.
│   │   └── project-2.svg      # Image illustrant le projet n°2.
│   │
│   └── js                     # ⚙️︲Dossier des scripts (le "cerveau" du site).
│       ├── data.js            # Contient tous les textes et informations (CV, projets...).
│       ├── main.js            # Programme principal qui construit et anime le site.
│       ├── script.js          # Gère les clics et interactions utilisateur.
│       └── theme-toggle.js    # Permet de passer du mode clair au mode sombre.
│
├── .gitignore                 # Liste des fichiers à ne pas envoyer sur GitHub.
├── index.html                 # Page principale du site (la base sur laquelle tout s'affiche).
├── index.txt                  # Notes personnelles / brouillon.
└── README.md                  # Ce que tu lis en ce moment même, pour les visiteurs ou les curieux :)

--- 

🔑︲Légende Rapide :

📦︲Dossier de ressources.
🎨︲Apparence visuelle.
🖼️︲Images et médias.
⚙️︲Code qui fait fonctionner le site.

---

```

--- 

## `🏗️`︲**Architecture du Projet :**

```markdown
┌─────────────────────────────────────────────────────────────────┐
│                        index.html                               │
│                    (Squelette / Shell)                          │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                         ASSETS                                  │
├───────────────┬───────────────────┬─────────────────────────────┤
│      CSS      │       JS          │         IMAGES              │
│   (Style)     │    (Logique)      │       (Médias)              │
├───────────────┼───────────────────┼─────────────────────────────┤
│ style.css     │ main.js ──────────│─→ Moteur principal          │
│ (Thème dark/  │ data.js ──────────│─→ Base de données           │
│  light,       │ script.js ────────│─→ Interactions UI           │
│  responsive)  │ theme-toggle.js ──│─→ Switch thème              │
└───────────────┴───────────────────┴─────────────────────────────┘
```

--- 

## `📁`︲ **Analyse par Fichier** : 

```markdown
index.html
├── Structure sémantique HTML5.
├── Points d'ancrage pour injection JS (id="...").
└── Conteneurs vides remplis dynamiquement.

style.css
├── Variables CSS (--custom-properties) pour le theming.
├── Layout Flexbox/Grid.
├── Media Queries (Responsive Design).
├── Transitions & Animations.
└── Thème sombre par défaut.
```
--- 

## `📐`︲**Couche Logique (JavaScript) :**

| Fichier | Rôle | Pattern |
|---------|------|---------|
| `main.js` | Génération dynamique du DOM, routage SPA, filtres | **Controller** |
| `data.js` | Stockage des textes, projets, expériences | **Model** (JSON-like) |
| `script.js` | Événements UI (accordéons, modals, etc.) | **Event Handler** |
| `theme-toggle.js` | Persistance thème (localStorage) | **State Manager** |

--- 

## `🔀`︲**Flux de Données :**

```
┌──────────┐      ┌──────────┐      ┌──────────┐      ┌──────────┐
│ data.js  │ ───► │ main.js  │ ───► │   DOM    │ ◄─── │ style.css│
│ (Données)│      │ (Rendu)  │      │ (Affichage)     │ (Design) │
└──────────┘      └──────────┘      └──────────┘      └──────────┘
                       │
                       ▼
              ┌────────────────┐
              │  script.js     │
              │ (Interactions) │
              └────────────────┘
```

--- 

## `⚙️`︲**Fonctionnalités Techniques :**

```markdown
// Pseudo-code des fonctionnalités principales : 

├── 🎨︲Theme Toggle :
│   ├── Détection préférence système (prefers-color-scheme).
│   ├── Sauvegarde localStorage.
│   └── Toggle class sur <body>.

├── 📄︲Navigation SPA :
│   ├── Pas de rechargement de page.
│   ├── Injection HTML dynamique.
│   └── Gestion des sections (About, Resume, Projects, Contact).

├── 🔍︲Système de Filtres (Portfolio) :
│   ├── Filtrage par catégorie.
│   └── Animation de transition.

└── 📱︲Responsive Design :
    ├── Mobile First (ou Desktop First).
    ├── Breakpoints multiples.
    └── Sidebar collapsible.
    
```

---

## `🚀` ︲**Technique Résumée :**

```markdown
╔═══════════════════════════════════════════╗
║            FRONTEND STACK                 ║
╠═══════════════════════════════════════════╣
║  HTML5    │  Structure sémantique         ║
║  CSS3     │  Custom Properties + Flexbox  ║
║  JS ES6+  │  Modules, DOM API,localStorage║
╠═══════════════════════════════════════════╣
║            INFRASTRUCTURE                 ║
╠═══════════════════════════════════════════╣
║  Netlify  │  CDN + HTTPS + Deploy auto    ║
║  Git      │  Versioning                   ║
╚═══════════════════════════════════════════╝

```

--- 

## ` 🔻 `︲**Améliorations prévues :**

- ` 🟠 `︲Évolution en cours du module « OUTILS » impliquant une réécriture technique, l’ajout de fonctionnalités et l’enrichissement de la documentation, incluant la création des rubriques « Certifications » et « Veille informatique », afin de pallier un contenu actuellement incomplet et insuffisamment détaillé.

- ` 🟠 `︲Création en cours du module « VEILLE », impliquant la structuration et la rédaction détaillée de la veille informatique réalisée sur l’année précédente afin de formaliser et documenter les informations technologiques collectées.

---

## ` 🧰 `︲Outils et Ressources utilisés :

---

> [!TIP]
> Vous trouverez ici la liste de tous les outils, ressources et services utilisés pour la création de ce Portfolio.  
> Les liens correspondants sont accessibles en cliquant sur l’emoji : `🌐`.

---

-  `🗃️ ︲ 🌐` **︲Outils, Ressources et Services :**

- ` 🤖 ` **︲`Claude-3.7-Sonnet - 20250219-Thinking-32K`** ︲[`🌐`](https://claude.ai/)
- ` 🤖 ` **︲`Claude-4.6-Sonnet - Thinking`** ︲[`🌐`](https://claude.ai/)
- ` 🌐 ` **︲`Code Source` :** **`codewithsadee/vcard-personal-portfolio`** ︲[`🌐`](https://github.com/codewithsadee/vcard-personal-portfolio)
- ` 🤖 ` **︲`Gemini 3.0 PRO`** ︲[`🌐`](https://gemini.google.com/app)
- ` 🤖 ` **︲`GPT-5.1`** ︲[`🌐`](https://chatgpt.com/)
- ` 🤖 ` **︲`LmArena.AI`** ︲[`🌐`](https://lmarena.ai/)
- ` 🌐 ` **︲`Netlifly.app`** ︲[`🌐`](https://app.netlify.com/)
- ` 🌐 ` **︲`RepoTreeGenerator`** ︲[`🌐`](https://ascii-repotree.vercel.app/generator)
- ` 🌐 ` **︲`Uiverse.io`** ︲[`🌐`](https://uiverse.io/)
- ` 🌐 ` **︲`VSCodium`** ︲[`🌐`](https://vscodium.com/)

---


















