import { state } from './state.js';
import { animateCounters, staggerCards } from './effects.js';
import { qsa } from './utils.js';

const STAGGER_SELECTOR = '.skill-card-3d, .project-card, .contact-card, .about-stat-card, .about-detail-card, .interest-item, .exp-card, .timeline-card, .skill-category-card, .skill-icon-item, .settings-section, .support-action-card, .faq-item, .support-contact-card';

const visitedPages = new Set();

export function initNavigation() {
    const navLinks = qsa('.nav-link');
    const sidebarLinks = qsa('.sidebar-link');
    const mobileNavLinks = qsa('.mobile-nav-link');
    const pageLinks = qsa('.page-link');
    const pages = qsa('.page');

    function switchPage(pageName) {
        navLinks.forEach(link => link.classList.toggle('active', link.dataset.page === pageName));
        sidebarLinks.forEach(link => link.classList.toggle('active', link.dataset.page === pageName));
        mobileNavLinks.forEach(link => link.classList.toggle('active', link.dataset.page === pageName));
        pages.forEach(page => {
            page.classList.remove('active');
            if (page.id === pageName) {
                page.classList.add('active');
                page.style.animation = 'none';
                page.offsetHeight;
                if (state.animations.transitions) {
                    page.style.animation = 'pageIn 0.4s cubic-bezier(0.25, 0.8, 0.35, 1) forwards';
                } else {
                    page.style.animation = 'none';
                    page.style.opacity = '1';
                }
                document.querySelector('.content').scrollTop = 0;
                animateCounters(page);
                if (!visitedPages.has(pageName)) {
                    visitedPages.add(pageName);
                    staggerCards(page, STAGGER_SELECTOR);
                }
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => { e.preventDefault(); switchPage(link.dataset.page); });
    });

    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => { e.preventDefault(); switchPage(link.dataset.page); });
    });

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            switchPage(link.dataset.page);
            closeMobileMenu();
        });
    });

    pageLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            switchPage(link.dataset.page);
        });
    });

    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    function closeMobileMenu() {
        if (!sidebar || !sidebarOverlay) return;
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            sidebarOverlay.classList.toggle('active');
        });
    }

    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeMobileMenu);
    }
}
