import { createElement } from '../DOM/DOM';

const Footer = createElement('section', 'footer');

const footerLeft = createElement('div', 'footer__left');
const footerRight = createElement('div', 'footer__right');

footerLeft.textContent = 'Odin Brew | Austin, TX';
footerRight.textContent = "Order online - or don't. Whatever.";

Footer.append(footerLeft, footerRight);

export default Footer;
