<script lang="ts">
	import type { ActionData } from '../../routes/$types';
	import { base } from '$app/paths';
	import { sectionsArray } from '$lib/stores/sections';
	import { variables } from '$lib/variables';
	import ContactForm from './ContactForm.svelte';

	export let title: string;
	export let action: string;
	export let form: ActionData;

	// Copyright
	const year = new Date().getFullYear();
</script>

<div class="p-4">
	<h1 class="card-font-title mb-4">{title}</h1>
	<div>
		<!-- Contact form -->
		<div class="max-w-[40rem]">
			<ContactForm {action} {form} />
		</div>
		<!-- <div class="divider" /> -->
		<div class="grid max-w-[40rem] place-items-center">
			<span class="font-vcr text-xl">Or send me an email</span>
			<a href="mailto:me@selfsigned.dev" class="underline">me@selfsigned.dev</a>
		</div>

		<div class="divider h-0" />
		<!-- Navigation and about -->
		<div>
			<div class="flex flex-row flex-wrap gap-2">
				{#each $sectionsArray as section}
					<a class="text-md hover:underline" href="{base}/#{section.key}">{section.name}</a>
				{/each}
				<!-- Supplemental stuff -->
				<div class="flex flex-row flex-wrap place-self-end font-light">
					<span>©Xavier Perrin, {year},</span>
					<a
						href="https://github.com/selfsigned/selfsigned.github.io/commit/{variables.commitInfo}"
						class="hover:underline"
					>
						{variables.commitInfo}</a
					>
				</div>
			</div>
		</div>
	</div>
</div>
