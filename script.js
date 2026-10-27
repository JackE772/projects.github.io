// Small interactions for the portfolio homepage.
const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Keep the footer year current.
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

// Starter project links point to Contact until you add individual project pages.
// Replace each link's href with your project page or repository URL when ready.
document.querySelectorAll("[data-project]").forEach((link) => {
  link.addEventListener("click", () => {
    // Intentionally no popup: the link simply takes visitors to the contact section.
    // Update the anchor in index.html when you have a real project destination.
  });
});
