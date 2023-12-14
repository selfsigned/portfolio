<script lang="ts">
	import Linkedinsvg from '$lib/logo/linkedinsvg.svelte';
	import Githubsvg from '$lib/logo/githubsvg.svelte';
	import TypingAnim from '$lib/animations/typing.svelte';

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
			<div
				class="my-1 flex h-full flex-col items-center justify-center text-2xl
				md:my-5 md:text-4xl lg:text-7xl"
			>
				<!-- Name / Job -->
				<div>
					<p>
						HI, I'M<br />
						<span class="text:2xl font-bitmap tracking-widest text-primary md:text-5xl lg:text-8xl">
							XAVIER<br />PERRIN<br />
						</span>
					</p>
					<div class="mb-3 w-40 self-start font-mono">
						&gt;<TypingAnim text={['DevOps', 'FullStack']} />
					</div>
					<!-- Socials -->
					<div class="flex justify-center space-x-2">
						<!-- github -->
						<a href="https://github.com/selfsigned">
							<svg
								class="w-5 fill-base-content hover:fill-neutral-content lg:w-10"
								viewBox="0 0 100 100 "
							>
								<Githubsvg></Githubsvg>
							</svg>
						</a>
						<!-- linkedin -->
						<a href="https://linkedin.com/in/selfsigned">
							<svg
								class="w-5 fill-base-content hover:fill-neutral-content lg:w-10"
								viewBox="0 0 24 24"
							>
								<Linkedinsvg></Linkedinsvg>
							</svg>
						</a>
					</div>
				</div>
			</div>
			<!-- Photo -->
			<div class="grid grid-flow-col">
				<!-- Photo will go here -->
			</div>
		</div>
	</div>
</section>
