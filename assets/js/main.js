import listenProductTypes from './modules/product-list.js';
import './modules/product-card.js';
import {
  getDrinks,
  getPizzaById,
  getPizzas,
  getProducts,
} from './integrations/productAxios.js';
import { newMessage } from './integrations/messageAxios.js';

listenProductTypes();

// const type = document.querySelector('.selected');

// type.addEventListener('change', () => {
//   type.textContent = type.textContent;
//   console.log(type.textContent);
// });

const { bebidas } = await getDrinks();
console.log(bebidas);

const { pizzas } = await getPizzas();
console.log(pizzas);

pizzas.forEach((productInfo) => {
  const container = document.querySelector('.menu-items-container');

  const productCard = document.createElement('product-card');
  productCard.setAttribute('name', productInfo.nome);
  productCard.setAttribute('price', Number(productInfo.preco).toFixed(2));
  productCard.setAttribute('photo', productInfo.imagem);
  productCard.setAttribute('type', 'pizza');
  productCard.setAttribute('id_produto', productInfo.id);

  container.appendChild(productCard);
});

const validateMessageForm = () => {
  const name = document.querySelector('#contact-name').value;
  const cellphoneNumber = document.querySelector(
    '#contact-cellphone-number'
  ).value;
  const email = document.querySelector('#contact-email').value;
  const critic = document.querySelector('#critic');
  const sugestion = document.querySelector('#sugestion');
  const message = document.querySelector('#message').value;

  if (name === '' || cellphoneNumber === '' || email === '' || message === '')
    return false;
  if (!critic.checked && !sugestion.checked) return false;
  return true;
};

const getMessageForm = () => {
  const name = document.querySelector('#contact-name').value;
  const cellphoneNumber = document.querySelector(
    '#contact-cellphone-number'
  ).value;
  const phoneNumber = document.querySelector('#contact-phone-number').value;
  const email = document.querySelector('#contact-email').value;

  const critic = document.querySelector('#critic');
  const sugestion = document.querySelector('#sugestion');
  let messageType;

  if (critic.checked) messageType = 2;
  if (sugestion.checked) messageType = 1;

  const message = document.querySelector('#message').value;

  const messageJSON = {
    name,
    cellphoneNumber,
    phoneNumber,
    email,
    messageType,
    message,
  };

  return messageJSON;
};

document
  .querySelector('#message-submit-button')
  .addEventListener('click', (el) => {
    if (validateMessageForm()) {
      const messageFormJSON = getMessageForm();
      const response = newMessage(messageFormJSON);
      if (response) {
        alert('Mensagem enviada com sucesso!');
      } else alert('Ocorreu um erro inesperado');
    } else alert('Preencha os campos');
  });

document.querySelectorAll('product-card').forEach(async (item) => {
  item.addEventListener('click', async (el) => {
    el.preventDefault();
    const idProduct = el.target.getAttribute('id_produto');
    localStorage.setItem('ID_produto', idProduct);
    console.log(localStorage.getItem('ID_produto'));
  });
});
