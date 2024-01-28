<script lang="ts">
	import { themeStore } from '$lib/stores/theme';
	import { get } from 'svelte/store';

	import IconThemeSelect from '~icons/gridicons/themes';

	const availableThemes = [
		{ name: 'Light', value: 'light' },
		{ name: 'Dark', value: 'dark' },
		{ name: 'Forest', value: 'forest' },
		{ name: 'CYBER', value: 'cyberpunk' }
	];

	function themeSave(event: Event) {
		const { target } = event;
		if (target) themeStore.set(target.value);
	}
</script>

<div class="dropdown">
	<div tabindex="-1" role="button" class="btn btn-ghost">
		<IconThemeSelect class="text-xl" />
		<!-- <Icon width="2rem" icon="mdi:palette" /> -->
		<svg
			width="12px"
			height="12px"
			class="inline-block h-2 w-2 fill-current opacity-60"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 2048 2048"
			><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg
		>
	</div>
	<ul tabindex="-1" class="dropdown-content z-[1] rounded-box bg-base-300 p-2 shadow-2xl">
		<li>
			<input
				type="radio"
				name="theme-dropdown"
				class="theme-controller btn btn-ghost btn-sm btn-block justify-start"
				aria-label="Auto"
				value={null}
				on:change={themeSave}
				checked={get(themeStore) === null}
			/>
			{#each availableThemes as theme}
				<li>
					<input
						type="radio"
						name="theme-dropdown"
						class="theme-controller btn btn-ghost btn-sm btn-block justify-start"
						aria-label={theme.name}
						value={theme.value}
						on:change={themeSave}
						checked={get(themeStore) == theme.value}
					/>
				</li>
			{/each}
		</li>
	</ul>
</div>
