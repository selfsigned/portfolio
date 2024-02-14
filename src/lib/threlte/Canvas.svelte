<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene from '$lib/threlte/Scene.svelte';

	// dev
	import { dev } from '$app/environment';
	import { Inspector } from 'three-inspect';

	let scene;
</script>

<Canvas useLegacyLights={false}>
	<Scene bind:this={scene} />
	<Inspector />
</Canvas>
