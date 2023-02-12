const items = document.querySelectorAll('li span');
const logo = document.querySelector('.sidebar img');
const searchBar = document.querySelector('input');
const menu = document.querySelector('.menu');
const perfil = document.querySelector('.profileInfo');
const user = document.querySelector('.user');
const body = document.querySelector('body');
const itemsArray = Array.from(items);

menu.addEventListener('click', () => {
    itemsArray.forEach((item) => item.classList.toggle('hidden'))
    searchBar.classList.toggle('hidden');
    logo.classList.toggle('hidden');
    perfil.classList.toggle('hidden');
    user.classList.toggle('userClosed')
    body.classList.toggle('closed')
})