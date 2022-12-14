import listenProductTypes from './modules/product-list.js';
import './modules/product-card.js';
import {
  getDrinks,
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


const { pizzas } = await getPizzas();
console.log(pizzas);

pizzas.forEach((productInfo) => {
  const container = document.querySelector('.menu-items-container');

  const productCard = document.createElement('product-card');
  productCard.setAttribute('name', productInfo.nome);
  productCard.setAttribute('price', Number(productInfo.preco).toFixed(2));
  productCard.setAttribute('photo', productInfo.imagem);
  productCard.setAttribute('type', productInfo.tipo_produto);

  container.appendChild(productCard);
});
