<script lang="ts">
	export let label: string | undefined = undefined;
	export let subLabel: string | undefined = undefined;
	export let percentage: string = '100';
</script>

{#if label}
	<div class="flex justify-between">
		<span class="font-medium">{label}</span>
		{#if subLabel}
			<span class="font-light">{subLabel}</span>
		{/if}
	</div>
{/if}
<progress class="progress w-52" value={percentage} max="100"></progress>
