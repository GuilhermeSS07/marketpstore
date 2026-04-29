# MarketplaceStore

Sistema de marketplace desenvolvido com HTML, CSS, JavaScript e Supabase.

O projeto simula um e-commerce completo com autenticação de usuários, catálogo de produtos, carrinho, favoritos, checkout, pedidos e integração com banco de dados.

---

# Demonstração

O sistema possui:

* Login e cadastro de usuários
* Recuperação de senha
* Catálogo de produtos
* Busca de produtos
* Categorias
* Favoritos
* Carrinho de compras
* Compra direta
* Checkout
* Histórico de pedidos
* Perfil do usuário
* Integração com Supabase
* Responsividade

---

# Tecnologias Utilizadas

## Front-end

* HTML5
* CSS3
* JavaScript Vanilla

## Back-end / Banco

* Supabase
* Supabase Auth
* PostgreSQL

## Armazenamento Local

* localStorage

---

# Estrutura do Projeto


---

# Funcionalidades

# Autenticação

O sistema utiliza o Supabase Auth para:

* Cadastro de usuários
* Login
* Logout
* Sessão autenticada
* Recuperação de senha

---

# Catálogo de Produtos

Os produtos são renderizados dinamicamente através de JavaScript.

Cada produto possui:

* Nome
* Imagem
* Preço
* Descrição
* Categoria
* Desconto
* Tamanhos (quando necessário)

---

# Carrinho

O carrinho permite:

* Adicionar produtos
* Alterar quantidade
* Remover produtos
* Calcular total
* Persistência no localStorage

---

# Favoritos

Os usuários podem:

* Favoritar produtos
* Remover favoritos
* Visualizar página de favoritos

---

# Checkout

Métodos de pagamento simulados:

* PIX
* Crédito
* Débito
* Boleto

---

# Histórico de Pedidos

O sistema salva:

* Produtos comprados
* Data
* Método de pagamento
* Valor total

---

# Responsividade

O projeto é totalmente responsivo para:

* Smartphones
* Tablets
* Notebooks
* Monitores grandes

---

# Integração com Supabase

## Configuração

Crie um projeto no Supabase e configure:

```js
const SUPABASE_URL = "SUA_URL";
const SUPABASE_KEY = "SUA_CHAVE";
```

---

# Tabela Utilizada

## usuarios

```sql
create table usuarios (
  id uuid primary key,
  nome text,
  email text
);
```

---

# Como Executar

## 1. Clone o projeto

```bash
git clone https://github.com/seuusuario/seurepositorio.git
```

---

## 2. Abra o projeto

Abra a pasta no VS Code.

---

## 3. Execute com Live Server

Recomendado utilizar a extensão:

* Live Server

---

## 4. Configure o Supabase

Adicione sua URL e chave pública.

---

# Melhorias Futuras

* Integração com pagamentos reais
* Painel administrativo
* Upload de imagens
* Avaliações de produtos
* Sistema de cupons
* Banco de dados completo para produtos
* API própria
* Dashboard administrativo
* Sistema de estoque
* Notificações


---

# Segurança

A chave anon do Supabase é utilizada apenas para autenticação pública.

Para produção:

* Utilizar variáveis de ambiente
* Implementar RLS
* Configurar políticas do Supabase
* Criar back-end seguro

---

# Autor

Projeto desenvolvido por Guilherme de Souza Silva.

---

# Licença

Este projeto é livre para fins educacionais e acadêmicos.
