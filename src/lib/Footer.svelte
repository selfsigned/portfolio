<script lang="ts">
	import { routes } from '$lib/navigation';

	const year = new Date().getFullYear();

	import IconSend from '~icons/mdi/email-send-outline';
</script>

<div class="p-4">
	<h1 class="mb-2 text-2xl">Get in touch</h1>
	<div>
		<!-- Contact form -->
		<div class="max-w-[40rem]">
			<div class="mb-4 flex gap-4">
				<input
					type="text"
					placeholder="Name"
					autocomplete="name"
					class="card-transparent input input-bordered w-full max-w-xs"
				/>
				<input
					type="email"
					placeholder="Email"
					autocomplete="email"
					class="card-transparent input input-bordered float-right w-full max-w-xs"
				/>
			</div>
			<textarea
				class="card-transparent textarea textarea-bordered mb-2 w-full"
				placeholder="Message"
			/>
			<btn class="btn rounded-2xl font-normal">Send <IconSend /></btn>
		</div>
		<div class="divider h-0" />
		<!-- Navigation and about -->
		<div>
			<div class="flex flex-row flex-wrap gap-2">
				{#each Object.entries(routes) as [_, route]}
					<a class="text-md hover:underline" href="/#{route.id}">{route.name}</a>
				{/each}
				<!-- Supplemental stuff -->
				<div class="flex flex-row place-self-end font-light">
					<span>©Xavier Perrin, {year}</span>
					<a href="https://github.com/selfsigned/selfsigned.github.io">, v{__COMMIT_INFO__}</a>
				</div>
			</div>
		</div>
	</div>
</div>
