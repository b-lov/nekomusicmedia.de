<script>
  /** @type {Object<string, Array<Object<string, string>>>} */
  export let products;
  /** @type {Array<string>} */
  export let categories;
  const field = 'Artikelname Vermietung';
</script>

<section
  class="prose prose-sm max-w-none px-4 pb-8 sm:prose-base prose-headings:font-medium
  prose-h1:mt-12 prose-h1:font-oswald prose-h2:font-oswald"
>
  <table class="mx-auto max-w-4xl table-auto">
    <tbody>
      {#each categories as category}
        <div id={category} class="-mt-8 h-8" />
        <h1>{category}</h1>
        {#each products[category].sort((a, b) => a[field].localeCompare(b[field])) as product}
          <tr class="hover:bg-gray-300">
            <td>{product[field]}</td>
          </tr>
        {/each}
      {/each}
    </tbody>
  </table>
</section>
