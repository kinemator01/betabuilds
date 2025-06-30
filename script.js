// Toggle menu icon and mobile nav
const toggleButton = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

toggleButton.addEventListener('click', () => {
  navList.classList.toggle('active');
  toggleButton.textContent = navList.classList.contains('active') ? '✕' : '☰';
});

// Change header background on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 10) {
    header.style.backgroundColor = '#001c40';
  } else {
    header.style.background = 'linear-gradient(90deg, #002244, #0055aa)';
  }
});

// Hero image interaction
const heroImg = document.getElementById('hero-img');
if (heroImg) {
  heroImg.addEventListener('click', () => {
    alert('This is our workspace — where the magic happens!');
  });
}

// Scroll reveal animation for about/contact sections
const fadeInElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

fadeInElements.forEach(el => observer.observe(el));
