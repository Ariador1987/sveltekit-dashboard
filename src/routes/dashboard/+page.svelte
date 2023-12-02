<script lang="ts">
	import type { PageData } from './$types';
	import DashboardCard from '$lib/components/Cards/DashboardCard.svelte';
	import LatestInvoices from './LatestInvoices.svelte';
	import RevenueChart from './RevenueChart.svelte';

	export let data: PageData;

	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />
<!-- {#await data.streamed then}
	{#if data.streamed && data.streamed.cardData && data.streamed.totalRevenue && data.streamed.latestInvoices}
		{@const { totalRevenue, latestInvoices, cardData } = data.streamed}
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
{/await} -->

{#await data?.streamed?.stats}
	<h2>Hello world</h2>
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
