function pageTransition(url) {
  gsap.to(".page-transition", {
    x: "0%",
    duration: 0.5,
    ease: "power2.inOut",
    onComplete: () => {
      window.location.href = url;
    }
  });
}

// Page load animation (slide out)
window.addEventListener("load", () => {
  gsap.to(".page-transition", {
    x: "100%",
    duration: 0.5,
    ease: "power2.inOut"
  });
});
