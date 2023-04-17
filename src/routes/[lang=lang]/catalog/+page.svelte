<script>
  import LL from '$i18n/i18n-svelte';
  import Hero from '$lib/Hero.svelte';
  import Icon from '$src/lib/Icon.svelte';
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  export let data;

  const getProductGroups = () => {
    const groups = new Set();
    data.items.forEach((obj) => {
      if (obj['Artikelgruppe'] && !excluded_groups.includes(obj['Artikelgruppe'])) {
        groups.add(obj['Artikelgruppe']);
      }
    });
    return Array.from(groups);
  };

  const excluded_groups = ['Zahlungen ', 'Personaltagessätze', 'Personalstundensätze'];

  let showSidebar = false;
  let sideBarCollapsed = false;

  onMount(() => {
    if (window.innerWidth < 640) {
      sideBarCollapsed = true;
    }

    const observer = new IntersectionObserver(
      (entries) => (showSidebar = !entries[0].isIntersecting),
      { rootMargin: '-15%' }
    );

    const intersector = /** @type {HTMLElement} */ (document.getElementById('hero'));
    observer.observe(intersector);
    return () => observer.unobserve(intersector);
  });
</script>

<Hero
  image={$LL.catalog.img_hero()}
  heading={$LL.catalog.heading()}
  subheading={$LL.catalog.subheading()}
/>

<section
  class="prose prose-sm max-w-none px-4 pb-8 sm:prose-base prose-headings:font-medium
  prose-h1:mt-12 prose-h1:font-oswald prose-h2:font-oswald"
>
  <table class="mx-auto max-w-4xl table-auto">
    <tbody>
      <div id={data.items[0]['Artikelgruppe']} class="-mt-8 h-8" />
      <h1>{data.items[0]['Artikelgruppe']}</h1>
      {#each data.items as item, i}
        {#if item['Artikelgruppe'] && !excluded_groups.includes(item['Artikelgruppe'])}
          {#if i > 0 && data.items[i - 1]['Artikelgruppe'] !== item['Artikelgruppe']}
            <div id={item['Artikelgruppe']} class="-mt-8 h-8" />
            <h1>{item['Artikelgruppe']}</h1>
          {/if}
          <tr class="hover:bg-gray-300">
            <td>{item['Artikelname Verkauf']}</td>
          </tr>
        {/if}
      {/each}
    </tbody>
  </table>
</section>

{#if showSidebar}
  <aside
    transition:fly
    class="fixed right-0 top-0 flex h-full shadow-lg transition
    {sideBarCollapsed && 'translate-x-full'}"
  >
    <div class="prose flex flex-col items-end gap-2 overflow-auto bg-white p-6">
      <h3 class="font-oswald">Kategorien</h3>
      {#each getProductGroups() as group}
        <button
          class="text-gray-500 hover:text-gray-900"
          on:click={() => {
            const el = document.getElementById(group);
            el?.scrollIntoView({ behavior: 'smooth' });
            if (window.innerWidth < 640) sideBarCollapsed = true;
          }}
        >
          {group}
        </button>
      {/each}
    </div>
    <button
      class="absolute bottom-0 left-0 -ml-12 flex aspect-square h-12 w-12 items-center
      justify-center border-l border-t bg-white hover:bg-gray-100"
      on:click={() => {
        sideBarCollapsed = !sideBarCollapsed;
      }}
    >
      <Icon
        name="arrow"
        size={1.2}
        class="{sideBarCollapsed ? 'rotate-0' : 'rotate-180'} transition"
      />
    </button>
  </aside>
{/if}
