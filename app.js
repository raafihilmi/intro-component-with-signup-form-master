const form = document.querySelector('#form');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function (e) {
  e.preventDefault();

  if (firstName.value.trim() === '') {
    addError(firstName, 'First Name cannot be empty');
  }
  if (lastName.value.trim() === '') {
    addError(lastName, 'Last Name cannot be empty');
  }
  if (email.value.trim() === '') {
    addError(email, 'Email cannot be empty');
  }
  if (password.value.trim() === '') {
    addError(password, 'Password cannot be empty');
  }
});

function addError(field, message) {
  const parent = field.parentElement;
  const small = parent.querySelector('small');

  field.classList.add('error');
  small.classList.add('error-msg');
  small.innerHTML = message;
}
