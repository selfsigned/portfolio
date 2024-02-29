<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	export let text: string;
	export let href: string;
	export let tabOpen: boolean | undefined = undefined;
	export let iconComponent: typeof SvelteComponent;

	let tabOpenAttrs: { rel?: string; target?: string } = {};
	if (tabOpen) tabOpenAttrs.rel = 'noopener';
	if (tabOpen) tabOpenAttrs.target = '_blank';
</script>

<a {...tabOpenAttrs} {href} class="flex flex-row hover:underline"
	><svelte:component this={iconComponent} class="mb-2 mr-1 mt-[1px]" />{text}</a
>
