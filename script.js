// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu
const toggle = document.getElementById('nav-toggle');
const menu = document.getElementById('mobile-menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});

function closeMobile() {
  menu.classList.remove('open');
}

// Scroll-triggered fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section-title, .about-text, .skill-card, .project-card, .contact-container')
  .forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
  });
