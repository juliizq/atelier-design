const buttonOpen = document.querySelector('.menu');
const menuMobile = document.querySelector('.menu-mobile');

buttonOpen.addEventListener('click', () => {
  menuMobile.classList.toggle('is-open');
})