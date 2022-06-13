import throttle from 'lodash.throttle';

const FEEDBACK_KEY = 'feedback-form-state';

const formRef = document.querySelector('.feedback-form');
const textareaRef = document.querySelector('.feedback-form textarea');
const emailInputRef = document.querySelector('.feedback-form input')


formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onFormInput, 500));


getLocalStorageData();

function onFormInput() {
  const email = emailInputRef.value;
  const message = textareaRef.value;
  const localStorageData = JSON.stringify({email, message});
  localStorage.setItem(FEEDBACK_KEY, localStorageData); 
  
}


function onFormSubmit(evt) {
  evt.preventDefault();
  const formElements = evt.currentTarget.elements;
  const email = formElements.email.value;
  const message = formElements.message.value;

  if (!email || !message) {
    alert `Заполните все поля формы!`
  }
  const userData = {
    email,
    message
  };
  console.log(userData);
  localStorage.removeItem(FEEDBACK_KEY);
  evt.currentTarget.reset();
  
  } 
    


function getLocalStorageData() {  
  const savedData = localStorage.getItem(FEEDBACK_KEY);
  const parsedData = JSON.parse(savedData);

  if (parsedData) {
    textareaRef.value = parsedData.message;
    emailInputRef.value = parsedData.email}
  
  } 
