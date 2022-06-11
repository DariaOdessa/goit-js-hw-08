import throttle from 'lodash.throttle';

const FEEDBACK_KEY = 'feedback-form-state';

const formRef = document.querySelector('.feedback-form');
const textareaRef = document.querySelector('.feedback-form textarea');
const emailInputRef = document.querySelector('.feedback-form input')


formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onFormInput, 500));

const formData = {};

getLocalStorageData();

function onFormInput(evt) {

    formData[evt.target.name] = evt.target.value;
    const localStorageData = JSON.stringify(formData);
    localStorage.setItem(FEEDBACK_KEY, localStorageData); 
}


function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(formData);
    evt.currentTarget.reset();
    localStorage.removeItem(FEEDBACK_KEY);
}

function getLocalStorageData() {
    const savedData = localStorage.getItem(FEEDBACK_KEY);
    const parsedData = JSON.parse(savedData);

  if (savedData) {
    emailInputRef.value = parsedData.email;
    textareaRef.value = parsedData.message;
  }
}



