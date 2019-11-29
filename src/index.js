'use strict';


import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import 'element-remove';
import elementClosest from 'element-closest';
elementClosest(window);

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
countTimer('30 november 2019');

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

