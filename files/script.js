const theBurger = document.getElementsByClassName("burger")[0];
const navLinks = document.getElementsByClassName("nav-links")[0];
const navbar = document.getElementsByClassName("nav")[0];

theBurger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  navbar.classList.toggle("active");
});



