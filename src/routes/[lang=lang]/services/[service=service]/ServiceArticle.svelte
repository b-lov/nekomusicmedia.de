<script>
	import Icon from '$lib/Icon.svelte';

	export let iconName = '';
	export let text = '';
</script>

<article class="flex flex-col gap-4 px-4 py-8">
	<Icon name={iconName} size={3} class="fill-gray-800" />
	<p class="prose max-w-none" style="white-space: pre-line;">{text}</p>
</article>
