"use strict";

function sliderMobile() {
  const BTN_LEFT = document.querySelector(".arrow-left-mobile");
  const BTN_RIGHT = document.querySelector(".arrow-right-mobile");
  const SLIDER_WRAPPER_MOBILE = document.querySelector(
    ".slider-wrapper-mobile"
  );
  let widthMob = document.querySelector(".slider-mobile").offsetWidth;
  let moveConst = 0;
  const allPagination = document.querySelectorAll(".pagination-mobile svg");

  function colorPagination() {
    if (moveConst >= 0 && moveConst <= 290) {
      allPagination[1].classList.remove("pagination-active");
      allPagination[2].classList.remove("pagination-active");
      allPagination[0].classList.add("pagination-active");
    } else if (moveConst >= 291 && moveConst <= 500) {
      allPagination[0].classList.remove("pagination-active");
      allPagination[2].classList.remove("pagination-active");
      allPagination[1].classList.add("pagination-active");
    } else if (moveConst >= 501) {
      allPagination[0].classList.remove("pagination-active");
      allPagination[1].classList.remove("pagination-active");
      allPagination[2].classList.add("pagination-active");
    }
  }

  BTN_LEFT.addEventListener("click", () => {
    moveConst = moveConst - widthMob - 15;
    if (moveConst < 0) {
      moveConst = 750;
    }
    SLIDER_WRAPPER_MOBILE.style.left = -moveConst + "px";
    colorPagination();
  });

  BTN_RIGHT.addEventListener("click", () => {
    moveConst = moveConst + +widthMob + 15;
    if (moveConst > 750) {
      moveConst = 0;
    }
    SLIDER_WRAPPER_MOBILE.style.left = -moveConst + "px";
    colorPagination();
  });
}
sliderMobile();
