/*
import $ from "../leaf/leaf.js";
$.modes = {
  frontend: () => {
    $.html = Document.querySelector(
      "html",
    );
    Document.write($.html.childNodes.length);
  }
};
*/
window.onload = function() {
  let body = document.body;
  let newElement = document.createElement('h1');
  newElement.textContent = 'Hello, world!';
  body.appendChild(newElement);
}