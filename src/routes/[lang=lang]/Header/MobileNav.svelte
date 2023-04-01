<script context="module">
  import { writable } from 'svelte/store';
  import { navigating } from '$app/stores';

  export const mobileNavOpen = writable(false);
  export const toggleMenu = () => {
    mobileNavOpen.update((n) => (n = !n));
  };
</script>

<script>
  import { LL, locale } from '$i18n/i18n-svelte';
  import { slide } from 'svelte/transition';
  import NavLink from '$lib/NavLink.svelte';

  /** @type { Array.<keyof Pick<import('$i18n/i18n-types').Translation, 'about' | 'services' | 'catalog' | 'contact'>> } */
  const links = ['about', 'services', 'catalog', 'contact'];

  $: if ($navigating) {
    mobileNavOpen.set(false);
  }

  /** @param { HTMLElement } node */
  const closeOnClickOutsideHeader = (node) => {
    /** @param { MouseEvent } event */
    const handleClick = (event) => {
      const header = /** @type { HTMLElement } */ (document.querySelector('header'));
      if (!event.composedPath().includes(header)) mobileNavOpen.set(false);
    };
    document.addEventListener('click', handleClick);
    return {
      destroy() {
        document.removeEventListener('click', handleClick);
      }
    };
  };
</script>

{#if $mobileNavOpen}
  <nav class="flex flex-col" transition:slide use:closeOnClickOutsideHeader>
    {#each links as link}
      <NavLink link="/{$locale}/{link}" text={$LL[link].title()} />
    {/each}
  </nav>
{/if}
