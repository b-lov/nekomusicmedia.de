<script>
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import Icon from '$src/lib/Icon.svelte';
  import ScrollTopButton from './ScrollTopButton.svelte';

  /** @type {Array<string>} */
  export let categories;

  let show = false;
  let collapsed = false;

  /** @param { HTMLElement } node */
  const closeOnClickOutside = (node) => {
    /** @param { MouseEvent } event */
    const handleClick = (event) => {
      if (!event.composedPath().includes(node)) collapsed = true;
    };
    document.addEventListener('click', handleClick);
    return {
      destroy() {
        document.removeEventListener('click', handleClick);
      }
    };
  };

  onMount(() => {
    // start in collapsed state on small screens
    if (window.innerWidth < 640) {
      collapsed = true;
    }

    const observer = new IntersectionObserver((entries) => (show = !entries[0].isIntersecting), {
      rootMargin: '-15%'
    });

    // show sidebar when hero is almost out of sight
    const intersector = /** @type {HTMLElement} */ (document.getElementById('hero'));
    observer.observe(intersector);
    return () => observer.unobserve(intersector);
  });
</script>

{#if show}
  <aside
    transition:fly
    use:closeOnClickOutside
    class="fixed right-0 top-0 flex h-full shadow-lg transition
    {collapsed && 'translate-x-full'}"
  >
    <div class="prose flex flex-col items-end gap-2 overflow-auto bg-white p-6">
      <h3 class="font-oswald">Kategorien</h3>
      {#each categories as category}
        <button
          class="text-gray-500 hover:text-gray-900"
          on:click={() => {
            const el = document.getElementById(category);
            el?.scrollIntoView({ behavior: 'smooth' });
            if (window.innerWidth < 640) collapsed = true;
          }}
        >
          {category}
        </button>
      {/each}
    </div>
    <button
      class="absolute bottom-0 left-0 -ml-12 flex aspect-square h-12 w-12 items-center
      justify-center border-l border-t bg-white hover:bg-gray-100"
      on:click={() => {
        collapsed = !collapsed;
      }}
    >
      <Icon name="arrow" size={1.2} class="{collapsed ? 'rotate-0' : 'rotate-180'} transition" />
    </button>
  </aside>
  <button
    transition:fly
    class="fixed bottom-6 left-6 rounded-full bg-gray-800 p-4 shadow-lg hover:bg-gray-600"
    on:click={() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }}
  >
    <Icon name="arrow" size={1.2} class="rotate-90 fill-slate-100" />
  </button>
{/if}
