const collapsibles = document.querySelector(".nav--menu");

const expand = document.querySelector(".nav--links");

collapsibles.addEventListener("click", myfunc);

function myfunc() {
  expand.classList.toggle("nav--links2");
}

const chev1 = document.querySelector(".chevron1");
const chev2 = document.querySelector(".chevron2");
const chev3 = document.querySelector(".chevron3");
const chev4 = document.querySelector(".chevron4");

const chev_expand1 = document.querySelector(".footer__oneitems");
const chev_expand2 = document.querySelector(".footer__twoitems");
const chev_expand3 = document.querySelector(".footer__threeitems");
const chev_expand4 = document.querySelector(".footer__fouritems");

chev1.addEventListener("click", function () {
  chev_expand1.classList.toggle("hide");
});

chev2.addEventListener("click", function () {
  chev_expand2.classList.toggle("hide");
});

chev3.addEventListener("click", function () {
  chev_expand3.classList.toggle("hide");
});

chev4.addEventListener("click", function () {
  chev_expand4.classList.toggle("hide");
});
