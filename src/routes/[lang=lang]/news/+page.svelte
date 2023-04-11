<script>
  import HalfHero from '$src/lib/HalfHero.svelte';
  import LL from '$i18n/i18n-svelte';
</script>

<HalfHero
  heading={$LL.news.heading()}
  subheading={$LL.news.subheading()}
  image={$LL.news.img_hero()}
/>
