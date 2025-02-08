document.addEventListener("DOMContentLoaded", () => {
  const navBar1 = document.querySelector(".nav-bar1");
  const navBar2 = document.querySelector(".nav-bar2");
  const home = document.querySelector("#home");

  // Toggle nav-bar2 visibility based on scroll position
  window.addEventListener('scroll', () => {
      if (window.scrollY > home.offsetHeight - (navBar1.offsetHeight/2)) {
          navBar1.classList.remove("visible");
          navBar2.classList.add("visible");
      } else {
          navBar1.classList.add("visible");
          navBar2.classList.remove("visible");
      }
  });

  // Initialize Smooth Scroll
  const scroll = new SmoothScroll('.nav-bar a[href*="#"]', {
      speed: 800,
      speedAsDuration: true,
  });
});
