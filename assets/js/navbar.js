function setActiveMenu() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    const links = document.querySelectorAll("#navbar a");

    links.forEach(link => {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

function initMobileMenu() {
    const toggle = document.querySelector('.mobile-nav-toggle');
    const navbar = document.querySelector('#navbar');

    if (toggle && navbar) {
        toggle.addEventListener('click', function () {
            navbar.classList.toggle('navbar-mobile');
            this.classList.toggle('bi-list');
            this.classList.toggle('bi-x');
        });
    }
}