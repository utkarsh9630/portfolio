// ===================================
// Page Transition — Circuit Wipe
// ===================================
const wipeEl = document.createElement('div');
wipeEl.className = 'page-wipe';
document.body.appendChild(wipeEl);

// Reveal on load
window.addEventListener('load', () => {
    wipeEl.classList.add('wipe-reveal');
    setTimeout(() => wipeEl.classList.remove('wipe-reveal'), 500);
});

// Intercept internal link clicks
document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')) return;
    if (link.getAttribute('target') === '_blank') return;
    e.preventDefault();
    wipeEl.classList.remove('wipe-reveal');
    wipeEl.classList.add('wipe-enter');
    setTimeout(() => { window.location.href = href; }, 430);
});

// ===================================
// Nav
// ===================================
const navToggle = document.querySelector('.nav-toggle');
const navLinksEl = document.querySelector('.nav-links');

if (navToggle && navLinksEl) {
    navToggle.addEventListener('click', () => {
        navLinksEl.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Highlight current page link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
        link.classList.add('active');
    }
});

// Nav scroll effect
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 80) {
        nav.style.background = 'rgba(250, 250, 248, 0.98)';
        nav.style.boxShadow = '0 2px 16px rgba(17, 17, 16, 0.08)';
    } else {
        nav.style.background = 'rgba(250, 250, 248, 0.92)';
        nav.style.boxShadow = 'none';
    }
});

// ===================================
// Scroll Reveal
// ===================================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.project-card, .skill-category, .timeline-item, .achievement-card').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${i * 0.04}s`;
    revealObserver.observe(el);
});

// ===================================
// Cursor Light on Cards (Direction 4)
// ===================================
document.querySelectorAll('.project-card, .skill-category, .achievement-card, .timeline-content').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${((e.clientX - rect.left) / rect.width) * 100}%`);
        card.style.setProperty('--mouse-y', `${((e.clientY - rect.top) / rect.height) * 100}%`);
    });
});

// ===================================
// 3D Tilt on Project Cards (Direction 4)
// ===================================
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
        card.style.transform = `perspective(1000px) rotateY(${dx * 5}deg) rotateX(${-dy * 3}deg) translateY(-5px)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// ===================================
// Journey Morph (Home page only)
// ===================================
const morphStage = document.querySelector('.morph-stage');
if (morphStage) {
    const frames = document.querySelectorAll('.morph-frame');
    const dots = document.querySelectorAll('.era-dot');
    const eraClasses = ['era-analyst', 'era-engineer', 'era-ai'];
    let current = 0;
    let timer = null;

    function goToFrame(idx) {
        frames[current].classList.remove('active');
        dots[current].classList.remove('active');
        morphStage.classList.remove(...eraClasses);
        current = idx;
        frames[current].classList.add('active');
        dots[current].classList.add('active');
        morphStage.classList.add(eraClasses[current]);
        const prog = document.querySelector('.era-progress');
        if (prog) prog.textContent = `${current + 1} / ${frames.length}`;
    }

    function next() { goToFrame((current + 1) % frames.length); }

    function startTimer() { timer = setInterval(next, 4000); }
    function stopTimer()  { clearInterval(timer); }

    // Init
    goToFrame(0);
    startTimer();

    // Manual dot control
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => { stopTimer(); goToFrame(i); startTimer(); });
    });

    // Pause on hover
    morphStage.addEventListener('mouseenter', stopTimer);
    morphStage.addEventListener('mouseleave', startTimer);
}

// ===================================
// Parallax on hero background
// ===================================
const heroBg = document.querySelector('.hero-background');
if (heroBg) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroEl = document.querySelector('.hero');
        if (heroEl && scrolled < heroEl.offsetHeight) {
            heroBg.style.transform = `translateY(${scrolled * 0.38}px)`;
        }
    });
}

// ===================================
// Copy Email
// ===================================
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', () => {
        const email = link.href.replace('mailto:', '');
        if (navigator.clipboard) {
            navigator.clipboard.writeText(email).then(() => showToast('Email copied!'));
        }
    });
});

function showToast(msg) {
    const t = document.createElement('div');
    t.textContent = msg;
    t.style.cssText = `
        position:fixed;bottom:28px;right:28px;
        background:linear-gradient(135deg,#00f5d4,#ff6b35);
        color:#0D0B08;padding:.9rem 1.4rem;border-radius:8px;
        font-weight:700;font-size:.82rem;z-index:10000;
        animation:toastIn .3s ease;
    `;
    document.body.appendChild(t);
    setTimeout(() => { t.style.animation = 'toastOut .3s ease'; setTimeout(() => t.remove(), 300); }, 2200);
}

// ===================================
// Download Resume
// ===================================
const resumeBtn = document.getElementById('downloadResume');
if (resumeBtn) {
    resumeBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        showToast('Preparing download…');
        try {
            const res = await fetch('Utkarsh_Tripathi_SJSU_Resume.pdf');
            if (!res.ok) throw new Error();
            const blob = await res.blob();
            const url = URL.createObjectURL(blob);
            const a = Object.assign(document.createElement('a'), { href: url, download: 'Utkarsh_Tripathi_Resume.pdf' });
            document.body.appendChild(a); a.click(); a.remove();
            URL.revokeObjectURL(url);
        } catch {
            const a = Object.assign(document.createElement('a'), { href: 'Utkarsh_Tripathi_SJSU_Resume.pdf', download: 'Utkarsh_Tripathi_Resume.pdf', target: '_blank' });
            document.body.appendChild(a); a.click(); a.remove();
        }
    });
}

// ===================================
// Mobile nav + toast CSS
// ===================================
const styleEl = document.createElement('style');
styleEl.textContent = `
    @keyframes toastIn  { from{transform:translateX(360px);opacity:0} to{transform:translateX(0);opacity:1} }
    @keyframes toastOut { from{transform:translateX(0);opacity:1} to{transform:translateX(360px);opacity:0} }
    .nav-link.active { color: #f0ebe0; }
    .nav-link.active::after { width: 100%; }
    @media (max-width: 768px) {
        .nav-links {
            position:fixed;top:68px;left:0;right:0;
            background:rgba(250,250,248,.98);backdrop-filter:blur(16px);
            flex-direction:column;padding:2rem;gap:1.5rem;
            transform:translateY(-110%);opacity:0;
            transition:transform .3s ease,opacity .3s ease;
            border-bottom:1px solid rgba(17,17,16,.09);
            pointer-events:none;
        }
        .nav-links.active { transform:translateY(0);opacity:1;pointer-events:auto; }
        .nav-toggle.active span:nth-child(1){transform:rotate(45deg) translate(5px,5px)}
        .nav-toggle.active span:nth-child(2){opacity:0}
        .nav-toggle.active span:nth-child(3){transform:rotate(-45deg) translate(7px,-7px)}
    }
`;
document.head.appendChild(styleEl);

console.log('%c⚡ Utkarsh Tripathi · AI/ML Engineer', 'color:#00f5d4;font-size:18px;font-weight:bold;');
