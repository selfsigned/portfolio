<script lang="ts">
	import Projects from '$lib/projects/Projects.svelte';
	import Canvas from '$lib/threlte/Canvas.svelte';
	import TypingAnim from '$lib/animations/Typewritter.svelte';

	import { base } from '$app/paths';
	import IconGithub from '~icons/mdi/github-box';
	import IconLinkedin from '~icons/mdi/linkedin';

	export const looking_for_work = true;
	export const contact_text = 'Contact me ✍';
</script>

<svelte:head>
	<title>Xavier Perrin</title>
</svelte:head>

<!-- 3D scene -->
<div class="fixed top-0 h-full w-full">
	<Canvas />
</div>

<!-- Content -->
<div>
	<!-- P1: hero -->
	<div id="hero" class="flex h-screen flex-row">
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
				<div class="z-10">
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
				</div>
			</div>
		</div>
	</div>
	<!-- P2: Projects -->
	<div id="projects" class="flex h-screen items-center">
		<div class="card-ml mr-[2.5%] sm:mr-[35%] md:mr-[50%]">
			<Projects />
		</div>
	</div>
</div>
