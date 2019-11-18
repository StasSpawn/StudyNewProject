window.addEventListener('DOMContentLoaded', function () {
    'use strict';


    const ol = document.querySelector('ol'),
        addBtn = document.querySelector('button'),
        input = document.querySelector('input'),
        span = document.querySelector('span');

    ol.addEventListener('click', (e) => {
        e.target.classList.toggle('done');
    });

    const addLi = () => {
        if(input.value === ''){
            alert('Вы не ввели задачу!');
        } else{
            let newLi = document.createElement('li');
            newLi.appendChild(document.createTextNode(input.value));
            ol.appendChild(newLi);
            input.value = '';
        }
    };

    addBtn.addEventListener('click', addLi);

    console.log(ol.length);
});
console.log();
