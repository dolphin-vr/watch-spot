(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))m(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&m(u)}).observe(document,{childList:!0,subtree:!0});function s(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function m(r){if(r.ep)return;r.ep=!0;const c=s(r);fetch(r.href,c)}})();new Swiper(".mySwiper",{loop:!0,navigation:{nextEl:".button-next",prevEl:".button-prev"},pagination:{el:".swiper-pagination",type:"fraction",renderFraction:function(t,e){return'0<span class="'+t+'"></span><span class="long-dash"></span>0<span class="'+e+'"></span>'}}});new Swiper(".cartSwiper",{loop:!0,navigation:{nextEl:".next-btn",prevEl:".prev-btn"},grabCursor:!0,keyboard:{enabled:!0,pageUpDown:!0}});const y=document.querySelector("[data-menu]"),k=document.querySelector("[data-menu-open]"),v=document.querySelector("[data-menu-close]"),h=()=>{y.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")};k.addEventListener("click",h);v.addEventListener("click",h);window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(y.classList.remove("is-open"),document.body.classList.remove("no-scroll"))});const f={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),backdrop:document.querySelector("[data-backdrop]")};f.openModalBtn.addEventListener("click",L);f.closeModalBtn.addEventListener("click",L);function L(){f.backdrop.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}const d=document.querySelectorAll("[data-card]"),p=document.querySelectorAll(".cart-btn"),g=document.querySelector(".notice"),b=document.querySelector(".order-slider");let l=[];d.forEach(t=>{t.classList.toggle("not-ordered")});window.addArticle=function(t){switch(t){case"card01":o("art01"),n("art01"),a("card01");break;case"card02":o("art02"),n("art02"),a("card02");break;case"card03":o("art03"),n("art03"),a("card03");break;case"card04":o("art04"),n("art04"),a("card04");break;case"card05":o("art05"),n("art05"),a("card05");break;case"card06":o("art06"),n("art06"),a("card06");break;case"card07":o("art07"),n("art07"),a("card07");break;case"card08":o("art08"),n("art08"),a("card08");break;case"card09":o("art09"),n("art09"),a("card09");break;case"card10":o("art10"),n("art10"),a("card10");break;case"card11":o("art11"),n("art11"),a("card11");break;case"card12":o("art12"),n("art12"),a("card12");break}};function o(t){for(let e=0;e<d.length;e++)d[e].id==t&&d[e].classList.toggle("not-ordered")}function a(t){for(let e=0;e<p.length;e++)p[e].id==t&&p[e].classList.toggle("cart-btn-chk")}function n(t){const e=l.indexOf(t);e>=0?l.splice(e,1):l.push(t),l.length>0?(g.classList.add("not-ordered"),b.classList.remove("not-ordered")):(g.classList.remove("not-ordered"),b.classList.add("not-ordered"))}let i=1;w(i);function w(t){let e,s=document.getElementsByClassName("slideHorizontal");for(document.getElementsByClassName("dot"),t>s.length&&(i=1),t<1&&(i=s.length),e=0;e<s.length;e++)s[e].style.display="none";s[i-1].style.display="block"}