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
