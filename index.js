const menu = document.querySelector('.bar2');
const displayMenu = document.querySelector('.menu-icon');
const header = document.querySelector('.header');
const listItems = document.querySelector('.nav-list');
const clear = document.querySelector('.clear');

function displayMyMenu() {
  header.classList.add('header-menu');
  header.classList.remove('header');

  menu.classList.add('my-menu');
  menu.classList.remove('bar2');

  listItems.classList.add('my-menu-list');
  listItems.classList.remove('nav-list');

  clear.style.display = 'unset';
}

displayMenu.addEventListener('click', displayMyMenu);

function exit() {
  header.classList.remove('header-menu');
  header.classList.add('header');

  menu.classList.remove('my-menu');
  menu.classList.add('bar2');

  listItems.classList.remove('my-menu-list');
  listItems.classList.add('nav-list');

  clear.style.display = 'none';
}

clear.addEventListener('click', exit);
