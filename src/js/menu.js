// (() => {
//    const refs = {
//       openMenuBtn: document.querySelector('[data-menu-open]'),
//       closeMenuBtn: document.querySelector('[data-menu-close]'),
//       menu: document.querySelector('[data-menu]'),
//    };

//    refs.openMenuBtn.addEventListener('click', toggleModal);
//    refs.closeMenuBtn.addEventListener('click', toggleModal);

//    function toggleModal() {
//       refs.menu.classList.toggle('is-open');
//    }
// })();

const mobileMenu = document.querySelector('[data-menu]');
  const openMenuBtn = document.querySelector('[data-menu-open]');
  const closeMenuBtn = document.querySelector('[data-menu-close]');
  const toggleMenu = () => {
    const isMenuOpen =
    mobileMenu.classList.toggle('is-open');
    document.body.classList.toggle("no-scroll");
  };
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  // Close the mobile menu on wider screens if the device orientation changes
window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
   if (!e.matches) return;
   mobileMenu.classList.remove('is-open');
   document.body.classList.remove("no-scroll");
})