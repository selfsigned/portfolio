<script lang="ts">
	import { Canvas } from '@threlte/core';
	import { Theatre } from '@threlte/theatre';
	import Scene from '$lib/threlte/Scene.svelte';

	// dev
	import { dev } from '$app/environment';
	import { Inspector } from 'three-inspect';

	let scene;
</script>

<Canvas useLegacyLights={false}>
	<Theatre>
		<Scene bind:this={scene} />
	</Theatre>
	<!-- <Inspector /> -->
</Canvas>
