const itemsArray = document.querySelectorAll('li span');
const logo = document.querySelector('.sidebar img');
const searchBar = document.querySelector('input');
const menu = document.querySelector('.menu');
const perfil = document.querySelector('.profileInfo');

menu.addEventListener('click', () => {
    itemsArray.forEach((item) => item.classList.toggle('hidden'))
    searchBar.classList.toggle('hidden');
    logo.classList.toggle('hidden');
    perfil.classList.toggle('hidden');
    document.body.classList.toggle('closed')
})