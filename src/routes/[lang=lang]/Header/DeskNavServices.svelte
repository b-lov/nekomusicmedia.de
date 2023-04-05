<script context="module">
  import { writable } from 'svelte/store';
  export const servicesNavOpen = writable(false);
</script>

<script>
  import { LL, locale } from '$i18n/i18n-svelte';
  import { fly } from 'svelte/transition';
  import NavLink from '$lib/NavLink.svelte';

  const services =
    /** @type {Array.<keyof import('$i18n/i18n-types').Translation['services']['all']>} */
    (Object.keys($LL.services.all));
</script>

{#if $servicesNavOpen}
  <nav
    transition:fly={{ y: 10 }}
    class="absolute flex flex-col bg-white border left-1/2 -translate-x-1/2 top-14 shadow-lg"
  >
    {#each services as service}
      <NavLink link="/{$locale}/services/{service}" text={$LL.services.all[service].title()} />
    {/each}
  </nav>
{/if}
