import { getImage } from './utils/imageReader.js';

const adminNameInput = document.querySelector('#new-admin-name');
const adminEmailInput = document.querySelector('#new-admin-email');
const adminPasswordInput = document.querySelector('#new-admin-password');
const adminConfirmPasswordInput = document.querySelector('#new-admin-password');
const adminPhotoInput = document.querySelector('#new-admin-photo');

getImage(adminPhotoInput);
