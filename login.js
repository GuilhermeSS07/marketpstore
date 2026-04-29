// 🔗 CONEXÃO COM SUPABASE
const SUPABASE_URL = "https://wlmhopaoomhoqgewzcjp.supabase.co";

const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndsbWhvcGFvb21ob2FnZXd6Y2pwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY0MzY3NDgsImV4cCI6MjA5MjAxMjc0OH0.vN3JHKTAGETeLOflnSLWHl_s3UztT0CXX6TZyLZFw58";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// 🎯 ELEMENTOS
const form = document.getElementById("loginForm");
const mensagem = document.getElementById("mensagem");


// =======================
// 🔥 RECOVERY / LOGIN LINK (EMAIL)
// =======================
document.addEventListener("DOMContentLoaded", async () => {
  const hash = window.location.hash;

  if (hash.includes("access_token")) {
    const params = new URLSearchParams(hash.replace("#", "?"));

    const access_token = params.get("access_token");
    const refresh_token = params.get("refresh_token");

    if (access_token && refresh_token) {
      const { error } = await supabaseClient.auth.setSession({
        access_token,
        refresh_token,
      });

      if (!error) {
        // limpa URL
        window.history.replaceState({}, document.title, "/index.html");

        window.location.href = "index.html";
      } else {
        console.log("Erro sessão:", error.message);
      }
    }
  }
});


// =======================
// 🔐 ERROS
// =======================
function traduzirErro(error) {
  const msg = error.message || "";

  if (msg.includes("Invalid login credentials"))
    return "Email ou senha incorretos.";

  if (msg.includes("Email not confirmed"))
    return "Confirme seu email antes de entrar.";

  if (msg.includes("User not found"))
    return "Usuário não encontrado.";

  if (msg.includes("Password should be"))
    return "A senha deve ter pelo menos 6 caracteres.";

  return "Erro ao fazer login.";
}


// =======================
// 🔐 LOGIN
// =======================
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (!email || !senha) {
      mensagem.innerHTML = "Preencha todos os campos.";
      mensagem.style.color = "red";
      return;
    }

    mensagem.innerHTML = "Entrando...";
    mensagem.style.color = "blue";

    const { data, error } =
      await supabaseClient.auth.signInWithPassword({
        email,
        password: senha,
      });

    if (error) {
      mensagem.innerHTML = traduzirErro(error);
      mensagem.style.color = "red";
      return;
    }

    mensagem.innerHTML = "Login realizado com sucesso!";
    mensagem.style.color = "green";

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  });
}


// =======================
// 👁️ SENHA
// =======================
function togglePassword(id, botao) {
  const input = document.getElementById(id);
  const icon = botao.querySelector("i");

  if (!input) return;

  if (input.type === "password") {
    input.type = "text";
    icon.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.replace("fa-eye-slash", "fa-eye");
  }
}


// =======================
// 🔁 ESQUECI SENHA
// =======================
const modal = document.getElementById("forgotModal");
const closeBtn = document.querySelector(".close");
const forgotBtn = document.querySelector(".forgot-password");

if (forgotBtn) {
  forgotBtn.onclick = () => {
    modal.style.display = "flex";
  };
}

if (closeBtn) {
  closeBtn.onclick = () => {
    modal.style.display = "none";
  };
}

const forgotForm = document.getElementById("forgotForm");

if (forgotForm) {
  forgotForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("resetEmail").value.trim();
    const msg = document.getElementById("resetMessage");

    msg.innerHTML = "Enviando email...";
    msg.style.color = "blue";

    const { error } =
      await supabaseClient.auth.resetPasswordForEmail(email);

    if (error) {
      msg.innerHTML = "Erro ao enviar email.";
      msg.style.color = "red";
    } else {
      msg.innerHTML = "Email enviado!";
      msg.style.color = "green";
    }
  });
}
