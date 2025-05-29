var typed = new Typed(".multiple-text", {
    strings: ["Software Engineer", "Web Developer"],
    typeSpeed: 80,
    backSpeed: 25,
    backDelay: 1000,
    loop: true
})

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');
    
    menuBtn.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && !menuBtn.contains(e.target)) {
            navbar.classList.remove('active');
        }
    });

    // Close menu when clicking a link
    navbar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });
});