const itemsArray = Array.from(document.querySelectorAll('li span'));
const logo = document.querySelector('.sidebar img');
const searchBar = document.querySelector('input');
const menu = document.querySelector('.menu');
const perfil = document.querySelector('.profileInfo');
const body = document.querySelector('body');

menu.addEventListener('click', () => {
    itemsArray.forEach((item) => item.classList.toggle('hidden'))
    searchBar.classList.toggle('hidden');
    logo.classList.toggle('hidden');
    perfil.classList.toggle('hidden');
    body.classList.toggle('closed')
})