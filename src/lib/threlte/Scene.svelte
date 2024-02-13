<script lang="ts">
	import { T } from '@threlte/core';
	import { interactivity, Gizmo, OrbitControls } from '@threlte/extras';
	interactivity();

	import Laptop from './Laptop.svelte';
	import { BoxGeometry } from 'three';
</script>

<T.PerspectiveCamera makeDefault position={[0, 14, 30]} rotation={[-0.2, 0, 0]}>
	<!-- <OrbitControls enableDamping maxPolarAngle={1.5} /> -->
</T.PerspectiveCamera>

<Gizmo></Gizmo>

<T.DirectionalLight position={[0, 10, 10]} intensity={20} castShadow />

<!-- <T.GridHelper args={[200, 20]} /> -->
<T.GridHelper args={[400, 40]} />

<Laptop />
