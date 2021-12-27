import { createElement } from '../../DOM/DOM';

const OrderOnline = createElement('section', 'order-online');

const orderOnlineText = createElement('div', 'order-online__text');
OrderOnline.append(orderOnlineText);

const orderOnlineTextHeader = createElement('h2');
orderOnlineTextHeader.textContent = "Order online - or don't. Whatever";

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

export default OrderOnline;
