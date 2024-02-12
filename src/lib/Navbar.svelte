<script langs="ts">
	import ThemeSwitcher from '$lib/Themeswitcher.svelte';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { browser } from '$app/environment';
	import { routes } from '$lib/navigation.ts';

	import IconGithub from '~icons/mdi/github-box';
	import IconLinkedin from '~icons/mdi/linkedin';

	export let title = '';
	export let githubURL = '';
	export let linkedinURL = '';
	export let drawerID = '';
	export let themeswitcher = true;

	let theme_support = false;
	onMount(async () => {
		if (browser) {
			theme_support = CSS.supports('selector(:has(*)');
		}
	});
</script>

<div class="card-transparent card-ml card-mr fixed left-0 right-0 mt-4 h-[4rem]">
	<nav class="p0 navbar">
		<div class="flex-1">
			{#if drawerID.length > 0}
				<label for={drawerID} class="btn btn-ghost drawer-button rounded-full">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-5 w-5 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path></svg
					>
				</label>
			{/if}
			<a href={base + '/'} class="btn btn-ghost hidden w-auto rounded-full text-lg sm:flex">
				<img class="w-8" src={base + '/favicon.png'} alt="{title} logo" />
				<span class="hidden font-medium md:flex">{title}</span>
			</a>
		</div>
		<div>
			<a
				target="_blank"
				rel="noopener"
				href={linkedinURL}
				class="btn btn-ghost hidden w-auto rounded-full sm:flex"
			>
				<IconLinkedin class="text-3xl" />
			</a>
			<a
				target="_blank"
				rel="noopener"
				href={githubURL}
				class="btn btn-ghost hidden w-auto rounded-full sm:flex"
			>
				<IconGithub class="text-3xl" />
			</a>
			<!-- Mozilla sure took their time implementing :has() ... -->
			{#if themeswitcher && theme_support}
				<ThemeSwitcher class="btn btn-ghost rounded-full" />
			{/if}
			<div>
				<a
					class="text-md btn btn-primary rounded-full font-bitmap font-normal"
					href="#{routes.contact.id}">Contact me ✍</a
				>
			</div>
		</div>
	</nav>
</div>
