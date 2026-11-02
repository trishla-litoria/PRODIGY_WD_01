// Task 1 - Interactive Navigation Menu

const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");

document.getElementById("year").textContent = new Date().getFullYear();

function handleScroll() {
    navbar.classList.toggle("scrolled", window.scrollY > 50);

    let currentSection = "home";

    sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 180) {
            currentSection = section.id;
        }
    });

    const reachedBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 5;
    if (reachedBottom) {
        currentSection = "contact";
    }

    navItems.forEach((link) => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + currentSection
        );
    });
}

window.addEventListener("scroll", handleScroll);
handleScroll(); // run once when the page loads

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

navItems.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});
