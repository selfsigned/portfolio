<script lang="ts">
	import { onMount } from 'svelte';
	import Typewriter from 'typewriter-effect/dist/core';

	export let text: Array<String> = [];
	export let cursor: boolean = true;

	let text_elem: HTMLElement | null;

	onMount(() => {
		text_elem = document?.getElementById('tgt-text');
		if (text_elem != null) {
			new Typewriter('#tgt-text', {
				strings: text,
				pauseFor: 1800,
				autoStart: true,
				loop: true,
				cursor: cursor ? '_' : ''
			});
		}
	});
</script>

<span id="tgt-text"></span>
