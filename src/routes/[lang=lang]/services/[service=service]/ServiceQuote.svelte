<script>
  import Icon from '$lib/Icon.svelte';

  export let quote = '';
</script>

<div class="relative p-12 max-w-2xl">
  <Icon name="quote" class="absolute fill-gray-300 -top-3 left-4 opacity-60" size={9} />
  <h2 class="relative text-4xl text-gray-500 font-oswald leading-relaxed text-right">{quote}</h2>
</div>

<style lang="postcss">
  h2 {
    hyphens: auto;
  }
</style>
