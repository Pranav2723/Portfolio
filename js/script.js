/* =======================
   DOM ELEMENTS
======================= */
const menuBtn   = document.querySelector(".menu-btn");
const navLinks  = document.querySelector(".nav-links");
const links     = document.querySelectorAll(".nav-links a");
const sections  = document.querySelectorAll("section");
const themeBtn  = document.querySelector(".theme-toggle");
const reveals   = document.querySelectorAll(".reveal");
const typingEl  = document.getElementById("typing-text");

/* =======================
   REVEAL ON SCROLL
======================= */
const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  reveals.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < windowHeight - 100) {
      section.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* =======================
   TYPING EFFECT
======================= */
const typingText =
  "Computer Engineering Student | Java & Web Development Enthusiast";
let typingIndex = 0;

function typeEffect() {
  if (typingIndex < typingText.length) {
    typingEl.textContent += typingText.charAt(typingIndex);
    typingIndex++;
    setTimeout(typeEffect, 50);
  }
}

typeEffect();

/* =======================
   HAMBURGER MENU
======================= */
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navLinks.classList.toggle("show");
});

/* Close menu when link clicked */
links.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuBtn.classList.remove("active");
  });
});

/* Close menu on outside click */
document.addEventListener("click", e => {
  if (!e.target.closest(".nav")) {
    navLinks.classList.remove("show");
    menuBtn.classList.remove("active");
  }
});

/* =======================
   ACTIVE NAV LINK ON SCROLL
======================= */
window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  links.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

/* =======================
   THEME TOGGLE
======================= */
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  themeBtn.textContent = document.body.classList.contains("light")
    ? "☀️"
    : "🌙";
});
