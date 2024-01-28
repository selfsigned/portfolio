<script lang="ts">
	import TypingAnim from '$lib/animations/Typewritter.svelte';

	import IconGithub from '~icons/mdi/github-box';
	import IconLinkedin from '~icons/mdi/linkedin';

	export const looking_for_work = true;
	export const contact_text = 'Contact me ✍';
</script>

<svelte:head>
	<title>Xavier Perrin</title>
</svelte:head>

<!-- hero -->
<div class="via-base--200 overflow-hidden bg-gradient-to-br from-base-100 from-65% to-base-300">
	<!-- Content -->
	<div class="flex h-screen flex-row">
		{#if looking_for_work}
			<!-- Open to work banner -->
			<div class="rotate-180 justify-start whitespace-nowrap [writing-mode:vertical-lr]">
				<!-- TODO infinite marquee (maybe)  -->
				<p class="font-bitmap text-xl md:text-3xl">
					{#each { length: 10 } as _}
						Open to Work! Lets get in touch |&nbsp;
					{/each}
				</p>
			</div>
		{/if}
		<div class="grid grow grid-cols-1 md:grid-cols-2">
			<!-- About me -->
			<div
				class="my-1 flex h-full flex-col items-center justify-center text-4xl
				md:my-5 lg:text-7xl"
			>
				<!-- Name / Job -->
				<div>
					<p>
						HI, I'M<br />
						<span
							class="font-bitmap tracking-widest text-primary shadow-primary text-shadow-md md:text-5xl lg:text-8xl"
						>
							XAVIER<br />PERRIN<br />
						</span>
					</p>
					<div class="mb-3 w-40 self-start font-mono md:mb-5">
						&gt;<span id="title-anim"></span>
						<!-- Not FullStack (yet) -->
						<!-- <TypingAnim selector="#title-anim" text={['DevOps', 'FullStack']} /> -->
						<TypingAnim selector="#title-anim" text={['Dev']} loop={false} />
					</div>
					<!-- Socials -->
					<div class="mr-10 flex justify-center space-x-2 md:mr-0">
						<!-- github -->
						<a target="_blank" rel="noopener" href="https://github.com/selfsigned">
							<IconGithub class="hover:text-neutral-content md:text-5xl" />
						</a>
						<!-- linkedin -->
						<a target="_blank" rel="noopener" href="https://linkedin.com/in/selfsigned">
							<IconLinkedin class="hover:text-neutral-content md:text-5xl" />
						</a>
					</div>
				</div>
			</div>
			<div class="flex flex-col justify-end">
				<!-- Put cool hero stuff here -->
			</div>
		</div>
	</div>
</div>
