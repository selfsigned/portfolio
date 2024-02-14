<script lang="ts">
	import { T } from '@threlte/core';
	import { interactivity, Text, Gizmo, OrbitControls } from '@threlte/extras';
	interactivity();

	import { scrollProgress, scrollOffset, scrollIndex } from '$lib/stores/view.ts';
	import Laptop from './Laptop.svelte';
</script>

<T.PerspectiveCamera
	makeDefault
	position={[0, 2 + $scrollProgress * 10, 30]}
	rotation={[-0.2, 0, 0]}
/>
<!-- <OrbitControls enableDamping maxPolarAngle={1.5} /> -->

<!-- Target ->  -->
<!-- <T.PerspectiveCamera makeDefault position={[0, 60, 0]} rotation={[-1.5, 0, 0]}> -->

<Gizmo></Gizmo>

<T.DirectionalLight position={[0, 10, 10]} intensity={20} castShadow />

<!-- <T.GridHelper args={[200, 20]} /> -->
<T.GridHelper args={[400, 40]} />

<!-- Scroll indicator -->
<Text
	name="scroll indicator"
	fontSize={20}
	position={[-80, 60, -400]}
	text={`Percent: ${$scrollProgress}\noffset: ${$scrollOffset}\nindex: ${$scrollIndex}`}
/>

<Laptop />
