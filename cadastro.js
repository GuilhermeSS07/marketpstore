// 🔗 CONEXÃO
const SUPABASE_URL = "https://wlmhopaoomhoqgewzcjp.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndsbWhvcGFvb21ob3FnZXd6Y2pwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY0MzY3NDgsImV4cCI6MjA5MjAxMjc0OH0.vN3JHKTAGETeLOflnSLWHl_s3UztT0CXX6TZyLZFw58"; // ⚠️ segurança: não expor em produção

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// 🎯 ELEMENTOS
const form = document.getElementById("cadastroForm");
const mensagem = document.getElementById("mensagem");
const botao = document.getElementById("btnCadastrar");

let enviando = false;

// 👁️ MOSTRAR / OCULTAR SENHA
document.querySelectorAll(".toggle-password").forEach((btn) => {
  btn.addEventListener("click", function () {

    const input = this.previousElementSibling;
    const icon = this.querySelector("i");

    if (input.type === "password") {

      input.type = "text";
      icon.classList.replace("fa-eye", "fa-eye-slash");

    } else {

      input.type = "password";
      icon.classList.replace("fa-eye-slash", "fa-eye");
    }
  });
});

// 🔐 TRADUZIR ERROS
function traduzirErro(error) {

  const msg = error.message;

  if (msg.includes("User already registered"))
    return "Este email já está cadastrado.";

  if (msg.includes("Invalid email"))
    return "Email inválido.";

  if (msg.includes("Password should be"))
    return "A senha deve ter no mínimo 6 caracteres.";

  if (msg.includes("Too many requests"))
    return "Muitas tentativas. Aguarde alguns minutos.";

  return "Erro ao cadastrar. Tente novamente.";
}

// 🔄 RESET ESTADO
function resetEstado(msg) {

  mensagem.innerHTML = msg;
  mensagem.style.color = "red";
  mensagem.style.backgroundColor = "#ffecec";

  botao.disabled = false;
  botao.innerText = "Cadastrar";

  enviando = false;
}

// 📝 CADASTRO
form.addEventListener("submit", async function (event) {

  event.preventDefault();

  if (enviando) return;

  enviando = true;

  botao.disabled = true;
  botao.innerText = "Cadastrando...";

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmarSenha").value;

  // validação
  if (!nome || !email || !senha || !confirmarSenha) {
    resetEstado("Preencha todos os campos.");
    return;
  }

  if (senha !== confirmarSenha) {
    resetEstado("As senhas não coincidem.");
    return;
  }

  // 🔐 CADASTRO NO AUTH
  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password: senha,
    options: {
      data: {
        nome: nome
      }
    }
  });

  if (error) {
    resetEstado(traduzirErro(error));
    return;
  }

  const user = data.user;

  // 🔥 SALVAR NA TABELA usuarios
  if (user) {

    const { error: erroInsert } = await supabaseClient
      .from("usuarios")
      .insert([
        {
          id: user.id,
          nome: nome,
          email: email
        }
      ]);

    if (erroInsert) {

      console.log("Erro ao salvar na tabela:", erroInsert);

      resetEstado("Conta criada, mas erro ao salvar perfil.");

      return;
    }
  }

  // ✅ SUCESSO
  mensagem.innerHTML = "Conta criada com sucesso!";
  mensagem.style.color = "green";
  mensagem.style.backgroundColor = "#ecffec";

  form.reset();

  // 🔥 REDIRECIONAMENTO COMPATÍVEL COM DEPLOY
  setTimeout(() => {
    window.location.href = "./login.html";
  }, 2000);
});