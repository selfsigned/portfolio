<script lang="ts">
	import { routes } from '$lib/navigation.ts';
	import { variables } from '$lib/variables.ts';
	import ContactForm from './ContactForm.svelte';

	// Copyright / Commit
	const year = new Date().getFullYear();
</script>

<div class="p-4">
	<h1 class="card-font-title mb-2">{routes.contact.name.toUpperCase()}</h1>
	<div>
		<!-- Contact form -->
		<div class="max-w-[40rem]">
			{#if variables.siteApiEndpoint}
				<ContactForm />
			{/if}
		</div>
		<div class="divider h-0" />
		<!-- Navigation and about -->
		<div>
			<div class="flex flex-row flex-wrap gap-2">
				{#each Object.entries(routes) as [_, route]}
					<a class="text-md hover:underline" href="/#{route.id}">{route.name}</a>
				{/each}
				<!-- Supplemental stuff -->
				<div class="flex flex-row flex-wrap place-self-end font-light">
					<span>©Xavier Perrin, {year},</span>
					<a href="https://github.com/selfsigned/selfsigned.github.io">
						v:{variables.commitInfo}, API: {variables.siteApiEndpoint}</a
					>
				</div>
			</div>
		</div>
	</div>
</div>
