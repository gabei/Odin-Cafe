import { createElement } from './DOM/DOM.js';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Menu from './Menu/Menu';
import './style.scss';

const Content = createElement('div', 'content');
document.body.append(Header, Content);

Content.append(Home);

Content.append(Footer);

// navigation
const links = document.querySelector('.header__menu');
links.addEventListener('click', function (e) {
  if (e.target.nodeName === 'A') {
    changePage(e.target.textContent);
  }
});

function changePage(page) {
  switch (page) {
    case 'Home':
      Content.textContent = '';
      Content.append(Home);
      break;
    case 'Menu':
      Content.textContent = '';
      Content.append(Menu);
      break;
    case 'Contact':
      break;
  }
}

console.log(links);
