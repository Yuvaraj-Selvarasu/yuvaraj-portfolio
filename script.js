"use strict";

//Toggle Function

const elemToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// Header Sticky & Go-Top

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

// Mobile Menu

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {
  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);
});

// Skills Toggling Button

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {
    elemToggleFunc(toggleBtnBox);

    for (let i = 0; i < toggleBtns.length; i++) {
      elemToggleFunc(toggleBtns[i]);
    }
    elemToggleFunc(skillsBox);
  });
}

// Dark & Light Theme Toggle

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {
  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");

    localStorage.setItem("theme", "light-theme");
  } else {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");

    localStorage.setItem("theme", "dark-theme");
  }
});
// Profile Image Toggle based on Theme
    const themeBtn = document.querySelector('[data-theme-btn]');
const picture = document.getElementById('profilePic');
const img = picture.querySelector('img');
const sources = picture.querySelectorAll('source');

// Get theme from localStorage
let isDark = localStorage.getItem('theme') === 'dark';

// Apply theme on page load
applyTheme(isDark);

themeBtn.addEventListener('click', () => {
    // ✅ Proper toggle
    isDark = !isDark;

    // Save theme
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    applyTheme(isDark);
});

function applyTheme(isDark) {
    // Reset body classes
    document.body.classList.remove('dark-theme', 'light-theme');

    // Apply correct theme
    if (isDark) {
        document.body.classList.add('dark-theme');
        themeBtn.classList.remove('active');
    } else {
        document.body.classList.add('light-theme');
        themeBtn.classList.add('active');
    }

    // Select image based on theme
    const baseImage = isDark
        ? 'image/pro-yuva.png'
        : 'image/pro-yuva-lite.png';

    const newImage = `${baseImage}?v=${Date.now()}`; // prevent caching

    // Update <source>
    sources.forEach(source => {
        source.srcset = newImage;
    });

    // Update <img>
    img.src = newImage;
    img.srcset = newImage;
}


// download CV section

const pdfUrl =
  "https://raw.githubusercontent.com/Yuvaraj-Selvarasu/my-cv/main/My_CV.pdf";

function downloadPDF(button) {
  // Add animation class
  button.classList.add("active");

  // Trigger file download
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "Yuvaraj_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Reset animation after 3s
  setTimeout(() => button.classList.remove("active"), 5000);
}

document.querySelectorAll(".navbar-list li").forEach((item) => {
  item.addEventListener("click", () => {
    const navBarSec = document.querySelector(".navbar");
    navBarSec.classList.remove("active");

    // also remove toggle button active state if needed
    const navToggleBtn = document.querySelector(".nav-toggle-btn");
    navToggleBtn.classList.remove("active");
  });
});
