(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))p(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&p(l)}).observe(document,{childList:!0,subtree:!0});function m(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function p(r){if(r.ep)return;r.ep=!0;const c=m(r);fetch(r.href,c)}})();new Swiper(".mySwiper",{loop:!0,navigation:{nextEl:".button-next",prevEl:".button-prev"},pagination:{el:".swiper-pagination",type:"fraction",renderFraction:function(t,e){return'0<span class="'+t+'"></span><span class="long-dash"></span>0<span class="'+e+'"></span>'}}});new Swiper(".cartSwiper",{loop:!0,navigation:{nextEl:".next-btn",prevEl:".prev-btn"},grabCursor:!0,keyboard:{enabled:!0,pageUpDown:!0}});(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};t.openMenuBtn.addEventListener("click",e),t.closeMenuBtn.addEventListener("click",e);function e(){t.menu.classList.toggle("is-open")}})();const u={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),backdrop:document.querySelector("[data-backdrop]")};u.openModalBtn.addEventListener("click",g);u.closeModalBtn.addEventListener("click",g);function g(){u.backdrop.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}const d=document.querySelectorAll("[data-card]"),i=document.querySelectorAll(".cart-btn"),f=document.querySelector(".notice");let s=[];d.forEach(t=>{t.classList.toggle("not-ordered")});window.addArticle=function(t){switch(t){case"card01":a("art01"),n("art01"),o("card01");break;case"card02":a("art02"),n("art02"),o("card02");break;case"card03":a("art03"),n("art03"),o("card03");break;case"card04":a("art04"),n("art04"),o("card04");break;case"card05":a("art05"),n("art05"),o("card05");break;case"card06":a("art06"),n("art06"),o("card06");break;case"card07":a("art07"),n("art07"),o("card07");break;case"card08":a("art08"),n("art08"),o("card08");break;case"card09":a("art09"),n("art09"),o("card09");break;case"card10":a("art10"),n("art10"),o("card10");break;case"card11":a("art11"),n("art11"),o("card11");break;case"card12":a("art12"),n("art12"),o("card12");break}};function a(t){for(let e=0;e<d.length;e++)d[e].id==t&&d[e].classList.toggle("not-ordered")}function o(t){for(let e=0;e<i.length;e++)i[e].id==t&&i[e].classList.toggle("cart-btn-chk")}function n(t){const e=s.indexOf(t);e>=0?s.splice(e,1):s.push(t),s.length>0?f.classList.add("not-ordered"):f.classList.remove("not-ordered")}
