<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import { isDarkMode } from '$lib/utils/store';

	let { children } = $props();
</script>

<main class="w-[100dvw] h-[100dvh] flex flex-col items-center justify-center {$isDarkMode ? 'bg-light-blue-1200' : 'bg-light-blue-50'}">
	<Header />
	<div class="w-[100%] h-[calc(100%-60px)] flex flex-col items-center justify-center">
		{@render children()}
	</div>
	<div class="w-full h-[42px] px-6 flex flex-row items-center justify-between">
		<p class="text-sm text-light-blue-600">/</p>
		<p class="text-sm text-light-blue-600">powered by shiki-01</p>
	</div>
</main>

<style lang="postcss">
    :global(body) {
        font-family: 'Noto Sans JP',
        -apple-system,
        BlinkMacSystemFont,
        sans-serif;
    }

		:global(*) {
				transition: background-color 0.3s, color 0.3s;
		}
</style>