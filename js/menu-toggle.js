const menuHamburguer = document.querySelector('.menu-toggle');
const asidContainer = document.querySelector('.aside-container');

menuHamburguer.addEventListener('click', () => {
    asidContainer.classList.toggle('open');
});