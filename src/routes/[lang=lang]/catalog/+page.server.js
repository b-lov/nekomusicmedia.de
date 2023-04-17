import { readFile } from 'fs/promises';

/** @param {string} csv */
const parseCSV = (csv) => {
  const lines = csv.split('\n');
  const headings = lines[0].split('\t');
  const result = [];

  for (let i = 1; i < lines.length; i++) {
    const cells = lines[i].split('\t');
    /** @type {{[key: string]: string}} */
    const obj = {};

    for (let j = 0; j < headings.length; j++) {
      obj[headings[j]] = cells[j];
    }

    result.push(obj);
  }
  return result;
};

export async function load() {
  const csv = await readFile('./static/catalog.csv', 'binary');

  return { items: parseCSV(csv) };
}
