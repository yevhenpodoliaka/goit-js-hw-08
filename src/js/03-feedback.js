import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('input', throttle(onInputForm, 500));
refs.form.addEventListener('submit', onSubmitForm);

showSavedForm();
function onInputForm() {
  const inputEmail = refs.form.elements.email.value;
  const inputMessage = refs.form.elements.message.value;
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email: inputEmail, message: inputMessage }),
  );
}

function showSavedForm() {
  const savedForm = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (savedForm && savedForm.hasOwnProperty('email')) {
    refs.form.elements.email.value = savedForm.email;
    refs.form.elements.message.value = savedForm.message;
  }
}
function onSubmitForm(e) {
  e.preventDefault();

  if (refs.form.elements.email.value && refs.form.elements.message.value) {
      console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    e.currentTarget.reset();

    localStorage.removeItem('feedback-form-state');
  } else {
     alert('all fields must be filled !!!');
  }
}

























// const refs = {
//   form: document.querySelector('.feedback-form'),
//   inputEmail: document.querySelector('.feedback-form input'),
//   inputMessage: document.querySelector('.feedback-form textarea'),
// };

// refs.form.addEventListener('input', throttle(onInputForm, 500));
// refs.form.addEventListener('submit', onSubmitForm);

// const saveForm = {};

// showSavedForm()

// function onInputForm(e) {
//   saveForm[e.target.name] = e.target.value;
//   localStorage.setItem('feedback-form-state', JSON.stringify(saveForm));
// }

// function onSubmitForm(e) {
//   e.preventDefault();
//   if (refs.inputEmail.value && refs.inputMessage.value) {
//     e.currentTarget.reset();
//     console.log(saveForm);
//     localStorage.removeItem('feedback-form-state');
//   } else {
//      alert('all fields must be filled !!!');
//   }

// }

// function showSavedForm() {
//   const savedForm = JSON.parse(localStorage.getItem('feedback-form-state'));

//   if (savedForm.email) {
//     refs.inputEmail.value = savedForm.email;
//   }
//   if (savedForm.message) {
//     refs.inputMessage.value = savedForm.message;
//   }

// }
