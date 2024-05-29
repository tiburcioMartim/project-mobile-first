const menuHamburguer = document.querySelector('.menu-toggle');
const asidContainer = document.querySelector('.aside-container');
const btnSpanClose = document.querySelector('.btn-span-close');

menuHamburguer.addEventListener('click', () => {
    asidContainer.classList.toggle('open');
});

btnSpanClose.addEventListener('click', () => {
    asidContainer.classList.toggle('open');
});