const el = (css) => document.querySelector(css);
const elid = (id) => document.querySelector(id);
const group = (html) => document.querySelectorAll(html);
const cdiv = (create) => document.createElement(create);

(() => {
  console.log("%cKenny Cruz", "color: orange");
})();