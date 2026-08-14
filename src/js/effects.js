import { state } from './state.js';
import { qsa } from './utils.js';

const EFFECT_CLASSES = ['effect-flip', 'effect-lift', 'effect-glow', 'effect-tilt', 'effect-rotate'];

export function initTilt() {
    qsa('[data-tilt]').forEach(card => {
        card.onmousemove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 12;
            const rotateY = (centerX - x) / 12;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px) scale(1.02)`;
        };
        card.onmouseleave = () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0) scale(1)';
        };
    });
}

export function setTiltEnabled(enabled) {
    state.animations.tilt3d = enabled;
    if (!enabled) {
        qsa('[data-tilt]').forEach(el => {
            el.onmousemove = null;
            el.onmouseleave = null;
            el.style.transform = '';
        });
    } else {
        initTilt();
    }
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
    if (!state.animations.transitions) return;
    container.querySelectorAll(selector).forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, i * 80);
    });
}
