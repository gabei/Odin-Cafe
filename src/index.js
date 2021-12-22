import { createElement } from './DOM/DOM.js';
import './style.scss';

const content = createElement('div', 'content');
document.body.appendChild(content);

/*********************/
/****** Header *******/
/*********************/
const header = createElement('div', 'header');
content.appendChild(header);

/* logo */
const logo = createElement('div', 'header__logo');
logo.textContent = 'Logo\ngoes\nhere.';
header.appendChild(logo);

/* menu */
const menu = createElement('div', 'header__menu');
const menuList = createElement('ul');
menu.appendChild(menuList);

const menuItems = [
  '<a href="#">Home</a>',
  '<a href="#">Menu</a>',
  '<a href="#">Contact</a>',
];

for (let item of menuItems) {
  let newItem = createElement('li');
  newItem.innerHTML = item;
  menuList.appendChild(newItem);
}

header.appendChild(menu);

/*******************/
/****** Hero *******/
/*******************/
