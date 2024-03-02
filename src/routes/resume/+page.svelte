<script lang="ts">
	import Resume from '$lib/resume/Resume.svelte';
	import html2canvas from 'html2canvas';
	import { jsPDF } from 'jspdf';
	import { onMount } from 'svelte';

	let resumeElem: HTMLElement;

	onMount(() => {
		console.log(resumeElem);
		if (resumeElem) {
			html2canvas(resumeElem, {
				onrendered: function (canvas) {
					console.log(canvas);
				}
			});
		}
	});
</script>

<svelte:head>
	<title>Resume</title>
</svelte:head>

<!-- Navbar padding -->
<div class="mt-24" />

<div class="ml-auto mr-auto">
	<div bind:this={resumeElem}>
		<Resume />
	</div>
</div>
