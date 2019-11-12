window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    let screenWidth;
    window.onresize = function() {
        screenWidth = document.documentElement.clientWidth;
        console.log('Произошло изменение разрешения экрана');
    };

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
            // console.log('Запуск таймера');
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
            } else {
                menu.style.transition = '1s';
            }
        };
        btnMenu.addEventListener('click', handlerMenu);
        // closeBtn.addEventListener('click', handlerMenu);
        // menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));


        //Этот работает, но какая-то каша.
       /* menu.addEventListener('click', () => {
            if (event.target.tagName === 'A') {
                handlerMenu(event);
            }
        });*/

        //Этот код не работает
        menu.addEventListener('click', event => {
            const target = event.target;
            if (target.tagName === 'A') {
                handlerMenu(event);
            }
        });


    };

    toggleMenu();



    //popup

    const togglePopup = () => {
        const popup = document.querySelector('.popup'),
            popupContent = document.querySelector('.popup-content'),
            popupBtn = document.querySelectorAll('.popup-btn');
        let count = 0;


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
        popup.addEventListener('click', (event) => {
            let target = event.target;
            if (target.classList.contains('popup-close')) {
                popup.style.display = 'none';
            } else {
                target = target.closest('.popup');
                if (target) {
                    popup.style.display = 'none';
                }
            }


        });
    };
    togglePopup();


    // табы

    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');
        const toggleTabContent = (index) => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');

                }
            }
        };
        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.service-header-tab');
            if (target) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }
        });
    };

    tabs();
});
console.log();
