import { createElement } from '../DOM/DOM';
import OdinBrewLogo from '../assets/images/OdinBrewLogo.png';

const Header = createElement('section', 'header');

/* logo */
const logo = createElement('div', 'header__logo');
Header.append(logo);

const logoImage = createElement('img');
logoImage.src = OdinBrewLogo;
logo.append(logoImage);

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

Header.appendChild(menu);

export default Header;
