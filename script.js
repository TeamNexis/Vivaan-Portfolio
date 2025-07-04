
// Auto-update copyright year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'light') {
        themeIcon.className = 'fas fa-sun';
    } else {
        themeIcon.className = 'fas fa-moon';
    }
}

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightActiveSection() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightActiveSection);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.bot-card, .service-card, .timeline-item, .skill-item, .contact-item').forEach(el => {
    observer.observe(el);
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    }
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Create mailto link
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:vy715341@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    showNotification('Thank you! Your message has been prepared in your email client.', 'success');
    
    // Reset form
    this.reset();
});

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--surface-color);
        color: var(--text-primary);
        padding: 1rem 1.5rem;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        box-shadow: var(--shadow);
        z-index: 10000;
        max-width: 300px;
        transform: translateX(100%);
        transition: var(--transition);
    `;
    
    if (type === 'success') {
        notification.style.borderLeftColor = '#10b981';
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    });
    
    // Auto close after 5 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
}

// Typing animation for hero subtitle
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const originalText = heroSubtitle.textContent;
    
    // Optimize avatar image loading
    optimizeAvatarLoading();
    
    // Start typing animation after a delay
    setTimeout(() => {
        typeWriter(heroSubtitle, originalText, 150);
    }, 2000);
    
    // Initialize particle system
    createParticleSystem();
    
    // Initialize advanced animations
    initAdvancedAnimations();
});

// Avatar image optimization
function optimizeAvatarLoading() {
    const avatarImg = document.querySelector('.avatar-image');
    const avatarContainer = document.querySelector('.hero-avatar');
    
    if (avatarImg && avatarContainer) {
        // Always show the fallback first
        let fallback = avatarContainer.querySelector('.avatar-fallback');
        if (!fallback) {
            fallback = document.createElement('div');
            fallback.className = 'avatar-fallback';
            fallback.innerHTML = '🤖';
            fallback.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 4rem;
                z-index: 2;
                text-shadow: 0 0 20px var(--neon-blue);
                animation: neonGlow 60s ease-in-out infinite alternate;
            `;
            avatarContainer.appendChild(fallback);
        }
        
        // Check if avatar.jpg exists and is accessible
        const avatarPath = './avatar.jpg';
        const img = new Image();
        
        img.onload = function() {
            // Image loaded successfully, show it and hide fallback
            console.log('Avatar image loaded successfully');
            avatarImg.src = avatarPath;
            avatarImg.style.opacity = '1';
            avatarImg.style.display = 'block';
            if (fallback) {
                fallback.style.opacity = '0';
                setTimeout(() => {
                    if (fallback && fallback.parentNode) {
                        fallback.parentNode.removeChild(fallback);
                    }
                }, 500);
            }
        };
        
        img.onerror = function() {
            // Image failed to load, show fallback
            console.log('Avatar image failed to load, showing fallback');
            avatarImg.style.display = 'none';
            if (fallback) {
                fallback.style.opacity = '1';
                fallback.style.display = 'block';
            }
        };
        
        // Set the image source to test loading
        img.src = avatarPath;
        
        // Also set the actual img element to try loading
        avatarImg.src = avatarPath;
        avatarImg.style.display = 'block';
    }
}

// Particle System
function createParticleSystem() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    document.body.appendChild(particleContainer);
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 1;
        const startX = Math.random() * window.innerWidth;
        const duration = Math.random() * 10 + 5;
        
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${startX}px;
            animation-duration: ${duration}s;
            animation-delay: ${Math.random() * 2}s;
        `;
        
        // Random neon colors
        const colors = ['#00f5ff', '#bf00ff', '#39ff14', '#ff1493'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.boxShadow = `0 0 10px ${particle.style.background}`;
        
        particleContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particleContainer.contains(particle)) {
                particleContainer.removeChild(particle);
            }
        }, duration * 1000);
    }
    
    // Create particles continuously (much slower for better performance)
    setInterval(createParticle, 15000);
}

// Advanced Animations
function initAdvancedAnimations() {
    // Matrix rain effect for hero background
    createMatrixRain();
    
    // Floating geometric shapes
    createFloatingShapes();
    
    // Interactive cursor trail
    createCursorTrail();
}

// Matrix Rain Effect
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        opacity: 0.1;
    `;
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const matrix = chars.split('');
    
    const drops = [];
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }
    
    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00f5ff';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = matrix[Math.floor(Math.random() * matrix.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(drawMatrix, 800);
    
    // Resize handler
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Floating Geometric Shapes
function createFloatingShapes() {
    const shapesContainer = document.createElement('div');
    shapesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    document.body.appendChild(shapesContainer);
    
    function createShape() {
        const shape = document.createElement('div');
        const shapeType = Math.random();
        const size = Math.random() * 50 + 20;
        const x = Math.random() * window.innerWidth;
        const y = window.innerHeight + 100;
        const duration = Math.random() * 20 + 15;
        
        if (shapeType < 0.33) {
            // Triangle
            shape.style.cssText = `
                position: absolute;
                left: ${x}px;
                top: ${y}px;
                width: 0;
                height: 0;
                border-left: ${size/2}px solid transparent;
                border-right: ${size/2}px solid transparent;
                border-bottom: ${size}px solid rgba(0, 245, 255, 0.2);
                animation: floatUp ${duration}s linear infinite;
                filter: blur(1px);
            `;
        } else if (shapeType < 0.66) {
            // Circle
            shape.style.cssText = `
                position: absolute;
                left: ${x}px;
                top: ${y}px;
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: rgba(191, 0, 255, 0.2);
                animation: floatUp ${duration}s linear infinite;
                filter: blur(1px);
            `;
        } else {
            // Square
            shape.style.cssText = `
                position: absolute;
                left: ${x}px;
                top: ${y}px;
                width: ${size}px;
                height: ${size}px;
                background: rgba(57, 255, 20, 0.2);
                transform: rotate(45deg);
                animation: floatUp ${duration}s linear infinite;
                filter: blur(1px);
            `;
        }
        
        shapesContainer.appendChild(shape);
        
        setTimeout(() => {
            if (shapesContainer.contains(shape)) {
                shapesContainer.removeChild(shape);
            }
        }, duration * 1000);
    }
    
    // Add CSS for float animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            from {
                transform: translateY(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            to {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    setInterval(createShape, 45000);
}

// Interactive Cursor Trail
function createCursorTrail() {
    const trail = [];
    const trailLength = 10;
    
    document.addEventListener('mousemove', (e) => {
        trail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
        
        if (trail.length > trailLength) {
            trail.shift();
        }
        
        // Remove old trail elements
        document.querySelectorAll('.cursor-trail').forEach(el => {
            if (Date.now() - parseInt(el.dataset.time) > 1000) {
                el.remove();
            }
        });
        
        // Create new trail element
        const trailElement = document.createElement('div');
        trailElement.className = 'cursor-trail';
        trailElement.dataset.time = Date.now();
        trailElement.style.cssText = `
            position: fixed;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            width: 6px;
            height: 6px;
            background: #00f5ff;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            box-shadow: 0 0 10px #00f5ff;
            animation: fadeTrail 1s ease-out forwards;
            transform: translate(-50%, -50%);
        `;
        
        document.body.appendChild(trailElement);
    });
    
    // Add trail animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeTrail {
            from {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
            to {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Parallax effect for floating elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-element');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// Dynamic copyright year update
setInterval(() => {
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('currentYear');
    if (yearElement && yearElement.textContent != currentYear) {
        yearElement.textContent = currentYear;
    }
}, 60000); // Check every minute

// Console Easter Egg
console.log(`
🤖 Welcome to Vivaan's Portfolio! 🤖

████████╗███████╗██╗     ███████╗ ██████╗ ██████╗  █████╗ ███╗   ███╗
╚══██╔══╝██╔════╝██║     ██╔════╝██╔════╝ ██╔══██╗██╔══██╗████╗ ████║
   ██║   █████╗  ██║     █████╗  ██║  ███╗██████╔╝███████║██╔████╔██║
   ██║   ██╔══╝  ██║     ██╔══╝  ██║   ██║██╔══██╗██╔══██║██║╚██╔╝██║
   ██║   ███████╗███████╗███████╗╚██████╔╝██║  ██║██║  ██║██║ ╚═╝ ██║
   ╚═╝   ╚══════╝╚══════╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝

🚀 Telegram Bot Builder & Automation Expert
📧 vy715341@gmail.com
💬 @Officialvivaan

Looking for a developer? Let's build something amazing together!
`);

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K for quick contact
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        window.open('https://t.me/Officialvivaan', '_blank');
    }
    
    // Ctrl/Cmd + H for home
    if ((e.ctrlKey || e.metaKey) && e.key === 'h') {
        e.preventDefault();
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    }
});

// Bot card hover effects
document.querySelectorAll('.bot-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Service card interactions
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function() {
        // Add ripple effect
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(99, 102, 241, 0.3);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (event.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (event.clientY - rect.top - size / 2) + 'px';
        
        this.style.position = 'relative';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Performance monitoring
const observer2 = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
        if (entry.entryType === 'measure') {
            console.log(`Performance: ${entry.name} took ${entry.duration}ms`);
        }
    });
});

if ('PerformanceObserver' in window) {
    observer2.observe({ entryTypes: ['measure'] });
}

// Load optimization
window.addEventListener('load', () => {
    // Remove loading states
    document.body.classList.add('loaded');
    
    // Preload critical images
    const criticalImages = [
        './avatar.jpg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
    
    // Device-specific optimizations
    optimizeForDevice();
    
    // Performance monitoring
    monitorPerformance();
});

// Device-specific optimizations
function optimizeForDevice() {
    const isTouch = 'ontouchstart' in window;
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
    const devicePixelRatio = window.devicePixelRatio || 1;
    
    // Add device classes to body
    if (isTouch) document.body.classList.add('touch-device');
    if (isMobile) document.body.classList.add('mobile-device');
    if (isTablet) document.body.classList.add('tablet-device');
    if (devicePixelRatio > 2) document.body.classList.add('high-dpi');
    
    // Optimize animations for low-end devices
    if (navigator.hardwareConcurrency <= 2 || navigator.deviceMemory <= 2) {
        document.body.classList.add('low-performance');
        // Reduce particle count for low-end devices
        const style = document.createElement('style');
        style.textContent = `
            .low-performance .floating-element {
                animation-duration: 8s !important;
            }
            .low-performance .particle {
                animation-duration: 15s !important;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Viewport optimization for different orientations
    function handleOrientationChange() {
        setTimeout(() => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }, 100);
    }
    
    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleOrientationChange);
    handleOrientationChange();
}

// Performance monitoring
function monitorPerformance() {
    // Monitor FPS
    let lastTime = performance.now();
    let frames = 0;
    
    function checkFPS() {
        const currentTime = performance.now();
        frames++;
        
        if (currentTime >= lastTime + 1000) {
            const fps = Math.round((frames * 1000) / (currentTime - lastTime));
            
            // Reduce animations if FPS is too low
            if (fps < 30) {
                document.body.classList.add('low-fps');
                const style = document.createElement('style');
                style.textContent = `
                    .low-fps * {
                        animation-duration: 0.5s !important;
                    }
                `;
                document.head.appendChild(style);
            }
            
            frames = 0;
            lastTime = currentTime;
        }
        
        requestAnimationFrame(checkFPS);
    }
    
    requestAnimationFrame(checkFPS);
    
    // Monitor memory usage
    if ('memory' in performance) {
        setInterval(() => {
            const memory = performance.memory;
            if (memory.usedJSHeapSize / memory.jsHeapSizeLimit > 0.8) {
                console.warn('High memory usage detected');
                // Clean up particles if memory is high
                const particles = document.querySelectorAll('.particle');
                particles.forEach((particle, index) => {
                    if (index % 2 === 0) particle.remove();
                });
            }
        }, 30000);
    }
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript Error:', e.error);
    // Could send to analytics service in production
});

// Service Worker registration for PWA (if needed)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment if you want to add a service worker
        // navigator.serviceWorker.register('/sw.js');
    });
}
