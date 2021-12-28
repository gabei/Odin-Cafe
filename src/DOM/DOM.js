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

function clear(element) {
  element.textContent = '';
}

export { createElement, addClasses, clear };
