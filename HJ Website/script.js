const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".main-nav a");
const forceSolidHeader = header.classList.contains("is-scrolled") && !document.querySelector(".hero");

function syncHeader() {
  header.classList.toggle("is-scrolled", forceSolidHeader || window.scrollY > 20);
}

toggle.addEventListener("click", () => {
  const open = header.classList.toggle("nav-open");
  toggle.setAttribute("aria-expanded", String(open));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();
