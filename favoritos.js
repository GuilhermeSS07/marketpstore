const favoritesList = document.getElementById('favoritesList');
const emptyFavorites = document.getElementById('emptyFavorites');

function getFavoritos() {
  return JSON.parse(localStorage.getItem('favoritos') || '[]');
}

function saveFavoritos(items) {
  localStorage.setItem('favoritos', JSON.stringify(items));
}

function normalizeFavorites(favoritos) {
  return favoritos.map(item => {
    if (typeof item === 'string') {
      return { id: item };
    }
    return item;
  });
}

function renderFavorites() {
  const favoritos = normalizeFavorites(getFavoritos());
  const favoriteProducts = favoritos.filter(item => item && item.id);

  favoritesList.innerHTML = '';

  if (favoriteProducts.length === 0) {
    emptyFavorites.style.display = 'block';
    return;
  }

  emptyFavorites.style.display = 'none';

  favoriteProducts.forEach(product => {
    const card = document.createElement('div');
    card.className = 'favorite-card';

    card.innerHTML = `
      <img src="${product.img || 'https://via.placeholder.com/320x180?text=Produto'}" alt="${product.name || 'Produto favorito'}">
      <h3>${product.name || 'Produto favorito'}</h3>
      <p class="price">${product.price || ''}</p>
      <div class="actions">
         
        <button class="remove-fav" data-product-id="${product.id}">Remover</button>
      </div>
    `;

    favoritesList.appendChild(card);
  });

  const removeButtons = document.querySelectorAll('.remove-fav');
  removeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const id = this.dataset.productId;
      const updated = getFavoritos().filter(item => {
        if (typeof item === 'object') {
          return item.id !== id;
        }
        return item !== id;
      });
      saveFavoritos(updated);
      renderFavorites();
    });
  });
}

renderFavorites();
  