var produtos = [
  {
    id: 1,
    nome: "Smartphone",
    preco: 1299.0,
    imagem: "https://m.media-amazon.com/images/I/61-4TWjrXHL._AC_SX679_.jpg",
    descricao:
      "Smartphone com tela de alta resolucao, camera de 48MP, bateria de longa duracao e processador de ultima geracao.",
    categoria: "Eletrônicos",
  },

  {
    id: 2,
    nome: "Smart TV 50 polegadas",
    preco: 1999.0,
    imagem: "https://tse3.mm.bing.net/th/id/OIP.VJxXIlELkBBoOwzpN5V4dwHaE8",
    descricao: "Smart TV 4K com HDR, sistema inteligente e apps de streaming.",
    categoria: "Eletrônicos",
  },

  {
    id: 3,
    nome: "Notebook",
    preco: 3200.0,
    imagem: "https://m.media-amazon.com/images/I/713GzsYLBbL._AC_SX679_.jpg",
    descricao:
      "Notebook com tela IPS 16”, ótimo desempenho e carregamento rápido.",
    categoria: "Eletrônicos",
  },

  {
    id: 4,
    nome: "Fone Bluetooth",
    preco: 120.0,
    precoOriginal: 199.0,
    desconto: 39,
    imagem: "https://m.media-amazon.com/images/I/61IwiGW1fJL._AC_SY679_.jpg",
    descricao:
      "Fone de ouvido Bluetooth com cancelamento de ruido ativo, som de alta fidelidade e bateria de ate 30 horas. Confortavel para uso prolongado.",
    categoria: "Eletrônicos",
  },

  {
    id: 5,
    nome: "Bola de futebol",
    preco: 89.9,
    precoOriginal: 120,
    desconto: 25,
    imagem: "https://m.media-amazon.com/images/I/615MNWVws8L._AC_SX679_.jpg",
    descricao:
      "Bola de futebol resistente e durável, com ótimo controle e precisão. Possui design moderno e acabamento de qualidade. 👉 Ideal para jogos e treinos, garantindo desempenho e diversão.",
    categoria: "Esportes",
  },

  {
    id: 6,
    nome: "Sofá 2 lugares",
    preco: 1799.0,
    precoOriginal: 2099.0,
    desconto: 14,
    imagem: "https://m.media-amazon.com/images/I/51VNtZqvDHL._AC_SX679_.jpg",
    descricao:
      "Sofá 2 lugares confortável e elegante, com estofado macio e estrutura resistente. Possui design moderno que se adapta a diversos ambientes.👉 Ideal para salas compactas, unindo conforto e praticidade no dia a dia.",
    categoria: "Casa",
  },

 {
    id: 7,
    nome: "Smartphone",
    preco: 899.0,
    imagem: "https://m.media-amazon.com/images/I/51Rb0cGTweL._AC_SX679_.jpg",
    descricao:
      "Smartphone com tela de alta resolucao, camera de 48MP, bateria de longa duracao e processador de ultima geracao.",
    categoria: "Eletrônicos",
  },

  {
    id: 8,
    nome: "Fone Bluetooth",
    preco: 279.0,
    imagem: "https://m.media-amazon.com/images/I/61DFgTmj9xL._AC_SX522_.jpg",
    descricao:
      "Fone de ouvido Bluetooth com cancelamento de ruido ativo, som de alta fidelidade e bateria de ate 30 horas. Confortavel para uso prolongado.",
    categoria: "Eletrônicos",
  },


  {
    id: 9,
    nome: "Smartwatch",
    preco: 214.0,
    imagem: "https://m.media-amazon.com/images/I/61SzOmxnVDL._AC_SX679_.jpg",
    descricao:
      "Receba notificações, monitore sua saúde e acompanhe suas atividades direto no pulso. Moderno, prático e perfeito para o dia a dia! 🚀",
    categoria: "Eletrônicos",
  },

  {
    id: 11,
    nome: "Smart TV 32 polegadas",
    preco: 976.0,
    imagem: "https://m.media-amazon.com/images/I/61XOOeYwCCL._AC_SX522_.jpg",
    descricao:
      "A Smart TV oferece imagem de alta qualidade e acesso direto a aplicativos como streaming, vídeos e músicas. Com conexão à internet, você assiste seus conteúdos favoritos com praticidade, som imersivo e ótima resolução. Ideal para transformar sua experiência de entretenimento em casa!",
    categoria: "Eletrônicos",
  },

  {
    id: 12,
    nome: "Headset Gamer",
    preco: 159.99,
    imagem: "https://m.media-amazon.com/images/I/71+kXnOiM2L._AC_SX679_.jpg",
    descricao:
      "Som imersivo e comunicação clara para suas partidas! O headset gamer conta com áudio de qualidade, microfone ajustável e design confortável para longas horas de uso. Ideal para quem busca desempenho e vantagem nos jogos.",
    categoria: "Eletrônicos",
  },

   {
    id: 13,
    nome: "Tablet 10 polegadas",
    preco: 899.00,
    imagem: "https://m.media-amazon.com/images/I/613G4H7ObTL._AC_SX679_.jpg",
    descricao:
      "Ideal para estudos, trabalho e entretenimento, o tablet oferece tela de alta qualidade, desempenho rápido e fácil portabilidade. Perfeito para navegar, assistir, jogar e realizar tarefas do dia a dia com praticidade.",
    categoria: "Eletrônicos",
  },

  {
    id: 14,
    nome: "Caixa de Som Bluetooth",
    preco: 669.00,
    imagem: "https://m.media-amazon.com/images/I/61S6CABfB7L._AC_SX679_.jpg",
    descricao:
      "Leve sua música para qualquer lugar! Com conexão sem fio, som potente e bateria de longa duração, é perfeita para festas, viagens ou uso no dia a dia. Compacta, prática e com qualidade incrível.",
    categoria: "Eletrônicos",
  },

  {
    id: 15,
    nome: "Camiseta Masculina",
    preco: 24.99,
    imagem: "https://m.media-amazon.com/images/I/31W0xV+wyVL._AC_.jpg",
    descricao:
      "Estilo e conforto para o dia a dia! Feita com tecido macio e de alta qualidade, a camiseta masculina combina com qualquer ocasião. Perfeita para um visual moderno e versátil.",
    categoria: "Moda",
  },


  {
    id: 16,
    nome: "Tênis",
    preco: 65.00,
    imagem: "https://m.media-amazon.com/images/I/71rz8m5QbHL._AC_SX575_.jpg",
    descricao:
      "Perfeito para o dia a dia, o tênis combina estilo e conforto em qualquer ocasião. Leve, resistente e fácil de combinar com diversos looks",
    categoria: "Moda",
  },

  {
    id: 17,
    nome: "Jaqueta Jeans",
    preco: 159.90,
    imagem: "https://marenzzo.com.br/cdn/shop/files/S3cf78cccda594c5882480c2c2aac6ad0o_700x.webp?v=1772559054",
    descricao:
      "Clássica e versátil, a jaqueta jeans é perfeita para compor looks modernos em qualquer estação. Confortável, resistente e fácil de combinar com diferentes estilos",
    categoria: "Moda",
  },

  {
    id: 18,
    nome: "Calça jeans Masculina",
    preco: 74.90,
    imagem: "https://m.media-amazon.com/images/I/61+1vJ3LpHL._AC_SX569_.jpg",
    descricao:
      "Estilo e conforto para qualquer ocasião! A calça jeans masculina é resistente, versátil e combina com diversos looks, do casual ao mais arrumado.",
    categoria: "Moda",
  },

  {
    id: 19,
    nome: "Bolsa Feminina",
    preco: 59.90,
    imagem: "https://m.media-amazon.com/images/I/51rV9-yTh0L._AC_SY606_.jpg",
    descricao:
      "Perfeita para o dia a dia, a bolsa feminina une estilo e praticidade. Espaçosa, resistente e ideal para complementar qualquer look com elegância",
    categoria: "Moda",
  },

  {
    id: 20,
    nome: "Vestido Feminino",
    preco: 89.90,
    imagem: "https://m.media-amazon.com/images/I/7161xIbEfBL._AC_SY606_.jpg",
    descricao:
      "Perfeito para qualquer ocasião, o vestido feminino combina conforto, leveza e estilo. Ideal para destacar sua beleza com um toque moderno e sofisticado.",
    categoria: "Moda",
  },

  {
    id: 21,
    nome: "Relógio Massculino",
    preco: 120.0,
    imagem: "https://m.media-amazon.com/images/I/71OIg4b1CEL._AC_SY741_.jpg",
    descricao:
      "Sofisticação e estilo para o dia a dia! O relógio masculino combina design moderno, durabilidade e precisão, sendo o acessório ideal para qualquer ocasião.",
    categoria: "Moda",
  },

   {
    id: 22,
    nome: "Óculos de Sol",
    preco: 79.90,
    imagem: "https://m.media-amazon.com/images/I/51tcjGr0dYL._AC_SX679_.jpg",
    descricao:
      "Proteção e estilo em um só acessório! Com lentes de qualidade e design moderno, os óculos de sol são perfeitos para o dia a dia, garantindo conforto e elegância.",
    categoria: "Moda",
  },

  {
  id: 23,
  nome: "Sofá 2 Lugares",
  preco: 1799.00,
  imagem: "https://m.media-amazon.com/images/I/51VNtZqvDHL._AC_SX679_.jpg",
  descricao: "Sofá confortável de 2 lugares, ideal para salas modernas e aconchegantes.",
  categoria: "Casa"
},

{
  id: 24,
  nome: "Mesa de Jantar",
  preco: 899.00,
  imagem: "https://m.magazineluiza.com.br/a-static/420x420/mesa-de-jantar-com-6-cadeiras-retangular-cinamomo-off-white-destak-moveis-sao-carlos/magazineluiza/240452500/9684e2a8dac2c47cbaef114e824c24e5.jpg",
  descricao: "Mesa de jantar elegante com espaço para toda a família.",
  categoria: "Casa"
},

{
  id: 25,
  nome: "Luminária",
  preco: 149.90,
  imagem: "https://m.media-amazon.com/images/I/513xX90ItpL._AC_SX679_.jpg",
  descricao: "Luminária moderna que traz charme e iluminação aconchegante ao ambiente.",
  categoria: "Casa"
},

{
  id: 26,
  nome: "Tapete",
  preco: 78.90,
  imagem: "https://m.media-amazon.com/images/I/71fYOShpOaL._AC_SX679_.jpg",
  descricao: "Tapete macio e resistente, ideal para decorar sua casa com conforto.",
  categoria: "Casa"
},

{
  id: 27,
  nome: "Jogo de Panelas",
  preco: 299.90,
  imagem: "https://m.media-amazon.com/images/I/91wJtb-EAKL._AC_SX679_.jpg",
  descricao: "Conjunto de panelas de alta qualidade para facilitar seu dia a dia na cozinha.",
  categoria: "Casa"
},

{
  id: 28,
  nome: "Liquidificador",
  preco: 129.90,
  imagem: "https://m.media-amazon.com/images/I/51N3Xi4JJML._AC_SX679_.jpg",
  descricao: "Liquidificador potente, ideal para sucos, vitaminas e receitas variadas.",
  categoria: "Casa"
},

{
  id: 29,
  nome: "Cafeteira Elétrica",
  preco: 119.90,
  imagem: "https://m.media-amazon.com/images/I/71cM7xwJqXL._AC_SX679_.jpg",
  descricao: "Prepare cafés deliciosos com praticidade e rapidez.",
  categoria: "Casa"
},

{
  id: 30,
  nome: "Prateleira",
  preco: 69.90,
  imagem: "https://m.media-amazon.com/images/I/51wBZ7Ye3XL._AC_SX679_.jpg",
  descricao: "Prateleira versátil para organização e decoração de ambientes.",
  categoria: "Casa"
},

{
  id: 31,
  nome: "Bola de Futebol",
  preco: 89.90,
  imagem: "https://m.media-amazon.com/images/I/615MNWVws8L._AC_SX679_.jpg",
  descricao: "Bola de futebol resistente, ideal para jogos em campo ou quadra.",
  categoria: "Esportes"
},

{
  id: 32,
  nome: "Tênis Esportivo",
  preco: 249.90,
  imagem: "https://m.media-amazon.com/images/I/51WUvXlRWbL._AC_SX569_.jpg",
  descricao: "Tênis confortável e leve, ideal para corrida e atividades físicas.",
  categoria: "Esportes",
  tamanhos: ["38","39","40","41","42"]
},

{
  id: 33,
  nome: "Halter 10kg",
  preco: 119.90,
  imagem: "https://m.media-amazon.com/images/I/31G5ooeL5fL._AC_.jpg",
  descricao: "Halter de 10kg perfeito para treinos de força e musculação.",
  categoria: "Esportes"
},

{
  id: 34,
  nome: "Bicicleta Aro 29",
  preco: 826.00,
  imagem: "https://m.media-amazon.com/images/I/71JV2+AWn1L._AC_SX679_.jpg",
  descricao: "Bicicleta aro 29 com ótimo desempenho para trilhas e cidade.",
  categoria: "Esportes"
},

{
  id: 35,
  nome: "Corda de Pular",
  preco: 14.90,
  imagem: "https://m.media-amazon.com/images/I/71wm42EtoNL._AC_SX679_.jpg",
  descricao: "Corda leve e prática para exercícios aeróbicos.",
  categoria: "Esportes"
},

{
  id: 36,
  nome: "Luvas de Boxe",
  preco: 129.90,
  imagem: "https://m.media-amazon.com/images/I/71HCjYBabTL._AC_SX679_.jpg",
  descricao: "Luvas de boxe resistentes e confortáveis para treino e luta.",
  categoria: "Esportes"
},

{
  id: 37,
  nome: "Tapete de Yoga",
  preco: 49.90,
  imagem: "https://m.media-amazon.com/images/I/41QQi9ASb4L._AC_SX679_.jpg",
  descricao: "Tapete antiderrapante ideal para yoga, pilates e exercícios.",
  categoria: "Esportes"
},

{
  id: 38,
  nome: "Garrafa Térmica",
  preco: 42.90,
  imagem: "https://m.media-amazon.com/images/I/510mLzHFulL._AC_SX679_.jpg",
  descricao: "Garrafa térmica que mantém sua bebida gelada ou quente por horas.",
  categoria: "Esportes"
},

{
  id: 39,
  nome: "Perfume Feminino",
  preco: 169.90,
  imagem: "https://m.media-amazon.com/images/I/51rg13yto6L._AC_SX522_.jpg",
  descricao: "Perfume feminino com fragrância marcante e sofisticada para o dia a dia.",
  categoria: "Beleza"
},

{
  id: 40,
  nome: "Kit de Maquiagem",
  preco: 99.90,
  imagem: "https://m.media-amazon.com/images/I/51i+r2a0fKL._AC_SX522_.jpg",
  descricao: "Kit completo de maquiagem com diversos itens para realçar sua beleza.",
  categoria: "Beleza"
},

{
  id: 41,
  nome: "Secador de Cabelo",
  preco: 199.90,
  imagem: "https://m.media-amazon.com/images/I/513o6E8c7xL._AC_SX679_.jpg",
  descricao: "Secador potente com controle de temperatura para um resultado profissional.",
  categoria: "Beleza"
},

{
  id: 42,
  nome: "Creme Hidratante",
  preco: 79.90,
  imagem: "https://m.media-amazon.com/images/I/61oXtBumUwL._AC_SX679_.jpg",
  descricao: "Hidratante corporal que mantém a pele macia e saudável.",
  categoria: "Beleza"
},

{
  id: 43,
  nome: "Shampoo",
  preco: 30.90,
  imagem: "https://m.media-amazon.com/images/I/61pu-QboQML._AC_SX522_.jpg",
  descricao: "Shampoo nutritivo para todos os tipos de cabelo.",
  categoria: "Beleza"
},

{
  id: 44,
  nome: "Escova de Cabelo",
  preco: 23.90,
  imagem: "https://m.media-amazon.com/images/I/6177k0wf8eL._AC_SX522_.jpg",
  descricao: "Escova ideal para desembaraçar e modelar os cabelos.",
  categoria: "Beleza"
},

{
  id: 45,
  nome: "Kit de Esmaltes",
  preco: 29.90,
  imagem: "https://m.media-amazon.com/images/I/71EErTFyOtL._AC_SX522_.jpg",
  descricao: "Kit com várias cores de esmalte para unhas perfeitas.",
  categoria: "Beleza"
},

{
  id: 46,
  nome: "Perfume Masculino",
  preco: 146.90,
  imagem: "https://m.media-amazon.com/images/I/51l8+DUe-6L._AC_SX522_.jpg",
  descricao: "Perfume masculino com fragrância intensa e elegante.",
  categoria: "Beleza"
}
  

];
function carregarProduto() {
  var params = new URLSearchParams(window.location.search);
  var id = parseInt(params.get("id"));
  var produto = null;

  for (var i = 0; i < produtos.length; i++) {
    if (produtos[i].id === id) {
      produto = produtos[i];
      break;
    }
  }

  var container = document.getElementById("product-detail");

  if (!produto) {
    container.innerHTML =
      '<div class="product-not-found"><h2>Produto não encontrado</h2><p>O produto que você está procurando não existe.</p><a href="inicio.html" class="btn">Ver Produtos</a></div>';
    return;
  }

  document.title = produto.nome + " - MarketPlaceStore";

  var html = "";

  html += '<div class="product-image-container">';
  html +=
    ' <img src="' +
    produto.imagem +
    '" alt="' +
    produto.nome +
    '" class="product-image">';

  if (produto.desconto) {
    html += ' <span class="product-discount">-' + produto.desconto + "%</span>";
  }

  html += "</div>";

  html += '<div class="product-info">';
  html += ' <span class="product-category">' + produto.categoria + "</span>";
  html += ' <h1 class="product-name">' + produto.nome + "</h1>";
  html += ' <p class="product-description">' + produto.descricao + "</p>";

  if (produto.precoOriginal) {
    html +=
      ' <p class="product-old-price">De: ' +
      formatarPreco(produto.precoOriginal) +
      "</p>";
    html +=
      ' <p class="product-price offer">Por: ' +
      formatarPreco(produto.preco) +
      "</p>";
  } else {
    html +=
      ' <p class="product-price">' + formatarPreco(produto.preco) + "</p>";
  }

  // QUANTIDADE
  html += ' <div class="product-qty-selector">';
  html += " <label>Quantidade:</label>";
  html += ' <div class="product-qty-controls">';
  html += ' <button class="qty-btn" onclick="alterarQtdProduto(-1)">-</button>';
  html += ' <span id="product-qty" class="qty-value">1</span>';
  html += ' <button class="qty-btn" onclick="alterarQtdProduto(1)">+</button>';
  html += " </div>";
  html += " </div>";

  // TAMANHO
  html += '<div id="tamanhos-container" style="display:none; margin:15px 0;">';
  html += "<h4>Escolha o tamanho:</h4>";
  html += '<select id="tamanho"></select>';
  html += "</div>";

  // BOTÕES
  html += ' <div class="product-actions">';

  // CARRINHO
  html +=
    ' <button class="btn btn-cart btn-large" onclick="adicionarProdutoAoCarrinho(' +
    produto.id +
    ", '" +
    produto.nome.replace(/'/g, "\\'") +
    "', " +
    produto.preco +
    ", '" +
    produto.imagem +
    "')\">Adicionar ao Carrinho</button>";

  // 🔥 COMPRAR AGORA (NOVO)
  html +=
    ' <button class="btn btn-buy btn-large" onclick="comprarAgora(' +
    produto.id +
    ", '" +
    produto.nome.replace(/'/g, "\\'") +
    "', " +
    produto.preco +
    ", '" +
    produto.imagem +
    "')\">Comprar Agora</button>";

  html += " </div>";

  html += "</div>";

  container.innerHTML = html;

  // TAMANHOS
  var selectTamanho = document.getElementById("tamanho");
  var containerTamanho = document.getElementById("tamanhos-container");

  var roupas = [15, 17, 18, 20];
  var tenis = [16];

  if (roupas.includes(produto.id)) {
    containerTamanho.style.display = "block";
    selectTamanho.innerHTML = `
      <option value="">Selecione</option>
      <option>P</option>
      <option>M</option>
      <option>G</option>
      <option>GG</option>
    `;
  }

  if (tenis.includes(produto.id)) {
    containerTamanho.style.display = "block";
    selectTamanho.innerHTML = `
      <option value="">Selecione</option>
      <option>38</option>
      <option>39</option>
      <option>40</option>
      <option>41</option>
      <option>42</option>
    `;
  }
}

var qtdProduto = 1;

function alterarQtdProduto(delta) {

  qtdProduto += delta;

  // LIMITE MÍNIMO
  if (qtdProduto < 1) {
    qtdProduto = 1;
  }

  // LIMITE MÁXIMO
  if (qtdProduto > 10) {
    qtdProduto = 10;
  }

  document.getElementById("product-qty").innerText = qtdProduto;
}

// CARRINHO
function adicionarProdutoAoCarrinho(id, nome, preco, imagem) {
  var tamanhoSelecionado =
    document.getElementById("tamanho")?.value || null;

  if (
    document.getElementById("tamanhos-container") &&
    document.getElementById("tamanhos-container").style.display !== "none" &&
    !tamanhoSelecionado
  ) {
    alert("Selecione um tamanho!");
    return;
  }

  var carrinho = getCarrinho();
  var encontrado = false;

  for (var i = 0; i < carrinho.length; i++) {
    if (carrinho[i].id === id && carrinho[i].tamanho === tamanhoSelecionado) {
      carrinho[i].quantidade += qtdProduto;
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
      quantidade: qtdProduto,
      tamanho: tamanhoSelecionado,
    });
  }

  salvarCarrinho(carrinho);
  mostrarToast(nome + " adicionado ao carrinho!");
}

// 🔥 NOVA FUNÇÃO COMPRA DIRETA
function comprarAgora(id, nome, preco, imagem) {
  var tamanhoSelecionado =
    document.getElementById("tamanho")?.value || null;

  if (
    document.getElementById("tamanhos-container") &&
    document.getElementById("tamanhos-container").style.display !== "none" &&
    !tamanhoSelecionado
  ) {
    alert("Selecione um tamanho!");
    return;
  }

  var produtoCompra = {
    id: id,
    nome: nome,
    preco: preco,
    imagem: imagem,
    quantidade: qtdProduto,
    tamanho: tamanhoSelecionado,
  };

  // Limpa o carrinho anterior ao fazer compra direta
  localStorage.removeItem("carrinho");
  
  localStorage.setItem("compraDireta", JSON.stringify(produtoCompra));

  window.location.href = "checkout.html";
}

document.addEventListener("DOMContentLoaded", carregarProduto);