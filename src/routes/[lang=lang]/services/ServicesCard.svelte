<script>
	import LL from '$i18n/i18n-svelte';

	export let title = '';
	export let teaser = '';
	export let img = '';
	export let link = '';
</script>

<div class="relative flex flex-col items-center justify-evenly p-4 shadow-lg aspect-square">
	<img class="absolute top-0 left-0 w-full h-full object-cover" src={img} alt="" />
	<span class="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-75" />
	<h2 class="relative text-gray-100 font-oswald text-4xl text-center">{title}</h2>
	<p class="relative text-gray-100 prose text-center">{teaser}</p>
	<a href={link} class="relative button-light">{$LL.services.more_button()}</a>
</div>

<style lang="postcss">
	h2 {
		hyphens: auto;
	}
</style>
