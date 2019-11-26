import countTimer from "./countTimer";

const inputValidation = () => {
    const inputsNumb = document.querySelectorAll('input[type="tel"]');
    inputsNumb.forEach((elem) => elem.addEventListener('input',() => {
        elem.value = elem.value.replace(/[^\d+]/g, '');
    }));

    const inputsText = document.querySelectorAll('input[type="text"]');
    inputsText.forEach((elem) => elem.addEventListener('input',() => {
        elem.value = elem.value.replace(/\d/g, '');
    }));



};

export default inputValidation;