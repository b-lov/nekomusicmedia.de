<script>
  import LL from '$i18n/i18n-svelte';
  import HalfHero from '$lib/HalfHero.svelte';
  import Form from './Form.svelte';
  import GoogleMap from './GoogleMap.svelte';
</script>

<HalfHero
  heading={$LL.contact.heading()}
  subheading={$LL.contact.subheading()}
  image={$LL.contact.img_hero()}
/>

<main class="flex flex-col items-center gap-8 px-4 py-8 max-w-4xl mx-auto">
  <Form />

  <hgroup class="flex flex-col items-center gap-2">
    <h2 class="font-oswald text-4xl leading-normal">{$LL.contact.contact_data.heading()}</h2>
    <p class="prose text-center" style="white-space: pre-line">
      {$LL.contact.contact_data.subheading()}
    </p>
  </hgroup>

  <GoogleMap />

  <address
    class="font-oswald font-light not-italic text-xl text-gray-500 leading-normal tracking-wide"
    style="white-space: pre-line"
  >
    {@html $LL.contact.contact_data.address()}
  </address>
</main>
