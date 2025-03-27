// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.getElementById('navMenu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Dropdown Toggle for Mobile
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            dropdown.classList.toggle('show');
            e.preventDefault();
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('nav') && !e.target.closest('.mobile-menu-btn') && window.innerWidth <= 768) {
        navMenu.classList.remove('show');
    }
});

// Resize handler
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('show');
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('show');
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Initialize bxSlider when jQuery is loaded
    if (typeof jQuery !== 'undefined') {
        $(document).ready(function() {
            $('.testimonials-slider').bxSlider({
                auto: true,
                pause: 5000,
                speed: 500,
                mode: 'fade',
                adaptiveHeight: true,
                controls: true,
                pager: true,
                touchEnabled: true,
                responsive: true
            });
        });
    }
});