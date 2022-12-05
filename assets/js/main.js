import listenProductTypes from './modules/product-list.js';
import './modules/product-card.js';
import { fetchProducts } from './modules/fetchs.js';

const products = await fetchProducts();
console.log(await products);

products.forEach((productInfo) => {
  const container = document.querySelector('.menu-items-container');

  const productCard = document.createElement('product-card');
  productCard.setAttribute('name', productInfo.nome);
  productCard.setAttribute('price', productInfo.preco);
  productCard.setAttribute('photo', productInfo.imagem);
  productCard.setAttribute('type', productInfo.tipo_produto);

  container.appendChild(productCard);
});

listenProductTypes();
