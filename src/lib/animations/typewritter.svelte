<script lang="ts">
	import { onMount } from 'svelte';
	import Typewriter from 'typewriter-effect/dist/core';

	export let selector: string; // CSS selector
	export let text: Array<string>;
	export let cursor: boolean = true;

	let text_elem: HTMLElement | null;

	onMount(() => {
		text_elem = document?.querySelector(selector);
		if (text_elem != null) {
			new Typewriter(text_elem, {
				strings: text,
				pauseFor: 1800,
				autoStart: true,
				loop: true,
				cursor: cursor ? '_' : ''
			});
		}
	});
</script>
