document.addEventListener("DOMContentLoaded", () => {
  const navBar1 = document.querySelector(".nav-bar1");
  const navBar2 = document.querySelector(".nav-bar2");
  const home = document.querySelector("#home");
  const accommmodation = document.querySelector("#accommmodation");
  const santa = document.querySelector("#santas-house");

  // Toggle nav-bar2 visibility based on scroll position
  window.addEventListener('scroll', () => {
      if (window.scrollY > home.offsetHeight - (navBar1.offsetHeight/2)) {
          navBar1.classList.remove("visible");
          navBar2.classList.add("visible");
      } else {
          navBar1.classList.add("visible");
          navBar2.classList.remove("visible");
      }

      const isAfterAbout = window.scrollY > (accommmodation.getBoundingClientRect().top + window.scrollY - 20)
      const isAfterAccomodation = window.scrollY > (santa.getBoundingClientRect().top + window.scrollY - 20)
      if (isAfterAbout && !isAfterAccomodation) {
        //   change navbar color and border color styles
        navBar2.style.color = "black";
        navBar2.style.borderColor = "black";

      } else {
        navBar2.style.color = "white";
        navBar2.style.borderColor = "white";
      }
  });

  // Initialize Smooth Scroll
  const scroll = new SmoothScroll('.nav-bar a[href*="#"]', {
      speed: 800,
      speedAsDuration: true,
  });
});
