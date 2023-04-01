<script>
	import { page } from '$app/stores';

	export let link = '';
	export let text = '';
	export let right_align = false;
</script>

<a
	href={link}
	class="flex items-center {right_align ? 'justify-end' : ' justify-center '} p-4 group"
>
	<span
		class="relative font-oswald text-lg uppercase text-gray-800
      after:content-[''] group-hover:after:scale-x-110 whitespace-nowrap"
		class:currently-visiting={$page.url.pathname.includes(link)}
	>
		<!-- class:currently-visiting={$page.url.pathname === link} -->
		{text}
	</span>
</a>

<style lang="postcss">
	span:after {
		@apply absolute w-full h-1 bg-gray-800 left-0 top-[30px] transition duration-200 ease-in-out
    transform scale-x-0 bottom-2;
	}
	.currently-visiting:after {
		@apply scale-x-110;
	}
</style>
