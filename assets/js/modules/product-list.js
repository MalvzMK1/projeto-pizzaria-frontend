import { getPizzas, getDrinks } from '../integrations/productAxios.js';
import { renderProducts } from '../utils/renderProducts.js';

export default function listenProductTypes() {
  let productListElements = document.querySelectorAll('.product-type');
  renderProducts();
  productListElements.forEach((element) => {
    element.addEventListener('click', (el) => {
      renderProducts();
      changeProductSizes(el.target);
      if (!element.classList.contains('selected')) {
        productListElements.forEach((element) => {
          element.classList.contains('selected')
            ? element.classList.remove('selected')
            : false;
        });
        element.classList.add('selected');
        document.querySelector('.product-type-title').textContent =
          element.textContent;
      } else if (element.classList.contains('selected'))
        element.classList.remove('selected');
    });
  });
}

const changeProductSizes = async (target) => {
  const sizeSelect = document.querySelector('#size-filter');
  const sizes = new Array();

  sanitizeSelectOptions();
  if (target.textContent.toLowerCase().includes('pizza')) {
    const { pizzas } = await getPizzas();
    pizzas.forEach((item) => {
      if (!sizes.includes(item.tamanho)) sizes.push(item.tamanho);
    });
  } else if (target.textContent.toLowerCase().includes('bebida')) {
    const { bebidas } = await getDrinks();
    bebidas.forEach((item) => {
      if (!sizes.includes(item.tamanho)) sizes.push(item.tamanho);
    });
    // drinkSizes.forEach((size) => {
    //   const sizeOption = document.createElement('option');
    //   sizeOption.value = size;
    //   sizeOption.classList.add('size-option');
    //   sizeOption.textContent = size;
    //   sizeSelect.appendChild(sizeOption);
    // });
  }
  sizes.forEach((item) => {
    const sizeOption = document.createElement('option');
    sizeOption.value = item;
    sizeOption.classList.add('size-option');
    sizeOption.textContent = item;
    sizeSelect.appendChild(sizeOption);
  });
};

const sanitizeSelectOptions = () => {
  document.querySelectorAll('.size-option').forEach((option) => {
    option.remove();
  });
};
