<script>
	import { LL, locale } from '$i18n/i18n-svelte';
	import ScrollDown from './ScrollDown.svelte';

	export let image = '/images/placeholder.webp';
	export let heading = 'Title';
	export let subheading = 'Subtitle';

	const handleScrollDown = () => {
		const nextSection = document.querySelector('#hero')?.nextElementSibling;
		nextSection?.scrollIntoView({ behavior: 'smooth' });
	};
</script>

<section class="relative" id="hero">
	<img class="absolute h-full w-full object-cover" src={image} alt="" />
	<span class="absolute h-full w-full bg-gray-800 opacity-75" />
	<div
		class="relative h-full flex flex-col justify-evenly items-center
		text-neutral-100 gap-12 p-4 text-center min-h-[calc(100vh_-_80px)]"
	>
		<hgroup class="flex flex-col gap-10">
			<h1 class="font-oswald text-4xl sm:text-5xl leading-normal">{heading}</h1>
			<h3 class="text-lg">{subheading}</h3>
		</hgroup>
		<a href="/{$locale}/contact" class="button-light">{$LL.contact_button()}</a>
		<ScrollDown on:click={handleScrollDown} />
	</div>
</section>
