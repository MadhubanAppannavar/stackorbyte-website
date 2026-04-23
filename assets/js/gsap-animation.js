gsap.registerPlugin(ScrollTrigger);

// Hero animations
gsap.to(".title", {
  opacity: 1,
  y: 0,
  duration: 1,
  delay: 0.2,
  ease: "power3.out"
});

gsap.to(".subtitle", {
  opacity: 1,
  duration: 1,
  delay: 0.6,
  ease: "power3.out"
});

gsap.to(".btn", {
  opacity: 1,
  duration: 1,
  delay: 1,
  ease: "power3.out"
});

// Navbar scroll effect
gsap.to(".navbar", {
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom top",
    scrub: true
  },
  y: -100,
  opacity: 0.95
});

// Services cards scroll animation with rotation
gsap.from(".service-card", {
  scrollTrigger: {
    trigger: "#services",
    start: "top bottom",
  },
  y: 80,
  rotation: 10,
  opacity: 0,
  duration: 1,
  stagger: 0.15,
  ease: "back.out(1.7)"
});

// Continuous subtle float for service cards
gsap.to(".service-card", {
  y: "-10px",
  duration: 2.5,
  repeat: -1,
  yoyo: true,
  stagger: 0.1,
  ease: "power2.inOut"
});

// Why Choose cards with scale + bounce
gsap.from(".choose-card", {
  scrollTrigger: {
    trigger: ".why-choose-section",
    start: "top 85%",
  },
  y: 60,
  scale: 0.8,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,
  ease: "back.out(1.7)"
});

// Float animation for why choose cards
gsap.to(".choose-card", {
  y: "-15px",
  duration: 3,
  repeat: -1,
  yoyo: true,
  stagger: 0.2,
  ease: "power2.inOut"
});

// Hero service cards animation
gsap.from(".hero-service-card", {
  scrollTrigger: {
    trigger: ".hero-services",
    start: "top 85%",
  },
  y: 60,
  opacity: 0,
  rotationX: 15,
  duration: 0.8,
  stagger: 0.2,
  ease: "back.out(1.7)"
});

// All service cards
gsap.from(".service-card", {
  scrollTrigger: {
    trigger: ".services",
    start: "top 80%",
  },
  y: 80,
  rotation: 10,
  opacity: 0,
  duration: 1,
  stagger: 0.15,
  ease: "back.out(1.7)"
});

// Why choose cards
gsap.from(".choose-card", {
  scrollTrigger: {
    trigger: ".why-choose-section",
    start: "top 85%",
  },
  y: 60,
  scale: 0.8,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,
  ease: "back.out(1.7)"
});

// Testimonials
gsap.from(".testimonial-card", {
  scrollTrigger: {
    trigger: ".hero-testimonials",
    start: "top 85%",
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power3.out"
});

// About mission/vision cards
gsap.from(".mission-card, .vision-card", {
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 80%",
  },
  y: 50,
  scale: 0.95,
  opacity: 0,
  rotationY: 10,
  duration: 0.9,
  stagger: 0.3,
  ease: "back.out(1.7)"
});

// Contact hero
gsap.from(".contact-hero", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top 85%",
  },
  scale: 0.9,
  opacity: 0,
  rotationX: 15,
  duration: 1.2,
  ease: "back.out(1.7)"
});

// Button hover interactions
gsap.utils.toArray(".btn").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, { scale: 1.05, duration: 0.3, ease: "power2.out" });
  });
  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.out" });
  });
});

// Card inner animations - hover effects
const cardSelectors = ['.hero-service-card', '.service-card', '.choose-card', '.testimonial-card', '.mission-card', '.vision-card'];
cardSelectors.forEach(selector => {
  gsap.utils.toArray(selector).forEach(card => {
    const innerContent = card.querySelectorAll('h3, p, ul li, .choose-icon, .testimonial-author, img');
    
    card.addEventListener("mouseenter", () => {
      gsap.to(innerContent, {
        y: -5,
        opacity: 1,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.out"
      });
      gsap.to(card.querySelector('img'), {
        scale: 1.05,
        duration: 0.4,
        ease: "power2.out"
      });
    });
    
    card.addEventListener("mouseleave", () => {
      gsap.to(innerContent, {
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
      gsap.to(card.querySelector('img'), {
        scale: 1,
        duration: 0.4,
        ease: "power2.out"
      });
    });
  });
});

// Continuous subtle inner float for icons/images
gsap.utils.toArray('.choose-icon, .hero-service-card img, .service-card img, .testimonial-author img').forEach(icon => {
  gsap.to(icon, {
    rotation: 360,
    duration: 20,
    repeat: -1,
    ease: "none"
  });
});

// Navbar stagger entrance animation
gsap.from(".navbar .nav-logo, .nav-menu .nav-link, .nav-buttons .btn", {
  y: -30,
  opacity: 0,
  duration: 0.8,
  stagger: 0.08,
  ease: "back.out(1.7)",
  delay: 0.3
});

// Nav link hover (updated for new colors)
gsap.utils.toArray(".nav-link").forEach(link => {
  link.addEventListener("mouseenter", () => {
    gsap.to(link, { scale: 1.05, duration: 0.3, ease: "power2.out" });
  });
  link.addEventListener("mouseleave", () => {
    gsap.to(link, { scale: 1, duration: 0.3, ease: "power2.out" });
  });
});

// Continuous floating animation for hero image + cards too
gsap.to(".hero-image img", {
  y: "-20px",
  rotation: 2,
  duration: 4,
  repeat: -1,
  yoyo: true,
  ease: "power2.inOut"
});

gsap.to(".card", {
  rotationY: 5,
  duration: 3,
  repeat: -1,
  yoyo: true,
  stagger: 0.2,
  ease: "power1.inOut"
});

// Parallax effect on sections
gsap.utils.toArray("section").forEach(section => {
  gsap.to(section, {
    scrollTrigger: {
      trigger: section,
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    },
    yPercent: -15
  });
});
