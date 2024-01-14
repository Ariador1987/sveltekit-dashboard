<script lang="ts">
	import Table from './Table.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="w-full">
	<div class="flex w-full items-center justify-between">
		<h1 class="font-serif text-2xl">Invoices</h1>
	</div>
	<div class="mt-4 flex items-center justify-between">
		<!-- Search Component--> Search
		<!-- Create Invoice Component --> Create invoice
	</div>
	{#await data.streamed.invoices}
		...Loading
	{:then invoices}
		<Table {invoices} />
	{/await}

	<div class="mt-5 flex w-full justify-center">
		<!-- Pagination Component --> Pagination
	</div>
</div>
