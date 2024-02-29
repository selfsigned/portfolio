<script lang="ts">
	import ResumeBodyCard from './BodyCard.svelte';
	import SidebarSection from './SidebarSection.svelte';
	import ExperienceEntry from './ExperienceEntry.svelte';
	import SidebarProgress from './SidebarProgress.svelte';
	import SidebarSkill from './SidebarSkill.svelte';

	// assets
	import avatarURL from './avatar.webp';
	import IconWeb from '~icons/mdi/web';
	import IconEmail from '~icons/mdi/email';
	import IconPhone from '~icons/mdi/phone';
	import IconLinkedin from '~icons/mdi/linkedin';
	import IconGithub from '~icons/mdi/github-box';

	export let name: string = 'XAVIER PERRIN';
	export let title: string = 'WEB Developer / Cloud Engineer';

	// socials
	export let website: string | undefined = 'selfsigned.dev';
	export let email: string | undefined = 'me@selfsigned.dev';
	export let phone: string | undefined = undefined;
	export let linkedin: string | undefined = 'selfsigned';
	export let github: string | undefined = 'selfsigned';
</script>

<svelte:head>
	<title>Resume</title>
</svelte:head>

<div class="flex h-[29.7cm] w-[21cm] flex-row-reverse">
	<!-- Sidebar -->
	<div class="card card-bordered m-2 flex w-5/12 items-center shadow-xl">
		<div class="avatar my-4">
			<div class="mb-6 w-32 rounded-3xl shadow-xl">
				<img src={avatarURL} alt="profile" />
			</div>
		</div>

		<SidebarSection title="CONTACT">
			{#if phone}
				<a href="tel:{phone}" class="flex flex-row hover:underline"
					><IconPhone class="mb-2 mr-1 mt-[1px]" />{phone}</a
				>
			{/if}
			{#if website}
				<a
					target="_blank"
					rel="noopener"
					href="https://{website}"
					class="flex flex-row hover:underline"><IconWeb class="mb-2 mr-1 mt-[1px]" />{website}</a
				>
			{/if}
			{#if email}
				<a href="mailto:{email}" class="flex flex-row hover:underline"
					><IconEmail class="mb-2 mr-1 mt-[1px]" />me@selfsigned.dev</a
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
			{#if linkedin}
				<a
					target="_blank"
					rel="noopener"
					href="https://linkedin.com/in/{linkedin}"
					class="flex flex-row hover:underline"
					><IconLinkedin class="mb-2 mr-1" />linkedin.com/in/{linkedin}</a
				>
			{/if}
		</SidebarSection>

		<SidebarSection title="SKILLS">
			<SidebarSkill title="Languages" tags={['JavaScript', 'TypeScript', 'Python', 'C']} />
			<SidebarSkill title="Web Development" tags={['Tailwind CSS', 'Svelte', 'SvelteKit']} />
			<SidebarSkill title="Devops" tags={['AWS', 'Docker', 'Terraform', 'Ansible', 'Proxmox']} />
			<SidebarSkill
				title="Tools"
				tags={['Git', 'GitHub', 'GitLab', 'VIM', 'VS Code', 'SvelteKit', 'Tailwind CSS']}
			/>
		</SidebarSection>
		<SidebarSection title="LANGUAGES">
			<div class="mr-4">
				<SidebarProgress label="English" subLabel="Fluent (C2)" percentage="95" />
				<SidebarProgress label="French" subLabel="First language" percentage="100" />
			</div>
		</SidebarSection>
	</div>

	<!-- Body -->
	<div class="my-2 ml-2 flex w-full flex-col gap-2">
		<!-- Title -->
		<div class="card glass mt-4 w-full items-center bg-base-300 p-2 shadow-md">
			<h1 class="font-bitmap text-5xl font-bold tracking-wide">{name}</h1>
			<div class="divider m-2 mx-[38%] h-1" />
			<h2 class="text-lg">{title}</h2>
		</div>

		<ResumeBodyCard title="WORK EXPERIENCE">
			<ExperienceEntry
				position="DevOps Intern"
				company="Mixdata"
				date="01-06.2019"
				tags={['Observability', 'Backend', 'Azure', 'Java', 'ElasticSearch']}
				achivements={[
					// TODO
					'Echo park hot chicken literally chambray. Tacos banjo slow-carb tilde, messenger bag sriracha marfa bespoke.',
					'Joy Division, Talking Heads, Merzbow, Boredoms, Joy Division, Talking Heads, Merzbow, Boredoms.',
					'Echo park hot chicken literally chambray. Tacos banjo slow-carb tilde, messenger bag sriracha marfa bespoke.'
				]}
			/>
		</ResumeBodyCard>
		<ResumeBodyCard title="EDUCATION">
			<ExperienceEntry
				position="LVMH UX Academy"
				company="HEC"
				date="01.2024"
				tags={['UX', 'Prototyping', 'Project Management', 'Web', 'Bootcamp']}
				achivements={[
					'Collaborated with a dynamic team of six, comprising HEC, 42 and Strate students in crafting an innovative solution to improve the retail experience of a prestigious brand, informing our approach with customer interviews.',
					'Developed a prototype, central to our pitch, effectively showcasing our vision for an enhanced user experience.'
				]}
			/>
			<ExperienceEntry
				position="Computer Science"
				company="42 Paris"
				date="2017-2023"
				tags={['Programming', 'Infrastructure', 'Security', 'Embedded']}
				achivements={[
					'IT Architecture Expert Master-level degree (Ongoing)',
					'Developed strong self-teaching abilities by working collaboratively on a broad range of subjects.'
					// TODO star: 'Collaborated on diverse technical projects' ?
				]}
			/>
			<ExperienceEntry
				position="OPTION E"
				company="ESCP"
				date="09-12.2022"
				achivements={[
					// TODO
					'Echo park hot chicken literally chambray. Tacos banjo slow-carb tilde, messenger bag sriracha marfa bespoke.'
				]}
			/>
		</ResumeBodyCard>
		<ResumeBodyCard title="CERTIFICATIONS">
			<ExperienceEntry position="AWS Developer" company="Associate" date="12.2023" />
			<ExperienceEntry position="AWS Solutions Architect" company="Associate" date="11.2023" />
		</ResumeBodyCard>
	</div>
</div>
