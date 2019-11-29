import countTimer from "./countTimer";
import Validator from "./validator";


const valid = new Validator({
  selector: '#form1',
  pattern: {
    phone: /^\+380\d{5}$/,
    zip: /\d{5,6}/,
    name: /[А-Яа-яЁё]$/,
    textArea: /[А-Яа-яЁё]$/
  },
  method: {
    'form1-phone': [
      ['notEmpty'],
      ['pattern', 'phone']
    ],
    'form1-email': [
      ['notEmpty'],
      ['pattern', 'email']
    ],
    'form1-name': [
      ['notEmpty'],
      ['pattern', 'name']
    ]
  }
});
valid.init();

const valid2 = new Validator({
  selector: '#form2',
  pattern: {
    phone: /^\+380\d{5}$/,
    zip: /\d{5,6}/,
    name: /[А-Яа-яЁё]$/,
    textArea: /[А-Яа-яЁё]$/
  },
  method: {
    'form2-phone': [
      ['notEmpty'],
      ['pattern', 'phone']
    ],
    'form2-email': [
      ['notEmpty'],
      ['pattern', 'email']
    ],
    'form2-name': [
      ['notEmpty'],
      ['pattern', 'name']
    ],
    'form2-message': [
      ['notEmpty'],
      ['pattern', 'name']
    ]
  }
});
valid2.init();

const valid3 = new Validator({
  selector: '#form3',
  pattern: {
    phone: /^\+380\d{5}$/,
    zip: /\d{5,6}/,
    name: /[А-Яа-яЁё]$/,
    textArea: /[А-Яа-яЁё]$/
  },
  method: {
    'form3-phone': [
      ['notEmpty'],
      ['pattern', 'phone']
    ],
    'form3-email': [
      ['notEmpty'],
      ['pattern', 'email']
    ],
    'form3-name': [
      ['notEmpty'],
      ['pattern', 'name']
    ]
  }
});
valid3.init();

const sendForm = () => {
  const errorMessage = 'Что-то пошло не так!',
  loadMessage = 'Загрузка...',
  successMessage = 'Спасибо!';

  const allForms = document.querySelectorAll('form');
  const form1 = document.querySelector('#form1');
  const form2 = document.querySelector('#form2');
  const form3 = document.querySelector('#form3');

  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 2rem;';


  console.log();
  const sendForms = (formName, valid) => {


    formName.addEventListener('submit', (event) => {
        event.preventDefault();
      if (valid()) {

        formName.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(formName);
        console.log(formData);
        let postData = formData => fetch('./server.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: formData

        });


        postData(formData)
        .then((response) => {
          if (response.status !== 200) {
            statusMessage.textContent = errorMessage;
            throw new Error('status not 200');
          }
          statusMessage.textContent = successMessage;

        })
        .catch(error => console.error(error));
      }
    });

  };


  sendForms(form1, valid.checkValid.bind(valid));
  sendForms(form2, valid2.checkValid.bind(valid2));
  sendForms(form3, valid3.checkValid.bind(valid3));

}
;

export default sendForm;
