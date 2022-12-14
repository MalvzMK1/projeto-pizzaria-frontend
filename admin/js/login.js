import { loginAdmin } from './utils/integrations/adminAxios.js';

const emailInput = document.querySelector('#admin-email-input');
const passwordInput = document.querySelector('#admin-password-input');
const submitLoginFormButton = document.querySelector(
  '#admin-login-submit-button'
);

const validateInputs = () => {
  if (emailInput.value === '' || passwordInput.value === '') return false;
  return true;
};

const validateLogin = async () => {
  try {
    const admin = { email: emailInput.value, password: passwordInput.value };
    const res = await loginAdmin(admin);
    return res;
  } catch (err) {
    console.log(err.message);
  }
};

submitLoginFormButton.addEventListener('click', async () => {
  let error = true;
  if (validateInputs()) {
    const validatedLogin = await validateLogin();
    if (validateLogin) {
      error = false;
      const ID_ADMIN = validatedLogin.data.admin.id;
      localStorage.setItem('ID_ADMIN', ID_ADMIN);
      location.href = './cms-home.html';
    }
    error = true;
  }
  if (error) {
    emailInput.style.borderBottom = '3px solid var(--red-500)';
    passwordInput.style.borderBottom = '3px solid var(--red-500)';
    submitLoginFormButton.style.animation = 'shake 500ms ease-in-out finite';
  }
});
