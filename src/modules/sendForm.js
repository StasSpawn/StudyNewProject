import countTimer from "./countTimer";

const sendForm = () => {
    const errorMessage = 'Что-то пошло не так!',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо!';

    const form1 = document.getElementById('form1');
    // const form = document.getElementById('form1');
    const form2 = document.getElementById('form2');
    const form3 = document.getElementById('form3');

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem;';

    const sendForms = (formName) => {
        formName.addEventListener('submit', (event) => {
            event.preventDefault();
            formName.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(formName);
            let postData = formData => fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: formData
            });

            postData(formData)
                .then((response) => {
                    if (response.status !== 200 ) {
                        statusMessage.textContent = errorMessage;
                        throw new Error('status not 200');
                    }
                    statusMessage.textContent = successMessage;

                })
                .catch(error => console.error(error));
        });
    };

    sendForms(form1);
    sendForms(form2);
    sendForms(form3);

};

export default sendForm;