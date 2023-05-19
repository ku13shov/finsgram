"use strict";

const headerRegBtn = document.querySelector(".header__reg");
const forwhatBtn = document.querySelector(".forwhat__btn");
const forwhomBtn = document.querySelector(".forwhom__btn");
const regSection = document.querySelector(".reg");
const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__wrapper");

const showOrHideMenu = () => {
    menu.classList.toggle("active");
    burger.classList.toggle("active");
};

const scrollToRegistrationForm = () => {
    regSection.scrollIntoView();
}

headerRegBtn.addEventListener("click", scrollToRegistrationForm);
forwhatBtn.addEventListener("click", scrollToRegistrationForm);
forwhomBtn.addEventListener("click", scrollToRegistrationForm);


burger.addEventListener("click", showOrHideMenu);

menu.addEventListener("click", (e) => {
    if (
        e.target.classList.contains("header__item-link") ||
        e.target.classList.contains("header__reg")
    ) {
        menu.classList.remove("active");
        burger.classList.remove("active");
    }
});
