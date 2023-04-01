<script>
  import { LL, locale } from '$i18n/i18n-svelte';
  import Icon from '$lib/Icon.svelte';

  const services =
    /** @type {Array.<keyof import('$i18n/i18n-types').Translation['services']['all']>} */
    (Object.keys($LL.services.all));

  const social_media = [
    { id: 'twitter', link: 'https://twitter.com/NEKOMusicMedia' },
    { id: 'facebook', link: 'https://www.facebook.com/Neko-Music-Media-187715074593479' },
    { id: 'instagram', link: 'https://www.instagram.com/nekomusicmedia/' },
    { id: 'linkedin', link: 'https://www.linkedin.com/company/neko-music-media-gmbh' },
    { id: 'xing', link: 'https://www.xing.com/companies/nekomusic%26mediagmbh' }
  ];
</script>

<footer class="bg-gray-800 text-gray-200 px-4 py-6 flex flex-col items-stretch gap-8 footer-shadow">
  <section class="flex flex-col sm:flex-row gap-6 justify-between w-full max-w-4xl mx-auto">
    <div class="mx-auto flex flex-col gap-8">
      <!-- Heading -->
      <hgroup class="flex flex-col gap-2 text-center">
        <h2 class="text-2xl font-oswald">{$LL.footer.social_media_heading()}</h2>
        <h3>{$LL.footer.social_media_subheading()}</h3>
      </hgroup>

      <!-- Social Media -->
      <ul class="flex gap-4 justify-center flex-wrap">
        {#each social_media as item}
          <a
            href={item.link}
            target="_blank"
            class="p-2 bg-gray-200 rounded-full w-12 aspect-square flex items-center justify-center"
          >
            <Icon class="fill-gray-800" name={item.id} size={1.5} />
          </a>
        {/each}
      </ul>
    </div>

    <!-- Links -->
    <div class="flex flex-wrap gap-6 justify-between px-4 mx-auto w-full max-w-sm sm:max-w-xs">
      <ul class="flex flex-col gap-2 text-sm text-gray-400">
        <h4 class="font-oswald uppercase text-gray-200">{$LL.footer.links()}</h4>
        <a href="/{$locale}">{$LL.index.title()}</a>
        <a href="/{$locale}/about">{$LL.about.title()}</a>
        <a href="/{$locale}/contact">{$LL.contact.title()}</a>
        <a href="/{$locale}/impressum">Impressum</a>
        <a href="/{$locale}/datenschutz">Datenschutz</a>
        <a href="/{$locale}/agb">AGB</a>
      </ul>
      <ul class="flex flex-col gap-2 text-sm text-gray-400 text-right sm:text-left">
        <h4 class="font-oswald uppercase text-gray-200">{$LL.footer.all_services()}</h4>
        {#each services as service}
          <a href="/{$locale}/services/{service}">{$LL.services.all[service].title()}</a>
        {/each}
      </ul>
    </div>
  </section>

  <!-- Copyright -->
  <copyright class="text-sm text-gray-500 text-center flex flex-col gap-4">
    <hr class="border-gray-500" />
    <p>Deutsch • English • Русский</p>
    <p>{$LL.footer.copyright({ year: new Date().getFullYear() })}</p>
  </copyright>
</footer>

<style lang="postcss">
  a {
    @apply hover:opacity-75 transition-opacity duration-300;
  }
</style>
