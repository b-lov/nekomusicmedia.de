<button on:click class="relative w-12 pt-20 focus:outline-none focus:ring-2 focus:ring-gray-800">
	{#each [1, 2, 3] as item}
		<span
			class="absolute top-0 border-l border-b border-gray-100 opacity-0 box-border
			left-1/2 w-6 h-6 -ml-3 -rotate-45 {item === 2 && 'top-4'} {item === 3 && 'top-8'}"
		/>
	{/each}
</button>

<style lang="postcss">
	span {
		animation: blink 2s infinite;
	}
	span:nth-of-type(1) {
		animation-delay: 0s;
	}
	span:nth-of-type(2) {
		animation-delay: 0.15s;
	}
	span:nth-of-type(3) {
		animation-delay: 0.3s;
	}
	@keyframes blink {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
</style>
