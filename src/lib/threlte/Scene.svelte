<script lang="ts">
	import { T } from '@threlte/core';
	import { interactivity, Text, Gizmo, OrbitControls } from '@threlte/extras';
	interactivity();

	import { Scroll } from '$lib/stores/view.ts';
	import { SheetObject, Project, Sheet, Sequence } from '@threlte/theatre';
	import Laptop from './Laptop.svelte';

	// Theatre
	import threlteProjectConfig from './threlte.theatre-project-state.json';

	import { onMount } from 'svelte';

	import { spring } from 'svelte/motion';
	$: springOffset = spring(Math.max(($Scroll.offset - 0.5) * 2, 0), {
		precision: 0.0000001,
		damping: 0.95,
		stiffness: 0.1
	});

	$: posToProj = $Scroll.index == 0 ? $springOffset : 1;
	$: console.log($Scroll.offset, posToProj);
</script>

<Project name="threlte" config={{ state: threlteProjectConfig }}>
	<Sheet name="hero_to_proj">
		<Sequence position={posToProj}>
			<SheetObject key="camera" let:Transform>
				<Transform>
					<T.PerspectiveCamera makeDefault position={[0, 4, 30]} rotation={[-0.2, 0, 0]} />
				</Transform>
			</SheetObject>
		</Sequence>
	</Sheet>
</Project>

<Gizmo />
<!-- Target ->  -->
<!-- <T.PerspectiveCamera makeDefault position={[0, 60, 0]} rotation={[-1.5, 0, 0]}> -->

<T.DirectionalLight position={[0, 10, 10]} intensity={20} castShadow />

<!-- <T.GridHelper args={[200, 20]} /> -->
<T.GridHelper args={[400, 40]} />

<!-- Scroll indicator -->
<Text
	name="scroll indicator"
	fontSize={20}
	position={[-80, 60, -400]}
	text={`Progress: ${$Scroll.progress}\noffset: ${$Scroll.offset}\nindex: ${$Scroll.index}`}
/>

<Laptop />
