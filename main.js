const buttonOpen = document.querySelector('.button-open');
const buttonClose = document.querySelector('.button-close')
const menuMobile = document.querySelector('.menu-mobile');

buttonOpen.addEventListener('click', () => {
  menuMobile.classList.toggle('is-open');
  buttonOpen.style.display = 'none';
  buttonClose.style.display = 'flex';
})

buttonClose.addEventListener('click', () => {
  menuMobile.classList.toggle('is-open');
  buttonOpen.style.display = 'flex';
  buttonClose.style.display = 'none';
})