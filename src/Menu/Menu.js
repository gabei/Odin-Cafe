import { createElement } from '../DOM/DOM';
import MenuData from '../assets/menu.json';

const Menu = createElement('div', 'Menu');

/* header text */
const menuHeader = createElement('section', 'Menu__header');

const menuHeaderText = createElement('h1', 'Menu__header--text');
menuHeaderText.textContent = 'Our Menu';

menuHeader.append(menuHeaderText);

/* main menu */
const ourMenu = createElement('div', 'Menu__our-menu');

/* menu data */
for (let section in MenuData) {
  let newSection = createElement('div', 'Menu__our-menu__section');
  ourMenu.append(newSection);

  let sectionTitle = createElement('h2', 'Menu__our-menu__section-title');
  sectionTitle.textContent = section;

  newSection.append(sectionTitle);

  MenuData[section].forEach((item) => {
    let itemName = createElement('h4', 'Menu__our-menu__section-item');
    let itemInfo = createElement('p', 'Menu__our-menu__section-item--info');
    itemName.textContent = Object.keys(item);
    itemInfo.textContent = Object.values(item);

    newSection.append(itemName, itemInfo);
  });
}

Menu.append(menuHeader, ourMenu);

export default Menu;
