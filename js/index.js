// Adaptive menu
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav__list');
const navLinks = document.querySelectorAll('.nav__link');

function toggleMenu () {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
}

function closeMenu() {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
}

hamburger.addEventListener('click', toggleMenu);
navLinks.forEach((link) => link.addEventListener('click', closeMenu));