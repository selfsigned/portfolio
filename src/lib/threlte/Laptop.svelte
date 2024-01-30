<script lang="ts">
	import { T } from '@threlte/core';
	import { HTML } from '@threlte/extras';
	import { base } from '$app/paths';

	import MacDraco from './models/mac-draco.svelte';

	// V86
	import V86Component from '$lib/v86/V86.svelte';
	const wasmPath = base + '/v86/v86.wasm';
	const biosURL = base + '/v86/seabios.bin';
	const vgaBiosURL = base + '/v86/vgabios.bin';
	const cdRomURL = base + '/v86/kfs.iso';
	const ramMB = 16;
	const vgaRamMB = 2;
</script>

<MacDraco position.y={1}>
	<HTML slot="screen" position={[0, 0.04, -0.8]} rotation.x={-Math.PI / 2} transform occlude>
		<div class="h-[432px] w-[691px] scale-50 transform-gpu">
			<V86Component
				class="transform-gpu font-mono text-sm"
				{wasmPath}
				{biosURL}
				{vgaBiosURL}
				{cdRomURL}
				{ramMB}
				{vgaRamMB}
			/>
		</div>
	</HTML>
</MacDraco>
