const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const revealTargets = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.05, rootMargin: "0px 0px 60px 0px" }
);

revealTargets.forEach((target) => observer.observe(target));

const navLinks = document.querySelectorAll(".nav a");
const sections = [...navLinks].map((link) => document.querySelector(link.getAttribute("href")));
const backToTop = document.querySelector(".back-to-top");

const onScroll = () => {
  const y = window.scrollY + 140;
  let current = null;
  sections.forEach((section, i) => {
    if (section && section.offsetTop <= y) current = i;
  });
  navLinks.forEach((link, i) => link.classList.toggle("active", i === current));
  if (backToTop) backToTop.classList.toggle("is-visible", window.scrollY > 600);
};

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
