import { createElement } from '../DOM/DOM';

import Hero from './Hero/Hero.js';
import Info from './Info/Info.js';
import OrderOnline from './OrderOnline/OrderOnline.js';
import ImageMason from './ImageMason/ImageMason.js';

const Home = createElement('div', 'Home');
Home.append(Hero, Info, OrderOnline, ImageMason);

export default Home;
