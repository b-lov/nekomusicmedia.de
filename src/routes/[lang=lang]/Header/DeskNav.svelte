<script>
  import { LL, locale } from '$i18n/i18n-svelte';
  import NavLink from '$lib/NavLink.svelte';
  import DeskNavServices, { servicesNavOpen } from './DeskNavServices.svelte';
  import LocaleSwitcher from '$lib/LocaleSwitcher.svelte';

  /**
   * @type { Array.<keyof Pick<import('$i18n/i18n-types').Translation, 'about' | 'services' | 'catalog' | 'news' | 'contact'>> }
   */
  const links = ['about', 'services', 'catalog', 'news', 'contact'];
</script>

<nav class="hidden sm:flex items-center">
  {#each links as link}
    <li
      class="list-none relative"
      on:mouseenter={() => link === 'services' && servicesNavOpen.set(true)}
      on:mouseleave={() => servicesNavOpen.set(false)}
    >
      <NavLink link="/{$locale}/{link}" text={$LL[link].title()} />
      {#if link === 'services'}
        <DeskNavServices />
      {/if}
    </li>
  {/each}
  <LocaleSwitcher />
</nav>
