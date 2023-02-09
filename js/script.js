// responsive

const menu = document.querySelector(".menu");
const NavMenu = document.querySelector(".nav-menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("ativo");
  NavMenu.classList.toggle("ativo");
});

//slider

let time = 1000,
  currentImageIndex = 0,
  images = document.querySelectorAll(".slider img");
max = images.length;

function nextImage() {
  images[currentImageIndex].classList.remove("selected");

  currentImageIndex++;

  if (currentImageIndex >= max) {
    currentImageIndex = 0;
  }

  images[currentImageIndex].classList.add("selected");
}

function start() {
  setInterval(() => {
    //change image
    nextImage;
  }, time);
}
window.addEventListener("load", start);
