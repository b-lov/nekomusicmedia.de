<script>
  import '../styles/app.css';
  import { page } from '$app/stores';
  import { browser } from '$app/environment';
  import { invalidateAll } from '$app/navigation';
  import { setLocale, locale } from '$i18n/i18n-svelte';
  import { loadLocaleAsync } from '$i18n/i18n-util.async';
  import { replaceLocaleInUrl } from '$src/utils.js';
  import HeadHrefLangs from '$lib/HeadHrefLangs.svelte';

  export let data;

  // at the very top, set the locale before you access the store and before the actual rendering takes place
  setLocale(data.locale);

  /** @param {Locales} newLocale */
  const switchLocale = async (newLocale, updateHistoryState = true) => {
    if (!newLocale || $locale === newLocale) return;

    // load new dictionary from server
    await loadLocaleAsync(newLocale);

    // select locale
    setLocale(newLocale);

    // update `lang` attribute
    document.querySelector('html')?.setAttribute('lang', newLocale);

    if (updateHistoryState) {
      // update url to reflect locale changes
      history.pushState({ locale: newLocale }, '', replaceLocaleInUrl($page.url, newLocale));
    }

    // run the `load` function again
    invalidateAll();
  };

  // update locale when navigating via browser back/forward buttons
  /** @param { PopStateEvent } event */
  const handlePopStateEvent = async ({ state }) => switchLocale(state.locale, false);

  // update locale when page store changes
  $: if (browser) {
    const lang = /** @type {Locales} */ ($page.params.lang);
    switchLocale(lang, false);
    history.replaceState(
      { ...history.state, locale: lang },
      '',
      replaceLocaleInUrl($page.url, lang)
    );
  }
</script>

<svelte:window on:popstate={handlePopStateEvent} />

<svelte:head>
  <title>{$page.data.title || 'NEKO Music & Media GmbH'}</title>
  <HeadHrefLangs />
</svelte:head>

<slot />
