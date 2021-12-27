import { createElement } from './DOM/DOM.js';

import Home from './Home/Home';
import Menu from './Menu/Menu';
import './style.scss';

const Content = createElement('div', 'content');
document.body.append(Content);

Content.append(Menu);
