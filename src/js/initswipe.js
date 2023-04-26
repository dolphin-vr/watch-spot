let swiper = new Swiper(".mySwiper", {
   loop: true,
   navigation: {
     nextEl: ".button-next",
     prevEl: ".button-prev",
   },
   pagination: {
     el: '.swiper-pagination',
     type: 'fraction',
     renderFraction: function (currentSlide, totalSlide) {
      return '0<span class="' + currentSlide + '"></span><span class="long-dash"></span>0<span class="' + totalSlide + '"></span>'
     }
   },
 });

 let swipercart = new Swiper(".cartSwiper", {
  loop: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   type: "fraction",
  // },
  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
    // nextEl: ".swiper-button-next",
    // prevEl: ".swiper-button-prev",
  },
  grabCursor: true,
  keyboard: {
    enabled: true,
    pageUpDown: true,
  }
});