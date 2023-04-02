<script>
	export let heading = 'heading';
	export let image = '/images/placeholder.webp';
	export let text = 'lorem ipsum dolor sit amet consectetur adipisicing elit.';
</script>

<article class="shadow-xl sm:w-1/2">
	<div class="relative flex items-center justify-center p-6 bg-blue-300">
		<img src={image} alt="" class="absolute top-0 left-0 w-full h-full object-cover" />
		<span class="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-75" />
		<h2 class="relative text-gray-100 font-oswald text-3xl">{heading}</h2>
	</div>
	<p class="p-4 prose">{text}</p>
</article>
