function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    // console.log();
}

/*let selectorValue = '.class';
let width = '125px';
let height = '145px';
let background = 'red';
let fontSize  = '28px';*/


let getSelector = new DomElement('.class', '125px', '145px', 'red', '28px');
console.log(getSelector);

DomElement.prototype.getString = function () {
    console.log(this.selector);

    if (this.selector[0] === '.') {
        console.log(1);
        let elementDiv = document.createElement('div');
        elementDiv.className = this.selector;
        elementDiv.textContent = 'Я <div> с классом ' + this.selector;
        document.body.appendChild(elementDiv);
        elementDiv.style.width = this.width;
        elementDiv.style.height = this.height;
        elementDiv.style.background = this.bg;
        elementDiv.style.fontSize = this.fontSize;
    } else if (this.selector[0] === '#') {
        let elementId = document.createElement('p');
        elementId.className = this.selector;
        elementId.textContent = 'Я <p> с id ' + this.selector;
        document.body.appendChild(elementId);
        elementId.style.width = this.width;
        elementId.style.height = this.height;
        elementId.style.background = this.bg;
        elementId.style.fontSize = this.fontSize;
    }
};

getSelector.getString();


let secondDomElement = new DomElement('.class2', '200px','500px','pink','34px',);

secondDomElement.getString();