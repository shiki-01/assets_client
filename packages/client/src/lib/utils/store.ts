import { writable, type Writable } from 'svelte/store';

const isDarkMode: Writable<boolean> = writable(false);

export {
	isDarkMode
};