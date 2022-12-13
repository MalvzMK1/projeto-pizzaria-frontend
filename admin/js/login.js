import { getAllAdmins } from './utils/adminFetch.js';

console.log(await getAllAdmins());

const emailInput = document.querySelector('#admin-email-input');
const passwordInput = document.querySelector('#admin-password-input');
const submitLoginFormButton = document.querySelector(
  '#admin-login-submit-button'
);

const validateInputs = () => {
  if (emailInput.value === '' || passwordInput.value === '') return false;
  return true;
};

const getFormValues = () => {
  return {
    loginInfos: {
      email: emailInput.value,
      password: passwordInput.value,
    },
  };
};

const validateLogin = () => {
  return true;
};

submitLoginFormButton.addEventListener('click', () => {
  if (validateInputs()) {
    console.log(getFormValues());
    if (validateLogin()) {
      location.href = './cms-home.html';
    }
  } else {
    emailInput.style.borderBottom = '3px solid var(--red-500)';
    passwordInput.style.borderBottom = '3px solid var(--red-500)';
    submitLoginFormButton.style.animation = 'shake 500ms ease-in-out';
  }
});
