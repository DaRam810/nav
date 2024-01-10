/*** Hamburger ***/
const navEl = document.querySelector(".nav");
const hamburgerEl = document.querySelector(".hamburger");

hamburgerEl.onclick = function () {
	navEl.classList.toggle("nav--open");
	hamburgerEl.classList.toggle("hamburger--open");
};

/*
navEl.addEventListener("click", () => {
	navEl.classList.remove("nav--open");
	hamburgerEl.classList.remove("hamburger--open");
});*/

document.onclick = function (e) {
	if (!navEl.contains(e.target) && !hamburgerEl.contains(e.target)) {
		navEl.classList.remove("nav--open");
		hamburgerEl.classList.remove("hamburger--open");
	}
};

