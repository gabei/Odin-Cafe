import { createElement } from '../DOM/DOM';
import Header from '../Header/Header';
import MenuData from '../assets/menu.json';

const Menu = createElement('div', 'Menu');

/* header navigation and text */
const menuHeader = createElement('section', 'Menu__header');
menuHeader.append(Header);

const menuHeaderText = createElement('h1', 'Menu__header--text');
menuHeaderText.textContent = 'Our Menu';
menuHeader.append(menuHeaderText);

/* main menu */
const ourMenu = createElement('div', 'Menu__ourMenu');

/* menu data */
const espressoMenu = MenuData['menuItems'][0];
const latteMenu = MenuData['menuItems'][1];
const coffeeMenu = MenuData['menuItems'][2];
console.log(espressoMenu);
console.log(latteMenu);
console.log(coffeeMenu);

Menu.append(menuHeader, ourMenu);

export default Menu;
