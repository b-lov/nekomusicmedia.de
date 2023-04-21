<script>
  import Icon from '$src/lib/Icon.svelte';

  /** @type {boolean} */
  export let collapsed;
</script>

<button
  class="absolute bottom-0 left-0 -ml-12 flex aspect-square h-12 w-12 items-center
      justify-center border-l border-t bg-white hover:bg-gray-100"
  id="toggle-sidebar"
  on:click={() => {
    collapsed = !collapsed;
  }}
>
  <Icon name="arrow" size={1.2} class="{collapsed ? 'rotate-0' : 'rotate-180'} transition" />
</button>
