<script>
  import LL from '$i18n/i18n-svelte';
  import Hero from '$lib/Hero.svelte';
  import Table from './Table.svelte';
  import Sidebar from './Sidebar.svelte';

  export let data;

  const { products } = data;
</script>

<Hero
  image={$LL.catalog.img_hero()}
  heading={$LL.catalog.heading()}
  subheading={$LL.catalog.subheading()}
/>

<Table {products} />

<Sidebar {products} />
