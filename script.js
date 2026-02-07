/* =======================================
   WILDLIFE CONSERVATION INDIA
   Custom JavaScript File
   ======================================= */

// ===== BACK TO TOP BUTTON =====
document.addEventListener('DOMContentLoaded', function() {
    const backToTop = document.getElementById('backToTop');
    
    if (backToTop) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTop.style.display = 'block';
            } else {
                backToTop.style.display = 'none';
            }
        });
        
        // Scroll to top on click
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// ===== SMOOTH SCROLLING FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow');
        } else {
            navbar.classList.remove('shadow');
        }
    }
});

// ===== CONTACT FORM VALIDATION & SUBMISSION =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Bootstrap validation
        if (!contactForm.checkValidity()) {
            e.stopPropagation();
            contactForm.classList.add('was-validated');
            return;
        }
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value.trim();
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Validate phone if provided
        if (phone && !/^[\d\s\-\+\(\)]+$/.test(phone)) {
            alert('Please enter a valid phone number');
            return;
        }
        
        // Validate message length
        if (message.length < 10) {
            alert('Message must be at least 10 characters long');
            return;
        }
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            // Show success message
            const successMessage = document.getElementById('successMessage');
            if (successMessage) {
                successMessage.classList.remove('d-none');
                
                // Reset form
                contactForm.reset();
                contactForm.classList.remove('was-validated');
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.classList.add('d-none');
                }, 5000);
                
                // Scroll to success message
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 1500);
    });
}

// ===== VOLUNTEER FORM VALIDATION & SUBMISSION =====
const volunteerForm = document.getElementById('volunteerForm');
if (volunteerForm) {
    volunteerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Bootstrap validation
        if (!volunteerForm.checkValidity()) {
            e.stopPropagation();
            volunteerForm.classList.add('was-validated');
            return;
        }
        
        // Get form values
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('volEmail').value.trim();
        const phone = document.getElementById('volPhone').value.trim();
        const age = document.getElementById('age').value;
        const motivation = document.getElementById('motivation').value.trim();
        const terms = document.getElementById('terms').checked;
        
        // Validate names (only letters, spaces, hyphens)
        const nameRegex = /^[a-zA-Z\s\-]+$/;
        if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
            alert('Names can only contain letters, spaces, and hyphens');
            return;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Validate phone
        if (!/^[\d\s\-\+\(\)]+$/.test(phone) || phone.replace(/\D/g, '').length < 10) {
            alert('Please enter a valid phone number (at least 10 digits)');
            return;
        }
        
        // Validate age
        if (age < 18 || age > 70) {
            alert('Age must be between 18 and 70');
            return;
        }
        
        // Validate motivation length
        if (motivation.length < 20) {
            alert('Please provide a detailed motivation (at least 20 characters)');
            return;
        }
        
        // Validate terms
        if (!terms) {
            alert('You must agree to the terms and conditions');
            return;
        }
        
        // Simulate form submission
        const submitBtn = volunteerForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Submitting...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            // Show success message
            const successMessage = document.getElementById('volunteerSuccess');
            if (successMessage) {
                successMessage.classList.remove('d-none');
                
                // Reset form
                volunteerForm.reset();
                volunteerForm.classList.remove('was-validated');
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Hide success message after 7 seconds
                setTimeout(() => {
                    successMessage.classList.add('d-none');
                }, 7000);
                
                // Scroll to success message
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 2000);
    });
}

// ===== DATE AND TIME DISPLAY (FOR CONTACT PAGE) =====
function updateDateTime() {
    const dateElement = document.getElementById('currentDate');
    const timeElement = document.getElementById('currentTime');
    
    if (dateElement && timeElement) {
        const now = new Date();
        
        // Format date
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        const dateString = now.toLocaleDateString('en-IN', options);
        dateElement.textContent = dateString;
        
        // Format time
        const timeOptions = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        const timeString = now.toLocaleTimeString('en-IN', timeOptions);
        timeElement.textContent = timeString;
    }
}

// Update date/time immediately and then every second
updateDateTime();
setInterval(updateDateTime, 1000);

// ===== CAROUSEL AUTO-PLAY CONTROL =====
const heroCarousel = document.getElementById('heroCarousel');
if (heroCarousel) {
    const carousel = new bootstrap.Carousel(heroCarousel, {
        interval: 5000,
        ride: 'carousel',
        pause: 'hover'
    });
}

// ===== FORM INPUT ANIMATION =====
document.querySelectorAll('.form-control, .form-select').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
});

// ===== SCROLL REVEAL ANIMATION =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and stat boxes
document.querySelectorAll('.card, .stat-card, .program-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== ACTIVE NAV LINK HIGHLIGHT =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ===== LAZY LOADING IMAGES =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== PREVENT EMPTY FORM SUBMISSION =====
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('is-invalid');
            } else {
                input.classList.remove('is-invalid');
            }
        });
        
        if (!isValid) {
            e.preventDefault();
            e.stopPropagation();
        }
    });
});

// ===== NAVBAR CLOSE ON LINK CLICK (MOBILE) =====
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

if (navbarToggler && navbarCollapse) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });
}

// ===== TOOLTIPS INITIALIZATION (Bootstrap) =====
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// ===== CONSOLE MESSAGE =====
console.log('%c🐾 Wildlife Conservation India', 'font-size: 24px; color: #2d6a4f; font-weight: bold;');
console.log('%cProtecting India\'s Rich Biodiversity', 'font-size: 14px; color: #40916c;');
console.log('%c\nWebsite developed for educational purposes', 'font-size: 12px; color: #666;');

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===== ACCESSIBILITY: KEYBOARD NAVIGATION =====
document.addEventListener('keydown', function(e) {
    // ESC key to close modals or dropdowns
    if (e.key === 'Escape') {
        const openModals = document.querySelectorAll('.modal.show');
        openModals.forEach(modal => {
            bootstrap.Modal.getInstance(modal)?.hide();
        });
    }
    
    // Tab key navigation enhancement
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-nav');
});

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('An error occurred:', e.error);
});

// ===== PERFORMANCE MONITORING =====
window.addEventListener('load', function() {
    if (performance.timing) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Page loaded in ${loadTime}ms`);
    }
});

// ===== END OF SCRIPT =====
