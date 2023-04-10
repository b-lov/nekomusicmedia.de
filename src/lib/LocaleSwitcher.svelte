<script>
  import { fly } from 'svelte/transition';
  import { page } from '$app/stores';
  import { locale } from '$i18n/i18n-svelte';
  import { locales } from '$i18n/i18n-util';
  import { replaceLocaleInUrl } from '$src/utils.js';
  import Icon from './Icon.svelte';

  export let open = false;

  /** @param { HTMLElement } node */
  const closeOnClickOutside = (node) => {
    /** @param { MouseEvent } event */
    const handleClick = (event) => {
      if (!event.composedPath().includes(node)) open = false;
    };
    document.addEventListener('click', handleClick);
    return {
      destroy() {
        document.removeEventListener('click', handleClick);
      }
    };
  };
</script>

<button
  class="p-4 relative hover:bg-gray-200 transition rounded-full"
  on:click={() => (open = !open)}
  use:closeOnClickOutside
>
  {#key $locale}
    <Icon
      class="rounded-full overflow-hidden border border-gray-800 relative"
      name="flag_{$locale}"
      size={1.7}
    />
  {/key}
  {#if open}
    <div
      class="absolute bg-white border -translate-x-1/2 left-1/2 top-14"
      transition:fly={{ y: 10 }}
    >
      {#each locales as l}
        {#if l !== $locale}
          <a
            data-sveltekit-noscroll
            href={`${replaceLocaleInUrl($page.url, l)}`}
            class="p-4 hover:bg-gray-200 transition rounded-full flex"
          >
            <Icon
              class="rounded-full overflow-hidden border border-gray-800"
              name="flag_{l}"
              size={1.7}
            />
          </a>
        {/if}
      {/each}
    </div>
  {/if}
</button>
