import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('.feedback-form input'),
  inputMessage: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('input', throttle(onInputForm, 500));
refs.form.addEventListener('submit', onSubmitForm);

const saveForm = {};

showSavedForm()

function onInputForm(e) {
  saveForm[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(saveForm));
}

function onSubmitForm(e) {
  e.preventDefault();

  e.currentTarget.reset();
  console.log(saveForm);
  localStorage.removeItem('feedback-form-state');
}

function showSavedForm() {
  const savedForm = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (savedForm !== null) {
      refs.inputEmail.value = savedForm.email;
      refs.inputMessage.value = savedForm.message;
    }
    
 

}
