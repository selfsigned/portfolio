<script lang="ts">
	import { variables } from '$lib/variables.ts';
	import { notify } from '$lib/notifications.ts';

	import IconSend from '~icons/mdi/email-send-outline';

	let inputName = '';
	let inputEmail = '';
	let inputMessage = '';

	let showToast = true;

	async function sendInput(e: Event) {
		// let the lambda handle validation, the browser should've checked the form for us
		await fetch(`${variables.siteApiEndpoint}/contact`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: inputName,
				email: inputEmail,
				message: inputMessage
			})
		})
			.then((response) => {
				if (response.status >= 400 && response.status < 600) {
					notify(`Request failed with code {response.status}`, true);
				}
			})
			.then(() => {
				notify('✔ Message sent');
			})
			.catch((error) => {
				notify('Something went wrong', true);
			});
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
