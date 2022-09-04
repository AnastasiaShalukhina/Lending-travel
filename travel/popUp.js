"use strict";

function popUp() {
  const BTN_HEADER = document.querySelector(".button-header");
  const POPUP = document.querySelector(".logIn-signIn");
  const LogIn = document.querySelector(".logIn");
  const SignUp = document.querySelector(".signUp");
  const DIV_FOR_BLACKOUT = document.querySelector(".div-for-blackout");
  const LogIN_REGISTR = document.querySelector(".link-for-registr");
  const linkForLogIn = document.querySelector(".link-for-LogIn");
  const btnSignIn = document.querySelector(".logIn-btnSubmit");

  BTN_HEADER.addEventListener("click", () => {
    POPUP.style.top = "0px";
    POPUP.style.left = "25%";
    DIV_FOR_BLACKOUT.classList.add("blackout");
  });

  DIV_FOR_BLACKOUT.addEventListener("click", () => {
    POPUP.style.top = "-100%";
    DIV_FOR_BLACKOUT.classList.remove("blackout");
    SignUp.style.display = "none";
    LogIn.style.display = "block";
  });

  LogIN_REGISTR.addEventListener("click", () => {
    LogIn.style.display = "none";
    SignUp.style.display = "block";
  });

  linkForLogIn.addEventListener("click", () => {
    SignUp.style.display = "none";
    LogIn.style.display = "block";
  });

  btnSignIn.addEventListener("click", () => {
    let formPersonalData = document.forms.personalData;
    let userEmail = formPersonalData[0].value;
    let userPassw = formPersonalData[1].value;
    alert(`Your email is ${userEmail} \n Your password is ${userPassw}`);
  });
}
popUp();

console.log(
  "слайдер на десктопе и мобильной версии работает. Перед проверкой мобильного слайдера страницу надо перезагрузить. Первая смена картинки слайдера на мобильной версии рывком, потом все время плавно. Пагинация связана со сменой слайда. Логин попап на десктопе появляется после нажатия на кнопку логин, в мобилке - на ссылку аакаунт. Логин попап соответствует макету, закрывается при клике вне его, по клику на Register меняется наполнение. При нажатии на кнопку Sign In показывается браузерный алерт с введенными данными"
);
