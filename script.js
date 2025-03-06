// Navigation Bar Toggle

const navToggle = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav li');

navToggle.addEventListener('click', () => {
  navLinks.forEach((link) => {
    link.classList.toggle('active');
  });
});

// Scroll to Top Button

const scrollTopButton = document.createElement('button');
scrollTopButton.textContent = 'Scroll to Top';
scrollTopButton.classList.add('scroll-top');

document.body.appendChild(scrollTopButton);

scrollTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Active Navigation Link

const sections = document.querySelectorAll('main, header, footer');
const navLinksActive = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
      currentSection = section.id;
    }
  });

  navLinksActive.forEach((link) => {
    link.classList.remove('active');

    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});
