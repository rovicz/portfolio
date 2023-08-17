import initCopyButton from "./modules/copyButton.js";
import initDropMenu from "./modules/dropDownMenu.js";
import initAnimacaoScroll from "./modules/scrollAnimation.js";
import initScrollTop from "./modules/scrollTop.js";

initAnimacaoScroll();
initCopyButton();
initScrollTop();

const dropbtn = document.querySelector(".dropbtn");
dropbtn.addEventListener("click", initDropMenu);
