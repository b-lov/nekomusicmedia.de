<script>
  import Icon from '$src/lib/Icon.svelte';
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  let visible = false;

  onMount(() => {
    const pixel = document.getElementById('pixel-to-watch');
    const observer = new IntersectionObserver((entries) => {
      visible = !entries[0].isIntersecting;
    });
    pixel && observer.observe(pixel);
    return () => pixel && observer.unobserve(pixel);
  });
</script>

<div class="absolute bottom-0" id="pixel-to-watch" />

{#if visible}
  <button
    class="fixed bottom-12 left-6 rounded-full bg-gray-800 p-4 shadow-lg hover:bg-gray-600"
    transition:fly
    on:click={() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }}
  >
    <Icon name="arrow" size={1.2} class="rotate-90 fill-slate-100" />
  </button>
{/if}
