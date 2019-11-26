import countTimer from "./countTimer";

const toggleMenu = () => {
    let screenWidth = document.documentElement.clientWidth;
    window.onresize = function() {
        screenWidth = document.documentElement.clientWidth;
        console.log('Произошло изменение разрешения экрана');
    };
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

export default toggleMenu;