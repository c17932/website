import $ from "../leaf/leaf.js";
$.modes = {
  frontend: () => {
    $.html = Document.querySelector(
      "html",
    );
    Document.write($.html.childNodes.length);
  }
};
