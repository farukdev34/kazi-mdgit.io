document.addEventListener("DOMContentLoaded", () => {
    // Dynamic Footer Year
    document.getElementById("year").textContent = new Date().getFullYear();

    // Mobile Menu Toggle
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (navToggle) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }

    // Close menu on link click
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });

    // Form Submission Handling
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thank you, Faruk Ajom will get back to you shortly.");
            form.reset();
        });
    }
});