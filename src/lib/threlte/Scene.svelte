<script lang="ts">
	// Threlte stuff
	import { T } from '@threlte/core';
	import { interactivity, Text, Gizmo, OrbitControls } from '@threlte/extras';
	import { SheetObject, Project, Sheet, Sequence } from '@threlte/theatre';
	interactivity();

	// App stuff
	import { routes } from '$lib/navigation.ts';
	import { Scroll } from '$lib/stores/view.ts';

	// models
	import Laptop from './Laptop.svelte';
	import Mailbox from './models/Mailbox.svelte';

	// Theatre
	import threlteProjectConfig from './threlte.theatre-project-state.json';

	$: posToProj = $Scroll.index == 0 ? Math.max(($Scroll.offset - 0.5) * 2, 0) : 1;
	$: viewingContact = routes.contact.index === $Scroll.index;
</script>

<!-- TODO refactor -->

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

	{#if viewingContact}
	<Sheet name="contact_section">
		<SheetObject key="mailbox" let:Transform>
			<SheetObject key="camera" let:Transform>
				<Transform>
					<T.PerspectiveCamera makeDefault position={[0, 4, 30]} rotation={[-0.2, 0, 0]} />
				</Transform>
			</SheetObject>
			<SheetObject key="camera" let:Transform>
			<Transform>
				<Mailbox />
			</Transform>
		</SheetObject>
	</Sheet>
	{/if}
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
