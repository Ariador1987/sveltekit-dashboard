<script>
	import Nav from './Nav.svelte';
</script>

<div class="flex h-screen flex-col md:flex-row md:overflow-hidden">
	<div class="w-full flex-none md:w-64">
		<Nav />
	</div>
	<div class="flex-grow p-6 overflow-y-auto md:p-12">
		<slot />
	</div>
</div>
