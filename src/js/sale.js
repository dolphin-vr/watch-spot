
// let indexHorizontal = 1;
// showHorizontal(indexHorizontal);
// function currentSlide(n) {
//     showHorizontal(indexHorizontal = n);
// }
// function showHorizontal(n) {
//     let i;
//     let slides = document.getElementsByClassName("slideHorizontal");
//     let dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {indexHorizontal = 1}
//     if (n < 1) {indexHorizontal = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[indexHorizontal-1].style.display = "block";
//     dots[indexHorizontal-1].className += " active";
// }
