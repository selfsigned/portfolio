<script lang="ts">
	import IconLink from '~icons/mdi/link-variant';
	import IconGithub from '~icons/ph/github-logo';

	export let title: string;
	export let accordionName = 'porfolioexps';
	export let year: string | false = false;
	export let location: string | false = false;
	export let tags: Array<string> = [];
	export let links: Array<{ name: string; url: string }> = [];
	export let github: { name: string; url: string } | false = false;
</script>

<div class="collapse collapse-arrow mb-2 border border-base-300 shadow-md">
	<input type="radio" name={accordionName} />
	<div class="text-md collapse-title font-medium md:text-xl">
		<span>{title}</span>
		<span class="float-right font-light">
			{#if year !== false}{year}{/if}
			{#if year && location}
				|
			{/if}
			{#if location}{location}{/if}</span
		>
	</div>
	<div class="collapse-content">
		<div class="mb-2 flex flex-row flex-wrap gap-2">
			{#each tags as tag}
				<div class="bg-base-200 px-2 font-light">{tag}</div>
			{/each}
		</div>
		<slot />
		<div class="mt-2 flex flex-row flex-wrap gap-2 text-sm">
			{#each links as link}
				<div class="flex hover:underline">
					<IconLink /><a target="_blank" rel="noopener" href={link.url}>{link.name}</a>
				</div>
			{/each}
			{#if typeof github == 'object'}
				<div class="flex hover:underline">
					<IconGithub /><a target="_blank" rel="noopener" href={github.url}>{github.name}</a>
				</div>
			{/if}
		</div>
	</div>
</div>
