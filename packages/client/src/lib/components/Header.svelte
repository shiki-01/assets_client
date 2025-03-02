<script lang="ts">
	import Icon from '@iconify/svelte';
	import { isDarkMode } from '$lib/utils/store';

	let isSyncing = $state(false);
</script>

<header class="w-full h-[86px] p-4">
	<div
		class="w-full h-full px-4 {$isDarkMode ? 'bg-light-blue-600' : 'bg-light-blue-400'} text-white shadow-1 shadow-light-blue-1000/20 flex flex-row justify-between items-center rounded-xl">
		<div class="flex flex-row gap-4 items-center">
			<button class="flex items-center cursor-pointer">
				<Icon icon={isSyncing ? "mdi:cloud-refresh-outline" : "mdi:cloud-check-outline"} class="w-8 h-8" />
			</button>
			<button class="flex items-center cursor-pointer">
				<span class="font-bold text-lg">Assets Vault</span>
			</button>
		</div>
		<div class="flex flex-row gap-4 items-center">
			<button class="flex items-center cursor-pointer {$isDarkMode ? 'bg-light-blue-400' : 'bg-light-blue-600'} shadow-1 shadow-light-blue-1000/20 p-1 rounded-full" onclick={() => $isDarkMode = !$isDarkMode}>
				<span class="{$isDarkMode ? 'light-theme' : 'dark-theme'} flex flex-row items-center gap-2 bg-white text-light-blue-600 rounded-full">
					<Icon icon="mdi:white-balance-sunny" class="w-6 h-6 p-0.5 transition-[rotate,opacity] {$isDarkMode ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}" />
					<Icon icon="mdi:moon-and-stars" class="w-6 h-6 p-0.5 transition-[rotate,opacity] {$isDarkMode ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'}" />
				</span>
			</button>
		</div>
	</div>
</header>

<style lang="postcss">
    .light-theme, .dark-theme {
        transition: clip-path 0.5s;
    }

    .light-theme {
        clip-path: circle(12px at calc(100% - 12px) 50%);
    }

    .dark-theme {
        clip-path: circle(12px at 12px 50%);
    }
</style>
