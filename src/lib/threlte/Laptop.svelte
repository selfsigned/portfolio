<script lang="ts">
	import { T } from '@threlte/core';
	import { HTML } from '@threlte/extras';
	import { base } from '$app/paths';

	import LaptopModel from './models/Laptop.svelte';

	// V86
	import V86Component from '$lib/v86/V86.svelte';
	const wasmPath = base + '/v86/v86.wasm';
	const biosURL = base + '/v86/seabios.bin';
	const vgaBiosURL = base + '/v86/vgabios.bin';
	const cdRomURL = base + '/v86/kfs.iso';
	const ramMB = 16;
	const vgaRamMB = 2;
</script>

<LaptopModel position={[0, 0, 8]}>
	<HTML slot="screen" position={[-4.2, 0.04, -3.5]} rotation.x={-Math.PI / 2} transform occlude>
		<!-- arbitrary size to limit the focus area -->
		<div class="h-[10px] w-[10px] scale-50 transform-gpu select-none">
			<!-- <V86Component
				class="transform-gpu font-mono text-sm"
				{wasmPath}
				{biosURL}
				{vgaBiosURL}
				{cdRomURL}
				{ramMB}
				{vgaRamMB}
			/> -->
		</div>
	</HTML>
</LaptopModel>
