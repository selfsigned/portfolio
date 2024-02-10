<script lang="ts">
	import IconSend from '~icons/mdi/email-send-outline';

	let inputName = '';
	let inputEmail = '';
	let inputText = '';

	$: console.log(inputName, inputEmail, inputText);
</script>

<form class="form-control mb-2" method="POST" action="https://example.com/">
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
		bind:value={inputText}
		required
	/>
	<btn class="btn rounded-2xl font-normal" type="submit">Send <IconSend /></btn>
</form>
