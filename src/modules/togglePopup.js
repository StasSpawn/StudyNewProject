import countTimer from "./countTimer";

const togglePopup = () => {
    let screenWidth = document.documentElement.clientWidth;
    window.onresize = function() {
        screenWidth = document.documentElement.clientWidth;
        console.log('Произошло изменение разрешения экрана');
    };
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

export default togglePopup;