function getCarrinho() {

    try {
        var dados = JSON.parse(localStorage.getItem("carrinho")) || [];
    } catch (e) {
        dados = [];
    }

    var valido = [];

    for (var i = 0; i < dados.length; i++) {

        var item = dados[i];

        if (
            item &&
            item.id != null &&
            item.nome &&
            item.preco != null &&
            item.quantidade != null
        ) {
            valido.push(item);
        }
    }

    if (valido.length !== dados.length) {
        localStorage.setItem("carrinho", JSON.stringify(valido));
    }

    return valido;
}

function salvarCarrinho(carrinho) {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarContador();
}

function atualizarContador() {

    var carrinho = getCarrinho();
    var totalItens = 0;

    for (var i = 0; i < carrinho.length; i++) {
        totalItens += carrinho[i].quantidade;
    }

    var contador = document.getElementById("cart-count");

    if (contador) {
        contador.innerText = totalItens;
    }
}

function adicionarAoCarrinho(id, nome, preco, imagem) {

    var carrinho = getCarrinho();
    var encontrado = false;

    for (var i = 0; i < carrinho.length; i++) {

        if (carrinho[i].id === id) {

            carrinho[i].quantidade += 1;
            encontrado = true;
            break;
        }
    }

    if (!encontrado) {

        carrinho.push({
            id: id,
            nome: nome,
            preco: preco,
            imagem: imagem,
            quantidade: 1
        });
    }

    salvarCarrinho(carrinho);

    mostrarToast(nome + " adicionado ao carrinho!");
}

function removerDoCarrinho(id) {

    var carrinho = getCarrinho();
    var novoCarrinho = [];

    for (var i = 0; i < carrinho.length; i++) {

        if (carrinho[i].id !== id) {
            novoCarrinho.push(carrinho[i]);
        }
    }

    salvarCarrinho(novoCarrinho);

    renderizarCarrinho();
}

function alterarQuantidade(id, delta) {

    var carrinho = getCarrinho();

    for (var i = 0; i < carrinho.length; i++) {

        if (carrinho[i].id === id) {

            carrinho[i].quantidade += delta;

            // LIMITE MÍNIMO
            if (carrinho[i].quantidade < 1) {
                carrinho[i].quantidade = 1;
            }

            // LIMITE MÁXIMO
            if (carrinho[i].quantidade > 10) {
                carrinho[i].quantidade = 10;
            }

            break;
        }
    }

    salvarCarrinho(carrinho);

    renderizarCarrinho();
}

function calcularTotal() {

    var carrinho = getCarrinho();
    var total = 0;

    for (var i = 0; i < carrinho.length; i++) {
        total += carrinho[i].preco * carrinho[i].quantidade;
    }

    return total;
}

function formatarPreco(valor) {

    return "R$ " +
        valor
            .toFixed(2)
            .replace(".", ",")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function renderizarCarrinho() {

    var listaCarrinho = document.getElementById("cart-items");
    var totalElement = document.getElementById("cart-total");
    var carrinhoVazio = document.getElementById("cart-empty");
    var carrinhoConteudo = document.getElementById("cart-content");

    if (!listaCarrinho) return;

    var carrinho = getCarrinho();

    // 🔴 Carrinho vazio
    if (carrinho.length === 0) {

        if (carrinhoVazio) carrinhoVazio.style.display = "block";
        if (carrinhoConteudo) carrinhoConteudo.style.display = "none";

        listaCarrinho.innerHTML = "";

        return;
    }

    // 🟢 Carrinho com produtos
    if (carrinhoVazio) carrinhoVazio.style.display = "none";
    if (carrinhoConteudo) carrinhoConteudo.style.display = "block";

    var html = "";

    for (var i = 0; i < carrinho.length; i++) {

        var item = carrinho[i];
        var subtotal = item.preco * item.quantidade;

        html += `
        <div class="cart-item">

            <img src="${item.imagem}" width="80">

            <h3>${item.nome}</h3>

            <p>${formatarPreco(item.preco)}</p>

            <div>
                <button onclick="alterarQuantidade(${item.id}, -1)">-</button>

                <span>${item.quantidade}</span>

                <button onclick="alterarQuantidade(${item.id}, 1)">+</button>
            </div>

            <p>${formatarPreco(subtotal)}</p>

            <button onclick="removerDoCarrinho(${item.id})">X</button>

        </div>
        `;
    }

    listaCarrinho.innerHTML = html;

    if (totalElement) {
        totalElement.innerText = formatarPreco(calcularTotal());
    }
}

function limparCarrinho() {

    localStorage.removeItem("carrinho");

    atualizarContador();

    renderizarCarrinho();
}

function mostrarToast(msg) {

    var toast = document.getElementById("toast");

    if (!toast) return;

    toast.innerText = msg;

    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 2000);
}

// 🚀 INICIALIZAÇÃO
document.addEventListener("DOMContentLoaded", function () {

    atualizarContador();

    renderizarCarrinho();
});

function finalizarCompraCarrinho() {

    var carrinho = getCarrinho();

    if (carrinho.length === 0) {

        alert("Seu carrinho está vazio!");

        return;
    }

    // limpa compra direta anterior
    localStorage.removeItem("compraDireta");

    // salva carrinho atualizado
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    // 🔥 REDIRECIONAMENTO COMPATÍVEL COM DEPLOY
    window.location.href = "./checkout.html";
}