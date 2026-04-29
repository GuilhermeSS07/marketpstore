var produtoDireto = JSON.parse(localStorage.getItem("compraDireta"));
var carrinho = JSON.parse(localStorage.getItem("carrinho"));

var total = 0;
var metodoSelecionado = null;

// =======================
// INICIALIZAÇÃO
// =======================
document.addEventListener("DOMContentLoaded", function () {

  var container = document.getElementById("checkout");

  console.log("Carrinho:", carrinho);
  console.log("Compra direta:", produtoDireto);

  if (carrinho && carrinho.length > 0) {

    renderProduto(carrinho);

  } else if (produtoDireto) {

    renderProduto([produtoDireto]);

  } else {

    container.innerHTML = "<p>Nenhum produto selecionado.</p>";
  }
});

// =======================
// RENDER PRODUTOS
// =======================
function renderProduto(lista) {

  total = 0;

  var html = "";

  lista.forEach(produto => {

    var subtotal = produto.preco * produto.quantidade;

    total += subtotal;

    html += `
      <div class="product-item">

        <img src="${produto.imagem}" class="checkout-img" width="100">

        <div class="product-info">

          <h4>${produto.nome}</h4>

          <p>Quantidade: ${produto.quantidade}</p>

          ${produto.tamanho ? `<p>Tamanho: ${produto.tamanho}</p>` : ""}

          <p>
            <strong>
              Subtotal: R$ ${subtotal.toFixed(2).replace(".", ",")}
            </strong>
          </p>

        </div>
      </div>
    `;
  });

  html += `
    <div class="checkout-total">
      <h3>
        Total a pagar: 
        R$ ${total.toFixed(2).replace(".", ",")}
      </h3>
    </div>
  `;

  document.getElementById("checkout").innerHTML = html;
}

// =======================
// SELECIONAR PAGAMENTO
// =======================
function selecionarPagamento(metodo, event) {

  metodoSelecionado = metodo;

  var formContainer = document.getElementById("payment-form-container");
  var messageDiv = document.getElementById("payment-message");

  messageDiv.innerHTML = "";

  document.querySelectorAll(".payment-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  if (event) {
    event.target.classList.add("active");
  }

  switch (metodo) {

    case "credito":
      formContainer.innerHTML = getFormCartaoCredito();
      break;

    case "debito":
      formContainer.innerHTML = getFormCartaoDebito();
      break;

    case "pix":
      formContainer.innerHTML = getFormPIX();
      break;

    case "boleto":
      formContainer.innerHTML = getFormBoleto();
      break;
  }
}

// =======================
// FORMULÁRIOS
// =======================
function getFormCartaoCredito() {

  return `
    <form class="payment-form" onsubmit="processarPagamentoCredito(event)">

      <h3>Cartão de Crédito</h3>

      <input type="text" placeholder="Nome do titular" required>

      <input 
        type="text" 
        placeholder="Número do cartão"
        maxlength="19"
        required
        onkeyup="formatarCartao(this)"
      >

      <div class="form-row">

        <input 
          type="text"
          placeholder="MM/AA"
          maxlength="5"
          required
          onkeyup="formatarVencimento(this)"
        >

        <input type="text" placeholder="CVV" maxlength="3" required>

      </div>

      <button type="submit" class="btn-pay">
        Pagar R$ ${total.toFixed(2).replace(".", ",")}
      </button>

    </form>
  `;
}

function getFormCartaoDebito() {

  return `
    <form class="payment-form" onsubmit="processarPagamentoDebito(event)">

      <h3>Cartão de Débito</h3>

      <input type="text" placeholder="Nome do titular" required>

      <input 
        type="text"
        placeholder="Número do cartão"
        maxlength="19"
        required
        onkeyup="formatarCartao(this)"
      >

      <div class="form-row">

        <input 
          type="text"
          placeholder="MM/AA"
          maxlength="5"
          required
          onkeyup="formatarVencimento(this)"
        >

        <input type="text" placeholder="CVV" maxlength="3" required>

      </div>

      <button type="submit" class="btn-pay">
        Pagar R$ ${total.toFixed(2).replace(".", ",")}
      </button>

    </form>
  `;
}

function getFormPIX() {

  var codigoPIX = gerarCodigoPIX();

  return `
    <form class="payment-form" onsubmit="processarPagamentoPIX(event)">

      <h3>PIX</h3>

      <img src="./qr-code.png.webp" class="pix-qr">

      <input type="text" value="${codigoPIX}" readonly>

      <button type="button" onclick="copiarPIX()">
        Copiar
      </button>

      <label>
        <input type="checkbox" id="pix-confirmado" required>
        Já paguei
      </label>

      <button type="submit" class="btn-pay">
        Confirmar PIX
      </button>

    </form>
  `;
}

function getFormBoleto() {

  return `
    <form class="payment-form" onsubmit="processarPagamentoBoleto(event)">

      <h3>Boleto</h3>

      <p>
        Valor: 
        R$ ${total.toFixed(2).replace(".", ",")}
      </p>

      <label>
        <input type="checkbox" id="boleto-confirmado" required>
        Já paguei
      </label>

      <button type="submit" class="btn-pay">
        Confirmar
      </button>

    </form>
  `;
}

// =======================
// PROCESSAMENTO
// =======================
function processarPagamentoCredito(e) {

  e.preventDefault();

  salvarTransacao("Crédito");

  finalizarCompra();
}

function processarPagamentoDebito(e) {

  e.preventDefault();

  salvarTransacao("Débito");

  finalizarCompra();
}

function processarPagamentoPIX(e) {

  e.preventDefault();

  if (!document.getElementById("pix-confirmado").checked) {

    return alert("Confirme o pagamento PIX");
  }

  salvarTransacao("PIX");

  finalizarCompra();
}

function processarPagamentoBoleto(e) {

  e.preventDefault();

  if (!document.getElementById("boleto-confirmado").checked) {

    return alert("Confirme o pagamento");
  }

  salvarTransacao("Boleto");

  finalizarCompra();
}

// =======================
// SALVAR HISTÓRICO
// =======================
function salvarTransacao(metodo) {

  var produtosFinal = produtoDireto
    ? [produtoDireto]
    : carrinho;

  var transacao = {

    metodo: metodo,

    total: total,

    data: new Date().toLocaleString("pt-BR"),

    produtos: produtosFinal
  };

  var historico =
    JSON.parse(localStorage.getItem("historicoPagamentos")) || [];

  historico.push(transacao);

  localStorage.setItem(
    "historicoPagamentos",
    JSON.stringify(historico)
  );
}

// =======================
// FINALIZAR
// =======================
function finalizarCompra() {

  alert("Compra realizada!");

  localStorage.removeItem("compraDireta");
  localStorage.removeItem("carrinho");

  // 🔥 REDIRECIONAMENTO COMPATÍVEL COM DEPLOY
  window.location.href = "./index.html";
}

// =======================
// AUXILIARES
// =======================
function formatarCartao(input) {

  var value = input.value.replace(/\s/g, "");

  input.value =
    value.match(/.{1,4}/g)?.join(" ") || value;
}

function formatarVencimento(input) {

  var value = input.value.replace(/\D/g, "");

  if (value.length >= 2) {

    input.value =
      value.slice(0, 2) +
      "/" +
      value.slice(2, 4);

  } else {

    input.value = value;
  }
}

function gerarCodigoPIX() {

  return Math.random()
    .toString(36)
    .substring(2);
}

function copiarPIX() {

  navigator.clipboard.writeText(
    document.querySelector("input[readonly]").value
  );

  alert("Copiado!");
}