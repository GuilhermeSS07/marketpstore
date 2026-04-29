document.addEventListener("DOMContentLoaded", async () => {

  const nomeEl =
    document.getElementById("perfilName");

  const emailEl =
    document.getElementById("perfilEmail");

  const btnLogin =
    document.getElementById("btnLogin");

  const btnCadastro =
    document.getElementById("btnCadastro");

  const navbar =
    document.querySelector(".navbar");

  const userProfile =
    document.getElementById("userProfile");

  const userNameHeader =
    document.getElementById("userNameHeader");

  const btnLogoutHeader =
    document.getElementById("btnLogoutHeader");

  // 🔥 ESCONDER HEADER
  if (btnLogin) btnLogin.style.display = "none";

  if (btnCadastro) btnCadastro.style.display = "none";

  if (navbar) navbar.style.display = "none";

  // 🔐 sessão atual
  const { data: { session } } =
    await supabaseClient.auth.getSession();

  // não logado
  if (!session) {

    // 🔥 REDIRECIONAMENTO COMPATÍVEL
    window.location.href = "./login.html";

    return;
  }

  const user = session.user;

  // 👤 dados usuário
  const nome =
    user.user_metadata?.nome || user.email;

  nomeEl.textContent = nome;

  emailEl.textContent = user.email;

  // 👤 atualizar header
  if (userProfile)
    userProfile.style.display = "flex";

  if (userNameHeader)
    userNameHeader.textContent = nome;

  if (btnLogoutHeader)
    btnLogoutHeader.style.display = "inline-flex";

  // 🚪 logout
  async function logout() {

    await supabaseClient.auth.signOut();

    // 🔥 REDIRECIONAMENTO COMPATÍVEL
    window.location.href = "./login.html";
  }

  const btnHeader =
    document.getElementById("btnLogoutHeader");

  const btnPage =
    document.getElementById("btnLogoutPage");

  if (btnHeader) {

    btnHeader.addEventListener("click", (e) => {

      e.preventDefault();

      logout();
    });
  }

  if (btnPage) {
    btnPage.addEventListener("click", logout);
  }
});

document.addEventListener("DOMContentLoaded", () => {

  const btnPedidos =
    document.getElementById("btnPedidos");

  if (btnPedidos) {

    btnPedidos.addEventListener("click", () => {

      // 🔥 REDIRECIONAMENTO COMPATÍVEL
      window.location.href = "./pedidos.html";
    });

  } else {

    console.log("BOTÃO NÃO ENCONTRADO");
  }
});