export default function listenFavoriteButtons () {
  let favoriteButtons = document.querySelectorAll('.favorite-button');
  
  favoriteButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.classList.contains('fa-regular')) {
        button.classList.remove('fa-regular');
        button.classList.add('fa-solid');
        button.style.color = 'var(--red-500)';
        // set as favorite
      }
      else if (button.classList.contains('fa-solid')) {
        button.classList.remove('fa-solid');
        button.classList.add('fa-regular');
        button.style.color = 'var(--white-500)';
        // remove favorite
      }
    });
  });
}