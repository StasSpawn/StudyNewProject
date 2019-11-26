'use strict';
let screenWidth = document.documentElement.clientWidth;
window.onresize = function() {
    screenWidth = document.documentElement.clientWidth;
    console.log('Произошло изменение разрешения экрана');
};

import countTimer from "./modules/countTimer";
import toggleMenu from "./modules/toggleMenu";
import togglePopup from "./modules/togglePopup";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import changePhoto from "./modules/changePhoto";
import inputValidation from "./modules/inputValidation";
import calc from "./modules/calc";
import sendForm from "./modules/sendForm";





//timer
countTimer('11 november 2019');

//меню
toggleMenu();

//popup
togglePopup();

// табы
tabs();

//Слайдер
slider();

//Замена фото при hover
changePhoto();

//Валидация input
inputValidation();

//Калькулятор
calc(100);

//send ajax
sendForm();