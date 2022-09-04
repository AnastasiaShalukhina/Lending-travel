"use strict";

function adaptMenu() {
  const ADAPT_MENU = document.querySelector(".adaptive-menu");
  const ADAPT_BTN_OPEN = document.querySelector(".header-burger");
  const ADAPT_BTN_CLOSE = document.querySelector(".btn-adaptve-menu");
  const ACCOUNT_LINK = document.querySelector(".account-close");
  const DIV_FOR_BLACKOUT = document.querySelector(".div-for-blackout");
  const POPUP = document.querySelector(".logIn-signIn");

  ADAPT_BTN_OPEN.addEventListener("click", () => {
    ADAPT_MENU.style.right = "0px";
    DIV_FOR_BLACKOUT.classList.add("blackout");
  });

  ADAPT_BTN_CLOSE.addEventListener("click", () => {
    ADAPT_MENU.style.right = "-165px";
    DIV_FOR_BLACKOUT.classList.remove("blackout");
  });

  ACCOUNT_LINK.addEventListener("click", () => {
    POPUP.style.top = "0px";
    POPUP.style.left = "25%";
    ADAPT_MENU.style.right = "-165px";
    DIV_FOR_BLACKOUT.classList.add("blackout");
  });

  DIV_FOR_BLACKOUT.addEventListener("click", () => {
    ADAPT_MENU.style.right = "-165px";
    DIV_FOR_BLACKOUT.classList.remove("blackout");
  });
}
adaptMenu();
