import csvfile from '/static/catalog.csv?raw';

export async function load() {
  let csv = '';

  const response = await fetch(
    'https://nekomusicmedia.musiker-job-s1.de/Berichtedrucken.php?' +
      new URLSearchParams([
        ['FilterArt', 'Export_Vermietbestand'],
        ['TechnikSpeichern', '1']
      ]),
    {
      headers: { cookie: import.meta.env.VITE_MUSIKERJOB_SESSION_ID }
    }
  );

  const buffer = await response.arrayBuffer();
  const decoded = new TextDecoder('iso-8859-1').decode(buffer);

  if (decoded.charAt(0) !== 'A') {
    csv = csvfile;
  } else {
    csv = decoded;
  }

  const lines = csv.split('\n');
  const headers = lines[0].split('\t');
  const categories = new Set();
  const excluded_categories = [
    'Zahlungen ',
    'Personaltagessätze',
    'Personalstundensätze',
    'Transportgeräte',
    'Case (Gerätetransport)',
    'Fahrzeuge (Anhänger usw.)',
    'Kraftfahrzeuge (PKW, LKW usw.)',
    'Transport'
  ];
  /** @type {Object<string, Array<Object<string, string>>>} */
  const products = {};

  // create object with the product data grouped by category
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split('\t');
    const category = values[headers.indexOf('Artikelgruppe')];

    if (!category || excluded_categories.includes(category)) continue;

    if (values[headers.indexOf('Artikelname Vermietung')].endsWith('***')) continue;

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
