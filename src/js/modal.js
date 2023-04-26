const refs = {
   openModalBtn: document.querySelector("[data-modal-open]"),
   closeModalBtn: document.querySelector("[data-modal-close]"),
   backdrop: document.querySelector("[data-backdrop]"),
 };

 refs.openModalBtn.addEventListener("click", toggleModal);
 refs.closeModalBtn.addEventListener("click", toggleModal);

 function toggleModal() {
   refs.backdrop.classList.toggle("is-hidden");
   document.body.classList.toggle("no-scroll");
 }

//  var inputName = document.getElementById('name');
//  inputName.oninvalid = function(event) {
// 	event.target.setCustomValidity('Username should only contain letters. e.g. John Smith');
// }