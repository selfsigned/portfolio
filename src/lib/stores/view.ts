import { readable, writable } from 'svelte/store';
import { browser } from '$app/environment';

// Theme
const defaultTheme = 'dark';
const clientValue = browser ? (window.localStorage.getItem('theme') ?? defaultTheme) : defaultTheme;

export const themeStore = writable(clientValue);

themeStore.subscribe((val) => {
	if (browser) {
		window.localStorage.setItem('theme', val);
	}
});

// Scroll
type Scroll = { progress: number; index: number; offset: number };
export const Scroll = writable<Scroll>({ progress: 0, index: 0, offset: 0 });
