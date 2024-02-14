import { readable, writable } from 'svelte/store';
import { browser } from '$app/environment';

// Theme
const defaultTheme = 'dark';
const clientValue = browser ? window.localStorage.getItem('theme') ?? defaultTheme : defaultTheme;

export const themeStore = writable(clientValue);

themeStore.subscribe((val) => {
	if (browser) {
		window.localStorage.setItem('theme', val);
	}
});

// Scroll
export const scrollProgress = writable(0);
export const scrollOffset = writable(0);
export const scrollIndex = writable(0);
