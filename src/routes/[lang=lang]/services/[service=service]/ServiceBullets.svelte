<script>
  //
  export let title = '';
  /** @type { (() => String)[] } */
  export let bullets;
</script>

<article class="flex flex-col gap-8 p-6 bg-gray-800 text-gray-100 w-fit shadow-lg min-w-[300px]">
  <h2 class="text-4xl font-oswald">{title}</h2>
  <ul class="flex flex-col gap-2">
    {#each bullets as bullet}
      <li>
        {bullet()}
      </li>
    {/each}
  </ul>
</article>

<style lang="postcss">
  li {
    &:before {
      content: '✓';
      @apply mr-4 text-3xl;
    }
  }
</style>
