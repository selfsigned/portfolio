<script lang="ts">
	export let title: string | undefined = undefined;
	export let tags: Array<string> | undefined = undefined;
</script>

<div class="mb-2">
	{#if title}
		<h4 class="font-medium">{title}</h4>
	{/if}
</div>
<div class="mb-4 mr-2 flex flex-wrap gap-2">
	{#if tags}
		{#each tags as tag}
			<div class="rounded-sm bg-base-200 px-2 text-sm font-light shadow-inner">{tag}</div>
		{/each}
	{/if}
</div>
