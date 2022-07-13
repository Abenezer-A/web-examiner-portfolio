const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#btn-menu");
const closeBtn = document.querySelector("#btn-close");
const themeThoggler = document.querySelector(".theme-toggler");
const asideOverview = document.querySelector(".aside-overview");

const toggleMenu = () => {
  document.body.classList.toggle("show-menu");
  document.body.classList.toggle("fixed-scroll");
};
menuBtn.addEventListener("click", () => {
  toggleMenu();
});

closeBtn.addEventListener("click", () => {
  toggleMenu();
});
asideOverview.addEventListener("click", () => {
  toggleMenu();
});

themeThoggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeThoggler.querySelector("span:nth-child(1)").classList.toggle("actived");
  themeThoggler.querySelector("span:nth-child(2)").classList.toggle("actived");
});
