'use strict';

const date = new Date();
// let dayElem = document.createElement("div");

const getDayTime = function () {
    let hours = date.getHours();
    let dayWord;
    console.log(hours);

    if (hours => 22 && hours < 4) {
        dayWord = 'Доброе утро';
        console.log(1);
    } else if (hours => 11 && hours < 17) {
        dayWord = 'Добрый день';
        console.log(2);
    } else if (hours => 17 && hours < 22) {
        dayWord = 'Добрый вечер';
        console.log(3);
    } else if (hours => 4 && hours < 11) {
        dayWord = 'Доброй ночи';
        console.log(4);
    }
    console.log(dayWord);
    return dayWord;
};
getDayTime ();
