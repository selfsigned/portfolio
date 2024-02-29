<script lang="ts">
	export let title: string;
</script>

<h3 class="font-vcr text-lg">{title}</h3>
<div class="divider mx-[38%] mb-2 mt-1 h-0" />
<div class="mb-8 ml-4 self-start text-sm">
	<slot />
</div>
