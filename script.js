// ===================================
// Smooth Scroll & Navigation
// ===================================

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// ===================================
// Scroll Effects
// ===================================

// Navigation background on scroll
let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.background = 'rgba(10, 10, 15, 0.95)';
        nav.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.3)';
    } else {
        nav.style.background = 'rgba(10, 10, 15, 0.8)';
        nav.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ===================================
// Intersection Observer for Animations
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
const animateElements = document.querySelectorAll('.project-card, .skill-category, .timeline-item, .achievement-card');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===================================
// Download Resume Handler
// ===================================

document.getElementById('downloadResume').addEventListener('click', (e) => {
    e.preventDefault();
    
    // Direct link to resume on GitHub
    const resumeUrl = 'https://github.com/utkarsh9630/portfolio/raw/main/Utkarsh_Tripathi_SJSU_Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Utkarsh_Tripathi_Resume.pdf';
    link.target = '_blank'; // Opens in new tab as backup
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show notification
    const notification = document.createElement('div');
    notification.textContent = 'Resume download started!';
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, #00f5d4, #ff006e);
        color: #0a0a0f;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        font-weight: 600;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
});

// ===================================
// Typing Effect for Hero Title (Optional)
// ===================================

// const typingText = document.querySelector('.gradient-text');
// if (typingText) {
//     const text = typingText.textContent;
//     typingText.textContent = '';
//     let i = 0;
    
//     function typeWriter() {
//         if (i < text.length) {
//             typingText.textContent += text.charAt(i);
//             i++;
//             setTimeout(typeWriter, 100);
//         }
//     }
    
//     setTimeout(typeWriter, 1000);
// }

// ===================================
// Project Cards Hover Effect
// ===================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// ===================================
// Active Navigation Link
// ===================================

const sections = document.querySelectorAll('section[id]');

function navHighlight() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-links a[href*=' + sectionId + ']')?.classList.add('active');
        } else {
            document.querySelector('.nav-links a[href*=' + sectionId + ']')?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', navHighlight);

// ===================================
// Parallax Effect for Hero Background
// ===================================

const heroBackground = document.querySelector('.hero-background');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroHeight = document.querySelector('.hero').offsetHeight;
    
    if (scrolled < heroHeight) {
        const parallaxSpeed = 0.5;
        heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
});

// ===================================
// Copy Email to Clipboard
// ===================================

const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

emailLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const email = link.href.replace('mailto:', '');
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(email).then(() => {
                // Create a temporary notification
                const notification = document.createElement('div');
                notification.textContent = 'Email copied to clipboard!';
                notification.style.cssText = `
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    background: linear-gradient(135deg, #00f5d4, #ff006e);
                    color: #0a0a0f;
                    padding: 1rem 1.5rem;
                    border-radius: 8px;
                    font-weight: 600;
                    z-index: 10000;
                    animation: slideIn 0.3s ease;
                `;
                
                document.body.appendChild(notification);
                
                setTimeout(() => {
                    notification.style.animation = 'slideOut 0.3s ease';
                    setTimeout(() => notification.remove(), 300);
                }, 2000);
            });
        }
    });
});

// ===================================
// Add CSS for Notification Animation
// ===================================

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    .nav-link.active {
        color: var(--color-primary);
    }
    
    @media (max-width: 768px) {
        .nav-links {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: rgba(10, 10, 15, 0.98);
            backdrop-filter: blur(16px);
            flex-direction: column;
            padding: 2rem;
            gap: 1.5rem;
            transform: translateY(-100%);
            opacity: 0;
            transition: all 0.3s ease;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        
        .nav-links.active {
            display: flex;
            transform: translateY(0);
            opacity: 1;
        }
        
        .nav-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .nav-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .nav-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -7px);
        }
    }
`;
document.head.appendChild(style);

// ===================================
// Performance: Lazy Load Images (if you add project images later)
// ===================================

// if ('IntersectionObserver' in window) {
//     const imageObserver = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const img = entry.target;
//                 img.src = img.dataset.src;
//                 img.classList.add('loaded');
//                 imageObserver.unobserve(img);
//             }
//         });
//     });

//     const images = document.querySelectorAll('img[data-src]');
//     images.forEach(img => imageObserver.observe(img));
// }

// ===================================
// Console Message
// ===================================

console.log('%c🚀 Portfolio by Utkarsh Tripathi', 'color: #00f5d4; font-size: 20px; font-weight: bold;');
console.log('%cBuilding AI systems that transform data into decisions', 'color: #ff006e; font-size: 14px;');
console.log('%cInterested in the code? Check out the repository!', 'color: #ffffff; font-size: 12px;');
