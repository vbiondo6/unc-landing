// unc AI Landing Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Animate respect meter on page load
    animateRespectMeter();

    // Add smooth scrolling to navigation links
    addSmoothScrolling();

    // Add hover effects for feature cards
    addFeatureCardEffects();

    // Add dynamic message cycling
    cycleMessages();

    // Add scroll animations
    addScrollAnimations();
});

function animateRespectMeter() {
    const meter = document.getElementById('respectMeter');
    let currentLevel = 0;
    const targetLevel = 75; // Target respect level
    const duration = 2000; // Animation duration in ms
    const increment = targetLevel / (duration / 16); // 60fps

    function updateMeter() {
        currentLevel += increment;
        if (currentLevel >= targetLevel) {
            currentLevel = targetLevel;
        }

        meter.style.width = currentLevel + '%';

        if (currentLevel < targetLevel) {
            requestAnimationFrame(updateMeter);
        }
    }

    // Start animation after a short delay
    setTimeout(() => {
        requestAnimationFrame(updateMeter);
    }, 1000);
}

function addSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for navbar height

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function addFeatureCardEffects() {
    const cards = document.querySelectorAll('.feature-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

function cycleMessages() {
    const messages = [
        "Stay focused, young padawan!",
        "Impressive discipline! I'm proud of you.",
        "Come on now, focus up! You've got this.",
        "Your dedication inspires me.",
        "Keep that momentum going!"
    ];

    const messageBubble = document.getElementById('messageBubble');
    let currentIndex = 0;

    function changeMessage() {
        messageBubble.style.opacity = '0';
        messageBubble.style.transform = 'translateY(10px)';

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % messages.length;
            messageBubble.textContent = messages[currentIndex];

            messageBubble.style.opacity = '1';
            messageBubble.style.transform = 'translateY(0)';
        }, 300);
    }

    // Change message every 4 seconds
    setInterval(changeMessage, 4000);
}

function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all sections for scroll animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Add CSS for scroll animations
const style = document.createElement('style');
style.textContent = `
    section {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }

    section.animate-in {
        opacity: 1;
        transform: translateY(0);
    }

    .hero {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Add some fun interactions
function addFunInteractions() {
    const uncImage = document.querySelector('.hero-unc');

    uncImage.addEventListener('click', function() {
        this.style.transform = 'scale(0.95) rotate(5deg)';

        setTimeout(() => {
            this.style.transform = 'scale(1) rotate(0deg)';
        }, 200);
    });

    // Add keyboard interaction for demo
    document.addEventListener('keydown', function(e) {
        if (e.key === 'f') {
            // Focus mode
            document.querySelector('.phone-mockup').style.boxShadow = '0 20px 40px rgba(74, 222, 128, 0.3)';
            document.getElementById('messageBubble').textContent = "Excellent focus! Keep it up!";
        } else if (e.key === 'd') {
            // Distracted mode
            document.querySelector('.phone-mockup').style.boxShadow = '0 20px 40px rgba(245, 87, 108, 0.3)';
            document.getElementById('messageBubble').textContent = "Hey! Get back to work!";
        }
    });
}

// Initialize fun interactions
addFunInteractions();
