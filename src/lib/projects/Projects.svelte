<script lang="ts">
	import ProjectEntry from './ProjectEntry.svelte';

	export let title: string;
</script>

<div class="card-transparent bg-300 rounded-2xl p-4 shadow-md">
	<h1 class="card-font-title mb-2">{title}</h1>
	<ProjectEntry
		title="StoreCompanion"
		year="2024"
		location="HEC"
		tags={['Web', 'Design Thinking', 'SvelteKit', 'three.js']}
		links={[{ name: 'storecompanion.xyz', url: 'https://storecompanion.xyz' }]}
		github={{ name: 'HEC-LVMH', url: 'https://github.com/selfsigned/HEC-LVMH' }}
		>HEC x LVMH x 42 Partnership</ProjectEntry
	>
	<ProjectEntry
		title="Advent of Svelte"
		year="2023"
		tags={['Web', 'Sveltekit']}
		links={[{ name: 'Live version', url: 'https://selfsigned.dev/Advent-of-Svelte-2023/' }]}
		github={{
			name: 'Advent-of-Svelte-2023',
			url: 'https://github.com/selfsigned/Advent-of-Svelte-2023/'
		}}
		>My solutions for Advent of Svelte 2023, my introduction to front-end development</ProjectEntry
	>
	<ProjectEntry
		title="Kernel From Scratch"
		year="2023"
		location="42"
		tags={['System', 'OSdev', 'C']}
		github={{ name: 'KFS', url: 'https://github.com/selfsigned/kfs' }}
		>Basic OSdev project, implemented a GDT and Interrupts</ProjectEntry
	>
</div>
