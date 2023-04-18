<script>
  /** @type {Object<string, Array<Object<string, string>>>} */
  export let products;

  const shown_field = 'Artikelname Vermietung';
  let search_term = '';

  $: filteredProducts = () => {
    if (search_term.trim() === '') return products;
    /** @type {Object<string, Array<Object<string, string>>>} */
    const result = {};
    for (const category of Object.keys(products)) {
      result[category] = products[category].filter((product) =>
        product[shown_field].toLowerCase().includes(search_term.toLowerCase())
      );
    }
    return result;
  };

  /** @param {string} result */
  const markSearchResults = (result) => {
    if (search_term.trim() === '') return result;
    const regex = new RegExp(search_term, 'gi');
    return result.replace(regex, `<mark>${search_term}</mark>`);
  };

  /** @param {Object<string, Array<Object<string, string>>>} obj */
  const allArraysEmpty = (obj) => {
    for (let val of Object.values(obj)) if (val.length !== 0) return false;
    return true;
  };
</script>

<section
  class="prose prose-sm max-w-none px-4 pb-8 sm:prose-base prose-headings:font-medium
  prose-h1:mt-12 prose-h1:font-oswald prose-h2:font-oswald"
>
  <table class="mx-auto max-w-4xl table-auto">
    <input
      bind:value={search_term}
      placeholder="Suchen"
      class="mt-8 border border-gray-300 p-3 shadow-md placeholder:text-gray-400
      focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
    />
    <tbody>
      {#each Object.keys(filteredProducts()) as category}
        {#if filteredProducts()[category].length > 0}
          <div id={category} class="-mt-8 h-8" />
          <h1>{category}</h1>
          {#each filteredProducts()[category].sort( (a, b) => a[shown_field].localeCompare(b[shown_field]) ) as product}
            <tr class="hover:bg-gray-300">
              <td>
                {@html markSearchResults(product[shown_field])}
              </td>
            </tr>
          {/each}
        {/if}
      {/each}
      {#if allArraysEmpty(filteredProducts())}
        <h1>keine Ergebnisse</h1>
      {/if}
    </tbody>
  </table>
</section>
