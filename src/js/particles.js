import { state } from './state.js';
import { qs, hexToRgb, ACCENT_CSS_VAR } from './utils.js';

const canvas = qs('#particles');
const ctx = canvas.getContext('2d');
const PARTICLE_COUNT = 60;
const LINK_DISTANCE = 120;

let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
    }

    draw(accentRgb) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${accentRgb}, ${this.opacity})`;
        ctx.fill();
    }
}

function connectParticles(accentRgb) {
    for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
            const dx = particles[a].x - particles[b].x;
            const dy = particles[a].y - particles[b].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < LINK_DISTANCE) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(${accentRgb}, ${0.08 * (1 - dist / LINK_DISTANCE)})`;
                ctx.lineWidth = 0.5;
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!state.animations.particles) {
        requestAnimationFrame(animate);
        return;
    }
    const accentRgb = hexToRgb(getComputedStyle(document.documentElement).getPropertyValue(ACCENT_CSS_VAR).trim());
    particles.forEach(p => { p.update(); p.draw(accentRgb); });
    connectParticles(accentRgb);
    requestAnimationFrame(animate);
}

export function initParticles() {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());
    animate();
}
