<script lang="ts">
	export let totalRevenue: { id: string; month: string; revenue: number }[];
	import { formatCurrencyToDollars } from '$lib/util';
	import * as d3 from 'd3';
	import { fade } from 'svelte/transition';

	export let width = 640;
	export let height = 400;
	export let marginTop = 20;
	export let marginRight = 20;
	export let marginBottom = 20;
	export let marginLeft = 80;

	$: x = d3
		.scaleBand()
		.domain(
			d3.groupSort(
				totalRevenue,
				([tr]) => tr.revenue,
				(tr) => tr.month
			)
		)
		.range([marginLeft, width - marginRight])
		.padding(0.2);
	$: y = d3
		.scaleLinear()
		.domain([0, d3.max(totalRevenue, (d) => d.revenue) as number])
		.range([height - marginBottom, marginTop]);

	let gx: any;
	let gy: any;
	$: d3.select(gy).call(d3.axisLeft(y).tickFormat((d: any) => formatCurrencyToDollars(d)));
	$: d3.select(gx).call(d3.axisBottom(x).tickSizeOuter(4));
</script>

<h2 class="font-serif mb-4 text-xl md:text-2xl">Recent revenue</h2>

<svg {width} {height} class="lg:mx-auto">
	<g bind:this={gx} transform="translate(0,{height - marginBottom})" />
	<g bind:this={gy} transform="translate({marginLeft}, 0)" />
	<g fill="transparent" stroke-width="1.5">
		{#each totalRevenue as tr}
			<rect
				fill="#ccc"
				x={x(tr.month)}
				y={y(tr.revenue)}
				height={y(0) - y(tr.revenue)}
				width={x.bandwidth()}
			/>
		{/each}
	</g>
</svg>

<style>
</style>
