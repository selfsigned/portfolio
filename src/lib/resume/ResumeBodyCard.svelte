<script lang="ts">
	export let title: string;
</script>

<div class="card card-bordered w-full p-2 shadow-md">
	<h2 class="mb-1 ml-4 font-vcr text-xl tracking-wide">{title}</h2>
	<div class="ml-4">
		<slot />
	</div>
</div>
