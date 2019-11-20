window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    let screenWidth = document.documentElement.clientWidth;
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
            }
            /*else {
                target = target.closest('.popup');
                if (target) {
                    popup.style.display = 'none';
                }
            }*/


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




    //Слайдер
    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'),
            slider = document.querySelector('.portfolio-content');
        let currentSlide = 0,
            interval;

        const addSliderButtons = () => {
            let portfolioDots = document.querySelector('.portfolio-dots');
            for (let i = 0; i < slide.length; i++) {
                let newDot = document.createElement('li');
                newDot.className = 'dot';
                portfolioDots.appendChild(newDot);

            }

        };
        addSliderButtons();

        let dot = document.querySelectorAll('.dot');
        dot[0].classList.add('dot-active');

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                   if (elem === target) {
                       currentSlide = index;
                   }
                });
            }


            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }

            if (currentSlide < 0) {
                currentSlide = slide.length -1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover', (event) => {
            let target = event.target;
            if (target.matches('.portfolio-btn') ||
                target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', (event) => {
            let target = event.target;
            if (target.matches('.portfolio-btn') ||
                target.matches('.dot')) {
                startSlide();
            }
        });
        startSlide(6500);



    };

    slider();


    //Замена фото при hover
    const changePhoto = () => {
        const img = document.querySelectorAll('.command__photo');
        let src;
        //При hover меняем src на data-src
        img.forEach((elem) => elem.addEventListener('mouseenter',() => {
            src = elem.src;
            elem.src = elem.dataset.img;
        }));

        //При отводе мышки с элемента возвращаем изначальное значение src
        img.forEach((elem) => elem.addEventListener('mouseout',() => {
            elem.src = src;
        }));

    };
    changePhoto();


    //Валидация input
    const inputValidation = () => {
        const inputs = document.querySelectorAll('input[type="number"]');
        inputs.forEach((elem) => elem.addEventListener('input',() => {
            elem.value = elem.value.replace(/\D/g, '');
        }));

    };
    inputValidation();



    //Калькулятор
    const calc = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');

        const countSum = () => {
            let total = 0,
            countValue = 1,
            dayValue = 1;

            const typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;

            if (calcCount.value > 1) {
                countValue += (calcCount.value -1) / 10;
            }

            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            }


            if (typeValue && squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;
            }

            totalValue.textContent = total;
        };

        calcBlock.addEventListener('change', (event) => {
            const target = event.target;

            if (target.matches('select') || target.matches('input')) {
                countSum();
            }
        });
    };
    calc(100);

    //send ajax

    const sendForm = () => {
        const errorMessage = 'Что-то пошло не так!',
            loadMessage = 'Загрузка...',
            successMessage = 'Спасибо!';

        const form = document.getElementById('form1');
        const form2 = document.getElementById('form2');
        const form3 = document.getElementById('form3');

        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem;';

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(form);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            postData(body, () => {
                statusMessage.textContent = successMessage;
            }, (error) => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            });
        });

        form2.addEventListener('submit', (event) => {
            event.preventDefault();
            form2.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(form2);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            postData(body, () => {
                statusMessage.textContent = successMessage;
            }, (error) => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            });
        });

        form3.addEventListener('submit', (event) => {
            event.preventDefault();
            form3.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            statusMessage.style.color = 'white';
            const formData = new FormData(form3);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            postData(body, () => {
                statusMessage.textContent = successMessage;
            }, (error) => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            });
        });





        const postData = (body, outputData, errorData) => {
            const request = new XMLHttpRequest();
            const inputs = document.querySelectorAll('input');
            request.addEventListener('readystatechange', () => {
                if (request.readyState !== 4) {
                    return;
                }
                if (request.status === 200) {
                    outputData();
                    inputs.forEach((item) => {
                        item.value = '';
                    });
                } else {
                    errorData(request.status);
                }
            });
            request.open('POST', './server.php');
            request.setRequestHeader('Content-Type', 'application/json');
            request.send(JSON.stringify(body));
        };
    };

    sendForm();
});
console.log();
