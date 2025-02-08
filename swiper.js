document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.carousel', {
      loop: true,
      navigation: {
          nextEl: '.carousel-button.next',
          prevEl: '.carousel-button.prev',
      },
  });
});