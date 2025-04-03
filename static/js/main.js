document.addEventListener("DOMContentLoaded", () => {
    // Determine the base path dynamically
    const isJapanese = window.location.pathname.includes("/japanese/");
    const basePath = isJapanese
        ? "../../"
        : window.location.pathname.includes("/menu/") || window.location.pathname.includes("/about/")
        ? "../"
        : "";

    // Load navigation
    fetch(`${basePath}${isJapanese ? "nav_japanese.html" : "nav.html"}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav-placeholder").innerHTML = data;

            // Reinitialize event listeners for dynamically loaded content
            const hamburger = document.querySelector(".hamburger");
            const navLinks = document.querySelector(".nav-links");

            if (hamburger && navLinks) {
                hamburger.addEventListener("click", () => {
                    navLinks.classList.toggle("active");
                });
            }
        });

    // Load footer
    fetch(`${basePath}footer.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        });
});
