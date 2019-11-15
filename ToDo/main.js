window.addEventListener('DOMContentLoaded', function () {
    'use strict';


    const button = document.querySelector('.button'),
        input = document.querySelector('.input'),
        list = document.querySelector('.list');

    let listItems = document.querySelectorAll('.list-item');

    const addListItem = () => {
        // input.value.replace(/\d/g, '');
        button.addEventListener('click', () => {
            if (input.value === '') {
                alert('Введите название задачи');
            } else {
                let newlistItem = document.createElement('li');
                newlistItem.className = 'list-item';
                newlistItem.textContent = input.value;
                list.appendChild(newlistItem);
                input.value = '';
                listItems = document.querySelectorAll('.list-item');
                console.log(`Количество элементов ${listItems.length}`);
            }
        });
    };
    addListItem();

    const clickOnListItem = () => {
        listItems.forEach((elem) => elem.addEventListener('click', () => {
            console.log(elem);
            let target = event.target;
            target.classList.toggle('list-item-crossed');
        }));

    };
    clickOnListItem();
});
console.log();
