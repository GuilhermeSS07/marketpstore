const SUPABASE_URL = "https://wlmhopaoomhoqgewzcjp.supabase.co";

const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndsbWhvcGFvb21ob3FnZXd6Y2pwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY0MzY3NDgsImV4cCI6MjA5MjAxMjc0OH0.vN3JHKTAGETeLOflnSLWHl_s3UztT0CXX6TZyLZFw58"; // ⚠️ segurança: não expor em produção


const supabaseClient =
  supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
  );

// 🎯 ELEMENTOS
const form =
  document.getElementById("loginForm");

const mensagem =
  document.getElementById("mensagem");




      // limpa a URL (importante)
      window.history.replaceState({}, document.title, "/inicio.html");
    }
  }
});




// 🔐 TRADUZIR ERROS
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

  return "Erro ao fazer login. Tente novamente.";
}

// 🔐 LOGIN
if (form) {

  form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email =
      document
        .getElementById("email")
        .value
        .trim();

    const senha =
      document
        .getElementById("senha")
        .value
        .trim();

    if (!email || !senha) {

      mensagem.innerHTML =
        "Preencha todos os campos.";

      mensagem.style.color = "red";

      return;
    }

    mensagem.innerHTML = "Entrando...";
    mensagem.style.color = "blue";

    try {

      const { data, error } =
        await supabaseClient.auth
          .signInWithPassword({
            email: email,
            password: senha
          });

      if (error) {

        mensagem.innerHTML =
          traduzirErro(error);

        mensagem.style.color = "red";

        return;
      }

      console.log(
        "USUÁRIO LOGADO:",
        data.user
      );

      // salvar sessão
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      mensagem.innerHTML =
        "Login realizado com sucesso!";

      mensagem.style.color = "green";

      setTimeout(() => {

        window.location.href =
          "./index.html";

      }, 1000);

    } catch (err) {

      console.error(err);

      mensagem.innerHTML =
        "Erro inesperado ao fazer login.";

      mensagem.style.color = "red";
    }
  });
}

// 👁️ MOSTRAR/OCULTAR SENHA
function togglePassword(id, botao) {

  const input =
    document.getElementById(id);

  const icon =
    botao.querySelector("i");

  if (!input) return;

  if (input.type === "password") {

    input.type = "text";

    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");

  } else {

    input.type = "password";

    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

// 📩 MODAL ESQUECI SENHA
const modal =
  document.getElementById("forgotModal");

const closeBtn =
  document.querySelector(".close");

const forgotBtn =
  document.querySelector(".forgot-password");

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

// 🔁 RESETAR SENHA
const forgotForm =
  document.getElementById("forgotForm");

if (forgotForm) {

  forgotForm.addEventListener(
    "submit",
    async (e) => {

      e.preventDefault();

      const email =
        document
          .getElementById("resetEmail")
          .value
          .trim();

      const msg =
        document.getElementById(
          "resetMessage"
        );

      msg.innerHTML =
        "Enviando email...";

      msg.style.color = "blue";

      const { error } =
        await supabaseClient.auth
          .resetPasswordForEmail(email);

      if (error) {

        if (
          error.message.includes(
            "User not found"
          )
        ) {

          msg.innerHTML =
            "Email não encontrado.";

        } else {

          msg.innerHTML =
            "Erro ao enviar email de recuperação.";
        }

        msg.style.color = "red";

      } else {

        msg.innerHTML =
          "Email de recuperação enviado com sucesso!";

        msg.style.color = "green";
      }
    }
  );
}
}
