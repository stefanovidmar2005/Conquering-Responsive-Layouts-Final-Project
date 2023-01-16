const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".header__navigation");
const navAnimation = document.querySelector(".animate");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("hidden");
  navAnimation.classList.toggle("animate-slide");
});
