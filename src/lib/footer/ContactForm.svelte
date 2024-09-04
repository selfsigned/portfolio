<script lang="ts">
	import type { ActionData } from '../../routes/$types';
	import { contactSchema } from './ContactFormSchema';
	import { z } from 'zod';
	import { enhance } from '$app/forms';
	import { notify } from '$lib/notifications';
	import { fade } from 'svelte/transition';

	import IconSend from '~icons/mdi/email-send-outline';

	export let form: ActionData;
	export let action: string;

	// Error handling
	type inputErrors = { name?: string[]; email?: string[]; message?: string[] };
	let errors: inputErrors | undefined;
	let input = { name: '', email: '', message: '' };
	let fieldsToValidate: { name?: true; email?: true; message?: true } = {};
	$: if (form?.errors) {
		Object.keys(form.errors).forEach((key) => {
			notify((form.errors as any)[key]?.[0], true);
		});
	} else if (form?.message && form.message.length != 0) {
		input = { name: '', email: '', message: '' };

		notify(form.message, false);
		form.message = '';
	}

	function addFieldToValidate(field: keyof z.infer<typeof contactSchema>) {
		fieldsToValidate[field] = true;
	}

	$: {
		const result = contactSchema.pick(fieldsToValidate).safeParse(input);
		errors = result?.error?.flatten().fieldErrors;
	}
</script>

<form
	method="POST"
	{action}
	class="form-control mb-2"
	use:enhance={() => {
		return async ({ update }) => {
			update({ reset: false });
		};
	}}
>
	<div class="mb-8 flex gap-4">
		<label class="form-control w-full max-w-xs">
			<input
				type="text"
				name="name"
				autocomplete="name"
				placeholder="Name*"
				class="card-transparent input input-bordered w-full max-w-xs focus:outline-none"
				bind:value={input.name}
				on:focusin={() => addFieldToValidate('name')}
				required
			/>
			{#if errors?.name}
				<div class="label -mb-8" transition:fade>
					<span class="label-text-alt text-error">{errors.name}</span>
				</div>
			{/if}
		</label>
		<label class="form-control w-full max-w-xs">
			<input
				name="email"
				type="email"
				autocomplete="email"
				placeholder="Email*"
				class="card-transparent input input-bordered float-right w-full max-w-xs focus:outline-none"
				bind:value={input.email}
				on:focusin={() => addFieldToValidate('email')}
				required
			/>
			{#if errors?.email}
				<div class="label -mb-10" transition:fade>
					<span class="label-text-alt text-error">{errors.email[0]}</span>
				</div>
			{/if}
		</label>
	</div>
	<textarea
		id="text"
		name="message"
		class="card-transparent textarea textarea-bordered textarea-md mb-2 h-48 w-full"
		placeholder="Message*"
		bind:value={input.message}
		on:focusin={() => addFieldToValidate('message')}
		required
	/>
	<button class="btn rounded-2xl font-normal" type="submit">Send <IconSend /></button>
</form>
