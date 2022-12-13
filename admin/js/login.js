<<<<<<< HEAD
import { getAllAdmins } from './utils/adminFetch.js';

console.log(await getAllAdmins());
=======
import { loginAdmin } from './utils/adminAxios.js';
>>>>>>> e9f5eee534e45c2af3d3f1fa0a973962f66cc028

const emailInput = document.querySelector('#admin-email-input');
const passwordInput = document.querySelector('#admin-password-input');
const submitLoginFormButton = document.querySelector(
  '#admin-login-submit-button'
);

const validateInputs = () => {
  if (emailInput.value === '' || passwordInput.value === '') return false;
  return true;
};

<<<<<<< HEAD
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
=======
const validateLogin = async () => {
  try {
    const admin = { email: emailInput.value, password: passwordInput.value };
    const res = await loginAdmin(admin);
    return res;
  } catch (err) {
    console.log(err.message);
  }
>>>>>>> e9f5eee534e45c2af3d3f1fa0a973962f66cc028
};

submitLoginFormButton.addEventListener('click', async () => {
  let error = true;
  if (validateInputs()) {
<<<<<<< HEAD
    console.log(getFormValues());
    if (validateLogin()) {
      location.href = './cms-home.html';
    }
  } else {
=======
    const validatedLogin = await validateLogin();
    console.log(validatedLogin.data.data);
    if (validateLogin) {
      error = false;
      // location.href = './cms-home.html';
    }
  }
  if (error) {
>>>>>>> e9f5eee534e45c2af3d3f1fa0a973962f66cc028
    emailInput.style.borderBottom = '3px solid var(--red-500)';
    passwordInput.style.borderBottom = '3px solid var(--red-500)';
    submitLoginFormButton.style.animation = 'shake 500ms ease-in-out finite';
  }
});
