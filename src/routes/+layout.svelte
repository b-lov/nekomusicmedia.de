<script>
  import '../styles/app.css';
  import { page } from '$app/stores';
  import { setLocale } from '$i18n/i18n-svelte';
  import HeadHrefLangs from '$lib/HeadHrefLangs.svelte';

  export let data;

  // at the very top, set the locale before you access the store and before the actual rendering takes place
  setLocale(data.locale);
</script>

<svelte:head>
  <title>{$page.data.title || 'NEKO Music & Media GmbH'}</title>
  <HeadHrefLangs />
</svelte:head>

<slot />
