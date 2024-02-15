<script lang="ts">
	import { T } from '@threlte/core';
	import { interactivity, Text, Gizmo, OrbitControls } from '@threlte/extras';
	interactivity();

	import { Scroll } from '$lib/stores/view.ts';
	import { SheetObject, Project, Sheet, Sequence } from '@threlte/theatre';
	import Laptop from './Laptop.svelte';

	// Theatre
	import threlteProjectConfig from './threlte.theatre-project-state.json';

	$: posToProj = $Scroll.index == 0 ? Math.max(($Scroll.offset - 0.5) * 2, 0) : 1;
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

<T.DirectionalLight position={[0, 10, 10]} intensity={20} castShadow />

<T.GridHelper args={[400, 40]} />

<!-- Scroll indicator -->
<Text
	name="scroll indicator"
	fontSize={20}
	position={[-80, 60, -400]}
	text={`Progress: ${$Scroll.progress}\noffset: ${$Scroll.offset}\nindex: ${$Scroll.index}`}
/>

<Laptop />
