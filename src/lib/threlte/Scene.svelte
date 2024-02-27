<script lang="ts">
	import { onMount } from 'svelte';

	// Threlte stuff
	import { T } from '@threlte/core';
	import { Grid, interactivity, ContactShadows, Text } from '@threlte/extras';
	interactivity();

	// App stuff
	import { Scroll } from '$lib/stores/view.ts';
	import { sectionsArray } from '$lib/stores/sections';
	import type { Position, Rotation } from '$lib/stores/sections';

	// camera-controls camera
	import CameraControls from './camera-controls/CameraControls.svelte';

	let cameraControls: any;

	// Initial camera pos from the hero
	let InitialPos: Position = $sectionsArray[0]?.targetPos ?? [0, 0.00001, 0];
	let initialRot: Rotation = $sectionsArray[0]?.targetRot ?? [0, 0];
	// Camera variables
	let cameraPos = InitialPos;
	let cameraRot = initialRot;

	// Apply camera parameters depending on the section
	$: {
		if (cameraControls) {
			const section = $sectionsArray[$Scroll.index];
			console.log(section, $sectionsArray);

			let tgtPos = (section?.targetPos ?? InitialPos).slice(0);

			if (section?.scrollEffect) tgtPos[1] = Math.max($Scroll.offset * 2 * tgtPos[1], tgtPos[1]);

			// Position
			cameraControls.setPosition(...tgtPos, true);
			// Rotation
			cameraControls.rotateTo(...(section?.targetRot ?? initialRot), true);
		}
	}

	// models
	import Laptop from './Laptop.svelte';
	import Mailbox from './models/Mailbox.svelte';
	import Canvas from './Canvas.svelte';

	// Fix moving camera on home load
	onMount(() => {
		cameraControls.rotateTo(...initialRot, false);
	});
</script>

<T.PerspectiveCamera makeDefault position={cameraPos} fov={50}>
	<CameraControls
		on:create={({ ref }) => {
			cameraControls = ref;
		}}
	/>
</T.PerspectiveCamera>

<T.DirectionalLight position={[0, 10, 10]} intensity={15} />

<Grid
	receiveShadow
	sectionColor="#888888"
	cellSize={0}
	sectionSize={10}
	sectionThickness={1.2}
	gridSize={[400, 40]}
	infiniteGrid={true}
	fadeDistance={300}
></Grid>

<ContactShadows scale={10} blur={1} far={2.5} opacity={0.5} />

<!-- Scroll indicator -->
<Text
	name="scroll indicator"
	fontSize={20}
	position={[-80, 60, -400]}
	text={`Progress: ${$Scroll.progress}\noffset: ${$Scroll.offset}\nindex: ${$Scroll.index}`}
/>

<Laptop position={[0, 0.6, 10]} />
