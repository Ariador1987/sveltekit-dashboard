<script>
	import InvoiceSkeleton from './InvoiceSkeleton.svelte';
</script>

<div class="flex w-full flex-col md:col-span-4 lg:col-span-4">
	<h2 class="mb-4 font-serif text-xl capitalize md:text-2xl">Latest invoices</h2>
	<div class="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
		<div class="bg-white px-6">
			<InvoiceSkeleton />
			<InvoiceSkeleton />
			<InvoiceSkeleton />
			<InvoiceSkeleton />
		</div>
		<div class="flex items-center pb-2 pt-6">
			<!-- <RefreshCcw class="h-5 w-5 text-gray-500" /> -->
			<!-- <h3 class="ml-2 text-sm text-gray-500">{invoice.}</h3> -->
		</div>
	</div>
</div>
