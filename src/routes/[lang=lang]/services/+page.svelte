<script>
  import { LL, locale } from '$i18n/i18n-svelte';
  import Hero from '$lib/Hero.svelte';
  import ServiceCard from './ServiceCard.svelte';

  const services =
    /** @type {Array.<keyof import('$i18n/i18n-types').Translation['services']['all']>} */
    (Object.keys($LL.services.all));
</script>

<svelte:head>
  <title>{$LL.services.title()}</title>
</svelte:head>

<Hero
  image={$LL.services.img_hero()}
  heading={$LL.services.heading()}
  subheading={$LL.services.subheading()}
/>
<main class="flex flex-row flex-wrap px-2 py-8 justify-center max-w-6xl mx-auto">
  {#each services as service}
    <div class="sm:w-1/2 lg:w-1/3 p-1">
      <ServiceCard
        title={$LL.services.all[service].title()}
        teaser={$LL.services.all[service].teaser()}
        link="/{$locale}/services/{service}"
        img={$LL.services.all[service].img_card()}
      />
    </div>
  {/each}
</main>
