import countTimer from "./countTimer";

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

export default changePhoto;