<script>
  /** @type {Array<{[key: string]: string}>} */
  export let products;
  /** @type {Array<string>} */
  export let excluded_groups;
</script>

<section
  class="prose prose-sm max-w-none px-4 pb-8 sm:prose-base prose-headings:font-medium
  prose-h1:mt-12 prose-h1:font-oswald prose-h2:font-oswald"
>
  <table class="mx-auto max-w-4xl table-auto">
    <tbody>
      <div id={products[0]['Artikelgruppe']} class="-mt-8 h-8" />
      <h1>{products[0]['Artikelgruppe']}</h1>
      {#each products as product, i}
        {#if product['Artikelgruppe'] && !excluded_groups.includes(product['Artikelgruppe'])}
          {#if i > 0 && products[i - 1]['Artikelgruppe'] !== product['Artikelgruppe']}
            <div id={product['Artikelgruppe']} class="-mt-8 h-8" />
            <h1>{product['Artikelgruppe']}</h1>
          {/if}
          <tr class="hover:bg-gray-300">
            <td>{product['Artikelname Verkauf']}</td>
          </tr>
        {/if}
      {/each}
    </tbody>
  </table>
</section>
