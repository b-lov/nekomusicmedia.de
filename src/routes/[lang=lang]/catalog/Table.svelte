<script>
  /** @type {Object<string, Array<Object<string, string>>>} */
  export let filtered_products;
  export let search_term = '';
  export let table_field = '';

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

<table class="mt-0">
  <tbody>
    {#each Object.keys(filtered_products) as category}
      {#if filtered_products[category].length > 0}
        <div id={category} class="-mt-8 h-8" />
        <h1>{category}</h1>
        {#each filtered_products[category].sort( (a, b) => a[table_field].localeCompare(b[table_field]) ) as product}
          <tr class="hover:bg-gray-300">
            <td>
              {@html markSearchResults(product[table_field])}
            </td>
          </tr>
        {/each}
      {/if}
    {/each}
    {#if allArraysEmpty(filtered_products)}
      <h1>keine Ergebnisse</h1>
    {/if}
  </tbody>
</table>
