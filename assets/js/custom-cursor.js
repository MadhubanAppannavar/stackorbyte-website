// Custom Cursor Animation - StackOrbyte Purple Theme
// GSAP-powered smooth dot + ring follower + bubble trails + hovers

(function() {
  const cursor = document.querySelector('.cursor');
  const cursorFollower = document.querySelector('.cursor-follower');
  // const cursorInner = cursor.querySelector('.cursor-inner'); // Not used
  
  let mouseX = 0, mouseY = 0;
  let prevMouseX = 0, prevMouseY = 0;
  const trails = [];
  
  // Hide default cursor
  document.body.style.cursor = 'none';
  
  // Mouse move handler
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Fast main cursor (dot)
    gsap.to(cursor, {
      left: mouseX,
      top: mouseY,
      duration: 0.12,
      ease: 'power2.out'
    });
    
    // Delayed ring follower
    gsap.to(cursorFollower, {
      left: mouseX,
      top: mouseY,
      duration: 0.4,
      ease: 'power2.out'
    });
    
    // Dynamic rotation based on movement direction
    if (prevMouseX !== 0 && prevMouseY !== 0) {
      const angle = Math.atan2(mouseY - prevMouseY, mouseX - prevMouseX) * 180 / Math.PI;
      gsap.to(cursor, { rotation: angle, duration: 0.2, ease: 'power1.out' });
    }
    
    // Spawn bubble trail
    const dist = Math.hypot(mouseX - prevMouseX, mouseY - prevMouseY);
    if (dist > 20 && trails.length < 4) {
      createBubble();
    }
    
    prevMouseX = mouseX;
    prevMouseY = mouseY;
  });
  
  // Bubble trail effect
  function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'cursor-bubble';
    bubble.style.left = (mouseX + (Math.random() - 0.5) * 20) + 'px';
    bubble.style.top = (mouseY + (Math.random() - 0.5) * 20) + 'px';
    bubble.style.setProperty('--bubble-delay', Math.random() * 0.3 + 's');
    document.body.appendChild(bubble);
    
    trails.push(bubble);
    
    gsap.fromTo(bubble, {
      scale: 0,
      opacity: 0.8
    }, {
      scale: Math.random() * 0.8 + 0.4,
      opacity: 0,
      duration: 1.2,
      ease: 'power2.inOut',
      y: -Math.random() * 40 - 20,
      x: (Math.random() - 0.5) * 30
    });
    
    // Cleanup after animation
    gsap.delayedCall(1.3, () => {
      if (bubble.parentNode) bubble.remove();
      const index = trails.indexOf(bubble);
      if (index > -1) trails.splice(index, 1);
    });
  }
  
  // Hover states for interactive elements
  const hoverTargets = document.querySelectorAll('a, button, .btn, .card, .service-card, .hero-service-card, .team-card, .industry-card, .choose-card, .testimonial-card');
  
  hoverTargets.forEach(target => {
    target.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
      cursorFollower.classList.add('hover');
    });
    
    target.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
      cursorFollower.classList.remove('hover');
    });
  });
  
  // Click effect
  document.addEventListener('click', () => {
    gsap.to(cursor, {
      scale: 1.8,
      duration: 0.15,
      yoyo: true,
      repeat: 1,
      ease: 'power2.inOut'
    });
    
    // Click ripple
    const ripple = document.createElement('div');
    ripple.className = 'cursor-ripple';
    ripple.style.left = mouseX + 'px';
    ripple.style.top = mouseY + 'px';
    document.body.appendChild(ripple);
    
    gsap.to(ripple, {
      scale: 3,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
      onComplete: () => ripple.remove()
    });
  });
  
  // Performance: throttle trail spawning on fast movement
  let trailTimeout;
  document.addEventListener('mousemove', () => {
    clearTimeout(trailTimeout);
    trailTimeout = setTimeout(() => {
      // Limit trails on rapid movement
      if (trails.length < 4) createBubble();
    }, 50);
  });
  
})();

