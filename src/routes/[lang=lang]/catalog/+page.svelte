<script>
  import LL from '$i18n/i18n-svelte';
  import Hero from '$lib/Hero.svelte';
  import Icon from '$src/lib/Icon.svelte';
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import Table from './Table.svelte';

  export let data;

  const { products, product_groups, excluded_groups } = data;

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

<Table {products} {excluded_groups} />

{#if showSidebar}
  <aside
    transition:fly
    class="fixed right-0 top-0 flex h-full shadow-lg transition
    {sideBarCollapsed && 'translate-x-full'}"
  >
    <div class="prose flex flex-col items-end gap-2 overflow-auto bg-white p-6">
      <h3 class="font-oswald">Kategorien</h3>
      {#each product_groups as group}
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
