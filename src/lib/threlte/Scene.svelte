<script lang="ts">
	import { T } from '@threlte/core';
	import { OrbitControls, Gizmo, Text, HTML } from '@threlte/extras';

	import Laptop from './Laptop.svelte';
</script>

<T.PerspectiveCamera makeDefault position={[10, 5, 10]} lookAt.y={0.5}>
	<OrbitControls enableDamping maxPolarAngle={1.5} />
</T.PerspectiveCamera>

<Gizmo></Gizmo>

<T.DirectionalLight position={[0, 10, 10]} intensity={20} castShadow />

<Laptop />
