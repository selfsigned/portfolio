<script lang="ts">
	import ResumeBodyCard from './ResumeBodyCard.svelte';

	// assets
	import avatarURL from './avatar.webp';
	import IconEmail from '~icons/mdi/email';
	import IconPhone from '~icons/mdi/phone';
	import IconLinkedin from '~icons/mdi/linkedin';
	import IconGithub from '~icons/mdi/github-box';
	import IconDate from '~icons/mdi/calendar';
	import IconCompany from '~icons/mdi/office-building-marker-outline';

	export let name: string;
	export let title: string;

	// socials
	export let email: string | undefined = undefined;
	export let phone: string | undefined = undefined;
	export let linkedin: string | undefined = undefined;
	export let github: string | undefined = undefined;
</script>

<svelte:head>
	<title>Resume</title>
</svelte:head>

<div class="flex h-[29.7cm] w-[21cm] flex-row-reverse">
	<!-- Sidebar -->
	<div class="card card-bordered m-2 flex w-5/12 items-center shadow-xl">
		<div class="avatar mt-4">
			<div class="mb-4 w-32 rounded-3xl shadow-xl">
				<img src={avatarURL} alt="profile" />
			</div>
		</div>
		<h3 class="font-vcr text-lg">CONTACT</h3>
		<div class="divider mx-[38%] mb-2 mt-1 h-0" />
		<div class="ml-4 self-start text-sm">
			{#if linkedin}
				<a
					target="_blank"
					rel="noopener"
					href="https://linkedin.com/in/{linkedin}"
					class="flex flex-row hover:underline"
					><IconLinkedin class="mb-2 mr-1" />linkedin.com/in/{linkedin}</a
				>
			{/if}
			{#if github}
				<a
					target="_blank"
					rel="noopener"
					href="https://github.com/{github}"
					class="flex flex-row hover:underline"
					><IconGithub class="mb-2 mr-1 mt-[1px]" />github.com/{github}</a
				>
			{/if}
			{#if email}
				<a href="mailto:{email}" class="flex flex-row hover:underline"
					><IconEmail class="mb-2 mr-1 mt-[1px]" />me@selfsigned.dev</a
				>
			{/if}
			{#if phone}
				<a href="tel:{phone}" class="flex flex-row hover:underline"
					><IconPhone class="mb-2 mr-1 mt-[1px]" />{phone}</a
				>
			{/if}
		</div>
	</div>

	<!-- Body -->
	<div class="my-2 ml-2 flex w-full flex-col gap-2">
		<!-- Title -->
		<div class="card glass mt-4 w-full items-center bg-base-300 p-2 shadow-md">
			<h1 class="font-bitmap text-4xl tracking-wide">{name}</h1>
			<div class="divider m-2 mx-[38%] h-1" />
			<h2 class="text-lg">{title}</h2>
		</div>

		<ResumeBodyCard title="WORK EXPERIENCE">
			<div class="flex w-full justify-between text-lg">
				<h3 class="font-medium">Resume Artist</h3>
				<div class="flex">
					<div class="flex">
						<IconDate />199X
					</div>
					|
					<div class="flex">
						<IconCompany /><span class="font-light">Hell</span>
					</div>
				</div>
			</div>
			<div class="divider my-0 h-0" />
			<p class="text-md">
				<span class="font-vcr">»</span>
				Cool stuff here.
				<br />
				<span class="font-vcr">»</span>
				With the STAR method.
			</p>
		</ResumeBodyCard>
		<ResumeBodyCard title="EDUCATION"></ResumeBodyCard>
		<ResumeBodyCard title="CERTIFICATIONS"></ResumeBodyCard>
	</div>
</div>
