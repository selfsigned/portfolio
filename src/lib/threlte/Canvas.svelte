<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene from '$lib/threlte/Scene.svelte';

	// dev
	import { dev } from '$app/environment';
	import { Studio } from '@threlte/theatre';
	// import { Inspector } from 'three-inspect';

	let scene;
</script>

<Studio enabled={dev} />

<Canvas useLegacyLights={false}>
	<Scene bind:this={scene} />
	<!-- <Inspector /> -->
</Canvas>
