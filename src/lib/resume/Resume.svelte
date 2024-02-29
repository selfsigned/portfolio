<script lang="ts">
	import ResumeBodyCard from './BodyCard.svelte';
	import SidebarSection from './SidebarSection.svelte';
	import ExperienceEntry from './ExperienceEntry.svelte';
	import SidebarProgress from './SidebarProgress.svelte';
	import SidebarSkill from './SidebarSkill.svelte';
	import SidebarLink from './SidebarLink.svelte';

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
	<div class="bg-card-bordered card m-2 flex w-5/12 items-center shadow-xl">
		<!-- Avatar -->
		<div class="avatar mb-6 mt-2">
			<div class="w-[6rem] rounded-3xl border border-base-300 shadow-xl">
				<img src={avatarURL} alt="profile" />
			</div>
		</div>

		<SidebarSection title="CONTACT">
			{#if phone}
				<SidebarLink iconComponent={IconPhone} href="tel:{phone}" text={phone} />
			{/if}
			{#if website}
				<SidebarLink
					iconComponent={IconWeb}
					tabOpen={true}
					href="https://{website}"
					text={website}
				/>
			{/if}
			{#if email}
				<SidebarLink iconComponent={IconEmail} href="mailto:{email}" text={email} />
			{/if}
			{#if github}
				<SidebarLink
					iconComponent={IconGithub}
					tabOpen={true}
					href="https://github.com/{github}"
					text="github.com/{github}"
				/>
			{/if}
			{#if linkedin}
				<SidebarLink
					iconComponent={IconLinkedin}
					tabOpen={true}
					href="https://linkedin.com/in/{linkedin}"
					text="linkedin.com/in/{linkedin}"
				/>
			{/if}
		</SidebarSection>

		<SidebarSection title="SKILLS">
			<SidebarSkill
				title="Programming Languages"
				tags={['JavaScript', 'TypeScript', 'Python', 'C']}
			/>
			<SidebarSkill
				title="Web Development"
				tags={['Svelte', 'SvelteKit', 'HTML', 'Tailwind CSS']}
			/>
			<SidebarSkill
				title="Devops"
				tags={[
					'AWS',
					'Docker',
					'Terraform',
					'Ansible',
					'Github Actions',
					'Proxmox',
					'GNU',
					'Linux'
				]}
			/>
			<SidebarSkill title="Tools" tags={['Git', 'GitHub', 'GitLab', 'VIM', 'VS Code']} />
		</SidebarSection>
		<SidebarSection title="LANGUAGES" titleClass="-mt-2">
			<div class="mr-4">
				<SidebarProgress label="English" subLabel="Fluent (C2)" percentage="95" />
				<SidebarProgress label="French" subLabel="First language" percentage="100" />
			</div>
		</SidebarSection>
		<SidebarSection title="INTERESTS">
			<SidebarSkill
				tags={['Street Food', 'Post_Punk', 'New-Wave Cinema', 'Art', 'Entrepreneurship', '...']}
			/>
		</SidebarSection>
	</div>

	<!-- Body -->
	<div class="my-2 ml-2 flex w-full flex-col gap-2">
		<!-- Title -->
		<div class="card glass w-full items-center bg-base-300 p-2 shadow-md">
			<h1 class="font-bitmap text-5xl font-bold tracking-wide">{name}</h1>
			<div class="divider m-2 mx-[38%] h-1" />
			<h2 class="text-lg">{title}</h2>
		</div>

		<ResumeBodyCard title="WORK EXPERIENCE">
			<ExperienceEntry
				position="DevOps Intern"
				company="Mixdata"
				date="01-06.2019"
				tags={['Observability', 'Backend', 'Java', 'ElasticSearch', 'Azure', 'OVH']}
				achivements={[
					"Enhanced the infrastructure's resiliency while developing new features across front and back-end.",
					'Designed and implemented a monitoring and metrics solution, delivering crucial business and infrastructure insights.'
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
					'Collaborated with a dynamic team of six to craft an innovative solution to enhance the retail experience of a prestigious brand, informing our approach with guerilla interviews.',
					'Crafted a prototype, central to showcasing our vision for an enhanced user experience to LVMH management.'
				]}
			/>
			<ExperienceEntry
				position="Computer Science"
				company="42 Paris"
				date="2017-2023"
				tags={['Programming', 'Infrastructure', 'Security', 'Embedded']}
				achivements={[
					'IT Architecture Expert Master-level degree. (Ongoing)',
					'Developed strong self-teaching abilities by working collaboratively on a broad range of subjects.'
				]}
			/>
			<ExperienceEntry
				position="OPTION E"
				company="ESCP"
				date="09-12.2022"
				tags={['Design Thinking', 'Art Thinking', 'Startup', 'Leadership']}
				achivements={[
					"Selectioned to take part in a top business school's Master in Management disruptive entrepreneurship specialization.",
					'Pitched a project we built in a multi-talented team using art and designing thinking methods to a jury composed of professors, domain experts and VCs.'
				]}
			/>
		</ResumeBodyCard>
		<ResumeBodyCard title="CERTIFICATIONS">
			<ExperienceEntry position="AWS Developer" company="Associate" date="12.2023" />
			<ExperienceEntry position="AWS Solutions Architect" company="Associate" date="11.2023" />
		</ResumeBodyCard>
	</div>
</div>
