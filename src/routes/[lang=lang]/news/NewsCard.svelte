<script>
  import { LL, locale } from '$i18n/i18n-svelte';

  export let media_url = '';
  export let timestamp = '';
  export let caption = '';
  export let permalink = '';

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
  const formatTimestamp = (locale, timestamp) => {
    return new Date(timestamp).toLocaleDateString(locale, {
      weekday: 'short',
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    });
  };
</script>

<div
  class="relative flex flex-col items-center justify-between aspect-square w-96 shadow-lg px-4 pt-20 pb-28 overflow-hidden"
>
  <img class="absolute top-0 left-0 w-full h-full object-cover" src={media_url} alt="" />
  <span class="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-75" />
  <aside class="absolute left-6 top-4 text-gray-200 font-light prose italic">
    {formatTimestamp($locale, timestamp)}
  </aside>
  <h1 class="relative text-gray-100 font-oswald text-3xl text-center line-clamp-2">
    {removeTags(caption)}
  </h1>
  <a href={permalink} target="_blank" class="relative button-light">{$LL.news.more_button()}</a>
  <aside class="absolute right-4 bottom-4 flex gap-2">
    {#each extractTags(caption) as tag}
      <span class="text-gray-200 text-sm bg-gray-700 py-1.5 px-2 rounded-2xl border">
        {tag}
      </span>
    {/each}
  </aside>
</div>
