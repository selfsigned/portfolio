<script lang="ts">
	import { base } from '$app/paths';
	import { sectionsArray } from '$lib/stores/sections';

	import '../app.css';
	import Drawer from '$lib/Drawer.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import Toast from '$lib/Toast.svelte';

	const drawerID = 'navbar-drawer';
	const githubURL = 'https://github.com/selfsigned';
	const linkedinURL = 'https://www.linkedin.com/in/selfsigned/';
	const title = 'Xavier Perrin';
</script>

<Drawer {drawerID}>
	<!-- Body -->
	<svelte:fragment slot="body">
		<div class="flex h-[100dvh] flex-col">
			<!-- Navbar -->
			<div class="sticky z-50 w-full max-w-full">
				<Navbar {title} {drawerID} {linkedinURL} {githubURL}></Navbar>
			</div>
			<!-- Body -->
			<slot />
			<!-- Notifications -->
			<Toast />
		</div>
	</svelte:fragment>

	<!-- Sidebar -->
	<svelte:fragment slot="sidebar">
		<ul class="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
			<li>
				<h2 class="menu-title">Navigation</h2>
				<ul>
					<li>
						{#each $sectionsArray as section}
							<a href="{base}/#{section.key}">{section.name}</a>
						{/each}
					</li>
				</ul>
				<h2 class="menu-title">Socials</h2>
				<ul>
					<li>
						<a target="_blank" rel="noopener" href={githubURL}>Github</a>
						<a target="_blank" rel="noopener" href={linkedinURL}>LinkedIn</a>
					</li>
				</ul>
			</li>
		</ul>
	</svelte:fragment>
</Drawer>
