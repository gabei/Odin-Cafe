const content = createElement('div', 'content');
document.body.appendChild(content);

const header = createElement('div', ['header']);
content.appendChild(header);

/* DOM Creation */

function createElement(type = 'div', [...classes]) {
  const newElement = document.createElement(type);
  addClasses(newElement, classes);

  return newElement;
}

function addClasses(element, [...classes]) {
  classes.forEach((newClass) => {
    element.classList.add(newClass);
  });
}
