import { createElement } from '../DOM/DOM';
import Header from '../Header/Header';

const Menu = createElement('div', 'Menu');

const menuHeader = createElement('section', 'Menu__header');
menuHeader.append(Header);

const menuHeaderText = createElement('h1', 'Menu__header--text');
menuHeaderText.textContent = 'Our Menu';
menuHeader.append(menuHeaderText);

Menu.append(menuHeader);

export default Menu;
