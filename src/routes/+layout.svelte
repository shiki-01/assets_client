<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<main class="w-[100dvw] h-[100dvh] flex flex-col items-center justify-center bg-light-blue-50">
	<Header />
	<div class="w-[100%] h-[calc(100%-60px)] flex flex-col items-center justify-center">
		{@render children()}
	</div>
</main>
