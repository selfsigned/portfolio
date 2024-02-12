<script lang="ts">
	import { variables } from '$lib/variables.ts';
	import IconSend from '~icons/mdi/email-send-outline';

	let inputName = '';
	let inputEmail = '';
	let inputMessage = '';

	async function sendInput(e: Event) {
		// let the lambda handle validation, the browser should've checked the form for us
		try {
			const response = await fetch(`${variables.siteApiEndpoint}/contact`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: inputName,
					email: inputEmail,
					message: inputMessage
				})
			});
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	}
</script>

<form class="form-control mb-2" on:submit|preventDefault={sendInput}>
	<div class="mb-4 flex gap-4">
		<input
			type="text"
			id="name"
			autocomplete="name"
			placeholder="Name*"
			class="card-transparent input input-bordered w-full max-w-xs focus:outline-none"
			bind:value={inputName}
			required
		/>
		<input
			id="email"
			type="email"
			autocomplete="email"
			placeholder="Email*"
			class="card-transparent input input-bordered float-right w-full max-w-xs focus:outline-none"
			bind:value={inputEmail}
			required
		/>
	</div>
	<textarea
		id="text"
		class="card-transparent textarea textarea-bordered textarea-md mb-2 h-48 w-full"
		placeholder="Message*"
		bind:value={inputMessage}
		required
	/>
	<button class="btn rounded-2xl font-normal" type="submit">Send <IconSend /></button>
</form>
