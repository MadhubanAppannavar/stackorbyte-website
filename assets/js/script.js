/* Old cursor code disabled - using dedicated custom-cursor.js */

// Smooth scrolling
body.style.scrollBehavior = 'smooth';

// Professional card scroll reveal
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

cards.forEach(card => {
  observer.observe(card);
});

// Navbar scroll effect
let ticking = false;
function updateNavbar() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(updateNavbar);
    ticking = true;
  }
});

setTimeout(() => {
  ticking = false;
}, 100);

// Existing reveal animations
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
