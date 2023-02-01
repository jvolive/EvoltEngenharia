// responsivo
const menu = document.querySelector(".menu");
const NavMenu = document.querySelector(".nav-menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("ativo");
  NavMenu.classList.toggle("ativo");
});

// slide images

("use stict");

const images = [
  { id: "1", url: "./img/home-background.jpg" },
  { id: "2", url: "./img/logo 2.png" },
  { id: "3", url: "./img/logo 3.png" },
  { id: "4", url: "./img/logo.png" },
];

const container = document.querySelector("#container-items");

const loadImages = (images, container) => {
  images.forEach((image) => {
    container.innerHTML += `
        <div class='item'>
            <img src='${image.url}'
        </div>  
        `;
  });
};

//loadImages( images, container );
