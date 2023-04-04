<script>
	export let heading = '';
	export let subheading = '';
	export let button = false;
	export let link = '';
	export let button_text = '';
	export let image = '';
</script>

<article class="min-h-[40vh] relative flex flex-col items-center justify-center p-4 py-10 gap-20">
	<img class="absolute w-full h-full object-cover" src={image} alt="" />
	<span class="absolute w-full h-full bg-gray-800 opacity-75" />
	<hgroup class="relative text-center flex flex-col gap-6 max-w-3xl">
		<h1 class="text-gray-100 font-oswald text-4xl sm:text-5xl">{heading}</h1>
		<h3 class="text-gray-100 text-lg">{subheading}</h3>
	</hgroup>
	{#if button}
		<a href={link} class="button-light relative">{button_text}</a>
	{/if}
</article>

<style lang="postcss">
	h1 {
		hyphens: auto;
	}
</style>
