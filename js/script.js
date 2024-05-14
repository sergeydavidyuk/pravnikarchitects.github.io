"use strict";

const menuButton = document.querySelector(".menu_btn");

menuButton.addEventListener("mouseover", () => {
    menuButton.style.transform = "rotate(90deg)";
});

menuButton.addEventListener("mouseout", () => {
    menuButton.style.transform = "rotate(0deg)";
});

