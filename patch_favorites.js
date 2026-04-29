const fs = require('fs');
const path = require('path');

const categoryFiles = [
  'eletronicos.html',
  'moda.html',
  'casa.html',
  'esportes.html',
  'beleza.html'
];

const root = path.resolve(__dirname);

function insertFavoriteButton(cardHtml) {

  // evita duplicação
  if (cardHtml.includes('favorite-btn')) {
    return cardHtml;
  }

  // 🔥 aceita links relativos
  const idMatch =
    cardHtml.match(/href="\.?\/?(index|produto)\.html\?id=(\d+)"/);

  const titleMatch =
    cardHtml.match(/<h3>([^<]+)<\/h3>/);

  if (!idMatch || !titleMatch) {
    return cardHtml;
  }

  const id = idMatch[2];

  const name =
    titleMatch[1].trim();

  const buttonHtml = `
            <button 
              class="favorite-btn"
              data-product-id="${id}"
              aria-label="Favoritar ${name}">
              <i class='bx bx-heart'></i>
            </button>`;

  return cardHtml.replace(
    /(<img[^>]+>)(\s*)(<h3>)/,
    `$1${buttonHtml}$2$3`
  );
}

function patchFile(filePath) {

  const content =
    fs.readFileSync(filePath, 'utf-8');

  let updated = false;

  let patched = content.replace(
    /<div class="product-card">[\s\S]*?<\/div>/g,
    block => {

      const replaced =
        insertFavoriteButton(block);

      if (replaced !== block) {
        updated = true;
      }

      return replaced;
    }
  );

  // 🔥 adiciona JS compatível com deploy
  if (!/src="\.?\/?inicio\.js"/.test(patched)) {

    patched = patched.replace(
      /<\/body>/,
      `    <script src="./inicio.js"></script>\n</body>`
    );

    updated = true;
  }

  if (updated) {

    fs.writeFileSync(
      filePath,
      patched,
      'utf-8'
    );

    console.log(
      `✅ Updated ${path.basename(filePath)}`
    );

  } else {

    console.log(
      `⚠️ No changes needed for ${path.basename(filePath)}`
    );
  }
}

categoryFiles.forEach(fileName => {

  const filePath =
    path.join(root, fileName);

  if (!fs.existsSync(filePath)) {

    console.warn(`❌ File not found: ${fileName}`);

    return;
  }

  patchFile(filePath);
});