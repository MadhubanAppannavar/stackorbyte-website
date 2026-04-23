// Navbar functionality + smooth scroll + active state
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
const navItems = document.querySelectorAll('.nav-menu a');
  const sections = ['#hero', '#about', '#services', '#technology', '#team', '#industries', '#contact'];
  
  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Active nav item on scroll
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const element = document.querySelector(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100) {
          current = section;
        }
      }
    });
    
    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === current) {
        item.classList.add('active');
      }
    });
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        const navbarHeight = navbar.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Set active class
        navItems.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });
});
