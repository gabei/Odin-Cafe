import { createElement } from './DOM/DOM.js';

import Home from './Home/Home';
import './style.scss';

const Content = createElement('div', 'content');
document.body.append(Content);

Content.append(Home);
