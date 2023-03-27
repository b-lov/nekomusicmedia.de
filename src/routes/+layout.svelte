<script>
  import '../app.css';
  import { page } from '$app/stores';
  import { setLocale } from '$i18n/i18n-svelte';
  import LocaleSwitcher from '$lib/LocaleSwitcher.svelte';
  import HeadHrefLangs from '$lib/HeadHrefLangs.svelte';

  export let data;

  // at the very top, set the locale before you access the store and before the actual rendering takes place
  setLocale(data.locale);
</script>

<svelte:head>
  <title>{$page.data.title || 'my site'}</title>
  <HeadHrefLangs />
</svelte:head>

<LocaleSwitcher />

<main>
  <slot />
</main>
