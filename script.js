// =========================
// SCROLL ANIMATION
// =========================

const targets = document.querySelectorAll(
    ".concept-content, .menu-item, .style-card, .staff-card, .access-content"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("fade-up");

                setTimeout(() => {
                    entry.target.classList.add("active");
                }, 100);

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);

targets.forEach((target) => {
    observer.observe(target);
});


// =========================
// MOBILE MENU
// =========================

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("mobile-open");

});


// =========================
// HEADER BACKGROUND
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 25px rgba(0,0,0,0.05)";

    } else {

        header.style.boxShadow = "none";

    }

});