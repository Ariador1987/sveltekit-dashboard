<script lang="ts">
	import type { PageData } from './$types';
	import DashboardCard from '$lib/components/Cards/DashboardCard.svelte';
	import LatestInvoices from './LatestInvoices.svelte';
	import RevenueChart from './RevenueChart.svelte';
	import DashboardSkeleton from '$lib/components/Skeletons/DashboardSkeleton.svelte';
	import LatestInvoicesSkeleton from '$lib/components/Skeletons/LatestInvoicesSkeleton.svelte';

	export let data: PageData;

	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

<!-- {#await data.streamed?.tests then testsArr}
	{#await testsArr?.test1 then d1}
		<h2>{d1}</h2>
	{/await}
	{#await testsArr?.test2 then d2}
		<h2>{d2}</h2>
	{/await}
	{#await testsArr?.test3 then d3}
		<h2>{d3}</h2>
	{/await}
{/await} -->

{#await data?.streamed?.stats}
	<h1 class="mb-4 font-serif text-2xl capitalize md:text-2xl">Dashboard</h1>
	<DashboardSkeleton />
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"></div>
	<div class="mt-6 flex flex-col space-y-4 lg:flex-row">
		<div class="lg: w-3/5 grow">
			<RevenueChart
				height={innerWidth < 540 ? 380 : innerWidth < 900 ? 540 : 540}
				width={innerWidth < 540 ? 380 : innerWidth < 900 ? 540 : 540}
				totalRevenue={[]}
			/>
		</div>
		<div class="lg:w-2/5">
			<LatestInvoicesSkeleton />
		</div>
	</div>
{:then stats}
	{#if stats && stats.cardData && stats.totalRevenue && stats.latestInvoices}
		{@const { totalRevenue, latestInvoices, cardData } = stats}
		<h1 class="mb-4 font-serif text-2xl capitalize md:text-2xl">Dashboard</h1>
		<DashboardCard {cardData} />
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"></div>
		<div class="mt-6 flex flex-col space-y-4 lg:flex-row">
			<div class="lg: w-3/5 grow">
				<RevenueChart
					height={innerWidth < 540 ? 380 : innerWidth < 900 ? 540 : 540}
					width={innerWidth < 540 ? 380 : innerWidth < 900 ? 540 : 540}
					{totalRevenue}
				/>
			</div>
			<div class="lg:w-2/5">
				<LatestInvoices {latestInvoices} />
			</div>
		</div>
	{/if}
{/await}
