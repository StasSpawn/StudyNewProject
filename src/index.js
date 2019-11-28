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
import Validator from "./modules/validator";




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


const valid = new Validator({
    selector: '#form1',
    pattern: {
        phone: /^\+380\d{5}$/,
        zip: /\d{5,6}/,
        name: /[А-Яа-яЁё]$/,
        textArea: /[А-Яа-яЁё]$/
    },
    method: {
        'form1-phone': [
            ['notEmpty'],
            ['pattern', 'phone']
        ],
        'form1-email': [
            ['notEmpty'],
            ['pattern', 'email']
        ],
        'form1-name': [
            ['notEmpty'],
            ['pattern', 'name']
        ]
    }
});
valid.init();

const valid2 = new Validator({
    selector: '#form2',
    pattern: {
        phone: /^\+380\d{5}$/,
        zip: /\d{5,6}/,
        name: /[А-Яа-яЁё]$/,
        textArea: /[А-Яа-яЁё]$/
    },
    method: {
        'form2-phone': [
            ['notEmpty'],
            ['pattern', 'phone']
        ],
        'form2-email': [
            ['notEmpty'],
            ['pattern', 'email']
        ],
        'form2-name': [
            ['notEmpty'],
            ['pattern', 'name']
        ],
        'form2-message': [
            ['notEmpty'],
            ['pattern', 'name']
        ]
    }
});
valid2.init();

const valid3 = new Validator({
    selector: '#form3',
    pattern: {
        phone: /^\+380\d{5}$/,
        zip: /\d{5,6}/,
        name: /[А-Яа-яЁё]$/,
        textArea: /[А-Яа-яЁё]$/
    },
    method: {
        'form3-phone': [
            ['notEmpty'],
            ['pattern', 'phone']
        ],
        'form3-email': [
            ['notEmpty'],
            ['pattern', 'email']
        ],
        'form3-name': [
            ['notEmpty'],
            ['pattern', 'name']
        ]
    }
});
valid3.init();
