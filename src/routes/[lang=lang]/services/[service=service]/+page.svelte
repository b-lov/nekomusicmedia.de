<script>
  import { LL, locale } from '$i18n/i18n-svelte';
  import HalfHero from '$lib/HalfHero.svelte';
  import ServicePageArticle from './ServiceArticle.svelte';
  import ServicePageBullets from './ServiceBullets.svelte';
  import ServicePageQuote from './ServiceQuote.svelte';
  import { page } from '$app/stores';

  /** @typedef { keyof import('$i18n/i18n-types').Translation['services']['all'] } Service */

  $: ({ service } = $page.params);
</script>

<HalfHero
  heading={$LL.services.all[/** @type {Service} */ (service)].title()}
  subheading={$LL.services.all[/** @type {Service} */ (service)].subtitle()}
  button
  link="/{$locale}/contact"
  button_text={$LL.contact_button_offer()}
  image={$LL.services.all[/** @type {Service} */ (service)].img_hero()}
/>

<main class="flex flex-col items-center max-w-4xl mx-auto sm:pb-6 sm:pt-4 gap-6">
  <section class="flex flex-row flex-wrap">
    <div class="sm:w-1/2">
      <ServicePageArticle
        iconName="info"
        text={$LL.services.all[/** @type {Service} */ (service)].par1()}
      />
    </div>

    <div class="sm:w-1/2 flex items-center justify-center mx-auto mt-6">
      <ServicePageBullets
        bullets={Object.values($LL.services.all[/** @type {Service} */ (service)].bullets)}
        title={$LL.services.products_title()}
      />
    </div>
  </section>

  <ServicePageArticle
    iconName="rocket"
    text={$LL.services.all[/** @type {Service} */ (service)].par2()}
  />

  <ServicePageQuote quote={$LL.services.all[/** @type {Service} */ (service)].quote()} />
</main>
