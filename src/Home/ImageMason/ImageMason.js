import { createElement } from '../../DOM/DOM';

import Image1 from '../../assets/images/cafe1.jpg';
import Image2 from '../../assets/images/cafe2.jpg';
import Image3 from '../../assets/images/cafe3.jpg';
import Image4 from '../../assets/images/cafe4.jpg';
import Image5 from '../../assets/images/cafe5.jpg';

/* Please refer to this great codepen for more understanding on this masonry image setup. This is only a slightly modified version of this original: https://codepen.io/iamsaief/pen/jObaoKo */

const ImageMason = createElement('section', 'image-mason');

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image1,
];

for (let src of images) {
  let image = createElement('img');
  image.src = src;

  let div = createElement('div');
  div.append(image);

  ImageMason.append(div);
}

export default ImageMason;
