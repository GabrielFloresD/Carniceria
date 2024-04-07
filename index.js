"use strict";

// HEADER - button menu and menu efect

const toggleMenu = document.getElementById("btn-menu");

const menu = document.querySelector(".navbar_ul");

const main = document.getElementById("main");

const menuLinks = document.querySelectorAll(".navbar__link");

const closeMenu = () => {
    menu.classList.remove("menu-visible");
    menu.classList.add("menu-not-visible");
    toggleMenu.classList.remove("active");
}

toggleMenu.addEventListener("click", () => {
    menu.classList.toggle("menu-visible");
    toggleMenu.classList.toggle("active");
    menu.classList.remove("menu-not-visible");
    if (menu.classList.contains("menu-visible")) {
        // Mouse when "click" main, menu close
        main.addEventListener("click", closeMenu);
        // Mouse when "click" an option, menu close
        menuLinks.forEach((link) => {
            link.addEventListener("click", closeMenu)
        })
        return;
    } else {
        menu.classList.add("menu-not-visible");
    }
});

// HEADER - button category 

const toggleCat = document.getElementById("btn-category");

const menuCat = document.querySelector(".category_ul");

const menuCatLinks = document.querySelectorAll(".category__link");

const closeMenuCat = () => {
    menu.classList.remove("menu-visible");
    menu.classList.add("menu-not-visible");
    toggleMenu.classList.remove("active");
    menuCat.classList.remove("visible");
    toggleCat.classList.remove("active");  
}

toggleCat.addEventListener("click", () => {
    menuCat.classList.toggle("visible");
    toggleCat.classList.toggle("active");
    if (menuCat.classList.contains("visible")) {
        if (menuLang.classList.contains("visible")) {
            menuLang.classList.remove("visible");
            toggleLang.classList.remove("active");  
        }
        // Mouse when "click" an option in cat menu, menu close
        menuCatLinks.forEach((link) => {
            link.addEventListener("click", closeMenuCat)
        })
        // Mouse when "click" main, menu close
        main.addEventListener("click", closeMenuCat);
    }
});

// HEADER - button language 

const toggleLang = document.getElementById("btn-language");

const menuLang = document.querySelector(".language_ul");

const menuLangLinks = document.querySelectorAll(".language__link");

const closeMenuLang = () => {
    menu.classList.remove("menu-visible");
    menu.classList.add("menu-not-visible");
    toggleMenu.classList.remove("active");
    menuLang.classList.remove("visible");
    toggleLang.classList.remove("active");  
}

toggleLang.addEventListener("click", () => {
    menuLang.classList.toggle("visible");
    toggleLang.classList.toggle("active");
    if (menuLang.classList.contains("visible")) {
        if (menuCat.classList.contains("visible")) {
            menuCat.classList.remove("visible");
            toggleCat.classList.remove("active");  
        }
        // Mouse when "click" an option in lang menu, menu close
        menuLangLinks.forEach((link) => {
            link.addEventListener("click", closeMenuLang)
        })
        // Mouse when "click" main, menu close
        main.addEventListener("click", closeMenuLang);
    };
});