import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const defaultTheme = 'dark';
const clientValue = browser ? window.localStorage.getItem('theme') ?? defaultTheme : defaultTheme;

export const themeStore = writable(clientValue);

themeStore.subscribe((val) => {
	if (browser) {
		window.localStorage.setItem('theme', val);
	}
});
