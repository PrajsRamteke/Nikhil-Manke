/** @format */

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu-list");

menuToggle.addEventListener("click", function () {
  this.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});
