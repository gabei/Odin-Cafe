import { createElement } from '../../DOM/DOM';

const Hero = createElement('section', 'hero');
const heroText = createElement('div', 'hero__text');

const heroTextContent = createElement('h1');
heroTextContent.textContent = 'Here is a promise that we will keep.';

const heroTextButton = createElement('a', 'hero__text-button');
heroTextButton.textContent = 'View our menu';

heroText.append(heroTextContent, heroTextButton);
Hero.append(heroText);

export default Hero;
