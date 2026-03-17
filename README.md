# ` ⚫ ` ` ⚪ ` Portfolio V1.8 ︲ Tariq LAABOUDI

<p align="center">
  <img src="https://img.shields.io/website?url=https://tariq-laab.netlify.app&label=deploy&style=for-the-badge">
  <img src="https://img.shields.io/badge/version-1.8-blue?style=for-the-badge">
  <img src="https://img.shields.io/badge/stack-HTML5%2FCSS3%2FJS_ES6+-informational?style=for-the-badge">
  <img src="https://img.shields.io/badge/hosting-Netlify_CDN-00C7B7?style=for-the-badge&logo=netlify">
  <img src="https://img.shields.io/badge/BTS_SIO-SISR_E5_2026-8E95E1?style=for-the-badge">
</p>

` 👤 `︲**Auteur :** `Trq-Builds`

` 🌐 `︲**Live :** https://tariq-laab.netlify.app

` 🟣 `︲**Fork base :** [codewithsadee/vcard-personal-portfolio](https://github.com/codewithsadee/vcard-personal-portfolio)

---

## ` ⚫ `︲Architecture

SPA statique. Aucun framework. Rendu DOM intégralement piloté par `main.js` à partir des données déclarées dans `data.js`.

```text
┌──────────┐      ┌──────────┐      ┌──────────┐      ┌──────────┐
│ data.js  │ ───► │ main.js  │ ───► │   DOM    │ ◄─── │ style.css│
│  Model   │      │Controller│      │   View   │      │ (Design) │
└──────────┘      └──────────┘      └──────────┘      └──────────┘
                       │
                       ▼
              ┌────────────────┐
              │   script.js    │
              │ Event Handling │
              └────────────────┘
```

`index.html` est un shell sans contenu statique. Tous les nœuds DOM (navbar, sidebar, sections) sont injectés au `DOMContentLoaded`.

---

## ` ⚪ `︲Composants JS

| Fichier | Pattern | Responsabilité |
|---|---|---|
| `data.js` | Model | Source unique : profil, parcours, outils, certifications, portfolio |
| `main.js` | Controller | Rendu DOM, routage SPA, filtres portfolio |
| `script.js` | Event Handler | Sidebar toggle, filtres mobile, nav links |
| `theme-toggle.js` | State Manager | Persistance `localStorage`, swap favicon/avatar |

---

## ` ⚫ ` CSS ︲ Points notables

- **Custom Properties** : Palette dual-mode (`--bg-body`, `--accent-color`, etc.), shadows neumorphiques paramétrées par mode.
- **Bascule Thème** : Via `body.dark-mode` uniquement ︲ aucune duplication de règles.
- **Responsive** : Mobile-first, breakpoints `580px / 1024px / 1250px`, sidebar sticky sur wide.
- **Animations** : `@keyframes fade` + `scaleUp` sur les transitions de page/projet.

---

## ` ⚪ `︲Déploiement

```text
Local Dev ──► Git Push ──► GitHub (Source)
                │
                └────────► Netlify CLI (Manual Deploy)
                               │
                               ▼
                     CDN + HTTPS + tariq-laab.netlify.app
```

**Zéro automatisation.** Déploiement déclenché manuellement via la CLI Netlify après validation locale.

---

## ` ⚫ `︲SISR Lab ︲ Documentation Technique (E5)

Projets documentés en Markdown, hébergés sur GitHub :

| Projet | Catégorie | Lien |
|---|---|---|
| Service de déploiement FOG | Linux / Imaging | [🌐](https://github.com/Trq-Builds/Doc-Technique-Service-de-deploiement-FOG) |
| Administrer un contrôleur de domaine | Windows Server | [🌐](https://github.com/Trq-Builds/Doc-Technique-Administrer-Un-Controleur-De-Domaine) |
| Installation Windows Server 2025 | Windows | [🌐](https://github.com/Trq-Builds/Doc-Technique-Installation-Windows-Server-2025) |
| Installation Windows 11 | Windows | [🌐](https://github.com/Trq-Builds/Doc-Technique-Installation-Windows-11) |
| Installation Debian 13 (headless) | Linux | [🌐](https://github.com/Trq-Builds/Doc-Technique-installation-Debian-13-sans-interface-graphique) |
| Supervision réseau ︲ Zabbix + Grafana | Linux / Monitoring | [🌐](https://github.com/Trq-Builds/Doc-Technique-Superviser-Un-Reseau-Avec-Zabbix-et-Grafana) |
| GLPI | ITSM | [🌐](https://github.com/Trq-Builds/GLPI) |
| TP Des serveurs aux services | Infrastructure | [🌐](https://github.com/Trq-Builds/TP-Des-serveurs-aux-services) |
| CEJMA TP1 & TP2 | Réseau | [🌐](https://github.com/Trq-Builds/TP1-TP2-CEJMA) |

---

## `  ⚪  `︲Stack & Outils

```text
Frontend   : HTML5 · CSS3 Custom Properties · JS ES6+ Modules
Hosting    : Netlify (Manual Deploy, CDN, HTTPS)
Versioning : Git / GitHub
IDE        : VSCodium
IA         : Claude Sonnet · GPT-5.1 · Gemini 3.0 Pro
Schémas    : Draw.io / ASCII
```

---

## ` ⚫ `︲Backlog

- [ ] Module **Veille informatique** ︲ Structuration et rédaction.
- [ ] Module **Certifications** ︲ Enrichissement contenu.
- [ ] Ajout TP-DNS, TP-KALI, TP-DHCP dans le portfolio.

---
