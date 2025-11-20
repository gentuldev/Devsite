// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const body = document.body;

if (navToggle) {
  navToggle.addEventListener("click", () => {
    body.classList.toggle("nav-open");
  });
}

// Simple fade-in on scroll for project cards
const fadeEls = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

fadeEls.forEach((el) => observer.observe(el));

// Dynamic year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
