import { createElement } from '../DOM/DOM';
import Header from '../Header/Header';
import MenuData from '../assets/menu.json';
import Footer from '../Footer/Footer';

const Menu = createElement('div', 'Menu');

/* header navigation and text */
const menuHeader = createElement('section', 'Menu__header');
menuHeader.append(Header);

const menuHeaderText = createElement('h1', 'Menu__header--text');
menuHeaderText.textContent = 'Our Menu';
menuHeader.append(menuHeaderText);

/* main menu */
const ourMenu = createElement('div', 'Menu__our-menu');

/* menu data */
const espressoMenu = MenuData['Espresso'];
const latteMenu = MenuData[1];
const coffeeMenu = MenuData[2];

// espressoMenu.forEach((item) => {
//   let titles = Object.keys(item);
//   let script = Object.values(item);
//   let text = titles + '\n' + script;
//   console.log(text);
// });

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

Menu.append(menuHeader, ourMenu, Footer);

export default Menu;
