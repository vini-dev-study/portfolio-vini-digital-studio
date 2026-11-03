document.addEventListener("DOMContentLoaded", function () {
    
    // FOOTER YEAR
    const currentYear = document.querySelector("#current-year");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // MOBILE MENU
    const menuToggle = document.querySelector("#menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");

            const isOpen = navMenu.classList.contains("active");

            menuToggle.setAttribute("aria-expanded", isOpen);

            menuToggle.textContent = isOpen ? "X" : "☰";
        });

        // CLOSE MENU AFTER CLICKING A LINK
        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                navMenu.classList.remove("active");
                menuToggle.textContent = "☰";

                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }
    console.log("Vini Digital Studio is running!")
});