<script lang="ts">
	import Section from '$lib/Section.svelte';
	import Canvas from '$lib/threlte/Canvas.svelte';
	import Projects from '$lib/projects/Projects.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import TypingAnim from '$lib/animations/Typewritter.svelte';

	// Backend data
	export let form;

	import { Scroll } from '$lib/stores/view';

	export const looking_for_work = true;
	export const contact_text = 'Contact me ✍';

	import Scroller from '@sveltejs/svelte-scroller';

	// Give scroll progress upper / lower bounds
	let rawProgress: number, rawOffset: number, rawIndex: number;
	function scrollBounds(nbr: number) {
		return Math.min(Math.max(nbr, 0), 1);
	}
	$: $Scroll = {
		progress: scrollBounds(rawProgress),
		offset: scrollBounds(rawOffset),
		index: rawIndex
	};

	// Default 3D settings
	import type { Position, Rotation } from '$lib/stores/sections';

	const defaultPos: Position = [0, 40, 0];
	const defaultRot: Rotation = [0, 1.3];
</script>

<svelte:head>
	<title>Xavier Perrin</title>
</svelte:head>

<Scroller bind:progress={rawProgress} bind:offset={rawOffset} bind:index={rawIndex}>
	<!-- 3D scene -->
	<div slot="background" class="fixed top-0 h-screen w-full">
		<Canvas />
	</div>

	<!-- Content -->
	<div slot="foreground">
		<!-- P1: hero -->
		<Section
			class="flex h-screen flex-row"
			name="Home"
			key="hero"
			scrollEffect={true}
			targetPos={defaultPos}
			targetRot={defaultRot}
		>
			{#if looking_for_work}
				<!-- Open to work banner -->
				<div class="rotate-180 justify-start whitespace-nowrap [writing-mode:vertical-lr]">
					<!-- TODO infinite marquee (maybe)  -->
					<p class="font-bitmap text-xl md:text-3xl">
						{#each { length: 10 } as _}
							Open to Work! Let's get in touch |&nbsp;
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
					<div class="card-transparent -z-10 max-w-[85%] bg-opacity-70 p-10 md:ml-5 md:max-w-max">
						<p>
							HI, I'M&nbsp;
							<span
								class="whitespace-nowrap font-bitmap tracking-widest text-primary shadow-primary text-shadow-md md:text-5xl lg:text-7xl"
							>
								XAVIER PERRIN<br />
							</span>
						</p>
						<div class="mb-5 self-start font-mono text-3xl md:mb-4 md:text-4xl lg:text-5xl">
							&gt;<span id="title-anim"></span>
							<!-- Not FullStack (yet) -->
							<!-- <TypingAnim selector="#title-anim" text={['DevOps', 'FullStack']} /> -->
							<TypingAnim selector="#title-anim" text={['Freelance Dev']} loop={false} />
						</div>
						<h1 class="card-font-title -mb-4">INTRO</h1>
						<div class="divider divider-neutral -mb-0" />
						<p class="text-left indent-4 text-lg md:text-xl">
							Looking for a robust web app that scales effortlessly?
						</p>
						<p class="text-left text-lg md:text-xl">Need a rapid prototype or cloud support?</p>
						<p class="text-left indent-4 text-lg md:text-xl">
							With AWS certifications and a broad array of tech expertise-from cloud architecture to
							full-stack development—I’ve got you covered!
						</p>
					</div>
				</div>
			</div>
		</Section>
		<!-- P2: Projects -->
		<Section
			class="flex h-screen items-center"
			key="projects"
			targetPos={[0, 70, defaultPos[2]]}
			targetRot={[0, 0]}
		>
			<div class="card-ml mr-[2.5%] sm:mr-[35%] md:mr-[50%]">
				<Projects title="PROJECTS" />
			</div>
		</Section>
		<!-- Contact / Footer -->
		<Section key="contact" class="pt-44" targetPos={[10, 20, defaultPos[2]]} scrollEffect={true}>
			<div class="card-transparent card-ml card-mr md:max-w-[40rem]">
				<Footer action="?/contact" title="CONTACT" {form} />
			</div>
		</Section>
	</div>
</Scroller>
