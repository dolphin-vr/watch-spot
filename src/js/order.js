const cards = document.querySelectorAll("[data-card]");
const buttons = document.querySelectorAll(".cart-btn");
const notice = document.querySelector(".notice");
let orderList = [];

// for (const btn of buttons) {
//    console.log(btn.id);
// };

cards.forEach((el) => {el.classList.toggle("not-ordered");});

window.addArticle = function (clicked_id) {
    switch (clicked_id) {
      case "card01":
         showCart("art01");
         toggleArticle("art01");
         chekedBtn("card01");
         break;
      case "card02":
         showCart("art02");
         toggleArticle("art02");
         chekedBtn("card02");
          break;
      case "card03":
         showCart("art03");
         toggleArticle("art03");
         chekedBtn("card03");
         break;
      case "card04":
         showCart("art04");
         toggleArticle("art04");
         chekedBtn("card04");
         break;
      case "card05":
         showCart("art05");
         toggleArticle("art05");
         chekedBtn("card05");
         break;
      case "card06":
         showCart("art06");
         toggleArticle("art06");
         chekedBtn("card06");
            break;
      case "card07":
         showCart("art07");
         toggleArticle("art07");
         chekedBtn("card07");
         break;
      case "card08":
         showCart("art08");
         toggleArticle("art08");
         chekedBtn("card08");
         break;
      case "card09":
         showCart("art09");
         toggleArticle("art09");
         chekedBtn("card09");
         break;
      case "card10":
         showCart("art10");
         toggleArticle("art10");
         chekedBtn("card10");
            break;
      case "card11":
         showCart("art11");
         toggleArticle("art11");
         chekedBtn("card11");
         break;
      case "card12":
         showCart("art12");
         toggleArticle("art12");
         chekedBtn("card12");
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

function chekedBtn(btnId){
   for (let b = 0; b < buttons.length; b++) {
      if (buttons[b].id == btnId){
         buttons[b].classList.toggle("cart-btn-chk");
      };      
  };
}

function toggleArticle(artId){
   const t = orderList.indexOf(artId);
   if (t >=0) {
      orderList.splice(t, 1);
   }
   else{
      orderList.push(artId);
   };
   if (orderList.length > 0){
      notice.classList.add("not-ordered");
   }
   else{
      notice.classList.remove("not-ordered");
   };
}