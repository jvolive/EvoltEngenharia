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
