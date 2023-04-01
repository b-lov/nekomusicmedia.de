<script>
  import { browser } from '$app/environment';
  import { invalidateAll } from '$app/navigation';
  import { page } from '$app/stores';
  import { setLocale, locale } from '$i18n/i18n-svelte';
  import { locales } from '$i18n/i18n-util';
  import { loadLocaleAsync } from '$i18n/i18n-util.async';
  import { replaceLocaleInUrl } from '../../../utils';

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

<div class="flex gap-2">
  {#each locales as l}
    <a type="button" href={`${replaceLocaleInUrl($page.url, l)}`}>
      {l}
    </a>
  {/each}
</div>
