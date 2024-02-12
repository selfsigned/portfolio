<script lang="ts">
	import { notifications } from './notifications';
	import { fade } from 'svelte/transition';
</script>

{#if $notifications}
	<div class="toast toast-end">
		{#each $notifications as notification}
			<div out:fade class="alert {notification.error ? 'alert-error' : ''}">
				{notification.message}
			</div>
		{/each}
	</div>
{/if}
