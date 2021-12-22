import { createElement } from './DOM/DOM.js';
import './style.scss';

const content = createElement('div', 'content');
document.body.appendChild(content);

/*********************/
/****** Header *******/
/*********************/
const header = createElement('section', 'header');
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
const hero = createElement('section', 'hero');
const heroText = createElement('div', 'hero__text');

const heroTextContent = createElement('h1');
heroTextContent.textContent = 'Here is a promise that we will keep.';

hero.append(heroText);
heroText.append(heroTextContent);
content.append(hero);

/*******************/
/****** Info *******/
/*******************/

const info = createElement('section', 'info');
content.append(info);

const infoText = createElement('div', 'info__text');
info.append(infoText);

const infoTextScheduleHeading = createElement('h3');
infoTextScheduleHeading.textContent = 'Hours of Operation';

const infoTextSchedule = createElement('ul');
const infoTextScheduleContent = [
  'Monday: 8am - 8pm',
  'Tuesday: 8am - 8pm',
  'Wednesday: 8am - 8pm',
  'Thursday: 8am - 8pm',
  'Friday: 8am - 8pm',
  'Saturday: 8am - 8pm',
  'Sunday: Closed',
];

for (let item of infoTextScheduleContent) {
  let li = createElement('li');
  li.textContent = item;
  infoTextSchedule.append(li);
}

infoText.append(infoTextScheduleHeading, infoTextSchedule);

const infoMap = createElement('div', 'info__map');
info.append(infoMap);

/******************/
/****** CTA *******/
/******************/
const orderOnline = createElement('section', 'order-online');
content.append(orderOnline);

const orderOnlineText = createElement('div', 'order-online__text');
orderOnline.append(orderOnlineText);

const orderOnlineTextHeader = createElement('h2');
orderOnlineTextHeader.textContent = "Order online or don't. Whatever";

const orderOnlineTextPara = createElement('p');
orderOnlineTextPara.textContent =
  'Halvah icing wafer jelly donut chupa chups dragée cookie bear claw. Biscuit cake topping cookie oat cake brownie. Gummi bears oat cake lemon dro;ps carrot cake fruitcake. Jelly-o candy canes sugar plum dessert halvah icing dessert oat cake.';

const orderOnlineButton = createElement('a', 'order-online__button');
orderOnlineButton.textContent = 'Order Now';
orderOnlineButton.attributes['href'] = '#';

orderOnlineText.append(
  orderOnlineTextHeader,
  orderOnlineTextPara,
  orderOnlineButton
);
