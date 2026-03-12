/*-----------------------------------*\
  #MAIN.JS
\*-----------------------------------*/

import {
  profileData,
  aboutData,
  resumeData,
  outilsData,
  certificationsData,
  materielData,
  portfolioData
} from './data.js';

// --- UTILITAIRES ---
const getElement    = (selector) => document.querySelector(selector);
const getAllElements = (selector) => document.querySelectorAll(selector);

const render = (selector, html) => {
  const el = getElement(selector);
  if (el) {
    el.innerHTML = html;
  } else {
    console.warn(`Attention: "${selector}" introuvable dans le HTML.`);
  }
};

// --- NAVBAR ---
function loadNavbar() {
  const pages = [
    { label: "À propos",       id: "about" },
    { label: "Parcours",       id: "resume" },
    { label: "Outils",         id: "outils" },
    { label: "Certifications", id: "certifications" },
    { label: "Matériel",       id: "materiel" },
    { label: "Portfolio",      id: "portfolio" }
  ];

  const navHTML = pages.map((page, index) => `
    <li class="navbar-item">
      <button class="navbar-link ${index === 0 ? 'active' : ''}" data-nav-link="${page.id}">
        ${page.label}
      </button>
    </li>
  `).join('');

  render('.navbar-list', navHTML);
}

// --- PROFIL (sans localisation) ---
function loadProfile() {
  const imgEl = getElement('.avatar-box img');
  if (imgEl) imgEl.src = profileData.avatar;
  {
  const isDark = document.body.classList.contains('dark-mode');
  imgEl.src = isDark ? profileData.avatar : profileData.avatarLight;
}

  const nameEl = getElement('.info-content .name');
  if (nameEl) nameEl.textContent = profileData.name;

  const roleEl = getElement('.info-content .title');
  if (roleEl) roleEl.textContent = profileData.role;

  // Contacts — email uniquement (pas de localisation)
  const contactHTML = `
    <li class="contact-item">
      <div class="icon-box"><ion-icon name="mail-outline"></ion-icon></div>
      <div class="contact-info">
        <p class="contact-title">Email</p>
        <a href="mailto:${profileData.email}" class="contact-link">${profileData.email}</a>
      </div>
    </li>
  `;
  render('.contacts-list', contactHTML);

  // Socials
  const socialHTML = profileData.socials.map(social => `
    <li class="social-item">
      <a href="${social.link}" class="social-link" target="_blank">
        <ion-icon name="${social.icon}"></ion-icon>
      </a>
    </li>
  `).join('');
  render('.social-list', socialHTML);
}

// --- À PROPOS ---
function loadAbout() {
  render('.about-text', aboutData.text);
}

// --- PARCOURS ---
function loadResume() {
  const eduHTML = resumeData.education.map(item => `
    <li class="timeline-item">
      <h4 class="h4 timeline-item-title">${item.school}</h4>
      <span>${item.date}</span>
      <p class="timeline-text">${item.desc}</p>
    </li>
  `).join('');
  render('.education-list', eduHTML);

  const expHTML = resumeData.experience.map(item => `
    <li class="timeline-item">
      <h4 class="h4 timeline-item-title">${item.title}</h4>
      <span>${item.date}</span>
      <p class="timeline-text">${item.desc}</p>
    </li>
  `).join('');
  render('.experience-list', expHTML);

  const skillsHTML = resumeData.skills.map(skill => `
    <li class="skills-item">
      <div class="title-wrapper">
        <h5 class="h5">${skill.name}</h5>
        <data value="${skill.percent}">${skill.percent}%</data>
      </div>
      <div class="skill-progress-bg">
        <div class="skill-progress-fill" style="width: ${skill.percent}%;"></div>
      </div>
    </li>
  `).join('');
  render('.skills-list', skillsHTML);
}

// --- OUTILS ---
function loadOutils() {
  const outilsHTML = outilsData.map(category => `
    <li class="tools-category">
      <div class="title-wrapper">
        <div class="icon-box"><ion-icon name="${category.icon}"></ion-icon></div>
        <h3 class="h3">${category.title}</h3>
      </div>
      <ul class="tools-items">
        ${category.items.map(item => `
          <li class="tool-item">
            <div class="tool-content">
              <h4 class="h4">${item.name}</h4>
              <p class="tool-description">${item.description}</p>
              ${item.link ? `<a href="${item.link}" class="tool-link" target="_blank">Voir le site <ion-icon name="open-outline"></ion-icon></a>` : ''}
            </div>
          </li>
        `).join('')}
      </ul>
    </li>
  `).join('');
  render('.tools-list', outilsHTML);
}

// --- CERTIFICATIONS ---
function loadCertifications() {
  const certHTML = certificationsData.map(category => `
    <li class="tools-category">
      <div class="title-wrapper">
        <div class="icon-box"><ion-icon name="${category.icon}"></ion-icon></div>
        <h3 class="h3">${category.title}</h3>
      </div>
      <ul class="tools-items">
        ${category.items.map(item => `
          <li class="tool-item">
            <div class="tool-content">
              <h4 class="h4">${item.name}</h4>
              ${item.issuer ? `<p class="cert-meta"><ion-icon name="business-outline"></ion-icon> ${item.issuer}${item.date ? ` — ${item.date}` : ''}</p>` : ''}
              <p class="tool-description">${item.description}</p>
              ${item.link ? `<a href="${item.link}" class="tool-link" target="_blank">Voir la certification <ion-icon name="open-outline"></ion-icon></a>` : ''}
            </div>
          </li>
        `).join('')}
      </ul>
    </li>
  `).join('');
  render('.certifications-list', certHTML);
}

// --- MATÉRIEL ---
function loadMateriel() {
  const materielHTML = materielData.map(category => `
    <li class="tools-category">
      <div class="title-wrapper">
        <div class="icon-box"><ion-icon name="${category.icon}"></ion-icon></div>
        <h3 class="h3">${category.title}</h3>
      </div>
      <ul class="tools-items">
        ${category.items.map(item => `
          <li class="tool-item">
            <div class="tool-content">
              <h4 class="h4">${item.name}</h4>
              <p class="tool-description">${item.description}</p>
              ${item.link ? `<a href="${item.link}" class="tool-link" target="_blank">Voir le produit <ion-icon name="open-outline"></ion-icon></a>` : ''}
            </div>
          </li>
        `).join('')}
      </ul>
    </li>
  `).join('');
  render('.materiel-list', materielHTML);
}

// --- PORTFOLIO ---
function loadPortfolio() {
  const projectsHTML = portfolioData.map(project => `
    <li class="project-item active" data-category="${project.category}">
      <a href="${project.link}" target="_blank">
        <figure class="project-img">
          <div class="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>
          <img src="${project.image}" alt="${project.title}" loading="lazy" onerror="this.src='https://placehold.co/600x400?text=Projet'">
        </figure>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-category">${project.category}</p>
      </a>
    </li>
  `).join('');
  render('.project-list', projectsHTML);

  const categories = ["Tout", ...new Set(portfolioData.map(p => p.category))];
  const filterHTML = categories.map((cat, index) => `
    <li class="filter-item">
      <button class="${index === 0 ? 'active' : ''}" data-filter="${cat}">${cat}</button>
    </li>
  `).join('');
  render('.filter-list', filterHTML);

  setupFilters();
}

// --- INTERACTIONS ---
function setupNavigation() {
  const navLinks = document.querySelectorAll('[data-nav-link]');
  const pages    = document.querySelectorAll('[data-page]');

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      const target = this.dataset.navLink.toLowerCase();

      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');

      let pageFound = false;
      pages.forEach(page => {
        if (page.dataset.page.toLowerCase() === target) {
          page.classList.add('active');
          window.scrollTo(0, 0);
          pageFound = true;
        } else {
          page.classList.remove('active');
        }
      });

      if (!pageFound) console.error("Page introuvable pour : " + target);
    });
  });
}

function setupFilters() {
  const filterBtns = getAllElements('[data-filter]');
  const projects   = getAllElements('.project-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const category = this.getAttribute('data-filter');
      projects.forEach(project => {
        if (category === 'Tout' || project.getAttribute('data-category') === category) {
          project.classList.add('active');
        } else {
          project.classList.remove('active');
        }
      });
    });
  });
}

function setupSidebar() {
  const sidebar    = getElement('.sidebar');
  const sidebarBtn = getElement('[data-sidebar-btn]');
  if (sidebarBtn && sidebar) {
    sidebarBtn.addEventListener('click', () => sidebar.classList.toggle('active'));
  }
}

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
  loadNavbar();
  loadProfile();
  loadAbout();
  loadResume();
  loadOutils();
  loadCertifications();
  loadMateriel();
  loadPortfolio();

  setupNavigation();
  setupSidebar();
});