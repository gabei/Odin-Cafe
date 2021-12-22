const content = createElement('div', 'content');
document.body.appendChild(content);

const header = createElement('div', 'header');
content.appendChild(header);

const logo = createElement('div', 'header__logo');
logo.textContent = 'Logo\ngoes\nhere.';

const menu = createElement('div', 'header__menu');
const menuList = createElement('ul');
header.appendChild(logo);

/***************************/
/****** DOM Creation *******/
/***************************/
function createElement(type = 'div', ...classes) {
  const newElement = document.createElement(type);
  addClasses(newElement, ...classes);

  return newElement;
}

function addClasses(element, ...classes) {
  if (classes) {
    classes.forEach((newClass) => {
      element.classList.add(newClass);
    });
  }
}
