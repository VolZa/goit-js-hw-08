import { throttle } from 'lodash';

const refs = {
    formEl: document.querySelector('.feedback-form'),
    inputMailEl: document.querySelector('.feedback-form input'),
    inputMessageEl: document.querySelector('.feedback-form textarea'),
}
const LOCALSTORAGE_KEY = 'feedback-form-state';

refs.formEl.addEventListener('submit', onFormSubmit);
refs.formEl.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (formData.get('email') === '' || formData.get('message') === '') {
        alert('Заповніть всі поля!');
        return;
    }
    console.log({
        email: formData.get('email'),
        message: formData.get('message'),
    });

    e.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
}


function onFormInput(e) {
    const formData = new FormData(e.currentTarget);
    const formState = {
        email: formData.get('email'),
        message: formData.get('message'),
    }
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formState));

    console.log(formState);
    console.log(localStorage.getItem(LOCALSTORAGE_KEY));
}

const getStoredObject = storageKey => {
    try {
        return localStorage.getItem(storageKey) === null
            ? undefined
            : JSON.parse(localStorage.getItem(storageKey));
    }
    catch (error) {
        console.log('Get state error: ', error.message);
    }
} 

const storageData = getStoredObject(LOCALSTORAGE_KEY);

if (storageData) {
    refs.inputMailEl.value = storageData.email;
    refs.inputMessageEl.value = storageData.message;
}