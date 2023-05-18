"use strict";

const headerRegBtn = document.querySelector(".header__reg");
const regSection = document.querySelector(".reg");
const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__wrapper");

const showOrHideMenu = () => {
    menu.classList.toggle("active");
    burger.classList.toggle("active");
};

headerRegBtn.addEventListener("click", () => {
    regSection.scrollIntoView();
});

burger.addEventListener("click", showOrHideMenu);

menu.addEventListener("click", (e) => {
    if (
        e.target.classList.contains("header__item-link") ||
        e.target.classList.contains("header__reg")
    ) {
        showOrHideMenu();
    }
});
