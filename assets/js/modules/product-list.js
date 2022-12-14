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

const changeProductSizes = (target) => {
  const sizeSelect = document.querySelector('#size-filter');
  let pizzaSizes = ['Grande', 'Broto'];
  let drinkSizes = ['350ml', '355ml', '400ml', '500ml', '1L', '1,5L'];

  sanitizeSelectOptions();
  if (target.textContent.toLowerCase().includes('pizza')) {
    pizzaSizes.forEach((size) => {
      const sizeOption = document.createElement('option');
      sizeOption.value = size;
      sizeOption.classList.add('size-option');
      sizeOption.textContent = size;
      sizeSelect.appendChild(sizeOption);
    });
  } else if (target.textContent.toLowerCase().includes('bebida')) {
    drinkSizes.forEach((size) => {
      const sizeOption = document.createElement('option');
      sizeOption.value = size;
      sizeOption.classList.add('size-option');
      sizeOption.textContent = size;
      sizeSelect.appendChild(sizeOption);
    });
  }
};

const sanitizeSelectOptions = () => {
  document.querySelectorAll('.size-option').forEach((option) => {
    option.remove();
  });
};
