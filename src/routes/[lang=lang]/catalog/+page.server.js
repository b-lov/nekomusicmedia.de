import { readFile } from 'fs/promises';

export async function load() {
  const products = [];
  const product_groups = new Set();
  const excluded_groups = ['Zahlungen ', 'Personaltagessätze', 'Personalstundensätze'];
  const csv = await readFile('./static/catalog.csv', 'binary');
  const lines = csv.split('\n');
  const headings = lines[0].split('\t');

  // create json from csv
  for (let i = 1; i < lines.length; i++) {
    const cells = lines[i].split('\t');
    /** @type {{[key: string]: string}} */
    const obj = {};
    for (let j = 0; j < headings.length; j++) {
      obj[headings[j]] = cells[j];
    }
    products.push(obj);
  }

  products.forEach((obj) => {
    if (obj['Artikelgruppe'] && !excluded_groups.includes(obj['Artikelgruppe'])) {
      product_groups.add(obj['Artikelgruppe']);
    }
  });

  return { products, product_groups: Array.from(product_groups), excluded_groups };
}
