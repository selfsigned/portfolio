<script lang="ts">
	import { addSection } from '$lib/stores/sections';
	import type { Position, Rotation } from '$lib/stores/sections';

	export let key: string;
	export let name: string = key[0].toUpperCase() + key.slice(1);
	export let targetPos: Position | undefined = undefined;
	export let targetRot: Rotation | undefined = undefined;
	export let scrollEffect: boolean | undefined = undefined;
	addSection({
		name: name,
		key: key,
		targetPos: targetPos,
		targetRot: targetRot,
		scrollEffect: scrollEffect
	});
</script>

<!-- 
  @component 
  Add an entry section, initializing the route and 3D scene props.
-->

<section id={key} {...$$restProps}>
	<slot />
</section>
