<script>
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import Icon from '$src/lib/Icon.svelte';
  import SidebarColButton from './SidebarColButton.svelte';

  /** @type {Object<string, Array<Object<string, string>>>} */
  export let products;

  let visible = false;
  let collapsed = false;

  /** @param {MouseEvent} e */
  const scrollToCategory = (e) => {
    const targetElement = /** @type {HTMLElement} */ (e.target);
    const heading = document.getElementById(targetElement.innerText);
    heading?.scrollIntoView({ behavior: 'smooth' });
    if (window.innerWidth < 640) collapsed = true;
  };

  onMount(() => {
    // start in collapsed state on small screens
    if (window.innerWidth < 640) collapsed = true;
    // show sidebar when hero is almost out of sight
    const observer = new IntersectionObserver((entries) => (visible = !entries[0].isIntersecting), {
      rootMargin: '-20%'
    });
    const hero = document.getElementById('hero');
    hero && observer.observe(hero);
    return () => hero && observer.unobserve(hero);
  });
</script>

{#if visible}
  <aside
    class="fixed right-0 top-0 flex h-full shadow-lg transition {collapsed && 'translate-x-full'}"
    transition:fly
  >
    <div class="prose flex flex-col items-end gap-2 overflow-auto bg-white p-6">
      <h3 class="font-oswald">Kategorien</h3>
      {#each Object.keys(products) as category}
        {#if products[category].length > 0}
          <button class="text-gray-500 hover:text-gray-900" on:click={scrollToCategory}>
            {category}
          </button>
        {/if}
      {/each}
      <SidebarColButton bind:collapsed />
    </div>
  </aside>
{/if}
