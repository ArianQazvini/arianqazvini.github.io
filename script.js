
function toggleNavbar() {
    const navbar = document.getElementById("navbar");
    const menuIcon = document.getElementById("menuIcon");

    navbar.classList.toggle("navbar-visible");


}

function hideNavbar() {
    const navbar = document.getElementById("navbar");
    navbar.classList.remove("navbar-visible");
}
document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll('.navbar ul li a');
    menuLinks.forEach(link => {
        link.addEventListener('click', hideNavbar);
    });
});
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
window.onscroll = function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};