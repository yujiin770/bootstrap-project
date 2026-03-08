// =========================================
// COSMIC SPLASH SCREEN & ENTRANCE SEQUENCE
// =========================================
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const particleContainer = document.getElementById('particle-container');
    
    if (particleContainer) {
        // Generate floating particles for splash screen
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random position
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            
            // Random animation delay
            particle.style.animationDelay = Math.random() * 3 + 's';
            
            // Random size
            const size = Math.random() * 6 + 2;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            
            // Random color
            particle.style.background = Math.random() > 0.5 ? 
                'var(--cosmic-accent)' : 'var(--cosmic-secondary)';
            
            // Set custom property for angle
            const angle = Math.random() * 360;
            particle.style.setProperty('--angle', angle + 'deg');
            
            particleContainer.appendChild(particle);
        }
    }
    
    // Dramatic portal closing effect before transition
    setTimeout(() => {
        if (preloader) {
            preloader.style.clipPath = 'circle(0% at 50% 50%)';
            preloader.style.opacity = '0';
        }
        
        document.body.classList.add('loaded');
        
        setTimeout(() => {
            if (preloader) {
                preloader.style.visibility = 'hidden';
                preloader.style.display = 'none';
            }
            
            // Initialize AOS with cosmic settings
            if (typeof AOS !== 'undefined') {
                AOS.init({
                    once: false,
                    offset: 50,
                    duration: 1200,
                    easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
                    delay: 100,
                    disable: 'mobile'
                });
                
                // Refresh AOS after preloader is gone
                setTimeout(() => {
                    AOS.refresh();
                }, 100);
            }
            
            // Start cosmic animations
            initCosmicNavbar();
            initCosmicHeader();
            initCosmicAbout();
            initBootstrapComponents();
            initScrollEffects();
            initMagneticEffects();
            initQuantumGallery();
            initCosmicClock();
            
        }, 1800);
    }, 2500); // Show portal for 2.5 seconds
});

// =========================================
// BOOTSTRAP COMPONENTS INITIALIZATION
// =========================================
function initBootstrapComponents() {
    // Tooltips with cosmic styling
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    if (tooltipTriggerList.length > 0) {
        [...tooltipTriggerList].forEach(el => {
            try {
                new bootstrap.Tooltip(el, {
                    template: '<div class="tooltip cosmic-tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner bg-info text-white"></div></div>'
                });
            } catch (e) {
                console.log('Tooltip init error:', e);
            }
        });
    }

    // Popovers with cosmic styling
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    if (popoverTriggerList.length > 0) {
        [...popoverTriggerList].forEach(el => {
            try {
                new bootstrap.Popover(el, {
                    template: '<div class="popover cosmic-popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                });
            } catch (e) {
                console.log('Popover init error:', e);
            }
        });
    }
}

// =========================================
// MODAL CONTROLLER WITH QUANTUM EFFECT
// =========================================
function openModal(imgSrc) {
    const modalImage = document.getElementById('modalImage');
    if (modalImage) {
        modalImage.style.opacity = '0';
        modalImage.style.transform = 'scale(0.5) rotate(-10deg)';
        
        setTimeout(() => {
            modalImage.src = imgSrc;
            modalImage.style.opacity = '1';
            modalImage.style.transform = 'scale(1) rotate(0)';
        }, 200);
    }
    
    const modalElement = document.getElementById('imageModal');
    if (modalElement) {
        const imgModal = new bootstrap.Modal(modalElement);
        imgModal.show();
    }
}

// Make openModal available globally
window.openModal = openModal;

// =========================================
// NEWSLETTER TOAST
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    const newsletterBtn = document.getElementById('newsletterBtn');
    if (newsletterBtn) {
        newsletterBtn.addEventListener('click', () => {
            const email = document.getElementById('newsletterEmail');
            if (email && email.value) {
                const toastElement = document.getElementById('newsletterToast');
                if (toastElement) {
                    const toast = new bootstrap.Toast(toastElement);
                    toast.show();
                    
                    // Quantum success animation
                    toastElement.style.transform = 'scale(0) rotate(-180deg)';
                    setTimeout(() => {
                        toastElement.style.transform = 'scale(1) rotate(0)';
                    }, 100);
                }
                
                email.value = '';
            } else if (email) {
                // Shake animation for empty input
                email.style.animation = 'shake 0.5s';
                setTimeout(() => {
                    email.style.animation = '';
                }, 500);
            }
        });
    }
});

// =========================================
// CONTACT FORM WITH SWEETALERT
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const isDark = document.body.classList.contains('dark-mode');
            
            // Check if Swal is available
            if (typeof Swal !== 'undefined') {
                // Quantum success animation
                Swal.fire({
                    title: '<span class="quantum-swal-title">Message Sent!</span>',
                    html: '<div class="quantum-swal-content"><i class="fas fa-bolt"></i> Thank you for reaching out. We will get back to you soon.</div>',
                    icon: 'success',
                    confirmButtonColor: '#00b4d8',
                    background: isDark ? '#0d1b2a' : '#ffffff',
                    color: isDark ? '#ffffff' : '#212529',
                    showClass: {
                        popup: 'animate__animated animate__zoomIn animate__fast'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__zoomOut'
                    }
                });
            } else {
                alert('Message sent! Thank you for reaching out.');
            }
            this.reset();
        });
    }
});

// =========================================
// DARK MODE TOGGLE WITH QUANTUM EFFECT
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    const darkModeBtn = document.getElementById('darkModeToggle');
    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', () => {
            // Quantum flip animation
            darkModeBtn.style.transform = 'rotate(360deg) scale(0.5)';
            darkModeBtn.style.opacity = '0';
            
            setTimeout(() => {
                document.body.classList.toggle('dark-mode');
                const isDark = document.body.classList.contains('dark-mode');
                
                // Update icon and styles
                if (isDark) {
                    darkModeBtn.innerHTML = '<i class="fas fa-sun text-warning fs-5"></i>';
                    darkModeBtn.classList.replace('btn-outline-info', 'btn-outline-light');
                } else {
                    darkModeBtn.innerHTML = '<i class="fas fa-moon fs-5"></i>';
                    darkModeBtn.classList.replace('btn-outline-light', 'btn-outline-info');
                }
                
                // Refresh AOS for dark mode
                if (typeof AOS !== 'undefined') {
                    AOS.refresh();
                }
                
                // Quantum return animation
                darkModeBtn.style.transform = 'rotate(0) scale(1)';
                darkModeBtn.style.opacity = '1';
                
                // Update tooltip
                const newTooltipText = isDark ? 'Enable Light Mode' : 'Enable Dark Mode';
                darkModeBtn.setAttribute('data-bs-original-title', newTooltipText);
                darkModeBtn.setAttribute('title', newTooltipText);
                
                try {
                    const tooltipInstance = bootstrap.Tooltip.getInstance(darkModeBtn);
                    if (tooltipInstance) {
                        tooltipInstance.hide();
                    }
                } catch (e) {
                    console.log('Tooltip update error:', e);
                }
            }, 300);
        });
    }
});

// =========================================
// BACK TO TOP BUTTON
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            // Quantum teleport effect
            document.body.style.animation = 'wormholeExit 0.8s';
            
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            setTimeout(() => {
                document.body.style.animation = '';
            }, 800);
        });
    }
});

// =========================================
// COSMIC NAVBAR INITIALIZATION
// =========================================
function initCosmicNavbar() {
    const navbar = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.quantum-hover');
    
    if (!navbar) return;
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Active link detection with cosmic glow
        const sections = document.querySelectorAll('section');
        let current = '';
        
        sections.forEach(section => {
            if (section.id) {
                const sectionTop = section.offsetTop - 150;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href')?.substring(1);
            if (href === current) {
                link.classList.add('active');
            }
        });
    });
    
    // Mouse move parallax effect on orbs
    document.addEventListener('mousemove', (e) => {
        const orbs = document.querySelectorAll('.nav-orb');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 20;
            const x = (mouseX * speed);
            const y = (mouseY * speed);
            orb.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// =========================================
// COSMIC HEADER INITIALIZATION
// =========================================
function initCosmicHeader() {
    // Typewriter Effect
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        const phrases = [
            'Digital Universe Creator',
            'UI/UX Visionary',
            'Quantum Experience Designer',
            'Future Web Architect'
        ];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeWriter() {
            const currentPhrase = phrases[phraseIndex];
            
            if (isDeleting) {
                typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                isDeleting = true;
                setTimeout(typeWriter, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(typeWriter, 500);
            } else {
                setTimeout(typeWriter, isDeleting ? 50 : 100);
            }
        }

        // Start typewriter
        setTimeout(typeWriter, 2000);
    }

    // Particle Field Generator
    const particleField = document.getElementById('particleField');
    if (particleField) {
        for (let i = 0; i < 100; i++) {
            const particle = document.createElement('div');
            particle.className = 'floating-particle';
            particle.style.cssText = `
                position: absolute;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 5}s;
                animation-duration: ${Math.random() * 10 + 10}s;
                width: ${Math.random() * 3 + 1}px;
                height: ${Math.random() * 3 + 1}px;
                background: rgba(${Math.random() > 0.5 ? '0,180,216' : '128,0,0'}, ${Math.random() * 0.5 + 0.3});
                border-radius: 50%;
                pointer-events: none;
            `;
            particleField.appendChild(particle);
        }
    }

    // Mouse Parallax Effect
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        const layers = document.querySelectorAll('.nebula-layer');
        layers.forEach((layer, index) => {
            const speed = (index + 1) * 20;
            const x = (mouseX * speed);
            const y = (mouseY * speed);
            layer.style.transform = `translate(${x}px, ${y}px) scale(${1 + mouseX * 0.1})`;
        });
        
        // 3D Headline follow
        const headline = document.getElementById('headline3D');
        if (headline) {
            const rotateX = (mouseY - 0.5) * 20;
            const rotateY = (mouseX - 0.5) * 20;
            headline.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
    });

    // Initialize WebGL Canvas (simplified version)
    const canvas = document.getElementById('portalCanvas');
    if (canvas && canvas.getContext) {
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particles = [];
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 1,
                speedX: (Math.random() - 0.5) * 2,
                speedY: (Math.random() - 0.5) * 2,
                color: `rgba(0, 180, 216, ${Math.random() * 0.5})`
            });
        }

        function animateCanvas() {
            if (!ctx || !canvas) return;
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(p => {
                p.x += p.speedX;
                p.y += p.speedY;
                
                if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
                if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
                
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
                
                // Draw connections
                particles.forEach(p2 => {
                    const distance = Math.hypot(p.x - p2.x, p.y - p2.y);
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 180, 216, ${0.1 * (1 - distance/100)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                });
            });
            
            requestAnimationFrame(animateCanvas);
        }
        
        animateCanvas();
        
        // Resize handler
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }
}

// =========================================
// COSMIC ABOUT SECTION INITIALIZATION
// =========================================
function initCosmicAbout() {
    // Animated counter for stats
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateStats() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const current = parseInt(stat.innerText);
            
            if (!isNaN(target) && !isNaN(current)) {
                const increment = Math.ceil(target / 50);
                
                if (current < target) {
                    stat.innerText = Math.min(current + increment, target);
                    setTimeout(animateStats, 30);
                }
            }
        });
    }
    
    // Trigger animation when section is in view
    const aboutSection = document.getElementById('about');
    let animated = false;
    
    if (aboutSection) {
        window.addEventListener('scroll', () => {
            if (!animated && aboutSection.getBoundingClientRect().top < window.innerHeight * 0.8) {
                animateStats();
                animated = true;
            }
        });
    }

    // Parallax effect on vision card
    const visionCard = document.getElementById('visionCard');
    if (visionCard) {
        visionCard.addEventListener('mousemove', (e) => {
            const rect = visionCard.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            
            const layers = visionCard.querySelectorAll('.layer');
            layers.forEach((layer, index) => {
                const depth = (index + 1) * 20;
                layer.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
            });
        });
        
        visionCard.addEventListener('mouseleave', () => {
            const layers = visionCard.querySelectorAll('.layer');
            layers.forEach(layer => {
                layer.style.transform = 'translate(0, 0)';
            });
        });
    }

    // Interactive timeline dots
    const timelineDots = document.querySelectorAll('.timeline-dot');
    timelineDots.forEach(dot => {
        dot.addEventListener('mouseenter', () => {
            timelineDots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
        });
    });

    // Floating particles generator for dust
    const dust = document.querySelector('.odyssey-dust');
    if (dust) {
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'dust-particle';
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 3}px;
                height: ${Math.random() * 3}px;
                background: rgba(255,255,255,${Math.random() * 0.3});
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: floatParticle ${Math.random() * 10 + 10}s infinite;
                animation-delay: ${Math.random() * 5}s;
            `;
            dust.appendChild(particle);
        }
    }

    // 3D Tilt effect on holographic card
    const holoCard = document.querySelector('.holographic-card');
    if (holoCard) {
        holoCard.addEventListener('mousemove', (e) => {
            const rect = holoCard.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            
            holoCard.style.transform = `
                perspective(1000px)
                rotateY(${x * 5}deg)
                rotateX(${y * -5}deg)
                translateZ(20px)
            `;
        });
        
        holoCard.addEventListener('mouseleave', () => {
            holoCard.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) translateZ(0)';
        });
    }

    // Value cards ripple effect
    const valueCards = document.querySelectorAll('.value-card');
    valueCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const ripple = document.createElement('div');
            ripple.className = 'click-ripple';
            ripple.style.cssText = `
                position: absolute;
                top: ${e.offsetY}px;
                left: ${e.offsetX}px;
                width: 0;
                height: 0;
                background: radial-gradient(circle, var(--cosmic-accent) 0%, transparent 70%);
                border-radius: 50%;
                transform: translate(-50%, -50%);
                animation: clickRipple 0.8s ease-out;
                pointer-events: none;
                z-index: 1000;
            `;
            card.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 800);
        });
    });
}

// =========================================
// SCROLL EFFECTS
// =========================================
let lastScrollTop = 0;
const navbar = document.getElementById('mainNav');

// Create scroll progress bar
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.appendChild(progressBar);

function initScrollEffects() {
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        
        // Update progress bar
        if (progressBar) {
            progressBar.style.width = scrollPercent + '%';
        }
        
        // Navbar hide/show with cosmic effect
        if (navbar) {
            if (scrollTop > lastScrollTop && scrollTop > 200) {
                navbar.classList.add('navbar-hidden');
                
                // Add cosmic trail effect
                document.body.style.setProperty('--scroll-aura', scrollPercent + '%');
            } else {
                navbar.classList.remove('navbar-hidden');
            }
        }
        lastScrollTop = scrollTop;
        
        // Parallax effect on sections
        document.querySelectorAll('.cosmic-section, .cosmic-odyssey, #portfolio').forEach((section) => {
            const rect = section.getBoundingClientRect();
            const visiblePercent = Math.max(0, Math.min(1, 
                (window.innerHeight - rect.top) / window.innerHeight
            ));
            
            // Apply quantum distortion based on scroll
            if (visiblePercent > 0 && visiblePercent < 1) {
                const distortion = Math.sin(visiblePercent * Math.PI) * 2;
                section.style.transform = `perspective(1000px) rotateX(${distortion}deg) translateZ(${distortion * 10}px)`;
                section.style.filter = `brightness(${1 + distortion * 0.1})`;
            }
        });
    });
}

// =========================================
// MAGNETIC EFFECTS FOR BUTTONS AND FIELDS
// =========================================
function initMagneticEffects() {
    // Magnetic buttons
    document.querySelectorAll('.cosmic-btn, .quantum-newsletter-btn, .cosmic-submit-btn, .quantum-cta, .wormhole-btn').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const deltaX = (x - centerX) / 8;
            const deltaY = (y - centerY) / 8;
            
            btn.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
            
            // Update magnetic field position
            btn.style.setProperty('--x', x + 'px');
            btn.style.setProperty('--y', y + 'px');
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });
    
    // Magnetic input fields
    document.querySelectorAll('.magnetic-field').forEach(field => {
        const input = field.querySelector('input, textarea');
        if (input) {
            input.addEventListener('mousemove', (e) => {
                const rect = field.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                field.style.setProperty('--x', x + 'px');
                field.style.setProperty('--y', y + 'px');
            });
        }
    });
}

// =========================================
// QUANTUM GALLERY EFFECTS
// =========================================
function initQuantumGallery() {
    document.querySelectorAll('.quantum-gallery-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Create quantum entanglement effect between gallery items
            const parent = item.parentElement;
            if (parent) {
                const siblings = Array.from(parent.children);
                siblings.forEach(sibling => {
                    if (sibling !== item && sibling.classList.contains('quantum-gallery-item')) {
                        sibling.style.filter = 'blur(2px) brightness(0.5)';
                        sibling.style.transform = 'scale(0.95)';
                        sibling.style.transition = 'all 0.3s ease';
                    }
                });
            }
        });
        
        item.addEventListener('mouseleave', () => {
            const parent = item.parentElement;
            if (parent) {
                const siblings = Array.from(parent.children);
                siblings.forEach(sibling => {
                    if (sibling.classList.contains('quantum-gallery-item')) {
                        sibling.style.filter = 'none';
                        sibling.style.transform = 'scale(1)';
                    }
                });
            }
        });
    });
}

// =========================================
// COSMIC CLOCK (for footer)
// =========================================
function initCosmicClock() {
    const footer = document.querySelector('.cosmic-footer');
    if (footer) {
        const timeElement = document.createElement('span');
        timeElement.className = 'cosmic-time ms-3';
        
        function updateTime() {
            const now = new Date();
            timeElement.innerHTML = `<i class="fas fa-clock me-1"></i>${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}:${now.getSeconds().toString().padStart(2,'0')} UTC`;
        }
        
        updateTime();
        setInterval(updateTime, 1000);
        
        const footerText = footer.querySelector('.text-center p');
        if (footerText) {
            footerText.appendChild(timeElement);
        }
    }
}

// =========================================
// ADDITIONAL STYLES FOR FLOATING PARTICLES
// =========================================
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    
    @keyframes wormholeExit {
        0% { transform: scale(1) rotate(0deg); filter: blur(0); opacity: 1; }
        50% { transform: scale(0.5) rotate(180deg); filter: blur(10px); opacity: 0.5; }
        100% { transform: scale(0) rotate(360deg); filter: blur(20px); opacity: 0; }
    }
    
    .quantum-swal-title {
        font-family: 'Orbitron', sans-serif;
        color: var(--cosmic-accent);
    }
    
    .quantum-swal-content {
        font-family: 'Poppins', sans-serif;
    }
    
    .quantum-swal-content i {
        color: var(--cosmic-accent);
        animation: iconPulse 1s infinite;
    }

    .floating-particle {
        position: absolute;
        border-radius: 50%;
        pointer-events: none;
        animation: floatAround 20s infinite linear;
    }

    @keyframes iconPulse {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.2); opacity: 0.8; }
    }
`;
document.head.appendChild(styleSheet);

// =========================================
// PAGE EXIT ANIMATION
// =========================================
window.addEventListener('beforeunload', () => {
    document.body.classList.add('page-exit');
});

// =========================================
// INITIALIZE EVERYTHING ON DOM CONTENT LOADED
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('✨ NEBULA STUDIO - Quantum Animations Loading ✨');
    
    // Initialize tooltips and popovers that don't depend on Bootstrap
    setTimeout(() => {
        // Force AOS refresh if available
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }, 500);
});

// =========================================
// FOOTER CLOCK
// =========================================
function initFooterClock() {
    const clockElement = document.querySelector('#footerClock span');
    if (!clockElement) return;
    
    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        clockElement.textContent = `${hours}:${minutes}:${seconds} UTC`;
    }
    
    updateClock();
    setInterval(updateClock, 1000);
}

// Call this in your DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    initFooterClock();
    
    // Generate footer particles
    const footerParticles = document.getElementById('footerParticles');
    if (footerParticles) {
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'footer-particle';
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 1}px;
                height: ${Math.random() * 4 + 1}px;
                background: ${Math.random() > 0.5 ? '#00b4d8' : '#800080'};
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                opacity: ${Math.random() * 0.5};
                animation: floatParticle ${Math.random() * 10 + 10}s linear infinite;
                animation-delay: ${Math.random() * 5}s;
                pointer-events: none;
            `;
            footerParticles.appendChild(particle);
        }
    }
});

// =========================================
// FOOTER CLOCK
// =========================================
function initFooterClock() {
    const clockElement = document.querySelector('#footerClock span');
    if (!clockElement) return;
    
    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        clockElement.textContent = `${hours}:${minutes}:${seconds} UTC`;
    }
    
    updateClock();
    setInterval(updateClock, 1000);
}

// Call this in your DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    initFooterClock();
    
    // Generate footer particles
    const footerParticles = document.getElementById('footerParticles');
    if (footerParticles) {
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'footer-particle';
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 1}px;
                height: ${Math.random() * 4 + 1}px;
                background: ${Math.random() > 0.5 ? '#00b4d8' : '#800080'};
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                opacity: ${Math.random() * 0.5};
                animation: floatParticle ${Math.random() * 10 + 10}s linear infinite;
                animation-delay: ${Math.random() * 5}s;
                pointer-events: none;
            `;
            footerParticles.appendChild(particle);
        }
    }
});

// =========================================
// MODAL FUNCTIONS
// =========================================

// Open modal with image
function openModal(imgSrc) {
    const modalImage = document.getElementById('modalImage');
    if (modalImage) {
        modalImage.style.opacity = '0';
        modalImage.style.transform = 'scale(0.5) rotate(-10deg)';
        
        setTimeout(() => {
            modalImage.src = imgSrc;
            modalImage.style.opacity = '1';
            modalImage.style.transform = 'scale(1) rotate(0)';
        }, 200);
    }
    
    const modalElement = document.getElementById('imageModal');
    if (modalElement) {
        const imgModal = new bootstrap.Modal(modalElement);
        imgModal.show();
    }
}

// Download image
function downloadImage() {
    const modalImage = document.getElementById('modalImage');
    if (modalImage && modalImage.src) {
        // Create a temporary link
        const link = document.createElement('a');
        link.href = modalImage.src;
        link.download = 'nebula-quantum-image.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Show toast notification
        showPluginToast('Download Started', '✨ Image downloading from cosmos...');
    }
}

// Share image
function shareImage() {
    const modalImage = document.getElementById('modalImage');
    if (modalImage && modalImage.src) {
        // Check if Web Share API is supported
        if (navigator.share) {
            navigator.share({
                title: 'Nebula Studio Cosmic Image',
                text: 'Check out this amazing cosmic image from Nebula Studio!',
                url: modalImage.src
            }).catch(() => {
                // Fallback
                copyToClipboard(modalImage.src);
            });
        } else {
            // Fallback
            copyToClipboard(modalImage.src);
        }
    }
}

// Copy to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showPluginToast('Link Copied', '✨ Image link copied to clipboard!');
    });
}

// Make functions globally available
window.openModal = openModal;
window.downloadImage = downloadImage;
window.shareImage = shareImage;