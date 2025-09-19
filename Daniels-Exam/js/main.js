const initApp = () => {
  "use strict";
  
  // Remove the loading bar
  const loadingSpinner = document.getElementById("loading-spinner");
  setTimeout(()=>{
    loadingSpinner.classList.add("is-hidden")
  }, 500)

  // Handle highlight navLink based on current section
  const navLinks = document.querySelectorAll("header .nav-links li a");
  const sections = document.querySelectorAll("section");
  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach((section) => {
      // offset so it activates earlier
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (
        pageYOffset >= sectionTop &&
        pageYOffset < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });

  // Handle display and hidden for header on scroll
  let lastScroll = 0;
  const header = document.querySelector("header");
  const backToTopBtn = document.getElementById("back-to-top");
  const homeSection = document.getElementById("about");
  
  window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset;
    if (currentScroll < homeSection.offsetTop) {
      // remove scrolled when reach the top of body
      header.classList.remove("scrolled");
      backToTopBtn.classList.remove("active");
    } else {
      header.classList.add("scrolled");
      backToTopBtn.classList.add("active");

    }
    lastScroll = currentScroll;
  });

  // Handle typewriter
  const typed = document.querySelector(".typed")
  if (typed) {
    let typed_strings = typed.getAttribute('data-items').split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
      showCursor: true
    });
  }

  // variables to handle toggle mobile nav menu
  let navbarLinksWrapper = document.getElementById("nav-links");
  let navbarToggleButton = document.querySelector(".mobile-navbar-toggle");
  let navbarLinks = document.querySelectorAll("#nav-links > ul li:not(.dropdown)");

  const toggleMobileMenu = ()=>{
    navbarToggleButton.firstChild.classList.toggle("fa-bars");
    navbarToggleButton.firstChild.classList.toggle("fa-xl");
    navbarToggleButton.firstChild.classList.toggle("fa-x");
    navbarToggleButton.firstChild.classList.toggle("fa-l");
    navbarLinksWrapper.classList.toggle("mobile-navbar");
  }
  
  // Handle navbar toggle
  navbarToggleButton.addEventListener('click',() => {
    toggleMobileMenu();
  });

  // Handle  click on each link inside mobile nav
  for(let i=0; i<navbarLinks.length;i++){
    navbarLinks[i].addEventListener('click',() => {
      if(navbarLinksWrapper.classList.contains("mobile-navbar")){
        toggleMobileMenu();
      }
    });
  }

  // Handle resizing screen when mobile navbar is open
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) { // Bootstrap md breakpoint
      if(navbarLinksWrapper.classList.contains("mobile-navbar")){
        toggleMobileMenu();
      }    
    }
  });

  // Handle blog card images corsal
  GLightbox({
    selector: '.lightbox'
  });

  // Handle pure counter
  new PureCounter();

};

document.addEventListener("DOMContentLoaded", initApp);
