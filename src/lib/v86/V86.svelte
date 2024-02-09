<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import * as _ from '$lib/vendor/libv86.js';

	export let ramMB = 32;
	export let vgaRamMB = 2;
	export let biosURL: string;
	export let vgaBiosURL: string;
	export let cdRomURL: string = '';
	export let wasmPath: string;

	let muhclass = '';
	export { muhclass as class };
	export let autostart = true;

	let screenContainer: HTMLElement;
	onMount(() => {
		var emulator = new V86({
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
		});
		console.log(emulator);

		// r/w memory POC, TODO wrappers for struct / write
		function writeMem() {
			let mem_nbr = 0xdead;
			let payload = new Uint8Array([mem_nbr, mem_nbr >> 8]);
			emulator.write_memory(payload, 0x1347);
			console.log('Memory written');
		}
		function readMem() {
			let mem = emulator.read_memory(0x1347, 16);
			console.log(mem);
		}

		setTimeout(writeMem, 4000);
		setTimeout(readMem, 4500);
	});
</script>

<div bind:this={screenContainer}>
	<div class="whitespace-pre font-mono {muhclass}"></div>
	<canvas style="display: none"></canvas>
</div>
