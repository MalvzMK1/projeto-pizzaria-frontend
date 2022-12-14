import { getAllProducts } from './utils/integrations/productAxios.js';
import { loadAdminProfile } from './utils/loadAdminProfile.js';

loadAdminProfile();

const loadAllProducts = async () => {
  const { produtos } = await getAllProducts();

  produtos.forEach(async (item) => {
    const container = document.querySelector('tbody');

    const tableRow = document.createElement('tr');
    tableRow.classList.add('product-column');

    const productType = document.createElement('td');
    const productName = document.createElement('td');
    const productSize = document.createElement('td');
    const productIngredients = document.createElement('td');
    const productPrice = document.createElement('td');
    const productPhotoContainer = document.createElement('td');

    const productPhoto = document.createElement('img');
    productPhoto.classList.add('product-img');

    productType.textContent = item.categoria;
    productName.textContent = item.nome;
    productSize.textContent = item.tamanho;
    productIngredients.textContent = 'Ingredientes';
    productPrice.textContent = `R$ ${Number(item.preco).toFixed(2)}`;
    productPhoto.src = item.imagem;
    console.log(productPrice);

    productPhotoContainer.appendChild(productPhoto);
    tableRow.appendChild(productType);
    tableRow.appendChild(productName);
    tableRow.appendChild(productSize);
    tableRow.appendChild(productIngredients);
    tableRow.appendChild(productPrice);
    tableRow.appendChild(productPhotoContainer);
    container.appendChild(tableRow);
  });
};

loadAllProducts();
