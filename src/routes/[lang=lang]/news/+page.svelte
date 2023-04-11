<script>
  import HalfHero from '$src/lib/HalfHero.svelte';
  import LL from '$i18n/i18n-svelte';
  import NewsCard from './NewsCard.svelte';

  export let data;
</script>

<HalfHero
  heading={$LL.news.heading()}
  subheading={$LL.news.subheading()}
  image={$LL.news.img_hero()}
/>

<main class="flex flex-row flex-wrap px-4 py-12 gap-8 justify-center max-w-7xl mx-auto">
  {#each data.insta as post}
    <NewsCard
      img={post.thumbnail_url}
      caption={post.caption}
      link={post.permalink}
      date={post.timestamp}
    />
  {/each}
</main>
