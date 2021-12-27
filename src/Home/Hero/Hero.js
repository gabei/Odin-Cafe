import { createElement } from '../../DOM/DOM';
import Header from '../../Header/Header';

const Hero = createElement('section', 'hero');
const heroText = createElement('div', 'hero__text');

const heroTextContent = createElement('h1');
heroTextContent.textContent = 'Here is a promise that we will keep.';

Hero.append(heroText);
heroText.append(heroTextContent);

Hero.append(Header);

export default Hero;
