"use strict";
function sliderDesktop() {
  const BTN_LEFT = document.querySelector(".slider .slider-wrapper .left");
  const BTN_RIGHT = document.querySelector(".slider .slider-wrapper .right");
  const PAGINATION_DESK = document.querySelectorAll(".pagination svg");

  let leftImg = document.querySelector(
    ".slider .slider-wrapper .left .slider__image img"
  );
  let leftImgText = document.querySelector(
    ".slider .slider-wrapper .left .slider__caption"
  );
  let rightImg = document.querySelector(
    ".slider .slider-wrapper .right .slider__image img"
  );
  let rightImgText = document.querySelector(
    ".slider .slider-wrapper .right .slider__caption"
  );

  let centerImg = document.querySelector(
    ".slider .slider-wrapper .center .slider__image img"
  );
  let centerImgText = document.querySelector(
    ".slider .slider-wrapper .center .slider__caption"
  );

  BTN_RIGHT.addEventListener("click", function moveToLeft() {
    let rightURL = rightImg.src;
    let centerURL = centerImg.src;
    let leftURL = leftImg.src;
    let rightText = rightImgText.innerHTML;
    let centrerText = centerImgText.innerHTML;
    let leftText = leftImgText.innerHTML;

    centerImg.src = rightURL;
    leftImg.src = centerURL;
    rightImg.src = leftURL;
    centerImgText.innerHTML = rightText;
    leftImgText.innerHTML = centrerText;
    rightImgText.innerHTML = leftText;
    colorPagination();
  });

  BTN_LEFT.addEventListener("click", function moveToRight() {
    let rightURL = rightImg.src;
    let centerURL = centerImg.src;
    let leftURL = leftImg.src;
    let rightText = rightImgText.innerHTML;
    let centerText = centerImgText.innerHTML;
    let leftText = leftImgText.innerHTML;

    centerImg.src = leftURL;
    leftImg.src = rightURL;
    rightImg.src = centerURL;
    centerImgText.innerHTML = leftText;
    leftImgText.innerHTML = rightText;
    rightImgText.innerHTML = centerText;
    colorPagination();
  });

  function colorPagination() {
    if (centerImgText.innerHTML === "SPAIN") {
      PAGINATION_DESK[0].classList.add("pagination-active");
      PAGINATION_DESK[2].classList.remove("pagination-active");
      PAGINATION_DESK[1].classList.remove("pagination-active");
    } else if (centerImgText.innerHTML === "JAPAN") {
      PAGINATION_DESK[0].classList.remove("pagination-active");
      PAGINATION_DESK[2].classList.remove("pagination-active");
      PAGINATION_DESK[1].classList.add("pagination-active");
    } else if (centerImgText.innerHTML === "USA") {
      PAGINATION_DESK[0].classList.remove("pagination-active");
      PAGINATION_DESK[2].classList.add("pagination-active");
      PAGINATION_DESK[1].classList.remove("pagination-active");
    }
  }
}

sliderDesktop();
