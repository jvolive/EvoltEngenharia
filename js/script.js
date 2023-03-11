// responsive

const menu = document.querySelector(".menu");
const NavMenu = document.querySelector(".nav-menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("ativo");
  NavMenu.classList.toggle("ativo");
});

//whats fomulario
const form = document.querySelector("#meu-formulario");
form.addEventListener("submit", () => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const message = `Nova mensagem de contato:\n\nNome: ${formData.get(
    "nome"
  )}\nE-mail: ${formData.get("email")}\nMensagem: ${formData.get("mensagem")}`;
  const phoneNumber = "5542999131418"; // substitua pelo número de telefone para o qual deseja enviar a mensagem
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(url);
});

//slider
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 5000, // tempo em milissegundos entre cada slide
    disableOnInteraction: false, // não desativar o autoplay quando o usuário interagir com o Swiper
  },
  autoHeight: true,
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: {
    enabled: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});
