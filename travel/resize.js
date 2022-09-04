"use strict";

function adaptDeskMob() {
  const allImg = document.querySelectorAll(
    ".slider-wrapper .slider-item .slider__image img"
  );

  const SLIDER_WRAPPER = document.querySelector(".slider-wrapper");
  let width;

  function resize() {
    width = document.querySelector(".destination-container").offsetWidth;
    SLIDER_WRAPPER.style.width = width * 1.83 + "px";
    allImg.forEach((item) => {
      item.style.width = 0.6 * width + "px";
    });
  }
  window.addEventListener("resize", resize);
  resize();

  const allImgMobile = document.querySelectorAll(
    ".slider-mobile .slider-wrapper-mobile .slider-item-mobile img"
  );

  const SLIDER_WRAPPER_MOBILE = document.querySelector(
    ".slider-wrapper-mobile"
  );
  let widthMob;

  function resizeMob() {
    widthMob = document.querySelector(".slider-mobile").offsetWidth;
    SLIDER_WRAPPER_MOBILE.style.width = widthMob * 2.79 + "px";
    allImgMobile.forEach((item) => {
      item.style.width = widthMob + "px";
    });
  }
  window.addEventListener("resize", resizeMob);
  resizeMob();
}
adaptDeskMob();
