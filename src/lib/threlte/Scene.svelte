<script lang="ts">
	// Threlte stuff
	import { T } from '@threlte/core';
	import { Grid, interactivity, ContactShadows, Text } from '@threlte/extras';
	interactivity();

	// App stuff
	import { routes } from '$lib/navigation.ts';
	import { Scroll } from '$lib/stores/view.ts';

	// camera-controls camera
	import CameraControls from './camera-controls/CameraControls.svelte';
	type CameraPos = [x: number, y: number, z: number];
	type CameraRot = [azimuthAngle: number, polarAngle: number];

	const initialCameraPos: CameraPos = [0, 10, 30];
	const initialCameraRot: CameraRot = [0, 0.2];

	let cameraControls: any;
	let cameraPos: CameraPos = [...initialCameraPos];
	let cameraRot: CameraRot = [...initialCameraRot];

	// change camera position depending on section PoC
	$: {
		// TODO read this from some object, maybe make a section component that'd write to a route store?
		if (cameraControls) {
			switch ($Scroll.index) {
				case 0:
					// Add scroll offset
					cameraPos[1] = Math.max($Scroll.offset * 2 * initialCameraPos[1], initialCameraPos[1]);
					console.log(cameraPos[1], initialCameraPos[1]);
					cameraControls.setPosition(...cameraPos, true);
					break;
				case 1:
					cameraControls.setPosition(0, 50, cameraPos[2], true);
					cameraControls.rotateTo(0, 0, true);
					break;
				case 2:
					cameraControls.rotateTo(...cameraRot, true);
					cameraControls.setPosition(20, 30, cameraPos[2], true);
					break;
				default:
					cameraControls.rotateTo(...cameraRot, true);
					cameraControls.setPosition(...cameraPos, true);
			}
		}
	}

	// models
	import Laptop from './Laptop.svelte';
	import Mailbox from './models/Mailbox.svelte';
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

<Laptop position={[0, 0.6, 0]} />
