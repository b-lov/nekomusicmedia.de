<script>
  import AboutCard from './AboutCard.svelte';

  import { LL } from '$i18n/i18n-svelte';
  import Hero from '$lib/Hero.svelte';
  import Icon from '$lib/Icon.svelte';

  const examples =
    /** @type {Array.<keyof import('$i18n/i18n-types').Translation['about']['texts']>} */
    (Object.keys($LL.about.texts));
</script>

<Hero
  image={$LL.about.img_hero()}
  heading={$LL.about.heading()}
  subheading={$LL.about.subheading()}
/>

<main class="flex flex-col items-stretch gap-8 px-4 py-10 max-w-5xl mx-auto">
  {#each examples as example}
    <section class="flex flex-col items-center gap-6 sm:flex-row sm:even:flex-row-reverse">
      <AboutCard
        heading={$LL.about.texts[example].title()}
        image={$LL.about.texts[example].img()}
        text={$LL.about.texts[example].text_card()}
      />
      <div class="flex flex-col gap-6 p-4 sm:w-1/2">
        <Icon class="fill-gray-800" size={3} name={example} />
        <p class="prose">{$LL.about.texts[example].text()}</p>
      </div>
    </section>
  {/each}
</main>
