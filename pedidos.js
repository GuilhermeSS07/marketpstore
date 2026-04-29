document.addEventListener("DOMContentLoaded", function () {

  const container =
    document.getElementById("listaPedidos");

  const historico =
    JSON.parse(localStorage.getItem("historicoPagamentos")) || [];

  if (historico.length === 0) {

    container.innerHTML =
      "<p>Você ainda não fez nenhum pedido.</p>";

    return;
  }

  let html = "";

  historico.reverse().forEach(pedido => {

    html += `
      <div class="pedido-card">

        <h3>
          Pedido - ${pedido.data}
        </h3>

        <p>
          <strong>Pagamento:</strong>
          ${pedido.metodo}
        </p>

        <p>
          <strong>Total:</strong>
          R$ ${pedido.total
            .toFixed(2)
            .replace(".", ",")}
        </p>

        <div class="pedido-produtos">
    `;

    // 🔥 PRODUTOS DO PEDIDO
    pedido.produtos.forEach(produto => {

      html += `
        <div class="produto-item">

          <img
            src="${produto.imagem}"
            width="80"
          >

          <div>

            <p>${produto.nome}</p>

            <p>
              Quantidade:
              ${produto.quantidade}
            </p>

            ${
              produto.tamanho
                ? `<p>Tamanho: ${produto.tamanho}</p>`
                : ""
            }

          </div>

        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
});

function limparPedidos() {

  const confirmar = confirm(
    "Tem certeza que deseja apagar todos os pedidos?"
  );

  if (!confirmar) return;

  localStorage.removeItem("historicoPagamentos");

  alert("Histórico apagado!");

  // 🔥 RELOAD COMPATÍVEL
  window.location.href = "./pedidos.html";
}