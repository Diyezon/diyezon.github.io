let currentLang = 'en';

// Load translations
function translate(key) {
    const keys = key.split('.');
    let value = translations[currentLang];
    for (const k of keys) {
        if (value && value[k]) {
            value = value[k];
        } else {
            return key;
        }
    }
    return value;
}

function switchLanguage(lang) {
    currentLang = lang;
    updateContent();
}

function updateContent() {
    // Update navigation
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translate(key);
    });

    // Update hero section
    document.querySelector('.hero h1').textContent = translate('hero.title');
    document.querySelector('.hero p').textContent = translate('hero.subtitle');

    // Update services section
    document.querySelector('#services h2').textContent = translate('services.title');
    const serviceCards = document.querySelectorAll('.service-card');
    const services = ['software', 'consultancy', 'training', 'project'];
    serviceCards.forEach((card, index) => {
        const service = services[index];
        card.querySelector('h3').textContent = translate(`services.${service}.title`);
        card.querySelector('p').textContent = translate(`services.${service}.description`);
    });

    // Update about section
    document.querySelector('#about h2').textContent = translate('about.title');
    document.querySelector('#about p').textContent = translate('about.description');
    const features = translate('about.features');
    document.querySelectorAll('.features-list li').forEach((li, index) => {
        li.textContent = `✓ ${features[index]}`;
    });

    // Update contact form
    document.querySelector('#contactForm h2').textContent = translate('contact.title');
    document.querySelector('label[for="name"]').textContent = translate('contact.form.name');
    document.querySelector('label[for="email"]').textContent = translate('contact.form.email');
    document.querySelector('label[for="phone"]').textContent = translate('contact.form.phone');
    document.querySelector('label[for="message"]').textContent = translate('contact.form.message');
    document.querySelector('#contactFormElement button').textContent = translate('contact.form.send');

    // Update footer
    document.querySelector('.footer-bottom p').textContent = translate('footer.rights');
}

// Mobile menu functionality
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Contact form modal
function openContactForm() {
    document.getElementById('contactForm').style.display = 'block';
}

function closeContactForm() {
    document.getElementById('contactForm').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('contactForm');
    if (event.target === modal) {
        closeContactForm();
    }
}

// Form submission
function handleSubmit(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };

    alert(translate('contact.form.success'));
    
    event.target.reset();
    closeContactForm();
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeContactForm();
    }
});

// Initialize translations when the page loads
document.addEventListener('DOMContentLoaded', function() {
    updateContent();
});