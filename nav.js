/*** Hamburger ***/
const navEl = document.querySelector(".nav");
const hamburgerEl = document.querySelector(".hamburger");

hamburgerEl.onclick = function () {
	navEl.classList.toggle("nav--open");
	hamburgerEl.classList.toggle("hamburger--open");
};

navEl.addEventListener("click", () => {
	navEl.classList.remove("nav--open");
	hamburgerEl.classList.remove("hamburger--open");
});

document.onclick = function (e) {
	if (!navEl.contains(e.target) && !hamburgerEl.contains(e.target)) {
		navEl.classList.remove("nav--open");
		hamburgerEl.classList.remove("hamburger--open");
	}
};

function hasTouch() {
  return 'ontouchstart' in document.documentElement
         || navigator.maxTouchPoints > 0
         || navigator.msMaxTouchPoints > 0;
}

if (hasTouch()) { // remove all the :hover stylesheets
  try { // prevent exception on browsers not supporting DOM styleSheets properly
    for (var si in document.styleSheets) {
      var styleSheet = document.styleSheets[si];
      if (!styleSheet.rules) continue;

      for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
        if (!styleSheet.rules[ri].selectorText) continue;

        if (styleSheet.rules[ri].selectorText.match(':hover')) {
          styleSheet.deleteRule(ri);
        }
      }
    }
  } catch (ex) {}
}
