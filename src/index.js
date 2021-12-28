import { createElement, clear } from './DOM/DOM.js';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Menu from './Menu/Menu';
import './style.scss';

const Content = createElement('div', 'content');
document.body.append(Header, Content, Footer);
Content.append(Home);

// navigation
const links = document.querySelector('.header__menu');

links.addEventListener('click', function (e) {
  let pageName = e.target.textContent;
  e.target.nodeName === 'A' ? changePage(pageName) : null;
});

function changePage(page) {
  clear(Content);

  switch (page) {
    case 'Home':
      Content.append(Home);
      break;
    case 'Menu':
      Content.append(Menu);
      break;
    case 'Contact':
      break;
  }
}
