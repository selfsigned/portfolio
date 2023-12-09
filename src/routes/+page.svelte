<script lang="ts">
	import Linkedinsvg from '$lib/logo/linkedinsvg.svelte';
	import Githubsvg from '$lib/logo/githubsvg.svelte';
</script>

<svelte:head>
	<title>Xavier Perrin</title>
</svelte:head>

<!-- hero -->
<section>
	<!-- CTA / Call me -->
	<div class="fixed top-5 right-10">
		<a class="btn font-bitmap text-md md:text-lg" href="mailto:me@selfigned.dev"> Contact me ✍ </a>
	</div>
	<!-- Content -->
	<div class="grid grid-cols-1 md:grid-cols-2 h-screen">
		<!-- About me -->
		<div class="h-full flex flex-col items-center justify-center">
			<!-- Name / Job -->
			<div>
				<p class="text-2xl my-1 md:my-5 md:text-4xl lg:text-7xl">
					HI, I'M<br />
					<span class="font-bitmap text-primary tracking-widest text:2xl md:text-5xl lg:text-8xl">
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
						class="fill-base-content hover:fill-neutral-content mr-15 w-5 md:mr-30 md:w-10"
						viewBox="0 0 100 100 "
					>
						<Githubsvg></Githubsvg>
					</svg>
				</a>
				<!-- linkedin -->
				<a class="mr-2" href="https://linkedin.com/in/selfsigned">
					<svg
						class="fill-base-content hover:fill-neutral-content mr-15 w-5 md:mr-30 md:w-10"
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
</section>
