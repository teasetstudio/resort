document.addEventListener("DOMContentLoaded", () => {
  const navBar1 = document.querySelector(".nav-bar1");
  const navBar2 = document.querySelector(".nav-bar2");
  const home = document.querySelector("#home");
  const about = document.querySelector("#about");
  const accommmodation = document.querySelector("#accommmodation");
  const santa = document.querySelector("#santas-house");
  const weddings = document.querySelector("#weddings");

  const navBarFunctionion = () => {
    if (window.scrollY > home.offsetHeight - (navBar1.offsetHeight/2)) {
      navBar1.classList.remove("visible");
      navBar2.classList.add("visible");
    } else {
        navBar1.classList.add("visible");
        navBar2.classList.remove("visible");
    }

    const isAbout = window.scrollY > (about.getBoundingClientRect().top + window.scrollY - 20)
    const isAccommodation = window.scrollY > (accommmodation.getBoundingClientRect().top + window.scrollY - 20)
    const isSanta = window.scrollY > (santa.getBoundingClientRect().top + window.scrollY - 20)
    const isWeddings = window.scrollY > (weddings.getBoundingClientRect().top + window.scrollY - 20)

    if (isAccommodation && !isSanta) {
      //   change navbar color and border color styles
      navBar2.style.color = "black";
      navBar2.style.borderColor = "black";
      navBar2.querySelector("a[href='#accommmodation']").classList.add("active");
    } else {
      navBar2.style.color = "white";
      navBar2.style.borderColor = "white";
      navBar2.querySelector("a[href='#accommmodation']").classList.remove("active");
    }

    
    if (isAbout && !isAccommodation) {
        navBar2.querySelector("a[href='#about']").classList.add("active");
    } else {
      navBar2.querySelector("a[href='#about']").classList.remove("active");
    }

    if (isSanta && !isWeddings) {
      navBar2.querySelector("a[href='#santas-house']").classList.add("active");
    } else {
      navBar2.querySelector("a[href='#santas-house']").classList.remove("active");
    }

    
    if (isWeddings) {
      navBar2.querySelector("a[href='#weddings']").classList.add("active");
    } else {
      navBar2.querySelector("a[href='#weddings']").classList.remove("active");
    }   
  }

  // Toggle nav-bar2 visibility based on scroll position
  window.addEventListener('scroll', () => {
      navBarFunctionion();
  });
  window.addEventListener('load', () => {
    navBarFunctionion();
});

  // Initialize Smooth Scroll
  const scroll = new SmoothScroll('.nav-bar a[href*="#"]', {
      speed: 800,
      speedAsDuration: true,
  });
});
