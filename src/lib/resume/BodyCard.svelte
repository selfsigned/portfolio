<script lang="ts">
	export let title: string;
</script>

<div class="card card-bordered w-full p-2 shadow-sm">
	<h2 class="mb-3 ml-4 font-vcr text-2xl tracking-wide">{title}</h2>
	<div class="ml-4">
		<slot />
	</div>
</div>
