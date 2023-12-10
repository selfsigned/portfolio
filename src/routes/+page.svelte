<script lang="ts">
	import Linkedinsvg from '$lib/logo/linkedinsvg.svelte';
	import Githubsvg from '$lib/logo/githubsvg.svelte';

	export const looking_for_work = true;
	export const contact_text = 'Contact me ✍';
</script>

<svelte:head>
	<title>Xavier Perrin</title>
</svelte:head>

<!-- hero -->
<section>
	<!-- CTA / Contact me -->
	<div class="fixed right-10 top-5">
		{#if looking_for_work}
			<a
				class="text-md btn font-bitmap md:text-lg"
				href="mailto:me@selfigned.dev?subject=Super Cool Job Opportunity&body=Hi Xavier!"
			>
				{contact_text}
			</a>
		{:else}
			<a class="text-md btn font-bitmap md:text-lg" href="mailto:me@selfigned.dev?body=Hi Xavier!">
				{contact_text}
			</a>
		{/if}
	</div>
	<!-- Content -->
	<div class="flex h-screen flex-row">
		{#if looking_for_work}
			<!-- Open to work banner -->
			<div class="rotate-180 justify-start whitespace-nowrap [writing-mode:vertical-lr]">
				<!-- TODO infinite marquee -->
				<p class="font-bitmap text-xl md:text-3xl">
					Open to Work! Let's get in touch | Open to Work! Let's get in touch | Open to Work! Let's
					get in touch | Open to Work! Let's get in touch |
				</p>
			</div>
		{/if}
		<div class="grid grow grid-cols-1 md:grid-cols-2">
			<!-- About me -->
			<div class="flex h-full flex-col items-center justify-center">
				<!-- Name / Job -->
				<div>
					<p class="my-1 text-2xl md:my-5 md:text-4xl lg:text-7xl">
						HI, I'M<br />
						<span class="text:2xl font-bitmap tracking-widest text-primary md:text-5xl lg:text-8xl">
							XAVIER<br />PERRIN<br />
						</span>
						<!-- TODO typing animation -->
						<span class="font-mono"> &gt;DevOps_ </span>
					</p>
				</div>
				<!-- Socials -->
				<div class="grid grid-cols-2">
					<!-- github -->
					<a class="mr-2" href="https://github.com/selfsigned">
						<svg
							class="mr-15 md:mr-30 w-5 fill-base-content hover:fill-neutral-content md:w-10"
							viewBox="0 0 100 100 "
						>
							<Githubsvg></Githubsvg>
						</svg>
					</a>
					<!-- linkedin -->
					<a class="mr-2" href="https://linkedin.com/in/selfsigned">
						<svg
							class="mr-15 md:mr-30 w-5 fill-base-content hover:fill-neutral-content md:w-10"
							viewBox="0 0 24 24"
						>
							<Linkedinsvg></Linkedinsvg>
						</svg>
					</a>
				</div>
			</div>
			<!-- Photo -->
			<div class="grid grid-flow-col">
				<!-- Photo will go here -->
			</div>
		</div>
	</div>
</section>
