// Simple stat counter animation (GSAP compatible)
document.addEventListener('DOMContentLoaded', () => {
  const stats = document.querySelectorAll('.stat-number[data-target]');
  
  const animateStats = () => {
    stats.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target'));
      const count = parseInt(stat.textContent);
      const increment = target / 100;
      
      if (count < target) {
        stat.textContent = Math.ceil(count + increment);
        requestAnimationFrame(animateStats);
      } else {
        stat.textContent = target;
      }
    });
  };
  
  // Trigger on scroll into view
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateStats();
        statsObserver.unobserve(entry.target);
      }
    });
  });
  
  statsObserver.observe(document.querySelector('.hero-stats'));
});
