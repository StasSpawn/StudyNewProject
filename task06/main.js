'use strict';

const date = new Date();
// let dayElem = document.createElement("div");

const getDayTime = () => {
    let hours = date.getHours();
    let dayWord;
    // console.log(hours);

    if (hours >= 4 && hours < 11) {
        dayWord = 'Доброе утро';
    } else if (hours >= 11 && hours < 17) {
        dayWord = 'Добрый день';
    } else if (hours >= 17 && hours < 22) {
        dayWord = 'Добрый вечер';
    } else if (hours >= 22 && hours < 4) {
        dayWord = 'Доброй ночи';
    }
    let dayTime = document.createElement("div");
    dayTime.textContent = dayWord;
    document.body.append(dayTime);
};
getDayTime ();

//Вывод дня недели
const createWeekDay = () => {
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятниуа', 'Суббота'];
    let dayNow = days[date.getDay()];
    let weekDay = document.createElement("div");
    weekDay.innerHTML = `Сегодня ${dayNow}`;
    document.body.append(weekDay);
};
createWeekDay();


//Вывод времени
const createTime = () => {
    let secondsElem = document.createElement("span"),
        minutesElem = document.createElement("span"),
        hoursElem = document.createElement("span"),
        seconds = date.getSeconds(),
        minutes = date.getMinutes(),
        hours = date.getHours();
    secondsElem.textContent = seconds;
    minutesElem.textContent = minutes;
    hoursElem.textContent = hours;
    if (secondsElem.textContent.length <= 1) {
        secondsElem.textContent = '0' + secondsElem.textContent;
        console.log(1);
    }
    if (minutesElem.textContent.length <= 1) {
        minutesElem.textContent = '0' + minutesElem.textContent;
        console.log(2);
    }
    if (hoursElem.textContent.length <= 1) {
        hoursElem.textContent = '0' + hoursElem.textContent;
        console.log(3);
    }

    let timeElem = document.createElement("div");
    timeElem.textContent = `Текущее время ${hoursElem.textContent}:${minutesElem.textContent}:${secondsElem.textContent}`;
    document.body.append(timeElem);
};
createTime();



//До Нового Года!
const beforeNY = (deadline) => {
    let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        days = Math.floor(timeRemaining / 60 / 60 / 24);
    let beforeNewYear = document.createElement("div");
    beforeNewYear.textContent = `До Нового Года осталось ${days} дней(дня)`;
    document.body.append(beforeNewYear);
    console.log(days);
};
beforeNY('01 january 2020');