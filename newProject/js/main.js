window.addEventListener('DOMContentLoaded', function () {
    'use strict';
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
            return {timeRemaining, hours, minutes, seconds};
        }

        function updateClock () {
            let timer = getTimeRemaining();

            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;
            console.log(typeof timerHours);


            if (timer.timeRemaining > 0) {
                setTimeout(updateClock, 1000);
                // if (timerHours < 0 || timerMinutes < 0 || timerSeconds < 0) {
                //
                // }
            }
        }
        updateClock ();
    }

    countTimer('10 november 2019')
});