// =======================
// TOAST
// =======================
let favoriteToast =
  document.getElementById('pageMessage') ||
  document.getElementById('toast');

function createToastContainer() {

  if (!favoriteToast) {

    favoriteToast = document.createElement('div');

    favoriteToast.id = 'toast';
    favoriteToast.className = 'toast';

    document.body.appendChild(favoriteToast);
  }
}

function showMessage(text) {

  createToastContainer();

  favoriteToast.textContent = text;

  favoriteToast.classList.add('show');

  setTimeout(() => {
    favoriteToast.classList.remove('show');
  }, 2200);
}






// =======================
// FAVORITOS
// =======================
let favoriteButtons =
  document.querySelectorAll('.favorite-btn');

function getFavoritos() {
  return JSON.parse(localStorage.getItem('favoritos') || '[]');
}

function saveFavoritos(items) {
  localStorage.setItem('favoritos', JSON.stringify(items));
}

// 🔥 PEGAR DADOS DO PRODUTO
function getProductData(button) {

  const card = button.closest('.product-card');

  const link =
    card.querySelector('a[href*="index.html"]');

  const title =
    card.querySelector('h3')?.textContent.trim() || '';

  const price =
    card.querySelector('.price')?.textContent.trim() || '';

  let img = '';

  const imgElement = card.querySelector('img');

  if (imgElement) {
    img = imgElement.getAttribute('src') || imgElement.src;
  }

  const href =
    link ? link.getAttribute('href') : './index.html';

  const productId = button.dataset.productId;

  return {
    id: productId,
    name: title,
    price,
    img,
    href
  };
}

function toggleFavorite(event) {

  const button = event.currentTarget;

  const productId = button.dataset.productId;

  let favoritos = getFavoritos();

  const existe =
    favoritos.some(item => item.id == productId);

  if (existe) {

    favoritos =
      favoritos.filter(item => item.id != productId);

    button.classList.remove('active');

    showMessage('Removido dos favoritos');

  } else {

    const productData = getProductData(button);

    favoritos.push(productData);

    button.classList.add('active');

    showMessage('Adicionado aos favoritos');
  }

  saveFavoritos(favoritos);
}

function updateFavoriteButtons() {

  const favoritos = getFavoritos();

  favoriteButtons.forEach(button => {

    const productId = button.dataset.productId;

    const ativo =
      favoritos.some(item => item.id == productId);

    button.classList.toggle('active', ativo);

    button.setAttribute(
      'aria-pressed',
      ativo ? 'true' : 'false'
    );
  });
}


// =======================
// ATIVAR EVENTOS
// =======================
function ativarEventos() {

  favoriteButtons =
    document.querySelectorAll('.favorite-btn');

  if (favoriteButtons.length > 0) {

    favoriteButtons.forEach(button => {
      button.addEventListener('click', toggleFavorite);
    });

    updateFavoriteButtons();
  }
}


// =======================
// BUSCA
// =======================
const searchForm =
  document.getElementById('searchForm');

const searchInput =
  document.getElementById('searchInput');

if (searchForm) {

  searchForm.addEventListener('submit', function (e) {

    e.preventDefault();

    const query = searchInput.value.trim();

    if (query !== "") {

      // 🔥 REDIRECIONAMENTO COMPATÍVEL
      window.location.href =
        `./busca.html?q=${encodeURIComponent(query)}`;
    }
  });
}


// =======================
// INICIALIZAÇÃO
// =======================
document.addEventListener("DOMContentLoaded", function () {
  ativarEventos();
});


// =======================
// LOGIN HEADER
// =======================
document.addEventListener("DOMContentLoaded", async () => {

  const { data: { session } } =
    await supabase.auth.getSession();

  const btnLogin =
    document.getElementById("btnLogin");

  const btnCadastro =
    document.getElementById("btnCadastro");

  const userProfile =
    document.getElementById("userProfile");

  const userNameHeader =
    document.getElementById("userNameHeader");

  const btnLogout =
    document.getElementById("btnLogout");

  if (session) {

    const user = session.user;

    const nome =
      user.user_metadata?.nome || user.email;

    // mostra usuário
    userProfile.style.display = "flex";

    userNameHeader.textContent = nome;

    // esconde login/cadastro
    btnLogin.style.display = "none";
    btnCadastro.style.display = "none";

    btnLogout.style.display = "inline-flex";

  } else {

    // não logado
    userProfile.style.display = "none";

    btnLogout.style.display = "none";
  }

  // logout
  if (btnLogout) {

    btnLogout.addEventListener("click", async (e) => {

      e.preventDefault();

      await supabase.auth.signOut();

      // 🔥 REDIRECIONAMENTO COMPATÍVEL
      window.location.href = "./login.html";
    });
  }
});
