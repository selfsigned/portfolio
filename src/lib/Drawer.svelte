<!-- body slot   == your body -->
<!-- drawer slot == drawer content -->

<script lang="ts">
	export let drawerID: string;
</script>

<div class="drawer">
	<input id={drawerID} type="checkbox" class="drawer-toggle" />
	<!-- Content -->
	<div class="drawer-content">
		<slot name="body" />
	</div>
	<!-- Drawer -->
	<div class="drawer-side z-20">
		<label for={drawerID} aria-label="close sidebar" class="drawer-overlay"></label>
		<!-- Sidebar content here -->
		<slot name="sidebar" />
	</div>
</div>
