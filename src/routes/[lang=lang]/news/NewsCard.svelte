<script>
  import { LL, locale } from '$i18n/i18n-svelte';

  export let img = '';
  export let date = '';
  export let caption = '';
  export let link = '';

  /** @param {string} str */
  const removeTags = (str) => {
    return str.replace(/#[^\s]+/g, '');
  };

  /** @param {string} str */
  const extractTags = (str) => {
    return str.match(/#[^\s]+/g) || [];
  };

  /**
   * @param {string} locale
   * @param {string} timestamp
   */
  const localDate = (locale, timestamp) => {
    return new Date(timestamp).toLocaleDateString(locale, {
      weekday: 'short',
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    });
  };
</script>

<div class="relative flex flex-col items-center justify-evenly aspect-square w-96 shadow-lg p-4">
  <img class="absolute top-0 left-0 w-full h-full object-cover" src={img} alt="" />
  <span class="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-75" />
  <aside class="absolute left-4 top-2 text-gray-100 font-light prose italic">
    {localDate($locale, date)}
  </aside>
  <h1 class="relative text-gray-100 font-oswald text-3xl text-center line-clamp-2">
    {removeTags(caption)}
  </h1>
  <a href={link} target="_blank" class="relative button-light">{$LL.news.more_button()}</a>
</div>
