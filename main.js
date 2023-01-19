const buttonOpen = document.querySelector(".button-open");
const buttonClose = document.querySelector(".button-close");
const menuMobile = document.querySelector(".menu-mobile");

buttonOpen.addEventListener("click", () => {
  menuMobile.classList.toggle("is-open");
  buttonOpen.style.display = "none";
  buttonClose.style.display = "flex";
});

buttonClose.addEventListener("click", () => {
  menuMobile.classList.toggle("is-open");
  buttonOpen.style.display = "flex";
  buttonClose.style.display = "none";
});


const left = {
  origin: "left",
};
const right = {
  origin: "right",
};
const reveal = {
  duration: 300,
  scale: 1,
  distance: "30px",
  easing: "ease-out",
  interval: 300,
};

const revealAdvantages = {
  duration: 200,
  distance: "20px",
  easing: "ease-out",
};

ScrollReveal().reveal("body", {
  duration: 500,
});

//Hero

ScrollReveal().reveal(
  ".container-image-hero-laptop,.container-image-hero-mobile,.hero-title,.hero-description,.hero-cta,.scroll-down",
  reveal
);

ScrollReveal().reveal(
  ".container-image-hero-laptop,.container-image-hero-mobile",
  right
);

ScrollReveal().reveal(
  ".hero-title,.hero-description,.hero-cta.scroll-down",
  left
);

//About

ScrollReveal().reveal(
  ".container-about-image-mobile,.container-about-image-laptop.content-about,.about-description,.about-cta",
  reveal
);

ScrollReveal().reveal(".content-about,.about-description,.about-cta", right);

//Advantages

ScrollReveal().reveal(
  ".content-title,.slider,.number-slider,.advantages-cta,.illustration-laptop,.illustration-mobile",
  reveal
);

ScrollReveal().reveal(".illustration-laptop,.illustration-mobile", right);

ScrollReveal().reveal(
  ".content-title,.slider,.number-slider,.advantages-cta",
  left
);