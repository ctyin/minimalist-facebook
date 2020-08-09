function addStyles(css) {
  var head = document.querySelector("head");
  var style = document.createElement("style");
  style.textContent = `${css}`;
  head.appendChild(style);
}

addStyles(`
        div[data-pagelet="page"] > div > div > div[role="navigation"] {
            display: none;
        }
        div[role="complementary"] {
            display:none;
        }
    `);
