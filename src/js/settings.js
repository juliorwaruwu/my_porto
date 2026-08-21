import { state } from './state.js';
import { setTiltEnabled, initTilt, applyEffects } from './effects.js';
import { applyLanguage } from './i18n.js';
import { qsa } from './utils.js';

const themes = {
    indigo: { accent: '#6366f1', accentHover: '#4f46e5', accentGlow: 'rgba(99,102,241,0.4)', purple: '#a855f7' },
    ocean: { accent: '#0ea5e9', accentHover: '#0284c7', accentGlow: 'rgba(14,165,233,0.4)', purple: '#06b6d4' },
    emerald: { accent: '#10b981', accentHover: '#059669', accentGlow: 'rgba(16,185,129,0.4)', purple: '#34d399' },
    rose: { accent: '#f43f5e', accentHover: '#e11d48', accentGlow: 'rgba(244,63,94,0.4)', purple: '#fb7185' },
    amber: { accent: '#f59e0b', accentHover: '#d97706', accentGlow: 'rgba(245,158,11,0.4)', purple: '#fbbf24' },
    sunset: { accent: '#f97316', accentHover: '#ea580c', accentGlow: 'rgba(249,115,22,0.4)', purple: '#ef4444' },
    midnight: { accent: '#6366f1', accentHover: '#4f46e5', accentGlow: 'rgba(99,102,241,0.4)', purple: '#818cf8' },
    forest: { accent: '#22c55e', accentHover: '#16a34a', accentGlow: 'rgba(34,197,94,0.4)', purple: '#4ade80' }
};

function applyTheme(name) {
    const t = themes[name];
    if (!t) return;
    document.documentElement.style.setProperty('--accent', t.accent);
    document.documentElement.style.setProperty('--accent-hover', t.accentHover);
    document.documentElement.style.setProperty('--accent-glow', t.accentGlow);
    document.documentElement.style.setProperty('--purple', t.purple);
    state.theme = name;
}

function applyMode(mode) {
    if (mode === 'auto') {
        state.mode = 'auto';
        mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } else {
        state.mode = mode;
    }
    const root = document.documentElement;
    if (mode === 'dark') {
        root.style.setProperty('--bg-light', '#0f0f1a');
        root.style.setProperty('--bg-dark', '#1a1a2e');
        root.style.setProperty('--text-dark', '#f9fafb');
        root.style.setProperty('--card-bg', 'rgba(30,30,46,0.85)');
        root.style.setProperty('--card-bg-solid', '#1e1e2e');
        root.style.setProperty('--sidebar-bg', 'rgba(30,30,46,0.9)');
        root.style.setProperty('--border', 'rgba(255,255,255,0.08)');
        root.style.setProperty('--bottom-bg', 'rgba(20,20,32,0.95)');
        root.style.setProperty('--bottom-text', '#94a3b8');
        document.body.style.background = '#0f0f1a';
    } else if (mode === 'light') {
        root.style.setProperty('--bg-light', '#f0f2f5');
        root.style.setProperty('--bg-dark', '#0f0f1a');
        root.style.setProperty('--text-dark', '#1f2937');
        root.style.setProperty('--card-bg', 'rgba(255,255,255,0.85)');
        root.style.setProperty('--card-bg-solid', '#ffffff');
        root.style.setProperty('--sidebar-bg', 'rgba(255,255,255,0.9)');
        root.style.setProperty('--border', 'rgba(0,0,0,0.08)');
        root.style.setProperty('--bottom-bg', 'rgba(255,255,255,0.9)');
        root.style.setProperty('--bottom-text', '#6b7280');
        document.body.style.background = '#f0f2f5';
    }
}

const systemScheme = window.matchMedia('(prefers-color-scheme: dark)');
systemScheme.addEventListener('change', () => {
    if (state.mode === 'auto') applyMode('auto');
});

function applyFontSize(size) {
    state.fontSize = size;
    const sizes = { small: '14px', medium: '16px', large: '18px' };
    document.documentElement.style.fontSize = sizes[size] || '16px';
}

function applySidebarPos(pos) {
    state.sidebarPos = pos;
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    const footer = document.querySelector('.footer');

    if (pos === 'right') {
        sidebar.style.order = '2';
        content.style.order = '1';
        sidebar.style.borderRight = 'none';
        sidebar.style.borderLeft = '1px solid var(--border)';
        content.style.marginLeft = '0';
        content.style.marginRight = '240px';
        footer.style.marginLeft = '0';
        footer.style.marginRight = '240px';
    } else {
        sidebar.style.order = '1';
        content.style.order = '2';
        sidebar.style.borderRight = '1px solid var(--border)';
        sidebar.style.borderLeft = 'none';
        content.style.marginLeft = '240px';
        content.style.marginRight = '0';
        footer.style.marginLeft = '240px';
        footer.style.marginRight = '0';
    }
}

function applyParticles(enabled) {
    state.animations.particles = enabled;
    document.getElementById('particles').style.display = enabled ? 'block' : 'none';
}

function applyTransitions(enabled) {
    state.animations.transitions = enabled;
    const value = enabled ? 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' : 'none';
    document.documentElement.style.setProperty('--transition', value);
}

function applyBG3D(enabled) {
    state.animations.bg3d = enabled;
    const bg = document.getElementById('bg3d');
    if (bg) bg.style.display = enabled ? '' : 'none';
}

export function initSettings() {
    qsa('.settings-tab').forEach(tab => {
        tab.addEventListener('click', function () {
            qsa('.settings-tab').forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            this.classList.add('active');
            this.setAttribute('aria-selected', 'true');
            qsa('.settings-tab-panel').forEach(panel => {
                panel.classList.toggle('active', panel.id === 'settings-' + this.dataset.tab);
            });
        });
    });
    qsa('.theme-option').forEach(option => {
        option.addEventListener('click', function () {
            qsa('.theme-option').forEach(o => o.classList.remove('active'));
            this.classList.add('active');
            applyTheme(this.dataset.theme);
        });
    });

    qsa('.appearance-card').forEach(card => {
        card.addEventListener('click', function () {
            qsa('.appearance-card').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            applyMode(this.dataset.mode);
        });
    });

    qsa('.language-option').forEach(option => {
        option.addEventListener('click', function () {
            qsa('.language-option').forEach(o => o.classList.remove('active'));
            this.classList.add('active');
            applyLanguage(this.dataset.lang);
        });
    });

    qsa('.font-size-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            qsa('.font-size-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            applyFontSize(this.dataset.size);
        });
    });

    qsa('.sidebar-pos-card').forEach(card => {
        card.addEventListener('click', function () {
            qsa('.sidebar-pos-card').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            applySidebarPos(this.dataset.pos);
        });
    });

    qsa('.toggle-switch input').forEach((toggle, index) => {
        toggle.addEventListener('change', function () {
            if (index === 0) {
                setTiltEnabled(this.checked);
                applyEffects();
            }
            if (index === 1) applyParticles(this.checked);
            if (index === 2) applyTransitions(this.checked);
            if (index === 3) applyBG3D(this.checked);
        });
    });

    initTilt();
    applyMode(state.mode);
    applyEffects();
}
