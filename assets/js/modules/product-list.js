export default function listenProductTypes () {
  let productListElements = document.querySelectorAll('.product-type');
  
  productListElements.forEach(element => {
    element.addEventListener('click', () => {
      if (!element.classList.contains('selected')) {
        productListElements.forEach(element => {
          element.classList.contains('selected') ? element.classList.remove('selected') : false
        });
        element.classList.add('selected');
        document.querySelector('.product-type-title').textContent = element.textContent;
      }
      else if (element.classList.contains('selected'))
        element.classList.remove('selected');
    });
  });
}