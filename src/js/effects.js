import { state } from './state.js';
import { qsa } from './utils.js';

const EFFECT_CLASSES = ['effect-flip', 'effect-lift', 'effect-glow', 'effect-tilt', 'effect-rotate'];

const TILT_SELECTOR = '.skill-card-3d, .contact-card, .about-stat-card';

const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const HAS_MOUSE = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

export function initTilt() {
    if (REDUCED_MOTION || !HAS_MOUSE) return;
    qsa(TILT_SELECTOR).forEach(card => {
        card.onmouseenter = () => { card.style.transition = 'transform 0.2s ease-out'; };
        card.onmousemove = (e) => {
            const rect = card.getBoundingClientRect();
            const rotateX = ((e.clientY - rect.top) - rect.height / 2) / 85;
            const rotateY = ((rect.width / 2) - (e.clientX - rect.left)) / 85;
            card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        };
        card.onmouseleave = () => {
            card.style.transition = 'transform 0.35s ease';
            card.style.transform = '';
            setTimeout(() => { card.style.transition = ''; }, 350);
        };
    });
}

export function setTiltEnabled(enabled) {
    state.animations.tilt3d = enabled;
    qsa(TILT_SELECTOR).forEach(el => {
        el.onmouseenter = null;
        el.onmousemove = null;
        el.onmouseleave = null;
        el.style.transform = '';
        el.style.transition = '';
    });
    if (enabled) initTilt();
}

export function applyEffects() {
    EFFECT_CLASSES.forEach(cls => document.body.classList.remove(cls));
    if (state.animations.tilt3d) {
        document.body.classList.add('effect-tilt');
    }
}

export function animateCounters(container) {
    container.querySelectorAll('[data-count]').forEach(counter => {
        const target = parseInt(counter.dataset.count);
        const duration = 2000;
        const start = performance.now();
        function update(currentTime) {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            counter.textContent = Math.floor(target * eased);
            if (progress < 1) requestAnimationFrame(update);
            else counter.textContent = target;
        }
        requestAnimationFrame(update);
    });
}

export function staggerCards(container, selector) {
    if (!state.animations.transitions || REDUCED_MOTION) return;
    const cards = container.querySelectorAll(selector);
    cards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(14px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.25, 0.8, 0.35, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            setTimeout(() => {
                card.style.transition = '';
                card.style.opacity = '';
                card.style.transform = '';
            }, 450);
        }, Math.min(i * 60, 480));
    });
}
