const initApp = () => {
  /* ============= Handle highlight navLink based on current section [Extra Task] ===============*/
  const navLinks = document.querySelectorAll("header .nav-links li a");
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach((section) => {
      // offset so it activates earlier
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.clientHeight;
      if (
        pageYOffset >= sectionTop &&
        pageYOffset < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach((link) => {
      link.parentElement.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.parentElement.classList.add("active");
      }
    });
  });

  /* =========== dark-theme light-theme toggle with local storage support [Extra Task] ==========*/
  const themeToggleCheckBox = document.getElementById("theme-toggle");

  // Apply the previously saved theme (if available)
  if (
    localStorage.getItem("theme") === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    themeToggleCheckBox.checked = true
  } else {
    themeToggleCheckBox.checked = false
  }

  // Listen for toggle changes
  themeToggleCheckBox.addEventListener("change", () => {
    if (themeToggleCheckBox.checked) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

};

document.addEventListener("DOMContentLoaded", initApp);
