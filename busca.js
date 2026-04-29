// =======================
// PEGAR TEXTO DA BUSCA
// =======================
function getQuery() {
  const params = new URLSearchParams(window.location.search);
  return params.get('q')?.toLowerCase() || '';
}


// =======================
// TOAST
// =======================
let toast = document.getElementById('toast');

function showMessage(text) {
  if (!toast) return;

  toast.textContent = text;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}


// =======================
// FAVORITOS
// =======================
function getFavoritos() {
  return JSON.parse(localStorage.getItem('favoritos') || '[]');
}

function saveFavoritos(fav) {
  localStorage.setItem('favoritos', JSON.stringify(fav));
}

function toggleFavorite(e) {
  const id = e.currentTarget.dataset.productId;
  let fav = getFavoritos();

  const existe = fav.some(p => p.id == id);

  if (existe) {
    fav = fav.filter(p => p.id != id);
    showMessage('Removido dos favoritos');
  } else {
    const produto = produtos.find(p => p.id == id);
    fav.push(produto);
    showMessage('Adicionado aos favoritos');
  }

  saveFavoritos(fav);
  atualizarBotoesFavoritos();
}

function atualizarBotoesFavoritos() {
  const fav = getFavoritos();

  document.querySelectorAll('.favorite-btn').forEach(btn => {
    const id = btn.dataset.productId;
    const ativo = fav.some(p => p.id == id);

    btn.classList.toggle('active', ativo);
  });
}


// =======================
// RENDERIZAR RESULTADOS
// =======================
function renderizar() {
  const query = getQuery();
  const container = document.getElementById('resultadoBusca');

  if (!container) return;

  const filtrados = produtos.filter(p =>
    p.nome.toLowerCase().includes(query) ||
    p.categoria.toLowerCase().includes(query)
  );

  container.innerHTML = '';

  if (filtrados.length === 0) {
    container.innerHTML = "<p>Nenhum produto encontrado</p>";
    return;
  }

  filtrados.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
      <img src="${p.imagem}" alt="${p.nome}">

      <button class="favorite-btn" data-product-id="${p.id}">
        <i class='bx bx-heart'></i>
      </button>

      <h3>${p.nome}</h3>

      <p class="price">R$ ${p.preco.toFixed(2)}</p>

      <a href="produto.html?id=${p.id}" class="btn">Ver Detalhes</a>
    `;

    container.appendChild(card);
  });

  ativarEventos();
}


// =======================
// ATIVAR EVENTOS
// =======================
function ativarEventos() {
  document.querySelectorAll('.favorite-btn').forEach(btn => {
    btn.addEventListener('click', toggleFavorite);
  });

  atualizarBotoesFavoritos();
}


// =======================
// INICIAR
// =======================
document.addEventListener("DOMContentLoaded", renderizar);