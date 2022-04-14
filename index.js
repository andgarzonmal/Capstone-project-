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

const soloists = document.querySelector('.soloists-cards');

const invitedSoloists = [
  {
    id: 'card6',
    soloist: 'Hilary Hahn',
    photo: './images/hilary.jpg',
    description: ' She has performed throughout the world as a soloist with leading orchestras and conductors and as a recitalist. ',
    instrument: 'Violin',
  },

  {
    id: 'card5',
    soloist: 'Yuja Wang',
    photo: './images/yuha.jpg',
    description: 'is a Chinese classical pianist. She was born in Beijing, began studying piano there at age six, and went on to study at the Central Conservatory of Music in Beijing.',
    instrument: 'Piano',
  },

  {
    cardid: 'card4',
    soloist: 'Pacho flores',
    photo: './images/pacho4.jpg',
    description: 'Pacho Flores was awarded First Prize in the “Maurice André” International Contest, the most renowned trumpet Contest in the world.',
    instrument: 'Trumpet',
  },

  {
    cardid: 'card3',
    soloist: 'Mischa Maisky',
    photo: './images/MischaMaisky-2.jpg',
    description: 'He was taught by Mstislav Rostropovich at the Moscow Conservatory from 1966 to 1970. In 1966, he won sixth prize at the in the most famous Cello contest.',
    instrument: 'Cello',
  },

  {
    cardid: 'card2',
    soloist: 'Manuel Barrueco',
    photo: 'https://www.80grados.net/wp-content/uploads/2019/10/barruecos.jpg',
    description: 'Manuel Barrueco is a Cuban classical guitarist. During three decades of concert performances he has performed and recorded across the United States ',
    instrument: 'Guitar',
  },

  {
    cardid: 'card1',
    soloist: 'itzhak perlman',
    photo: './images/itzhak.jpg',
    description: 'Is an Israeli-American violinist, conductor, and music teacher. Perlman has performed worldwide, and throughout the United States',
    instrument: 'Violin',
  },
];

const Card = ({
  soloist, photo, description, id, instrument,
}) => `
  <div id="${id}" class="cards"> 
    <div> 
      <img class="cards-img" src="${photo}" alt="hillary">
    </div>
    <div class="cards-text">
      <h3>${soloist}</h3>
      <p class="instruments">${instrument}</p>
      <p class="description">........<br/>${description}</p>
    </div>
  </div>`;

invitedSoloists.forEach((object) => {
  soloists.insertAdjacentHTML('afterbegin', Card(object));
});
