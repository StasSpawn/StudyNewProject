const changeColor = () => {
    const body = document.querySelector('body'),
        colorName = document.querySelector('.color-name'),
        color = '#' + (Math.random().toString(16)).substring(2,8);

    colorName.textContent = color;

    body.style = 'background-color: ' + color;

    console.log(body.style.backgroundColor);

};

const button = document.querySelector('button');
button.addEventListener('click', changeColor);


