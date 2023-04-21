<script>
  import LL from '$i18n/i18n-svelte';
  import Hero from '$lib/Hero.svelte';
  import Table from './Table.svelte';
  import Sidebar from './Sidebar.svelte';

  export let data;

  const { products } = data;
  let search_term = '';
  const table_field = 'Artikelname Vermietung';

  $: filteredProducts = () => {
    if (search_term.trim() === '') return products;
    /** @type {Object<string, Array<Object<string, string>>>} */
    const result = {};
    for (const category of Object.keys(products)) {
      result[category] = products[category].filter((product) =>
        product[table_field].toLowerCase().includes(search_term.toLowerCase())
      );
    }
    return result;
  };
</script>

<Hero
  image={$LL.catalog.img_hero()}
  heading={$LL.catalog.heading()}
  subheading={$LL.catalog.subheading()}
/>

<section
  class="prose prose-sm mx-auto max-w-4xl px-4 py-8 sm:prose-base
  prose-h1:mt-12 prose-h1:font-oswald prose-h1:font-medium"
>
  <input
    class="border border-gray-300 p-3 shadow-md placeholder:text-gray-400
    focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
    bind:value={search_term}
    placeholder="Suchen"
  />
  <Table filtered_products={filteredProducts()} {search_term} {table_field} />
</section>

<Sidebar products={filteredProducts()} />
