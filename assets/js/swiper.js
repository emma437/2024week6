var swiper = new Swiper(".mySwiper", {
  spaceBetween: 24,
  slidesPerView: 1,
  slidesPerGroup: 1,
  pagination: {
    el: ".swiper-pagination-custom",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  breakpoints: {
    991: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});

var swiper = new Swiper(".mySwiper1", {
  spaceBetween: 24,
});

var swiper = new Swiper(".mySwiper2", {
  spaceBetween: 12,
});
