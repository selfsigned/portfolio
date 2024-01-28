<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	export let ramMB = 32;
	export let vgaRamMB = 2;
	export let biosURL: string;
	export let vgaBiosURL: string;
	export let cdRomURL: string;
	export let wasmPath: string;
	export let libv86Path: string;

	let muhclass = '';
	export { muhclass as class };
	export let autostart = true;

	let screenContainer: HTMLElement;
	onMount(() => {
		var emulator = (screenContainer = new V86({
			wasm_path: wasmPath,
			memory_size: ramMB * 1024 * 1024,
			vga_memory_size: vgaRamMB * 1024 * 1024,
			screen_container: screenContainer,
			bios: {
				url: biosURL
			},
			vga_bios: {
				url: vgaBiosURL
			},
			cdrom: {
				url: cdRomURL
			},
			autostart: { autostart }
		}));
		console.log(emulator);
	});
</script>

<svelte:head>
	<script src={libv86Path}></script>
</svelte:head>

<div bind:this={screenContainer}>
	<div class="whitespace-pre font-mono {muhclass}"></div>
	<canvas style="display: none"></canvas>
</div>
