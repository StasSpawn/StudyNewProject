window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    const screenWidth = document.documentElement.clientWidth;
    //timer
    let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

    function countTimer(deadline) {

        function getTimeRemaining() {
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor(timeRemaining / 60) % 60,
                hours = Math.floor(timeRemaining / 60 / 60);
            console.log('Запуск таймера');
            return {timeRemaining, hours, minutes, seconds};
        }
        function updateClock () {
            let timer = getTimeRemaining();
            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;
            if (timer.timeRemaining > 0) {
                if (timerHours.textContent.length <= 1) {
                    timerHours.textContent = '0' + timer.hours;
                }
                if (timerMinutes.textContent.length <= 1) {
                    timerMinutes.textContent = '0' + timer.minutes;
                }
                if (timerSeconds.textContent.length <= 1) {
                    timerSeconds.textContent = '0' + timer.seconds;
                }
            } else if (timer.timeRemaining <= 0) {
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }
        }

        updateClock ();
        setInterval(updateClock, 1000);
    }

    countTimer('11 november 2019');





    //меню

    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
            if (screenWidth < 768) {
                menu.style.transition = 'none';
            }


            /*if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
                menu.style.transform = `translate(0)`;
            } else {
                menu.style.transform = `translate(-100%)`;
            }*/

        };
        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);

        /*for(let i = 0; i < menuItems.length; i++) {
            menuItems[i].addEventListener('click', () => {
                handlerMenu();
            });
        }*/
        menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
    };

    toggleMenu();



    //popup

    const togglePopup = () => {
        const popup = document.querySelector('.popup'),
            popupContent = document.querySelector('.popup-content'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupClose = document.querySelector('.popup-close');
        let count = 0;
        console.log(screenWidth);


        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
                if (screenWidth > 768) {
                    let popupDown = function() {
                        count++;
                        popupContent.style.top = count + 'px';
                        if (count < 100) {
                            setTimeout(popupDown, 1);
                        }
                    };
                    popupDown();
                }
            });
        });

        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    };
    togglePopup();
    console.log(screen.width);
});

