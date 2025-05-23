// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all sections for animations
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add animation classes to elements
document.addEventListener('DOMContentLoaded', () => {
    // Add CSS for fade-in animations
    const style = document.createElement('style');
    style.textContent = `
        .track-card,
        .show-card,
        .member {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate .track-card,
        .animate .show-card,
        .animate .member {
            opacity: 1;
            transform: translateY(0);
        }
        
        .animate .track-card:nth-child(1) { transition-delay: 0.1s; }
        .animate .track-card:nth-child(2) { transition-delay: 0.2s; }
        .animate .track-card:nth-child(3) { transition-delay: 0.3s; }
        
        .animate .show-card:nth-child(1) { transition-delay: 0.1s; }
        .animate .show-card:nth-child(2) { transition-delay: 0.2s; }
        .animate .show-card:nth-child(3) { transition-delay: 0.3s; }
        
        .animate .member:nth-child(1) { transition-delay: 0.1s; }
        .animate .member:nth-child(2) { transition-delay: 0.2s; }
        .animate .member:nth-child(3) { transition-delay: 0.3s; }
        .animate .member:nth-child(4) { transition-delay: 0.4s; }
    `;
    document.head.appendChild(style);
});

// Play button functionality (placeholder)
document.querySelectorAll('.play-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const isPlaying = this.textContent.includes('⏸');
        
        // Reset all other buttons
        document.querySelectorAll('.play-btn').forEach(b => {
            b.textContent = '🎸 ROCK';
            b.style.background = 'linear-gradient(45deg, #ff0080, #ff00ff)';
        });
        
        if (!isPlaying) {
            this.textContent = '⏸ STOP';
            this.style.background = 'linear-gradient(45deg, #00ff00, #00ffff)';
            
            // Simulate stopping after 3 seconds
            setTimeout(() => {
                this.textContent = '🎸 ROCK';
                this.style.background = 'linear-gradient(45deg, #ff0080, #ff00ff)';
            }, 3000);
        }
    });
});

// Contact form handling
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('.btn-primary');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.style.background = '#4CAF50';
    
    // Simulate form submission
    setTimeout(() => {
        submitBtn.textContent = 'Message Sent!';
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '#ff6b6b';
            this.reset();
        }, 2000);
    }, 1000);
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add CSS for active navigation links
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        .nav-link.active {
            color: #ff6b6b !important;
        }
    `;
    document.head.appendChild(style);
});