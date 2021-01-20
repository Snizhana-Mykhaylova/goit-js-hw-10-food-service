import dishes from '../menu.json';
import itemsTemplate from '../templates/menu-items.hbs';

const markup = itemsTemplate(dishes);

const menuRef = document.querySelector('.menu.js-menu');

menuRef.insertAdjacentHTML('beforeend', markup);
