// const cards = document.querySelectorAll("[data-card]");

// cards.forEach((el) => {el.classList.toggle("not-ordered");});

// $(document).ready(function(){
   
//    function addArticle(clicked_id) {
//       switch (clicked_id) {
//          case "card01":
//             showCart("art01");
//             break;
//          case "card02":
//             showCart("art02");
//                break;
//       };
//    };
// });

// addArticle("");


// function showCart(artId){
//    for (let a = 0; a < cards.length; a++) {
//       if (cards[a].id == artId){
//          cards[a].classList.toggle("not-ordered");
//       };
      
//   };
// }




const cards = document.querySelectorAll("[data-card]");

cards.forEach((el) => {el.classList.toggle("not-ordered");});

// addArticle("");

// window.getNameField = function (fieldId)
// function addArticle(clicked_id) {
window.addArticle = function (clicked_id) {
    switch (clicked_id) {
      case "card01":
         showCart("art01");
         break;
      case "card02":
         showCart("art02");
          break;
      case "card03":
         showCart("art03");
         break;
      case "card04":
         showCart("art04");
         break;
      case "card05":
         showCart("art05");
         break;
      case "card06":
         showCart("art06");
            break;
      case "card07":
         showCart("art07");
         break;
      case "card08":
         showCart("art08");
         break;
      case "card09":
         showCart("art09");
         break;
      case "card10":
         showCart("art10");
            break;
      case "card11":
         showCart("art11");
         break;
      case "card12":
         showCart("art12");
         break;
  };
};

function showCart(artId){
   for (let a = 0; a < cards.length; a++) {
      if (cards[a].id == artId){
         cards[a].classList.toggle("not-ordered");
      };
      
  };
}
