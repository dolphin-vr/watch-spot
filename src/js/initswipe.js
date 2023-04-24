let swiper = new Swiper(".mySwiper", {
   loop: true,
   pagination: {
     el: ".swiper-pagination",
     type: "fraction",
   },
   navigation: {
     nextEl: ".button-next",
     prevEl: ".button-prev",
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
  },
});