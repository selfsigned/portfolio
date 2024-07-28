<script lang="ts">
	import { T } from '@threlte/core';
	import { useTexture } from '@threlte/extras';

	const webpTexture = useTexture('https://selfsigned.dev/resume/resume.webp');
</script>

{#await webpTexture then value}
	<T.Mesh $${...restProps} name="resume">
		<T.MeshStandardMaterial color="white" map={value} />
		<T.BoxGeometry args={[15, 20, 10]} />
	</T.Mesh>
{/await}
