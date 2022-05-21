export const applyCSSVar = (name, value) => {

  const html = document.querySelector('html');

  html.style.setProperty(name, value);

};