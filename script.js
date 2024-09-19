// Function to toggle the visibility of the navbar
function toggleNavbar() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("navbar-visible");
}

// Function to hide the navbar when a link is clicked
function hideNavbar() {
    const navbar = document.getElementById("navbar");
    navbar.classList.remove("navbar-visible"); // Remove the class to hide the navbar
}

// Add click event listener to each menu item link to hide the navbar
document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll('.navbar ul li a');
    menuLinks.forEach(link => {
        link.addEventListener('click', hideNavbar);
    });
});

// Function to scroll to the top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling effect
    });
}

// Function to toggle the visibility of the scroll-to-top button
window.onscroll = function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block"; // Show button when scrolled down 300px
    } else {
        scrollToTopBtn.style.display = "none"; // Hide button when at the top
    }
};