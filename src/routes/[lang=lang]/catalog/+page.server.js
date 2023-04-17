import { readFile } from 'fs/promises';

export async function load() {
  const csv = await readFile('./static/catalog.csv', 'binary');
  const lines = csv.split('\n');
  const headers = lines[0].split('\t');
  const categories = new Set();
  const excluded_categories = ['Zahlungen ', 'Personaltagessätze', 'Personalstundensätze'];
  /** @type {Object<string, Array<Object<string, string>>>} */
  const products = {};

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split('\t');
    const category = values[headers.indexOf('Artikelgruppe')];

    if (!category || excluded_categories.includes(category)) continue;
    categories.add(category);

    if (!products[category]) {
      products[category] = [];
    }

    /** @type {Object<string, string>} */
    const row = {};
    headers.forEach((header, index) => {
      if (header !== '') {
        row[header] = values[index];
      }
    });

    products[category].push(row);
  }

  return { products };
}
